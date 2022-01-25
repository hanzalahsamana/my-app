import react from 'react'
import FirstHalf from '../../components/FirstHalf/firstHalf';
import SecondHalf from '../../components/SecondHalf/secondhalf';


function HomePage() {
  return (
    <div className="flex">
        <FirstHalf />
        <SecondHalf />
    </div>
  );
}

export default HomePage;
