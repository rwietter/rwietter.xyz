'use client'

import { useServerInsertedHTML } from 'next/navigation'
import React, { useState } from 'react'
import { getCssText } from 'src/ui/theme'

export default function StitchesRegistry({
  children,
}: { children: React.ReactNode }) {
  const [isRendered, setIsRendered] = useState(false)

  useServerInsertedHTML(() => {
    if (!isRendered) {
      setIsRendered(true)
      return (
        <style
          id='stitches'
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      )
    }
  })

  return <>{children}</>
}
