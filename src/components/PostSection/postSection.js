import CryptoSection from '../CryptoSection/cryptoSection';
import Post from '../Post/post';
import PostBanner from '../PostBanner/postBanner';
import PostFilter from '../PostFilter/postFilter';


function PostSection() {
    return (

        <div style={{ width: "80%" }}>
            <PostBanner />
            <CryptoSection />
            <PostFilter />
            <Post />
            <Post />
            <Post />

        </div>

    );
}

export default PostSection;
