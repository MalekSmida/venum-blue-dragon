// node modules
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';
import { useSelector } from 'react-redux';

// local files
import { ICollection } from '../../types';
import { selectApp } from '../../redux/slices/appSlice';

export interface PropsCardTitleBottom {
  collection: ICollection;
  width: string; // Tailwind width class
  height: string; // Tailwind height class
}

/**
 * Post card component that is shown in home page
 */
const CardTitleBottom: React.FC<PropsCardTitleBottom> = ({
  collection,
  width,
  height,
}) => {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <Link href={`/collection/${collection.link}`}>
      <div className={cx('mx-0.5 cursor-pointer overflow-hidden', width)}>
        <div
          className={cx(
            'relative w-full transition-transform duration-200 ease-in-out hover:scale-105',
            height
          )}
        >
          <Image
            src={
              isMobileScreenSize ? collection.imageMobile : collection.imageDesk
            }
            alt={collection.title}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            priority
          />
        </div>
        <h2 className="w-full px-5 py-4 text-center text-c-16 text-c-dark">
          {collection.title}
        </h2>
      </div>
    </Link>
  );
};

export default CardTitleBottom;
