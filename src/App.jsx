import { Categories } from "./components/Categories"
import Delivery from "./components/Delivery"
import Featured from "./components/Featured"
import { Footer } from "./components/Footer"
import Meal from "./components/Meal"
// import Newsletter from "./components/Newsletter"
import TopNav from "./components/TopNav"
import { TopPicks } from "./components/TopPicks"


function App() {


  return (
    <>
      <TopNav />
      <Featured/>
      <Delivery/>
      <TopPicks/>
      <Meal/>
      <Categories/>
      {/* <Newsletter/> */}
      <Footer />
    </>
  )
}

export default App
