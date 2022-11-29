// node module
import { useSelector } from 'react-redux';
import cx from 'classnames';

// local files
import { CardWithPictureTitleButtons } from '../../components';
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
          <Slider hidePagination>
            {dataGender.map((gender, idx) => (
              <CardWithPictureTitleButtons
                key={idx}
                collection={gender}
                width="w-full"
                height="h-c-800"
                isContentCenter
              />
            ))}
          </Slider>
        ) : (
          dataGender.map((gender, idx) => (
            <CardWithPictureTitleButtons
              key={idx}
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
