import logo from '../../assets/logo.png'

function Footer() {
    return (
        <div  className="bg-blue-700 h-16 w-full rounded-b">
            <div className='flex items-center justify-around h-full  w-4/5'>
                <div className='flex items-center h-full'>
                    <img src={logo} alt="Logo" style={{ width: "25px", height: "25px" }} />
                    <h1 className='text-xl font-bold text-white	'>my2cents</h1>
                </div>

                <div className='flex space-x-5 text-sm text-white items-center justify-center'>
                    <p>Advertisement</p>
                    <p>Your Money</p>
                    <p>Bonuses</p>
                    <p>Faq</p>
                    <p>Privacy Policy</p>
                    <p>Imprint</p>
                    <p>Terms and conditions</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
