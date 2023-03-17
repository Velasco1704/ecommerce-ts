import { useRef } from "react";
import { Root } from "react-dom/client";
import { RxCross2 } from "react-icons/rx";
import { type Product } from "@interfaces/Products.interface";
import "@styles/Modal.scss";

export const Modal = ({ product, root }: { product: Product; root: Root }) => {
  const { title, description, price, image } = product;
  const ref = useRef<HTMLDivElement>(null);
  const callback = () => {
    root.unmount();
    document.querySelector("#modal")?.remove();
    ref.current?.removeEventListener("animationend", callback);
  };
  const handleClick = () => {
    ref.current?.classList.add("fadeOut");
    ref.current?.addEventListener("animationend", callback, { once: true });
  };
  return (
    <div className="modal__container" ref={ref}>
      <div className="modal__layout">
        <button className="modal__close" onClick={handleClick}>
          <RxCross2 />
        </button>
        <img className="modal__img" src={image} alt={title} />
        <div className="modal__info">
          <h1 className="modal__title">{title}</h1>
          <p className="modal__description">{description}</p>
          <div className="modal__container__price">
            <p className="modal__price">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
