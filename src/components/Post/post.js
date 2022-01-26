import professor from '../../assets/professor.jpg'
import ReactionCompnent from '../ReactionComponent/reactionComponent';

function Post() {
    return (
        <div style={{ height: "fit-content" }} className=' flex justify-center pt-8  mb-2 border-b border-gray-300 border-solid	items-center  '>
            <div className='w-4/5 	h-4/5   bg-white rounded-xl	'>
                <div className='flex  items-center justify-between h-10 w-full'>
                    <div className='flex h-10 items-center '>
                        <div className="w-10 h-10  rounded-full ml-1 p-1 mt-2 border border-solid border-gray-100 " >
                            <img src={professor} alt="Logo" style={{ height: "100%", width: "100%" }} className="rounded-full " />
                        </div>
                        <p className='text-blue-700 text-2xl font-bold ml-4'>Craig Cooper</p>
                    </div>

                    <div className='flex  items-center mr-2 border  bg-gray-100  rounded-full px-2 h-4'>
                        <p className='text-blue-500 text-xs	 font-bold '>Aug 17, 2021 07:23 am</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center h-fit	w-full">
                    <div className="flex items-center justify-start	 w-4/5">
                        <p className=" text-blue-500 text-xs flex items-center 	 font-bold">#NFTs for the peom, an article, and a short film, and a novel</p>
                    </div>
                    <div className="flex flex-col justify-start pt-5	text-justify w-4/5 tracking-tight">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <span className='text-blue-500	 font-bold '>Asperiores molestiae possimus</span> Asperiores molestiae possimus dolore exercitationem quaerat qui facere, minus explicabo architecto. Optio tenetur fuga nulla consequatur dolore blanditiis, hic asperiores debitis iure?</p>

                        <p>Lorem ipsum dolor sit amet <span className='text-blue-500 '> consectetur, adipisicing elit.</span> Asperiores molestiae possimus dolore exercitationem quaerat qui facere, minus explicabo architecto. Optio tenetur fuga nulla consequatur dolore blanditiis, hic asperiores debitis iure?</p>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores molestiae possimus dolore exercitationem quaerat qui facere, minus explicabo architecto. Optio tenetur fuga nulla consequatur dolore blanditiis, hic asperiores debitis iure?</p>

                        <p>Lorem ipsum dolor <span className='text-blue-500	 '> sit amet consectetur,</span> adipisicing elit. Asperiores molestiae. </p>
                    </div>
                    <ReactionCompnent />
                </div>
            </div>
        </div>
    );
}

export default Post;
