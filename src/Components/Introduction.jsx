import Styles from "./CSSFile/Introduction.module.css";


const Introduction = () => {

    return (

      <>
        <div className={`${Styles.introductionSection}`}>
          <div className=" container-fluid">
            <div className="row">
              <div className={`${Styles.intoImageSec} col-lg-5 col-12`}>
              <img  src="https://picsum.photos/id/239/600/300" className="img-fluid w-100" />
                {/* <img  src="https://www.attassetmanagement.com/wp-content/themes/attassestes188/images/main-img.png"/> */}
              </div>
              <div className={`col-lg-7 col-12 p-5 my-3 ${Styles.intro}`}>
                <h5>INTRODUCTION</h5>
                <h1>Lorem Ipsum, Dolor</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda at consectetur enim cupiditate aliquid, odit officiis rerum eveniet
                   unde veritatis 
                    culpa consequatur obcaecati quo veritatis nobis possimus modi at adipisci ipsa recusandae provident. Deserunt, id.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda at consectetur enim cupiditate aliquid, odit officiis rerum eveniet
                   unde veritati,
                    culpa consequatur obcaecati quo veritatis nobis possimus modi at adipisci ipsa recusandae provident. Deserunt, id.</p>
              </div>
            </div>
          </div>
        </div>
      </>

    );

  };

  export default Introduction;