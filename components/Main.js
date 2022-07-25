import Image from 'next/image';

import { FaRegStar } from 'react-icons/fa';

import cc from '../public/c.jpg';

export default function Main() {

    const slideImages = [
        {
            url: '../public/c.jpg'
        },
    ] 

    return (
        <main className="px-20 py-4 bg-gradient-to-b from-orange-100 to-white">
        <section className="flex gap-10">
            <div className="basis-1/5 py-2">
                <span className="font-medium pb-4 inline-block text-lg">Categories</span>
                <ul>
                    <li className="pb-2 border-b-2 border-gray-200 text-primaryColor">Birthday</li>
                    <li className="pb-2 pt-2 border-b-2 border-gray-200 text-primaryColor">Anniversary</li>
                    <li className="pb-2 pt-2 border-b-2 border-gray-200 text-primaryColor">Father's Day</li>
                    <li className="pb-2 pt-2 border-b-2 border-gray-200 text-primaryColor">Bridal Shower</li>
                    <li className="pb-2 pt-2 border-b-2 border-gray-200 text-primaryColor">Independence Day</li>
                    <li className="pb-2 pt-2 border-b-2 border-gray-200 text-primaryColor">Gifts by Recipient</li>
                    <li className="pb-2 pt-2 border-b-2 border-gray-200 text-primaryColor">Defence Day</li>
                    <li className="pb-2 pt-2 text-primaryColor">Bulk Gifting</li>
                </ul>
            </div>
            <div className="flex justify-center basis-full">
                <Image src={cc} width="1100px" height="400px" className="rounded-lg" />
            </div>
        </section>

        <section className="flex gap-2 py-10 justify-between flex-wrap">
            {[0,1,2,3,4].map(img => (
                <div className="">
                    <Image src={cc} width="220px" height="220px" className="rounded-full" />
                    <p className="text-2xl text-center pt-6 font-semibold">Occasions</p>
                </div>
            ))}
        </section>

        <section>
            <div className="flex justify-between">
                <p className="pt-10 pb-8 text-2xl">Most Popular</p>
                <p className="pt-10 pb-8 text-xl text-primaryColor underline font-bold">VIEW MORE</p>
            </div>
            <div className="flex gap-6 pb-10 justify-between">
                {[0,1,2,3,4].map(img => (
                <div className="shadow-lg rounded-md hover:scale-105">
                    <Image src={cc} width="280px" height="220px" className="rounded-tr-md rounded-tl-md" />
                    <div className="flex flex-col p-6">
                        <span className="text-xl">Father's Day Combo</span>
                        <span className="text-xl text-primaryColor">Rs.2500</span>
                        <span className="flex pt-4 text-lg">
                            <FaRegStar className="cursor-pointer" />
                            <FaRegStar className="cursor-pointer" />
                            <FaRegStar className="cursor-pointer" />
                            <FaRegStar className="cursor-pointer" />
                            <FaRegStar className="cursor-pointer" />
                        </span>
                    </div>
                </div>
            ))}
            </div>
        </section> 
        </main>
    )
}