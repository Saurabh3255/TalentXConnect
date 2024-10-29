

function Button({ children }) {
  return (
    <div className="mb-8">
    <button className="flex items-center bg-gray-600 text-white py-2 px-4 rounded-full hover:bg-yellow-200 hover:text-black transition duration-300 mb-5">
      {children}
    </button>
    </div>
  );
}

export default Button;
