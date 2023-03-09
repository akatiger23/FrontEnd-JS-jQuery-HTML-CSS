try{
    var name=prompt("whats you name?");
    if(name!="secret"){
        throw "unknow"
    }else{
        alert("You are allowed in here");

    }

}catch(error){
    if(error=="unknow"){
        //do something
        document.querySelector('#test').innerHTML="sorry you are not allowad here"
    }else{
    document.querySelector('#test').innerHTML=error.message;
    }

} finally{
    document.querySelector('#test').innerHTML+="<br/>try/catch/finally was run";

}