import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            {/* login with */}
            <div className="mb-6">
                <h2 className="text-3xl font-semibold mb-6">Login with</h2>
                <button className="text-blue-400 w-full btn btn-outline mb-2"><span><FaGoogle></FaGoogle></span> Login with Google</button>
                <button className="w-full btn btn-outline mb-4"><span><FaGithub></FaGithub></span> Login with Github</button>
            </div>
            {/* find us on */}
            <div className="mb-6">
                <h2 className="text-3xl font-semibold mb-6 mt-4">Find Us On</h2>
                <a className="flex items-center font-medium text-lg p-4 border rounded-t-lg" href="">
                    <FaFacebook className="mr-2 text-blue-400"></FaFacebook>
                    Facebook
                </a>
                <a className="flex items-center font-medium text-lg p-4 border-x" href="">
                    <FaTwitter className="mr-2 text-blue-400"></FaTwitter>
                    Twitter
                </a>
                <a className="flex items-center font-medium text-lg p-4 border rounded-b-lg" href="">
                    <FaInstagram className="mr-2 text-pink-600"></FaInstagram>
                    Instagram
                </a>
            </div>
            {/* Q-zone */}
            <div className="p-3 mb-6 bg-gray-100 space-y-5">
                <h2 className="text-3xl font-semibold mb-4 p-4">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
                
            </div>
        </div>
    );
};

export default RightSideNav;