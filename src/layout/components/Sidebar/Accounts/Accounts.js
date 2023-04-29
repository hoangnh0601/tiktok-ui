import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Accounts.module.scss'

import AccountItem from './AccountItem'

const cx = classNames.bind(styles)

function Accounts({ title }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('title')}>{title}</p>
      <AccountItem
        avatar="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1682931600&x-signature=QeMJUeKFNliNl3M5sp9waBiWQO0%3D"
        userName="theanh28entertainment"
        fullName="Theanh28 Entertainment"
      />
      <AccountItem
        avatar="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1682931600&x-signature=QeMJUeKFNliNl3M5sp9waBiWQO0%3D"
        userName="tiin.vn"
        fullName="Tiin.vn"
      />
      <AccountItem
        avatar="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1682931600&x-signature=QeMJUeKFNliNl3M5sp9waBiWQO0%3D"
        userName="datvilla94"
        fullName="Đạt Villa"
      />
      <AccountItem
        avatar="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1682931600&x-signature=QeMJUeKFNliNl3M5sp9waBiWQO0%3D"
        userName="datvilla94"
        fullName="Đạt Villa"
      />
      <AccountItem
        avatar="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1682931600&x-signature=QeMJUeKFNliNl3M5sp9waBiWQO0%3D"
        userName="datvilla94"
        fullName="Đạt Villa"
      />
      <button className={cx('more-btn')}>See all</button>
    </div>
  )
}

Accounts.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Accounts
