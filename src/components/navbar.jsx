function Navbar() {
  return (
    <div className="flex flex-col items-center justify-center z-50 w-full">
      <div className="max-w-[1325px] w-full px-4 sm:px-6 lg:px-8 h-[45px] sm:h-[60px] lg:h-[76px] rounded-2xl bg-gradient-to-r from-transparent to-white/10 shadow-md backdrop-blur-md flex items-center border border-gray-800">
        <div className="flex items-center justify-between w-full">
          {/* App Name */}
          <div className="flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-semibold text-white">
            TO-DO APP
          </div>
          {/* Connect Button */}
          <div className="flex items-center">
            <a
              href="https://github.com/Morbius00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-[100px] sm:w-[140px] lg:w-[191px] h-[30px] sm:h-[40px] lg:h-[55px] bg-gradient-to-r from-[#1d3e4e] to-[#74c2e9] rounded-xl text-xs sm:text-sm lg:text-xl font-semibold text-white">
                Connect
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Navbar;
