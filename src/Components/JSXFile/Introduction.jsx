import Styles from "../CSSFile/Introduction.module.css";
import useAboutData from "../../hooks/useAboutData";


export const IntroductionDataDetails = {
  // imageIntro: "https://i.pinimg.com/736x/e4/b1/2c/e4b12c77d71ac4d35b937b9b6cc1f028.jpg",
  imageIntro: "https://picsum.photos/id/239/600/300",
  heading: "sachin ipsum, Dolor",
  mainHeading: "sachin singh bhadiriya ipsusdsadm, dolor sit amet consectetur adipisicing elit. Assumenda at consectetur enim cupiditate aliquid, odit officiis rerum eveniet unde veritatis culpa consequatur obcaecati quo veritatis nobis possimus modi at adipisci ipsa recusandae provident. Deserunt, id.",
};

const Introduction = () => {
  const { data: abouttexts, loading, error } = useAboutData(); // 👈 fetch dynamic data
  return (
    <>
      <div className={`${Styles.introductionSection}`}>
        <div className="container-fluid ">
          <div className="row">
            <div className={`${Styles.intoImageSec} col-lg-5 col-12`}>
              <img src={IntroductionDataDetails.imageIntro} width={600} height={300} className="img-fluid" />    {/* pass content through  props */}
            </div>
            <div className={`col-lg-7 col-12 p-3 mb-3 mt-5 ${Styles.intro}`}>
              <h5>INTRODUCTION</h5>
              {abouttexts.map((abouttext) => (
                <div key={abouttext._id} >
                    <h1>{abouttext.heading}</h1>
                    <p>{abouttext.paragraph}</p>
                    {/* <p>{abouttext.paragraph}</p> */}
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
