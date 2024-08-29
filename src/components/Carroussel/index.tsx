import code1 from '@assets/code1.webp';
import code10 from '@assets/code10.webp';
import code2 from '@assets/code2.webp';
import code3 from '@assets/code3.webp';
import code4 from '@assets/code4.webp';
import code5 from '@assets/code5.webp';
import code6 from '@assets/code6.webp';
import code7 from '@assets/code7.webp';
import code8 from '@assets/code8.webp';
import code9 from '@assets/code9.webp';
import code11 from '@assets/code11.webp';
import code12 from '@assets/code12.webp';
import code13 from '@assets/code13.webp';
import code14 from '@assets/code14.webp';
import code15 from '@assets/code15.webp';
import code16 from '@assets/code16.webp';
import { useEffect, useRef } from 'react';


const images = [
  code1,
  code10,
  code11,
  code2,
  code4,
  code13,
  code5,
  code12,
  code3,
  code6,
  code14,
  code15,
  code7,
  code8,
  code16,
  code9,
];

const MultiImageCarousel = () => {
  const slideRef = useRef<HTMLDivElement>(null);
  const speed = 1.2;

  useEffect(() => {
    const slide = slideRef.current;

    if (slide) {
      const totalWidth = slide.scrollWidth;
      let startPosition = 0;

      const animateSlide = () => {
        startPosition -= speed
        if (Math.abs(startPosition) >= totalWidth / 2) {
          startPosition = 0;
        }

        if (slide) {
          slide.style.transform = `translateX(${startPosition}px)`
        }
        requestAnimationFrame(animateSlide);
      };

      animateSlide();
    }
  }, [speed]);

  return (
    <div className="relative w-full overflow-hidden py-12">
    
      <div
        ref={slideRef}
        className="flex"
        style={{ width: `calc(200% * ${images.length / 3})` }}
      >
        {images.concat(images).map((image, index) => (
          <div
            key={index}
            className="relative flex-shrink-0"
          >
             <div className="absolute inset-0 bg-[#431869] opacity-50"></div>
            <img src={image} alt={`Slide ${index}`} className="object-cover w-[400px] h-[300px]" loading='lazy' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiImageCarousel;
