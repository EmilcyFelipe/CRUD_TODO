var app = new function(){
    this.tasks = [];
    this.el = document.getElementById('tasks-list')
    
    this.FetchAll = ()=>{
    
        var data ="";
        for(i=0; i<this.tasks.length; i++){
            data+='<tr>';
            data+='<td>'+(i+1)+' . '+this.tasks[i]+'</td>';
            data+=`<td><button onclick="app.Edit(${i})" class="btn-edit">Edit</button></td>`;
            data+=`<td><button class="btn-del" onclick="app.Delete(${i})">Delete</button></td>`
            data += `</tr>`
        }
        return this.el.innerHTML = data;
    }


    this.Add = function(){
        el = document.getElementById('task');
        var task = el.value;
        if(task){
            this.tasks.push(task);
            el.value = '';
            this.FetchAll();
            
        }
    }
    this.Edit = function(item){
        document.querySelector(".editing").style.display="block";
        document.getElementById("edit-box").value = this.tasks[item];
        document.getElementById("save-edit").onsubmit =()=>{
            this.tasks[item]=document.getElementById("edit-box").value;
            this.FetchAll();
            
        }


    }
    this.Delete = function(item){
        this.tasks.splice(item,1);
        this.FetchAll();
       
    }

    this.Close = function(){
        document.querySelector(".editing").style.display="none";
    }

}

