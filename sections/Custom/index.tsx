// local files
import { Section } from '../../layout';
import { CardWithPictureTitleButtons, MenuNav } from '../../components';
import { dataCustom, dataMenuCostum } from './mocks';

function Categories() {
  return (
    <Section title="Découvrir l’expérience Venum Custom">
      <MenuNav listMenu={dataMenuCostum} handleClick={() => {}} />
      <CardWithPictureTitleButtons
        collection={dataCustom}
        width="w-full"
        height="h-700"
      />
    </Section>
  );
}

export default Categories;
