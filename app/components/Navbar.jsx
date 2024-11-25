// "use client";

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { IoMenu, IoClose } from 'react-icons/io5';
// import { useRouter } from 'next/navigation';
// import styles from '../../styles/Navbar-module.css';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const isUserLoggedIn = localStorage.getItem('isUserLoggedIn') === 'true';
//     setIsLoggedIn(isUserLoggedIn);
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('isUserLoggedIn');
//     localStorage.removeItem('user');
//     localStorage.removeItem('id');
//     setIsLoggedIn(false);
//     router.push('/Login');
//   };

//   return (
//     <header className="bg-black h-20"> {/* Increased navbar height */}
//       <nav className="flex justify-center items-center w-full px-8 text-white font-bold h-full"> {/* Added padding and centered content */}
//         <div className="flex justify-between items-center w-full max-w-[1400px]"> {/* Added max-width for better centering */}
//           <div className="w-24"> {/* Increased logo container size */}
//             <Link href="/">
//               <img src="/logo1.png" alt="Logo" className="cursor-pointer w-full h-auto" /> {/* Full width logo */}
//             </Link>
//           </div>
//           <div className={`nav-links duration-500 md:static absolute bg-black md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? "top-[9%]" : "top-[-100%]"} md:w-auto w-full flex items-center px-5`}>
//             <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
//               <li><Link href="/" className={`${styles['navbar-active']} hover:text-[#E09145]`}>Home</Link></li>
//               {/* <li><Link href="/PerformanceCalculator" className="hover:text-[#E09145]">Progress</Link></li> */}
//               {/* <li><Link href="/dashboard" className="hover:text-[#E09145]">Dashboard</Link></li> */}
//               {localStorage.getItem("isUserLoggedIn") && (
//           <li>
//             <Link href="/dashboard" className="hover:text-[#E09145]">
//               Dashboard
//             </Link>
//           </li>
//               )}
//               <li><Link href="/about" className="hover:text-[#E09145]">About</Link></li>
//               <li><Link href="/contactus" className="hover:text-[#E09145]">Contact</Link></li>
//               <li><Link href="/review" className="hover:text-[#E09145]">Review</Link></li>
//             </ul>
//           </div>
//           <div className="flex items-center gap-6">
//             {isLoggedIn ? (
//               <button className="bg-[#E09145] text-white px-5 py-2 rounded-full hover:bg-[#c47d37]" onClick={handleLogout}>Logout</button>
//             ) : (
//               <>
//                 <Link href="/Login"><button className="bg-[#E09145] text-white px-5 py-2 rounded-full hover:bg-[#c47d37]">Login</button></Link>
//                 <Link href="/Register"><button className="bg-[#E09145] text-white px-5 py-2 rounded-full hover:bg-[#c47d37]">SignUp</button></Link>
//               </>
//             )}
//             <div onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden">
//               {menuOpen ? <IoClose /> : <IoMenu />}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;



"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoMenu, IoClose } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import styles from '../../styles/Navbar-module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Only runs on the client side
    if (typeof window !== "undefined") {
      const isUserLoggedIn = localStorage.getItem('isUserLoggedIn') === 'true';
      setIsLoggedIn(isUserLoggedIn);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem('isUserLoggedIn');
      localStorage.removeItem('user');
      localStorage.removeItem('id');
    }
    setIsLoggedIn(false);
    router.push('/Login');
  };

  return (
    <header className="bg-black h-20"> {/* Increased navbar height */}
      <nav className="flex justify-center items-center w-full px-8 text-white font-bold h-full"> {/* Added padding and centered content */}
        <div className="flex justify-between items-center w-full max-w-[1400px]"> {/* Added max-width for better centering */}
          <div className="w-24"> {/* Increased logo container size */}
            <Link href="/">
              <img src="/logo1.png" alt="Logo" className="cursor-pointer w-full h-auto" /> {/* Full width logo */}
            </Link>
          </div>
          <div className={`nav-links duration-500 md:static absolute bg-black md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? "top-[9%]" : "top-[-100%]"} md:w-auto w-full flex items-center px-5`}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li><Link href="/" className={`${styles['navbar-active']} hover:text-[#E09145]`}>Home</Link></li>
              {isLoggedIn && (
                <li>
                  <Link href="/dashboard" className="hover:text-[#E09145]">
                    Dashboard
                  </Link>
                </li>
              )}
              <li><Link href="/about" className="hover:text-[#E09145]">About</Link></li>
              <li><Link href="/contactus" className="hover:text-[#E09145]">Contact</Link></li>
              <li><Link href="/review" className="hover:text-[#E09145]">Review</Link></li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            {isLoggedIn ? (
              <button className="bg-[#E09145] text-white px-5 py-2 rounded-full hover:bg-[#c47d37]" onClick={handleLogout}>Logout</button>
            ) : (
              <>
                <Link href="/Login"><button className="bg-[#E09145] text-white px-5 py-2 rounded-full hover:bg-[#c47d37]">Login</button></Link>
                <Link href="/Register"><button className="bg-[#E09145] text-white px-5 py-2 rounded-full hover:bg-[#c47d37]">SignUp</button></Link>
              </>
            )}
            <div onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden">
              {menuOpen ? <IoClose /> : <IoMenu />}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
