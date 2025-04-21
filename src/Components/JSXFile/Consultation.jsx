import Styles from '../CSSFile/Consultation.module.css';

const Consultation = () => {
    return (
        <>
            <div className={`py-5 ${Styles.ConsultationSection}`}>
                      <div className=" container-fluid">
                          <h5>Reach Out To Us</h5>
                          <h1>Schedule Your Free Consultation Today!</h1>
                        <div className="row">
                          <div className={`my-2 p-2 col-12 col-sm-12 col-md-4 ${Styles.inputBox}`}>
                            <input placeholder='Your Full Name*' required />
                          </div>
                          <div className={`my-2 p-2 col-12 col-sm-12 col-md-4 ${Styles.inputBox}`}>
                            <input placeholder='Email*' required />
                          </div>
                          <div className={`my-2 p-2 col-12 col-sm-12 col-md-4 ${Styles.inputBox}`}>
                            <input placeholder='Phone Number:' />
                          </div>
                          <div className={`my-2 p-2 col-12 col-sm-12 col-md-6 ${Styles.inputBox}`}>
                            <input placeholder='Prorperty Address' />
                          </div>
                          <div className={`my-2 p-2  col-12 col-sm-12 col-md-6 ${Styles.inputBox}`}>
                           <div className={`container-fluid ${Styles.label}`}>
                              <div className="row">
                                <div className={`col-md-3 col-12  ${Styles.neededServiceLabel}`}>
                                    <label>Needed Service</label>
                                </div>
                                <div className="col-md-9 col-12">
                                    <input placeholder='your  first name' />
                                </div>
                              </div>
                           </div>
                          </div>
                          <div className={`my-2 p-2 col-12 col-sm-12 col-md-12 d-flex  ${Styles.inputBox}`}>
                            <label className='' style={{ display: "flex", alignItems: "center", gap: "8px", margin: "auto" }}>
                              <input type="checkbox" style={{width:"15px", height:"15px"}} />
                              <span>By submitting this form you agree to the terms of the Privacy Policy.</span>
                              <button className={`${Styles.ConsultationButton}`}>Submit</button>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
        </>
    );
};

export default Consultation;