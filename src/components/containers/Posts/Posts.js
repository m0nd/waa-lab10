import { useEffect, useState } from 'react';
import Post from '../../Post/Post'
import { Outlet } from 'react-router-dom'
import PostDetails from '../../PostDetails/PostDetails';
import axios from 'axios'

const Posts = (props) => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        axios.get('http://localhost:8080/api/v1/posts')
        .then((response) => {
            //console.log('Get Posts: ', response.data);
            setPosts(response.data);
        }).catch( (err) => {
            console.log(err.message);
        })
    };

    useEffect(() => {
        fetchPosts()
    }, []);

    const postComponents = posts?.map(post => {
        return <Post key={post.id} post={post} />
    });
    
    return (
        <>
            <div className="dash">
                {postComponents}
            {/* <Posts fetchState={fetchState} /> */}
            </div>
            <Outlet />
            {/* <AddPost toggleFetchState={toggleFetchState} /> */}
        </>
    ) ;
}

export default Posts;