function Footer() {
  return (
    <footer className="bg-[#020C1B] text-gray-400 px-10 py-6 mt-10">
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} Shalin Christian. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex space-x-6 text-sm">
          <a 
            href="https://github.com/shalinchristian3" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a 
            href="mailto:shalinchristian71@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;