
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Camera, Upload, CheckCircle, Zap } from 'lucide-react';

const PostAdBanner = () => {
  const steps = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: 'Add Photos',
      description: 'Upload clear vehicle photos',
    },
    {
      icon: <Upload className="h-8 w-8" />,
      title: 'Enter Details',
      description: 'Fill basic vehicle information',
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Go Live',
      description: 'Your ad is live instantly',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20v20h20V20z"/%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-yellow-300" />
              <Badge className="bg-yellow-400 text-black font-semibold">
                FREE LISTING
              </Badge>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sell Your Vehicle in
              <span className="block text-yellow-300">3 Simple Steps</span>
            </h2>
            
            <p className="text-xl mb-8 text-orange-100">
              Join thousands of Indians who sell their vehicles quickly and safely on DesiRide Hub
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-lg">100% Free to post ads</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-lg">Reach 50 lakh+ buyers</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-lg">Get genuine inquiries</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-lg">Safe & secure platform</span>
              </div>
            </div>

            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Plus className="h-5 w-5 mr-2" />
              Post Your Ad Now
            </Button>
          </div>

          {/* Right Content - Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge className="bg-orange-500 text-white">
                          Step {index + 1}
                        </Badge>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Success Story */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">👨‍💼</span>
                  </div>
                  <div>
                    <p className="text-green-800 italic mb-2">
                      "Sold my bike in just 3 days! Great platform with genuine buyers."
                    </p>
                    <p className="text-green-600 font-medium">- Rahul, Mumbai</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostAdBanner;
