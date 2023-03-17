import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { type Product } from "@interfaces/Products.interface";
import "@styles/Nav.scss";

export const Nav = ({ card }: { card: Product[] }) => {
  return (
    <nav className="nav__container">
      <NavLink to="/" className="nav__logo">
        Store <span className="nav__span">Online</span>
      </NavLink>
      <ul className="nav__ul">
        <NavLink to="/" className="nav__link link__home">
          <AiFillHome />
        </NavLink>
        <NavLink to="/card" className="nav__link link__card">
          <BsCart />
          {card.length !== 0 && <div className="nav__p">{card.length}</div>}
        </NavLink>
      </ul>
    </nav>
  );
};
