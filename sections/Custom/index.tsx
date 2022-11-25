// local files
import { Section } from '../../layout';
import { CardWithPictureTitleButtons, MenuNav } from '../../components';
import { dataCustom, dataMenuCostum } from './mocks';

function Categories() {
  return (
    <Section title="Découvrir nos catégories">
      <MenuNav listMenu={dataMenuCostum} handleClick={() => {}} />
      <CardWithPictureTitleButtons
        collection={dataCustom}
        height="h-700"
        width="w-full"
      />
    </Section>
  );
}

export default Categories;
