import happywheels from "../../assets/happywheels.jpg"
import agario from "../../assets/agario.jpg"
import slitherio from "../../assets/slitherio.jpg"
import shellshockers from "../../assets/shell.avif"

import "bootstrap/dist/css/bootstrap.css"

import "./cards.css"

function Cards() {
  return (<>

  <div className="cards-contain">
  <div className="card" style={{ width: '30rem', height: '42rem' }}>
<img src={happywheels} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Happy Wheels</h5>
  <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur, rerum nostrum debitis autem fuga cupiditate. Sunt repellat perferendis ab magnam eius perspiciatis quia sapiente, suscipit placeat. Similique, consequuntur natus.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>

<div className="card" style={{width: '30rem', height: '42rem'  }}>
<img src={agario} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Agario</h5>
  <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur, rerum nostrum debitis autem fuga cupiditate. Sunt repellat perferendis ab magnam eius perspiciatis quia sapiente, suscipit placeat. Similique, consequuntur natus.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>

<div className="card" style={{ width: '30rem', height: '42rem'  }}>
<img src={slitherio} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Slitherio</h5>
  <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur, rerum nostrum debitis autem fuga cupiditate. Sunt repellat perferendis ab magnam eius perspiciatis quia sapiente, suscipit placeat. Similique, consequuntur natus.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>

<div className="card" style={{width: '30rem', height: '42rem'  }}>
<img src={shellshockers} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Shell Shockers</h5>
  <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur, rerum nostrum debitis autem fuga cupiditate. Sunt repellat perferendis ab magnam eius perspiciatis quia sapiente, suscipit placeat. Similique, consequuntur natus.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>
</div>
  </>);
}

export default Cards;


