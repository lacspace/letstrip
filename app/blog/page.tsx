'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Hidden Gems in Southeast Asia You Must Visit',
      excerpt: 'Discover breathtaking destinations off the beaten path that offer incredible experiences without the crowds.',
      image: 'https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Destinations',
      featured: true,
    },
    {
      id: 2,
      title: 'The Ultimate Guide to Budget Travel in Europe',
      excerpt: 'Learn how to explore Europe on a shoestring budget with these practical tips and insider secrets.',
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'Tips & Tricks',
      featured: false,
    },
    {
      id: 3,
      title: 'Digital Nomad Hotspots: Where to Work Remotely in 2024',
      excerpt: 'The best cities for digital nomads offering great wifi, affordable living, and vibrant communities.',
      image: 'https://images.pexels.com/photos/1010473/pexels-photo-1010473.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Emma Rodriguez',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Remote Work',
      featured: false,
    },
    {
      id: 4,
      title: 'Sustainable Travel: How to Explore Responsibly',
      excerpt: 'Make a positive impact while traveling with these eco-friendly practices and sustainable tourism tips.',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'Sustainability',
      featured: true,
    },
    {
      id: 5,
      title: 'Food Adventures: Street Food Capitals of the World',
      excerpt: 'Embark on a culinary journey through the world\'s best street food destinations and local delicacies.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Lisa Wang',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Food & Culture',
      featured: false,
    },
    {
      id: 6,
      title: 'Solo Female Travel: Safety Tips and Empowering Destinations',
      excerpt: 'Essential safety advice and inspiring destinations for women traveling solo around the world.',
      image: 'https://images.pexels.com/photos/1134204/pexels-photo-1134204.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Maria Garcia',
      date: '2024-01-03',
      readTime: '11 min read',
      category: 'Solo Travel',
      featured: false,
    },
  ];

  const categories = ['All', 'Destinations', 'Tips & Tricks', 'Remote Work', 'Sustainability', 'Food & Culture', 'Solo Travel'];
  
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-sky to-brand-ocean text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Travel Blog</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover travel tips, hidden destinations, and inspiring stories from fellow adventurers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
              <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-brand-sunset text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="text-brand-sky font-semibold text-sm">{featuredPost.category}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                    <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${featuredPost.id}`}>
                      <Button className="bg-brand-sky hover:bg-brand-sky/90 text-white w-fit">
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">Stay updated with our latest travel insights and tips</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-brand-sky font-semibold text-sm">{post.category}</span>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-sky transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="ghost" className="text-brand-sky hover:text-brand-sky/80 p-0">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-brand-sunset to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Never Miss an Adventure
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest travel tips, destination guides, 
              and exclusive deals delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-brand-sunset hover:bg-gray-100 px-8 py-4 font-semibold whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;