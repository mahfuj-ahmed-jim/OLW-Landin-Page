import { GetStarted } from "./components/getStarted/getStarted";
import Header from "./components/header/header";
import Partners from "./components/partners/partners";
import { Pricing } from "./components/pricing/pricing";
import Services from "./components/services/services";
import { Tools } from "./components/tools/tools";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Partners />
      <Services />
      <Pricing />
      <Tools />
      <GetStarted />
    </div>
  );
}
