"use client";

//handling client side error by using error.js file
//this will not handle error in dev mode either

export default function GlobalError() {
    return (
        //root layout is biggest in the hierarchy it requires proper html
        <html lang="en" className="dark">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                <div>
                    <p>Something went wrong in Root</p>
                    <button
                        onClick={() => {
                            window.location.reload()
                        }}
                    >
                        Try Again
                    </button>
                </div>
            </body>
        </html>

    );
}