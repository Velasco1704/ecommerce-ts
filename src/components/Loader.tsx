import "@styles/Loader.scss";

export const Loader = () => {
  return (
    <div className="loader__container">
      <svg className="loader__svg" viewBox="25 25 50 50">
        <circle className="loader__circle" r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
};
