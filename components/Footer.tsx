import React from "react"
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineFolder,
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0" />

      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          <span className="mx-1">crafted with ❤️ by</span>
          <a
            href="https://github.com/Afi223"
            target="_blank"
            rel="noreferrer"
          >
            <span className="rounded-full bg-blue-600 px-2 py-1 text-white">
              Abdiqani Hassan
            </span>
          </a>
        </div>

        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/Afi223" target="_blank" rel="noreferrer">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a href="mailto:your@email.com" target="_blank" rel="noreferrer">
            <AiOutlineMail
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/abdiqanihassan/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a href="/" target="_blank" rel="noreferrer">
            <AiOutlineFolder
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
