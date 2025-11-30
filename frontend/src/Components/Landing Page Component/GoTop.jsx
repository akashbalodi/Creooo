import React, { useState, useEffect } from 'react';

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a 
      href="#top" 
      className={`go-top ${isVisible ? 'active' : ''}`} 
      onClick={scrollToTop}
    >
      <ion-icon name="chevron-up-outline"></ion-icon>
    </a>
  );
};

export default GoTop;