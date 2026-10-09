function Footer() {
  return (
    <footer className="page-padding py-8 text-[#a6ada9]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 pt-6 text-sm md:flex-row md:items-center md:justify-between">
        <p>Copyright {new Date().getFullYear()} Shalin Christian</p>

        <div className="flex gap-6">
          <a
            href="https://github.com/shalinchristian"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#8fafcb]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shalinvchristian/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#8fafcb]"
          >
            LinkedIn
          </a>
          <a
            href="mailto:shalinchristian71@gmail.com"
            className="transition hover:text-[#8fafcb]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
