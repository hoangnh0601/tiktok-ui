import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from '~/components/Popper/Menu/Menu.module.scss/';

const cx = classNames.bind(styles);

function MenuItems({ data }) {
  return (
    <Button className={cx('menu-item')} to={data.to} leftIcon={data.icon}>
      <span>{data.title}</span>
    </Button>
  );
}

export default MenuItems;
