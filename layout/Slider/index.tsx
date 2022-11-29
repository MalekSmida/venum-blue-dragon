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
import useSwiperRef from '../../hooks/useSwipeRef';

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
  // custom hooks
  const [nextEl, nextElRef] = useSwiperRef<HTMLDivElement>();
  const [prevEl, prevElRef] = useSwiperRef<HTMLDivElement>();
  const [paginationEl, paginationRef] = useSwiperRef<HTMLDivElement>();

  const swiperModules = hidePagination
    ? [Navigation, Autoplay]
    : [Navigation, Autoplay, Pagination];

  return (
    <div className="relative">
      <Swiper
        autoplay={{
          delay: 5000,
        }}
        slidesPerView={1}
        navigation={{
          prevEl,
          nextEl,
        }}
        pagination={{
          el: paginationEl,
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
      <div
        ref={prevElRef}
        className="absolute -left-8 top-1/2 z-20 cursor-pointer"
      >
        <svg width="24" height="24" fillRule="evenodd" clipRule="evenodd">
          <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
        </svg>
      </div>
      <div
        ref={nextElRef}
        className="absolute -right-8 top-1/2 z-20 cursor-pointer"
      >
        <svg width="24" height="24" fillRule="evenodd" clipRule="evenodd">
          <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
        </svg>
      </div>
      <div
        ref={paginationRef}
        className="flex items-center justify-center pt-9 pb-1"
      ></div>
    </div>
  );
};

export default Slider;
