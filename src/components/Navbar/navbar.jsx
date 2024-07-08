import CartWidget from "./CartWidget/CartWidget"



const Navbar = ({categorias})=> {

    return(
       <>
       <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">{categorias[0]}</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">{categorias[1]}</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">{categorias[2]}</a>
  </li>
  <div className="d-flex">
    <CartWidget/>
  </div>
  
  
</ul>
         
       </>
    )

}


export default Navbar