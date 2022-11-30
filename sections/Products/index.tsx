// node module
import { useSelector } from 'react-redux';
import cx from 'classnames';

// local files
import { CardPictureTitle } from '../../components';
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
            {dataProducts.map((gender) => (
              <CardPictureTitle
                key={gender._id}
                collection={gender}
                width="w-full"
                height="h-c-750"
                withPagination
              />
            ))}
          </Slider>
        ) : (
          dataProducts.map((product) => (
            <CardPictureTitle
              key={product._id}
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
