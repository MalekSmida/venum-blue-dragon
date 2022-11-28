// node modules
import Image from 'next/image';
import cx from 'classnames';
import { useSelector } from 'react-redux';

// local files
import { ICollection } from '../../types';
import Button from '../Button';
import Title from '../Title';
import { Description } from '..';
import { selectApp } from '../../redux/slices/appSlice';

interface PropsCardWithPictureTitleButtons {
  collection: ICollection;
  width: string; // Tailwind width class
  height: string; // Tailwind height class
  isContentCenter?: boolean;
}

/**
 * Post card component that is shown in home page
 */
const CardWithPictureTitleButtons: React.FC<
  PropsCardWithPictureTitleButtons
> = ({ collection, width, height, isContentCenter = false }) => {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <div className={cx('relative mx-0.5', width, height)}>
      <div className="relative h-full w-full">
        <Image
          src={collection.image}
          alt={collection.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div
        className={cx(
          'absolute bottom-0 left-0 flex w-full flex-col justify-center p-10',

          { 'items-center': isContentCenter }
        )}
      >
        {collection.title && <Title>{collection.title}</Title>}

        {collection.description && (
          <Description className="max-w-md py-5">
            {collection.description}
          </Description>
        )}

        {collection.listButtons && (
          <div
            className={cx('flex flex-wrap items-center pt-6', {
              'justify-center': isMobileScreenSize,
            })}
          >
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
