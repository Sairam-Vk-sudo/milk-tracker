import { useState } from "react";
import './App.css'

type Milkentry = {
  date: string;
  quantity: number;
  pricePerLitre: number;
  total: number;
  paid: boolean;
}

function App() {
  const [entries, setEntries] = useState<Milkentry[]>([]);
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const unpaidEntries = entries
  .filter((entry) => !entry.paid)
  .reduce((sum, entry) => sum + entry.total, 0)

  const markAsPaid = (index: number) => {
    const updatedEntries = entries.map((entry, i) => 
    i === index ? {...entry, paid:true} : entry
    );
    setEntries(updatedEntries);
  }




  return(
    <div style={{padding: "20px"}}>
    <h1>Milk Transaction Tracker</h1>
    <form
    onSubmit={(e) => {
      e.preventDefault();

      const total = quantity * price;

      const newentry: Milkentry = {
        date,
        quantity,
        pricePerLitre: price,
        total,
        paid : false
      }
      
      setEntries([...entries, newentry])

      setDate("");
      setQuantity(0);
      setPrice(0);
    }}>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
      <input type="number" placeholder="Quantity (litres)" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required/>
      <input type="number" placeholder="Price Per Litre" value={price} onChange={(e) => setPrice(Number(e.target.value))} required/>
      <button type="submit"> Add Entry </button>
    </form>
    <table border={1} cellPadding={10} style={{ marginTop: "20px" }}>
      <thead>
      <tr>
        <th>Date</th>
        <th>Quantity</th>
        <th>Price Per Litre</th>
        <th>Total</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => (
          <tr key={index}>
            <td>{entry.date}</td>
            <td>{entry.quantity}</td>
            <td>{entry.pricePerLitre}</td>
            <td>{entry.total}</td>
            <td>{entry.paid ? "paid" : "unpaid"}</td>
            <td>
              {!entry.paid && (
                <button onClick={() => markAsPaid(index)}>
                Mark Paid
                </button>
              )}
            </td>
          </tr>
        ))}

      </tbody>
    </table>
    <h3>Total Unpaid Amount: ₹{unpaidEntries}
    </h3>
    </div>
  )
}

export default App
