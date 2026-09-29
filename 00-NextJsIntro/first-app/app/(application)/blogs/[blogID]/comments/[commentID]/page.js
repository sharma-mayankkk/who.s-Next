//dynamic nested routing
export default async function Comment({ params }) {
    const paramsObj = await params;
    const { blogID, commentID } = paramsObj
    console.log(paramsObj)
    return (
        <div>Comment no. <b>{commentID}</b> on page <i>{blogID}</i></div>
    )
}
