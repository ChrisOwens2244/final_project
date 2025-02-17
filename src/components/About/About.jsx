import pic from "../../assets/about.jpg";
function About() {
  return (
    <div className="about">
      <img className="about__image" src={pic} alt="Author pic" />
      <div className="about__text">
        <h1 className="about__title">About the author</h1>
        <p className="about__desc">
          Christopher Owens is a bachelor in Computer Science who has taken the
          Triple Ten Software Development bootcamp. They made this website was
          made for the bootcamps final project.
        </p>
      </div>
    </div>
  );
}
export default About;
