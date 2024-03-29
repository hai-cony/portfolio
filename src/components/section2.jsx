"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
export default function Section2() {
  const { text } = useTypewriter({
    words: ["Portfolio", "Page"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50,
  });
  return (
    <section
      className="bg-secondary text-primary font-poppins pt-14"
      id="whoami"
    >
      <div className="w-3/4 mx-auto">
        <h2 className="bg-gradient-to-r from-green-500 via-purple-500 to-indigo-600 bg-clip-text text-lg font-bold text-transparent sm:text-xl">
          <span className="text-primary">🚀</span> Welcome to my portfolio!
          {text}
          <span className="text-primary">
            <Cursor cursorStyle="<" />
          </span>
        </h2>

        <p className="font-semibold text-justify text-primary/80 mt-8">
          Hello! I'm Erik Bagja Nugraha, I'm a web developer with a passion for
          creating amazing digital experiences. Welcome to my creative space, a
          place where ideas become reality, and code becomes art.
        </p>
        <p className="font-semibold mt-5 text-justify text-primary/80">
          I am a web developer, with expertise in building responsive and
          functional web applications. I have extensive knowledge in using
          various technologies and programming languages, such as HTML, CSS,
          JavaScript, PHP, and frameworks such as Laravel, React.js and Node.js
          (Express JS). Additionally, I also have the ability to integrate
          attractive design with powerful functionality, creating an optimal
          user experience.
        </p>
      </div>
    </section>
  );
}
