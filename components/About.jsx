import React from "react";
import Image from "next/image";
import styles from "./About.module.css";

const IMGURL =
  "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80";

const About = () => {
  return (
    <div id="About" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Software Engineer based in Canada.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            possimus ex asperiores esse ab recusandae rerum eaque explicabo sit
            dolorum nisi cumque at libero quae repellendus eligendi soluta,
            facilis veniam dolor amet? Blanditiis expedita pariatur aliquam
            animi magni dolorem molestiae, architecto, molestias velit ut, odio
            enim tempore sapiente sed vero?
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
            magni! Nemo repudiandae natus, quis aliquam, eius aperiam vel
            quisquam dignissimos commodi pariatur fugit quasi molestiae
            voluptate, alias esse praesentium iste aliquid ducimus culpa eveniet
            unde veritatis! Repellat dicta animi voluptatem consequatur veniam
            temporibus, nemo architecto incidunt, dignissimos veritatis nobis
            soluta?
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Checkout some of my recent projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 hover:shadow-[#5651E57D] ease-in duration-300">
          <img src={IMGURL} className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
