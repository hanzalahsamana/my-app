import react from 'react'
import FirstHalf from '../../components/FirstHalf/firstHalf';
import Navbar from '../../components/Header/header';

function HomePage() {
  return (
    <div className="flex">
        <FirstHalf />
    <Navbar />
    </div>
  );
}

export default HomePage;
