import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Import all photos from the local photo directory
import AdityaVashistha from '../photos/Aditya Vashistha.jpeg';
import AlhamAjiFikri from '../photos/Alham Aji Fikri.jpg';
import AnanyaAgrawal from '../photos/Ananya Agrawal.jpg';
import AnimeshMukherjee from '../photos/Animesh Mukherjee.jpg';
import AseemSrivastava from '../photos/Aseem Srivastava.jpg';
import BasharAlhafni from '../photos/Bashar Alhafni.png';
import BoulbabaBenAmor from '../photos/Boulbaba Ben Amor.png';
import ChirantanChatterjee from '../photos/Chirantan Chatterjee.jpg';
import DanishPruthi from '../photos/Danish Pruthi.jpg';
import ElizabethChurchill from '../photos/Elizabeth Churchill.jpg';
import FajriKoto from '../photos/Fajri Koto.png';
import GayatriBhat from '../photos/Gayatri Bhat.jpg';
import HellinaNigatu from '../photos/Hellina Nigatu.png';
import HowardLakougna from '../photos/Howard Lakougna.jpeg';
import IshtiaqueAhmed from '../photos/Ishtiaque Ahmed.jpg';
import JackiONeill from '../photos/Jacki O Neill.jpg';
import JoyojeetPal from '../photos/Joyojeet Pal.jpg';
import KalikaBali from '../photos/Kalika Bali.jpg';
import KentaroToyama from '../photos/Kentaro Toyama.jpg';
import LucianaBenotti from '../photos/Luciana Benotti.jpeg';
import LuizChiruzzo from '../photos/Luiz Chiruzzo.jpg';
import MadhurJindal from '../photos/Madhur Jindal.jpg';
import MelissaDensmore from '../photos/Melissa Densmore.jpg';
import MonojitChoudhury from '../photos/Monojit Choudhury.jpg';
import MunmunDeChoudhury from '../photos/Munmun De Choudhury.png';
// import NaiyarrahHussain from '../photos/Naiyarrah Hussain.jpg';
import WessamEzzeddine from '../photos/Wessam Ezzeddine.jpg'
import PrashantKodali from '../photos/Prashant Kodali.jpg';
import RidaQadri from '../photos/Rida Qadri.jpg';
// import RohiniPande from '../photos/Rohini Pande.jpg';
import SougataSaha from '../photos/Sougata Saha.jpeg';
import SourabrataMukherjee from '../photos/Sourabrata Mukherjee.jpg';
import SunayanaSitaram from '../photos/Sunayana Sitaram.png';
import SunipaDev from '../photos/Sunipa Dev.jpg';
import TalalRahwan from '../photos/Talal Rahwan.jpg';
import VukosiMarivate from '../photos/Vukosi Marivate.jpg';
import WeibkeDenecke from '../photos/Wiebke Denecke.jpg';
import YasirZaki from '../photos/Yasir Zaki.png';
import Yosephine from '../photos/Yosephine.jpg';
import AnilBDeolalikar from '../photos/‪Anil B. Deolalikar.png';
import JuliaKreutzer from '../photos/Julia Kreutzer.jpg';
import GbengaOgedegbe from '../photos/Gbenga Ogedegbe.jpg';
import ThamarSolorio from '../photos/Thamar Solorio.jpg';

export default function People() {
  const [selectedView, setSelectedView] = useState('organizers');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Sorted alphabetically by name

  const coChairs = [
    { name: 'Monojit Choudhury', institution: 'MBZUAI', photoUrl: MonojitChoudhury },
    { name: 'Sunayana Sitaram', institution: 'Microsoft Research India', photoUrl: SunayanaSitaram }
  ].sort((a, b) => a.name.localeCompare(b.name));

  const executiveMembers = [
    { name: 'Aditya Vashistha', institution: 'Cornell University', photoUrl: AdityaVashistha },
    { name: 'Elizabeth Churchill', institution: 'MBZUAI', photoUrl: ElizabethChurchill },
    { name: 'Fajri Koto', institution: 'MBZUAI', photoUrl: FajriKoto },
    { name: 'Sunipa Dev', institution: 'Google', photoUrl: SunipaDev }
  ].sort((a, b) => a.name.localeCompare(b.name));

  const organizingMembers = [
    { name: 'Aseem Srivastava', photoUrl: AseemSrivastava },
    { name: 'Ananya Agrawal', photoUrl: AnanyaAgrawal },
    { name: 'Gayatri Bhat', photoUrl: GayatriBhat },
    { name: 'Madhur Jindal', photoUrl: MadhurJindal },
    { name: 'Prashant Kodali', photoUrl: PrashantKodali },
    { name: 'Sougata Saha', photoUrl: SougataSaha },
    { name: 'Sourabrata Mukherjee', photoUrl: SourabrataMukherjee } // replaced souroPhoto
  ].sort((a, b) => a.name.localeCompare(b.name));

  // Sort participants alphabetically
  const participants = [
    { name: 'Alham Aji Fikri', institution: 'MBZUAI', photoUrl: AlhamAjiFikri },
    { name: 'Anil B. Deolalikar', institution: 'UC Riverside', photoUrl: AnilBDeolalikar },
    { name: 'Animesh Mukherjee', institution: 'IIT Kgp', photoUrl: AnimeshMukherjee },
    { name: 'Bashar Alhafni', institution: 'MBZUAI', photoUrl: BasharAlhafni },
    { name: 'Boulbaba Ben Amor', institution: 'Inception/Microsoft AI4SG', photoUrl: BoulbabaBenAmor },
    { name: 'Chirantan Chatterjee', institution: 'MBZUAI / Sussex Abu Dhabi', photoUrl: ChirantanChatterjee },
    { name: 'Danish Pruthi', institution: 'IISc', photoUrl: DanishPruthi },
    // { name: 'Hellina Nigatu', institution: 'UC Berkeley (Ethiopia)', photoUrl: HellinaNigatu },
    { name: 'Gbenga Ogedegbe', institution: 'NYU', photoUrl: GbengaOgedegbe },
    { name: 'Howard Lakougna', institution: 'Gates Foundation', photoUrl: HowardLakougna },
    { name: 'Ishtiaque Ahmed', institution: 'Uo Toronto', photoUrl: IshtiaqueAhmed },
    { name: 'Jacki O Neill', institution: 'Microsoft', photoUrl: JackiONeill },
    { name: 'Joyojeet Pal', institution: 'UMich', photoUrl: JoyojeetPal },
    { name: 'Julia Kreutzer', institution: 'Cohere', photoUrl: JuliaKreutzer },
    { name: 'Kalika Bali', institution: 'Microsoft Research India', photoUrl: KalikaBali },
    { name: 'Kentaro Toyama', institution: 'University of Michigan', photoUrl: KentaroToyama },
    { name: 'Luciana Benotti', institution: 'Universidad Nacional de Córdoba', photoUrl: LucianaBenotti },
    { name: 'Luis Chiruzzo', institution: 'Universidad de la República, Uruguay', photoUrl: LuizChiruzzo },
    // { name: 'Madhur Jindal', institution: 'MBZUAI', photoUrl: MadhurJindal },
    { name: 'Melissa Densmore', institution: 'UCT, South Africa', photoUrl: MelissaDensmore },
    // { name: 'Monojit Choudhury', institution: 'MBZUAI', photoUrl: MonojitChoudhury },
    { name: 'Munmun De Choudhury', institution: 'Georgia Tech', photoUrl: MunmunDeChoudhury },
    // { name: 'Naiyarrah Hussain', photoUrl: NaiyarrahHussain },
    { name: 'Wessam Ezzeddine', institution: 'AI Safety UAE', photoUrl: WessamEzzeddine },
    // { name: 'Prashant Kodali', institution: 'Microsoft Research India', photoUrl: PrashantKodali },
    { name: 'Rida Qadri', institution: 'Google', photoUrl: RidaQadri },
    // { name: 'Sougata Saha', institution: 'MBZUAI', photoUrl: SougataSaha },
    // { name: 'Sunayana Sitaram', institution: 'Microsoft Research India', photoUrl: SunayanaSitaram },
    { name: 'Talal Rahwan', institution: 'NYU Abu Dhabi', photoUrl: TalalRahwan },
    { name: 'Thamar Solorio', institution: 'MBZUAI', photoUrl: ThamarSolorio },
    { name: 'Vukosi Marivate', institution: 'Uo Pretoria', photoUrl: VukosiMarivate },
    { name: 'Weibke Denecke', institution: 'MIT', photoUrl: WeibkeDenecke },
    { name: 'Yasir Zaki', institution: 'NYU Abu Dhabi', photoUrl: YasirZaki },
    { name: 'Yosephine', institution: 'AI Singapore', photoUrl: Yosephine }
  ].sort((a, b) => a.name.localeCompare(b.name));

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
              {/* <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full mx-auto mb-4"></div> */}
              <img
                src={person.photoUrl}
                alt={`Photo of ${person.name}`}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-gray-900">{person.name}</h3>
              <p className="text-indigo-600">{person.institution}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Organizing Members */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Organizing Members</h3>
        <div className="grid md:grid-cols-7 gap-8 max-w-6xl mx-auto">
          {organizingMembers.map((person, index) => (
            <div key={index} className="text-center">
              {/* <div className="w-28 h-28 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full mx-auto mb-4"></div> */}
              <img
                src={person.photoUrl}
                alt={`Photo of ${person.name}`}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
              />
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
            {/* <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-400 rounded-full mx-auto mb-3"></div> */}
            <img
                src={person.photoUrl}
                alt={`Photo of ${person.name}`}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
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