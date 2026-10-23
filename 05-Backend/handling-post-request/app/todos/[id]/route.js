import todosData from "../../../todos.json";

export async function GET(_,{params}) {
    const {id} = await params
    const todo = todosData.find((todo)=> id === todo.id)
    
    if(!todo){
        return Response.json({error: "Todo is not todoing"},{
            status: 404
        })
    }
    return Response.json(todo)
}