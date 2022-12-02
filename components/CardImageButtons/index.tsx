// node modules
import Image from 'next/image';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { storyblokEditable } from '@storyblok/react';

// local files
import Button from '../Button';
import Description from '../Description';
import Title from '../Title';
import { selectApp } from '../../redux/slices/appSlice';
import { CardImageButtonsStoryblok } from '../../component-types-sb';

interface PropsCardImageButtons {
  blok: CardImageButtonsStoryblok;
  width: string; // Tailwind width class
  height: string; // Tailwind height class
  isContentCenter?: boolean;
  withPagination?: boolean;
  hideTitle?: boolean;
}

/**
 * Post card component that is shown in home page
 */
const CardImageButtons: React.FC<PropsCardImageButtons> = ({
  blok,
  width,
  height,
  isContentCenter = false,
  withPagination = false,
  hideTitle = false,
}) => {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <div
      className={cx(
        'relative mx-0.5',
        width,
        isMobileScreenSize ? 'h-c-575' : height // default height of cards in mobile screens
      )}
      {...storyblokEditable(blok)}
    >
      <div className="relative h-full w-full">
        <Image
          src={
            isMobileScreenSize
              ? blok.imageMobile.filename
              : blok.imageDesk.filename
          }
          alt={blok.title}
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
        {blok.title && !hideTitle && <Title>{blok.title}</Title>}

        {blok.description && (
          <Description className="max-w-md py-4 opacity-80 md:py-5">
            {blok.description}
          </Description>
        )}

        {blok.listButtons && (
          <div
            className={cx('flex flex-wrap items-center pt-6', {
              'justify-center': isMobileScreenSize || isContentCenter,
            })}
          >
            {blok.buttonList.map((propsButton) => (
              <Button key={propsButton._uid} blok={propsButton} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardImageButtons;
