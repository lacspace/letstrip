'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Wifi, Car, Coffee, Waves, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HotelsPage = () => {
  const [viewMode, setViewMode] = useState('grid');

  const hotels = [
    {
      id: 1,
      name: 'Grand Ocean Resort',
      location: 'Miami Beach, FL',
      rating: 4.8,
      reviews: 1234,
      price: 299,
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=400',
      amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant'],
      description: 'Luxury beachfront resort with stunning ocean views'
    },
    {
      id: 2,
      name: 'Urban Boutique Hotel',
      location: 'Manhattan, NY',
      rating: 4.6,
      reviews: 892,
      price: 459,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400',
      amenities: ['WiFi', 'Gym', 'Bar', 'Room Service'],
      description: 'Modern boutique hotel in the heart of the city'
    },
    {
      id: 3,
      name: 'Mountain View Lodge',
      location: 'Aspen, CO',
      rating: 4.7,
      reviews: 567,
      price: 389,
      image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=400',
      amenities: ['WiFi', 'Fireplace', 'Ski Access', 'Restaurant'],
      description: 'Cozy lodge with breathtaking mountain views'
    },
    {
      id: 4,
      name: 'Seaside Paradise Resort',
      location: 'Malibu, CA',
      rating: 4.9,
      reviews: 2103,
      price: 699,
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400',
      amenities: ['WiFi', 'Beach Access', 'Spa', 'Fine Dining'],
      description: 'Exclusive beachfront resort with private beach'
    },
  ];

  const amenityIcons = {
    'WiFi': Wifi,
    'Pool': Waves,
    'Spa': Coffee,
    'Restaurant': Coffee,
    'Gym': Coffee,
    'Bar': Coffee,
    'Room Service': Coffee,
    'Fireplace': Coffee,
    'Ski Access': Coffee,
    'Beach Access': Waves,
    'Fine Dining': Coffee,
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Stay</h1>
            <p className="text-xl text-gray-600">Discover amazing hotels with the best prices</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-80"
          >
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Filter className="h-5 w-5 text-brand-sky" />
                  <h3 className="text-lg font-semibold">Filters</h3>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Location</h4>
                  <input
                    type="text"
                    placeholder="Enter destination"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-sky focus:border-transparent"
                  />
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Price per night</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>$50</span>
                      <span>$1000+</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="1000"
                      className="w-full accent-brand-sky"
                    />
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Star Rating</h4>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <label key={stars} className="flex items-center space-x-2">
                        <input type="checkbox" className="text-brand-sky focus:ring-brand-sky" />
                        <div className="flex">
                          {[...Array(stars)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm">& up</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Amenities</h4>
                  <div className="space-y-2">
                    {['WiFi', 'Pool', 'Gym', 'Spa', 'Restaurant', 'Bar'].map((amenity) => (
                      <label key={amenity} className="flex items-center space-x-2">
                        <input type="checkbox" className="text-brand-sky focus:ring-brand-sky" />
                        <span className="text-sm">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-brand-sky hover:bg-brand-sky/90">
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Hotel Results */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex justify-between items-center"
            >
              <h2 className="text-2xl font-bold text-gray-900">
                {hotels.length} Hotels Found
              </h2>
              <div className="flex items-center space-x-4">
                <select className="border rounded-lg px-4 py-2">
                  <option>Sort by: Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating: High to Low</option>
                </select>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {hotels.map((hotel, index) => (
                <motion.div
                  key={hotel.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="font-semibold text-sm">{hotel.rating}</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-brand-sunset">${hotel.price}</div>
                          <div className="text-sm text-gray-600">per night</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{hotel.location}</span>
                      </div>

                      <p className="text-gray-600 mb-4">{hotel.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {hotel.amenities.slice(0, 4).map((amenity) => {
                          const IconComponent = amenityIcons[amenity] || Coffee;
                          return (
                            <div key={amenity} className="flex items-center space-x-1 bg-gray-100 rounded-full px-3 py-1">
                              <IconComponent className="h-3 w-3 text-gray-600" />
                              <span className="text-xs text-gray-600">{amenity}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(hotel.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">({hotel.reviews} reviews)</span>
                        </div>
                        <Button className="bg-brand-sky hover:bg-brand-sky/90 text-white">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsPage;