import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
// import reactLogo from "./img/react-logo.png";



// ReactDOM.render(<p>Lista desordenada</p>, document.getElementById("root"));

// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// function MainContent(){
//     return <h1>Peaso título</h1>;
// }

// ReactDOM.render(<ul>
//     <li>Elemento 1</li>
//     <li>Elemento 2</li></ul>, document.getElementById("root"));

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// );

//Forma de hacerlo con programación imperativa, sin componentes. 
// const root = document.getElementById("root");
// let head = document.createElement("h1");
// root.append(head);
// head.innerText = "Soy el encabezado";
// head.className = "header";
 

//JSX
// const page = 
//     <div>
//         <h1 clasName = "header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>;

// ReactDOM.render(
//     page, document.getElementById("root")
// );


// const nav = 
// <nav>
// <h1>Website</h1>
// <ul>
//     <li>Pricing</li>
//     <li>About</li>
//     <li>Contact</li>
// </ul>
// </nav>;
// ReactDOM.render(
//      <nav>
//          <h1>Website</h1>
//          <ul>
//              <li>Pricing</li>
//              <li>About</li>
//             <li>Contact</li>
//          </ul>
//      </nav>*nav, document.getElementById("root")
// );

// const jsxElements = (
//     <div>
//         <h1>Página web</h1>
//         <h2>Soy el encabezado 2</h2>
//         <p>Soy un párrafo</p>
//         <ul>
//             <li>Elemento 1</li>
//             <li>Elemento 2</li>
//         </ul>
//     </div>
// );


// console.log(jsxElements);
// ReactDOM.render(jsxElements, document.getElementById("root"));

// const website = (
//     <div>
//     <img src="https://static-00.iconduck.com/assets.00/react-icon-256x256-2yyldh38.png" width="40px"></img>
//     <h1>Fun facts about React</h1>
//     <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100K stars on Github</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
// </div>
// );

// ReactDOM.render(website, document.getElementById("root"));

// import Header from "./components/Header.jsx";
// import Footer from "./components/Footer.jsx";
// import Content from "./components/Content.jsx";
// function App(){
//     return(
//         <div className="container">
//             <Header />
//             <Content />
//             <Footer />
//         </div>
//     );
// }

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

