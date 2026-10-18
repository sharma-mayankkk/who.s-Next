//this file runs on server, and it can't work alongside with the page.js
import { writeFile } from 'fs/promises'

await writeFile('hello.txt', 'I am Batman') 

console.log("File written")