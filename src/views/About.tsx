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

          <p className='text-center xl:text-start text-base sm:text-lg text-textSecondary'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            aliquam rem quos blanditiis sapiente deserunt sint quibusdam
            voluptate delectus maxime! Voluptatum nam inventore possimus quidem,
            cumque saepe debitis repellat impedit.
          </p>

          <div className='flex items-center justify-center xl:justify-start gap-6'>
            <SocialMediaIcon imgSrc={facebookIcon} title='Facebook' />
            <SocialMediaIcon imgSrc={instagramIcon} title='Instagram' />
            <SocialMediaIcon imgSrc={twitterIcon} title='Twitter' />
            <SocialMediaIcon imgSrc={youtubeIcon} title='Youtube' />
          </div>
        </div>
        <div className='flex-1 flex items-center justify-center'>
          <img
            src={aboutIllustration}
            alt=''
            className='max-w-full sm:max-w-[401px]'
          />
        </div>
      </div>

      <div className='absolute bottom-0 left-0 w-full h-[1px] bg-divider' />
    </div>
  );
};

export default About;
