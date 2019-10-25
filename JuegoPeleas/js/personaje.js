//FUNCION QUE CREA UNA CLASE PERSONAJE CON PROPIEDADES DE LUCHA, EL CUAL SE VA A USAR PARA INSTANCIAR 9 PERSONAJES 
//DIFERENTES CON VALORES DE ATRIBUTO DIFERENTE.

class personaje{
    constructor(name, damage, defense, armor){
        this.nombre = name;
        this.vida = 100;
        this.danho = damage;
        this.defensa = defense;
        this.armadura = armor;
    }
    atacar(enemigo){
        console.log("daño es: "+this.danho);
        console.log("armadura enemigos es: "+enemigo.armadura);
        console.log("defensa enemigo es: "+enemigo.defensa);
        let pupa = this.danho-(enemigo.armadura + enemigo.defensa);
        if (pupa < 0){
            pupa = 0;
        }
        return enemigo.vida-pupa
    }
}

