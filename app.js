// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[];
function agregarAmigo(){    
    var cadenita="";
    cadenita=document.getElementById('amigo').value;
    document.getElementById('amigo').value='';
    amigos.push();
    if(cadenita==''){
        alert('Por favor, inserte un nombre.');      
    }else{        
        amigos.push(cadenita);
        document.getElementById('amigo').value='';
        listaMostrar();
        
    }
}

function listaMostrar(){
    let lista="";
    document.getElementById('listaAmigos').value;    
    for(var i=0;i<amigos.length;i++){
            lista+=`<li>${amigos[i]}</li>`;                  
    }   
    lista.innerHTML="";
    document.getElementById("listaAmigos").innerHTML=lista;
    return true;
}

function sortearAmigo(){
    document.getElementById("listaAmigos").innerHTML="";
    let indice="";
    let palabra="";
    if(amigos.length>0){
        indice=Math.floor(Math.random() * amigos.length);
        palabra=`<li>${amigos[indice]}</li>`;          
        document.getElementById("resultado").innerHTML=palabra;        
    }else{
        alert('no hay amigos en la lista');
    }
}
