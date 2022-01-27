import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function RecentTopic() {
    const List = [
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
        {
            name: "Crypto winters",
            num: 1234
        },
    ]
    return (
        <div style={{ height: "800px", maxHeight: "800px"}} >
            <div className='w-full h-full flex flex-col border-b bg-gray-100 rounded-2xl mt-10'>
                <div className='w-full px-4 h-16 flex border border justify-between items-center items-center rounded-t-xl bg-blue-700 border-blue-300 border-solid'>
                    <p className="text-white font-bold">Recent Topics</p>
                    <div >
                        <nav>
                            <a
                                class="flex items-center justify-around py-1 border border-white border-solid rounded-lg dark:bg-gray-700 dark:text-gray-200 w-24 "
                                href="#"
                            >
                                <span class="font-medium text-white text-l tracking-wide">Latest</span>
                                <FontAwesomeIcon style={{ color: "white" }} icon={faAlignJustify} />
                            </a>
                        </nav>
                    </div>
                </div>
                <div style={{ maxHeight: "80%", overflowY: "scroll", webkitScrollbarWidth: "10px" }} className="list truncate h-4/5 w-full overflow-scroll ">
                    {
                        List.map((item, index) => {
                            return (
                                <div key={index} className="h-10 items-center px-4 mt-2">
                                    <div className="flex justify-between  hover:font-bold px-2 py-2 hover:border-l-8 border-solid border-blue-700 hover:cursor-pointer hover:bg-gray-200 rounded-lg items-center px-4 hover:cursor-pointer">
                                        <p className='text-sm '>{item.name}</p>
                                        <span
                                            class="rounded-lg px-1 bg-white  text-blue-500 font-semibold text-sm flex align-center w-max cursor-pointer">
                                            {item.num}
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='h-16 w-full flex items-center justify-center'>
                    <div className='h-3/5 w-4/5 bg-white rounded-full'>
                        <div class="flex h-full justify-center items-center">
                            <nav aria-label="Page navigation example">
                                <ul class="flex list-style-none">
                                    <li class="page-item h-full"><a
                                        class="page-link relative block py-1 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-blue-800 hover:text-gray-800 focus:shadow-none"
                                        href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a></li>
                                    <li class="page-item"><a
                                        class="page-link relative block py-1 px-3 rounded border-0 bg-gray-100 outline-none transition-all duration-300 rounded font-bold text-blue-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                        href="#">1 of 16</a></li>
                                    <li class="page-item"><a
                                        class="page-link relative block py-1 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-blue-800 hover:text-gray-800 focus:shadow-none"
                                        href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecentTopic;
