'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Clock, Globe, MapPin, Users, Plane } from 'lucide-react';
import SearchForm from '@/components/ui/search-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const HomePage = () => {
  const destinations = [
    {
      name: 'Paris, France',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From $899',
      description: 'City of Light and Love'
    },
    {
      name: 'Tokyo, Japan',
      image: 'https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From $1,299',
      description: 'Modern meets Traditional'
    },
    {
      name: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From $699',
      description: 'Tropical Paradise'
    },
    {
      name: 'New York, USA',
      image: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'From $799',
      description: 'The City That Never Sleeps'
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure Booking',
      description: 'Your data and payments are protected with bank-level security'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your travel needs'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Access to flights, hotels, and packages worldwide'
    },
    {
      icon: Star,
      title: 'Best Prices',
      description: 'AI-powered price comparison ensures you get the best deals'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'California, USA',
      rating: 5,
      text: 'LetsTrip made planning our honeymoon effortless. The AI recommendations were spot-on!'
    },
    {
      name: 'Michael Chen',
      location: 'Toronto, Canada',
      rating: 5,
      text: 'Best travel booking experience ever. Saved both time and money on our family vacation.'
    },
    {
      name: 'Emma Wilson',
      location: 'London, UK',
      rating: 5,
      text: 'The customer service is exceptional. They helped us during a flight delay at 2 AM!'
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Making Every Trip
              <span className="block bg-gradient-to-r from-brand-sunset to-yellow-300 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Discover amazing destinations, book flights, hotels, and create unforgettable memories 
              with our AI-powered travel platform.
            </p>
          </motion.div>

          <SearchForm />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <div className="flex items-center space-x-2 text-white">
              <Users className="h-5 w-5" />
              <span>10M+ Happy Travelers</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Plane className="h-5 w-5" />
              <span>500K+ Flights Booked</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <MapPin className="h-5 w-5" />
              <span>200+ Destinations</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-brand-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the world's most sought-after destinations with exclusive deals and packages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{destination.name}</h3>
                      <p className="text-sm opacity-90">{destination.description}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-brand-sunset">{destination.price}</span>
                      <Button className="bg-brand-sky hover:bg-brand-sky/90 text-white">
                        Explore
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose LetsTrip */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose LetsTrip?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge AI technology to provide you with the best travel experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-brand-sky to-brand-ocean p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join millions of satisfied customers who trust LetsTrip for their adventures
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-sky to-brand-ocean">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start planning your dream trip today with LetsTrip's AI-powered travel platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/flights">
                <Button className="bg-brand-sunset hover:bg-brand-sunset/90 text-white px-8 py-4 text-lg">
                  Book Flights
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/packages">
                <Button variant="outline" className="border-white text-dark hover:bg-white hover:text-brand-sky px-8 py-4 text-lg">
                  Explore Packages
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;