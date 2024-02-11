'use client'

import { FC, useRef } from 'react'
import { MdSunny } from 'react-icons/md'
import styles from './styles.module.css'

interface Props {
  visible: 'header' | 'sticky'
}

const SwitchTheme: FC<Props> = ({ visible }) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleSwitchTheme = () => {
    buttonRef.current?.setAttribute('data-active', 'true')
    document.querySelector('html')?.classList.toggle('dark')

    const timeout = setTimeout(() => {
      buttonRef.current?.removeAttribute('data-active')
      clearTimeout(timeout)
    }, 500)
  }

  return (
    <button
      className={`${styles.theme} theme`}
      type='button'
      aria-label='toggle change theme'
      title='toggle change theme'
      onClick={handleSwitchTheme}
      ref={buttonRef}
      data-visible={visible}
    >
      <MdSunny aria-hidden='true' title='light' />
    </button>
  )
}

export default SwitchTheme
