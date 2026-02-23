import TopBar from "./components/Topbar";
import Navbar from "./components/Navbar";
import About from "./About/page"
import Hero from "./Hero/page"
import Listing from "./Listing/page"
import Footer from "./components/Footer";
import Services from "./Services/page"
import Blog from "./Blog/page"
import Testimonal from "./Testimonal/page"
export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
<Hero/>
    
<About/>
<Listing/>
<Services/>
<Blog/>
<Testimonal/>
<Footer/>
    </>
  );
}
