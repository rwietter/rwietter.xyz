'use client'
import Prism from 'prismjs'
import { useEffect } from 'react'

import 'utils/highlights'

const Highlights = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return <></>
}

export { Highlights }
