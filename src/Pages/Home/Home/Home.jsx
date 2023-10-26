import About from "../About/About";
import Banner from "../Banner/Banner";
import ContactInfo from "../ContactInfo/ContactInfo";
import Feature from "../Feature/Feature";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <ContactInfo></ContactInfo>
      <Team></Team>
      <Feature></Feature>
    </div>
  );
};

export default Home;
