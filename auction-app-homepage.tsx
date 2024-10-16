import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HomePage = () => {
  const [auctions, setAuctions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setAuctions([
      { id: 1, title: 'Vintage Timepiece', currentBid: 15000, endTime: '2024-10-20', image: '/api/placeholder/400/300' },
      { id: 2, title: 'Modernist Sculpture', currentBid: 7500, endTime: '2024-10-22', image: '/api/placeholder/400/300' },
      { id: 3, title: 'Rare Coin Collection', currentBid: 30000, endTime: '2024-10-25', image: '/api/placeholder/400/300' },
    ]);
  }, []);

  const filteredAuctions = auctions.filter(auction =>
    auction.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' }).format(amount);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Redefine Your Collection</h1>
          <p className="text-xl mb-8">Discover unique pieces that inspire. Bid with confidence.</p>
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full text-lg">
            Explore Auctions
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Input
          type="text"
          placeholder="Search auctions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-8 max-w-md mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAuctions.map(auction => (
            <Card key={auction.id} className="overflow-hidden border-0 shadow-lg rounded-lg">
              <img src={auction.image} alt={auction.title} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{auction.title}</h2>
                <p className="text-lg font-medium mb-4">
                  Current Bid: {formatCurrency(auction.currentBid)}
                </p>
                <p className="text-sm text-gray-500 mb-4">Ends: {auction.endTime}</p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                  Place Bid
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 Apple-Inspired Auctions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
