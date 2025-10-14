import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function People() {
  const [selectedView, setSelectedView] = useState('organizers');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Organizers data
  const coChairs = [
    { name: 'Monojit Choudhury', institution: 'MBZUAI', photoUrl: 'https://staticcdn.mbzuai.ac.ae/mbzuaiwpprd01/2024/01/monojit-choudhury-487px.jpg' },
    { name: 'Sunayana Sitaram', institution: 'Microsoft Research India', photoUrl: 'https://www.microsoft.com/en-us/research/wp-content/uploads/2025/07/3rf13z9u-192x300.png' }
  ];

  const executiveMembers = [
    { name: 'Aditya Vashistha', institution: 'Cornell University' },
    { name: 'Sunipa Dev', institution: 'Google' },
    { name: 'Fajri Koto', institution: 'MBZUAI' },
    { name: 'Elizabeth Churchill', institution: 'MBZUAI' }
  ];

  const organizingMembers = [
    { name: 'Ananya Agrawal' },
    { name: 'Sourabrata Mukherjee' },
    { name: 'Sougata Saha' },
    { name: 'Aseem Srivastava' },
    { name: 'Madhur Jindal' },
    { name: 'Gayatri Bhat' },
    { name: 'Prashant Kodali' }
  ];

  // Participants data - ADD YOUR PARTICIPANTS HERE
  const participants = [
    // { name: 'Sunipa Dev', institution: 'Google' },
    { name: 'Jacki O Neill', institution: 'Microsoft' },
    // { name: 'Aditya Vashistha', institution: 'Cornell University' },
    { name: 'Danish Pruthi', institution: 'IISc' },
    { name: 'Ishtiaque Ahmed', institution: 'Uo Toronto' },
    { name: 'Munmun De Choudhury', institution: 'Georgia Tech' },
    { name: 'Yasir Zaki', institution: 'NYU Abu Dhabi' },
    { name: 'Melissa Densmore', institution: 'UCT, South Africa' },
    { name: 'Anil B. Deolalikar', institution: 'UC Riverside' },
    { name: 'Chirantan Chatterjee', institution: 'MBZUAI / Sussex Abu Dhabi' },
    { name: 'Rida Qadri', institution: 'Google' },
    // { name: 'Gayatri Bhat', institution: 'Karya' },
    { name: 'Julia Kreutzer', institution: 'Cohere' },
    { name: 'Weibke Denecke', institution: 'MIT' },
    { name: 'Hellina Nigatu', institution: 'UC Berkeley (Ethiopia)' },
    { name: 'Joyojeet Pal', institution: 'UMich' },
    { name: 'Howard Lakougna', institution: 'Gates Foundation' },
    { name: 'Boulbaba', institution: 'Inception/Microsoft AI4SG' },
    { name: 'Kentaro Toyama', institution: 'University of Michigan' },
    { name: 'Talal Rahwan', institution: 'NYU Abu Dhabi' },
    { name: 'Luciana Benotti', institution: 'Universidad Nacional de Córdoba' },
    { name: 'Luis Chiruzzo', institution: 'Universidad de la República, Uruguay' },
    { name: 'Dr Ogedegbe', institution: 'NYU' },
    // { name: 'Monojit Choudhury', institution: 'MBZUAI' },
    // { name: 'Sunayana Sitaram', institution: 'Microsoft Research India' },
    // { name: 'Fajri Koto', institution: 'MBZUAI' },
    // { name: 'Elizabeth Churchill', institution: 'MBZUAI' },
    // { name: 'Sourabrata Mukherjee', institution: 'Microsoft Research India' },
    // { name: 'Sougata Saha', institution: 'MBZUAI' },
    // { name: 'Aseem', institution: 'MBZUAI' },
    // { name: 'Ananya', institution: 'MBZUAI' },
    // { name: 'Madhur', institution: 'MBZUAI' },
    // { name: 'Prashant Kodali', institution: 'Microsoft Research India' },
    { name: 'Kalika Bali', institution: 'Microsoft Research India' },
    { name: 'Vukosi Marivate', institution: 'Uo Pretoria' },
    { name: 'Alham Aji Fikri', institution: 'MBZUAI' },
    { name: 'Rohini Pande', institution: 'Yale' },
    { name: 'Animesh Mukherjee', institution: 'IIT Kgp' },
    { name: 'Bashar Alhafni', institution: 'MBZUAI' }
  ];

  const renderOrganizers = () => (
    <div>
      {/* Co-Chairs */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Co-Chairs</h3>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {coChairs.map((person, index) => (
            <div key={index} className="text-center">
              {/* <div className="w-40 h-40 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mx-auto mb-4"></div> */}
              <img
                src={person.photoUrl}
                alt={`Photo of ${person.name}`}
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
              <p className="text-indigo-600 font-medium">{person.institution}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Executive Members */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Executive Members</h3>
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {executiveMembers.map((person, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-bold text-gray-900">{person.name}</h3>
              <p className="text-indigo-600">{person.institution}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Organizing Members */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Organizing Members</h3>
        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {organizingMembers.map((person, index) => (
            <div key={index} className="text-center">
              <div className="w-28 h-28 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-base font-bold text-gray-900">{person.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderParticipants = () => (
    <div>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
        Meet the participants of AI4GS - researchers, students, and practitioners from across the Global South.
      </p>
      <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-6 max-w-6xl mx-auto">
        {participants.map((person, index) => (
          <div key={index} className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-400 rounded-full mx-auto mb-3"></div>
            <h3 className="text-sm font-bold text-gray-900">{person.name}</h3>
            {person.institution && (
              <p className="text-green-600 text-xs mt-1">{person.institution}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">People</h2>
        
        {/* Dropdown Menu */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-block">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg flex items-center gap-3 min-w-[200px] justify-between"
            >
              <span>{selectedView === 'organizers' ? 'Organizers' : 'Participants'}</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {dropdownOpen && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-10">
                <button
                  onClick={() => {
                    setSelectedView('organizers');
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-6 py-3 hover:bg-indigo-50 transition-colors ${
                    selectedView === 'organizers' ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  Organizers
                </button>
                <button
                  onClick={() => {
                    setSelectedView('participants');
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-6 py-3 hover:bg-indigo-50 transition-colors ${
                    selectedView === 'participants' ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  Participants
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-12">
          {selectedView === 'organizers' && renderOrganizers()}
          {selectedView === 'participants' && renderParticipants()}
        </div>
      </div>
    </div>
  );
}