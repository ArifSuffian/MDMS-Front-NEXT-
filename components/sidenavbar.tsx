import React from 'react';
import { ROLES, LECTURER_TYPES, User, getAccessLevel, ACCESS_LEVELS } from '@/utils/constants';

interface NavLink {
  href: string;
  label: string;
  minAccessLevel: number;
}

interface NavSection {
  title: string;
  links: NavLink[];
}

const navLinks: NavSection[] = [
  {
    title: 'Student Dashboard',
    links: [
      { href: '/student-view/myprogress', label: 'My Progress', minAccessLevel: ACCESS_LEVELS.STUDENT },
      { href: '/student-view/submission', label: 'Submissions', minAccessLevel: ACCESS_LEVELS.STUDENT },
      { href: '/student-view/lecturerlist', label: 'Lecturer List', minAccessLevel: ACCESS_LEVELS.STUDENT },
      { href: '/student-view/projectlist', label: 'Project List', minAccessLevel: ACCESS_LEVELS.STUDENT },
      { href: '/student-view/vivadetails', label: 'Viva Details', minAccessLevel: ACCESS_LEVELS.STUDENT },
    ]
  },
  {
    title: 'Lecturer Dashboard',
    links: [
      { href: '/lecturer-view/lecturerlist', label: 'Lecturer List', minAccessLevel: ACCESS_LEVELS.LECTURER },
      { href: '/lecturer-view/nominationlist', label: 'Nomination List', minAccessLevel: ACCESS_LEVELS.LECTURER },
      { href: '/lecturer-view/projectlist', label: 'Project List', minAccessLevel: ACCESS_LEVELS.LECTURER },
      { href: '/lecturer-view/viewstudentprog', label: 'View Student Progress', minAccessLevel: ACCESS_LEVELS.LECTURER },
      { href: '/lecturer-view/vivadetails_lect', label: 'Viva Details', minAccessLevel: ACCESS_LEVELS.LECTURER },
    ]
  },
  {
    title: 'Examiner Dashboard',
    links: [
      { href: '/examiner-view/evaluatestudent', label: 'Evaluate Student', minAccessLevel: ACCESS_LEVELS.EXAMINER },
      { href: '/examiner-view/receivenominationreq', label: 'Receive Nomination Requests', minAccessLevel: ACCESS_LEVELS.EXAMINER },
      { href: '/examiner-view/vivadetails_exam', label: 'Viva Details', minAccessLevel: ACCESS_LEVELS.EXAMINER },
    ]
  }
];

const SideNav: React.FC<{ user: User }> = ({ user }) => {
  const accessLevel = getAccessLevel(user);

  const getVisibleLinks = (links: NavLink[]) => {
    return links.filter(link => accessLevel >= link.minAccessLevel);
  };

  return (
    <nav className="bg-gray-700 w-64 min-h-screen p-5 text-white">
      {navLinks.map((section, sectionIndex) => {
        const visibleLinks = getVisibleLinks(section.links);
        if (visibleLinks.length === 0) return null;

        return (
          <div key={sectionIndex}>
            <h2 className="mb-5 text-2xl">
              <b>{section.title}</b>
            </h2>
            <ul className="mb-10">
              {visibleLinks.map((link, linkIndex) => (
                <li key={linkIndex} className="mb-4">
                  <a href={link.href} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </nav>
  );
};

export default SideNav;