import StyledHeader from "./header.module.scss";

const Header = ({ categories, text }) => {
  return (
    <div className={StyledHeader.header}>
      <div>
        <h1>{text}</h1>
      </div>

      <div className={StyledHeader.btns}>
        {categories.map((data, item) => (
          <button key={item} className={StyledHeader.button}>
            {data}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
