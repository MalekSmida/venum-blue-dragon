// local files
import { CardWithPictureTitle } from '../../components';
import { Section } from '../../layout';
import { dataProducts } from './mocks';

function Products() {
  return (
    <Section title="Des produits adaptés à vos besoins">
      <div className="flex w-full flex-col sm:flex-row">
        {dataProducts.map((product, idx) => (
          <CardWithPictureTitle
            key={idx}
            collection={product}
            width="w-full sm:w-1/3"
            height="h-c-750"
          />
        ))}
      </div>
    </Section>
  );
}

export default Products;
