import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import ICONS from '~/constant/Icons'
import Image from '../Image'
import styles from './AccoutItem.module.scss'

const cx = classNames.bind(styles)
function AccountItem({ avatar, fullName, isCheck, nickname }) {
  return (
    <Link to={`@${nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={avatar} alt={fullName} />
      <div className={cx('info')}>
        <h4 className={cx('user-name')}>
          <span>{nickname}</span>
          {isCheck && <ICONS.Check />}
        </h4>
        <span className={cx('name')}>{fullName}</span>
      </div>
    </Link>
  )
}

AccountItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  isCheck: PropTypes.bool.isRequired,
  nickname: PropTypes.string.isRequired,
}

export default AccountItem
