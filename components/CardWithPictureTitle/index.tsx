// node modules
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

// local files
import { ICollection } from '../../types';
import Title from '../Title';

export interface PropsCardWithPictureTitle {
  collection: ICollection;
  width: string; // Tailwind width class
  height: string; // Tailwind height class
}

/**
 * Post card component that is shown in home page
 */
const CardWithPictureTitle: React.FC<PropsCardWithPictureTitle> = ({
  collection,
  width,
  height,
}) => {
  return (
    <Link href={`/collection/${collection.link}`}>
      <div
        className={cx(
          'relative mx-0.5 cursor-pointer overflow-hidden',
          width,
          height
        )}
      >
        <div className="relative h-full w-full transition-transform duration-200 ease-in-out hover:scale-105">
          <Image
            src={collection.image}
            alt={collection.title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <Title className="absolute bottom-5 left-5">{collection.title}</Title>
      </div>
    </Link>
  );
};

export default CardWithPictureTitle;
