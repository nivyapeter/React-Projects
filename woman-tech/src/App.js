
import './App.css';
import Area from './components/Area';
import Banner from './components/Banner';
import Events from './components/Events';
import Footer from './components/Footer';
import GrowingCommunity from './components/GrowingCommunity';
// import CarouselBrands from './components/Carousel';
import Header from './components/Header';
import Mission from './components/Mission';
import MobileDropDown from './components/MobileDropDown';
import News from './components/News';
import Partners from './components/Partners';
import Patronage from './components/Patronage';
import WomanCommunities from './components/WomanCommunities';
import WomanTech from './components/WomanTech';

function App() {
  return (
    <div >
 
      <Header />
      {/* <CarouselBrands /> */}
      <Mission />
      <Area />
      <WomanCommunities />
      <WomanTech />
      <GrowingCommunity />
      <Patronage />
      <News />
      <Events />
      <Partners />
      <Footer />
      {/* <MobileDropDown /> */}
      {/* <Banner /> */}
    </div>
  );
}

export default App;
