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
    <div className="mx-auto w-full max-w-1920 p-7">
      {title && (
        <h1
          className={cx('pt-12 pb-7 text-5xl font-semibold text-dark-custom', {
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
