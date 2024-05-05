import { useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOutsideClick = (ref, callback) => {
  /**
   * Alert if clicked on outside of element
   */
  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, callback]);
};

export default useOutsideClick;
