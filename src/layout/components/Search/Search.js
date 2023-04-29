import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeadlessTippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'

import search from '~/api/searchAPI'
import AccountItem from '~/components/AccountItem'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import ICONS from '~/constant/Icons'
import { useDebounce } from '~/hooks'
import styles from './Search.module.scss'

const cx = classNames.bind(styles)
function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [isInteraction, setIsInteraction] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const inputRef = useRef()

  const debounced = useDebounce(searchValue, 500)

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([])
      return
    }

    const fetchAPI = async () => {
      setIsLoading(true)
      const res = await search(debounced)
      setSearchResult(res)
      setIsLoading(false)
    }

    fetchAPI()
  }, [debounced])

  const handleOnChange = (e) => {
    const searchValue = e.target.value

    if (!searchValue.startsWith(' ')) setSearchValue(searchValue)
  }

  const handleOnClear = () => {
    setSearchValue('')
    setSearchResult([])
    inputRef.current.focus()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    // <div></div> for fix warning Tippy
    <div>
      <HeadlessTippy
        interactive
        visible={searchResult.length > 0 && isInteraction}
        // visible={true}
        onClickOutside={() => setIsInteraction(false)}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-tittle')}>Accounts</h4>
              {searchResult &&
                searchResult.map((user) => (
                  <AccountItem
                    key={user.id}
                    avatar={user.avatar}
                    fullName={user.full_name}
                    isCheck={user.tick}
                    nickname={user.nickname}
                  />
                ))}
            </PopperWrapper>
          </div>
        )}
      >
        <div className={cx('search', 'remove-border')}>
          <input
            value={searchValue}
            ref={inputRef}
            placeholder="Search accounts and videos"
            spellCheck={false}
            onChange={(e) => handleOnChange(e)}
            onFocus={() => setIsInteraction(true)}
          />
          {searchValue && !isLoading && (
            <button className={cx('clear')} onClick={handleOnClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

          {isLoading && (
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          )}

          <button
            className={cx('search-btn')}
            onMouseDown={(e) => handleSubmit(e)}
          >
            <ICONS.MagnifyingGlass />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  )
}

export default Search
