// local files
import { SectionWithTitle, Slider } from '../../layout';
import { data } from './mocks';

function Collection() {
  return (
    <SectionWithTitle title="Découvrir nos collections">
      <Slider itemList={data} />
    </SectionWithTitle>
  );
}

export default Collection;
