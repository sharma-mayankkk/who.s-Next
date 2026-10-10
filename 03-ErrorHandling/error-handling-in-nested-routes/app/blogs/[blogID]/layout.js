export default function Layout({ children }) {
    //if layout causes the error the error.js file will not handle it bcs layout comes first in the hierarchy
    return (
        <div>
            <p>This is a Blog ID page</p>
            {children}
        </div>
    )
}
