"use client"
//it will handle all the error"
//it cann only be render as client component

//error handling prevents from breaking or crashing the whole website
//it only shows error on the particular route that causes the error not crashes the whole website.

//we should not show the server error on the client side
export default function Error({ error }) {
    console.dir(error)
    console.log(error.digest)
    console.log(error.message)
    return (
        <>
            <h2>Something went wrong</h2>
        </>
    )
}
