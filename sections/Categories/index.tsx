// node module
import { useSelector } from 'react-redux';

// local files
import { Section, Slider } from '../../layout';
import { CardWithPictureTitle, MenuNav } from '../../components';
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
          480: {
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
        {dataCategory.map((collection, idx) => (
          <CardWithPictureTitle
            key={idx}
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
