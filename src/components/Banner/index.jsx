import "./index.scss";

function Banner({ titlePicture, title }) {
  return (
    <div className="banner-container">
      <img src={titlePicture} alt="banner-background" />
      <h1>{title}</h1>
    </div>
  );
}

export default Banner;
