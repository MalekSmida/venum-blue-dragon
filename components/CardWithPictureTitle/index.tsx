// node modules
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';
import { useSelector } from 'react-redux';

// local files
import { ICollection } from '../../types';
import Title from '../Title';
import { selectApp } from '../../redux/slices/appSlice';

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
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

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

        <Title
          className={cx('absolute bottom-0 left-0 w-full p-5', {
            'text-center': isMobileScreenSize,
          })}
        >
          {collection.title}
        </Title>
      </div>
    </Link>
  );
};

export default CardWithPictureTitle;
