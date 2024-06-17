import React, { useState } from "react";

const miners = [
  {
    id: "1",
    name: "Jonathan Smith",
    profile_picture:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg",
    status: "Active",
    storage: 40,
    total_coins: 1234,
    tags: ["#crypto", "#mining"],
    miner_id: "5678XYZ",
    last_active: "2d ago",
  },
  {
    id: "2",
    name: "Alice Johnson",
    profile_picture:
      "https://img.freepik.com/free-photo/young-woman-smiling_273609-5678.jpg?size=626&ext=jpg",
    status: "Inactive",
    storage: 60,
    total_coins: 2345,
    tags: ["#crypto", "#trading"],
    miner_id: "1234ABC",
    last_active: "5d ago",
  },
  {
    id: "3",
    name: "Bob Williams",
    profile_picture:
      "https://img.freepik.com/free-photo/young-man-with-glasses_273609-5679.jpg?size=626&ext=jpg",
    status: "Active",
    storage: 75,
    total_coins: 3456,
    tags: ["#crypto", "#blockchain"],
    miner_id: "7890DEF",
    last_active: "1d ago",
  },
  {
    id: "4",
    name: "Catherine Brown",
    profile_picture:
      "https://img.freepik.com/free-photo/young-woman-with-sunglasses_273609-5680.jpg?size=626&ext=jpg",
    status: "Active",
    storage: 85,
    total_coins: 4567,
    tags: ["#mining", "#tech"],
    miner_id: "5678GHI",
    last_active: "3d ago",
  },
  {
    id: "5",
    name: "David Wilson",
    profile_picture:
      "https://img.freepik.com/free-photo/young-man-with-tie_273609-5681.jpg?size=626&ext=jpg",
    status: "Inactive",
    storage: 90,
    total_coins: 5678,
    tags: ["#crypto", "#investing"],
    miner_id: "1234JKL",
    last_active: "7d ago",
  },
  {
    id: "6",
    name: "Eva Davis",
    profile_picture:
      "https://img.freepik.com/free-photo/young-woman-with-hat_273609-5682.jpg?size=626&ext=jpg",
    status: "Active",
    storage: 50,
    total_coins: 6789,
    tags: ["#crypto", "#finance"],
    miner_id: "7890MNO",
    last_active: "4d ago",
  },
  {
    id: "7",
    name: "Frank Moore",
    profile_picture:
      "https://img.freepik.com/free-photo/young-man-with-beard_273609-5683.jpg?size=626&ext=jpg",
    status: "Inactive",
    storage: 35,
    total_coins: 7890,
    tags: ["#blockchain", "#mining"],
    miner_id: "5678PQR",
    last_active: "8d ago",
  },
  {
    id: "8",
    name: "Grace Lee",
    profile_picture:
      "https://img.freepik.com/free-photo/young-woman-with-blonde-hair_273609-5684.jpg?size=626&ext=jpg",
    status: "Active",
    storage: 95,
    total_coins: 8901,
    tags: ["#crypto", "#technology"],
    miner_id: "1234STU",
    last_active: "6d ago",
  },
  {
    id: "9",
    name: "Henry Taylor",
    profile_picture:
      "https://img.freepik.com/free-photo/young-man-with-suit_273609-5685.jpg?size=626&ext=jpg",
    status: "Active",
    storage: 55,
    total_coins: 9012,
    tags: ["#mining", "#crypto"],
    miner_id: "7890VWX",
    last_active: "9d ago",
  },
  {
    id: "10",
    name: "Isabel Harris",
    profile_picture:
      "https://img.freepik.com/free-photo/young-woman-with-jacket_273609-5686.jpg?size=626&ext=jpg",
    status: "Inactive",
    storage: 45,
    total_coins: 1234,
    tags: ["#crypto", "#blockchain"],
    miner_id: "5678YZA",
    last_active: "10d ago",
  },
];

const MinerCard = ({ miner }) => {
  const [firstName, lastName] = miner.name.split(" ");

  return (
    <section className="w-80 mx-4 my-4 bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
      <div className="flex items-center justify-between">
        <span className="text-gray-400 text-sm">{miner.last_active}</span>
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
          src={miner.profile_picture}
          className="rounded-full w-28"
          alt="profile picture"
        />
      </div>
      <div className="mt-8">
        <h2 className="text-white font-bold text-2xl tracking-wide">
          {firstName} <br /> {lastName}
        </h2>
      </div>
      <p className="text-emerald-400 font-semibold mt-2.5">{miner.status}</p>
      <div className="h-1 w-full bg-black mt-8 rounded-full">
        <div
          className="h-1 rounded-full bg-yellow-500"
          style={{ width: `${miner.storage}%` }}
        />
      </div>
      <div className="mt-3 text-white text-sm">
        <span className="text-gray-400 font-semibold">Storage:</span>
        <span> {miner.storage}%</span>
      </div>
      <div className="mt-4 text-white text-sm">
        <span className="text-gray-400 font-semibold">Total Coins:</span>
        <span> {miner.total_coins}</span>
      </div>
      <div className="mt-4 text-white text-sm">
        <span className="text-gray-400 font-semibold">Tags:</span>
        <span> {miner.tags.join(", ")}</span>
      </div>
      <div className="mt-4 text-white text-sm">
        <span className="text-gray-400 font-semibold">Miner ID:</span>
        <span> {miner.miner_id}</span>
      </div>
    </section>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const minersPerPage = 8;
  const totalPages = Math.ceil(miners.length / minersPerPage);

  const startIndex = currentPage * minersPerPage;
  const selectedMiners = miners.slice(startIndex, startIndex + minersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-[#071e34] min-h-screen flex flex-col items-center">
      <h1 className="text-3xl text-white p-4">Miner Data Dashboard</h1>
      <div className="flex flex-wrap justify-center">
        {selectedMiners.map((miner) => (
          <MinerCard key={miner.id} miner={miner} />
        ))}
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded"
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded"
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
