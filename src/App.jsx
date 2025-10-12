import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Users, Calendar, Mail, BookOpen, Heart } from 'lucide-react';
import People from './People';
import Partners from './Partners';

export default function AI4GSWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('home');

  const navigation = [
    { name: 'Home', id: 'home', page: 'home' },
    { name: 'About', id: 'about', page: 'home' },
    { name: 'Events', id: 'events', page: 'home' },
    { name: 'People', id: 'people', page: 'people' },
    { name: 'Partners', id: 'partners', page: 'partners' },
    { name: 'Contact', id: 'contact', page: 'home' },
  ];

  // Scroll spy effect
  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'events', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigation = (item) => {
    if (item.page !== 'home') {
      setCurrentPage(item.page);
      setActiveSection(item.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('home');
      setTimeout(() => scrollToSection(item.id), 100);
    }
    setMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    setCurrentPage('home');
    setTimeout(() => scrollToSection('contact'), 100);
  };

  const eventsData = [
    {
      day: 'Day 1',
      date: 'December 1st, 2025',
      events: [
        { time: '09:00 AM', title: 'Event 1', description: 'Opening keynote and welcome session' },
        { time: '11:00 AM', title: 'Event 2', description: 'Panel discussion on AI for agriculture' },
        { time: '02:00 PM', title: 'Event 3', description: 'Workshop: ML fundamentals' },
        { time: '04:00 PM', title: 'Event 4', description: 'Poster session and networking' },
        { time: '06:00 PM', title: 'Event 5', description: 'Evening social event' },
      ]
    },
    {
      day: 'Day 2',
      date: 'December 2nd, 2025',
      events: [
        { time: '09:00 AM', title: 'Event 1', description: 'Research talks: Healthcare AI' },
        { time: '11:00 AM', title: 'Event 2', description: 'Hands-on tutorial: NLP for low-resource languages' },
        { time: '02:00 PM', title: 'Event 3', description: 'Industry showcase' },
        { time: '04:00 PM', title: 'Event 4', description: 'Breakout sessions' },
        { time: '06:00 PM', title: 'Event 5', description: 'Collaborative dinner' },
      ]
    },
    {
      day: 'Day 3',
      date: 'December 3rd, 2025',
      events: [
        { time: '09:00 AM', title: 'Event 1', description: 'Climate AI presentations' },
        { time: '11:00 AM', title: 'Event 2', description: 'Ethics and responsible AI panel' },
        { time: '02:00 PM', title: 'Event 3', description: 'Student research competition' },
        { time: '04:00 PM', title: 'Event 4', description: 'Future directions roundtable' },
        { time: '06:00 PM', title: 'Event 5', description: 'Closing ceremony' },
      ]
    }
  ];

  const renderHomePage = () => (
    <>
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI for Global South
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering communities through accessible artificial intelligence research, 
            education, and collaboration across the Global South
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
            >
              Learn More
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg border-2 border-indigo-600"
            >
              Get Involved
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About AI4GS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-indigo-50">
              <BookOpen className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Research</h3>
              <p className="text-gray-600">
                Advancing AI research that addresses challenges unique to the Global South, 
                from agriculture to healthcare and education.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-indigo-50">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                Building a vibrant network of researchers, students, and practitioners 
                committed to democratizing AI knowledge and tools.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-indigo-50">
              <Heart className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
              <p className="text-gray-600">
                Creating meaningful change through AI solutions that are culturally relevant, 
                ethical, and accessible to underserved communities.
              </p>
            </div>
          </div>
          <div className="mt-12 max-w-4xl mx-auto text-gray-700 leading-relaxed">
            <p className="text-lg mb-4">
              AI4GS (AI for Global South) is an initiative dedicated to fostering artificial intelligence 
              research, education, and collaboration that specifically addresses the needs and challenges 
              of communities in the Global South.
            </p>
            <p className="text-lg">
              We believe that AI should be accessible, inclusive, and designed to solve real-world problems 
              faced by developing nations. Through symposiums, workshops, and collaborative projects, we aim 
              to bridge the gap between cutting-edge AI research and practical applications in resource-constrained 
              environments.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Program Schedule</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">December 1-3, 2025</p>
          
          <div className="space-y-12">
            {eventsData.map((dayData, dayIndex) => (
              <div key={dayIndex} className="relative">
                {/* Day Header */}
                <div className="flex items-center mb-8">
                  <div className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold">{dayData.day}</h3>
                    <p className="text-indigo-100 text-sm">{dayData.date}</p>
                  </div>
                </div>

                {/* Events Timeline */}
                <div className="relative pl-8 md:pl-12">
                  {/* Vertical Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-200"></div>

                  {/* Events */}
                  <div className="space-y-6">
                    {dayData.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="relative">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[35px] md:-left-[51px] top-2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow"></div>
                        
                        {/* Event Card */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-indigo-600">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-indigo-600 font-bold text-sm">{event.time}</span>
                                <h4 className="text-xl font-bold text-gray-900">{event.title}</h4>
                              </div>
                              <p className="text-gray-600">{event.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h2>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg border-2 border-indigo-100">
            <div className="mb-8 p-6 bg-white rounded-lg border-l-4 border-indigo-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">About This Event</h3>
              <p className="text-gray-700 leading-relaxed">
                This is a <span className="font-semibold text-indigo-600">precursor event and pre-gathering</span> to 
                the full AI4GS initiative. Join us for this inaugural session as we lay the foundation for a larger 
                symposium series dedicated to advancing AI research and applications across the Global South.
              </p>
            </div>

            <div className="flex items-start mb-6">
              <Mail className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                <a href="mailto:Ananya.Agrawal@mbzuai.ac.ae" className="text-indigo-600 hover:underline">
                  Ananya.Agrawal@mbzuai.ac.ae
                </a>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <Globe className="h-6 w-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Institution</h3>
                <p className="text-gray-700">Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Connect With Us</h3>
              <p className="text-gray-600 mb-4">
                Whether you're a researcher, student, or organization interested in AI for the Global South, 
                we'd love to hear from you. Reach out to learn about collaboration opportunities, participation 
                in this precursor event, or to get involved with the broader AI4GS initiative.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <button 
              onClick={() => {
                setCurrentPage('home');
                setTimeout(() => scrollToSection('home'), 100);
              }}
              className="flex items-center"
            >
              <Globe className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">AI4GS</span>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`${
                    (currentPage === item.page && activeSection === item.id)
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600'
                  } px-3 py-2 text-sm font-medium transition-colors`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-indigo-600"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <div className="pt-16">
        {currentPage === 'home' && renderHomePage()}
        {currentPage === 'people' && <People />}
        {currentPage === 'partners' && <Partners onContactClick={handleContactClick} />}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Globe className="h-6 w-6 mr-2" />
            <span className="text-xl font-bold">AI4GS</span>
          </div>
          <p className="text-gray-400 mb-4">AI for Global South Initiative</p>
          <p className="text-gray-500 text-sm">
            © 2025 AI4GS. Empowering communities through accessible AI.
          </p>
        </div>
      </footer>
    </div>
  );
}