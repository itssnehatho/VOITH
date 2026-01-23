import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = ['/home2.png', '/homepage.jpg', '/home2.png'];

const AboutUsImage = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  const slideTimelineRef = useRef(null);
  const pinnedTriggerRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    if (!sectionRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      imageRefs.current.forEach((img, idx) => {
        if (!img) return;
        gsap.set(img, { opacity: idx === 0 ? 1 : 0, scale: 1, willChange: 'opacity, transform' });
      });

      const imageContainer = containerRef.current.querySelector('.image-container');

      slideTimelineRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 100%',
          end: 'top top',
          scrub: 1,
        },
      });

      slideTimelineRef.current.fromTo(
        imageContainer,
        { x: '-100%' },
        { x: '0%', ease: 'power2.out' }
      );

      pinnedTriggerRef.current = ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: true,
        start: 'top top',
        // tightened scroll duration ↓
        end: `+=${images.length * window.innerHeight - 150}`,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const total = images.length;

          imageRefs.current.forEach((img, idx) => {
            if (!img) return;
            const start = idx / total;
            const end = (idx + 1) / total;

            // keep last image always visible
            if (idx === total - 1 && progress >= start) {
              gsap.to(img, { opacity: 1, scale: 1, overwrite: true });
              return;
            }

            if (progress >= start && progress < end) {
              gsap.to(img, { opacity: 1, scale: 1, overwrite: true });
            } else {
              gsap.to(img, { opacity: 0, scale: 1.05, overwrite: true });
            }
          });
        },
      });
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      pinnedTriggerRef.current?.kill();
      slideTimelineRef.current?.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white relative">
      <div
        ref={containerRef}
        className="hidden md:block relative h-screen"
        style={{ height: `${images.length * 100}vh` }}
      >
        <div className="text-container absolute left-0 top-0 w-1/2 h-screen z-10 flex flex-col justify-center px-8 lg:px-12 xl:px-16">
          <div className="mb-12">
            <h2 className="font-['Times_New_Roman',serif] text-base font-light text-gray-400 mb-3 tracking-[0.25em] uppercase">
              • OUR VISION
            </h2>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
          <div className="space-y-8">
            <p className="font-['Times_New_Roman',serif] text-2xl lg:text-3xl text-gray-900 leading-[1.4] tracking-[-0.02em] font-light">
              We are committed to building remarkable futures through unity, collaboration, and shared purpose.
            </p>
            <p className="font-sans text-base md:text-lg text-gray-600 leading-[1.85] font-light">
              Our organization empowers companies to achieve sustainable growth and create lasting national impact.
            </p>
          </div>
        </div>

        <div className="image-container absolute right-0 top-0 w-1/2 h-screen z-0">
          {images.map((image, idx) => (
            <div
              key={idx}
              ref={(el) => (imageRefs.current[idx] = el)}
              className="absolute inset-0 w-full h-full"
            >
              <img src={image} alt={`VOITH project ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsImage;
