
import agario from "../../assets/agario.jpg"
import slitherio from "../../assets/slitherio.jpg"
import happywheels from "../../assets/happywheels.jpg"
import arrowleft from "../../assets/arrowleft.svg"
import arrowright from "../../assets/arrowright.svg"


import './carrossel.css'

function Carrossel() {
  return (<>

  <div className="container-carrossel-unico">

  <button className="btn-arrow-container"> <img src={arrowleft} alt=""/> </button>


    <div className="contain1">
    <img className="img1" src={happywheels} alt="" />
    <p className="title-contain1">Happy Wheels</p>
    </div>

    <div  className="contain2">
        <div className="img2">
    <img className="image1" src={agario} alt="" />
    <p className="title-contain2">Agario</p>
    </div>
    <div className="img3">
    <img className="image2"  src={slitherio}alt="" />
    <p className="title-contain3">Slitherio</p>
    </div>
    </div>

        <button className="btn-arrow-container"> <img src={arrowright} alt=""/> </button>

  </div>

  <div className="container-carrossel-unico" id="carrossel2">

  <button className="btn-arrow-container"> <img src={arrowleft} alt=""/> </button>


    <div className="contain1">
    <img className="img1" src={happywheels} alt="" />
    <p className="title-contain1">Happy Wheels</p>
    </div>

    <div  className="contain2">
        <div className="img2">
    <img className="image1" src={agario} alt="" />
    <p className="title-contain2">Agario</p>
    </div>
    <div className="img3">
    <img className="image2"  src={slitherio}alt="" />
    <p className="title-contain3">Slitherio</p>
    </div>
    </div>

        <button className="btn-arrow-container"> <img src={arrowright} alt=""/> </button>


  </div>


  <div className="container-carrossel-unico" id="carrossel3">

  <button className="btn-arrow-container"> <img src={arrowleft} alt=""/> </button>


    <div className="contain1">
    <img className="img1" src={happywheels} alt="" />
    <p className="title-contain1">Happy Wheels</p>
    </div>

    <div  className="contain2">
        <div className="img2">
    <img className="image1" src={agario} alt="" />
    <p className="title-contain2">Agario</p>
    </div>
    <div className="img3">
    <img className="image2"  src={slitherio}alt="" />
    <p className="title-contain3">Slitherio</p>
    </div>
    </div>

        <button className="btn-arrow-container"> <img src={arrowright} alt=""/> </button>


  </div>

  </>);
}

export default Carrossel;


