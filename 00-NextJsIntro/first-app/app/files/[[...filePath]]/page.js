//catch all routes : []
//optional catch all routes : [[]]

export default async function file({ params }) {
  const {filePath} = await params
  return (
    <h1>File /{filePath?.join("/")}</h1>
  )
}
