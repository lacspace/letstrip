'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, SlidersHorizontal, Plane, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SearchForm from '@/components/ui/search-form';

const FlightsPage = () => {
  const [filters, setFilters] = useState({
    priceRange: [100, 2000],
    stops: 'any',
    airlines: [],
    departure: 'any',
  });

  const flights = [
    {
      id: 1,
      airline: 'Emirates',
      logo: '🛫',
      from: 'NYC',
      to: 'DXB',
      departure: '08:30',
      arrival: '22:45',
      duration: '14h 15m',
      stops: 'Non-stop',
      price: 1299,
      class: 'Economy',
    },
    {
      id: 2,
      airline: 'Lufthansa',
      logo: '✈️',
      from: 'NYC',
      to: 'FRA',
      departure: '14:20',
      arrival: '03:40+1',
      duration: '7h 20m',
      stops: 'Non-stop',
      price: 899,
      class: 'Economy',
    },
    {
      id: 3,
      airline: 'Qatar Airways',
      logo: '🛩️',
      from: 'NYC',
      to: 'DOH',
      departure: '01:30',
      arrival: '20:15',
      duration: '12h 45m',
      stops: '1 Stop',
      price: 1099,
      class: 'Economy',
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Search Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <SearchForm />
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
                  <SlidersHorizontal className="h-5 w-5 text-brand-sky" />
                  <h3 className="text-lg font-semibold">Filters</h3>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Price Range</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>$100</span>
                      <span>$2000+</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="2000"
                      className="w-full accent-brand-sky"
                    />
                  </div>
                </div>

                {/* Stops */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Stops</h4>
                  <div className="space-y-2">
                    {['Any', 'Non-stop', '1 Stop', '2+ Stops'].map((stop) => (
                      <label key={stop} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="stops"
                          className="text-brand-sky focus:ring-brand-sky"
                        />
                        <span className="text-sm">{stop}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Departure Time */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Departure Time</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {['Morning', 'Afternoon', 'Evening', 'Night'].map((time) => (
                      <button
                        key={time}
                        className="p-2 text-sm border rounded-lg hover:bg-brand-sky hover:text-white transition-colors"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-brand-sky hover:bg-brand-sky/90">
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Flight Results */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex justify-between items-center"
            >
              <h2 className="text-2xl font-bold text-gray-900">
                Flight Results ({flights.length})
              </h2>
              <select className="border rounded-lg px-4 py-2">
                <option>Sort by: Best</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Duration: Shortest</option>
              </select>
            </motion.div>

            <div className="space-y-4">
              {flights.map((flight, index) => (
                <motion.div
                  key={flight.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="text-2xl">{flight.logo}</div>
                            <div>
                              <h3 className="font-semibold text-lg">{flight.airline}</h3>
                              <p className="text-gray-600">{flight.class}</p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-8">
                            <div className="text-center">
                              <div className="text-2xl font-bold">{flight.departure}</div>
                              <div className="text-gray-600">{flight.from}</div>
                            </div>

                            <div className="flex-1 text-center">
                              <div className="flex items-center justify-center space-x-2 mb-1">
                                <div className="w-8 h-px bg-gray-300"></div>
                                <Plane className="h-4 w-4 text-brand-sky" />
                                <div className="w-8 h-px bg-gray-300"></div>
                              </div>
                              <div className="text-sm text-gray-600">{flight.duration}</div>
                              <div className="text-sm text-gray-600">{flight.stops}</div>
                            </div>

                            <div className="text-center">
                              <div className="text-2xl font-bold">{flight.arrival}</div>
                              <div className="text-gray-600">{flight.to}</div>
                            </div>
                          </div>
                        </div>

                        <div className="lg:ml-8 mt-4 lg:mt-0 text-center lg:text-right">
                          <div className="text-3xl font-bold text-brand-sunset mb-2">
                            ${flight.price}
                          </div>
                          <Button className="bg-brand-sky hover:bg-brand-sky/90 text-white w-full lg:w-auto">
                            Select Flight
                          </Button>
                        </div>
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

export default FlightsPage;