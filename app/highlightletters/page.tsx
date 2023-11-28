import style from "@/sass/highlightletters/HighLigthLetters.module.scss"
import HilightLetters from "@/components/highlightletters/HighLightLetters";
const Page = () => {
    return (<div className={style.main}>
    
    <p>
    <HilightLetters 
    text={`
    Não sou nada.
    Nunca serei nada.
    Não posso querer ser nada.
    À parte isso, tenho em mim todos os sonhos do mundo.
    `}
    />
    </p>
    <p>
    <HilightLetters
    text={`
    Janelas do meu quarto,
    Do meu quarto de um dos milhões do mundo que ninguém sabe quem é
    (E se soubessem quem é, o que saberiam?),
    Dais para o mistério de uma rua cruzada constantemente por gente,
    Para uma rua inacessível a todos os pensamentos,
    Real, impossivelmente real, certa, desconhecidamente certa,
    Com o mistério das coisas por baixo das pedras e dos seres,
    Com a morte a pôr humidade nas paredes e cabelos brancos nos homens,
    Com o Destino a conduzir a carroça de tudo pela estrada de nada.
    `}
    />
    </p>
    <p>
    <HilightLetters
    text={`
    Estou hoje vencido, como se soubesse a verdade.
    Estou hoje lúcido, como se estivesse para morrer,
    E não tivesse mais irmandade com as coisas
    Senão uma despedida, tornando-se esta casa e este lado da rua
    A fileira de carruagens de um comboio, e uma partida apitada
    De dentro da minha cabeça,
    E uma sacudidela dos meus nervos e um ranger de ossos na ida.`}
    />
    </p>
    <p>
    <HilightLetters
    text={`
    Estou hoje perplexo como quem pensou e achou e esqueceu.
    Estou hoje dividido entre a lealdade que devo
    À Tabacaria do outro lado da rua, como coisa real por fora,
    E à sensação de que tudo é sonho, como coisa real por dentro.
    `}
    />
    </p>
    <p>
    <HilightLetters
    text={`
    Falhei em tudo.
    Como não fiz propósito nenhum, talvez tudo fosse nada.
    A aprendizagem que me deram,
    Desci dela pela janela das traseiras da casa,
    Fui até ao campo com grandes propósitos.
    Mas lá encontrei só ervas e árvores,
    E quando havia gente era igual à outra.
    Saio da janela, sento-me numa cadeira. Em que hei-de pensar?`}
    />
    </p>

    </div>);
}
 
export default Page;