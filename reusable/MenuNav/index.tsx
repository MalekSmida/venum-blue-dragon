// node modules
import cx from 'classnames';

// local files
import { IButtonLink } from '../../types';

// typing
interface PropsMenuNav {
  listMenu: IButtonLink[];
  handleClick: () => void;
}
interface PropsButtonLink {
  buttonMenu: IButtonLink;
  isSelected: boolean;
}

const MenuNav: React.FC<PropsMenuNav> = ({ listMenu, handleClick }) => {
  const ButtonLink: React.FC<PropsButtonLink> = ({
    buttonMenu,
    isSelected,
  }) => (
    <li>
      <span
        className={cx(
          'relative mx-3 cursor-pointer select-none before:absolute before:-bottom-1 before:h-0.5 before:w-full before:bg-c-dark md:mx-8',
          {
            'text-gray-400 transition-colors duration-300 ease-in-out before:origin-left before:scale-x-0 before:transition hover:text-c-dark hover:before:scale-100':
              !isSelected,
          },
          {
            'text-c-dark': isSelected,
          }
        )}
      >
        {buttonMenu.title}
      </span>
    </li>
  );

  return (
    <ul className="mb-5 flex items-center justify-center text-3xl">
      {listMenu.map((buttonMenu, idx) => (
        <ButtonLink
          key={buttonMenu._id}
          buttonMenu={buttonMenu}
          isSelected={idx === 0}
        />
      ))}
    </ul>
  );
};

export default MenuNav;