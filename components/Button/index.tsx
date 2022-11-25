// node modules
import Link from 'next/link';

// local files
import { ButtonLink } from '../../types';

const Button: React.FC<ButtonLink> = ({ title, link }) => {
  return (
    <Link href={link}>
      <div className="group	relative inline-block h-12 w-44 -skew-x-12 cursor-pointer border border-white px-4 py-2 focus:outline-none">
        <span className="absolute inset-y-0 left-0 w-[0px] bg-white transition-all duration-300 group-hover:w-full group-active:bg-white"></span>

        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 skew-x-12 transform select-none text-2xl text-white mix-blend-difference transition-colors">
          {title}
        </span>
      </div>
    </Link>
  );
};

export default Button;
