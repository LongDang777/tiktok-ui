import React, { useEffect, useState } from 'react'
import images from '~/assets/images'

import classNames from 'classnames/bind'
import styles from './Header.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'

import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '../../Popper'
import AccountItem from '../AccountItem'
import Button from '../../Button'

const cx = classNames.bind(styles)

export default function Header() {

  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([])
    }, 0)
  }, [])

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex='-1' {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>
                  Accounts
                </h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />

              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input type='text'
              placeholder='Search account and videos' spellCheck={false} />

            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button >

            <button>
              <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            </button>

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx('actions')}>
          <Button text>Upload</Button>
          <Button primary>Log in</Button>
        </div>
      </div>
    </header>

  )
}
