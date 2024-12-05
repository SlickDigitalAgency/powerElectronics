import { useEffect, useRef } from 'react';

interface UseScrollRevealProps {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal({ threshold = 0.1, rootMargin = '50px' }: UseScrollRevealProps = {}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin]);

  return ref;
}