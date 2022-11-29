// node modules
import { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, SwiperOptions } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// local files
import useSwiperRef from '../../hooks/useSwipeRef';

// typing
interface PropsSlider {
  children: React.ReactNode;
  breakpoints: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
  hidePagination?: boolean;
}

const Slider: React.FC<PropsSlider> = ({
  children,
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
    <div className="relative md:pb-11">
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
        {Children.map(children, (child, idx) => (
          <SwiperSlide key={idx}>{child}</SwiperSlide>
        ))}
      </Swiper>
      <div
        ref={prevElRef}
        className="absolute -left-9 top-arrow z-20 hidden cursor-pointer md:block"
      >
        <svg width="24" height="24" fillRule="evenodd" clipRule="evenodd">
          <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
        </svg>
      </div>
      <div
        ref={nextElRef}
        className="absolute -right-9 top-arrow z-20 hidden cursor-pointer md:block"
      >
        <svg width="24" height="24" fillRule="evenodd" clipRule="evenodd">
          <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
        </svg>
      </div>
      <div ref={paginationRef} className="swiper-pagination-custom"></div>
    </div>
  );
};

export default Slider;
