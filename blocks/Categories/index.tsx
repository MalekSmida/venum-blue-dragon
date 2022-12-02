// node module
import { useState } from 'react';
import { useSelector } from 'react-redux';

// local files
import { Section, Slider } from '../../layout';
import { CardImageTitle, TabMenu, CardTitleBottom } from '../../components';
import { dataCategory, dataMenuCategory } from './mocks';
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
    <Section title="Découvrir nos catégories">
      <TabMenu
        listMenu={dataMenuCategory}
        handleClick={handleSelectTab}
        selectedTabId={selectedTabId}
      />
      <Slider
        breakpoints={{
          1: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
          400: {
            slidesPerView: 4,
            spaceBetween: 3,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 3,
          },
        }}
        hidePagination={isMobileScreenSize}
      >
        {isMobileScreenSize
          ? dataCategory.map((collection) => (
              <CardTitleBottom
                key={collection._id}
                collection={collection}
                width="w-full"
                height="h-c-91"
              />
            ))
          : dataCategory.map((collection) => (
              <CardImageTitle
                key={collection._id}
                collection={collection}
                width="w-full"
                height="h-c-450"
              />
            ))}
      </Slider>
    </Section>
  );
}

export default Categories;
