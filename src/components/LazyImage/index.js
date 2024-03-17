import React, { useRef, useEffect, useState } from "react";

const LazyImage = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef < HTMLImageElement > null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect once the first image becomes visible
        }
      },
      { threshold: 0.5 }
    ); // Adjust threshold as needed

    const debouncedObserver = debounce(observer.observe.bind(observer), 100);

    if (imageRef.current) {
      window.addEventListener("resize", debouncedObserver);
      debouncedObserver();
    }

    return () => {
      window.removeEventListener("resize", debouncedObserver);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const img = new Image();
    img.src = src;

    img.onload = () => {
      // Once the high-resolution image is loaded, update the state to render it
      setIsVisible(true);
    };

    // Basic caching using browser storage
    if (!localStorage.getItem(src)) {
      img.onload = () => {
        setIsVisible(true);
        localStorage.setItem(src, "true");
      };
      localStorage.setItem(src, "loading");
      img.src = src;
    }
  }, [isVisible, src]);

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  return <img ref={imageRef} src={isVisible ? src : ""} alt={alt} />;
};

export default LazyImage;
