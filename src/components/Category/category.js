import { faCheckSquare, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Category() {
    return (
        <div style={{ height: "270px" }} >
            <div className='w-full h-full flex flex-col border-b border-gray-300 border-solid justify-center '>
                <div className='w-full px-4 h-16 flex border border justify-between items-center items-center rounded-xl bg-blue-700 border-blue-300 border-solid'>
                    <p className="text-white font-bold">Category</p>
                    <FontAwesomeIcon style={{ color: "white" }} icon={faChevronDown} />
                </div>
                <div class=" h-32 flex  items-center justify-center ">

                    <div class="flex flex-wrap items-center justify-center space-x-1">
                        <span
                            class="px-2 py-1 rounded-full m-1 text-gray-100 bg-blue-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                            Bitcoin
                        </span>
                        <span
                            class="px-2 py-1 rounded-full m-1 text-blue-500 bg-gray-100 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                            Crypto
                        </span>
                        <span
                            class="px-2 py-1 rounded-full  m-1 text-blue-500 bg-gray-100 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                            Blockchain
                        </span>
                        <span
                            class="px-2 py-1 rounded-full  m-1 text-blue-500 bg-gray-100 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                            Market
                        </span>
                        <span
                            class="px-2 py-1 rounded-full m-1 text-blue-500 bg-gray-100 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                            Politic
                        </span>
                        <span
                            class="px-2 py-1 rounded-full m-1 text-blue-500 bg-gray-100 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                            Staking
                        </span>
                        <span
                            class="px-2 py-1 rounded-full m-1 text-blue-500 bg-gray-100 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                            DEX
                        </span>
                        <span
                            class="px-2 py-1 rounded-full m-1 text-blue-500 bg-gray-100 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                            Ecosystem
                        </span>
                    </div>
                </div>
                <div class=" h-12 flex  items-center justify-start p-3 ">
                    <FontAwesomeIcon style={{ color: "blue" }} icon={faCheckSquare} className='mr-2' />
                     <p className='text-blue-500 underline decoration-1'>Select all categories</p>
                </div>
            </div>
        </div>
    );
}

export default Category;
