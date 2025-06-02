import React from 'react';
import Hero from '../../components/landing-page/Hero';
import SocialProof from '../../components/landing-page/SocialProof';
import Vp from '../../components/landing-page/Vp';
import Consultation from '../../components/landing-page/Consultation';
import ClassList from '../../components/landing-page/ClassList';
import Testimonial from '../../components/landing-page/Testimonial';
import FinalCta from '../../components/landing-page/FinalCta';
import Footer from '../../components/landing-page/Footer';

const LandingPage = () => {
  return (
    <div className="w-full h-full flex-col justify-start items-start inline-flex">
      <Hero />
      <SocialProof />
      <Vp />
      <Consultation />
      <ClassList />
      <Testimonial />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default LandingPage;
