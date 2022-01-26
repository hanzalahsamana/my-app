import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

function Toogle() {
    const [toggle, setToggle] = useState(true);
    const toggleClass = ' transform translate-x-5';

    return (
        <div style={{ height: "60px" }} className="flex justify-center items-center ">
            <div>
                <FontAwesomeIcon style={{ color: "#0000ffa3", marginRight: "10px" }} icon={faSun} />
            </div>
            <div className="mr-2">
                <div
                    className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
                    onClick={() => {
                        setToggle(!toggle);
                    }}
                >

                    {/* Switch */}
                    <div
                        className={"bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform" + (toggle ? null : toggleClass)}
                    >
                    </div>

                </div>
            </div>
            <div>
                <FontAwesomeIcon style={{ color: "#0000ffa3" }} icon={faMoon} />
            </div>
        </div>
    );
}

export default Toogle;
