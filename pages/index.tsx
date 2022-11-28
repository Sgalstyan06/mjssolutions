import { NextPage } from "next";

import SEO from "../components/SEO";
import MainContainer from "../containers/MainContainer";
import { DOMAIN_NAME } from "../constants/staticInfo";

const Home: NextPage = () => {
  return (
    <div>
      <SEO
        title="MJS solutions | Authorized Miele Service Provider"
        description="MJS Solutions is an authorized Miele service provider that services all Miele residential appliances and performs maintenance at your request. We service Los Angeles and surrounding areas."
        image={`${DOMAIN_NAME}socialImages/socialIcon.jpg`}
      />
      <MainContainer />
    </div>
  );
};

export default Home;
