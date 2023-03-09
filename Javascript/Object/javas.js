var person={
    name:"Akkad ",
    age:33,
    tech:['DevOps','Tesla'],
    changname:function(new_name){
        this.name=new_name;
        return this;
    }
};
person.changname('Akkad Alahmad')
person.childern=6
document.querySelector('#test').innerHTML=person.name+'is '+person.age+' years old '+'and has '+person.tech.join(",");
for(key in person){
    console.log(key,person[key].constructor);
}