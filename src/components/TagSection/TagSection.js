import { faBookOpen, faBriefcase, faHome, faLifeRing, faLightbulb, faMicrophone, faRecycle, faSeedling, faVideo } from '@fortawesome/free-solid-svg-icons';
import Tags from '../Tags/tags';

function TagSection() {
  return (
    <div class="h-full mb-2 pb-2 border-b border-gray-300 border-solid">
      <Tags text="Home" bgColor="bg-blue-500" icon={faHome} color="text-slate-50	" />
      <Tags text="myBook" bgColor="bg-gray-100" icon={faBookOpen} iconColor="text-blue-500" />
      <Tags text="myVid" bgColor="bg-gray-100" icon={faVideo} iconColor="text-blue-500" />
      <Tags text="myIdea" bgColor="bg-gray-100" icon={faLightbulb} iconColor="text-blue-500" />
      <Tags text="myJob" bgColor="bg-gray-100" icon={faBriefcase} iconColor="text-blue-500" />
      <Tags text="myPodcast" bgColor="bg-gray-100" icon={faMicrophone} iconColor="text-blue-500" />
      <Tags text="myReuse" bgColor="bg-gray-100" icon={faRecycle} iconColor="text-blue-500" />
      <Tags text="mySlowFood" bgColor="bg-gray-100" icon={faSeedling} iconColor="text-blue-500" />
      <Tags text="myCm" bgColor="bg-gray-100" icon={faLifeRing} iconColor="text-blue-500" />
    </div>
  );
}

export default TagSection;
