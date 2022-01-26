import Navbar from '../../components/Header/header';
import CreatePost from '../CreatePost/CreatePost';
import Discription from '../Description/discription';
import FinshPost from '../FinshPost/FinishPost';
import Monitize from '../Monitize/monitize';
import Pagination from '../Pagination/pagination';
import PostBanner from '../PostBanner/postBanner';
import PostSection from '../PostSection/postSection';
import travel from '../../assets/travel.jpg'
import furniture from '../../assets/furniture.png'
import CryptoSection from '../CryptoSection/cryptoSection';
import ThirdHalf from '../ThirdHalf/thirdHalf';

function SecondHalf() {
  return (
    <div style={{ width: "80%" }} className='border-l border-gray-300 border-solid' >
      <Navbar />
      <div style={{ width: "100%" }} className="flex">
        <div style={{ width: "70%"  }}>
          <PostBanner src={travel} />
          <CryptoSection />
          <PostSection />
          <Pagination />
          <Monitize />
          <CreatePost />
          <Discription />
          <FinshPost />
          <PostBanner src={furniture} />
        </div>
        <div style={{ width: "30%"  }}>
          <ThirdHalf />
        </div>
      </div>
    </div>
  );
}

export default SecondHalf;
