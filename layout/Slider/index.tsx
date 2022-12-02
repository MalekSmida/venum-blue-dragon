// node modules
import { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, SwiperOptions } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import cx from 'classnames';

// local files
import useSwiperRef from '../../hooks/useSwipeRef';

// typing
interface PropsSlider {
  children: React.ReactNode;
  breakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
  hidePagination?: boolean;
  insideNavigation?: boolean;
}

const Slider: React.FC<PropsSlider> = ({
  children,
  breakpoints,
  hidePagination = false,
  insideNavigation = false,
}) => {
  // custom hooks
  const [nextEl, nextElRef] = useSwiperRef<HTMLDivElement>();
  const [prevEl, prevElRef] = useSwiperRef<HTMLDivElement>();
  const [paginationEl, paginationRef] = useSwiperRef<HTMLDivElement>();

  const swiperModules = hidePagination
    ? [Navigation, Autoplay]
    : [Navigation, Autoplay, Pagination];

  if (Children.count(children) > 1) {
    return (
      <div className="group/arrow relative md:pb-11">
        <Swiper
          autoplay={{
            delay: 5000,
          }}
          rewind
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
          className={cx(
            'absolute -left-9 top-arrow z-20 hidden cursor-pointer md:block',
            {
              'left-9 opacity-0 transition-opacity duration-500 group-hover/arrow:opacity-100':
                insideNavigation,
            }
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="29"
            fill="none"
          >
            <path
              fill={insideNavigation ? '#F3F3F3' : '#070707'}
              d="m14.142 0 1.414 1.414L1.414 15.556 0 14.142z"
            />
            <path
              fill={insideNavigation ? '#F3F3F3' : '#070707'}
              d="m15.557 27.142-1.415 1.414L0 14.414 1.414 13z"
            />
          </svg>
        </div>
        <div
          ref={nextElRef}
          className={cx(
            'absolute -right-9 top-arrow z-20 hidden cursor-pointer md:block',
            {
              'right-9 opacity-0 transition-opacity duration-500 group-hover/arrow:opacity-100':
                insideNavigation,
            }
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="29"
            fill="none"
          >
            <path
              fill={insideNavigation ? '#F3F3F3' : '#070707'}
              d="M1.414 28.557 0 27.143 14.142 13l1.414 1.415z"
            />
            <path
              fill={insideNavigation ? '#F3F3F3' : '#070707'}
              d="M0 1.414 1.414 0l14.142 14.142-1.414 1.414z"
            />
          </svg>
        </div>
        <div ref={paginationRef} className="swiper-pagination-custom"></div>
      </div>
    );
  } else {
    return <>{children}</>;
  }
};

export default Slider;
