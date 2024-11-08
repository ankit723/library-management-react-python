import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon } from '../assets/search-icon';

const Navbar = ({ setModalType, setIsModalOpen, selectedTab, setSelectedTab }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve user data from local storage
    const data = localStorage.getItem('user');
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, [userData]);

  const logout = () => {
    localStorage.removeItem('user');
    setUserData(null);
  };

  const navItems = [
    { label: 'All Books', role: 'all' },
    { label: 'My Books', role: 'student' },
    { label: 'Wishlist', role: 'student' },
    { label: 'Manage Books', role: 'librarian' },
    { label: 'Manage Student', role: 'librarian' }
  ];

  return (
    <nav className='grid grid-cols-3 items-center px-5 py-3 top-0 sticky z-10 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.3),0_10px_10px_rgba(0,0,0,0.2)]'>
      <h1 className='col-span-1 text-amber-800 text-3xl'>The Library Management</h1>
      <div className='flex items-center justify-center gap-4 col-span-1'>
        {navItems.map((item, index) => {
          // Only render items relevant to the user's role
          if (item.role === 'all' || (userData && userData.role === item.role)) {
            return (
              <div
                key={index}
                className={`bg-[rgba(0,0,0,0.2)] text-black font-sans text-lg py-1 px-4 rounded-md cursor-pointer
                ${selectedTab === item.label ? 'bg-[rgb(0,0,0,0.7)] text-white' : 'hover:text-white hover:bg-[rgb(0,0,0,0.7)]'}
                shadow-2xl transition-all duration-500`}
                onClick={() => setSelectedTab(item.label)}
              >
                {item.label}
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="justify-self-end col-span-1 flex items-center gap-3">
        <div className="relative">
          <div className="absolute top-[0.3rem] right-3">
            <SearchIcon className='' />
          </div>
          <input
            type="text"
            className='py-1 px-4 bg-[rgb(0,0,0,0.2)] shadow-2xl transition-all duration-200 rounded-lg placeholder-slate-700'
            placeholder='Search [cmd/ctrl + k]'
            />
        </div>
        {
          userData ? (
            <>
              <a href='/profile' className="text-lg text-black shadow-2xl font-sans cursor-pointer hover:bg-slate-200 bg-slate-300 py-1 px-4 rounded-md transition-all duration-200">
                <p className='text-md -mb-1 p-0'>{userData.name}</p>
                <p className='text-sm -mt-1 p-0'>{userData.role}</p>
              </a>
              <div
                className="text-lg text-white font-sans bg-red-500 hover:bg-red-400 py-1 px-4 rounded-md transition-all duration-200 cursor-pointer"
                onClick={logout}
              >
                Logout
              </div>
            </>
          ) : (
            <div
              className="text-lg bg-[rgba(0,0,0,0.2)] text-black font-sans hover:text-white hover:bg-[rgb(0,0,0,0.7)] py-1 px-4 rounded-md transition-all duration-200 cursor-pointer"
              onClick={() => {
                setIsModalOpen(true);
                setModalType('signin');
              }}
            >
              Sign In
            </div>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;
