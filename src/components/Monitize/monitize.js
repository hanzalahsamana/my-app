import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Monitize() {
    return (
        <div style={{ height: "120px" }} className=' flex justify-center 	items-center  '>
            <div className='w-4/5 	h-4/5 flex justify-center items-center rounded-2xl bg-blue-700'>
                <div className='w-4/5 	h-2/4 flex justify-center items-center rounded-2xl bg-white'>
                    <FontAwesomeIcon style={{ color: "#0000ffa3" }} icon={faFile} className=' mr-3' />
                    <p className='font-bold text-blue-700'>Monitize a topic</p>
                </div>
            </div>
        </div>
    );
}

export default Monitize;
