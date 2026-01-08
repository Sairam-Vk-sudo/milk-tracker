import { useEffect, useState } from "react";
import MilkForm from "./components/MilkForm";
import MilkTable from "./components/MilkTable";
import Summary from "./components/Summary";
import { fetchEntries, addEntry, markPaid, deleteEntry} from "./api/milkApi";
import type { MilkEntry } from "./api/milkApi";
import './App.css'


function App() {
  const [entries, setEntries] = useState<MilkEntry[]>([]);

  useEffect(()=> {
    fetchEntries().then(setEntries);
  }, [])


  const unpaidTotal = entries
  .filter((e) => !e.paid)
  .reduce((sum, e) => sum + e.total, 0);

  

  // useEffect(() => {
  //   const savedEntries = localStorage.getItem("milkentries")

  //   if(savedEntries){
  //     setEntries(JSON.parse(savedEntries));
  //   }
  // }, []);

  const handleAddEntry = async(entry: {
    date: string,
    quantity: number,
    pricePerLitre: number
  }) => {
    const saved = await addEntry(entry)
    setEntries((prev) => [...prev, saved]);
  };

  const handleMarkedPaid = async (id:number) => {
    const updated = await markPaid(id);
    setEntries((prev) => 
      prev.map((e) => (e.id === id ? updated : e))
    );
  };

  const handleDelete = async (id: number) => {
    await deleteEntry(id);
    setEntries((prev) => prev.filter((e) => e.id !== id))
  }




  return(
    <div style={{padding: "20px"}}>
      <h1>Milk Transaction System</h1>
      <Summary unpaidTotal = {unpaidTotal}></Summary>
      <MilkForm onAddEntry={handleAddEntry}></MilkForm>
      <MilkTable entries={entries} onMarkPaid={handleMarkedPaid} onDelete={handleDelete}></MilkTable>
    </div>
  )
}

export default App
