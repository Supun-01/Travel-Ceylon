import NavBar from "./components/NavBar"
import Button from "./components/subComponents/Button"

export default function App() {
  return (
    <div>
      <NavBar />
      <Button ButtonText="Click Me!" ButtonHeight=""
        ButtonWidth="10"
      />
    </div>
  )
}