import React, { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Modal from 'react-modal';
import plusIcon from '../../assets/plusIcon.png';
import 'react-quill/dist/quill.snow.css';
const ReactQuill = React.lazy(() => import('react-quill'));
Modal.setAppElement('#root');

const BlogModal = ({ isOpen, onClose, initialData }) => {
    
    const loadData = (key, defaultValue) => {
        try {
            const data = localStorage.getItem(key);
            if (!data) return defaultValue;
            const parsed = JSON.parse(data);
            if (key === 'posts') {
                return parsed.map(post => ({
                    ...post,
                    image: post.image?.startsWith('blob:') ? '' : post.image,
                    ownerProfilePic: post.ownerProfilePic?.startsWith('blob:') ? '' : post.ownerProfilePic
                }));
            } 
            return parsed;
        } catch (error) {
            console.error(`Error loading ${key}:`, error);
            return defaultValue;
        }
    };

     const [formData, setFormData] = useState({
        id: uuidv4(),
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

    const [categories, setCategories] = useState(loadData('categories', []));
    const [posts, setPosts] = useState(loadData('posts', []));
    const [newCategory, setNewCategory] = useState('');
    const [showAddCategory, setShowAddCategory] = useState(false);

    const [validationErrors, setValidationErrors] = useState({
        title: false,
        category: false,
        metaHeader: false,
        metaDescription: false,
        ownerName: false,
        ownerPosition: false,
        mainDescription: []
    });

    useEffect(() => {
        setValidationErrors(prev => ({
            ...prev,
            mainDescription: formData.mainDescription.map(() => ({
                title: false,
                description: false
            }))
        }));
    }, [formData.mainDescription.length]);
    
    const validateField = (field, value, index = null) => {
        if (index !== null) {
            setValidationErrors(prev => {
                const newDescErrors = [...prev.mainDescription];
                newDescErrors[index] = {
                    ...newDescErrors[index],
                    [field]: !value.trim()
                };
                return { ...prev, mainDescription: newDescErrors };
            });
        } else {
            setValidationErrors(prev => ({
                ...prev,
                [field]: !value.trim()
            }));
        }
    };

    const saveData = (key, data) => {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error(`Error saving ${key}:`, error);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    useEffect(() => {
        saveData('categories', categories);
    }, [categories]);

    useEffect(() => {
        saveData('posts', posts);
    }, [posts]);

    const generateSlug = (title) => {
        if (!title) return '';
        let baseSlug = title
            .toLowerCase()
            .replace(/[^\w\s]/g, '')
            .replace(/\s+/g, '-')
            .trim();
        let finalSlug = baseSlug;
        let counter = 1;
        const suffixes = ['new', 'latest', 'updated', 'current'];
        while (posts?.some(post => post.slug === finalSlug)) {
            if (counter <= suffixes.length) {
                finalSlug = `${baseSlug}-${suffixes[counter - 1]}`;
            } else {
                finalSlug = `${baseSlug}-${counter - suffixes.length}`;
            }
            counter++;
        }
        return finalSlug;
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

    const addCategory = () => {
        if (newCategory && !categories?.some(cat => cat.name === newCategory)) {
            const categorySlug = newCategory
                .toLowerCase()
                .replace(/[^\w\s]/g, '')
                .replace(/\s+/g, '-')
                .trim();
            const newCategoryObj = {
                name: newCategory,
                slug: categorySlug
            };
            setCategories([...categories, newCategoryObj]);
            setNewCategory('');
        }
    };

    useEffect(() => {
        if (initialData) {
            const formattedMainDescription = initialData.mainDescription?.length > 0 ? initialData.mainDescription  : [{ title: '', description: '' }];
            setFormData({
                ...initialData,
                mainDescription: formattedMainDescription 
            });
        } else {
            setFormData({
                id: uuidv4(),
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
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        const basicFields = ['title', 'category', 'metaHeader', 'metaDescription', 'ownerName', 'ownerPosition'];
        const newErrors = { ...validationErrors };
        
        basicFields.forEach(field => {
            newErrors[field] = !formData[field].trim();
            if (newErrors[field]) isValid = false;
        });
        
        const descErrors = formData.mainDescription.map((section, index) => {
            const titleError = !section.title.trim();
            const descError = !section.description.trim();
            if (titleError || descError) isValid = false;
            return { title: titleError, description: descError };
        });
        
        newErrors.mainDescription = descErrors;
        setValidationErrors(newErrors);
        
        if (!isValid) return;

        if (initialData) {
            const updatedPosts = posts.map(post => 
                post.id === initialData.id ? formData : post
            );
            setPosts(updatedPosts);
            localStorage.setItem('posts', JSON.stringify(updatedPosts));
        } else {
            const postToSave = { ...formData, id: uuidv4() };
            setPosts([...posts, postToSave]);
            localStorage.setItem('posts', JSON.stringify([...posts, postToSave]));
        }
        onClose();
    };

    const handleClose = () => {
        setFormData({
            id: uuidv4(),
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

    const handleImageUpload = (field, e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            setFormData({ 
                ...formData, 
                [field]: event.target.result
            });
        };
        reader.readAsDataURL(file);
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
                                        className="hidden"
                                    />
                                </label>
                            </div>
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
                                <select
                                    value={formData.category}
                                    onChange={(e) => {
                                        setFormData({ ...formData, category: e.target.value });
                                        validateField('category', e.target.value);
                                    }}
                                    className={getInputClass('category')}
                                    onBlur={() => validateField('category', formData.category)}
                                >
                                    <option value="">Select a category</option>
                                    {Array.isArray(categories) && categories.map((cat, index) => {
                                        const slug = cat?.slug || `cat-${index}`;
                                        const name = cat?.name || 'Unnamed';
                                        return (
                                            <option key={slug} value={slug}>{name}</option>
                                        );
                                    })}
                                </select>
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
                                        className="hidden"
                                    />
                                </label>
                            </div>
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
        </Modal>
    );
};

export default BlogModal;