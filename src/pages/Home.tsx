import { useGetProductsQuery } from "@api/apiSlice";
import { BsCartPlus } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { Loader } from "@components/Loader";
import { openModal } from "@components/Modal/openModal";
import { useDispatch } from "react-redux";
import { addProduct } from "@features/cardSlice";
import "@styles/Home.scss";

export const Home = () => {
  const dispatch = useDispatch();
  const { data: products, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="home__container">
      <h1 className="home__h1">Menu</h1>
      <div className="home__layout">
        {products?.map((item) => (
          <div className="home__item" key={item.id}>
            <img className="home__img" src={item.image} alt={item.title} />
            <div className="home__info">
              <h1 className="home__title">{item.title}</h1>
              <div className="home__container__buttons">
                <button
                  className="home__add"
                  onClick={() => dispatch(addProduct(item))}
                >
                  <BsCartPlus />
                </button>
                <button className="home__more" onClick={() => openModal(item)}>
                  <CgMoreO />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
