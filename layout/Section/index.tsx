// node module
import { useSelector } from 'react-redux';
import cx from 'classnames';

// local files
import { selectApp } from '../../redux/slices/appSlice';

// typing
interface PropsSection {
  title?: string;
  children: React.ReactNode;
}

const Section: React.FC<PropsSection> = ({ title, children }) => {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <div className="mx-auto w-full max-w-c-1920 py-2.5 md:px-c-63 md:py-9">
      {title && (
        <h1
          className={cx('pb-7 text-5xl text-c-dark', {
            'text-center': isMobileScreenSize,
          })}
        >
          {title}
        </h1>
      )}
      {children}
    </div>
  );
};

export default Section;
