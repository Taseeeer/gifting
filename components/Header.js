import Image from 'next/image';

import { FaRegBell, FaRegHeart, FaShoppingCart, FaUserCircle, FaSearch } from 'react-icons/fa';

import logo from '../public/logo.png';

export default function Header() {
    return (
        <>
            <header className="flex justify-between items-center bg-primaryColor py-4 px-10 text-textWhite">
            <span>Express Delivery all over Paksitan.</span>
            <nav>
                <ul className="flex">
                    <li className="px-5 border-r flex items-center cursor-pointer"> <FaRegBell /> </li>
                    <li className="px-5 border-r flex gap-2 items-center cursor-pointer"> <FaRegHeart /> Wishlist</li>
                    <li className="px-5 border-r flex gap-2 items-center cursor-pointer"> <FaShoppingCart /> My Cart</li>
                    <li className="px-5 flex gap-2 items-center"> <FaUserCircle /> My Account</li>
                </ul>
            </nav>
            </header>
            <header className="flex justify-between py-10 px-16 items-center text-center">
                <div>
                    <Image src={logo} alt="logo" />
                </div>
                <ul className="flex gap-7">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Shop</li>
                    <li className="cursor-pointer">Product Categories</li>
                    <li className="cursor-pointer">Blogs</li>
                    <li className="cursor-pointer">Contact Us</li>
                </ul>
                <div className="flex items-center text-center border-b-2 mr-5">
                    <input placeholder='Search' type="search" className="p-1" />
                    <FaSearch className="text-gray-600" />
                </div>
            </header>
        </>
    )
}