import logo from '../../assets/logo.png'

function LogoSection() {
    return (
        <div style={{ height: "350px", maxHeight: "350px" }} className="w-full bg-blue-700">
            <div className='flex  justify-center w-full items-center		'>
                <img src={logo} alt="Logo" style={{ width: "170px", marginTop: "20px" }} />
            </div>
            <div>
                <h1 className='text-xl font-bold text-white	'>my2cents</h1>
            </div>

        </div>
    );
}

export default LogoSection;
