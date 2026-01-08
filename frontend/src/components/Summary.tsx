type Props = {
    unpaidTotal: number;
}

function Summary({unpaidTotal}: Props){
    return <h3>Total Unpaid Amount: ₹{unpaidTotal}</h3>
}

export default Summary;