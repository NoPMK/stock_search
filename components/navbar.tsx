const Navbar = () => {
  return (
    <nav className="container">
      <div className="flex justify-between pt-4">
        <span className="pl-10">Logo</span>
        <div className="flex gap-2 pr-10">
          <span>Search</span>
          <span>Favorites</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
