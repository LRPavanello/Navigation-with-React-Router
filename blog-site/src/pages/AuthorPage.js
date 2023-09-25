import Header from "../components/Header";
 
const AuthorPage = () => {
  return ( 
    <div>
      <Header/>
      <div className="container">
                <div className="inner-container">
                    <h1 className="page-title">About the Author: Luis Renan Pavanello</h1>
                   
                    <img src="./img/header_author.png" className="hero-image" alt="" />
                    <div className="blog-content">
                        <p className="blog-text">Luis Renan Pavanello's journey in web development began at the age of 13, starting with Basic HTML, CSS, and JavaScript. Over the years, he has evolved his skills to encompass SCSS and CSS for creating visually appealing website designs, along with React for developing advanced web applications. Luis's commitment to staying current in the ever-changing web development landscape underscores his professional dedication. </p>
                    </div>
                </div>
            </div>
    </div>
  );
}
 
export default AuthorPage;