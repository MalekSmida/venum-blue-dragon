// local files
import { Section, Slider } from '../../layout';
import { MenuNav } from '../../components';
import { dataCategory, dataMenuCategory } from './mocks';

function Categories() {
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
        cardHeight="h-c-450"
        hidePagination
      />
    </Section>
  );
}

export default Categories;
