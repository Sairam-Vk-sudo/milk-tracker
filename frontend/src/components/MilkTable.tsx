type Milkentry = {
  date: string;
  quantity: number;
  pricePerLitre: number;
  total: number;
  paid: boolean;
}

type Props = {
    entries: Milkentry[];
    onMarkPaid: (index: number) => void;
    onDelete: (index: number) => void;
}

function MilkTable({entries, onMarkPaid, onDelete}: Props){
    return(
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
          <tr key={index}
          style={{
            backgroundColor: entry.paid ? "#065f1aff" : "#8e0914ff"
          }}>
            <td>{entry.date}</td>
            <td>{entry.quantity}</td>
            <td>{entry.pricePerLitre}</td>
            <td>{entry.total}</td>
            <td>{entry.paid ? "paid" : "unpaid"}</td>
            <td>
                <button onClick={() => onMarkPaid(index)}
                disabled = {entry.paid}
                style={{
                  backgroundColor: entry.paid ? "#ccc" : "#007bff",
                  color : entry.paid ? "#666" : "#fff",
                  cursor : entry.paid ? "not-allowed" : "pointer",
                  border : "none",
                  padding : "6px 12px",
                  borderRadius : "4px",
                  marginRight: "8px"
                }}>
                Mark Paid
                </button>
                <button
    onClick={() => onDelete(index)}
    style={{
      backgroundColor: "#dc3545",
      color: "#fff",
      cursor: "pointer",
      border: "none",
      padding: "6px 12px",
      borderRadius: "4px",
    }}
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