import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import react from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function PostFilter() {
    return (

        <div style={{ height: "80px" }} className=' flex justify-center 	items-center  '>
            <div className='w-4/5 	h-4/5 flex  items-center justify-around bg-gray-200 rounded-xl	'>
                <div className="flex justify-between items-center w-4/5	">
                    <h1 className='font-bold tracking-wide	text-blue-500 text-3xl'>Posts</h1>
                    <div >
                                <nav>
                                    <a
                                        class="flex items-center justify-between px-6 py-2 bg-blue-700 text-gray-700 rounded-2xl dark:bg-gray-700 dark:text-gray-200 w-48 "
                                        href="#"

                                    >
                                       

                                        <span class="font-medium text-white text-l tracking-wide">Latest</span>
                                        <FontAwesomeIcon   style={{ color: "white"}} icon={faAlignJustify} /> 
                                        
                                    </a>


                                </nav>


                            </div>
                </div>

            </div>

        </div>

    );
}

export default PostFilter;
