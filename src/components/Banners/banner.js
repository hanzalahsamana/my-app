import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.jpg'


function Banners() {
    return (
        <div className='flex items-center justify-center'>
            <div style={{ width: "80%" }} className='flex flex-col items-center justify-center'>
                <img src={banner2} alt="Logo" style={{ height: "100%", width: "100%" , marginBottom:"20px"}} className='rounded-lg' />
                <img src={banner1} alt="Logo" style={{ height: "100%", width: "100%" }} className='rounded-lg' />

            </div>
        </div>
    );
}

export default Banners;
