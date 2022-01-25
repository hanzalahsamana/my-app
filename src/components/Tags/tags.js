import react from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';


function Tags(props) {
    return (
        <div >
            <div class="flex flex-col justify-between items-center flex-1 mt-6  ">
                <nav>
                    <a 
                        class={`flex items-center px-6 py-4 text-gray-700 rounded-2xl dark:bg-gray-700 dark:text-gray-200 w-64 mb-0.5 ${props.bgColor} ${props.color} ` }
                        href="#"
                        
                    >
                       <FontAwesomeIcon  icon={props.icon} /> 

                        <span class="mx-4 font-medium">{props.text}</span>
                    </a>
                 

                </nav>


            </div>
        </div>

    );
}

export default Tags;
