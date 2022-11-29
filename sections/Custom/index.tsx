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
    <Section title="Découvrir l’expérience Venum Custom">
      {isMobileScreenSize ? (
        <Slider
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 3,
            },
          }}
        >
          {Array.from({ length: 3 }, (_, idx) => idx).map((item) => (
            <CardPictureTitleButtons
              key={item}
              collection={dataCustom}
              width="w-full"
              height="h-c-700"
              withPagination
            />
          ))}
        </Slider>
      ) : (
        <>
          <MenuNav listMenu={dataMenuCostum} handleClick={() => {}} />
          <CardPictureTitleButtons
            collection={dataCustom}
            width="w-full"
            height="h-c-700"
          />
        </>
      )}
    </Section>
  );
}

export default Categories;
