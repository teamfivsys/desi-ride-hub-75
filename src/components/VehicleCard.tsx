
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Fuel, 
  Calendar, 
  Gauge,
  Shield,
  Star,
  Crown
} from 'lucide-react';

interface VehicleCardProps {
  vehicle: {
    id: string;
    title: string;
    price: string;
    originalPrice?: string;
    year: string;
    kmDriven: string;
    fuelType: string;
    ownerCount: string;
    location: string;
    images: string[];
    isVerified: boolean;
    isTopPick?: boolean;
    isPremium?: boolean;
    sellerRating: number;
    sellerName: string;
    postedDays: number;
  };
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
      {/* Image Section */}
      <div className="relative">
        <img
          src={vehicle.images[0] || "/placeholder.svg"}
          alt={vehicle.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 space-y-2">
          {vehicle.isTopPick && (
            <Badge className="bg-yellow-500 text-white">
              <Crown className="h-3 w-3 mr-1" />
              Top Pick
            </Badge>
          )}
          {vehicle.isPremium && (
            <Badge className="bg-purple-600 text-white">
              Premium
            </Badge>
          )}
          {vehicle.isVerified && (
            <Badge className="bg-verified text-white">
              <Shield className="h-3 w-3 mr-1" />
              Verified
            </Badge>
          )}
        </div>

        {/* Wishlist */}
        <div className="absolute top-3 right-3">
          <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-3 left-3">
          <Badge className="bg-white text-gray-900 text-lg font-bold px-3 py-1">
            ₹{vehicle.price}
            {vehicle.originalPrice && (
              <span className="line-through text-gray-500 text-sm ml-2">
                ₹{vehicle.originalPrice}
              </span>
            )}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Title */}
        <h3 className="font-semibold text-lg text-gray-900 mb-3 line-clamp-2">
          {vehicle.title}
        </h3>

        {/* Key Details */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-gray-400" />
            {vehicle.year}
          </div>
          <div className="flex items-center">
            <Gauge className="h-4 w-4 mr-1 text-gray-400" />
            {vehicle.kmDriven} km
          </div>
          <div className="flex items-center">
            <Fuel className="h-4 w-4 mr-1 text-gray-400" />
            {vehicle.fuelType}
          </div>
          <div className="flex items-center">
            <span className="text-xs text-gray-500">
              {vehicle.ownerCount} Owner
            </span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-1 text-gray-400" />
          {vehicle.location}
        </div>

        {/* Seller Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xs font-semibold">
                {vehicle.sellerName.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{vehicle.sellerName}</p>
              <div className="flex items-center">
                <Star className="h-3 w-3 text-yellow-500 mr-1" />
                <span className="text-xs text-gray-600">{vehicle.sellerRating}</span>
              </div>
            </div>
          </div>
          <Badge variant="secondary" className="text-xs">
            {vehicle.postedDays}d ago
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-x-2">
        <Button size="sm" variant="outline" className="flex-1">
          <Phone className="h-4 w-4 mr-1" />
          Call
        </Button>
        <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
          <MessageCircle className="h-4 w-4 mr-1" />
          WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;
