import { useState, useEffect} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Blogs.css'
import BlogModal from '../blogForm/BlogForm';
import { useNavigate } from 'react-router-dom';
import placeholder from '../../assets/placeholder.png';
import { FreeMode, Grid, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/mousewheel";
import 'swiper/css/grid';
import 'swiper/css/navigation';
import EditIcon from '../../assets/editIcon.png';
import DeleteIcon from '../../assets/deleteIcon.png';
import Modal from 'react-modal';
import { useDeleteBlogMutation, useGetAllBlogsQuery } from '../../generated/Blogs.tsx';
import { useCategoriesQuery } from '../../generated/Category.tsx';
import LoadingIcon from '../../LoadingIcon.js';
import usePageMeta from '../../usePageMeta.js';
Modal.setAppElement('#root');

const ArrowNextIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="20"
    {...props}
  >
    <path
      d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"
      fill="currentColor"
      stroke="currentColor"
    />
  </svg>
);

const ArrowPrevIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="20"
    {...props}
  >
    <path
      d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"
      fill="currentColor"
      stroke="currentColor"
    />
  </svg>
);

function LoadingScreen() {
    const calcWidth =() =>{
        if (window.innerWidth < 640) {
            return window.innerWidth
        } else if (window.innerWidth < 1024) {
            return window.innerWidth * 0.5
        } else {
            return window.innerWidth * 0.25
        }
    }
  
    return (
        <div className="loading-screen">
            <div className="img-dots-container h-auto" style={{width:calcWidth()+'px', padding:"32px", marginBottom:"64px"}} >
                <LoadingIcon />
                <div className="loading-dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        </div>
    );
}

export default function Blogs() {
    usePageMeta('Grow with Smart Ordering', 'Discover expert insights, tips, and trends on maximizing restaurant revenue through custom online ordering systems, personalized customer experiences, and digital growth strategies.');
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [editBlog, setEditBlog] = useState(null);
    const [blogToDelete, setBlogToDelete] = useState(null);
    const [swiperStates, setSwiperStates] = useState({});
    const navigate = useNavigate();

    const { data: blogsData, loading: blogsLoading, refetch: refetchBlogs } = useGetAllBlogsQuery()
    const { data: categoriesData, loading: categoriesLoading, refetch: refetchCategories } = useCategoriesQuery();
    const [deleteBlogMutation] = useDeleteBlogMutation();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    useEffect(() => {
        const handleStorageChange = () => {
            const token = localStorage.getItem('token');
            setIsAuthenticated(!!token);
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            const element = document.getElementById(`category-${selectedCategory.id}`);
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }, [selectedCategory]);

    useEffect(() => {
        if (!!blogToDelete) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [blogToDelete]);

    const blogs = blogsData?.getAllBlogs || [];
    const categories = categoriesData?.categories || [];

    const blogsByCategory = blogs.reduce((acc, blog) => {
        if (!blog.category_id) return acc;
        const categoryObj = categories.find(cat => cat.id === blog.category_id);
        if (!categoryObj) return acc;
        if (!acc[blog.category_id]) {
            acc[blog.category_id] = {
                category: categoryObj,
                blogs: []
            };
        }
        acc[blog.category_id].blogs.push(blog);
        return acc;
    }, {});

    const handleBlogClick = (slug) => {
        navigate(`/blogs/${slug}`);
    };

    const handleDeleteBlog = async () => {
        try {
            await deleteBlogMutation({
                variables: {
                    id: blogToDelete.id
                }
            });
            setBlogToDelete(null);
            await refetchBlogs();
        } catch (error) {
            console.error("Failed to delete blog:", error);
        }
    };

    const handleSaveBlog = () => {
        setIsEditorOpen(false);
        setEditBlog(null);
        refetchBlogs(); 
    };

    if (blogsLoading || categoriesLoading) return <div><LoadingScreen /></div>;

    return (
        <div>
            <Header />
            <div className={`px-2 md:px-6 lg:px-10 xl:px-12 pb-10 pt-16 responsive-container`}>
                <div className="bg-white py-4">
                    {isAuthenticated && (
                        <div className='flex items-center justify-between mb-6'>
                            <div>
                                <h1 className="text-2xl font-bold blog-heading-content">Categories</h1>
                            </div>
                            <div className="px-3 py-2 bg-[#FF6802] text-white rounded blog-content">
                                <button onClick={() => setIsEditorOpen(true)}>
                                    Create Blog
                                </button>
                            </div>
                        </div>
                    )}
                    <div className='relative flex-wrap pt-2 blog-content'>
                        <Swiper
                            spaceBetween={8}
                            slidesPerView={'auto'}
                            freeMode={true}
                            pagination={{ clickable: true }}
                            modules={[Mousewheel, FreeMode, Grid]}
                            mousewheel={{ forceToAxis: true }}
                            className="!pb-2"
                        >
                            <SwiperSlide className='!w-auto'>
                                <div
                                    onClick={() => {
                                        setSelectedCategory(null);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className={`px-4 py-1 rounded-full whitespace-nowrap cursor-pointer ${
                                        !selectedCategory ? 'bg-[#FF6802] text-white' : 'bg-gray-200'
                                    }`}
                                >
                                    All
                                </div>
                            </SwiperSlide>

                            {categories.map(category => {
                                const categoryBlogs = blogsByCategory[category.id] || [];
                                if (categoryBlogs.length === 0) return null;
                                return (
                                    <SwiperSlide key={category.id} className='!w-auto'>
                                        <div
                                            onClick={() => setSelectedCategory(category)}
                                            className={`px-4 py-1 rounded-full whitespace-nowrap cursor-pointer ${
                                                selectedCategory?.id === category.id
                                                    ? 'bg-[#FF6802] text-white'
                                                    : 'bg-gray-200'
                                            }`}
                                        >
                                            {category.category_name}
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>

                <div className="space-y-2">
                    {categories.map(category => {
                        const categoryBlogs = blogsByCategory[category.id] || [];
                        const numberOfRows = categoryBlogs.length >= 16 ? 2 : 1;
                        if (categoryBlogs.length === 0) return null;
                        return (
                            <section
                                key={category.id}
                                id={`category-${category.id}`}
                                className="pt-4"
                            >
                                <h1 className="text-lg sm:text-2xl font-semibold mb-2 blog-heading-content">{category.category_name}</h1>
                                <div className="relative">
                                    <Swiper
                                        onSwiper={(swiper) => {
                                            setSwiperStates((prev) => ({
                                                ...prev,
                                                [category.id]: {
                                                    swiper,
                                                    isBeginning: swiper.isBeginning,
                                                    isEnd: swiper.isEnd
                                                }
                                            }));
                                            swiper.on('slideChange', () => {
                                                setSwiperStates((prev) => ({
                                                    ...prev,
                                                    [category.id]: {
                                                        swiper,
                                                        isBeginning: swiper.isBeginning,
                                                        isEnd: swiper.isEnd
                                                    }
                                                }));
                                            });
                                        }}
                                        spaceBetween={15}
                                        slidesPerView={'auto'}
                                        freeMode={true}
                                        pagination={{ clickable: true }}
                                        modules={[Mousewheel, FreeMode, Grid, Navigation]}
                                        mousewheel={{ forceToAxis: true }}
                                        grid={{
                                            rows: numberOfRows,
                                            fill: 'row', 
                                        }}
                                        navigation={{
                                            nextEl: `.swiper-button-next-${category.id}`,
                                            prevEl: `.swiper-button-prev-${category.id}`,
                                        }}
                                    >
                                        {categoryBlogs.blogs.map(blog => (
                                            <SwiperSlide key={blog.id} style={{ width: 'auto', flexShrink: 0 }}>
                                                <div className="cursor-pointer text-center w-[36vw] sm:w-[30vw] md:w-[26vw] lg:w-[22vw] xl:w-[18vw]" onClick={() => handleBlogClick(blog.blog_slug)}>
                                                    <div className='relative flex flex-col border cursor-pointer justify-center items-center rounded mt-3 bg-white shadow-lg hover:bg-gray-100'>
                                                        {isAuthenticated && (
                                                            <div className="absolute bg-white/60 px-2 py-1 top-1 right-1 flex gap-2 z-10 rounded">
                                                                <div 
                                                                    onClick={(e) => { 
                                                                        e.stopPropagation(); 
                                                                        setEditBlog(blog); 
                                                                        setIsEditorOpen(true); 
                                                                    }}
                                                                    title='Edit'
                                                                >
                                                                    <img
                                                                        src={EditIcon}
                                                                        alt={blog?.blog_title}
                                                                        className="object-contain w-4 h-4 rounded-t"
                                                                    />
                                                                </div>
                                                                <div 
                                                                    onClick={(e) => { 
                                                                        e.stopPropagation(); 
                                                                        setBlogToDelete(blog); 
                                                                    }}
                                                                    title='Delete'
                                                                >
                                                                    <img
                                                                        src={DeleteIcon}
                                                                        alt={blog?.blog_title}
                                                                        className="object-contain w-4 h-4 rounded-t"
                                                                    />
                                                                </div>
                                                            </div>
                                                        )}
                                                        <div className='relative w-full h-[36vw] sm:h-[30vw] md:h-[26vw] lg:h-[22vw] xl:h-[18vw]'>
                                                            <img
                                                                src={blog.basic_info || placeholder}
                                                                alt={blog?.title}
                                                                className="object-cover w-full h-full rounded-t"
                                                            />
                                                        </div>
                                                        <div className="w-full p-1 sm:p-2">
                                                            <span className="blog-content text-md font-semibold text-center line-clamp-2 overflow-hidden">
                                                                {blog?.blog_title}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <div
                                        className={`swiper-button-prev-${category.id} absolute top-1/2 left-[-4px] z-10 
                                            border w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer 
                                            -translate-y-1/2 transition-opacity duration-300
                                            ${swiperStates[category.id]?.isBeginning ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                                    >
                                        <ArrowPrevIcon width={18} height={18} />
                                    </div>
                                    <div
                                        className={`swiper-button-next-${category.id} absolute top-1/2 right-[-4px] z-10 
                                            border w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer 
                                            -translate-y-1/2 transition-opacity duration-300
                                            ${swiperStates[category.id]?.isEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                                    >
                                        <ArrowNextIcon width={18} height={18} />
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>  
            <BlogModal
                isOpen={isEditorOpen}
                onClose={() => {
                    setIsEditorOpen(false);
                    setEditBlog(null);
                }}
                onSave={handleSaveBlog}
                initialData={editBlog}
                refetchCategories={refetchCategories}
            />
            {blogToDelete && (
                <Modal
                    isOpen={!!blogToDelete}
                    onRequestClose={() => setBlogToDelete(null)}
                    shouldCloseOnOverlayClick={false}
                    contentLabel="Delete Blog Confirmation"
                    className="relative z-50 p-[10px] w-full max-w-md bg-white rounded"
                    overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center z-50"
                >
                    <div className="relative p-4 text-center">
                        <p className="mb-4 text-lg blog-content">Are you sure you want to delete this blog?</p>
                        <button
                            onClick={() => setBlogToDelete(null)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="flex justify-center gap-4">
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded blog-content"
                                onClick={handleDeleteBlog}
                            >
                                Yes
                            </button>
                            <button
                                className="bg-gray-300 px-4 py-2 rounded blog-content"
                                onClick={() => setBlogToDelete(null)}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
            <Footer />
        </div>
    )
}
