'use client'

import { SetupMapper } from 'src/domains/setup/components/setupmapper'
import { Terminal } from 'src/domains/setup/components/terminal'
import { customization } from 'src/domains/setup/data/customization'
import { operationSystem } from 'src/domains/setup/data/so'
import { AUR, NPM, PACMAN, SNAP } from 'src/domains/setup/data/terminal'
import { tools } from 'src/domains/setup/data/tools'

const StaticSetup = () => (
  <>
    <SetupMapper title='Operational System' id='desk' data={operationSystem} />
    <SetupMapper title='Softwares' id='softwares' data={tools} />
    <Terminal text={PACMAN} />
    <Terminal text={AUR} />
    <Terminal text={NPM} />
    <Terminal text={SNAP} />
    <SetupMapper
      title='Customization'
      id='customization'
      data={customization}
    />
  </>
)

export { StaticSetup }
