import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="Skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-md rounded-xl shadow-[#ED6529] hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/html.png"
                  width={64}
                  height={64}
                  alt="HTML"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md rounded-xl shadow-[#0377BD] hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/css.png"
                  width={64}
                  height={64}
                  alt="css"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">css</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md rounded-xl shadow-yellow-600 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/javascript.png"
                  width={64}
                  height={64}
                  alt="javascript"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">javascript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md rounded-xl shadow-[#43A7B3] hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/tailwind.png"
                  width={64}
                  height={64}
                  alt="tailwind"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">tailwind</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md rounded-xl shadow-[#03D6FE] hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/react.png"
                  width={64}
                  height={64}
                  alt="react"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">react</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md rounded-xl shadow-[#374151] hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/nextjs.png"
                  width={64}
                  height={64}
                  alt="nextjs"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">nextjs</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md rounded-xl shadow-yellow-600 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/python.png"
                  width={64}
                  height={64}
                  alt="python"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">python</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md rounded-xl shadow-[#374151] hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto bg-gray-700 rounded-full">
                <Image
                  src="/../public/skills/github.png"
                  width={64}
                  height={64}
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="uppercase">github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
