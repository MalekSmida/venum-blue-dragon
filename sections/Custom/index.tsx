// local files
import { Section } from '../../layout';
import { CardPictureTitleButtons, MenuNav } from '../../components';
import { dataCustom, dataMenuCostum } from './mocks';

function Categories() {
  return (
    <Section title="Découvrir l’expérience Venum Custom">
      <MenuNav listMenu={dataMenuCostum} handleClick={() => {}} />
      <CardPictureTitleButtons
        collection={dataCustom}
        width="w-full"
        height="h-c-700"
      />
    </Section>
  );
}

export default Categories;
