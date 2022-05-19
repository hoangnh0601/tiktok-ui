import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccoutItem.module.scss';

const cx = classNames.bind(styles);
function AccoutItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e99846f00ab6702d7716ba8d72a98d7a~c5_300x300.webp?x-expires=1652976000&x-signature=NQ1d3DGeXuiWJp9%2BOtjwLIZwePM%3D"
        alt="Hoang"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span> Nguyen Huu Hoang</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={'username'}>nguyenhuuhoang</span>
      </div>
    </div>
  );
}

export default AccoutItem;
