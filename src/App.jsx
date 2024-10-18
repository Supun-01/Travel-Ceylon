import NavBar from "./components/NavBar"
import Button from "./components/subComponents/Button"
import CardContainer from "./components/CardComponents/CardContainer";


export default function App() {
  return (
    <div>
      <NavBar />
      <div className="mx-8 lg:mx-20">
        <CardContainer />
      </div>
    </div>
  )
}