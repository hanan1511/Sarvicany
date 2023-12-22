import Style from "./Guest.module.css";
import { Link } from 'react-router-dom'
function Guest(){
    return(
        <>
        <div className={`${Style.img1}`}>
        <div className="container py-5 ">
            <div className="col-md-12 ">
                <div className="row mt-5 justify-content-center align-item-center w-auto">
                    <div className="col-md-6 align-self-center">
                        <div className={`${Style.welcome}`}>
                            <div className={` ${Style.mainHeading}`}>
                                <p className="text-center">
                                    Welcome to {" "}
                                    <span className={` ${Style.mainHeadingSpan}`}>S</span>arvicny
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 align-self-center">
                        <img src="logo2.png" className={` ${Style.imgo}`}/> 
                    </div>
                </div> 
            </div>
        </div>
        </div>
       
                <div className="row mt-5 justify-content-center align-item-center">
                    <div className="col-md-12 d-flex justify-content-center align-item-center mb-5 ">
                        <p className={`${Style.head2}`}>
                            You Want to Enter As
                        </p>
                    </div>
                    <div className="col-md-3">
                    <Link to={'/workerRegis'}><button className={` ${Style.btnMain}`} type="button">Worker</button></Link>
                    </div>
                    <div className="col-md-3">
                    <Link to={'/registerCustomer'}><button className={` ${Style.btnMain}`} type="button">Customer</button></Link>
                    </div>
                    <div className="col-md-3">
                    <Link to={'/home'}><button className={`${Style.btnMain}`} type="button" >Guest</button></Link>
                    </div>
                </div>
        </>
    );
}

export default Guest;