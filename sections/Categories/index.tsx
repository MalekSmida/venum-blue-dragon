// local files
import { Section, Slider } from '../../layout';
import { MenuNav } from '../../components';
import { dataCategory, dataMenuCategory } from './mocks';

function Categories() {
  return (
    <Section title="Découvrir nos catégories">
      <MenuNav listMenu={dataMenuCategory} handleClick={() => {}} />
      <Slider itemList={dataCategory} cardWidth="w-445" cardHeight="h-450" />
    </Section>
  );
}

export default Categories;
