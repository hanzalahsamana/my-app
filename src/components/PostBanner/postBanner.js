import travel from '../../assets/travel.jpg'


function PostBanner() {
    return (
        <div style={{height:"250px"}} className=' flex justify-center 	items-center  '>
            <div className='w-4/5 	h-4/5 flex justify-center'>
                <img src={travel} alt="Logo" style={{ height: "100%", width: "100%" }} className='rounded-lg' />
            </div>
        </div>
    );
}

export default PostBanner;
