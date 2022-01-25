import logo from '../../assets/logo.png'
import Cards from '../Cards/cards';
import LogoSection from '../LogoSection/logoSection';


function CardSection() {
    return (
        <div className="w-full bg-gray-200  justify-center flex relative" style={{height:"470px"}}>
           <LogoSection />
            <Cards />
        </div>
    );
}

export default CardSection;
