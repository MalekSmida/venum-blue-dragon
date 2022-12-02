// node modules
import { useSelector } from 'react-redux';

// local files
import {
  Collections,
  Gender,
  Media,
  Categories,
  Products,
  Custom,
} from '../blocks';
import { selectApp } from '../redux/slices/appSlice';

const StaticDesign = () => {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <>
      <Media />
      {isMobileScreenSize && <Categories />}
      <Collections />
      <Gender />
      {!isMobileScreenSize && <Categories />}
      <Products />
      <Custom />
    </>
  );
};

export default StaticDesign;
