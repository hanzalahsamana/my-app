import bitcoin from '../../assets/bitcoin.jpg'
import professor from '../../assets/professor.jpg'

function Cards() {
    return (
        <div style={{ height: "250px", maxHeight: "250px" }} className="w-4/5 shadow-stone-100 shadow	shadow-gray absolute  top-48 bg-blue-500 rounded-full">
            <div className=" relative  ">
                <div style={{ height: "80px", maxHeight: "80px", width: "100%" }} >
                    <img src={bitcoin} alt="Logo" style={{ height: "100%", width: "100%" }} className='rounded-t-xl	' />
                </div>
                <div style={{ height: "77px", maxHeight: "77px" }} className=" flex justify-center bg-white border-b	border-gray-300 border-solid">
                    <div className="w-10 h-10 top-14 absolute rounded-full" >
                        <img src={professor} alt="Logo" style={{ height: "100%", width: "100%" }} className="rounded-full" />
                    </div>
                    <div className=" flex  items-center flex-col justify-center">
                        <h1 className='text-blue-700 text-xl font-bold '>Professor</h1>
                        <h1 className='text-blue-500'>Istanbul, Turkey</h1>
                    </div>
                </div>
                <div style={{ height: "93px", maxHeight: "93px", width: "100%" }} className='bg-white flex-wrap	justify-center items=center rounded-b-xl flex-row	flex' >
                    <p className='text-blue-500  text-sm' style={{ padding: "4px" }}><span className='text-blue-700  font-bold '>5k</span> Posts</p>
                    <p className='text-blue-500 text-sm ' style={{ padding: "4px" }}><span className='text-blue-700  font-bold '>500k</span> Videos</p>
                    <p className='text-blue-500 text-sm' style={{ padding: "4px" }}><span className='text-blue-700 font-bold  '>40k</span> Books</p>
                    <p className='text-blue-500 text-sm' style={{ padding: "4px" }}><span className='text-blue-700 font-bold  '>2k</span> Ideas</p>
                    <p className='text-blue-500 text-sm' style={{ padding: "4px" }}><span className='text-blue-700  font-bold '>126k</span> Instruction</p>
                    <p className='text-blue-500 text-sm' style={{ padding: "4px" }}><span className='text-blue-700 font-bold  '>625k</span> Podcast</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;
