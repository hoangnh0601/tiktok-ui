import classNames from 'classnames/bind'

import Button from '~/components/Button/Button'
import Image from '~/components/Image'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './PreviewAccount.module.scss'
import ICONS from '~/constant/Icons'

const cx = classNames.bind(styles)
function PreviewAccount({ avatar, nickname, name, attrs }) {
  return (
    <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
      <PopperWrapper className={cx('popper')}>
        <div className={cx('header')}>
          <Image className={cx('avatar')} src={avatar} alt="" />
          <Button className={cx('btn')} primary>
            Follow
          </Button>
        </div>
        <div className={cx('body')}>
          <p className={cx('nickname')}>
            <strong>{nickname}</strong>
            <ICONS.Check />
          </p>
          <p className={cx('name')}>{name}</p>
          <div className={cx('stats')}>
            <strong className={cx('value')}>9M</strong>
            <span className={cx('label')}>Follower</span>
            <strong className={cx('value')}>747M</strong>
            <span className={cx('label')}>Like</span>
          </div>
        </div>
      </PopperWrapper>
      c
    </div>
  )
}

export default PreviewAccount
