import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItems from './MenuItems';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, items, hideOnClick = false, onChange }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const hasChildren = !!item.children;
      return (
        <MenuItems
          key={index}
          data={item}
          onClick={() => {
            if (hasChildren) setHistory((prev) => [...prev, item.children]);
            else onChange && onChange(item);
          }}
        />
      );
    });
  };

  return (
    <Tippy
      // visible
      delay={[0, 700]}
      placement="bottom-end"
      interactive
      offset={[12, 8]}
      hideOnClick={hideOnClick}
      render={(attrs) => (
        <div className={cx('menu-wrapper')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() =>
                  setHistory((prev) => prev.slice(0, prev.length - 1))
                }
              />
            )}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      <span>{children}</span>
    </Tippy>
  );
}
Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array.isRequired,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};
export default Menu;
