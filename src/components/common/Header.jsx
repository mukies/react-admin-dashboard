const Header = ({ title }) => {
  return (
    <header className="bg-[#7de05e]  backdrop-blur-md shadow-lg border-b border-[#7de05e]">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-100">{title}</h1>
      </div>
    </header>
  );
};
export default Header;
