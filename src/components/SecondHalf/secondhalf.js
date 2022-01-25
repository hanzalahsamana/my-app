import react from 'react'
import Navbar from '../../components/Header/header';
import PostSection from '../PostSection/postSection';


function SecondHalf(){
  return (
    <div style={{width:"80%"}} >
          <Navbar />

          <div>
              <PostSection />
          </div>
    </div>
  );
}

export default SecondHalf;
