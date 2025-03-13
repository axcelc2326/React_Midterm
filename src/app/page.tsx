import Link from "next/link";

const MainPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="text-center p-8 bg-gray-900 bg-opacity-80 rounded-2xl shadow-lg">
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          John Axcel A. Cervantes
        </h1>
        <p className="text-lg text-gray-300">BSIT - 3</p>

        <div className="mt-6 space-x-5 flex justify-center">
          <Link
            href="/products"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 transition-all duration-300 rounded-xl text-white font-semibold shadow-md"
          >
            See all Products
          </Link>
          <Link
            href="/todos"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 transition-all duration-300 rounded-xl text-white font-semibold shadow-md"
          >
            See all ToDos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
