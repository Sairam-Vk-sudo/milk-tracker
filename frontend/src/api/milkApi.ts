const BASE_URL = "http://localhost:8080/entries"

export type MilkEntry = {
    id: number,
    date: string,
    quantity: number,
    pricePerLitre: number,
    total: number,
    paid: boolean
}

export async function fetchEntries(): Promise<MilkEntry[]>{
    const res = await fetch(BASE_URL)
    return res.json();
}

export async function addEntry(entry: {
    date: string,
    quantity: number,
    pricePerLitre: number
}){
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(entry)
    });
    return res.json();
}

export async function markPaid(id: number){
    const res = await fetch(`${BASE_URL}/${id}/pay`, {
        method: 'PUT'
    });
    return res.json();
}

export async function deleteEntry(id: number){
    await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    })
}