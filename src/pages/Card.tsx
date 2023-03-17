import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { deleteProduct, deleteAll } from "@features/cardSlice";
import { useNavigate } from "react-router-dom";
import { type Product } from "@interfaces/Products.interface";
import "@styles/Card.scss";

export const Card = ({ card }: { card: Product[] }) => {
  const total = card.map((item) => item.price).reduce((a, b) => a + b, 0);
  const [buttonToHome, setButtonToHome] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlePay = () => {
    dispatch(deleteAll());
    setButtonToHome(true);
  };
  const handleMenu = () => {
    setButtonToHome(false);
    navigate("/");
  };
  return (
    <>
      <div className="card__container">
        <div className="card__layout">
          <ul className="card__ul">
            {card.map((item, index) => (
              <li className="card__li" key={index}>
                <p className="card__title">{item.title}</p>
                <div className="card__container__price">
                  <p className="card__price">${item.price}</p>
                  <RxCross2
                    className="card__cross"
                    onClick={() => dispatch(deleteProduct(item.id))}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="card__pay__info">
          <h1 className="card__total">Total: ${total}</h1>
          <button className="card__pay" onClick={handlePay}>
            Pay
          </button>
        </div>
      </div>
      {buttonToHome && (
        <div className="card__buttonToHome__container">
          <div className="card__buttonToHome__layout">
            <h1 className="card__buttonToHome__h1">Thanks for buying!</h1>
            <button className="card__buttonToHome__button" onClick={handleMenu}>
              Menu
            </button>
          </div>
        </div>
      )}
    </>
  );
};
