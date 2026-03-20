function Navbar() {
  return (
    <div className="flex justify-between px-10 py-5 text-white bg-[#020C1B]">
      <h1 className="text-xl font-bold">Shalin</h1>
      <div className="space-x-6">
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;