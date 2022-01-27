
function Pagination() {
    return (
        <div style={{ height: "60px" }} className='flex justify-center items-center'>
            <div className='w-4/5 h-4/5 flex justify-center'>
                <div class="flex justify-center">
                    <nav aria-label="Page navigation example">
                        <ul class="flex list-style-none text-lg	">
                            <li class="page-item"><a
                                class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-blue-700 hover:text-gray-800 hover:bg-gray-100 focus:shadow-none"
                                href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a></li>
                            <li class="page-item"><a
                                class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-blue-500 hover:text-blue-700 hover:bg-gray-100 focus:shadow-none"
                                href="#">1</a></li>
                            <li class="page-item"><a
                                class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-blue-500 hover:text-blue-700 hover:bg-gray-100 focus:shadow-none"
                                href="#">2</a></li>
                            <li class="page-item"><a
                                class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-blue-500 hover:text-blue-700 hover:bg-gray-100 focus:shadow-none"
                                href="#">3</a></li>
                            <li class="page-item"><a
                                class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-blue-500 hover:text-blue-700 hover:bg-gray-100 focus:shadow-none"
                                href="#">4</a></li>
                            <li class="page-item"><a
                                class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-blue-500 hover:ttext-blue-700 hover:bg-gray-100 focus:shadow-none"
                                href="#">5</a></li>
                            <li class="page-item"><a
                                class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-blue-500 hover:text-blue-700 hover:bg-gray-100 focus:shadow-none"
                                href="#">...</a></li>
                            <li class="page-item"><a
                                class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-blue-500 hover:text-blue-700 hover:bg-gray-100 focus:shadow-none"
                                href="#">22</a></li>
                            <li class="page-item"><a
                                class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-blue-700 hover:text-gray-800 hover:bg-gray-100 focus:shadow-none"
                                href="#" aria-label="Next">
                                <span aria-hidden="true" >&raquo;</span>
                            </a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Pagination;
