// local files
import { CardWithPictureTitleButtons } from '../../components';
import { Section } from '../../layout';
import { data } from './mocks';

function Gender() {
  return (
    <Section>
      <div className="flex">
        {data.map((gender, idx) => (
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
