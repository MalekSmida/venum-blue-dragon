// local files
import { CardWithPictureTitle } from '../../components';
import { ICollection } from '../../types';

// typing
interface PropsSlider {
  itemList: ICollection[];
  cardWidth: string;
  cardHeight: string;
}

const Slider: React.FC<PropsSlider> = ({ itemList, cardWidth, cardHeight }) => {
  return (
    <div className="flex overflow-x-hidden overflow-y-hidden">
      {itemList.map((collection, idx) => (
        <CardWithPictureTitle
          key={idx}
          collection={collection}
          width={cardWidth}
          height={cardHeight}
        />
      ))}
    </div>
  );
};

export default Slider;
