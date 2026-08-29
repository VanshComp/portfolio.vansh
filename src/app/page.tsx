import React from 'react';
import Navigation from '../components/Header';
import Footer from '../components/Footer';
import OpeningScene from '../app/components/OpeningScene';
import PromiseScene from '../app/components/PromiseScene';
import TransformationScene from '../app/components/TransformationScene';
import WhatDoYouHaveScene from '../app/components/WhatDoYouHaveScene';
import OriginTimeline from '../app/components/OriginTimeline';
import CaseStudyBrosa from '../app/components/CaseStudyBrosa';
import CaseStudyCentura from '../app/components/CaseStudyCentura';
import CaseStudyCounsel from '../app/components/CaseStudyCounsel';
import ThePattern from '../app/components/ThePattern';
import AIPlusEngineering from '../app/components/AIPlusEngineering';
import DevelopmentApproach from '../app/components/DevelopmentApproach';
import ValidationSequence from '../app/components/ValidationSequence';
import TechnicalDepth from '../app/components/TechnicalDepth';
import BeyondEngineering from '../app/components/BeyondEngineering';
import ConsultingModel from '../app/components/ConsultingModel';
import TheHuman from '../app/components/TheHuman';
import FinalCTA from '../app/components/FinalCTA';
import ContactExperience from '../app/components/ContactExperience';
import NoiseOverlay from '../app/components/NoiseOverlay';
import ScrollProgress from '../app/components/ScrollProgress';

export default function HomePage() {
  return (
    <>
      <NoiseOverlay />
      <ScrollProgress />
      <Navigation />
      <main id="main-content">
        <OpeningScene />
        <PromiseScene />
        <TransformationScene />
        <WhatDoYouHaveScene />
        <OriginTimeline />
        <CaseStudyBrosa />
        <CaseStudyCentura />
        <CaseStudyCounsel />
        <ThePattern />
        <AIPlusEngineering />
        <DevelopmentApproach />
        <ValidationSequence />
        <TechnicalDepth />
        <BeyondEngineering />
        <ConsultingModel />
        <TheHuman />
        <FinalCTA />
        <ContactExperience />
      </main>
      <Footer />
    </>
  );
}