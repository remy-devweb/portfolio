import { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ButtonToTop () {
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed flex justify-center items-center w-10 h-10 bottom-24 right-4 bg-[#3b8bc4] hover:bg-[#966fb3] text-white p-2 rounded-lg shadow-lg  focus:outline-none transition-all duration-300 ease-in`}
      onClick={scrollToTop}
    >
      {/* <FontAwesomeIcon icon={faArrowUp} size="lg" /> */}
    </button>
  );
}
