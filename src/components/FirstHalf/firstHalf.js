import Banners from '../Banners/banner';
import CardSection from '../CardSection/cardSection';
import TagSection from '../TagSection/TagSection';
import Toogle from '../Toggle/toggle';

function FirstHalf() {
  return (
    <div className="w-1/4 h-full">
      <CardSection />
      <TagSection />
      <Toogle />
      <Banners />
    </div>
  );
}

export default FirstHalf;
