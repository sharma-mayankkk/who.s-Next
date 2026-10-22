import todosData from "../../todos.json";

export function GET(request) {
    console.log(request)
    return Response.json(todosData)
}