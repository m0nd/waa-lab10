import Posts from '../Posts/Posts'
import { Outlet } from "react-router-dom";
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <h2 className="text-xl font-bold">Dashboard</h2>
            <div className="dash">
                <Posts />
            </div>
            <Outlet />
        </div>
    );
}

export default Dashboard;