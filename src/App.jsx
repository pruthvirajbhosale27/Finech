import Header from "./components/Header";
import MainFrame from "./components/MainFrame";
import WhyChoose from "./components/WhyChoose";
import WhoIsIt from "./components/WhoIsIt";
import Securitycompliance from "./components/Securitycompliance";
import SuccessStory from "./components/SuccessStory";
import PricingPlan from "./components/PricingPlan";
import FinanceSolution from "./components/FinanceSolution";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <div>Hello world</div> */}
      <Header />
      <MainFrame />
      <WhyChoose />
      <WhoIsIt />
      <Securitycompliance />
      <SuccessStory />
      <PricingPlan />
      <FinanceSolution />
      <Footer />
    </>
  );
}

export default App;
