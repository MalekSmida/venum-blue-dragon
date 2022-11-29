// node modules
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// local files
import { getWindowWidth } from '../utils/windowSize';
import {
  on_mobile_screen_width,
  on_desk_screen_width,
} from '../redux/slices/appSlice';

/**
 * Custom hook that detect when user is using screen width < 768 (mobile)
 * Using event listener on window windowSize.innerWidth
 */
function useDetectMobileScreenSize() {
  // hooks
  const dispatch = useDispatch();

  useEffect(() => {
    // set isMobileScreenSize in store true if window width < 768
    function handleWindowResize() {
      const screenWidth = getWindowWidth();
      if (screenWidth > 768) {
        dispatch(on_desk_screen_width({}));
      } else {
        dispatch(on_mobile_screen_width({}));
      }
    }

    handleWindowResize();

    // set event listener for resizing screen
    window.addEventListener('resize', handleWindowResize);

    return () => {
      // clear event listener when unmount (optimization)
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [dispatch]);
}

export default useDetectMobileScreenSize;
