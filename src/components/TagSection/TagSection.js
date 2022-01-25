import { faBookOpen, faBriefcase, faHome, faLifeRing, faLightbulb, faMicrophone, faRecycle, faSeedling, faVideo } from '@fortawesome/free-solid-svg-icons';
import react from 'react'
import Tags from '../Tags/tags';

function TagSection(){
  return (
    <div class="h-full mb-2 pb-2 border-b border-gray-300 border-solid">
          <Tags text="Home" bgColor="bg-blue-500" icon={faHome} color="text-white"/>
          <Tags text="myBook"  bgColor="bg-gray-100" icon={faBookOpen} />
          <Tags text="myVid" bgColor="bg-gray-100" icon={faVideo} />
          <Tags text="myIdea" bgColor="bg-gray-100" icon={faLightbulb}/>
          <Tags text="myJob" bgColor="bg-gray-100" icon={faBriefcase}/>
          <Tags text="myPodcast" bgColor="bg-gray-100"  icon={faMicrophone}/>
          <Tags text="myReuse" bgColor="bg-gray-100" icon={faRecycle}/>
          <Tags text="mySlowFood" bgColor="bg-gray-100"icon={faSeedling} />
          <Tags text="myCm"  bgColor="bg-gray-100" icon={faLifeRing} />
    </div>
  );
}

export default TagSection;
