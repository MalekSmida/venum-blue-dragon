// local files
import { CardWithPictureTitleButtons } from '../../components';
import { Section } from '../../layout';
import { dataGender } from './mocks';

function Gender() {
  return (
    <Section>
      <div className="flex w-full flex-col lg:flex-row">
        {dataGender.map((gender, idx) => (
          <CardWithPictureTitleButtons
            key={idx}
            collection={gender}
            width="w-full lg:w-1/2"
            height="h-800"
            isContentCenter
          />
        ))}
      </div>
    </Section>
  );
}

export default Gender;
