"use client"

import { useRouter } from "next/navigation"
import { startTransition } from "react"

//it will handle all the error"
//it cann only be render as client component

//error handling prevents from breaking or crashing the whole website
//it only shows error on the particular route that causes the error not crashes the whole website.

//we should not show the server error on the client side
export default function Error({ error, reset }) {
    // console.dir(error)
    // console.log(error.digest)
    // console.log(error.message)

    const router = useRouter()
    return (
        <>
            <h2>Something went wrong</h2>
            {/* this is how we can recover from error without reloading the whole page */}
            <button
                onClick={() => {
                    startTransition(() => {
                        router.refresh()
                        reset()
                    })
                }}

            >Try Again</button>
        </>
    )
}
