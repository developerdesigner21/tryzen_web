import React, { useEffect, useState, useRef } from 'react';
import './BeforeAfter.css';
import before1 from '../../../assets/before1.webp';
import before2 from '../../../assets/before2.webp';
import before3 from '../../../assets/before3.webp';
import before4 from '../../../assets/before4.webp';
import after1 from '../../../assets/after1.webp';
import after2 from '../../../assets/after2.webp';
import after3 from '../../../assets/after3.webp';
import after4 from '../../../assets/after4.webp';

export default function BeforeAfter() {
    const [isFlipped, setIsFlipped] = useState(false);
    const sectionRef = useRef(null);

    const beforeImages = [before1, before2, before3, before4];
    const afterImages = [after1, after2, after3, after4];

    const handleScroll = () => {
        if (sectionRef.current) {
            const sectionTop = sectionRef.current.getBoundingClientRect().top;
            const sectionHeight = sectionRef.current.offsetHeight;
            const sectionMiddle = sectionTop + sectionHeight / 2;
            
            const viewportCenter = window.innerHeight / 2;

            if (sectionMiddle <= viewportCenter + 50 && sectionMiddle >= viewportCenter - 50) {
                setIsFlipped(true);
            }
            else if (sectionTop > window.innerHeight || sectionTop + sectionHeight < 0) {
                setIsFlipped(false);
            }
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="before-after-container">
            <div className='mb-8 md:mb-10'>
                <p className="growth-title font-bold text-center text-md md:text-2xl xl:text-3xl mb-1 md:mb-2">
                    ARE YOU LOOKING FOR GROWTH IN 
                </p>
                <h1 className="ecomm-rest text-2xl md:text-4xl lg:text-6xl">
                    E-commerce & Restaurant 
                </h1>
            </div>
            <div className="scroll-section" ref={sectionRef}>
                {beforeImages.map((beforeImage, index) => {
                    return (
                        <div className="image-container" key={index}>
                            <div className={`image-wrapper ${isFlipped ? 'flipped' : ''}`}>
                                <img
                                    src={beforeImage}
                                    alt={`Before ${index + 1}`}
                                    className="original images"
                                />
                                <img
                                    src={afterImages[index]}
                                    alt={`After ${index + 1}`}
                                    className={`flipped-img images ${isFlipped ? 'visible' : ''}`}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}