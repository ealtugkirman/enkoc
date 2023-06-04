import { Fragment } from "react"
import Hero from "./Pages/Hero"
import BestWork from "./Pages/BestWork"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Portfolio from "./Pages/Portfolio"
import { ContactUs } from "./Pages/ContactUs"

export default function App() {

  return (
    <Fragment>
      <Hero />
      <About />
      <BestWork />
      <Services />
      <Portfolio />
      <ContactUs />
    </Fragment>
  )
}