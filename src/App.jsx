 import React from 'react';
import './index.css'; // Global styles
import './App.css'; // Import App-specific styles
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import FeaturedListings from './components/FeaturedListings';
import SearchSection from './components/SearchSection';
import PropertyGrid from './components/PropertyGrid';
import PropertySection from './components/PropertySection';
import RealEstateForm from './components/RealEstateForm';
import AgentSection from './components/AgentSection';
import ClientSection from './components/ClientSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Slideshow />
      <SearchSection />
      <FeaturedListings/>
      <PropertyGrid />
      <PropertySection />
      <RealEstateForm />
      <AgentSection />
      <ClientSection />
      <Footer/>
      

    </div>
  );
}

export default App;
