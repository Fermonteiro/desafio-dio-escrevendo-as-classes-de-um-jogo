class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
  
    atacar() {
        let atack;
  
        switch (this.tipo) {
            case 'mago':
                atack = 'magia';
                break;
            case 'guerreiro':
                atack = 'espada';
                break;
            case 'monge':
                atack = 'artes marciais';
                break;
            case 'ninja':
                atack = 'shuriken';
                break;
            default:
                atack = 'um ataque indefinido';
        }
  
        console.log(`O ${this.tipo} atacou usando ${atack}`);
    }
}
  
const hero1 = new Hero('Fernando', 13, 'monge');
const hero2 = new Hero('Gutemberg', 27, 'ninja');
  
hero1.atacar();
hero2.atacar();