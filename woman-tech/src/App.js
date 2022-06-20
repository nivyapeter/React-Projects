
import './App.css';
import Area from './components/Area';
import Events from './components/Events';
import Footer from './components/Footer';
import GrowingCommunity from './components/GrowingCommunity';
import Header from './components/Header';
import Mission from './components/Mission';
import MobileDropDown from './components/MobileDropDown';
import News from './components/News';
import Partners from './components/Partners';
import Patronage from './components/Patronage';
// import Slideshow from './components/Slideshow';
import WomanCommunities from './components/WomanCommunities';
import WomanTech from './components/WomanTech';

function App() {
  return (
    <div >
 
      <Header />
      {/* <div className='relative'>
     <Slideshow />
     </div> */}
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
