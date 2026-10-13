"use client";
import "./globals.css";
//handling client side error by using error.js file

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {
    const router = useRouter();
    return (
        <div>
            <p>Something went wrong in home page</p>
            <button
                onClick={() => {
                    reset()
                }}
            >
                Try Again
            </button>
        </div>
    );
}
