export default async function Views() {
    await new Promise((resolve) => setTimeout(resolve, 3000)); //we made a delay of 3 sec to get the request 
    return (
        <div>100k Views</div>
    )
}
