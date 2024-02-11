import { NextSEO } from 'src/components/SEO'
import Setup from 'src/domains/setup'

import styles from 'src/domains/setup/styles.module.css'

const Page = () => {
  return (
    <>
      <NextSEO
        title='Setup | Maurício Witter'
        content='website'
        url='https://rwietterc.xyz/setup'
        canonical='https://rwietterc.xyz/blog'
        description='Operational System and Software Development Setup for Development and Productivity.'
        image='https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png'
      />
      <div className={styles.main}>
        <section className={styles.content}>
          <Setup />
        </section>
      </div>
    </>
  )
}

export default Page
