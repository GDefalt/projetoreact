import happywheels from "../../assets/happywheels.jpg"

import "bootstrap/dist/css/bootstrap.css"

import "./cards.css"

function Cards() {
  return (<>

  <div className="cards-contain">
  <div className="card" style={{ width: '30rem', height: '42rem' }}>
<img src={happywheels} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ex libero sequi itaque assumenda officiis eius. In corporis consequuntur esse architecto saepe, eos distinctio odit quos repellat quod itaque adipisci.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>

<div className="card" style={{width: '30rem', height: '42rem'  }}>
<img src={happywheels} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis blanditiis dolorem! Nihil rem, voluptatem, amet placeat voluptas accusamus nisi mollitia iure dolorem voluptatibus fugit. Veniam perspiciatis eos incidunt.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>

<div className="card" style={{ width: '30rem', height: '42rem'  }}>
<img src={happywheels} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, excepturi minima ratione sunt porro iste maxime vitae! Officia deserunt aut rem voluptatibus doloremque. Possimus eius necessitatibus porro quasi maxime modi? </p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>

<div className="card" style={{width: '30rem', height: '42rem'  }}>
<img src={happywheels} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur, rerum nostrum debitis autem fuga cupiditate. Sunt repellat perferendis ab magnam eius perspiciatis quia sapiente, suscipit placeat. Similique, consequuntur natus.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>
</div>
  </>);
}

export default Cards;


