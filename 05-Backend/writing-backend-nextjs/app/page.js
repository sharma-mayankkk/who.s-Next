import Image from "next/image";
import http from 'http'
//we can create our server in next js 
//we can also do the same in route.js file
const server = http.createServer((req, res) => {
  console.log(req.url)
  res.end('Helowww !!new server started')
})

server.listen(4000,()=>{
  console.log("server started on port 4000")
})
export default function Home() {

  return (
    <>
      <h1>hawm pej</h1>
    </>
  )
}
