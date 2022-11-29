// node module
import { useSelector } from 'react-redux';

// local files
import { Section, Slider } from '../../layout';
import { MenuNav } from '../../components';
import { dataCategory, dataMenuCategory } from './mocks';
import { selectApp } from '../../redux/slices/appSlice';

function Categories() {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <Section title="Découvrir nos catégories">
      <MenuNav listMenu={dataMenuCategory} handleClick={() => {}} />
      <Slider
        itemList={dataCategory}
        breakpoints={{
          1: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 3,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 3,
          },
        }}
        cardHeight="h-c-450"
        hidePagination={isMobileScreenSize}
      />
    </Section>
  );
}

export default Categories;
