import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ItemList from "./components/ItemList"
import Sidebar from "./components/Sidebar"


const sortedItems = [
  {
    label: "Sort by default",
    // value: "default",
  },
  {
    label: "Sort by packed",
    // value: "packed",
  },
  {
    label: "Sort by unpacked",
    // value: "unpacked",
  },
];

function App() {
  const [items, setItems] = useState(sortedItems)
  

  return (
    <>
    <h1>Trekbag</h1>
    <main>
      <Header/>
      <ItemList items = {items}/>
      <Sidebar/>

    </main>
    <Footer/>
    </>
  )
}

export default App
