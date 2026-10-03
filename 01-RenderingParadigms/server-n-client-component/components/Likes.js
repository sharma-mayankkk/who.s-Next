"use client"   //to make the component execute on client side

import { useState } from "react"

export default function Likes() {
    // console.log(window) //window is a client component but these components are server component that means can't be accesed on client side and will throw error
    console.log('Like component')

    // to access it without any error need to put a check
    // if (typeof window !== "undefined") {
    //     console.log(window)
    // }

    const [likesCount, setLikeCount] = useState(0);

    return (
        <div onClick={() => { setLikeCount((prev) => prev + 1) }}>
            {likesCount} Likes
        </div>
    )
}
