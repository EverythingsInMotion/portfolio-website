import Image from "next/legacy/image";
import React from "react";
import omniFood from "../public/projects/omnifood.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const omnifood = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <Image
          src={omniFood}
          alt="omnifood"
          className="absolute"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 ">
          <div className="absolute top-[80%] max-w-[12340px] w-full left-[60%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
            <h2 className="py-2">Omnifood</h2>
            <h3>HTML | CSS</h3>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Omnifood - Food subscription Website</p>
          <h2 className="mt-1">Overview</h2>
          <p className="mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            architecto corporis commodi quis voluptatem doloremque quae facere
            aliquam nisi totam molestias nesciunt veritatis reiciendis quidem,
            voluptas, harum sit delectus soluta exercitationem repellat vitae
            dignissimos recusandae rem? Autem, ipsam fugiat eum, error quasi
            dolor dolorem a cumque atque repellendus incidunt tenetur.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#Projects">
          <p className="underline cursor-pointer">Back to projects.</p>
        </Link>
      </div>
    </div>
  );
};

export default omnifood;
