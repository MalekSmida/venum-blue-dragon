// node modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, SwiperOptions } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useSelector } from 'react-redux';
import cx from 'classnames';

// local files
import { CardWithPictureTitle } from '../../components';
import { ICollection } from '../../types';
import { selectApp } from '../../redux/slices/appSlice';

// typing
interface PropsSlider {
  itemList: ICollection[];
  cardHeight: string;
  breakpoints: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
  hidePagination?: boolean;
}

const Slider: React.FC<PropsSlider> = ({
  itemList,
  cardHeight,
  breakpoints,
  hidePagination = false,
}) => {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  const swiperModules = isMobileScreenSize
    ? hidePagination
      ? []
      : [Pagination] // hide navigation on mobile screen
    : [Navigation, Pagination]; // show pagination and navigation on desk

  return (
    <Swiper
      autoplay={{
        delay: 5000,
      }}
      slidesPerView={1}
      navigation={!isMobileScreenSize}
      pagination={{
        clickable: true,
      }}
      modules={swiperModules}
      breakpoints={breakpoints}
    >
      {itemList.map((collection, idx) => (
        <SwiperSlide key={idx}>
          <CardWithPictureTitle
            collection={collection}
            width="w-full"
            height={cardHeight}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
