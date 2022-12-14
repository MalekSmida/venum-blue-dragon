// node module
import { useSelector } from 'react-redux';
import cx from 'classnames';

// local files
import { CardImageTitleButtons } from '../../components';
import { Section, Slider } from '../../layout';
import { dataGender } from './mocks';
import { selectApp } from '../../redux/slices/appSlice';

function Gender() {
  // redux
  const { isMobileScreenSize } = useSelector(selectApp);

  return (
    <Section>
      <div className={cx('w-full', { 'flex flex-row': !isMobileScreenSize })}>
        {isMobileScreenSize ? (
          <Slider>
            {dataGender.map((gender) => (
              <CardImageTitleButtons
                key={gender._id}
                collection={gender}
                width="w-full"
                height="h-c-800"
                isContentCenter
                withPagination
              />
            ))}
          </Slider>
        ) : (
          dataGender.map((gender) => (
            <CardImageTitleButtons
              key={gender._id}
              collection={gender}
              width="w-full lg:w-1/2"
              height="h-c-800"
              isContentCenter
            />
          ))
        )}
      </div>
    </Section>
  );
}

export default Gender;
