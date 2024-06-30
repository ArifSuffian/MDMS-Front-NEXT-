import { Disclosure, DisclosureButton } from "@headlessui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

// function SideNavBar(){
//   return <div>
//     <Disclosure as = "nav">
//       <DisclosureButton className="absolute top-4 right-4 inline-flex items-center peer justify-center peer justify-center rounded-md p-2 ">
//         <GiHamburgerMenu
//         className="h-10 w-10 background-transparent text-white hover:text-gray-300"
//         aria-hidden="true"
//         />
//       </DisclosureButton>
//       <div className="p-40 w-1/2 h-screen bg-white z-20 fixed top-30 -left-96 lg:w-60 lg:left-0 peer=focus:left-0 peer:transition ease-out delay-150 duration-200"></div>
//     </Disclosure>
//   </div>
// }

// export default SideNavBar;

const SideNav = () => {
  return (
    <nav className="bg-gray-700 w-64 min-h-screen p-5 text-white">
      <ul>
        <h2 className="mb-10 text-2xl">
          <b>Dashboard</b>
        </h2>
        <li className="mb-4">
          <a href="/student-view/myprogress" className="hover:underline">
            My Progress
          </a>
        </li>   
        <li className="mb-4">
          <a href="/student-view/submission" className="hover:underline">
            Submissions
          </a>
        </li>
        <li className="mb-4">
          <a href="/student-view/lecturerlist" className="hover:underline">
            Lecturer list
          </a>
        </li>
        <li className="mb-4">
          <a href="/student-view/projectlist" className="hover:underline">
            Project list
          </a>
        </li>
        <li className="mb-4">
          <a href="/student-view/vivadetails" className="hover:underline">
            Viva details
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;

// |<ul>
// <li className="mb-4"><a href="/" className="hover:underline">My Progress</a></li>
// <li className="mb-4"><a href="/submissions" className="hover:underline">Submissions</a></li>
// <li className="mb-4"><a href="/lecturerlist" className="hover:underline">Lecturer list</a></li>
// <li className="mb-4"><a href="/projectlist" className="hover:underline">Project list</a></li>
// <li className="mb-4"><a href="/vivadetails" className="hover:underline">Viva details</a></li>
// </ul>
// </nav>

/* <ul>
        <li className="mb-4"><a href="/" className="hover:underline">My Progress</a></li>
        <li className="mb-4"><a href="/submissions" className="hover:underline">Submissions</a></li>
        <li className="mb-4"><a href="/lecturerlist" className="hover:underline">Lecturer list</a></li>
        <li className="mb-4"><a href="/projectlist" className="hover:underline">Project list</a></li>
        <li className="mb-4"><a href="/vivadetails" className="hover:underline">Viva details</a></li>
      </ul>
    </nav> */
