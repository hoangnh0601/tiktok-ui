import PropTypes from 'prop-types';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from '~/components/Popper/Menu/Menu.module.scss/';

const cx = classNames.bind(styles);

function MenuItems({ data, onClick }) {
  return (
    <Button
      onClick={onClick}
      className={cx('menu-item', { separate: data.separate })}
      to={data.to}
      href={data.href}
      leftIcon={data.icon}
    >
      <span className={cx('title')}>{data.title}</span>
    </Button>
  );
}

MenuItems.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default MenuItems;
