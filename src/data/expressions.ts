export type Expression = {
  id: string;
  text: string;
  meaning: string;
  origin: string;
  why: string;
  example: string;
};

export const expressions: Expression[] = [
  {
    id: "burros-nagua",
    text: "Dar com os burros n'água",
    meaning: "Fracassar, ver um plano dar errado.",
    origin:
      "Vem do tempo das tropas de mulas e burros que carregavam mercadorias pelo interior. Ao atravessar rios, os animais às vezes caíam na água e a carga se perdia.",
    why: "Quando os burros iam parar na água, a viagem e o lucro iam junto. O prejuízo virou sinônimo de qualquer empreitada que desanda.",
    example:
      "Montei a loja sem pesquisar o mercado e dei com os burros n'água.",
  },
  {
    id: "boi-de-piranha",
    text: "Boi de piranha",
    meaning:
      "Pessoa sacrificada para que os outros passem em segurança ou escapem de um problema.",
    origin:
      "Vem da lida com o gado em regiões de rios, como o Pantanal e a Amazônia. Para atravessar a boiada, os vaqueiros mandavam à frente um animal, de pouco valor, para distrair as piranhas.",
    why: "Enquanto as piranhas atacavam o boi isca, o resto da manada atravessava o rio ilesa. Hoje descreve quem paga pelos outros.",
    example:
      "O estagiário virou boi de piranha e levou a culpa pelo erro da equipe.",
  },
  {
    id: "cavalinho-chuva",
    text: "Tirar o cavalinho da chuva",
    meaning: "Desistir de uma ideia ou de uma expectativa.",
    origin:
      "Segundo a versão mais difundida, vem do tempo em que se visitava a cavalo. Quem fazia visita rápida deixava o cavalo sob a chuva, a ponto de partir logo. Quem era convidado a ficar o levava para um abrigo.",
    why: "Tirar o cavalo da chuva era sinal de que a visita ia durar. A expressão acabou ganhando o sentido contrário: avisar que o outro pode desistir e se acomodar com o que ouviu.",
    example: "Pode tirar o cavalinho da chuva, esse aumento não vai sair.",
  },
  {
    id: "pe-na-jaca",
    text: "Pé na jaca",
    meaning: "Exagerar, sobretudo em comida, bebida ou festa.",
    origin:
      "A explicação popular diz que animais e tropeiros que comiam jacas caídas e fermentadas ao longo do caminho ficavam alterados, como se tivessem bebido.",
    why: "A imagem é de quem pisa na jaca e se empolga além da conta. Daí o sentido de abandonar a dieta, o juízo ou a moderação.",
    example: "Estava de dieta, mas no churrasco de domingo meti o pé na jaca.",
  },
  {
    id: "rodar-baiana",
    text: "Rodar a baiana",
    meaning: "Fazer escândalo, perder a compostura em público.",
    origin:
      "Há várias versões. Uma delas liga a expressão às baianas das rodas de samba e do carnaval, que giram com saias largas. Outra a associa a brigas de rua com capoeiristas no início do século XX.",
    why: "Seja pelo giro da saia ou pela confusão de rua, a imagem é a de um movimento que chama atenção e causa alvoroço.",
    example: "Ela rodou a baiana no meio do restaurante quando viu a conta.",
  },
  {
    id: "ver-navios",
    text: "Ficar a ver navios",
    meaning:
      "Ficar esperando algo que não vai chegar, ou perder uma oportunidade.",
    origin:
      "Vem de Portugal. Diz-se que, após o desaparecimento do rei dom Sebastião na batalha de Alcácer-Quibir, em 1578, muitos portugueses iam ao litoral esperar o retorno do rei, que nunca voltou.",
    why: "Quem aguardava na praia só via os navios passando. A expressão ficou para quem espera em vão ou vê a chance escapar.",
    example:
      "Deixei para comprar o ingresso na última hora e fiquei a ver navios.",
  },
  {
    id: "maria-vai-com-as-outras",
    text: "Maria vai com as outras",
    meaning: "Pessoa sem opinião própria, que faz o que a maioria faz.",
    origin:
      'A explicação mais citada remete à rainha dona Maria I de Portugal, conhecida como "a Louca", que no fim da vida teria sido cercada por damas que a acompanhavam em tudo. Não há consenso entre os historiadores.',
    why: "O nome Maria virou símbolo de quem simplesmente acompanha o grupo, sem decidir por conta própria.",
    example:
      "Não seja Maria vai com as outras: escolha o curso de que você gosta.",
  },
  {
    id: "judas-botas",
    text: "Onde Judas perdeu as botas",
    meaning: "Lugar muito distante, de difícil acesso.",
    origin:
      "A origem é incerta. Uma versão diz que Judas, depois de trair Jesus, fugiu e se enforcou, e as botas teriam ficado num ponto perdido. Outra explica a expressão como um jeito de dizer que ele escondeu as moedas da traição num lugar remoto.",
    why: "Como ninguém sabe onde fica esse lugar, a expressão serve para qualquer destino longe demais.",
    example: "Ele mora onde Judas perdeu as botas, são duas horas de viagem.",
  },
];
