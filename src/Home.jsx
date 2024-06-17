import React from "react";

function Home() {
  return (
    <section
      style={{ fontFamily: "Montserrat" }}
      className="bg-[#071e34] flex font-medium items-center justify-center h-screen"
    >
      <section className="w-72 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">2d ago</span>
          <span className="text-emerald-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </span>
        </div>
        <div className="mt-6 w-fit mx-auto">
          <img
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718496000&semt=sph"
            className="rounded-full w-28"
            alt="profile picture"
          />
        </div>
        <div className="mt-8">
          <h2 className="text-white font-bold text-2xl tracking-wide">
            Jonathan <br /> Smith
          </h2>
        </div>
        <p className="text-emerald-400 font-semibold mt-2.5">Active</p>
        <div className="h-1 w-full bg-black mt-8 rounded-full">
          <div className="h-1 rounded-full w-2/5 bg-yellow-500" />
        </div>
        <div className="mt-3 text-white text-sm">
          <span className="text-gray-400 font-semibold">Storage:</span>
          <span>40%</span>
        </div>
        <div className="mt-4 text-white text-sm">
          <span className="text-gray-400 font-semibold">Total Coins:</span>
          <span> 1234</span>
        </div>
        <div className="mt-4 text-white text-sm">
          <span className="text-gray-400 font-semibold">Tags:</span>
          <span> #crypto, #mining</span>
        </div>
        <div className="mt-4 text-white text-sm">
          <span className="text-gray-400 font-semibold">Miner ID:</span>
          <span> 5678XYZ</span>
        </div>
      </section>
    </section>
  );
}

export default Home;
