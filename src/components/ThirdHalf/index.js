import Category from "../Category";
import RecentTopic from "../RecentTopic";


function ThirdHalf() {
  return (
    <div class="h-full hidden lg:block px-2">
      <Category />
      <RecentTopic />
    </div>
  );
}

export default ThirdHalf;
