import { v4 as uuidv4 } from "uuid"

const initialCode = `console.log("hello world");`

const initialFile = {
    id: uuidv4(),
    name: "index.js",
    content: initialCode,
}

export default initialFile
