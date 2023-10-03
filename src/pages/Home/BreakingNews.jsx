import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex mt-6 mb-6 bg-gray-100 p-3 items-center rounded-lg">
            <button className="btn btn-secondary text-white">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100} className="text-lg font-semibold">
                <Link to="/" className="mr-10">
                    I can be a React component, multiple React components.......
                </Link>
                <Link to="/" className="mr-10">
                    I can be a React component, multiple React components.......
                </Link>
                <Link to="/" className="mr-10">
                    I can be a React component, multiple React components.......
                </Link>
                <Link to="/" className="mr-10">
                    I can be a React component, multiple React components.......
                </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;