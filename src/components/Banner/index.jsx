import "./index.scss";

function Banner({ titlePicture, title }) {
  return (
    <section className="banner-container">
      <img src={titlePicture} alt="banner-background" />
      <h1>{title}</h1>
    </section>
  );
}

export default Banner;
