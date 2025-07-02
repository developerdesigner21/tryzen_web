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
import { useGetAllBlogsQuery } from '../../generated/Blogs.tsx';
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

export default function Blogs() {
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [editBlog, setEditBlog] = useState(null);
    const [blogToDelete, setBlogToDelete] = useState(null);

    const [swiperStates, setSwiperStates] = useState({});

    const { data } = useGetAllBlogsQuery()
    console.log("data:",data)

    const navigate = useNavigate();

    useEffect(() => {
        const loadData = () => {
            try {
                const savedCategories = JSON.parse(localStorage.getItem('categories')) || [];
                const savedBlogs = JSON.parse(localStorage.getItem('posts')) || [];
                setCategories(savedCategories);
                setBlogs(savedBlogs);

                const authToken = sessionStorage.getItem('AuthToken');
                setIsAuthenticated(true);
            } catch (error) {
                console.error('Error loading data:', error);
            }
        };
        loadData();
        window.addEventListener('storage', loadData);
        return () => window.removeEventListener('storage', loadData);
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            const element = document.getElementById(`category-${selectedCategory.slug}`);
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

    const blogsByCategory = blogs.reduce((acc, blog) => {
        if (!blog.category) return acc;
        if (!acc[blog.category]) {
            acc[blog.category] = [];
        }
        acc[blog.category].push(blog);
        return acc;
    }, {});

    const handleBlogClick = (slug) => {
        navigate(`/blogs/${slug}`);
    };

    const handleDeleteBlog = () => {
        const updatedBlogs = blogs.filter(blog => blog.id !== blogToDelete.id);
        setBlogs(updatedBlogs);
        localStorage.setItem('posts', JSON.stringify(updatedBlogs));
        setBlogToDelete(null);
    };
    return (
        <div>
            <Header />
            <div className={`px-2 md:px-6 lg:px-10 xl:px-12 pb-10 pt-16 responsive-container`}>
                <div className="bg-white py-4">
                    {isAuthenticated && (
                        <div className='flex items-center justify-between mb-6'>
                            <div>
                                <h2 className="text-2xl font-bold blog-heading-content">Categories</h2>
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
                            spaceBetween={10}
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
                                const categoryBlogs = blogsByCategory[category.slug] || [];
                                if (categoryBlogs.length === 0) return null;
                                return (
                                    <SwiperSlide key={category.slug} className='!w-auto'>
                                        <div
                                            onClick={() => setSelectedCategory(category)}
                                            className={`px-4 py-1 rounded-full whitespace-nowrap cursor-pointer ${
                                                selectedCategory?.slug === category.slug
                                                    ? 'bg-[#FF6802] text-white'
                                                    : 'bg-gray-200'
                                            }`}
                                        >
                                            {category.name}
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>

                <div className="space-y-2">
                    {categories.map(category => {
                        const categoryBlogs = blogsByCategory[category.slug] || [];
                        const numberOfRows = categoryBlogs.length >= 16 ? 2 : 1;
                        if (categoryBlogs.length === 0) return null;
                        return (
                            <section
                                key={category.slug}
                                id={`category-${category.slug}`}
                                className="pt-4"
                            >
                                <h2 className="text-xl md:text-2xl font-semibold mb-2 blog-heading-content">{category.name}</h2>
                                <div className="relative">
                                    <Swiper
                                        onSwiper={(swiper) => {
                                            setSwiperStates((prev) => ({
                                                ...prev,
                                                [category.slug]: {
                                                    swiper,
                                                    isBeginning: swiper.isBeginning,
                                                    isEnd: swiper.isEnd
                                                }
                                            }));
                                            swiper.on('slideChange', () => {
                                                setSwiperStates((prev) => ({
                                                    ...prev,
                                                    [category.slug]: {
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
                                            nextEl: `.swiper-button-next-${category.slug}`,
                                            prevEl: `.swiper-button-prev-${category.slug}`,
                                        }}
                                    >
                                        {categoryBlogs.map(blog => (
                                            <SwiperSlide key={blog.id} style={{ width: 'auto', flexShrink: 0 }}>
                                                <div className="cursor-pointer text-center w-[36vw] sm:w-[30vw] md:w-[26vw] lg:w-[22vw] xl:w-[18vw]" onClick={() => handleBlogClick(blog.slug)}>
                                                    <div className='relative flex flex-col border cursor-pointer justify-center items-center rounded mt-2 bg-white shadow-lg hover:bg-gray-100'>
                                                        <div className="absolute bg-white/60 px-2 py-1 top-1 right-1 flex gap-2 z-10 rounded">
                                                            <div 
                                                                onClick={(e) => { 
                                                                    e.stopPropagation(); 
                                                                    setEditBlog(blog); 
                                                                    setIsEditorOpen(true); 
                                                                }}
                                                            >
                                                                <img
                                                                    src={EditIcon}
                                                                    alt={blog.title}
                                                                    className="object-contain w-4 h-4 rounded-t"
                                                                />
                                                            </div>
                                                            <div 
                                                                onClick={(e) => { 
                                                                    e.stopPropagation(); 
                                                                    setBlogToDelete(blog); 
                                                                }}
                                                            >
                                                                <img
                                                                    src={DeleteIcon}
                                                                    alt={blog.title}
                                                                    className="object-contain w-4 h-4 rounded-t"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="w-full aspect-[4/3]">
                                                            <img
                                                                src={blog.image || placeholder}
                                                                alt={blog.title}
                                                                className="object-cover w-full h-full rounded-t"
                                                            />
                                                        </div>
                                                        <div className="w-full p-1 sm:p-2">
                                                            <span className="blog-content text-sm font-semibold text-center line-clamp-2 overflow-hidden">
                                                                {blog.title}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div >
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <div
                                        className={`swiper-button-prev-${category.slug} absolute top-1/2 left-[-4px] z-10 
                                            border w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer 
                                            -translate-y-1/2 transition-opacity duration-300
                                            ${swiperStates[category.slug]?.isBeginning ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                                    >
                                        <ArrowPrevIcon width={18} height={18} />
                                    </div>
                                    <div
                                        className={`swiper-button-next-${category.slug} absolute top-1/2 right-[-4px] z-10 
                                            border w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer 
                                            -translate-y-1/2 transition-opacity duration-300
                                            ${swiperStates[category.slug]?.isEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
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
                initialData={editBlog}
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
