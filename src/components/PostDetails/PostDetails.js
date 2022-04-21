import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../../services/apiService'
import { SelectedIdContext } from '../../store/SelectedIdContext';
import Comments from '../containers/Comments/Comments';
import './PostDetails.css'

const PostDetails = (props) => {
    const [post, setPost] = useState(undefined);
    const params = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        apiService.getPostById(params.postId)
        .then((response) => {
            console.log('Selected ID: ' + params.postId);
            setPost(response.data);
        }).catch((error) => {
            console.log(error.message);
        });
    }, [params.postId]);

    const doDeletePost = (postId) => {
        apiService.deletePostById(postId)
        .then( (response) => {
            //props.toggleFetchState();
            //setSelectedPostId(0);
            navigate("/");
            console.log('Post Deleted: ' + response.data);
        })
    };

    return params.postId ? (
        <div className="postDetails">
            <h3 className='text-xl font-bold'>{post?.title}</h3>
            <p className='mb-2'>{post?.content}</p>
            <p className='text-gray-600 text-sm mb-4'>{post?.author?.name}</p>
            { post?.comments?.length > 0 ? <Comments comments={post.comments} /> : null}
            <div className='flex space-x-2 justify-center'>
                <button className='inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out'>Edit</button>
                <button className='inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out' onClick={ () => doDeletePost(post.id)}>Delete</button>
            </div>
        </div>
    ) : null
}

export default PostDetails;