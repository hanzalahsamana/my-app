import Navbar from '../Header/header';
import CreatePost from '../CreatePost';
import Discription from '../Description';
import FinshPost from '../FinshPost';
import Monitize from '../Monitize';
import Pagination from '../Pagination';
import PostBanner from '../PostBanner';
import PostSection from '../PostSection';
import travel from '../../assets/travel.jpg'
import furniture from '../../assets/furniture.png'
import CryptoSection from '../CryptoSection';
import ThirdHalf from '../ThirdHalf';

function SecondHalf() {
  return (
    <div className='border-l lg:w-4/5 md:w-2/3 w-full border-gray-300 border-solid' >
      <Navbar />
      <div  className="flex w-full">
        <div className="w-full lg:w-9/12 ">
          <div>
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
        </div>
        <div className='lg:w-1/4 '>
          <ThirdHalf />
        </div>
      </div>
    </div>
  );
}

export default SecondHalf;
