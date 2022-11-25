// node modules
import Image from 'next/image';
import cx from 'classnames';

// local files
import { ICollection } from '../../types';
import Button from '../Button';
import Title from '../Title';

interface PropsCardWithPictureTitleButtons {
  collection: ICollection;
  width: string; // Tailwind width class
  height: string; // Tailwind height class
}

/**
 * Post card component that is shown in home page
 */
const CardWithPictureTitleButtons: React.FC<
  PropsCardWithPictureTitleButtons
> = ({ collection, width, height }) => {
  return (
    <div className="relative mx-0.5">
      <div className={cx(width, height)}>
        <Image
          src={collection.image}
          alt={collection.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="absolute bottom-0 left-0 flex w-full flex-col items-center justify-center p-10">
        {collection.title && <Title>{collection.title}</Title>}

        {collection.description && <Title>{collection.description}</Title>}

        {collection.listButtons && (
          <div className="pt-6">
            {collection.listButtons.map((propsButton, idx) => (
              <Button key={idx} {...propsButton} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardWithPictureTitleButtons;
