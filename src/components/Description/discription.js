import { faBold, faItalic, faLink, faReply, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Discription() {
    return (
        <div style={{ height: "180px" }} className=' flex justify-center 	items-center  '>
            <div className="flex h-32 max-h-32 w-4/5 flex-col bg-white 	">
                <div className="flex items-center h-12 max-h-12	 w-full bg-blue-700  rounded-t-lg">
                    <FontAwesomeIcon style={{ color: "white", width: "20px", height: "20px" }} icon={faBold} className=' mr-4 ml-5 ' />
                    <FontAwesomeIcon style={{ color: "white", width: "20px", height: "20px" }} icon={faItalic} className=' mr-4' />
                    <FontAwesomeIcon style={{ color: "white", width: "20px", height: "20px" }} icon={faLink} className=' mr-4' />
                    <FontAwesomeIcon style={{ color: "white", width: "20px", height: "20px" }} icon={faReply} className=' mr-4' />
                    <FontAwesomeIcon style={{ color: "white", width: "20px", height: "20px" }} icon={faShare} className=' mr-4' />
                </div>
                <div>
                    <textarea className='placeholder:text-blue-500  text-blue-500  outline-none	 tracking-tight	h-20 max-h-20 w-full flex border border-gray-300 border-solid rounded-b-2xl p-2' placeholder='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, ullam expedita laborum iste possimus tenetur, mollitia nobis, accusantium quisquam ipsum  Rerum.'></textarea>
                </div>
            </div>
        </div>
    );
}

export default Discription;
