import { useState } from "react";
import AddPost from "../../AddPost/AddPost";
import PostDetails from "../../PostDetails/PostDetails";
import Posts from '../Posts/Posts'
import { SelectedIdContext } from '../../../store/SelectedIdContext';
import './Dashboard.css'

const Dashboard = () => {
    const [selectedPostId, setSelectedPostId] = useState(0);

    

    const [fetchState, setFetchState] = useState(true);

    const toggleFetchState = () => {
        setFetchState(!fetchState);
    }

    return (
        <div>
            <h2 className="text-xl font-bold">Dashboard</h2>

            <SelectedIdContext.Provider value={setSelectedPostId}>
                <div className="dash">
                    <Posts fetchState={fetchState} />
                </div>

                <PostDetails selectedPostId={selectedPostId} setSelectedPostId={setSelectedPostId} toggleFetchState={toggleFetchState} />
                {/* <AddPost toggleFetchState={toggleFetchState} /> */}
            </SelectedIdContext.Provider>
        </div>
    );
}

export default Dashboard;