import React from "react";

const LINKS = [
  { text: "General", link: "#general" },
  { text: "Commands", link: "#commands" },
  { text: "Routine", link: "#routine" },
];

export const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {LINKS.map((l) => (
            <a key={l.link} href={l.link} className="mr-5 hover:text-gray-900">
              {l.text}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
