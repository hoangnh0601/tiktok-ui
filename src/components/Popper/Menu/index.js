import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItems from './MenuItems';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children, items }) {
  const renderItems = () => {
    return items.map((item, index) => {
      return <MenuItems key={index} data={item} />;
    });
  };

  console.log(items);
  return (
    <Tippy
      delay={[0, 700]}
      placement="bottom-end"
      interactive
      // visible
      render={(attrs) => (
        <div className={cx('menu-wrapper')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      <span>{children}</span>
    </Tippy>
  );
}

export default Menu;
