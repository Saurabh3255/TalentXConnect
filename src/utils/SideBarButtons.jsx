function SideBarButton({onClick, children }) {
    return (
        <div className="mb-5 cursor-pointer" onClick={onClick}>
        <button className="flex items-center justify-center bg-transparent text-gray-600 py-2 px-4 rounded transition duration-300 hover:bg-yellow-200 hover:text-black w-full h-12 shadow-sm">
          {children}
        </button>
      </div>
    );
  }
  
  export default SideBarButton;
  