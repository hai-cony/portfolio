import ig from "../../public/ig.svg";
import github from "../../public/github.svg";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div className="bg-secondary text-center pt-20">
        <h1 className="bg-gradient-to-r pb-2 from-green-500 via-purple-500 to-indigo-600 bg-clip-text text-xl font-bold text-transparent sm:text-3xl">
          Contact me
        </h1>
      </div>
      <div className="z-30 h-20 w-full bg-secondary">
        <div className="flex justify-center mx-auto py-3 space-x-3">
          <Image
            src={ig}
            alt="Instagram"
            width={50}
            height={50}
            className="duration-150 transition opacity-20 hover:opacity-100"
          />
          <Image
            src={github}
            alt="Github"
            width={50}
            height={50}
            className="duration-150 transition opacity-20 hover:opacity-100"
          />
        </div>
      </div>
    </>
  );
}
