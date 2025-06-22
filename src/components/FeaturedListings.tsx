
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import VehicleCard from './VehicleCard';
import { TrendingUp, ArrowRight } from 'lucide-react';

const FeaturedListings = () => {
  const featuredVehicles = [
    {
      id: '1',
      title: '2019 Maruti Suzuki Swift VDI',
      price: '6.5 Lakh',
      originalPrice: '7.2 Lakh',
      year: '2019',
      kmDriven: '35,000',
      fuelType: 'Diesel',
      ownerCount: '1st',
      location: 'Andheri, Mumbai',
      images: ['/placeholder.svg'],
      isVerified: true,
      isTopPick: true,
      sellerRating: 4.8,
      sellerName: 'Rajesh Kumar',
      postedDays: 2,
    },
    {
      id: '2',
      title: '2020 Hero Splendor Plus',
      price: '55,000',
      year: '2020',
      kmDriven: '12,000',
      fuelType: 'Petrol',
      ownerCount: '1st',
      location: 'Koramangala, Bengaluru',
      images: ['/placeholder.svg'],
      isVerified: true,
      isPremium: true,
      sellerRating: 4.6,
      sellerName: 'Priya Singh',
      postedDays: 1,
    },
    {
      id: '3',
      title: '2018 Hyundai i20 Sportz',
      price: '7.8 Lakh',
      year: '2018',
      kmDriven: '45,000',
      fuelType: 'Petrol',
      ownerCount: '2nd',
      location: 'Sector 18, Gurgaon',
      images: ['/placeholder.svg'],
      isVerified: true,
      sellerRating: 4.5,
      sellerName: 'Amit Sharma',
      postedDays: 3,
    },
    {
      id: '4',
      title: '2021 Royal Enfield Classic 350',
      price: '1.45 Lakh',
      year: '2021',
      kmDriven: '8,500',
      fuelType: 'Petrol',
      ownerCount: '1st',
      location: 'Anna Nagar, Chennai',
      images: ['/placeholder.svg'],
      isVerified: true,
      isTopPick: true,
      sellerRating: 4.9,
      sellerName: 'Karthik Raj',
      postedDays: 1,
    },
    {
      id: '5',
      title: '2017 Tata Nexon XM',
      price: '8.2 Lakh',
      originalPrice: '9.1 Lakh',
      year: '2017',
      kmDriven: '52,000',
      fuelType: 'Diesel',
      ownerCount: '1st',
      location: 'Banjara Hills, Hyderabad',
      images: ['/placeholder.svg'],
      isVerified: true,
      sellerRating: 4.7,
      sellerName: 'Deepika Reddy',
      postedDays: 4,
    },
    {
      id: '6',
      title: '2019 Bajaj Pulsar NS200',
      price: '95,000',
      year: '2019',
      kmDriven: '18,000',
      fuelType: 'Petrol',
      ownerCount: '1st',
      location: 'Salt Lake, Kolkata',
      images: ['/placeholder.svg'],
      isVerified: true,
      isPremium: true,
      sellerRating: 4.4,
      sellerName: 'Subhash Das',
      postedDays: 2,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="h-8 w-8 text-saffron" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Featured <span className="text-saffron">Listings</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl">
              Hand-picked vehicles from verified sellers across India
            </p>
          </div>
          
          <Button variant="outline" className="hidden md:flex items-center space-x-2">
            View All
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Badge variant="default" className="bg-saffron text-white">
            All
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
            Cars
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
            Bikes
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
            Under ₹5 Lakh
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
            Verified Only
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
            New Arrivals
          </Badge>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="text-center md:hidden">
          <Button className="w-full gradient-saffron text-white">
            View All Listings
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
