import Post from '../Post';
import PostFilter from '../PostFilter';


function PostSection() {
    return (
        <div >
            <PostFilter />
            <Post />
            <Post />
            <Post />
        </div>

    );
}

export default PostSection;
