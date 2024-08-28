import "./App.css";
import { Business, Clients, Cta, Footer, Home, Navbar, Testimonials } from "./components";
import Billing from "./components/Billing";
import Contract from "./components/Contract";
import Statistics from "./components/Statistics";
import { styles } from "./Util/styles";

function App() {
  return (
    <>
    <html className="h-full scroll-smooth">
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingY} ${styles.flexCenter}`}>
          <div className={`${styles.container}`}>
            <Navbar></Navbar>
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.container}`}>
            <Home></Home>
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.container}`}>
            <Statistics></Statistics>
            <Contract></Contract>
            <Billing></Billing>
            <Business></Business>
            <Testimonials></Testimonials>
            <Clients></Clients>
            <Cta></Cta>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </html>
     
    </>
  );
}

export default App;
