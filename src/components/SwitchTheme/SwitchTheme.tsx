'use client'

import React from 'react'
import { MdSunny } from 'react-icons/md'
import { Button } from './styles'

interface SwitchThemeProps {
  visible: 'header' | 'sticky'
}

const SwitchTheme: React.FC<SwitchThemeProps> = ({ visible }) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  const handleSwitchTheme = () => {
    buttonRef.current?.classList.add('active')
    document.querySelector('html')?.classList.toggle('dark')

    const timeout = setTimeout(() => {
      buttonRef.current?.classList.remove('active')
      clearTimeout(timeout)
    }, 500)
  }

  return (
    <Button
      type='button'
      aria-label='toggle change theme'
      title='toggle change theme'
      onClick={handleSwitchTheme}
      className='theme'
      ref={buttonRef}
      visible={visible}
    >
      <MdSunny aria-hidden='true' title='light' />
    </Button>
  )
}

export default SwitchTheme
