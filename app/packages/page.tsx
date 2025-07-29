'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PackagesPage = () => {
  const packages = [
    {
      id: 1,
      title: 'Romantic Paris Getaway',
      destination: 'Paris, France',
      duration: '5 Days, 4 Nights',
      price: 2999,
      originalPrice: 3999,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=600',
      includes: ['Round-trip flights', 'Luxury hotel', 'City tours', 'Seine river cruise'],
      highlights: ['Eiffel Tower visit', 'Louvre Museum', 'Montmartre district', 'French cuisine'],
      popular: true,
    },
    {
      id: 2,
      title: 'Tropical Bali Adventure',
      destination: 'Bali, Indonesia',
      duration: '7 Days, 6 Nights',
      price: 1899,
      originalPrice: 2499,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=600',
      includes: ['Round-trip flights', 'Beach resort', 'Island tours', 'Traditional spa'],
      highlights: ['Uluwatu Temple', 'Rice terraces', 'Beach clubs', 'Cultural shows'],
      popular: false,
    },
    {
      id: 3,
      title: 'Tokyo Culture Experience',
      destination: 'Tokyo, Japan',
      duration: '6 Days, 5 Nights',
      price: 3499,
      originalPrice: 4299,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg?auto=compress&cs=tinysrgb&w=600',
      includes: ['Round-trip flights', 'Modern hotel', 'City tours', 'Sushi experience'],
      highlights: ['Shibuya crossing', 'Traditional temples', 'Mount Fuji', 'Authentic cuisine'],
      popular: true,
    },
    {
      id: 4,
      title: 'Swiss Alps Retreat',
      destination: 'Interlaken, Switzerland',
      duration: '4 Days, 3 Nights',
      price: 2199,
      originalPrice: 2799,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600',
      includes: ['Round-trip flights', 'Mountain lodge', 'Cable car rides', 'Swiss cuisine'],
      highlights: ['Jungfraujoch', 'Lake Brienz', 'Alpine hiking', 'Chocolate tours'],
      popular: false,
    },
    {
      id: 5,
      title: 'Santorini Island Escape',
      destination: 'Santorini, Greece',
      duration: '5 Days, 4 Nights',
      price: 2799,
      originalPrice: 3599,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=600',
      includes: ['Round-trip flights', 'Cliffside hotel', 'Island tours', 'Wine tasting'],
      highlights: ['Oia sunset', 'Blue domes', 'Volcanic beaches', 'Greek cuisine'],
      popular: true,
    },
    {
      id: 6,
      title: 'New York City Lights',
      destination: 'New York, USA',
      duration: '4 Days, 3 Nights',
      price: 1699,
      originalPrice: 2199,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=600',
      includes: ['Round-trip flights', 'Manhattan hotel', 'Broadway show', 'City tours'],
      highlights: ['Times Square', 'Central Park', 'Statue of Liberty', 'Museums'],
      popular: false,
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-brand-sky to-brand-ocean text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Holiday Packages</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover curated travel experiences with our all-inclusive holiday packages
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 items-center justify-between"
          >
            <div className="flex flex-wrap gap-4">
              <select className="border rounded-lg px-4 py-2">
                <option>All Destinations</option>
                <option>Europe</option>
                <option>Asia</option>
                <option>Americas</option>
              </select>
              <select className="border rounded-lg px-4 py-2">
                <option>Any Duration</option>
                <option>3-5 Days</option>
                <option>6-8 Days</option>
                <option>9+ Days</option>
              </select>
              <select className="border rounded-lg px-4 py-2">
                <option>All Budgets</option>
                <option>Under $2000</option>
                <option>$2000-$3000</option>
                <option>$3000+</option>
              </select>
            </div>
            <div className="text-lg font-semibold text-gray-700">
              {packages.length} Packages Found
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Popular Badge */}
                    {pkg.popular && (
                      <div className="absolute top-4 left-4 bg-brand-sunset text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </div>
                    )}

                    {/* Rating */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-semibold text-sm">{pkg.rating}</span>
                      </div>
                    </div>

                    {/* Title and Location */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{pkg.destination}</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Duration and Price */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{pkg.duration}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-brand-sunset">${pkg.price}</div>
                        <div className="text-sm text-gray-500 line-through">${pkg.originalPrice}</div>
                      </div>
                    </div>

                    {/* Includes */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Package Includes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {pkg.includes.map((item, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-brand-sky rounded-full"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.highlights.slice(0, 3).map((highlight, i) => (
                          <span
                            key={i}
                            className="bg-brand-cloud text-brand-sky text-xs px-2 py-1 rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                        {pkg.highlights.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{pkg.highlights.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Book Button */}
                    <Button className="w-full bg-brand-sky hover:bg-brand-sky/90 text-white flex items-center justify-center space-x-2">
                      <span>Book Package</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-sunset to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Can't Find Your Dream Package?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our travel experts create a custom package tailored to your preferences and budget
            </p>
            <Button className="bg-white text-brand-sunset hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Create Custom Package
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;