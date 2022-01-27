import { faBookOpen, faBriefcase, faHome, faLifeRing, faLightbulb, faMicrophone, faRecycle, faSeedling, faVideo } from '@fortawesome/free-solid-svg-icons';
import Tags from '../Tags';
import style from './index.module.css'

function TagSection() {
  return (
    <div class="h-full  mb-2 pb-2 border-b border-gray-300 border-solid">
      <Tags text="Home" bgColor="bg-blue-500" icon={faHome} color="text-slate-50	" />
      <Tags text="myBook" bgColor={style.bgColor} icon={faBookOpen} iconColor={style.textColor} />
      <Tags text="myVid" bgColor={style.bgColor} icon={faVideo} iconColor={style.textColor} />
      <Tags text="myIdea" bgColor={style.bgColor} icon={faLightbulb} iconColor={style.textColor} />
      <Tags text="myJob" bgColor={style.bgColor} icon={faBriefcase} iconColor={style.textColor} />
      <Tags text="myPodcast" bgColor={style.bgColor} icon={faMicrophone} iconColor={style.textColor} />
      <Tags text="myReuse" bgColor={style.bgColor} icon={faRecycle} iconColor={style.textColor} />
      <Tags text="mySlowFood" bgColor={style.bgColor} icon={faSeedling} iconColor={style.textColor} />
      <Tags text="myCm" bgColor={style.bgColor} icon={faLifeRing} iconColor={style.textColor} />
    </div>
  );
}

export default TagSection;
