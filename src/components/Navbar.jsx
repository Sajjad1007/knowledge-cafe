const Navbar = () => {
  return (
    <div className="navbar border-b-2 border-b-gray-200 p-0 py-3">
      <div className="flex-1">
        <a
          onClick={() => (window.location.href = "./index.html")}
          className="hover:cursor-pointer text-3xl font-bold p-0"
        >
          Knowledge Cafe
        </a>
      </div>
      <div className="flex-none">
        <div className="hover:opacity-80">
          <div
            tabIndex={0}
            role="button"
            className="hover:opacity-80 hover:cursor-pointer avatar"
          >
            <div className="w-11 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
