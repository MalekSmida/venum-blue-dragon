// local files
import { Section, Slider } from '../../layout';
import { dataCollection } from './mocks';

function Collections() {
  return (
    <Section title="Découvrir nos collections">
      <Slider itemList={dataCollection} cardWidth="w-445" cardHeight="h-665" />
    </Section>
  );
}

export default Collections;
