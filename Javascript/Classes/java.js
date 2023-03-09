class animal{
    constructor(speic,name){  //this method
        //property
        
        this.speic=speic.toLowerCase();
        this.name=name;
        this.heigh=43
    }
    speak(){
        console.log("WOOF");
    }
    rename(name){
        this.name = name;
    }

    getNmae(){
       return this.name;
    }
    heigtocm(){
        return this.cms= this.heigh*2.5;
    }
}


var dog=new animal('dog','Joey');
dog.speak();
dog.rename('ROOS');
console.log(dog);

var cms=dog.heigtocm();
console.log(cms);
console.log(dog.cms);