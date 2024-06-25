import { Disclosure, DisclosureButton } from '@headlessui/react';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function SideNavBar(){
  return <div>
    <Disclosure as = "nav">
      <DisclosureButton className="absolute top-4 right-4 inline-flex items-center peer justify-center peer justify-center rounded-md p-2 ">
        <GiHamburgerMenu 
        className="h-10 w-10 background-transparent text-white hover:text-gray-300"
        aria-hidden="true" 
        />
      </DisclosureButton>
    </Disclosure>
  </div>
}

export default SideNavBar;

// const SideNav = () => {
//   return (
//     <nav className="bg-gray-700 w-64 min-h-screen p-10">
//       <ul>
//         <li className="mb-4"><a href="/" className="hover:underline">My Progress</a></li>
//         <li className="mb-4"><a href="/submissions" className="hover:underline">Submissions</a></li>
//         <li className="mb-4"><a href="/lecturerlist" className="hover:underline">Lecturer list</a></li>
//         <li className="mb-4"><a href="/projectlist" className="hover:underline">Project list</a></li>
//         <li className="mb-4"><a href="/vivadetails" className="hover:underline">Viva details</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default SideNav;

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

