
function FinshPost() {
    return (
        <div style={{ height: "70px" }} className=' flex justify-center 	items-center  '>
            <div className="flex h-4/5 w-4/5  bg-white rounded-2xl	">
                <div className="flex w-full  justify-between">
                    <div>
                        <p className="text-l font-medium">Stored on chain?</p>
                        <div class="flex justify-center ">
                            <div class="form-check form-check-inline ">
                                <input class="form-check-input h-4 w-4 border border-blue-700 rounded-sm bg-white  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label class="text-l font-medium mr-3" for="inlineCheckbox1">Sure</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input h-4 w-4 border border-blue-700 rounded-sm bg-white  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" value="option2" />
                                <label class="text-l font-medium" for="inlineCheckbox2">Nope</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex space-x-2 justify-center">
                            <button type="button" class="inline-block w-96	rounded-3xl px-14 py-4 bg-blue-700 text-white font-medium text-xs leading-tight uppercase  shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FinshPost;
