import Banners from '../Banners';
import CardSection from '../CardSection';
import TagSection from '../TagSection';
import Toogle from '../Toggle';

function FirstHalf() {
  return (
    <div className="lg:w-1/4 md:w-1/3 h-full hidden md:block">
      <CardSection />
      <TagSection />
      <Toogle />
      <Banners />
    </div>
  );
}

export default FirstHalf;
