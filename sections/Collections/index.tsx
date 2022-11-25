// local files
import { Section, Slider } from '../../layout';
import { data } from './mocks';

function Collection() {
  return (
    <Section title="Découvrir nos collections">
      <Slider itemList={data} />
    </Section>
  );
}

export default Collection;
