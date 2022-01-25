import react from 'react'
import { faEllipsisH, faFolder } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
function CryptoSection() {
    return (

        <div style={{ height: "130px" }} className=' flex justify-center 	items-center  '>
            <div className='w-4/5 	h-4/5 flex flex-col items-center justify-around bg-blue-700 rounded-xl	'>
                <div className="flex justify-between items-center w-4/5	">
                    <div className="flex">
                        <span class="flex items-center left-4 ">  <FontAwesomeIcon  style={{ color: "white", marginRight: "10px"  }} icon={faFolder} /> </span>
                        <p className='font-bold	text-white	text-xl'>Crypto Winter's</p>
                    </div>

                    <div>
                        <Menu as="div" className="ml-3 relative">
                            <div className='flex rounded-full justify-around items-center '>
                                <Menu.Button className="flex text-sm justify-around rounded-full focus:outline-none  ">
                                    <span className="sr-only">Open post menu</span>
                                    <FontAwesomeIcon style={{ color: "white" }} icon={faEllipsisH} />

                                </Menu.Button>

                            </div>




                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>

                                        <a
                                            href="#"
                                            className='block px-4 py-2 text-sm text-gray-700'
                                        >
                                            Your Profile
                                        </a>

                                    </Menu.Item>
                                    <Menu.Item>
                                        <a
                                            href="#"
                                            className='block px-4 py-2 text-sm text-gray-700'

                                        >
                                            Settings
                                        </a>

                                    </Menu.Item>
                                    <Menu.Item>
                                        <a
                                            href="#"
                                            className='block px-4 py-2 text-sm text-gray-700'
                                        >
                                            Sign out
                                        </a>

                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                    </div>

                </div>
                <div className='flex items-center justify-start	w-4/5'>
                    <p className='mr-2 	text-white'>#Bitcoin</p>
                        <span
                            class="px-1  rounded-full border bg-white border-gray-300 text-blue-200 font-semibold text-sm flex align-center w-max cursor-pointer">
                            1253 Posts
                        </span>

                      
                    
                </div>


            </div>

        </div>

    );
}

export default CryptoSection;
