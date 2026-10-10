"use client"

import { useRouter } from "next/navigation"
import { startTransition } from "react"

//by keeping the error.js file in the parent route can handle errors for both parent and child component but it will override the layout page i.e inside the children directory

//keeping in the child dir it will not replace the code of layout page because the layout comes up in the hierarchy
export default function Error({ error, reset }) {
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
