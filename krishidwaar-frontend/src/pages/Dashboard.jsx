import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import HowItWorksSection from '../components/HowItWorksSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <div>
        <Header />
        <HeroSection />
        <FeatureSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CallToAction />
        <Footer />
    </div>
  )
}

export default Dashboard