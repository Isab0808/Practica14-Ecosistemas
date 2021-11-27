class Tareas{
    constructor(tarea){
        this.tarea=tarea
    }
    rendertodo=()=>{
        let contenedorfecha=document.createElement("p")
        let d= new Date()
        let date=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
        contenedorfecha.innerHTML=date
        let component=document.createElement("div")
        component.className="contenedor"
        let botonsubir=document.createElement("button")
        botonsubir.innerHTML="subir"
        let botonborrar=document.createElement("button")  
        botonborrar.innerHTML="borrar"
        let textotarea=document.createElement("p")
        textotarea.innerHTML=this.tarea.textotarea
        component.appendChild(contenedorfecha)
        component.appendChild(textotarea)
        component.appendChild(botonsubir)
        component.appendChild(botonborrar)
        botonsubir.addEventListener("click",()=>{
            let database=firebase.database()
            database.ref("Tareas/todo/"+this.tarea.id).set(null)
            database.ref("Tareas/doing/"+this.tarea.id).set(this.tarea)
        })
        botonborrar.addEventListener("click",()=>{
            let database= firebase.database()
            database.ref("Tareas/todo/"+this.tarea.id).set(null)

        })
        return component
      

    }
    renderdoing=()=>{
        let contenedorfecha=document.createElement("p")
        let d= new Date()
        let date=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
        contenedorfecha.innerHTML=date

        let component=document.createElement("div")
        component.className="contenedor"
        let botonsubir=document.createElement("button")
        botonsubir.innerHTML="subir"
        let botonbajar=document.createElement("button") 
        botonbajar.innerHTML="bajar"  
        let botonborrar=document.createElement("button")  
        botonborrar.innerHTML="borrar"
        let textotarea=document.createElement("p")
        textotarea.innerHTML=this.tarea.textotarea
        component.appendChild(contenedorfecha)
        component.appendChild(textotarea)
        component.appendChild(botonsubir)
        component.appendChild(botonbajar)
        component.appendChild(botonborrar)
        botonsubir.addEventListener("click",()=>{
            let database=firebase.database()
            database.ref("Tareas/doing/"+this.tarea.id).set(null)
            database.ref("Tareas/done/"+this.tarea.id).set(this.tarea)
        })
        botonbajar.addEventListener("click",()=>{
            database.ref("Tareas/doing/"+this.tarea.id).set(null)
            database.ref("Tareas/todo/"+this.tarea.id).set(this.tarea) 
        })
        botonborrar.addEventListener("click",()=>{
            let database= firebase.database()
            database.ref("Tareas/doing/"+this.tarea.id).set(null)

        })
        return component

    }
    renderdone=()=>{
        let contenedorfecha=document.createElement("p")
        let d= new Date()
        let date=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
        contenedorfecha.innerHTML=date

        let component=document.createElement("div")
        component.className="contenedor"
        let botonsubir=document.createElement("button")
        botonsubir.innerHTML="subir"
        let botonbajar=document.createElement("button") 
        botonbajar.innerHTML="bajar"  
        let botonborrar=document.createElement("button")  
        botonborrar.innerHTML="borrar"
        let textotarea=document.createElement("p")
        textotarea.innerHTML=this.tarea.textotarea
        component.appendChild(contenedorfecha)
        component.appendChild(textotarea)
        component.appendChild(botonsubir)
        component.appendChild(botonbajar)
        component.appendChild(botonborrar)
        botonbajar.addEventListener("click",()=>{
            database.ref("Tareas/done/"+this.tarea.id).set(null)
            database.ref("Tareas/doing/"+this.tarea.id).set(this.tarea) 
        })
        botonborrar.addEventListener("click",()=>{
            let database= firebase.database()
            database.ref("Tareas/done/"+this.tarea.id).set(null)

        })

        return component
    }
}