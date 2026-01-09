import './MilkTable.css';

type Milkentry = {
  id: number,
  date: string;
  quantity: number;
  pricePerLitre: number;
  total: number;
  paid: boolean;
}

type Props = {
    entries: Milkentry[];
    onMarkPaid: (id: number) => void;
    onDelete: (id: number) => void;
}

function MilkTable({entries, onMarkPaid, onDelete}: Props){
    return(
      <table className='milk-table'>
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
        {entries.map((entry) => (
          <tr className={entry.paid ? 'row-paid' : 'row-unpaid'}
          >
            <td>{entry.date}</td>
            <td>{entry.quantity}</td>
            <td>{entry.pricePerLitre}</td>
            <td>{entry.total}</td>
            <td>{entry.paid ? "paid" : "unpaid"}</td>
            <td>
                <button onClick={() => onMarkPaid(entry.id)}
                disabled = {entry.paid}
                className={`action-btn ${entry.paid ? 'btn-disabled' : 'btn-paid'}`}
                >
                Mark Paid
                </button>
                <button
    onClick={() => onDelete(entry.id)}
    className='action-btn delete-btn'
  >
    Delete
  </button>
              
            </td>
          </tr>
        ))}

      </tbody>
    </table>
    )
}

export default MilkTable