// node module
import { useSelector } from 'react-redux';
import cx from 'classnames';

// local files
import { CardWithPictureTitle } from '../../components';
import { Section, Slider } from '../../layout';
import { dataProducts } from './mocks';
import { selectApp } from '../../redux/slices/appSlice';

function Products() {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <Section title="Des produits adaptés à vos besoins">
      <div className={cx('w-full', { 'flex flex-row': !isMobileScreenSize })}>
        {isMobileScreenSize ? (
          <Slider
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 3,
              },
            }}
          >
            {dataProducts.map((gender, idx) => (
              <CardWithPictureTitle
                key={idx}
                collection={gender}
                width="w-full"
                height="h-c-750"
              />
            ))}
          </Slider>
        ) : (
          dataProducts.map((product, idx) => (
            <CardWithPictureTitle
              key={idx}
              collection={product}
              width="w-full sm:w-1/3"
              height="h-c-750"
            />
          ))
        )}
      </div>
    </Section>
  );
}

export default Products;
