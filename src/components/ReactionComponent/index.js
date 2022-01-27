import react from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faEllipsisH, faEye, faFrown, faLocationArrow, faSmile } from '@fortawesome/free-solid-svg-icons'
import style from './index.module.css'
function ReactionCompnent() {
   

    return (
        <div className="flex justify-center	w-full h-20">
            <div className="flex  items-center justify-between w-4/5">
                <div className="flex items-center">
                    <div className="flex items-center mr-5">
                        <FontAwesomeIcon  className={style.subClass} icon={faEye} />
                        <p className={style.subClassText}>12.5k</p>
                    </div>
                    <div className="flex items-center mr-5">
                        <FontAwesomeIcon className={style.subClass} icon={faSmile} />
                        <p className={style.subClassText}>3.2k</p>
                    </div>
                    <div className="flex items-center mr-5">
                        <FontAwesomeIcon className={style.subClass} icon={faFrown} />
                        <p className={style.subClassText}>300</p>
                    </div>
                    <div className="flex items-center mr-5 ">
                        <FontAwesomeIcon className={style.subClass} icon={faBookmark} />
                        <p className={style.subClassText}>15.2k</p>
                    </div>
                </div>
                <div className="flex items-center mr-5 ">
                    <FontAwesomeIcon className={style.subClass} icon={faEllipsisH} />
                    <FontAwesomeIcon className={style.subClass} icon={faLocationArrow} />
                </div>
            </div>
        </div>
    );
}

export default ReactionCompnent;
