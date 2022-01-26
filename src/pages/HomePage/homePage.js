import FirstHalf from '../../components/FirstHalf/firstHalf';
import Footer from '../../components/footer/footer';
import SecondHalf from '../../components/SecondHalf/secondhalf';


function HomePage() {
  return (
    <div>
      <div className="flex">
        <FirstHalf />
        <SecondHalf />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
