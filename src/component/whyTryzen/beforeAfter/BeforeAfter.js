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
            if (sectionTop <= window.innerHeight && sectionTop >= 0) {
                setIsFlipped(true);
            } else {
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
            <div className='mb-5 md:mb-10'>
                <p class="growth-title font-bold text-center text-sm md:text-xl xl:text-2xl md:mb-1">
                    ARE YOU LOOKING FOR GROWTH IN 
                </p>
                <h1 class="ecomm-rest text-2xl md:text-4xl lg:text-5xl">
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