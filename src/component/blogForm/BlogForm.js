import React, { useState, useEffect, useCallback, useRef } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import plusIcon from '../../assets/plusIcon.png';
import 'react-quill/dist/quill.snow.css';
import { useCategoriesQuery, useCreateCategoryMutation, useDeleteCategoryMutation } from '../../generated/Category.tsx';
import DeleteIcon from '../../assets/deleteIcon.png';
import { useCreateBlogMutation, useGetBlogBySlugQuery, useUpdateBlogMutation } from '../../generated/Blogs.tsx';
const ReactQuill = React.lazy(() => import('react-quill'));
Modal.setAppElement('#root');

const CategorySelect = ({ categories, selectedCategory, onSelect, onDelete, hasError }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const getBorderClass = () => {
        return hasError  ? "border-red-500" : "border-gray-300";
    };
    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                // className="w-full border border-gray-300 p-2 rounded bg-white text-left flex justify-between items-center text-sm"
                className={`w-full border p-2 rounded bg-white text-left flex justify-between items-center text-sm ${getBorderClass()}`}
                onClick={() => setShowDropdown(prev => !prev)}
            >
                <span>
                    {categories.find(c => c.id === selectedCategory)?.category_name || 'Select a category'}
                </span>
                {showDropdown ? (
                    <svg className="w-4 h-4 text-gray-500 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 15l-7-7-7 7" />
                    </svg>
                ) : (
                    <svg className="w-4 h-4 text-gray-500 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                )}            
            </button>

            {showDropdown && (
                <div className="absolute z-10 w-full bg-white border mt-1 rounded shadow">
                    {categories.map(cat => (
                        <div
                            key={cat.id}
                            className="flex justify-between items-center px-3 py-2 hover:bg-gray-100"
                        >
                            <span
                                className="cursor-pointer flex-1"
                                onClick={() => {
                                    onSelect(cat.id);
                                    setShowDropdown(false);
                                }}
                            >
                                {cat.category_name}
                            </span>
                            <button
                                type="button"
                                onClick={() => onDelete(cat.id)}
                                className="text-red-500 hover:text-red-700 ml-2 text-sm"
                            >
                                <img src={DeleteIcon} alt={''} className="object-contain w-4 h-4 rounded-t" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const BlogModal = ({ isOpen, onClose, initialData, onSave, refetchCategories }) => {
    const { data: categoriesData } = useCategoriesQuery();
    const [createBlogMutation] = useCreateBlogMutation();
    const [updateBlogMutation] = useUpdateBlogMutation();

    const { data: blogData } = useGetBlogBySlugQuery({
        variables: {
            blog_slug: initialData?.blog_slug || ''
        },
        skip: !initialData?.blog_slug
    });

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        image:'',
        category: '',
        metaHeader: '',
        metaDescription: '',
        ownerName: '',
        ownerProfilePic: '',
        ownerPosition: '',
        mainDescription: [{ title: '', description: '' }]
    });

    const [newCategory, setNewCategory] = useState('');
    const [showAddCategory, setShowAddCategory] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    const [validationErrors, setValidationErrors] = useState({
        title: false,
        category: false,
        metaHeader: false,
        metaDescription: false,
        ownerName: false,
        ownerPosition: false,
        image: false,
        ownerProfilePic: false,
        mainDescription: []
    });

    const [createCategoryMutation] = useCreateCategoryMutation();
    const [deleteCategoryMutation] = useDeleteCategoryMutation();

    useEffect(() => {
        setValidationErrors(prev => ({
            ...prev,
            mainDescription: formData.mainDescription.map(() => ({
                title: false,
                description: false
            }))
        }));
    }, [formData.mainDescription.length]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    useEffect(() => {
        if (blogData?.getBlogBySlug) {
            const blog = blogData.getBlogBySlug;
            try {
                const [metaHeader = '', metaDescription = ''] = blog.meta_data?.split('|||') || [];
                const [ownerName = '', ownerProfilePic = '', ownerPosition = ''] = blog.author_info?.split('|||') || [];
                let mainDescription = [];
                try {
                    mainDescription = blog.section_data ? JSON.parse(blog.section_data) : [];
                } catch (e) {
                    console.error('Error parsing section_data:', e);
                    mainDescription = [{ title: '', description: '' }];
                }
                setFormData({
                    title: blog.blog_title || '',
                    slug: blog.blog_slug || '',
                    image: blog.basic_info || '',
                    category: blog.category_id, 
                    metaHeader,
                    metaDescription,
                    ownerName,
                    ownerProfilePic,
                    ownerPosition,
                    mainDescription
                });
            } catch (error) {
                console.error('Error parsing initial data:', error);
            }
        } else if (!initialData) {
            setFormData({
                title: '',
                slug: '',
                image: '',
                category: '',
                metaHeader: '',
                metaDescription: '',
                ownerName: '',
                ownerProfilePic: '',
                ownerPosition: '',
                mainDescription: [{ title: '', description: '' }]
            });
        }
    }, [blogData, initialData]);

    const validateField = (field, value, index = null) => {
        const safeValue = String(value || '').trim();
        if (index !== null) {
            setValidationErrors(prev => {
                const newDescErrors = [...prev.mainDescription];
                newDescErrors[index] = {
                    ...newDescErrors[index],
                    [field]: !safeValue
                };
                return { ...prev, mainDescription: newDescErrors };
            });
        } else {
            setValidationErrors(prev => ({
                ...prev,
                [field]: !safeValue
            }));
        }
    };

    const generateSlug = (title) => {
        if (!title) return '';
        let baseSlug = title
            .toLowerCase()
            .replace(/[^\w\s]/g, '')
            .replace(/\s+/g, '-')
            .trim();
        // let finalSlug = baseSlug;
        // let counter = 1;
        // const suffixes = ['new', 'latest', 'updated', 'current'];
        // while (posts?.some(post => post.slug === finalSlug)) {
        //     if (counter <= suffixes.length) {
        //         finalSlug = `${baseSlug}-${suffixes[counter - 1]}`;
        //     } else {
        //         finalSlug = `${baseSlug}-${counter - suffixes.length}`;
        //     }
        //     counter++;
        // }
        // return finalSlug;
        return baseSlug;
    };

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        validateField('title', newTitle);
        setFormData({
            ...formData,
            title: newTitle,
            slug: generateSlug(newTitle)
        });
    };

    const handleMainDescriptionChange = useCallback((index, field, value) => {
        validateField(field, value, index);
        setFormData(prev => {
            const updatedDescriptions = [...prev.mainDescription];
            updatedDescriptions[index][field] = value;
            return { ...prev, mainDescription: updatedDescriptions };
        });
    }, []);

    const addDescriptionSection = () => {
        setFormData({
            ...formData,
            mainDescription: [...formData.mainDescription, { title: '', description: '' }]
        });
        setValidationErrors(prev => ({
            ...prev,
            mainDescription: [...prev.mainDescription, { title: false, description: false }]
        }));
    };

    const removeDescriptionSection = (index) => {
        if (formData.mainDescription.length > 1) {
            const updatedDescriptions = [...formData.mainDescription];
            updatedDescriptions.splice(index, 1);
            setFormData({ ...formData, mainDescription: updatedDescriptions });
            setValidationErrors(prev => {
                const newDescErrors = [...prev.mainDescription];
                newDescErrors.splice(index, 1);
                return { ...prev, mainDescription: newDescErrors };
            });
        }
    };

    const addCategory = async () => {
        const trimmed = newCategory.trim();
        if (!trimmed) return;
        try {
            const { data } = await createCategoryMutation({
                variables: { category_name: trimmed }
            });
            if (data?.createCategory) {
                setNewCategory('');
                setShowAddCategory(false);
                await refetchCategories();
            }
        } catch (err) {
            console.error('Error creating category:', err);
        }
    };

    const handleDeleteCategory = async (id) => {
        if (!id) return;
        try {
            await deleteCategoryMutation({ variables: { id } });
            if (formData.category === id) {
                setFormData({ ...formData, category: '' });
            }
            await refetchCategories();
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };

    const handleImageUpload = async (field, e) => {
        const file = e.target.files[0];
        if (!file) return;
        setIsUploading(true);
        const token = localStorage.getItem("token");
        try {
            const formData = new FormData();
            formData.append('image', file);
            const response = await axios.post(
                'https://api.tryzensolution.com/upload',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        ...(token && { Authorization: `Bearer ${token}` }),
                    }
                }
            );
            setFormData(prev => ({
                ...prev,
                [field]: response.data.file_url
            }));
        } catch (error) {
            console.error('Upload failed:', error);
        } finally {
            setIsUploading(false);
        }
    };

    const uploadImgToServer = async (file) => {
        try {
            const formData = new FormData();
            formData.append('image', file);
            const token = localStorage.getItem("token");
            const response = await axios.post(
                'https://api.tryzensolution.com/upload',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        ...(token && { Authorization: `Bearer ${token}` }),
                    }
                }
            );
            return response.data.file_url;
        } catch (error) {
            console.error('Upload failed:', error);
            return null;
        }
    };

    const replaceBase64WithImgUrls = async (mainDescription) => {
        if (!Array.isArray(mainDescription)) {
            console.error('Expected mainDescription to be an array, got:', typeof mainDescription);
            return mainDescription;
        }
        const processedDescriptions = await Promise.all(
            mainDescription.map(async (section) => {
                if (typeof section.description !== 'string') {
                    return section;
                }
                const base64Regex = /data:image\/(png|jpeg|jpg);base64,[^"]+/g;
                const matches = section.description.match(base64Regex);
                if (!matches) return section;
                const uniqueMatches = [...new Set(matches)];
                const replacements = await Promise.all(
                    uniqueMatches.map(async (base64) => {
                        try {
                            const base64Response = await fetch(base64);
                            const blob = await base64Response.blob();
                            const file = new File([blob], 'uploaded-image.png', { type: blob.type });
                            const url = await uploadImgToServer(file);
                            return { base64, url };
                        } catch (error) {
                            console.error('Error processing image:', error);
                            return { base64, url: null };
                        }
                    })
                );
                let updatedDescription = section.description;
                for (const { base64, url } of replacements) {
                    if (url) {
                        updatedDescription = updatedDescription.split(base64).join(url);
                    }
                }
                return {
                    ...section,
                    description: updatedDescription
                };
            })
        );
        return processedDescriptions;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requiredFields = ['title', 'category', 'metaHeader', 'metaDescription', 'ownerName', 'ownerPosition'];
        const newErrors = { ...validationErrors };
        let isValid = true;
        requiredFields.forEach(field => {
            const value = String(formData[field] || '').trim();
            newErrors[field] = !value;
            if (newErrors[field]) isValid = false;
        });
        const descErrors = formData.mainDescription.map((section, index) => {
            const titleError = !String(section.title || '').trim();
            const descError = !String(section.description || '').trim();
            if (titleError || descError) isValid = false;
            return { title: titleError, description: descError };
        });
        setValidationErrors({
            ...newErrors,
            image: !formData.image,
            ownerProfilePic: !formData.ownerProfilePic,
            mainDescription: descErrors
        });
        if (!isValid) {
            return;
        }
        try {
            const processedDescriptions = await replaceBase64WithImgUrls(formData.mainDescription);
            const variables = {
                basic_info: formData.image || "",
                meta_data: `${formData.metaHeader || ""}|||${formData.metaDescription || ""}`,
                author_info: `${formData.ownerName || ""}|||${formData.ownerProfilePic || ""}|||${formData.ownerPosition || ""}`,
                section_data: JSON.stringify(processedDescriptions || []),
                blog_title: formData.title,
                blog_slug: formData.slug,
                category_id: parseInt(formData.category),
                comment_data: "[]"
            };
            if (initialData) {
                await updateBlogMutation({
                    variables: {
                        id: initialData.id,
                        ...variables
                    }
                });
            } else {
                await createBlogMutation({
                    variables: variables
                });
            }
            await refetchCategories();
            onSave();
            onClose();
        } catch (error) {
            console.error("Failed to save blog:", error);
        }
    };
    
    const handleClose = () => {
        setFormData({
            title: '',
            slug: '',
            category: '',
            metaHeader: '',
            metaDescription: '',
            ownerName: '',
            ownerProfilePic: '',
            ownerPosition: '',
            mainDescription: [{ title: '', description: '' }]
        });
        onClose();
    };

    const getInputClass = (field, index = null) => {
        const baseClass = "w-full p-2 border rounded text-sm";
        const errorClass = "border-red-500";
        if (index !== null) {
            return `${baseClass} ${validationErrors.mainDescription[index]?.[field] ? errorClass : "border-gray-300"}`;
        } else {
            return `${baseClass} ${validationErrors[field] ? errorClass : "border-gray-300"}`;
        }
    };

    if (!isOpen) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            shouldCloseOnOverlayClick={false}
            contentLabel="Blog Editor"
            className="relative z-50 p-[10px] w-full"
            overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center z-50"
        >
            <form onSubmit={handleSubmit} className="p-4 max-w-full bg-white rounded-lg max-h-[95vh] overflow-y-auto space-y-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">{initialData ? 'Edit Blog Post' : 'Create New Blog Post'}</h2>
                    <button
                        onClick={handleClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-3">Basic Information</h3>
                    <div className="grid grid-cols-1 gap-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Title*</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={handleTitleChange}
                                className={getInputClass('title')}
                                onBlur={() => validateField('title', formData.title)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                            <input
                                type="text"
                                value={formData.slug}
                                readOnly
                                className={getInputClass('slug')}
                                onBlur={() => validateField('title', formData.slug)}
                                disabled
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Blog Image</label>
                            <div className="flex items-center space-x-4 my-4">
                                {formData.image && (
                                    <img 
                                        src={formData.image} 
                                        alt="Cover preview" 
                                        className="h-16 w-16 object-cover rounded"
                                    />
                                )}
                                <label className="cursor-pointer">
                                    <span className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm">
                                        {formData.image ? 'Change Image' : 'Upload Image'}
                                    </span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageUpload('image', e)}
                                        disabled={isUploading}
                                        className="hidden"
                                    />
                                </label>
                            </div>
                            {validationErrors.image && (
                                <p className="mt-1 text-xs text-red-500">Please upload a Blog Image</p>
                            )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <div className='flex items-center gap-2'>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
                                    <button
                                        type="button"
                                        onClick={() => setShowAddCategory(!showAddCategory)}
                                        title='Add Category'
                                    >
                                        <img 
                                            src={plusIcon}
                                            alt="Add category"
                                            className="w-4 h-4"
                                        />
                                    </button>
                                </div>
                                <CategorySelect
                                    categories={categoriesData?.categories || []}
                                    selectedCategory={formData.category}
                                    onSelect={(id) => {
                                        setFormData(prev => ({ ...prev, category: id }));
                                        validateField('category', id);
                                    }}
                                    onDelete={(id) => {
                                        setCategoryToDelete(id);
                                        setShowDeleteConfirm(true);
                                    }}
                                    hasError={validationErrors.category} 
                                />
                            </div>
                            {showAddCategory && (
                                <div className="flex items-end">
                                    <div className="flex-1 mr-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Add New Category</label>
                                        <input
                                            type="text"
                                            value={newCategory}
                                            onChange={(e) => setNewCategory(e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded text-sm"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={addCategory}
                                        className="px-3 py-2 bg-[#0F54FF] text-white rounded hover:bg-blue-600 text-sm"
                                    >
                                        Add
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-3">Meta Information</h3>
                    <div className="space-y-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Meta Header*</label>
                            <input
                                type="text"
                                value={formData.metaHeader}
                                onChange={(e) => {
                                    setFormData({ ...formData, metaHeader: e.target.value });
                                    validateField('metaHeader', e.target.value);
                                }}
                                className={getInputClass('metaHeader')}
                                onBlur={() => validateField('metaHeader', formData.metaHeader)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description*</label>
                            <textarea
                                value={formData.metaDescription}
                                onChange={(e) => {
                                    setFormData({ ...formData, metaDescription: e.target.value });
                                    validateField('metaDescription', e.target.value);
                                }}
                                className={getInputClass('metaDescription')}
                                rows="3"
                                onBlur={() => validateField('metaDescription', formData.metaDescription)}
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-3">Author Information</h3>
                    <div className="grid grid-cols-1 gap-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Author Name*</label>
                            <input
                                type="text"
                                value={formData.ownerName}
                                onChange={(e) => {
                                    setFormData({ ...formData, ownerName: e.target.value });
                                    validateField('ownerName', e.target.value);
                                }}
                                className={getInputClass('ownerName')}
                                onBlur={() => validateField('ownerName', formData.ownerName)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Author Position*</label>
                            <input
                                type="text"
                                value={formData.ownerPosition}
                                onChange={(e) => {
                                    setFormData({ ...formData, ownerPosition: e.target.value });
                                    validateField('ownerPosition', e.target.value);
                                }}
                                className={getInputClass('ownerPosition')}
                                onBlur={() => validateField('ownerPosition', formData.ownerPosition)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
                            <div className="flex items-center space-x-4 my-4">
                                {formData.ownerProfilePic && (
                                    <img 
                                        src={formData.ownerProfilePic} 
                                        alt="Profile preview" 
                                        className="h-12 w-12 rounded-full object-cover"
                                    />
                                )}
                                <label className="cursor-pointer">
                                    <span className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm">
                                        {formData.ownerProfilePic ? 'Change' : 'Upload'}
                                    </span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageUpload('ownerProfilePic', e)}
                                        disabled={isUploading}
                                        className="hidden"
                                    />
                                </label>
                            </div>
                            {validationErrors.ownerProfilePic && (
                                <p className="mt-1 text-xs text-red-500">Please upload a Profile Picture</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold">Content Sections</h3>
                    </div>

                    {formData.mainDescription.map((section, index) => (
                        <div key={index} className="pb-2 last:border-b-0 last:pb-0">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="text-md font-medium">Section {index + 1}</h4>
                                {formData.mainDescription.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeDescriptionSection(index)}
                                        className="text-red-500 hover:text-red-700 text-sm"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>

                            <div className="space-y-3">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Section Title*</label>
                                    <input
                                        type="text"
                                        value={section.title}
                                        onChange={(e) => handleMainDescriptionChange(index, 'title', e.target.value)}
                                        className={getInputClass('title', index)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Content*</label>
                                    <div className={validationErrors.mainDescription[index]?.description ? "border border-red-500 rounded" : ""}>
                                        <ReactQuill 
                                            theme="snow" 
                                            value={section.description}
                                            onChange={(value) => handleMainDescriptionChange(index, 'description', value)}
                                            modules={{
                                                toolbar: [
                                                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                                    ['bold', 'italic', 'underline', 'strike'],
                                                    [
                                                        { list: 'ordered' },
                                                        { list: 'bullet' },
                                                    ],
                                                    [{'align': []}],
                                                    ['link', 'image'],
                                                    ['clean'],
                                                ],
                                            }}
                                            formats={[
                                                'header',
                                                'bold',
                                                'italic',
                                                'underline',
                                                'strike',
                                                'list',
                                                'bullet',
                                                'align',
                                                'link',
                                                'image',
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addDescriptionSection}
                        className="px-3 py-2 bg-[#0F54FF] text-white rounded-md hover:bg-blue-600 text-sm"
                    >
                        Add Section
                    </button>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                    <button
                        type="button"
                        onClick={handleClose}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-[#FF6802] text-white rounded-md hover:bg-orange-600"
                    >
                        Save Blog Post
                    </button>
                </div>
            </form>
            {showDeleteConfirm && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="relative bg-white p-6 rounded shadow-lg max-w-sm w-full">
                        <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
                        <p className="text-sm mb-4">Are you sure you want to delete this category?</p>
                        <button
                            onClick={() => {
                                setShowDeleteConfirm(false);
                                setCategoryToDelete(null);
                            }}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => {
                                    setShowDeleteConfirm(false);
                                    setCategoryToDelete(null);
                                }}
                                className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 text-sm"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={async () => {
                                    await handleDeleteCategory(categoryToDelete);
                                    setShowDeleteConfirm(false);
                                    setCategoryToDelete(null);
                                }}
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default BlogModal;