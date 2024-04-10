import AddCheckboxOptions from "./Components/AddCheckboxOptions"
import Modal from "./Components/Modal"
import { useRef, useState } from "react"

function App() {

  const modal = useRef()
  const [attribute, setAttribute] = useState({
    option: []
  })

  // attribute.option.push("Arham")
  console.log(attribute.option);

  const handleSave = () => {

  }

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button onClick={() => {modal.current.open()}} className="mt-4 px-4 py-2 bg-blue-500 rounded-lg">Open Modal</button>
      <Modal ref={modal} btnCaption="Save" handleSave={handleSave} >
        <h1>Modal</h1>
        <AddCheckboxOptions option = {attribute.option} setAttribute={setAttribute} />
      </Modal>
    </div>
  )
}

export default App
