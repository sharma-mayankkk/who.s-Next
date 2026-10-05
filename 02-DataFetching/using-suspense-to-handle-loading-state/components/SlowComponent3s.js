export default async function SlowComponent3s() {

    //manually adding delay
    const res = await fetch('https://procodrr.vercel.app/?sleep=2000')
    const data = await res.json()

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}
