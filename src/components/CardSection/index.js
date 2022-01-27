import Cards from '../Cards';
import LogoSection from '../LogoSection';


function CardSection() {
    return (
        <div className="w-full bg-gray-200 justify-center flex relative" style={{ height: "470px" }}>
            <LogoSection />
            <Cards />
        </div>
    );
}

export default CardSection;
