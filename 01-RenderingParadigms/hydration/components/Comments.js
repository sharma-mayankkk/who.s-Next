'use client'

// ❌ 'use client' does NOT mean this component only runs in the browser.
// Next.js can still render the initial HTML on the server first.
// The component then runs again in the browser during hydration.

export default function Comments() {

    // On the SERVER:
    // `window` does not exist, so typeof window === "undefined" → true.
    // Therefore, the server sends:
    // <div>5k comment server</div>
    //
    // In the BROWSER:
    // `window` exists, so typeof window === "undefined" → false.
    // Therefore, React expects:
    // <div>5k Comments client</div>
    //
    // ❌ Problem:
    // Server HTML and the browser's first render are different.
    // Server:  "5k comment server"
    // Client:  "5k Comments client"
    //
    // This difference causes a HYDRATION MISMATCH.

    // if (typeof window === "undefined") {
    //     return <div>5k comment server hey what is happening hellloooooooooooooooooooooooooooooooooooooooooo</div>
    // }

    return (
        <div>5k Comments client {Math.random()}</div>
    )
}