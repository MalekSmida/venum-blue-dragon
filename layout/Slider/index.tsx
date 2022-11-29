// node modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, SwiperOptions } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// local files
import { CardWithPictureTitle } from '../../components';
import { ICollection } from '../../types';

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
  const swiperModules = hidePagination
    ? [Navigation]
    : [Navigation, Pagination];

  return (
    <Swiper
      autoplay={{
        delay: 5000,
      }}
      slidesPerView={1}
      navigation={true}
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
