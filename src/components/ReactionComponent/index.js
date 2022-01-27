import react from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faEllipsisH, faEye, faFrown, faLocationArrow, faSmile } from '@fortawesome/free-solid-svg-icons'

function ReactionCompnent() {
    return (
        <div className="flex justify-center	w-full h-20">
            <div className="flex  items-center justify-between w-4/5">
                <div className="flex items-center">
                    <div className="flex items-center mr-5">
                        <FontAwesomeIcon style={{ color: "#0000ffa3", width: "20px", height: "20px" }} className='mr-2' icon={faEye} />
                        <p className='text-blue-500  text-sm'>12.5k</p>
                    </div>
                    <div className="flex items-center mr-5">
                        <FontAwesomeIcon style={{ color: "#0000ffa3", width: "20px", height: "20px" }} className='mr-2' icon={faSmile} />
                        <p className='text-blue-500  text-sm'>3.2k</p>
                    </div>
                    <div className="flex items-center mr-5">
                        <FontAwesomeIcon style={{ color: "#0000ffa3", width: "20px", height: "20px" }} className='mr-2' icon={faFrown} />
                        <p className='text-blue-500  text-sm'>300</p>
                    </div>
                    <div className="flex items-center mr-5 ">
                        <FontAwesomeIcon style={{ color: "#0000ffa3", width: "20px", height: "20px" }} className='mr-2 ' icon={faBookmark} />
                        <p className='text-blue-500  text-sm'>15.2k</p>
                    </div>
                </div>
                <div className="flex items-center mr-5 ">
                    <FontAwesomeIcon style={{ color: "#0000ffa3", width: "20px", height: "20px" }} className='mr-2 ' icon={faEllipsisH} />
                    <FontAwesomeIcon style={{ color: "#0000ffa3", width: "20px", height: "20px" }} className='mr-2 ' icon={faLocationArrow} />
                </div>
            </div>
        </div>
    );
}

export default ReactionCompnent;
