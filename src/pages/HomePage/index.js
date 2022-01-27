import FirstHalf from '../../components/FirstHalf';
import Footer from '../../components/Footer';
import SecondHalf from '../../components/SecondHalf';


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
