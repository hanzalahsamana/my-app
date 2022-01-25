import react from 'react'
import { faSun , faMoon} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Toogle() {
    return (

        <div style={{height:"60px"}} class="flex justify-center items-center ">
            <div>
                <FontAwesomeIcon style={{ color: "#0000ffa3" , marginRight:"50px" }} icon={faSun} />
            </div>
            <div class="mr-2">
                <div class="form-check form-switch">
                    <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
            </div>
            <div>
                <FontAwesomeIcon style={{ color: "#0000ffa3"}} icon={faMoon} />
            </div>
        </div>
    );
}

export default Toogle;
