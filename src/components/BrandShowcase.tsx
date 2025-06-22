
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BrandShowcase = () => {
  const carBrands = [
    { name: 'Maruti Suzuki', logo: '🚗', count: '45,000+', color: 'text-blue-600' },
    { name: 'Hyundai', logo: '🚙', count: '25,000+', color: 'text-red-600' },
    { name: 'Tata', logo: '🚕', count: '18,000+', color: 'text-purple-600' },
    { name: 'Mahindra', logo: '🚐', count: '12,000+', color: 'text-orange-600' },
    { name: 'Honda', logo: '🚗', count: '15,000+', color: 'text-gray-600' },
    { name: 'Toyota', logo: '🚙', count: '8,000+', color: 'text-red-500' },
  ];

  const bikeBrands = [
    { name: 'Hero', logo: '🏍️', count: '30,000+', color: 'text-blue-600' },
    { name: 'Bajaj', logo: '🛵', count: '22,000+', color: 'text-orange-600' },
    { name: 'TVS', logo: '🏍️', count: '18,000+', color: 'text-red-600' },
    { name: 'Royal Enfield', logo: '🏍️', count: '12,000+', color: 'text-green-600' },
    { name: 'Honda', logo: '🛵', count: '20,000+', color: 'text-gray-600' },
    { name: 'Yamaha', logo: '🏍️', count: '10,000+', color: 'text-purple-600' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by <span className="text-saffron">Popular Brands</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your perfect vehicle from India's most trusted automobile brands
          </p>
        </div>

        {/* Car Brands */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-gray-900">🚗 Cars</h3>
            <Badge variant="outline" className="text-saffron border-saffron">
              View All Cars
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {carBrands.map((brand, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 border-2 hover:border-saffron"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{brand.logo}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{brand.name}</h4>
                  <p className={`text-sm font-medium ${brand.color}`}>{brand.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bike Brands */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-gray-900">🏍️ Bikes & Scooters</h3>
            <Badge variant="outline" className="text-teal border-teal">
              View All Bikes
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {bikeBrands.map((brand, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 border-2 hover:border-teal"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{brand.logo}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{brand.name}</h4>
                  <p className={`text-sm font-medium ${brand.color}`}>{brand.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
