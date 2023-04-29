import classNames from 'classnames/bind'
import config from '~/config'
import ICONS from '~/constant/Icons'
import Accounts from './Accounts'
import Menu, { MenuItem } from './Menu'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem
          title="For You"
          to={config.routes.home}
          icon={<ICONS.House />}
          activeIcon={<ICONS.HouseSolid />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<ICONS.People />}
          activeIcon={<ICONS.PeopleSolid />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<ICONS.CameraLarge height={32} width={32} />}
          activeIcon={<ICONS.CameraSolid height={32} width={32} />}
        />
      </Menu>

      <Accounts title="Suggested accounts" />
      <Accounts title="Following accounts" />
    </aside>
  )
}

export default Sidebar
