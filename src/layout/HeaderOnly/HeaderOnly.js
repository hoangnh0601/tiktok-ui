import Header from '~/layout/components/Header'
import style from './HeaderOnly.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(style)

function HeaderOnly({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  )
}

export default HeaderOnly
