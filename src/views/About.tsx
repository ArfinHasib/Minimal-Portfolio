// assets
import aboutPageImg from '../assets/about-me-page.svg';
import aboutIllustration from '../assets/about-illustration.svg';
import facebookIcon from '../assets/facebook-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';
import twitterIcon from '../assets/twitter-icon.svg';
import youtubeIcon from '../assets/youtube-icon.svg';

// components
import { SocialMediaIcon, Reveal } from '../components';

// framer-motion
import { motion } from 'framer-motion';

// utils
import { fadeIn, scale } from '../utils/variants';
import { transition } from '../utils/transition';

const About = () => {
  return (
    <div
      id='about'
      className='min-h-screen flex items-center justify-center relative'
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'Cover',
      }}
    >
      <div className='max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12'>
        <div className='flex-1 flex flex-col gap-4'>
          <h2 className='text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary'>
            About <span className='text-secondary'> me</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
