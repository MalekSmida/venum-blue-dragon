// local files
import { CardImageTitle } from '../../components';
import { Section, Slider } from '../../layout';
import { dataCollection } from './mocks';

function Collections() {
  return (
    <Section title="Découvrir nos collections">
      <Slider
        breakpoints={{
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
      >
        {dataCollection.map((collection) => (
          <CardImageTitle
            key={collection._id}
            collection={collection}
            width="w-full"
            height="h-c-665"
            withPagination
          />
        ))}
      </Slider>
    </Section>
  );
}

export default Collections;
