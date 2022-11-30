// node module
import { useSelector } from 'react-redux';

// local files
import { Section, Slider } from '../../layout';
import { CardPictureTitle, MenuNav, CardTitleBottom } from '../../components';
import { dataCategory, dataMenuCategory } from './mocks';
import { selectApp } from '../../redux/slices/appSlice';

function Categories() {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <Section title="Découvrir nos catégories">
      <MenuNav listMenu={dataMenuCategory} handleClick={() => {}} />
      <Slider
        breakpoints={{
          1: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
          400: {
            slidesPerView: 4,
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
        hidePagination={isMobileScreenSize}
      >
        {isMobileScreenSize
          ? dataCategory.map((collection) => (
              <CardTitleBottom
                key={collection._id}
                collection={collection}
                width="w-full"
                height="h-c-91"
              />
            ))
          : dataCategory.map((collection) => (
              <CardPictureTitle
                key={collection._id}
                collection={collection}
                width="w-full"
                height="h-c-450"
              />
            ))}
      </Slider>
    </Section>
  );
}

export default Categories;
