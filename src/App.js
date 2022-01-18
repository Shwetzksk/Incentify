import * as React from 'react'
import Landing from './sections/landing/Landing';
import Navbar from './components/navbar/Navbar';
import Purpose from './sections/purpose/Purpose';
import Clubs from './sections/clubs/Clubs';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Purpose />
      <Clubs />
      <Purpose />
    </div>
  );
}