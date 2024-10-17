import NavBar from "./components/NavBar"
import Button from "./components/subComponents/Button"
import News from "./components/News"
import Searchbar from "./components/Searchbar"

export default function App() {
  return (
    <div>
      <NavBar />
      <Button ButtonText="Hi oi" ButtonHeight="" ButtonWidth="10"
      />
      <News/>
      <Searchbar/>
    </div>
  )
}