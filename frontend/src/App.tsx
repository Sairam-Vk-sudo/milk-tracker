import { useEffect, useState } from "react";
import MilkForm from "./components/MilkForm";
import MilkTable from "./components/MilkTable";
import Summary from "./components/Summary";

import './App.css'

type Milkentry = {
  date: string;
  quantity: number;
  pricePerLitre: number;
  total: number;
  paid: boolean;
}

const STORAGE_KEY = "milkentries"

function App() {
  const [entries, setEntries] = useState<Milkentry[]>(() => {
    const saved = localStorage.getItem("milkentries")
    return saved ? JSON.parse(saved) : []
  });
  

  // useEffect(() => {
  //   const savedEntries = localStorage.getItem("milkentries")

  //   if(savedEntries){
  //     setEntries(JSON.parse(savedEntries));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const unpaidEntries = entries
  .filter((entry) => !entry.paid)
  .reduce((sum, entry) => sum + entry.total, 0)

  const addEntry = (entry: Milkentry) => {
    setEntries([...entries, entry])
  }

  const markAsPaid = (index: number) => {
    setEntries(
      entries.map((e,i) => (i === index ? {...e, paid: true } : e))
    ) 
  };

  const deleteEntry = (index : number) => {
    setEntries(entries.filter((_, i) => i !== index));
  };




  return(
    <div style={{padding: "20px"}}>
      <h1>Milk Transaction System</h1>
      <Summary unpaidTotal = {unpaidEntries}></Summary>
      <MilkForm onAddEntry={addEntry}></MilkForm>
      <MilkTable entries={entries} onMarkPaid={markAsPaid} onDelete={deleteEntry}></MilkTable>
    </div>
  )
}

export default App
