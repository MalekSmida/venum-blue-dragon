// node modules
import cx from 'classnames';

// local files
import { IButtonLink } from '../../types';

// typing
interface PropsTabMenu {
  listMenu: IButtonLink[];
  handleClick: (tabId: string) => void;
  selectedTabId: string;
}
interface PropsButtonLink {
  buttonMenu: IButtonLink;
  isSelected: boolean;
}

const TabMenu: React.FC<PropsTabMenu> = ({
  listMenu,
  handleClick,
  selectedTabId,
}) => {
  const ButtonLink: React.FC<PropsButtonLink> = ({
    buttonMenu,
    isSelected,
  }) => {
    const handleSelectMenu = () => {
      handleClick(buttonMenu._id);
    };

    return (
      <li onClick={handleSelectMenu}>
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
  };

  return (
    <ul className="mb-5 flex items-center justify-center text-3xl">
      {listMenu.map((buttonMenu) => (
        <ButtonLink
          key={buttonMenu._id}
          buttonMenu={buttonMenu}
          isSelected={buttonMenu._id === selectedTabId}
        />
      ))}
    </ul>
  );
};

export default TabMenu;
