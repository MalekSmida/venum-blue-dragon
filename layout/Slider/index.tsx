// local files
import { CardWithPictureTitle } from '../../components';
import { Collection } from '../../types';

// typing
interface PropsSlider {
  itemList: Collection[];
}

const Slider: React.FC<PropsSlider> = ({ itemList }) => {
  return (
    <div className="flex overflow-y-hidden overflow-x-scroll">
      {itemList.map((collection, idx) => (
        <CardWithPictureTitle
          key={idx}
          collection={collection}
          width="w-445"
          height="h-665"
        />
      ))}
    </div>
  );
};

export default Slider;