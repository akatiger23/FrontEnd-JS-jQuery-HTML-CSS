class animal{
    constructor(speic,name){  //this method
        //property
        
        this.speic="Unknowen";
        this.name=name;
        this.heigh=43
        this.sound="wooof";
    }
    speak(){
        console.log("WOOF");
    }
    
}

class Doge extends animal{
    
    speak(){
        super.speak();
        console.log("new soun:wwwwo");
    }
    set(speic){
        this.speic=speic;
    }
    setname(name){
        this.name=name;

    }

}


//var dog=new animal('dog','Joey');

var dogee = new Doge('Dog','Chandler');
dogee.set('Kurd');
dogee.setname('Monika');
dogee.speak();
