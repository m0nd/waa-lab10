import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">WAA Lab 10</span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/posts">Posts</Link>
                    <Link className="block text-lg mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/create-post">New Post</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header