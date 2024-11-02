// import React, { useState } from 'react';
// import logo from "/img/logo.png";
// import { ImMenu } from "react-icons/im";


// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <div className="navbar bg-transparent flex items-center justify-between px-4 py-2 " data-theme="light">
//       {/* Logo Section */}
//       <div className="flex-1">
//         <a className="btn btn-ghost">
//           <img src={logo} alt="Logo" className="h-12 w-auto" />
//         </a>
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="flex-none lg:hidden">
//         <button 
//           className="btn btn-ghost" 
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <ImMenu />
//         </button>
//       </div>

//       {/* Desktop Menu */}
//       <div className="hidden lg:flex flex-none">
//         <ul className="menu menu-horizontal px-1 text-white font-semibold ">
//           <li><a href="#">Home</a></li>
//           <li>
//             <details className=''>
//               <summary>Sri Lanka</summary>
//               <ul className="bg-base-100 rounded-t-none p-2 text-black  ">
//                 <li><a href="#">About Sri Lanka</a></li>
//                 <li><a href="#">When to Visit Sri Lanka</a></li>
//                 <li><a href="#">Festival & Events</a></li>
//                 <li><a href="#">Food & Drink</a></li>
//                 <li><a href="#">Important Facts</a></li>
//               </ul>
//             </details>
//           </li>
//           <li>
//             <details>
//               <summary>Package</summary>
//               <ul className="bg-base-100 rounded-t-none p-2 text-black ">
//                 <li><a href="#">Ramayana Yatra in Sri Lanka</a></li>
//                 <li><a href="#">Sri Lanka Nightlife Package</a></li>
//                 <li><a href="#">Sri Lanka Honeymoon Package</a></li>
//                 <li><a href="#">Kandy Perehara Package</a></li>
//                 <li><a href="#">Valentine's Package</a></li>
//               </ul>
//             </details>
//           </li>
//           <li><a href="#">Destinations</a></li>
//           <li><a href="#">Special Offers</a></li>
//           <li><a href="#">About Us</a></li>
//           <li><a href="#">Contact Us</a></li>
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg rounded-lg">
//           <ul className="menu menu-vertical p-4 text-black">
//             <li><a href="#">Home</a></li>
//             <li>
//               <details>
//                 <summary>Sri Lanka</summary>
//                 <ul className="bg-base-100 rounded-t-none p-2">
//                   <li><a href="#">About Sri Lanka</a></li>
//                   <li><a href="#">When to Visit Sri Lanka</a></li>
//                   <li><a href="#">Festival & Events</a></li>
//                   <li><a href="#">Food & Drink</a></li>
//                   <li><a href="#">Important Facts</a></li>
//                 </ul>
//               </details>
//             </li>
//             <li>
//               <details>
//                 <summary>Package</summary>
//                 <ul className="bg-base-100 rounded-t-none p-2">
//                   <li><a href="#">Ramayana Yatra in Sri Lanka</a></li>
//                   <li><a href="#">Sri Lanka Nightlife Package</a></li>
//                   <li><a href="#">Sri Lanka Honeymoon Package</a></li>
//                   <li><a href="#">Kandy Perehara Package</a></li>
//                   <li><a href="#">Valentine's Package</a></li>
//                 </ul>
//               </details>
//             </li>
//             <li><a href="#">Destinations</a></li>
//             <li><a href="#">Special Offers</a></li>
//             <li><a href="#">About Us</a></li>
//             <li><a href="#">Contact Us</a></li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import logo from "/img/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transperant text-white px-4 py-3 md:px-10 -z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold"> <button><img src={logo} alt="Logo" className="h-12 w-auto" /></button></div>
        <div className="hidden lg:flex flex-none">
          <ul className="menu menu-horizontal px-1 font-semibold space-x-4">
            <li><a href="#">Home</a></li>
            <li>
              <details className="relative">
                <summary>Sri Lanka</summary>
                <ul className="absolute top-full left-0 bg-white rounded-t-none p-2 text-black z-auto">
                  <li><a href="#">About Sri Lanka</a></li>
                  <li><a href="#">When to Visit Sri Lanka</a></li>
                  <li><a href="#">Festival & Events</a></li>
                  <li><a href="#">Food & Drink</a></li>
                  <li><a href="#">Important Facts</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details className="relative">
                <summary>Package</summary>
                <ul className="absolute top-full left-0 bg-white rounded-t-none p-2 text-black">
                  <li><a href="#">Ramayana Yatra in Sri Lanka</a></li>
                  <li><a href="#">Sri Lanka Nightlife Package</a></li>
                  <li><a href="#">Sri Lanka Honeymoon Package</a></li>
                  <li><a href="#">Kandy Perehara Package</a></li>
                  <li><a href="#">Valentine's Package</a></li>
                </ul>
              </details>
            </li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Special Offers</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-xl focus:outline-none">
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <ul className="menu bg-gray-700 text-white p-4 space-y-2">
            <li><a href="#">Home</a></li>
            <li>
              <details className="absolute">
                <summary>Sri Lanka</summary>
                <ul className="bg-gray-600 rounded-t-none p-2 text-white">
                  <li><a href="#">About Sri Lanka</a></li>
                  <li><a href="#">When to Visit Sri Lanka</a></li>
                  <li><a href="#">Festival & Events</a></li>
                  <li><a href="#">Food & Drink</a></li>
                  <li><a href="#">Important Facts</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details className="relative">
                <summary>Package</summary>
                <ul className="bg-gray-600 rounded-t-none p-2 text-white">
                  <li><a href="#">Ramayana Yatra in Sri Lanka</a></li>
                  <li><a href="#">Sri Lanka Nightlife Package</a></li>
                  <li><a href="#">Sri Lanka Honeymoon Package</a></li>
                  <li><a href="#">Kandy Perehara Package</a></li>
                  <li><a href="#">Valentine's Package</a></li>
                </ul>
              </details>
            </li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Special Offers</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
