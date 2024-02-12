'use client'

import { FC, useEffect, useRef } from 'react'
import { MdSunny } from 'react-icons/md'
import styles from './styles.module.css'

interface Props {
  visible: 'header' | 'sticky'
}

const updateTheme = () => {
  const theme = localStorage.getItem('theme') || ''
  const html = document.querySelector('html')
  if (!html) return
  html.classList.value = theme
}

const storeTheme = () => {
  const theme = document.querySelector('html')?.classList?.value || ''
  localStorage.setItem('theme', theme)
}

const SwitchTheme: FC<Props> = ({ visible }) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    updateTheme()
  }, [])

  const handleSwitchTheme = () => {
    buttonRef.current?.setAttribute('data-active', 'true')
    document.querySelector('html')?.classList.toggle('dark')
    storeTheme()

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
