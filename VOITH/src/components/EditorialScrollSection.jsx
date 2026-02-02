import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const TRANSITION = 0.08;
const Y_OFFSET = 24;

const INTRO_END = 0.15;
const TEXT_WIDTH_PCT = 45;
const IMAGE_WIDTH_PCT = 55;

const SCROLL_MULTIPLIER = 1.6;

const PROJECTS = [
  {
    title: 'UNITED TRADERS SYNDICATE',
    subtitle: 'TOYOTA NEPAL',
    description:
      "Toyota Nepal, represented by United Traders Syndicate (UTS), is the official distributor of Toyota vehicles, parts, and services in Nepal. With over five decades of presence, Toyota Nepal offers a wide range of reliable cars, SUVs, pickups, and MPVs, along with comprehensive after-sales support through its showrooms and service centers.",
    images: ['/home2.png', '/homepage.jpg', '/home2.png'],
    imageAlt: 'United Traders Syndicate - Toyota Nepal',
    buttonText: 'VIEW PROJECTS',
    buttonHref: '#toyota',
  },
  {
    title: 'VAIDYA ENERGY',
    subtitle: 'ATHER ENERGY',
    description:
      "Ather Nepal brings Ather Energy's smart, high-performance electric scooters to Nepal, offering advanced battery technology, fast charging, and a premium riding experience. The brand focuses on sustainable mobility, strong after-sales support, and building a reliable charging ecosystem to accelerate Nepal's shift toward clean electric transportation.",
    images: ['/homepage.jpg','/home2.png','/homepage.jpg'],
    imageAlt: 'Vaidya Energy',
    buttonText: 'VIEW PROJECTS',
    buttonHref: '#vaidya',
  },
  {
    title: 'PITSTOP INCORPORATED',
    subtitle: 'PITSTOP',
    description:
      'Pitstop Incorporated is a boutique automotive workshop in Kathmandu offering premium, all-in-one vehicle services. They specialize in body repairs, painting, detailing, ceramic coating, PPF, restorations, modifications, and general maintenance. Known for their modern facility and skilled technicians, Pitstop delivers exceptional service and craftsmanship.',
    images: ['/home2.png', '/homepage.jpg', '/home2.png'],
    imageAlt: 'Pitstop Incorporated',
    buttonText: 'VIEW PROJECTS',
    buttonHref: '#pitstop',
  },
  {
    title: 'SASVATA',
    subtitle: 'SASVATA',
    description:
      "Sasvata represents a commitment to sustainable and innovative solutions in Nepal. Through strategic partnerships and forward-thinking approaches, Sasvata aims to create lasting impact in the communities it serves, focusing on excellence, integrity, and sustainable growth.",
    images: ['/homepage.jpg','/home2.png','/homepage.jpg'],
    imageAlt: 'Sasvata',
    buttonText: 'VIEW PROJECTS',
    buttonHref: '#sasvata',
  },
];

function buildImageSlides() {
  return PROJECTS.flatMap((p) =>
    p.images ? p.images.map((src) => ({ src, alt: p.imageAlt })) : [{ src: p.image, alt: p.imageAlt }]
  );
}

function getImageStepRanges() {
  const n = PROJECTS.length;
  const ranges = [];
  let start = 0;
  for (let i = 0; i < n; i++) {
    const numImages = PROJECTS[i].images ? PROJECTS[i].images.length : 1;
    const stepSize = 1 / n;
    const imageStepSize = stepSize / numImages;
    for (let j = 0; j < numImages; j++) {
      ranges.push({ start, end: start + imageStepSize });
      start += imageStepSize;
    }
  }
  return ranges;
}

function getProjectRanges(imageStepRanges) {
  const n = PROJECTS.length;
  const ranges = [];
  let imageIdx = 0;
  for (let i = 0; i < n; i++) {
    const numImages = PROJECTS[i].images ? PROJECTS[i].images.length : 1;
    const start = imageStepRanges[imageIdx].start;
    const end = imageStepRanges[imageIdx + numImages - 1].end;
    ranges.push({ start, end });
    imageIdx += numImages;
  }
  return ranges;
}


const EditorialScrollSection = () => {
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const textSlideRefs = useRef([]);
  const imageSlideRefs = useRef([]);
  const lenisRef = useRef(null);
  const rafRef = useRef(null);
  const stRef = useRef(null);

  const imageSlides = buildImageSlides();
  const imageStepRanges = getImageStepRanges();
  const projectRanges = getProjectRanges(imageStepRanges);
  const nText = PROJECTS.length;
  const nImages = imageSlides.length;

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) return;

    const section = sectionRef.current;
    const textSlides = textSlideRefs.current;
    const imageSlidesEls = imageSlideRefs.current;

    if (!section || !textSlides.length || !imageSlidesEls.length) return;

    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => Math.min(1, 1 - Math.pow(2, -8 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.1,
    });
    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
    
      if (textContainerRef.current) {
        gsap.set(textContainerRef.current, { width: '0%', flex: '0 0 0%', opacity: 0, overflow: 'hidden' });
      }
      if (imageContainerRef.current) {
        gsap.set(imageContainerRef.current, { width: '100%', flex: '0 0 100%' });
      }

      textSlides.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { opacity: 0, y: Y_OFFSET, pointerEvents: 'none' });
      });
     
      gsap.set(imageSlidesEls[0], { clipPath: 'inset(0 0 0 0)', opacity: 1 });
      for (let i = 1; i < nImages; i++) {
        if (imageSlidesEls[i]) gsap.set(imageSlidesEls[i], { clipPath: 'inset(100% 0 0 0)', opacity: 0 });
      }

      const tl = gsap.timeline({ paused: true, duration: 1 });

      tl.eventCallback('onUpdate', () => {
        const progress = Math.min(1, tl.progress());
        const atEnd = progress >= 1 - 1e-6;

        
        for (let i = 0; i < nText; i++) {
          const { start: segStart, end: segEnd } = projectRanges[i];
          
          const fadeInStart = segStart;
          const fadeInEnd = Math.min(1, segStart + TRANSITION);
          
          const fadeOutStart = segEnd;
          const fadeOutEnd = Math.min(1, segEnd + TRANSITION);
          const isLast = i === nText - 1;

          let opacity = 0;
          let y = Y_OFFSET;

          if (atEnd && isLast) {
            opacity = 1;
            y = 0;
          } else if (progress < fadeInStart) {
            opacity = 0;
            y = Y_OFFSET;
          } else if (progress < fadeInEnd) {
            const t = (progress - fadeInStart) / (fadeInEnd - fadeInStart || 0.001);
            opacity = t;
            y = (1 - t) * Y_OFFSET;
          } else if (progress < fadeOutStart) {
            opacity = 1;
            y = 0;
          } else if (progress < fadeOutEnd && !isLast) {
            const t = (progress - fadeOutStart) / (fadeOutEnd - fadeOutStart || 0.001);
            opacity = 1 - t;
            y = -t * Y_OFFSET;
          } else {
            opacity = isLast ? 1 : 0;
            y = isLast ? 0 : -Y_OFFSET;
          }

          if (textSlides[i]) gsap.set(textSlides[i], { opacity, y, pointerEvents: opacity > 0 ? 'auto' : 'none' });
        }

        
        let activeIndex = 0;
        for (let i = 0; i < nImages; i++) {
          if (progress >= imageStepRanges[i].start) activeIndex = i;
        }

        
        const activeRange = imageStepRanges[activeIndex];
        let activeClipTopPct = 100;
        if (progress <= activeRange.start) {
          activeClipTopPct = activeIndex === 0 ? 0 : 100;
        } else if (progress >= activeRange.end || (atEnd && activeIndex === nImages - 1)) {
          activeClipTopPct = 0;
        } else {
          const t = (progress - activeRange.start) / (activeRange.end - activeRange.start || 0.001);
          activeClipTopPct = 100 * (1 - t);
        }

        for (let i = 0; i < nImages; i++) {
          const { start: rangeStart, end: rangeEnd } = imageStepRanges[i];
          const isLast = i === nImages - 1;
          const isPrevious = i < activeIndex;
          const isActive = i === activeIndex;

        
          let clipTopPct;
          if (isPrevious) {
            clipTopPct = 0;
          } else if (progress <= rangeStart) {
            clipTopPct = i === 0 ? 0 : 100;
          } else if (progress >= rangeEnd || (atEnd && isLast)) {
            clipTopPct = 0;
          } else {
            const t = (progress - rangeStart) / (rangeEnd - rangeStart || 0.001);
            clipTopPct = 100 * (1 - t);
          }

          
          const visible = isActive || (i === activeIndex - 1 && activeClipTopPct > 0);
          if (imageSlidesEls[i]) {
            gsap.set(imageSlidesEls[i], {
              clipPath: `inset(${clipTopPct}% 0 0 0)`,
              opacity: visible ? 1 : 0,
            });
          }
        }
      });

      const scrollDistance = nText * SCROLL_MULTIPLIER * window.innerHeight;

      const st = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `+=${scrollDistance}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const scrollProgress = Math.min(1, self.progress);
          
          const introProgress = scrollProgress < INTRO_END ? scrollProgress / INTRO_END : 1;
          const textWidthPct = TEXT_WIDTH_PCT * introProgress;
          const imageWidthPct = 100 - textWidthPct;

          if (textContainerRef.current) {
            gsap.set(textContainerRef.current, {
              width: `${textWidthPct}%`,
              flex: `0 0 ${textWidthPct}%`,
              maxWidth: introProgress >= 1 ? 600 : 'none',
              opacity: introProgress,
              overflow: 'hidden',
            });
          }
          if (imageContainerRef.current) {
            gsap.set(imageContainerRef.current, {
              width: `${imageWidthPct}%`,
              flex: `0 0 ${imageWidthPct}%`,
            });
          }

          
          const contentProgress = scrollProgress < INTRO_END ? 0 : (scrollProgress - INTRO_END) / (1 - INTRO_END);
          tl.progress(contentProgress);
        },
      });
      stRef.current = st;
    }, sectionRef);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
      if (stRef.current) stRef.current.kill();
      ctx.revert();
    };
  }, [nText, nImages]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen md:h-screen overflow-hidden bg-[#FFFBF5]">
      {/* Mobile: stacked blocks per project */}
      <div className="md:hidden">
        {PROJECTS.map((project) => (
          <div key={project.title} className="w-full min-h-screen flex flex-col">
            {(project.images || [project.image]).map((img, idx) => (
              <div key={idx} className="relative w-full h-[40vh] overflow-hidden">
                <img src={img} alt={project.imageAlt} className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 bg-[#FFFBF5]">
              <p className="text-xs font-light text-gray-500 flex items-center gap-2 tracking-[0.2em] uppercase mb-4">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0" />
                FEATURED COMPANY
              </p>
              <h2 className="font-['Times_New_Roman',serif] text-2xl sm:text-3xl font-light text-gray-900 leading-tight uppercase mb-4">
                {project.title}
              </h2>
              <p className="text-xs font-light text-gray-500 flex items-center gap-2 tracking-[0.2em] uppercase mb-4">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0" />
                {project.subtitle}
              </p>
              <p className="text-sm text-gray-700 font-light leading-relaxed mb-6 text-justify">
                {project.description}
              </p>
              <a
                href={project.buttonHref}
                className="inline-block border border-gray-900 text-gray-900 bg-transparent px-8 py-3 text-xs tracking-[0.15em] uppercase rounded-full hover:bg-[#E85244] hover:border-[#E85244] hover:text-white transition-colors duration-100"
              >
                {project.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:flex absolute inset-0">
        <div
          ref={textContainerRef}
          className="relative shrink-0 h-full overflow-hidden"
          style={{ width: '0%', flex: '0 0 0%' }}
        >
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              ref={(el) => (textSlideRefs.current[i] = el)}
              className="absolute inset-0 flex flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 md:pt-24 lg:pt-28 pb-10 md:pb-12 lg:pb-16"
            >
              <div>
                <p className="text-xs sm:text-sm font-light text-gray-500 flex items-center gap-2 tracking-[0.2em] uppercase mb-6 md:mb-8">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0" />
                  FEATURED COMPANY
                </p>
                <h2 className="font-['Times_New_Roman',serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-[1.1] tracking-[-0.02em] uppercase">
                  {project.title}
                </h2>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-light text-gray-500 flex items-center gap-2 tracking-[0.2em] uppercase mb-4 md:mb-6">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0" />
                  {project.subtitle}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 font-light leading-[1.85] tracking-[-0.01em] mb-8 md:mb-10 text-justify">
                  {project.description}
                </p>
                <a
                  href={project.buttonHref}
                  className="group inline-block border border-gray-900 text-gray-900 bg-transparent px-8 sm:px-10 py-3 sm:py-3.5 text-xs sm:text-sm font-light tracking-[0.15em] uppercase rounded-full hover:bg-[#E85244] hover:border-[#E85244] hover:text-white transition-colors duration-100 relative overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-100">{project.buttonText}</span>
                  <span className="absolute inset-0 z-0 bg-[#E85244] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={imageContainerRef}
          className="relative h-full overflow-hidden bg-gray-900 bg-cover bg-center"
          style={{
            width: '100%',
            flex: '0 0 100%',
            backgroundImage: imageSlides[0] ? `url(${imageSlides[0].src})` : undefined,
          }}
        >
          {imageSlides.map((slide, i) => (
            <div
              key={`${slide.src}-${i}`}
              ref={(el) => (imageSlideRefs.current[i] = el)}
              className="absolute inset-0 w-full h-full"
              style={{
                zIndex: i,
                clipPath: i === 0 ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
                opacity: i === 0 ? 1 : 0,
              }}
            >
              <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialScrollSection;
