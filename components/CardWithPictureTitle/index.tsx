// node modules
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

// local files
import { Collection } from '../../types';
import Title from '../Title';

interface PropsCardWithPictureTitle {
  collection: Collection;
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
      <div className="relative mx-0.5 cursor-pointer">
        <div className={cx('relative object-cover', width, height)}>
          <Image
            src={collection.image}
            alt={collection.title}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <Title className="absolute bottom-5 left-5">{collection.title}</Title>
      </div>
    </Link>
  );
};

export default CardWithPictureTitle;
