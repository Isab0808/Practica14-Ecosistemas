const database=firebase.database()
const inputtarea=document.getElementById("inputtarea")
const buttontarea=document.getElementById("botontarea")
const Contenedortodo=document.getElementById("Contenedortodo")
const Contenedordoing=document.getElementById("Contenedordoing")
const Contenedordone=document.getElementById("Contenedordone")




database.ref("Tareas/todo").on("value",function(data){
    Contenedortodo.innerHTML=""
    data.forEach(t=>{
        let tarea=t.val()
        let todo=new Tareas(tarea)
        Contenedortodo.appendChild(todo.rendertodo())

    })
})

database.ref("Tareas/doing").on("value",function(data){
    Contenedordoing.innerHTML=""
    data.forEach(t=>{
        let tarea=t.val()
        let doing=new Tareas(tarea)
        Contenedordoing.appendChild(doing.renderdoing())

    })
})

database.ref("Tareas/done").on("value",function(data){
    Contenedordone.innerHTML=""
    data.forEach(t=>{
        let tarea=t.val()
        let done=new Tareas(tarea)
        Contenedordone.appendChild(done.renderdone())

    })
})

buttontarea.addEventListener("click",()=>{

    let referencia=database.ref("Tareas/todo").push()
    let tareas={
        id:referencia.key,
        textotarea:inputtarea.value
    }

    referencia.set(tareas)

})

