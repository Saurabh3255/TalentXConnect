import SideBarButton from "../../utils/SideBarButtons";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { AiFillDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaBriefcase } from "react-icons/fa";
import { ImEnter } from "react-icons/im";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { useState } from "react";
import { Link } from "react-router-dom";

function SideBar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <aside className={`w-72 bg-white px-6 py-6 h-full ${sidebar ? "block" : "hidden"}`}>
      {/* <div onClick={showSidebar}> */}
        <div className="mb-6 mt-4">
          <img
            src="https://www.synechron.com/themes/synechron/images/logo.svg"
            alt="Logo"
            className="w-52"
          />
        </div>
        <ul className="flex flex-col items-start gap-4">
          {[
            { icon: <AiFillDashboard />, label: "Dashboard", path: "/" },
            { icon: <CgProfile />, label: "Profile", path: "/profile" },
            { icon: <FaBriefcase />, label: "Applied Job", path: "/appliedjob    " },
            { icon: <ImEnter />, label: "Interview", path: "/interview" },
            { icon: <TbBrandGoogleAnalytics />, label: "Analytics", path: "/analytics" },
          ].map((item, index) => (
            <li key={index} className="flex items-center mb-4">
              <Link to={item.path} className="flex items-center text-gray-600 text-2xl">
                <span>{item.icon}</span>
                <span className="ml-4 text-lg">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
    </aside>
  );
}

export default SideBar;