// node modules
import Image from 'next/image';
import cx from 'classnames';
import { useSelector } from 'react-redux';

// local files
import { ICollection } from '../../types';
import Button from '../Button';
import Description from '../Description';
import Title from '../Title';
import { selectApp } from '../../redux/slices/appSlice';

interface PropsCardPictureTitleButtons {
  collection: ICollection;
  width: string; // Tailwind width class
  height: string; // Tailwind height class
  isContentCenter?: boolean;
  withPagination?: boolean;
  hideTitle?: boolean;
}

/**
 * Post card component that is shown in home page
 */
const CardPictureTitleButtons: React.FC<PropsCardPictureTitleButtons> = ({
  collection,
  width,
  height,
  isContentCenter = false,
  withPagination = false,
  hideTitle = false,
}) => {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <div className={cx('relative mx-0.5', width, height)}>
      <div className="relative h-full w-full">
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

      <div
        className={cx(
          'absolute bottom-0 left-0 flex w-full flex-col justify-center p-10',

          { 'items-center text-center': isContentCenter },
          { 'md:p-16': !isContentCenter },
          { 'bottom-20': withPagination && isMobileScreenSize }
        )}
      >
        {collection.title && !hideTitle && <Title>{collection.title}</Title>}

        {collection.description && (
          <Description className="max-w-md py-4 md:py-5">
            {collection.description}
          </Description>
        )}

        {collection.listButtons && (
          <div
            className={cx('flex flex-wrap items-center pt-6', {
              'justify-center': isMobileScreenSize || isContentCenter,
            })}
          >
            {collection.listButtons.map((propsButton) => (
              <Button key={propsButton._id} {...propsButton} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardPictureTitleButtons;
