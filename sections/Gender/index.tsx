// local files
import { CardWithPictureTitleButtons } from '../../components';
import { Section } from '../../layout';
import { dataGender } from './mocks';

function Gender() {
  return (
    <Section>
      <div className="flex">
        {dataGender.map((gender, idx) => (
          <CardWithPictureTitleButtons
            key={idx}
            collection={gender}
            width="w-895"
            height="h-800"
          />
        ))}
      </div>
    </Section>
  );
}

export default Gender;
