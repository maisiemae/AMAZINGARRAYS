var wrapperEle = document.querySelector(".wrapper");

var array = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    }
]



for(var i=0; i<array.length; i++){
    // ele is parent element
 //render characters we want to show
    if(array[i].damage >=2 && array[i].health >=10 && array[i].warrior){
        var ele=document.createElement("div");
        var nameEle= document.createElement("h1");
        var damageEle=document.createElement("h2");
        var warriorEle= document.createElement("h3");
        var healthEle=document.createElement("h4");
        nameEle.innerHTML="Name: "+array[i].name;
        damageEle.innerHTML="Damage: "+array[i].damage;
        warriorEle.innerHTML="Warrior: "+array[i].warrior;
        healthEle.innerHTML="Health: "+array[i].health;

        ele.appendChild(nameEle);
        ele.appendChild(damageEle);
        ele.appendChild(warriorEle);
        ele.appendChild(healthEle);

        wrapperEle.appendChild(ele);

//if statement here to show the elements we want to appear
    if(array[i].name.includes("a")){
        nameEle.style.color='red';
        // must use .include
    }
    }


}

//append is the execution

