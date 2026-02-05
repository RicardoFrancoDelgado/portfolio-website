import { useEffect, useRef, useState } from "react";

export default function useInView(options = { once: true, threshold: 0.2 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options.once) observer.unobserve(el);
        }
      },
      {
        threshold: options.threshold,
        rootMargin: "0px",
      },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [options.once, options.threshold]);

  return [ref, inView];
}
