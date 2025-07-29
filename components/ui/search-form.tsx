'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SearchForm = () => {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    departure: '',
    return: '',
    travelers: '1',
  });

  const handleInputChange = (field: string, value: string) => {
    setSearchData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-white rounded-2xl shadow-2xl p-6 md:p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* From */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Departure city"
              value={searchData.from}
              onChange={(e) => handleInputChange('from', e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        {/* To */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Destination city"
              value={searchData.to}
              onChange={(e) => handleInputChange('to', e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        {/* Departure Date */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Departure</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="date"
              value={searchData.departure}
              onChange={(e) => handleInputChange('departure', e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        {/* Return Date */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">Return</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="date"
              value={searchData.return}
              onChange={(e) => handleInputChange('return', e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        {/* Travelers & Search Button */}
        <div className="flex flex-col justify-end">
          <div className="relative mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Travelers</label>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={searchData.travelers}
                onChange={(e) => handleInputChange('travelers', e.target.value)}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-sky focus:border-transparent"
              >
                <option value="1">1 Traveler</option>
                <option value="2">2 Travelers</option>
                <option value="3">3 Travelers</option>
                <option value="4">4+ Travelers</option>
              </select>
            </div>
          </div>
          <Button className="bg-brand-sunset hover:bg-brand-sunset/90 text-white h-12 text-lg font-semibold flex items-center justify-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Search</span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchForm;