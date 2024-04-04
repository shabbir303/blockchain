
// import './App.css'
import {Footer, Loader, Navbar, Services, Transction, Welcome} from "./Components";
const App=()=> {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen">
       <div className="gradient-bg-welcome">
       <Navbar/>
        <Welcome/>
       </div>
       <div>
        <Services/>
        <Transction/>
        <Footer/>
       </div>
      </div>
    </>
  )
}

export default App
