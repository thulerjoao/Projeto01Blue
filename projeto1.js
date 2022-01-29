var prompt = require('prompt-sync')();

let yoshi
let entrada
let rapunzel
let arma
let luta
let energia = 100
let acertos = 0

console.log(`Bem vindo ao Mário World 2.0!!!\n`);
console.log(`Mário saiu para comprar pão e Bowser aproveitou o momento para sequestrar a Princesa mais uma vez...
Precisamos da sua ajuda para encarnar o menino Mário e salvar a Princesa do castelo!\n`);

yoshi = prompt(`Para isso, Yoshi pode te ajudar a encarar os desafios pela frente. Deseja leva-lo com você? `).toUpperCase();
    if(yoshi=="SIM"||yoshi=="S"||yoshi==1){
        console.log(`Ótima escolha! Vocês tiveram um longo caminho pela floresta de cogumelos e Yoshi foi o diferencial para chegar até o castelo com energia em 100%!\n`);
        acertos++;
    }else{
        console.log(`Para chegar ao castelo você teve que passar sozinho pela floresta de cogumelos e lutar com inimigos. Restaram 80% de energia.\n`);
        energia -=25;    
    }  
console.log(`Agora que chegamos ao castelo, precisamos achar um jeito de entrar.`);
console.log(`Podemos usar a força bruta e encarar os monstros da entrada ou agir com inteligencia e entrar pelos dutos subterrâneos.\n`);

entrada = prompt(`Pretende entrar pelos dutos subterrâneos de forma que ninguém o veja? `).toUpperCase();
    if(entrada=="SIM"||entrada=="S"||entrada==1){
        console.log(`Você fez a melhor escolha e enconseguiu entrar no castelo sem sofrer nenhum dano. Sua energia esta em ${energia}%.\n`);
        acertos++;
    }else{
        energia -=25;
        console.log(`Você não fez a escolha mais inteligente. Muitas lutas foram necessárias e lhe restam agora ${energia}% de energia.\n`);
    }
console.log(`Uma vez dentro do castelo, é hora de chegar ao topo onde a princesa esta aprisionada.`);
console.log(`Como Bowser não é bobo nem nada, ele lotou as escadas com sabão para inpedir que Mário suba.`);
console.log(`No entando, o mundo da fantasia é menor do que imaginamos... e para sua sorte, o castelo é o mesmo onde Rapunzel está aprisionada!\n`);

rapunzel=prompt(`Deseja mandar Rapunzel jogar as tranças e chegar em alto estilo para salvar a Princesa? `).toUpperCase();
    if(rapunzel=="SIM"||rapunzel=="S"||rapunzel==1){
        console.log(`Bela maneira de se chegar ao topo! Estamos mais perto do que nunca do nosso objetivo!\n`);
        acertos++;
    }else{
        energia -=20;
        console.log(`Valeu as várias tentativas para subir as escadas ensaboadas...`);
        console.log(`mas infelizmente em uma delas Mário bateu o cóccix em uma quina e acabou ficando com ${energia}% de energia.\n`);
    }
console.log(`Agora no topo, já é possivel ouvir os gritos de socorro da Princesa.`);
console.log(`Mas antes de qualquer coisa, é precisso arrumar uma arma para enfrentar o Bowser.`);
console.log(`E é aí, que você se depara com uma espada de um guerreiro que foi anteriormente derrotado e um estilingue pelo caminho.`);
console.log(`No entanto, você só pode levar uma arma com voce...\n`);

arma = prompt(`A espada é a melhor escolha de arma para a luta que esta por vir? `).toUpperCase();
    if(arma=="SIM"||arma=="S"||arma==1){
        console.log(`Não temos dúvida que uma espada é bem mais forte que um estilingue. Você esta melhor preparado para luta!\n`);
        acertos++;
    }else{
        console.log(`Você tem apenas ${energia}% de energia... com uma arma dessas vai precisar de sorte para derrotar o Bowser.\n`);
    }
console.log(`A medida em que avança, os gritos da princesa ficam cada vez mais próximos.`);
console.log(`E então, você se depara com Bowser que esta te esperando para a aguardada luta.`);
console.log(`Atrás dele, esta a princesa aprisionada em uma cela. `);
console.log(`Agora, você precisa decidir entre enfrentar o Bowser com todas as suas forças ou pedir educadamente para que ele solte a princesa...\n`);

luta = prompt(`Lembrando que Bowser não é um cara muito amigável, lutar seria a melhor opção? `).toUpperCase();
    if(luta=="SIM"||luta=="S"||luta==1){
        acertos++
    }else{
        energia -=30
        console.log(`Tentar ganha-lo na conversa não foi a melhor abordagem e Bowser lhe deu um golpe que te deixou com ${energia}% de energia.\n `);
    }
if(acertos == 5){
    console.log(`Parabéns!!! Voce derrotou o Bowser e salvou a princesa! \n É hora de voltar triunfante para casa!`);
}else if(acertos == 4){
    console.log(`A luta com Bowse foi apertada.`);
    console.log(`Por sorte, de dentro da cela a princesa tacou uma pedra que acertou o Bowser bem no meio da testa!`);
    console.log(`Parabéns! Voce conquistou seus objetivos!`)
}else if(acertos == 3){
    console.log(`Que pena, sua energia de ${energia}% não foi o suficiente para derrotar o bowser e o que restou foi fugir do castelo.\nPense em outra forma de salvar a princesa.`);
}else if(acertos == 1 || acertos ==2){
    console.log(`Que pena, você falhou. Sua energia estava muito baixa! Apenas ${energia}%, e Bowser acabou fugindo com a princesa para um outro lugar desconhecido.`);
}else{
    console.log(`Você conseguiu falhar em todas as etapas!!! Bowser te derrotou com a maior facilidade e a princesa nunca mais será vista.`);
}