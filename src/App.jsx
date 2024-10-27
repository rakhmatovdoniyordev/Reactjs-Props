import './App.scss'
import Carousel from './components/Carousel/Carousel'
import Find from './components/Find/Find'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Props from './components/Props/Props'

function App() {
  return (
    <>
    <Header/>
    <Carousel/>
    <Find/>
    <Props clasN="mobile" title="Mobile & Computing" items={["Galaxy S24 Ultra", "Galaxy Z Fold6", "Galaxy Z Flip6", "Galaxy Tab S10 Series", "Galaxy Watch Ultra"]} desc="Get up to $750 trade-in  or up to $275 off without.  Plus, double the storage on us." btnone="Lear More" btntwo="Buy Now" model="Galaxy S24 Ultra" color="" btncolor="" btnbg=""/>
    <Props clasN="friday" title="" items={[]} desc="You can grab an amazing deal now" btnone="" btntwo="Shop now" model="Black Fridday is coming" color="#fff" btncolor="#fff" btnbg="#111"/>
    <Props clasN="TV" title="TV & Audio" items={["Neo QLED 8K QN900D", "OLED S95D 77 ''", "Q990D sounbar"]} desc="Save $2,200 on an 8'' Class Samsung Neo QLED 8K QN900D and get our best picture in a huge range of contrast and color with Neo Quantum HDR 8K Pro." btnone="" btntwo="Buy Now" model=" Let’s make this super clear" color="#fff" btncolor="#fff" btnbg="#111"/>
    <Props clasN="home" title="Home Appliances" items={["Early Black Friday", "Refrigerators", "Beskope Laundry", "Cooking Power Pair"]} desc="Make the holidays brighter with early Black Friday deals on Bespoke appliances and save $1,700." btnone="" btntwo="Shop Now" model="Get the best deals of the season" color="#111" btncolor="" btnbg=""/>
    <Props clasN="sustainability" title="Sustainability" items={["Certificed Re-Newed", "Trade-in Recycling Program"]} desc="Lower your environmental impact. Trade-In & Trade-Up  to save $250 or more on a Certified Re-Newed device." btnone="" btntwo="Learn more" model="Save $250" color="" btncolor="" btnbg=""/>
    <Footer/>
    </>
  )
}

export default App
