import { useState } from "react";
import './MilkForm.css'

type Milkentry = {
  date: string;
  quantity: number;
  pricePerLitre: number;
  total: number;
  paid: boolean;
}

type Props = {
    onAddEntry: (entry: Milkentry) => void;
}

function MilkForm({onAddEntry}: Props){
    const [date, setDate] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const total = price*quantity;

        onAddEntry({
            date,
            quantity,
            pricePerLitre: price,
            total,
            paid: false
        });

        setDate("");
        setPrice(0);
        setQuantity(0);
    };
    return (
    <form className='milk-form' onSubmit={handleSubmit}>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
        <input type="number" placeholder="Quantity (litres)" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required/>
        <input type="number" placeholder="Price Per Litre" value={price} onChange={(e) => setPrice(Number(e.target.value))} required/>
        <button type="submit"> Add Entry </button>
    </form>
)
};

export default MilkForm;

