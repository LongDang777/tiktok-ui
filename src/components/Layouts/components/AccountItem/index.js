import React from 'react'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

export default function AccountItem() {
  return (
    <div className={cx('wrapper')} >
      <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1652376125066245~c5_100x100.jpeg?x-expires=1665381600&x-signature=gc5P%2FRXkb7KcoTntr8dN9fjYsKc%3D" alt="" />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
        </h4>
        <span className={cx('userName')}>
          NguyenVanA
        </span>
      </div>
    </div>
  )
}
