import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import ICONS from '~/constant/Icons'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)
function Header({ title, onBack }) {
  return (
    <header className={cx('menu-header')}>
      <button className={cx('back-btn')} onClick={onBack}>
        <ICONS.ChevronLeft />
      </button>
      <p className={cx('header-title')}>{title}</p>
    </header>
  )
}

Header.prototype = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
}
export default Header
