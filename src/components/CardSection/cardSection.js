import logo from '../../assets/logo.png'
import Cards from '../Cards/cards';
import LogoSection from '../LogoSection/logoSection';


function CardSection() {
    return (
        <div className="w-full justify-center flex items-center	relative">
           <LogoSection />
            <Cards />
        </div>
    );
}

export default CardSection;
