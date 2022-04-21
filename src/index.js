import classNames from 'classnames/bind'
import React from 'react'
import styles from './styles.module.css'

const cx = classNames.bind(styles)

export const Button = ({ children, text, type, onClick }) => {
  const classNames = cx({
    btn: true,
    [`btn--${type}`]: type
  })
  return (
    <button className={classNames} onClick={onClick}>
      {children}
      {text}
    </button>
  )
}
