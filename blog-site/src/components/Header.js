import { Link } from "react-router-dom";
 
const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-title"><b>LuisRPavanello Blogsite</b></h1>
      <div className="header-sub">
        <Link className="header-buttons" to={"/"}><b>My Blogs</b></Link>
        <Link className="header-buttons" to={"/author"}><b>About the Author</b></Link>
      </div>
    </div>
  );
}
 
export default Header;