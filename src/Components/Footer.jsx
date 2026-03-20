function Footer() {
  return (
    <footer className="px-6 py-8 text-slate-500 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-slate-800 pt-6 text-sm md:flex-row md:items-center md:justify-between">
        <p>Copyright {new Date().getFullYear()} Shalin Christian</p>

        <div className="flex gap-6">
          <a
            href="https://github.com/shalinchristian"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-slate-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-slate-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:shalinchristian71@gmail.com"
            className="transition hover:text-slate-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
