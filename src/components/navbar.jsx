

function navbar() {
  return (
    <div className="flex flex-col items-center justify-center z-50">
      <div className="md:w-[1325px] w-[390px] h-[45px] md:h-[76px] rounded-2xl bg-gradient-to-r from-transparent to-white/10 shadow-md backdrop-blur-14 flex items-center border-gray-800 border-[0.1em]">
        <div className="flex flex-row md:space-x-[900px] space-x-[60px] ">
          <div className="flex items-center justify-center mx-11 md:text-2xl text-xl font-semibold text-white">
            TO-DO APP
          </div>
          <div className="flex items-center justify-center mx-11 md:w-[191px] md:h-[55px] w-[121px] h-[32px] bg-gradient-to-r from-[#1d3e4e] to-[#74c2e9] rounded-xl text-xl font-semibold text-white ">
          <a href="https://github.com/Morbius00" target="_blank" rel="noopener noreferrer"><button>Connect</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default navbar


