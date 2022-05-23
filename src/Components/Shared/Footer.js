import React from "react";
import { Link } from "react-router-dom";
import img from "../Assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className=" px-20 py-20  bg-[#120e43e0] text-neutral  text-lg">
          <div className="grid md:grid-cols-2   grid-cols-1 lg:grid-cols-4  gap-5">
            <div className="mt-[-12px]">
              <Link to={"/"} className="">
                <strong className="text-5xl  text-[#FFC000]">T</strong>
                <strong className="text-3xl text-white">- COLLECTION</strong>
              </Link>
              <p className="mt-4">
                Lukas is the best parts shop for your car accessories. What kind of parts do you
                need you can get here soluta nobis
              </p>
            </div>
            <div>
              <span class=" pb-1 border-b-2 border-white  font-bold uppercase text-xl text-white">
                Information
              </span>
              <p class="link link-hover mt-5">Our company</p>
              <p class="link link-hover">Contact us</p>
              <p class="link link-hover">Contact us</p>
              <p class="link link-hover">Contact us</p>
              <p class="link link-hover">Careers</p>
            </div>

            <div>
              <span class="pb-1 border-b-2 border-white  font-bold uppercase text-xl text-white">
                Legal
              </span>
              <p class="link link-hover mt-5">Terms of use</p>
              <p class="link link-hover">Privacy policy</p>
              <p class="link link-hover">Cookie policy</p>
            </div>
            <div>
              <span class="pb-1 border-b-2 border-white mb-2 font-bold uppercase text-xl text-white">
                Store Information
              </span>
              <p class="link link-hover mt-5">2005 Stokes Isle Apartment. 896,</p>
              <p class="link link-hover">Washington 10010, USA</p>
              <p class="link link-hover">https://example.com</p>
              <p class="link link-hover">(+68) 120034509</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-[#120E43]  text-white">
            <p className="text-center py-6">
              Copyright &copy; {new Date().getFullYear()} Spread Team
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
