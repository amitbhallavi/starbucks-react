import { useDispatch, useSelector } from "react-redux";
import { setActiveNav, toggleMenu, closeMenu } from "../store/store";
import { navLinks } from "../data/starbucksData";

export default function Navbar() {
  const dispatch = useDispatch();
  const { menuOpen, activeNav } = useSelector((s) => s.nav);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-8 h-[70px]">
        {/* Left — Logo + Nav links */}
        <div className="flex items-center gap-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt="Starbucks"
            className="h-10 w-10 object-contain cursor-pointer"
          />
          {/* Desktop nav links */}
          <ul className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => dispatch(setActiveNav(link))}
                  className={`text-sm font-bold tracking-wide hover:text-[#006242] transition-colors ${
                    activeNav === link ? "text-[#006242] border-b-2 border-[#006242]" : "text-gray-900"
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Find a store + Sign in + Join */}
        <div className="hidden md:flex items-center gap-3">
          <button className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-[#006242] transition-colors px-2">
            <span>📍</span> Find a store
          </button>
          <button className="text-sm font-semibold border border-black rounded-full px-5 py-2 hover:bg-gray-100 transition-colors">
            Sign in
          </button>
          <button className="text-sm font-semibold bg-black text-white rounded-full px-5 py-2 hover:bg-gray-800 transition-colors">
            Join now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => dispatch(toggleMenu())}
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => { dispatch(setActiveNav(link)); dispatch(closeMenu()); }}
              className="text-left text-sm font-bold text-gray-800 py-2 border-b border-gray-100"
            >
              {link}
            </button>
          ))}
          <div className="flex gap-3 pt-2">
            <button className="text-sm font-semibold border border-black rounded-full px-5 py-2">Sign in</button>
            <button className="text-sm font-semibold bg-black text-white rounded-full px-5 py-2">Join now</button>
          </div>
        </div>
      )}
    </nav>
  );
}
