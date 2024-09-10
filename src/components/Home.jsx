import React from 'react';
import BannerSection from './BannerSection'
// import ClientsSection from './ClientsSection'
import AboutSection from './AboutSection'
// import BannerSection from './BannerSection'
import WelcomeSection from './WelcomeSection'
import RecruitmentTechnology from './RecruitmentTechnology';
import IndustriesSection from './IndustriesSection';
import ProcessSection from './ProcessSection';
// import TeamSection from './TeamSection';
// import NewsSection from './NewsSection';
import TestimonialSection from './TestimonialSection';
import ServiceSection from './ServiceSection';

const HomePage = () => {
    return (
      <>
        <BannerSection />
        {/* <ClientsSection /> */}
        <WelcomeSection />
        <AboutSection />
        <ServiceSection />
        <RecruitmentTechnology />
        <IndustriesSection />
        <ProcessSection />
        {/* <TeamSection /> */}
        {/* < NewsSection/> */}
        <TestimonialSection />





      </>
    );
  };

  export default HomePage;