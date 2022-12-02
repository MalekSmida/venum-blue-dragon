// node module
import { useState } from 'react';
import { useSelector } from 'react-redux';

// local files
import { Section, Slider } from '../../layout';
import { CardImageTitleButtons, TabMenu } from '../../components';
import { dataCustom, dataMenuCostum } from './mocks';
import { selectApp } from '../../redux/slices/appSlice';

function Categories() {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  // state
  const [selectedTabId, setSelectedTabId] = useState('0');

  const handleSelectTab = (tabId: string) => {
    setSelectedTabId(tabId);
  };

  return (
    <Section
      title={isMobileScreenSize ? '' : 'Découvrir l’expérience Venum Custom'}
    >
      {isMobileScreenSize ? (
        <Slider>
          {dataCustom.map((customCollection) => (
            <CardImageTitleButtons
              key={customCollection._id}
              collection={customCollection}
              width="w-full"
              height="h-c-700"
              withPagination
            />
          ))}
        </Slider>
      ) : (
        <>
          <TabMenu
            listMenu={dataMenuCostum}
            handleClick={handleSelectTab}
            selectedTabId={selectedTabId}
          />
          <Slider>
            <CardImageTitleButtons
              collection={
                dataCustom.find((item) => item._id === selectedTabId)!
              }
              width="w-full"
              height="h-c-700"
              hideTitle
            />
          </Slider>
        </>
      )}
    </Section>
  );
}

export default Categories;
