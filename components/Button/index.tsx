// node modules
import Link from 'next/link';

// local files
import { IButtonLink } from '../../types';

const Button: React.FC<IButtonLink> = ({ title, link = '' }) => {
  return (
    // <Link href={link}>
    <div className="group	relative m-0.5 inline-block h-c-53 w-44 -skew-x-c-20 cursor-pointer border border-white px-4 py-2 focus:outline-none">
      <span className="absolute inset-y-0 left-0 w-[0px] bg-white transition-all duration-300 group-hover:w-full group-active:bg-white"></span>

      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 skew-x-c-20 transform select-none text-c-18 text-white mix-blend-difference transition-colors md:text-2xl">
        {title}
      </span>
    </div>
    // </Link>
  );
};

export default Button;
