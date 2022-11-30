// node module
import { useSelector } from 'react-redux';

// local files
import { Section, Slider } from '../../layout';
import { CardPictureTitleButtons, MenuNav } from '../../components';
import { dataCustom, dataMenuCostum } from './mocks';
import { selectApp } from '../../redux/slices/appSlice';

function Categories() {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <Section
      title={isMobileScreenSize ? '' : 'Découvrir l’expérience Venum Custom'}
    >
      <Slider>
        {Array.from({ length: 2 }, (_, idx) => idx).map((item) => (
          <CardPictureTitleButtons
            key={item}
            collection={dataCustom}
            width="w-full"
            height="h-c-700"
            withPagination
          />
        ))}
      </Slider>
    </Section>
  );
}

export default Categories;
