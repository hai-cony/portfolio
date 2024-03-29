import nodejs from "../../public/nodejs.svg";
import laravel from "../../public/laravel.svg";
import mysql from "../../public/mysql.svg";
import react from "../../public/react.svg";
import tailwind from "../../public/tailwindcss.svg";
import Image from "next/image";
import { Toggle } from "@/components/ui/toggle";

export default function Section4() {
  return (
    <section
      className="bg-secondary text-primary font-poppins pt-14"
      id="whoami"
    >
      <div className="w-3/4 mx-auto">
        <div className="flex w-full justify-between items-center">
          <h1 className="bg-gradient-to-r pb-2 from-green-500 via-purple-500 to-indigo-600 bg-clip-text text-xl font-bold text-transparent sm:text-3xl">
            Technology
          </h1>
          <h2 className="bg-gradient-to-r from-green-500 via-purple-500 to-indigo-600 bg-clip-text text-lg font-bold text-transparent sm:text-xl mt-5 mb-5">
            <span className="text-primary">🛠️</span> My current stack
          </h2>
        </div>
        <p className="font-semibold text-justify text-primary/80">
          I have expertise in various technologies and development tools, such
          as HTML, CSS, JavaScript, React, Node.js, Laravel, and others. I am
          always open to learning new technologies and innovating to create
          superior solutions.
        </p>
        <div className="mt-10 h-32">
          <div className="flex items-center h-full flex-wrap justify-around">
            <Toggle>
              <Image
                src={nodejs}
                alt="Node JS"
                width={100}
                height={100}
                className="duration-150 transition opacity-20 hover:opacity-100"
              />
            </Toggle>
            <Toggle>
              <Image
                src={laravel}
                alt="Laravel"
                width={100}
                height={100}
                className="duration-150 transition opacity-20 hover:opacity-100"
              />
            </Toggle>
            <Toggle>
              <Image
                src={react}
                alt="React JS"
                width={100}
                height={100}
                className="duration-150 transition opacity-20 hover:opacity-100"
              />
            </Toggle>
            <Toggle>
              <Image
                src={mysql}
                alt="MySQL"
                width={100}
                height={100}
                className="duration-150 transition opacity-20 hover:opacity-100"
              />
            </Toggle>
            <Toggle>
              <Image
                src={tailwind}
                alt="Tailwind CSS"
                width={100}
                height={100}
                className="duration-150 transition opacity-20 hover:opacity-100"
              />
            </Toggle>
          </div>
        </div>
        <p className="font-semibold mt-5 text-justify text-primary/80">
          Currently I'm learning React Native, Golang and using linux for
          Operating System. I am also interested in learning other technologies
          such as PostgreSQL, Python, automation systems and others. I am very
          happy and always open to discussing technology.
        </p>
      </div>
    </section>
  );
}
