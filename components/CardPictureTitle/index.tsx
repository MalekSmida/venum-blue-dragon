// node modules
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';
import { useSelector } from 'react-redux';

// local files
import { ICollection } from '../../types';
import Title from '../Title';
import { selectApp } from '../../redux/slices/appSlice';

export interface PropsCardPictureTitle {
  collection: ICollection;
  width: string; // Tailwind width class
  height: string; // Tailwind height class
  withPagination?: boolean;
}

/**
 * Post card component that is shown in home page
 */
const CardPictureTitle: React.FC<PropsCardPictureTitle> = ({
  collection,
  width,
  height,
  withPagination = false,
}) => {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <Link href={`/collection/${collection.link}`}>
      <div
        className={cx(
          'relative mx-0.5 cursor-pointer overflow-hidden',
          width,
          isMobileScreenSize ? 'h-c-575' : height
        )}
      >
        <div className="relative h-full w-full transition-transform duration-200 ease-in-out hover:scale-105">
          <Image
            src={
              isMobileScreenSize ? collection.imageMobile : collection.imageDesk
            }
            alt={collection.title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div>

        <Title
          className={cx('absolute bottom-0 left-0 w-full px-5 py-4', {
            'bottom-20 text-center': withPagination && isMobileScreenSize,
          })}
        >
          {collection.title}
        </Title>
      </div>
    </Link>
  );
};

export default CardPictureTitle;
