import { faSearch, faSlidersH, faImage, faComment, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function Navbar() {
    return (
        <div className="Navbar  w-5/5 ">
            <div class="flex items-center border-b	border-blue-400 border-solid">
                <div style={{ width: "80%" }} class="rounded overflow-hidden   ">
                    <div class="md:flex">
                        <div class="w-full p-3">
                            <div class="relative border-blue-400">
                                <span class="absolute flex h-full	items-center left-4 ">  <FontAwesomeIcon style={{ color: "#0000ffa3" }} icon={faSearch} /> </span>
                                <span class="absolute flex h-full items-center right-4">  <FontAwesomeIcon style={{ color: "#0000ffa3" }} icon={faSlidersH} /> </span>

                                <input type="text" class="bg-white h-10 border border-blue-400 border-solid placeholder-blue-400 w-full px-12 text-blue-400	 rounded-full focus:outline-none " placeholder='search topic, book, video, idea, talent, podcast' />


                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ width: "20%" }} className='flex items-center justify-around '>

                    <span className="ml-3 ">  <FontAwesomeIcon style={{ color: "#0000ffa3", width: "23px", height: "23px" }} icon={faImage} /> </span>
                    <span className="ml-3 ">  <FontAwesomeIcon style={{ color: "#0000ffa3", width: "23px", height: "23px" }} icon={faComment} /> </span>

                    <Menu as="div" className="ml-3 relative">
                        <div style={{ padding: "4px 4px 4px 4px", width: "80px" }} className='flex rounded-full bg-blue-200 justify-around items-center border border-blue-400 border-solid'>
                            <Menu.Button className="flex text-sm justify-around rounded-full focus:outline-none  focus:ring-white">
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />

                            </Menu.Button>

                            <FontAwesomeIcon style={{ color: "blue" }} icon={faArrowDown} />

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
        </div>
    );
}

export default Navbar;
