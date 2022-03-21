import  { Banner }  from "../components/Banner";
import  { SectionOne }  from "../components/Sections/SectionOne";
import  { SectionTwo }  from "../components/Sections/SectionTwo";
import  { SectionThree }  from "../components/Sections/SectionThree";
import  { SectionFour } from "../components/Sections/SectionFour";
import  { SectionFive } from "../components/Sections/SectionFive";
import  { Footer }  from "../components/Footer";
import  { GlobalStyle }  from "../styles/global.js";
import { Divider } from "../components/Divider";

export default function Home() {
  return (
    <>
      <Banner />
      <SectionOne/>  
      <Divider />
      <SectionTwo/>
      <Divider /> 
      <SectionThree/>
      <Divider /> 
      <SectionFour/>
      <Divider /> 
      <SectionFive/>
      <Footer/>
      <GlobalStyle/>
    </>
  )
}
