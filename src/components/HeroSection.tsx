
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Car, Bike, TrendingUp } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-teal-50 py-12 md:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            India's <span className="text-white">Trusted</span>
            <br />
            Vehicle Marketplace
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Buy & sell used cars and bikes with complete transparency. 
            <span className="text-teal font-semibold"> Over 2 lakh+ verified listings</span> across India.
          </p>

          {/* Trust Metrics */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-saffron">2L+</div>
              <div className="text-sm text-gray-600">Active Listings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal">50K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-verified">95%</div>
              <div className="text-sm text-gray-600">Verified Sellers</div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <Select>
                <SelectTrigger className="h-12">
                  <Car className="h-4 w-4 mr-2 text-gray-500" />
                  <SelectValue placeholder="Vehicle Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="car">Cars</SelectItem>
                  <SelectItem value="bike">Bikes</SelectItem>
                  <SelectItem value="scooter">Scooters</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="maruti">Maruti Suzuki</SelectItem>
                  <SelectItem value="hyundai">Hyundai</SelectItem>
                  <SelectItem value="tata">Tata</SelectItem>
                  <SelectItem value="hero">Hero</SelectItem>
                  <SelectItem value="bajaj">Bajaj</SelectItem>
                  <SelectItem value="honda">Honda</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-12">
                  <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="bangalore">Bengaluru</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1">Under ₹1 Lakh</SelectItem>
                  <SelectItem value="1-3">₹1-3 Lakhs</SelectItem>
                  <SelectItem value="3-5">₹3-5 Lakhs</SelectItem>
                  <SelectItem value="5-10">₹5-10 Lakhs</SelectItem>
                  <SelectItem value="10+">Above ₹10 Lakhs</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full h-12 gradient-saffron text-white text-lg font-semibold">
              <Search className="h-5 w-5 mr-2" />
              Search Vehicles
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Badge variant="secondary" className="px-4 py-2 cursor-pointer hover:bg-orange-100">
              <TrendingUp className="h-4 w-4 mr-1" />
              Popular Cars
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 cursor-pointer hover:bg-orange-100">
              <Bike className="h-4 w-4 mr-1" />
              Best Bikes
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 cursor-pointer hover:bg-orange-100">
              Under ₹2 Lakhs
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 cursor-pointer hover:bg-orange-100">
              Verified Sellers
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
