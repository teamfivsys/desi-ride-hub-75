
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BrandShowcase from '@/components/BrandShowcase';
import FeaturedListings from '@/components/FeaturedListings';
import PostAdBanner from '@/components/PostAdBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BrandShowcase />
      <FeaturedListings />
      <PostAdBanner />
    </div>
  );
};

export default Index;
