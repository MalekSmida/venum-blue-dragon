// node modules
import cx from 'classnames';

// typing
interface PropsDescription {
  children: React.ReactNode;
  className?: string;
}

const Description: React.FC<PropsDescription> = ({ children, className }) => {
  return (
    <h1 className={cx('text-xl text-white opacity-95', className)}>
      {children}
    </h1>
  );
};

export default Description;
