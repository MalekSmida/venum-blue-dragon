// node modules
import cx from 'classnames';

// typing
interface PropsTitle {
  children: React.ReactNode;
  className: string;
}

const Title: React.FC<PropsTitle> = ({ children, className }) => {
  return <h1 className={cx('text-4xl text-white', className)}>{children}</h1>;
};

export default Title;
