import SEO from 'components/SEO';
import Link from 'next/link';
import React from 'react';

const About = () => (
  <>
    <SEO
      title="Sobre | Mauricio W. | Software Developer"
      description="This blog is about my journey as a software engineer. Here do you find my thoughts, ideas, and experiences. I hope you enjoy it."
      image="https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png"
      content="website"
      url="https://rwietter.xyz/"
    />
    <h1>About</h1>
    <Link href="/" rel="canonical">Home</Link>
  </>
);

export default About;
