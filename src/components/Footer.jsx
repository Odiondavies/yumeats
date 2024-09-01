import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
import { FaTwitterSquare, FaDribbbleSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="max-w-[1520px] bg-[#333] py-12 px-4 mx-auto">
      <div className="grid items-center md:grid-cols-4 gap-5 lg:grid-cols-3">
        <div className="flex flex-col cols-span-1">
          <h1 className="text-orange-700 font-bold text-2xl">YumEats</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            sit laboriosam tempore sint officiis? Fuga beatae, quo veniam
            debitis consequuntur voluptate as ipsum!
          </p>
          <div className="flex w-[75%] py-2 text-white justify-between text-2xl">
            <AiFillFacebook className="cursor-pointer" />
            <AiOutlineInstagram  className="cursor-pointer"/>
            <FaTwitterSquare  className="cursor-pointer"/>
            <AiOutlineGithub className="cursor-pointer" />
            <FaDribbbleSquare  className="cursor-pointer"/>
          </div>
        </div>
        <div className="text-white grid grid-cols-2 gap-4 cols-span-2 lg:flex justify-evenly lg:col-span-2">
        <div className="flex flex-col">
            <h5 className="text-[#9b9b9b]">Location</h5>
            <p>New York</p>
            <p>Portharcourt</p>
            <p>Lagos</p>
            <p>Abuja</p>
        </div>
        <div className="flex flex-col">
            <h5 className="text-[#9b9b9b]">Support</h5>
            <p>Pricing</p>
            <p>Documentation</p>
            <p>Guides</p>
            <p>API Status</p>
        </div>
        <div className="flex flex-col">
            <h5 className="text-[#9b9b9b]">Company</h5>
            <p>About</p>
            <p>Career</p>
            <p>FAQs</p>
            <p>User Policy</p>
        </div>
        <div className="flex flex-col">
            <h5 className="text-[#9b9b9b]">Legal</h5>
            <p>Claim</p>
            <p>Policy</p>
            <p>Terms</p>
        </div>
        </div>
      </div>
    </div>
  );
};
