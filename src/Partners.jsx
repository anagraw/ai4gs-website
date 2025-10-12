import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Partners({ onContactClick }) {
  // Partners data - ADD YOUR PARTNERS HERE
  const platinumSponsors = [
    { name: 'Partner 1', logo: null },
    { name: 'Partner 2', logo: null },
    { name: 'Partner 3', logo: null }
  ];

  const goldSponsors = [
    { name: 'Partner 1', logo: null },
    { name: 'Partner 2', logo: null },
    { name: 'Partner 3', logo: null },
    { name: 'Partner 4', logo: null }
  ];

  const silverSponsors = [
    { name: 'Partner 1', logo: null },
    { name: 'Partner 2', logo: null },
    { name: 'Partner 3', logo: null },
    { name: 'Partner 4', logo: null },
    { name: 'Partner 5', logo: null },
    { name: 'Partner 6', logo: null }
  ];

  return (
    <div className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Partners & Sponsors</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          We collaborate with leading universities, research institutions, and industry partners 
          committed to advancing AI in the Global South.
        </p>
        
        {/* Platinum Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Platinum Sponsors</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {platinumSponsors.map((sponsor, index) => (
              <div key={index} className="bg-white p-12 rounded-lg shadow-lg flex items-center justify-center border-2 border-indigo-200">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-3"></div>
                  <p className="text-gray-600 font-semibold">{sponsor.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Gold Sponsors</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {goldSponsors.map((sponsor, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg mx-auto mb-3"></div>
                  <p className="text-gray-600 text-sm">{sponsor.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Silver Sponsors</h3>
          <div className="grid md:grid-cols-6 sm:grid-cols-3 gap-6">
            {silverSponsors.map((sponsor, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-2"></div>
                  <p className="text-gray-600 text-xs">{sponsor.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button 
            onClick={onContactClick}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
          >
            Become a Partner
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}