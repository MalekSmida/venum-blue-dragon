// node module
import { useSelector } from 'react-redux';

// local files
import { Section, Slider } from '../../layout';
import { CardImageTitleButtons, MenuNav } from '../../components';
import { dataCustom, dataMenuCostum } from './mocks';
import { selectApp } from '../../redux/slices/appSlice';

function Categories() {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <Section
      title={isMobileScreenSize ? '' : 'Découvrir l’expérience Venum Custom'}
    >
      {isMobileScreenSize ? (
        <Slider>
          {dataCustom.map((customCollection) => (
            <CardImageTitleButtons
              key={customCollection._id}
              collection={customCollection}
              width="w-full"
              height="h-c-700"
              withPagination
            />
          ))}
        </Slider>
      ) : (
        <>
          <MenuNav listMenu={dataMenuCostum} handleClick={() => {}} />
          <Slider>
            <CardImageTitleButtons
              collection={dataCustom[0]}
              width="w-full"
              height="h-c-700"
              hideTitle
            />
          </Slider>
        </>
      )}
    </Section>
  );
}

export default Categories;
