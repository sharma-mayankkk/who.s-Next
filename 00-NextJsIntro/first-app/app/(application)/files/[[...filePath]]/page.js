//catch all routes : []
//optional catch all routes : [[]]

export const metadata = {
  title: {
    absolute: 'My Files' //override the default title
  }
}

export default async function file({ params }) {
  const {filePath} = await params
  return (
    <h1>File /{filePath?.join("/")}</h1>
  )
}
