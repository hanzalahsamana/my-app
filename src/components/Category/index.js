import { faCheckSquare, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './index.module.css'

function Category() {
   
    return (
        <div style={{ height: "270px" }} >
            <div className='w-full h-full flex flex-col border-b border-gray-300 border-solid justify-center'>
                <div className='w-full px-4 h-16 flex border border justify-between items-center items-center rounded-xl bg-blue-700 border-blue-300 border-solid'>
                    <p className="text-white font-bold">Category</p>
                    <FontAwesomeIcon style={{ color: "white" }} icon={faChevronDown} />
                </div>
                <div style={{ height: "fit-content" }} class="flex items-center py-5 justify-center ">

                    <div class="flex flex-wrap items-center justify-center space-x-1">
                    <span className={`${style.subClassTag} bg-blue-700 text-white`}>
                            Bitcoin
                        </span>
                        <span className={`${style.subClassTag} ${style.subClassColor}`}>
                            Crypto
                        </span>
                        <span className={`${style.subClassTag} ${style.subClassColor}`}>
                            Blockchain
                        </span>
                        <span className={`${style.subClassTag} ${style.subClassColor}`}>
                            Market
                        </span>
                        <span
                            className={`${style.subClassTag} ${style.subClassColor}`}>
                            Politic
                        </span>
                        <span className={`${style.subClassTag} ${style.subClassColor}`}>
                            Staking
                        </span>
                        <span className={`${style.subClassTag} ${style.subClassColor}`}>
                            DEX
                        </span>
                        <span className={`${style.subClassTag} ${style.subClassColor}`}>
                            Ecosystem
                        </span>
                    </div>
                </div>
                <div class=" h-12 flex items-center justify-start p-3 ">
                    <FontAwesomeIcon style={{ color: "blue" }} icon={faCheckSquare} className='mr-2' />
                    <p className='text-blue-500 underline decoration-1'>Select all categories</p>
                </div>
            </div>
        </div>
    );
}

export default Category;
