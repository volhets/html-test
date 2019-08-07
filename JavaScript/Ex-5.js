function this1() 
        var vasya = { name:'Коля' }
        var petya = { name:'Володя' }
        sayName  = function() 
        alert("Я - "+ (this.name ? this.name : 'безіменний') )
        vasya.sayName = sayName
        petya.sayName = vasya.sayName
        petya.sayName() 
        vasya.sayName()
        sayName()
