import Navbar from "./components/navbar";
import Todo from "./components/todoapp";
function MyApp() {
  return (
    <>
      <div className="bg-[#05070D] min-h-screen flex flex-col items-center justify-center relative">
        <Navbar />
        <Todo />
        <div className="flex justify-center items-center">
          <div className="md:-mt-[2800px] -mt-[1600px] w-[450px] h-[250px] md:h-[819px] md:w-[1519px] bg-[#116285] blur-[140px] md:blur-[600px]" ></div>
        </div>
      </div>
    </>
  );
}
export default MyApp;
