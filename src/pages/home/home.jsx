
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/Footer";
import './home.css'
function home() {
  return (
    <>
      <div className="Home">
        <Navbar />
        <Footer></Footer>
     </div>
    </>
  );
}

export default home;