// node modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// local files
import { CardWithPictureTitle } from '../../components';
import { ICollection } from '../../types';

// typing
interface PropsSlider {
  itemList: ICollection[];
  cardHeight: string;
}

const Slider: React.FC<PropsSlider> = ({ itemList, cardHeight }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      breakpoints={{
        480: {
          slidesPerView: 2,
          spaceBetween: 3,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 3,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 3,
        },
      }}
      className="mySwiper"
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
