import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import placeholder from '../../assets/placeholder.png';
import whatsapp from '../../assets/whatsapp.webp';
import { Link } from 'react-router-dom';
import usePageMeta from '../../usePageMeta';
import './BlogPost.css';
import 'react-quill/dist/quill.snow.css';
import mainLogo from '../../assets/mainTryzenLogo.png';
import { useGetBlogBySlugQuery, useGetBlogsWithCategoryQuery } from '../../generated/Blogs.tsx';
import LoadingIcon from '../../LoadingIcon.js';

const decodeHTML = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  let result = '';
  doc.body.childNodes.forEach(node => {
    if (node.nodeName === 'P') {
      const p = node;
      if (p.children.length === 1 && p.querySelector('code')) {
        result += p.querySelector('code')?.textContent || '';
      } else {
        result += p.outerHTML;
      }
    } else {
      result += node.outerHTML || node.textContent || '';
    }
  });
  return result;
};

const sanitizeHTML = (html) => {
  const decodedHTML = decodeHTML(html);
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  const styleMatches = decodedHTML.match(styleRegex);
  let styles = {};

  if (styleMatches) {
    styleMatches.forEach((styleTag) => {
      const css = styleTag.replace(/<style[^>]*>|<\/style>/gi, '').trim();
      const rules = css.match(/[^{]+\{[^}]+\}/g);
      if (rules) {
        rules.forEach((rule) => {
          const [selectors, properties] = rule.split('{');
          const selectorList = selectors.trim().split(',');
          selectorList.forEach((selector) => {
            selector = selector.trim();
            const props = properties
              .replace('}', '')
              .trim()
              .replace(/\s+/g, ' ');

            if (!styles[selector]) {
              styles[selector] = props;
            } else {
              styles[selector] += '; ' + props;
            }
          });
        });
      }
    });
  }
  let updatedHTML = decodedHTML.replace(styleRegex, '');
  Object.keys(styles).forEach((selector) => {
    const inlineStyle = styles[selector];
    const elementRegex = new RegExp(`(<${selector.trim().replace(/[\.\#]/g, '\\$&')}(?![^>]*style=)[^>]*)(>)`, 'gi');
    updatedHTML = updatedHTML.replace(elementRegex, `$1 style="${inlineStyle}"$2`);
  });
  updatedHTML = updatedHTML.replace(/<code[\s\S]*?<\/code>/gi, (codeBlock) => {
    return codeBlock.replace(/&nbsp;/g, '\u00A0');
  });
  updatedHTML = updatedHTML.replace(/&nbsp;/g, ' ');
  return updatedHTML;
};

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

const BlogPost = () => {
    const { slug } = useParams();
    const { data, loading } = useGetBlogBySlugQuery({
        variables: { blog_slug: slug }
    });
    const blog = data?.getBlogBySlug;
    const mainDescription = blog?.section_data ? JSON.parse(blog.section_data) : [];
    const [ownerName, ownerProfilePic, ownerPosition] = blog?.author_info?.split('|||') || ['', '', ''];
    const [metaHeader, metaDescription] = blog?.meta_data?.split('|||') || ['', ''];
    usePageMeta(metaHeader, metaDescription);

    const {
        data: relatedBlogsData,
    } = useGetBlogsWithCategoryQuery({
        variables: { category_id: blog?.category_id || '' },
        skip: !blog?.category_id,
    });

    const navigate = useNavigate();
    const [allBlogs, setAllBlogs] = useState([]);
    const sectionRefs = useRef([]);
    const [activeSection, setActiveSection] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            sectionRefs.current.forEach((ref, index) => {
                if (ref && ref.offsetTop <= scrollPosition && 
                    ref.offsetTop + ref.offsetHeight > scrollPosition) {
                    setActiveSection(index);
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (index) => {
        const element = sectionRefs.current[index];
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    if (loading) return <div className="flex items-center justify-center text-center min-h-screen"><LoadingScreen /></div>;
    if (!blog) return <div className="flex items-center justify-center text-center min-h-screen">Blog not found</div>;

    const filteredBlogs = relatedBlogsData?.getBlogsWithCategory
        ?.filter(b => b.blog_slug !== slug && b.id !== slug)
        ?.slice(0, 5) || [];

    return (
        <div className="min-h-screen flex flex-col">
            <div className='bg-gray-100 px-2 md:px-6 lg:px-10 xl:px-12 pb-10 pt-16 responsive-container'>
                <div className="flex flex-col md:flex-row gap-5 xl:gap-10 pt-16 lg:pt-10">
                    <div className="w-full max-w-5xl mx-auto">
                        <div className='w-full bg-white p-4 shadow-md rounded-lg mb-5'>
                            <h1 className="text-2xl font-bold mb-4 design-heading-content">{blog?.blog_title}</h1>
                        </div>
                        <div className='p-4 md:p-8 bg-white shadow-md rounded-lg'>
                            <div className="space-y-6">
                                {mainDescription?.map((section, index) => (
                                    <div key={index} ref={el => sectionRefs.current[index] = el}>
                                        {section.title && <h1 className="text-2xl font-semibold mb-2 design-content">{section.title}</h1>}
                                        <div
                                            className="text-gray-800 editor-content ql-editor prose max-w-none [&>*]:m-0 !p-0 design-content"
                                            dangerouslySetInnerHTML={{ __html:  sanitizeHTML(section.description) }}
                                        />
                                        {index !== mainDescription.length - 1 && (
                                            <hr className="mt-8 border-gray-300" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='pt-5 bg-gray-100'>
                            <div className="design-container rounded-lg lg:px-12 xl:px-0">
                                <div className="w-full">
                                    <h1 className="hidden sm:block text-white sm:text-3xl font-bold sm:mb-3">GET A <span className='text-[#FFEB3B]'>FREE </span>WEBSITE DESIGN</h1>
                                    <h1 className="sm:hidden text-white text-3xl font-bold mb-2">GET A <span className='text-[#FFEB3B]'>FREE </span><br />WEBSITE DESIGN</h1>
                                    <h2 className="design-sub-title text-3xl sm:text-3xl font-bold mb-4">BOOST YOUR SALES!</h2>

                                    <div className="flex flex-wrap lg:flex-row items-center justify-center gap-4 mb-5">
                                        <div className="design-icon-item">
                                            <img src={require('../../assets/redesignIcon1.png')} alt="No Hidden Costs" className="w-[20px]" />
                                            <p className='design-content font-semibold boost-feature text-[14px]'>NO HIDDEN COSTS</p>
                                        </div>
                                        <div className="design-icon-item">
                                            <img src={require('../../assets/redesignIcon2.png')} alt="No Commitments" className="w-[20px]" />
                                            <p className='design-content font-semibold boost-feature text-[14px]'>NO COMMITMENTS</p>
                                        </div>
                                        <div className="design-icon-item">
                                            <img src={require('../../assets/redesignIcon3.png')} alt="Best Results" className="w-[20px]" />
                                            <p className='design-content font-semibold boost-feature text-[14px]'>JUST BEST RESULTS</p>
                                        </div>
                                    </div>
                                    <div className='design-section p-4 sm:p-6'>
                                        <div className="flex flex-col xl:flex-row bg-white text-black gap-4 lg:gap-5" style={{ borderRadius: "50px" }}>
                                            <div className="xl:w-1/2 mb-5 lg:pt-8 xl:pt-12 order-last xl:order-first">
                                                <div className="flex items-center mb-5 lg:mb-8">
                                                    <img
                                                        src={require('../../assets/clients.webp')}
                                                        alt="Worldwide Clients"
                                                        className="w-24 md:w-24 xl:w-24 rounded-full mr-2.5"
                                                    />
                                                    <div className='flex flex-col gap-1'>
                                                        <p className="design-content text-xs font-semibold">Trusted by clients worldwide</p>
                                                        <img
                                                            src={require('../../assets/redesign5star.png')}
                                                            alt="5 Stars"
                                                            className="w-24"
                                                        />
                                                    </div>
                                                </div>

                                                <ul className="list-none p-0 mb-5 lg:mb-8">
                                                    <li className="design-content check-list flex items-center text-xl sm:text-lg md:text-xl xl:text-lg 2xl:text-xl font-semibold mb-3">
                                                        <img src={require('../../assets/greenRight.png')} alt="Check" className="w-5 lg:w-7 mr-2.5" /> <p className='font-bold'>100% FREE DESIGNS</p>
                                                    </li>
                                                    <li className="design-content check-list flex items-center text-xl sm:text-lg md:text-xl xl:text-lg 2xl:text-xl mb-3">
                                                        <img src={require('../../assets/greenRight.png')} alt="Check" className="w-5 lg:w-7 mr-2.5" /> <p>Designs that <strong> drive more sales</strong></p>
                                                    </li>
                                                    <li className="design-content check-list flex items-center text-xl sm:text-lg md:text-xl xl:text-lg 2xl:text-xl mb-3">
                                                        <img src={require('../../assets/greenRight.png')} alt="Check" className="w-5 lg:w-7 mr-2.5" /> <p><strong>Proven track record</strong> of clients</p>
                                                    </li>
                                                    <li className="design-content check-list flex items-center text-xl sm:text-lg md:text-xl xl:text-lg 2xl:text-xl mb-3">
                                                        <img src={require('../../assets/greenRight.png')} alt="Check" className="w-5 lg:w-7 mr-2.5" /> <p><strong>Transform Your Online Presence</strong></p>
                                                    </li>
                                                </ul>

                                                <button className="bg-[#0F54FF] w-full flex items-center justify-center px-10 sm:px-4 py-2 text-center font-bold rounded-full text-2xl sm:text-lg md:text-xl cursor-pointer design-button">
                                                    <Link to="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2FER0ii8AlZSUfg1KNcGONZ6ZPp-O9Vfl1EZ9nYvqPl0RP60QSDSMJtPCbs5zPUMiFT5zelOzk" target='blank' className='design-content text-white flex items-center'>
                                                        START FREE DESIGN <span className="ml-2"><img src={require('../../assets/nextButtons.png')} className="w-9" /></span>
                                                    </Link>
                                                </button>
                                            </div>

                                            <div className="xl:w-1/2 max-w-[800px] order-first xl:order-last">
                                                <img
                                                    src={require('../../assets/redesignImage.webp')}
                                                    alt="Web Design"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 space-y-6 sticky top-20 h-full">
                        <div className="bg-white rounded-2xl p-3 xl:p-6 shadow-md">
                            <div className='border-b border-b-2 mb-3'>
                                <div className="flex items-center mb-3">
                                    <img
                                        src={ownerProfilePic || placeholder}
                                        alt="Author"
                                        className="w-16 h-16 rounded-full mr-4 border"
                                    />
                                    <div>
                                        <h3 className="font-bold text-lg design-content">{ownerName}</h3>
                                        <p className="text-gray-500 design-content">{ownerPosition}</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="font-bold mb-3 design-content">In This Article</h3>
                            <ul className="space-y-2">
                                {mainDescription?.map((section, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            scrollToSection(index);
                                            setActiveSection(index);
                                        }}
                                        className={`cursor-pointer transition-colors duration-200 design-content ${
                                            activeSection === index ? 'text-[#FF6802]' : 'text-black hover:text-[#FF6802] hover:underline'
                                        }`}
                                    >
                                        {section.title}
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <Link
                                    to="https://wa.me/919998220731?text=Hello%20TryzenSolution,%20can%20we%20arrange%20meeting%20to%20see%20demo!"
                                    target='blank'
                                    className="inline-flex items-center text-white font-semibold mt-4 border border-gray-400 py-2 px-4 rounded-full"
                                    style={{ backgroundColor: "#29A71A" }}
                                >
                                    <img src={whatsapp} alt="Industry Trends" className="mr-2 w-5 h-5" />
                                    <span className='design-content'>CHAT WITH US</span>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-3 xl:p-6 shadow-md mt-6 md:mt-8">
                            <div className="text-center">
                                <div className="flex md:flex-col lg:flex-row items-center justify-between mb-4">
                                    <div>
                                        <img 
                                            src={mainLogo} 
                                            alt="Tryzen Solution Logo"
                                            style={{ height: "3rem" }} 
                                        />
                                    </div>
                                    <div>
                                        <div className="flex justify-around items-center gap-2 xl:gap-4 text-sm design-content">
                                            <div>
                                                <span className="font-bold text-lg">24</span>
                                                <p>posts</p>
                                            </div>
                                            <div>
                                                <span className="font-bold text-lg">551</span>
                                                <p>followers</p>
                                            </div>
                                            <div>
                                                <span className="font-bold text-lg">111</span>
                                                <p>following</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 design-content">
                                <h3 className="font-bold text-xl">TryzenSolution</h3>
                                <p className="mt-2 font-semibold">We help to create <span className="text-pink-500">🎁</span> E-commerce
                                    &
                                    restaurant owners to create website and application to <span className="text-green-500">🚀</span>
                                    grow business <span className="text-blue-500">💻</span>.</p>
                            </div>
                            <div className="grid grid-cols-3 gap-2 mt-4">
                                <img src={require('../../assets/s1.webp')} alt="Portfolio Image" className="w-full h-full rounded-md shadow-sm" />
                                <img src={require('../../assets/s2.webp')} alt="Portfolio Image" className="w-full h-full rounded-md shadow-sm" />
                                <img src={require('../../assets/s3.webp')} alt="Portfolio Image" className="w-full h-full rounded-md shadow-sm" />
                                <img src={require('../../assets/s4.webp')} alt="Portfolio Image" className="w-full h-full rounded-md shadow-sm" />
                                <img src={require('../../assets/s5.webp')} alt="Portfolio Image" className="w-full h-full rounded-md shadow-sm" />
                                <img src={require('../../assets/s6.webp')} alt="Portfolio Image" className="w-full h-full rounded-md shadow-sm" />
                                <img src={require('../../assets/s7.webp')} alt="Portfolio Image" className="w-full h-full rounded-md shadow-sm" />
                                <img src={require('../../assets/s8.webp')} alt="Portfolio Image" className="w-full h-full rounded-md shadow-sm" />
                                <img src={require('../../assets/s9.webp')} alt="Portfolio Image" className="w-full h-full rounded-md shadow-sm" />
                            </div>
                        </div>

                        <div className="bg-white border p-4 rounded-2xl shadow-md">
                            <h3 className="font-bold text-lg mb-4 design-heading-content">Other Important Blogs</h3>
                            <ul className="space-y-3">
                                {filteredBlogs.map((b, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => navigate(`/blogs/${b.blog_slug || b.id}`)}
                                        className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded design-content"
                                    >
                                        <img
                                            src={b.basic_info || placeholder}
                                            alt={b.blog_title}
                                            className="w-12 h-12 object-contain rounded border"
                                        />
                                        <div>
                                            <p className="font-medium text-sm line-clamp-2">{b.blog_title}</p>
                                            {/* <p className="text-xs text-gray-500">{b.category}</p> */}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <button 
                                onClick={() => navigate('/blogs')}
                                className="mt-4 px-2 py-1 border rounded-lg text-blue-600 transition-colors design-content"
                            >
                                See More...
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;