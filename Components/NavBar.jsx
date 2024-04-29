import { useEffect, useState, useContext } from "react";
import { TrackingContext } from "../Context/TrackingContext";
import { Nav1, Nav2, Nav3 } from "../Components/index";


export default () => {
  const [state, setState] = useState(false);
  const { currentUser, connectWallet } = useContext(TrackingContext);


  const navigation = [
    { title: "Home", path: "#" },
    { title: "Service", path: "#" },
    { title: "Contact Us", path: "#" },
    { title: "Help", path: "#" },

  ];
  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <nav
      className={` bg-gray-300  md:text-sm ${state
          ? "shadow-lg rounde-xl border mx-2  md:shadow-none md:border-none  md:mx-2 md:mt-0"
          : ""


        }`}
    >
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8" >
        <div className=" flex items-center justify-between  md:block">
          <a href="javascript:void(0)">
            <img src="https://tse1.mm.bing.net/th?id=OIP.S65_ge5uYKssVTCpI1a5UwHaD9&pid=Api&P=0&h=180"
             className=" h-[80px] w-[100px]  rounded-lg hover:scale-75 duration-100 shadow-2xl" alt="float logo" />

          </a>
          <div className="md:hidden">
            <button className="menu-btn text-grey-500 hover:text-grey-800"
              onClick={
                () => setState(!state)
              }
            >
              {state ? <Nav1 /> : <Nav2 />}
            </button>

          </div>

        </div>

        <div
          className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? "block" : "hidden"
            }`}
        >
          <ul className="justify-center items-center 
            space-y-6 md:flex md:space-x-6
            md:space-y-0 ">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-700 
                  hover:tedt-gray-900">
                  <a href={item.path} className="block font-bold  text-xl shadow-2xl hover:scale-75 duration-100">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end
            mt-6 space-y-6  md:flex md:space-y-0 md:mt-0">
            {currentUser ? (
              <p className="flex items-center justify-center gap-x-1 py-2 px-4 text-white 
                font-medium bg-gray-800 hover:bg-grey-700 active:bg-gray-900 rounded-full md:inline-flex ">
                {currentUser.slice(0, 25)}..
              </p>
            ) : (
              <button
                onClick={() => connectWallet()}
                className="
                flex items-center justify-center gap-x-2 py-2 px-4 text-white 
                font-medium bg-gray-800 hover:bg-grey-700 active:bg-gray-900 rounded-full md:inline-flex "
              >
                connect Wallet
                <Nav3 />

              </button>

            )}

          </div>

        </div>


      </div>


    </nav>

  );
};