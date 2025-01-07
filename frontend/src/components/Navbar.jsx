import React, { useState } from 'react'
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosCart } from "react-icons/io";
import avatarImg from "../assets/avatar.png";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const navigation = [
  { name: "DashBoard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart page", href: "/cart" },
  { name: "Checkout", href: "/checkout" }
]

const Navbar = () => {
  const Currentuser = false;
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const cartItems = useSelector(state=>state.cart.cartItems);
  console.log(cartItems)
  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
      <nav className='flex justify-between items-center'>
        {/* left side */}
        <div className='flex items-center md:gap-16 gap-4'>
          <Link to="/">
            <HiOutlineBars3CenterLeft className='size-6' />
          </Link>
          {/* search input */}
          <div className='relative sm:w-72 w-40 space-x-2'>
            <IoSearch className='absolute inline-block left-3 inset-y-2' />
            <input type="text" placeholder='Search here' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none' />
          </div>
        </div>


        {/* right side */}
        <div className='relative flex items-center md:space-x-3 space-x-2'>
          <div >
            {
              Currentuser ? <>
                <button onClick={() => setisDropdownOpen(!isDropdownOpen)}>
                  <img src={avatarImg} alt="" className={`size-7 rounded-full $ 
                    { Currentuser ? 'ring-2 ring-blue-500': ''}` } />
                </button>
                {
                  isDropdownOpen && (
                    <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                      <ul className='py-2'>
                        {
                          navigation.map((item) => (
                            <li key={item.name} onClick={() => setisDropdownOpen(false)}>
                              <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-green-100'>{item.name}</Link>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  )
                }

              </> : <Link to="/login"><FaUserTie className='size-6' /></Link>
            }
          </div>


          <button className='hidden sm:block'>
            <FaRegHeart className="size-6" />
          </button>

          <Link to="/cart" className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm'>
            <IoIosCart />
            {
              cartItems.length > 0 ? <span className='text-sm font-semibold sm:ml-1'>{cartItems.length}</span> :  <span className='text-sm font-semibold sm:ml-1'>0</span>

            }

          </Link>

        </div>
      </nav>
    </header>
  )
}

export default Navbar
