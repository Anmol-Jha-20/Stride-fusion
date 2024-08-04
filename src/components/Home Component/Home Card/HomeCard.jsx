import "./HomeCard.css";

function HomeCard({ username, src, text }) {
  return (
    <>
      <div className="home__card relative h-[800px] w-[600px] ml-10">
        <img src={src} className="z-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{username}</h1>
          <p className="mt-2 text-xl text-gray-300">{text}</p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-xl font-semibold bg-white text-black px-3 py-4 rounded-md">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}

export default HomeCard;
