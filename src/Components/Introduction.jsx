import Styles from "./CSSFile/Introduction.module.css";

export const IntroductionDataDetails = {
  imageIntro: "https://picsum.photos/id/239/600/300",
  heading: "Lorem ipsum, Dolor",
  mainHeading: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda at consectetur enim cupiditate aliquid, odit officiis rerum eveniet unde veritatis culpa consequatur obcaecati quo veritatis nobis possimus modi at adipisci ipsa recusandae provident. Deserunt, id.",
};

const Introduction = () => {
  return (
    <>
      <div className={`${Styles.introductionSection}`}>
        <div className="container-fluid">
          <div className="row">
            <div className={`${Styles.intoImageSec} col-lg-5 col-12`}>
              <img src={IntroductionDataDetails.imageIntro} className="img-fluid w-100" />    {/* pass content through  props */}
            </div>
            <div className={`col-lg-7 col-12 p-5 my-3 ${Styles.intro}`}>
              <h5>INTRODUCTION</h5>
              <h1>{IntroductionDataDetails.heading}</h1>       {/* pass content through  props */}
              <p>{IntroductionDataDetails.mainHeading}</p>    {/* pass content through  props */}
              <p>{IntroductionDataDetails.mainHeading}</p>   {/* pass content through  props */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
