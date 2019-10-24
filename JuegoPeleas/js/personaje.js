//FUNCION QUE CREA UNA CLASE PERSONAJE CON PROPIEDADES DE LUCHA, EL CUAL SE VA A USAR PARA INSTANCIAR 9 PERSONAJES 
//DIFERENTES CON VALORES DE ATRIBUTO DIFERENTE.

class personaje{
    constructor(damage, defense, armor){
        this.vida = 100;
        this.daño = damage;
        this.defensa = defense;
        this.armadura = armor;
    }
    atacar(enemigo){
        daño = this.daño-(enemigo.armadura + enemigo.defensa);
        if (daño < 0){
            daño = 0;
        }
        return enemigo.vida-daño;
    }
}

let Ken = new personaje(15 ,7 ,3);      //KEN
let Blanca = new personaje(17 ,7 ,1);   //BLANCA
let Dhalsim = new personaje(9 ,7 ,5);   //DHALSIM
let Ryu = new personaje(15 ,7 ,3);      //RYU
let Sagat = new personaje(16 ,6 ,4);    //SAGAT
let Balrog = new personaje(18 ,8 ,2);   //BALROG
let ChunLi = new personaje(11 ,9 ,5);   //CHUNLI
let MrBison = new personaje(19 ,8 ,8);  //MRBISON
let Zangief = new personaje(20 ,5 ,1);  //ZANGIEF