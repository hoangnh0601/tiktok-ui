import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import Image from '~/components/Image'
import PreviewAccount from '~/components/PreviewAccount'
import ICONS from '~/constant/Icons'
import styles from './Accounts.module.scss'

const cx = classNames.bind(styles)
function AccountItem({ avatar, userName, fullName }) {
  const handleRender = (attrs) => (
    <PreviewAccount
      avatar={avatar}
      nickname={userName}
      name={fullName}
      attrs={attrs}
    />
  )

  return (
    <div>
      <Tippy
        delay={[1000, 0]}
        placement="bottom-end"
        offset={[-20, 0]}
        interactive
        render={handleRender}
      >
        <div className={cx('account-item')}>
          <Image className={cx('avatar')} src={avatar} alt="" />
          <div className={cx('info')}>
            <p className={cx('user-name')}>
              {userName}
              <span className={cx('check-icon')}>{<ICONS.Check />}</span>
            </p>
            <p className={cx('name')}>{fullName}</p>
          </div>
        </div>
      </Tippy>
    </div>
  )
}

AccountItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
}
export default AccountItem
