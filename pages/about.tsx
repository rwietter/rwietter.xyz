import SEO from 'components/SEO'
import Link from 'next/link'

const About = () => (
  <>
    <SEO
      title='Sobre | Mauricio W. | Software Developer'
      description='This blog is about my journey as a Software Developer. Here do you find my thoughts, ideas, and experiences. I hope you enjoy it.'
      image='https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png'
      content='website'
      canonical='https://rwietterc.xyz/'
      url='https://rwietterc.xyz/'
    />
    <h1>About</h1>
    <Link href='/'>Home</Link>
  </>
)

export default About
