import SideBarButton from "../utils/SideBarButtons";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { AiFillDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaBriefcase } from "react-icons/fa";
import { ImEnter } from "react-icons/im";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { useState } from "react";

function SideBar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <aside className="w-72 bg-white px-6 py-4 h-full">
      <div onClick={showSidebar}>
        <div className="mb-6 mt-4">
          <img
            src="https://www.synechron.com/themes/synechron/images/logo.svg"
            alt="Logo"
            className="w-52"
          />
        </div>

        <ul className="flex flex-col items-start">
          {[
            { icon: <AiFillDashboard />, label: "Dashboard" },
            { icon: <CgProfile />, label: "Profile" },
            { icon: <FaBriefcase />, label: "Applied Job" },
            { icon: <ImEnter />, label: "Interview" },
            { icon: <TbBrandGoogleAnalytics />, label: "Analytics" },
          ].map((item, index) => (
            <li key={index} className="flex items-center mb-4">
              <span className="text-gray-600 text-2xl">{item.icon}</span>
              <span className="ml-4 text-lg">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;