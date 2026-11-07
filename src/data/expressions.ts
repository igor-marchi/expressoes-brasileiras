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
  {
    id: "quebrar-o-galho",
    text: "Quebrar o galho",
    meaning:
      "Resolver um problema de forma improvisada ou ajudar alguém num aperto.",
    origin:
      "A origem não é documentada de forma segura. A imagem é a de quebrar um galho de árvore para improvisar uma solução na hora.",
    why: "Um galho quebrado serve de apoio, vara ou ferramenta rápida. Virou sinônimo de uma ajuda simples que tira alguém do sufoco.",
    example:
      "Meu carro quebrou e o vizinho quebrou o galho me dando uma carona até o trabalho.",
  },
  {
    id: "dar-o-braco-a-torcer",
    text: "Dar o braço a torcer",
    meaning: "Admitir que estava errado e ceder diante de outra opinião.",
    origin:
      "A origem é incerta. A explicação mais comum liga a expressão a disputas físicas, em que o braço torcido indica rendição.",
    why: "Quem tem o braço torcido perde a disputa. Por isso a expressão quase sempre aparece na negativa, para quem não admite estar errado.",
    example:
      "Ele sabia que errou, mas não deu o braço a torcer e manteve a versão.",
  },
  {
    id: "chutar-o-balde",
    text: "Chutar o balde",
    meaning: "Desistir de tudo, perder a paciência e jogar o esforço fora.",
    origin:
      "A origem não é documentada com segurança. Uma versão popular fala do balde chutado por quem se matava por cansaço ou raiva, mas não há prova disso.",
    why: "A imagem é a de um gesto raivoso que derruba o balde e faz a bagunça. Serve para quem larga tudo num ataque de raiva.",
    example:
      "Depois de tanta reclamação do cliente, ela chutou o balde e pediu demissão.",
  },
  {
    id: "engolir-sapo",
    text: "Engolir sapo",
    meaning: "Aguentar uma situação desagradável sem poder reclamar.",
    origin:
      "A origem é incerta. A imagem do sapo como algo repulsivo de engolir é antiga e aparece em outras línguas.",
    why: "Engolir um sapo vivo seria nojento e difícil. A expressão compara isso a ter de aceitar calado algo que revolta.",
    example: "No trabalho eu engulo sapo todo dia para não perder o emprego.",
  },
  {
    id: "matar-dois-coelhos-com-uma-cajadada",
    text: "Matar dois coelhos com uma cajadada só",
    meaning: "Resolver dois problemas de uma vez, com uma única ação.",
    origin:
      "Existem expressões parecidas em várias línguas europeias, e a origem exata não é documentada. No Brasil a cajada é o pau de pastor.",
    why: "Uma pancada só derruba dois coelhos. É a imagem da economia de esforço: um gesto, dois resultados.",
    example:
      "Aproveitei a viagem a trabalho para visitar minha avó e matei dois coelhos com uma cajadada só.",
  },
  {
    id: "agua-mole-em-pedra-dura",
    text: "Água mole em pedra dura, tanto bate até que fura",
    meaning: "Com persistência, até o que parece impossível acaba cedendo.",
    origin:
      "É um ditado antigo, de origem popular e incerta. Ideias parecidas aparecem em provérbios de vários povos.",
    why: "A água é fraca, mas as gotas repetidas por muito tempo desgastam a pedra. O recado é que insistir vale mais do que força.",
    example:
      "Pedi o desconto três vezes, e água mole em pedra dura: acabaram aceitando.",
  },
  {
    id: "pagar-o-pato",
    text: "Pagar o pato",
    meaning: "Ser punido ou arcar com a culpa de algo que não fez.",
    origin:
      "A origem é incerta e disputada. Uma explicação diz que viria de uma brincadeira ou de um costume em que alguém pagava por um pato, mas nenhuma versão é confirmada.",
    why: "O pato aparece como o custo que alguém acaba bancando. Hoje a imagem é a de quem paga a conta de uma bobagem alheia.",
    example: "Eles se atrasaram e eu paguei o pato, levando bronca do chefe.",
  },
  {
    id: "cada-macaco-no-seu-galho",
    text: "Cada macaco no seu galho",
    meaning:
      "Cada pessoa deve cuidar do que é da sua área e não se meter no resto.",
    origin:
      "A origem é popular e não documentada. É um ditado antigo, usado para pedir que cada um fique no seu lugar.",
    why: "Macacos vivem em árvores e cada um tem seu galho. Quando um invade o do outro, vira confusão.",
    example: "Não me peça para opinar no marketing: cada macaco no seu galho.",
  },
  {
    id: "estar-com-a-faca-e-o-queijo-na-mao",
    text: "Estar com a faca e o queijo na mão",
    meaning: "Ter tudo o que precisa para conseguir o que quer.",
    origin:
      "A origem não é documentada. A imagem é a de quem tem em mãos tudo para cortar e comer o queijo.",
    why: "Com a faca e o queijo na mão, só falta cortar. A expressão aponta que a condição está toda a favor de quem decide.",
    example:
      "Com a vaga garantida e a proposta na mesa, ele está com a faca e o queijo na mão.",
  },
  {
    id: "pisar-na-bola",
    text: "Pisar na bola",
    meaning: "Errar ou falhar com alguém, geralmente por descuido.",
    origin:
      "Vem do futebol, onde pisar na bola é errar o domínio e perder a jogada. Não há registro seguro de quando passou para o dia a dia.",
    why: "Num lance de futebol, pisar na bola estraga a jogada. Na vida, virou sinônimo de decepcionar ou ser negligente.",
    example: "Esqueci o aniversário dela e pisei na bola feio.",
  },
  {
    id: "fazer-vista-grossa",
    text: "Fazer vista grossa",
    meaning: "Fingir que não viu algo errado para evitar problema.",
    origin:
      "A origem não é documentada. A expressão vem da ideia de uma vista grossa, ou seja, que não enxerga detalhes.",
    why: "Quem tem vista grossa não distingue as coisas bem. Fazer vista grossa é fingir essa falta de nitidez de propósito.",
    example: "O fiscal fez vista grossa e deixou o erro passar.",
  },
  {
    id: "ficar-de-queixo-caido",
    text: "Ficar de queixo caído",
    meaning: "Ficar muito surpreso ou impressionado.",
    origin:
      "A origem não é documentada. A imagem vem da reação do corpo diante de algo inesperado.",
    why: "Quando alguém se espanta, a boca se abre e o queixo parece cair. A expressão descreve essa cara de espanto.",
    example: "Quando vi o tamanho da torta, fiquei de queixo caído.",
  },
  {
    id: "abrir-o-jogo",
    text: "Abrir o jogo",
    meaning: "Falar com franqueza, sem esconder nada.",
    origin:
      "A origem é incerta. A explicação mais aceita vem dos jogos de cartas, em que mostrar a mão revela tudo.",
    why: "Quem abre o jogo mostra as cartas que tem. Fica tudo às claras, sem blefe.",
    example:
      "Já que estamos aqui, vou abrir o jogo: não estou satisfeito com o contrato.",
  },
  {
    id: "sair-pela-tangente",
    text: "Sair pela tangente",
    meaning: "Fugir do assunto ou de uma pergunta sem responder de verdade.",
    origin:
      "Vem da geometria: tangente é a linha que toca uma curva num ponto e segue reta. A passagem para o uso popular é documentada de forma vaga.",
    why: "Em vez de seguir a curva, a tangente se afasta dela. A pessoa também se afasta do assunto na hora H.",
    example: "Perguntei do prazo e ele saiu pela tangente.",
  },
  {
    id: "meter-os-pes-pelas-maos",
    text: "Meter os pés pelas mãos",
    meaning: "Confundir tudo e agir de forma desastrada.",
    origin:
      "A origem é incerta e popular. A imagem é a de quem se atrapalha tanto que troca pés e mãos.",
    why: "Usar o pé no lugar da mão é um jeito desastrado de fazer as coisas. Descreve quem se enrola ao tentar agir.",
    example:
      "Fiquei nervoso na apresentação, meti os pés pelas mãos e esqueci metade.",
  },
  {
    id: "tempestade-em-copo-d-agua",
    text: "Fazer tempestade em copo d'água",
    meaning: "Exagerar um problema pequeno, tratando como se fosse grave.",
    origin:
      "A expressão existe em várias línguas europeias. A origem exata não é documentada com segurança.",
    why: "Uma tempestade num copo é um absurdo de tamanho. A imagem mostra o exagero de quem faz um drama sem motivo.",
    example:
      "Foi só um atraso de cinco minutos, você está fazendo tempestade em copo d'água.",
  },
  {
    id: "dar-a-volta-por-cima",
    text: "Dar a volta por cima",
    meaning: "Superar uma situação difícil e se recuperar.",
    origin:
      "A origem não é documentada. A expressão ficou muito popular na música brasileira e no futebol.",
    why: "A imagem é a de contornar o obstáculo por cima, sem deixar que ele vença. Fala de quem levanta depois de cair.",
    example:
      "Ele perdeu o emprego, mas deu a volta por cima e abriu o próprio negócio.",
  },
  {
    id: "colocar-lenha-na-fogueira",
    text: "Colocar lenha na fogueira",
    meaning: "Avivar uma discussão ou um conflito, deixando tudo mais tenso.",
    origin:
      "A origem não é documentada. A imagem é literal: lenha alimenta o fogo.",
    why: "Mais lenha deixa a fogueira maior. Da mesma forma, um comentário a mais faz a briga crescer.",
    example:
      "Não coloque lenha na fogueira, eles já estão brigando o bastante.",
  },
  {
    id: "jogar-a-toalha",
    text: "Jogar a toalha",
    meaning: "Desistir de algo por ver que não há mais como vencer.",
    origin:
      "Vem do boxe, onde a equipe de um lutador lança uma toalha no ringue para encerrar a luta e proteger o atleta.",
    why: "A toalha no ringue é o sinal de rendição. Fora do esporte, é o ato de se dar por vencido.",
    example:
      "Tentei de tudo para consertar o computador, mas joguei a toalha e comprei outro.",
  },
  {
    id: "cair-a-ficha",
    text: "Cair a ficha",
    meaning: "Entender de repente algo que não tinha percebido.",
    origin:
      "Vem dos antigos telefones públicos, os orelhões, que funcionavam com fichas. A ligação só acontecia quando a ficha caía dentro do aparelho.",
    why: "Antes da ficha cair, a linha não completava. A ideia é a mesma: a compreensão só chega quando a ficha cai.",
    example: "Só ontem caiu a ficha de que eu estava no ônibus errado.",
  },
  {
    id: "por-a-mao-na-massa",
    text: "Pôr a mão na massa",
    meaning: "Começar a trabalhar de verdade, sem só falar.",
    origin:
      "A imagem vem do trabalho do padeiro e do cozinheiro, que sujam as mãos na massa. A origem exata da expressão não é documentada.",
    why: "Mexer na massa é a parte que dá trabalho. Quem põe a mão na massa deixa o plano de lado e executa.",
    example: "Chega de reunião, vamos pôr a mão na massa.",
  },
  {
    id: "fazer-cara-de-paisagem",
    text: "Fazer cara de paisagem",
    meaning: "Fingir que não ouviu ou não tem nada a ver com a situação.",
    origin:
      "A origem não é documentada. É uma expressão popular que ficou muito comum nas últimas décadas.",
    why: "Uma paisagem fica parada, sem reação. Quem faz essa cara mostra o rosto de quem não está entendendo nada.",
    example: "Perguntaram quem comeu o bolo e ele fez cara de paisagem.",
  },
  {
    id: "bater-as-botas",
    text: "Bater as botas",
    meaning: "Morrer, dito de forma informal e bem-humorada.",
    origin:
      "A origem é incerta. Uma explicação diz que viria de soldados que morriam com as botas nos pés, mas não é comprovada.",
    why: "Bater as botas lembra o último gesto de alguém que parte. É um jeito leve de falar de um assunto pesado.",
    example: "Meu celular velho bateu as botas de vez ontem.",
  },
  {
    id: "pe-de-chinelo",
    text: "Pé de chinelo",
    meaning: "Pessoa simples, sem recursos ou de pouca importância.",
    origin:
      "A origem é popular e não documentada com precisão. Vem da ideia de quem anda de chinelo por não ter como comprar sapato.",
    why: "O chinelo era associado a quem tinha pouca posse. Com o tempo, a expressão passou a ser usada para desvalorizar quem faz algo de forma amadora.",
    example: "Esse time é pé de chinelo, perde de todo mundo.",
  },
  {
    id: "barba-de-molho",
    text: "Botar a barba de molho",
    meaning:
      "Ficar de sobreaviso e se precaver quando um problema se aproxima.",
    origin:
      "A origem é incerta. A versão mais citada vem do ditado 'quando vires a barba do vizinho arder, põe a tua de molho': se o problema acerta o outro, você pode ser o próximo.",
    why: "Barba molhada não pega fogo. A imagem é a de se proteger antes que o perigo chegue até você.",
    example:
      "Demitiram o colega da outra mesa, então melhor botar a barba de molho.",
  },
  {
    id: "comer-o-pao-que-o-diabo-amassou",
    text: "Comer o pão que o diabo amassou",
    meaning: "Passar por muitas dificuldades e sofrimentos.",
    origin:
      "A origem é incerta e popular. Há ditados parecidos em outras línguas, ligando o pão do diabo a algo de má qualidade.",
    why: "Um pão amassado pelo diabo só poderia ser ruim e amargo. A imagem pinta uma vida cheia de privação.",
    example: "Ele comeu o pão que o diabo amassou até conseguir abrir a loja.",
  },
  {
    id: "chorar-pitangas",
    text: "Chorar pitangas",
    meaning: "Reclamar muito, geralmente por dinheiro ou por falta de sorte.",
    origin:
      "A origem não é documentada. Uma explicação popular diz que o choro é comparado à cor vermelha da pitanga, mas é só hipótese.",
    why: "A imagem é a de choro exagerado, de quem reclama de barriga cheia. Virou sinônimo de lamúria.",
    example: "Ele vive chorando pitangas, mas acabou de trocar de carro.",
  },
  {
    id: "ficar-em-cima-do-muro",
    text: "Ficar em cima do muro",
    meaning: "Não tomar partido em uma disputa ou discussão.",
    origin:
      "A origem não é documentada. A imagem é literal: quem fica no muro não está de nenhum dos dois lados.",
    why: "Em cima do muro, a pessoa não pula para nenhum lado. Pode descer para qualquer um quando convier.",
    example: "Perguntei em quem ele votaria, mas ele ficou em cima do muro.",
  },
  {
    id: "passar-a-perna",
    text: "Passar a perna",
    meaning: "Enganar alguém para levar vantagem.",
    origin:
      "A origem não é documentada. A imagem vem de passar a perna na frente de alguém para fazê-lo tropeçar.",
    why: "Uma rasteira derruba a pessoa sem aviso. A expressão compara o golpe físico ao engano na negociação.",
    example: "Ele passou a perna no sócio e ficou com a empresa.",
  },
  {
    id: "dar-com-a-lingua-nos-dentes",
    text: "Dar com a língua nos dentes",
    meaning: "Revelar um segredo sem querer ou por indiscrição.",
    origin:
      "A origem não é documentada. A imagem é a da língua que escapa e bate nos dentes quando se fala demais.",
    why: "A língua deveria ficar quieta atrás dos dentes. Quando ela bate neles, o segredo sai.",
    example: "Eu pedi segredo, mas ela deu com a língua nos dentes.",
  },
  {
    id: "fazer-das-tripas-coracao",
    text: "Fazer das tripas coração",
    meaning: "Fazer um esforço enorme para conseguir algo difícil.",
    origin:
      "A origem é incerta e antiga, e a expressão existe em outras línguas. Não há registro seguro de quem a criou.",
    why: "Transformar tripas em coração seria quase impossível. A imagem expressa o tamanho do sacrifício.",
    example: "Fiz das tripas coração para terminar o relatório a tempo.",
  },
  {
    id: "descascar-o-abacaxi",
    text: "Descascar o abacaxi",
    meaning: "Resolver um problema difícil e chato.",
    origin:
      "A origem não é documentada. A imagem vem de que descascar um abacaxi dá trabalho e espeta.",
    why: "O abacaxi é cheio de espinhos e custa a ser limpo. Por isso virou símbolo de problema espinhoso.",
    example: "Sobrou para mim descascar o abacaxi da prestação de contas.",
  },
  {
    id: "pagar-mico",
    text: "Pagar mico",
    meaning: "Passar vergonha em público por algo constrangedor.",
    origin:
      "A origem é incerta. Há ligação provável com o jogo infantil do mico, em que a carta do mico fica com quem perde, mas isso não é confirmado.",
    why: "Quem fica com o mico paga um preço. Pagar mico é arcar com o constrangimento.",
    example: "Tropecei no palco na frente de todo mundo, paguei o maior mico.",
  },
  {
    id: "encher-linguica",
    text: "Encher linguiça",
    meaning:
      "Falar ou escrever muito sem dizer nada de útil, só para ocupar espaço.",
    origin:
      "A origem é incerta. A imagem vem de encher o invólucro da linguiça com recheio de menor valor.",
    why: "A linguiça fica grande, mas o recheio é só volume. O texto ou a fala também fica longo e vazio.",
    example:
      "O trabalho tinha duas páginas de conteúdo e dez de encher linguiça.",
  },
  {
    id: "uma-mao-lava-a-outra",
    text: "Uma mão lava a outra",
    meaning: "As pessoas devem se ajudar mutuamente.",
    origin:
      "É um ditado antigo, que aparece em várias línguas. A origem exata não é documentada.",
    why: "As duas mãos só ficam limpas se uma ajudar a outra. A imagem fala de favor que se retribui.",
    example: "Você me ajuda hoje e eu ajudo amanhã, uma mão lava a outra.",
  },
  {
    id: "cair-na-real",
    text: "Cair na real",
    meaning: "Perceber a realidade como ela é, abandonando uma ilusão.",
    origin:
      "A origem não é documentada. A expressão é popular no português do Brasil e ganhou força em décadas recentes.",
    why: "Quem sonha está fora da realidade. Cair nela é aterrissar de volta e ver os fatos.",
    example:
      "Ele queria ficar rico em um mês, mas caiu na real quando viu os números.",
  },
  {
    id: "fazer-ouvidos-de-mercador",
    text: "Fazer ouvidos de mercador",
    meaning: "Fingir que não ouviu um pedido ou conselho.",
    origin:
      "A origem é incerta e antiga. A explicação mais comum diz que o mercador ignora o que não interessa ao negócio, mas é só hipótese.",
    why: "Imagina-se o comerciante que só escuta o que dá lucro. O resto passa batido.",
    example: "Pedi ajuda várias vezes, mas ele fez ouvidos de mercador.",
  },
  {
    id: "ter-o-rei-na-barriga",
    text: "Ter o rei na barriga",
    meaning: "Ser arrogante, achar que é mais importante que os outros.",
    origin:
      "A origem é incerta. Há quem ligue à ideia de ter um rei dentro de si, mas não existe confirmação da data ou do contexto.",
    why: "Carregar um rei na barriga é se achar de sangue nobre. Passou a descrever quem se acha superior.",
    example: "Depois da promoção, ele está com o rei na barriga.",
  },
  {
    id: "nem-que-a-vaca-tussa",
    text: "Nem que a vaca tussa",
    meaning: "De jeito nenhum, em hipótese alguma.",
    origin:
      "A origem é incerta e popular. A graça está em citar algo improvável para reforçar a recusa.",
    why: "Vaca tossindo é cena rara e estranha. A comparação enfatiza que algo não vai acontecer.",
    example: "Eu não vou pagar esse preço, nem que a vaca tussa.",
  },
  {
    id: "por-o-carro-na-frente-dos-bois",
    text: "Pôr o carro na frente dos bois",
    meaning:
      "Fazer as coisas fora de ordem, começando pelo que deveria vir depois.",
    origin:
      "Vem do carro de boi, antigo meio de transporte rural, em que os bois puxam o carro. Se o carro fica na frente, não anda.",
    why: "A ordem natural é boi na frente e carro atrás. Trocar isso é um jeito certo de não sair do lugar.",
    example:
      "Comprar os móveis antes de ter a casa é pôr o carro na frente dos bois.",
  },
  {
    id: "ir-para-o-beleleu",
    text: "Ir para o beleléu",
    meaning: "Acabar mal, estragar ou desaparecer de vez.",
    origin:
      "A origem não é documentada com segurança. Beleléu é palavra de uso popular e há teorias, nenhuma confirmada.",
    why: "Beleléu soa como um lugar distante e ruim. Quem vai para lá some ou se perde.",
    example: "Com a chuva, o churrasco foi para o beleléu.",
  },
  {
    id: "pulga-atras-da-orelha",
    text: "Ficar com a pulga atrás da orelha",
    meaning: "Ficar desconfiado de que algo não está certo.",
    origin:
      "A origem é incerta. A expressão existe em outras línguas, como o francês, e seria antiga.",
    why: "Uma pulga na orelha incomoda sem parar. Assim também a dúvida: fica coçando até ser resolvida.",
    example:
      "Ele disse que estava ocupado, mas fiquei com a pulga atrás da orelha.",
  },
  {
    id: "chover-no-molhado",
    text: "Chover no molhado",
    meaning: "Repetir algo inútil, que não muda nada.",
    origin:
      "A origem não é documentada. A imagem é literal e fácil de entender.",
    why: "Se o chão já está molhado, mais chuva não muda nada. É um esforço sem efeito.",
    example:
      "Falar de novo sobre o horário é chover no molhado, ele nunca respeita.",
  },
  {
    id: "dar-murro-em-ponta-de-faca",
    text: "Dar murro em ponta de faca",
    meaning: "Insistir numa coisa que só traz prejuízo para quem insiste.",
    origin:
      "A origem não é documentada. A imagem é literal e vem do bom senso popular.",
    why: "Dar um soco na ponta de uma faca só machuca a mão. A expressão aponta teimosia sem saída.",
    example: "Brigar com a burocracia é dar murro em ponta de faca.",
  },
  {
    id: "cereja-do-bolo",
    text: "Cereja do bolo",
    meaning: "O toque final que deixa algo bom ainda melhor.",
    origin:
      "A origem é incerta. Vem provavelmente da confeitaria, em que uma cereja é colocada no alto do bolo.",
    why: "A cereja não faz o bolo, mas o deixa mais bonito. Representa o detalhe que completa o resultado.",
    example: "Ganhar o prêmio foi a cereja do bolo de um ano ótimo.",
  },
  {
    id: "rasgar-seda",
    text: "Rasgar seda",
    meaning: "Elogiar alguém com exagero, geralmente para agradar.",
    origin:
      "A origem é incerta e popular. Pode estar ligada ao tecido caro e delicado, mas isso é hipótese.",
    why: "A seda é fina e valiosa, e o som do rasgo lembra algo exagerado. Elogio demais soa falso.",
    example: "Ele vive rasgando seda para o chefe.",
  },
  {
    id: "tomar-cha-de-cadeira",
    text: "Tomar chá de cadeira",
    meaning: "Esperar muito tempo, normalmente sentado e sem ser atendido.",
    origin:
      "A origem não é documentada. É expressão popular brasileira para quem espera sem ter o que fazer.",
    why: "Ficar na cadeira esperando é como tomar chá sem chá. A espera longa vira a bebida.",
    example: "Tomei chá de cadeira duas horas até me chamarem.",
  },
  {
    id: "levar-um-bolo",
    text: "Levar um bolo",
    meaning: "Ser deixado esperando por alguém que não apareceu.",
    origin:
      "A origem é incerta. Como o bolo está associado a festa, a ideia seria a do convidado que chega e não encontra ninguém, mas não há confirmação.",
    why: "O bolo fica sem ninguém para comer. A expressão trata a ausência como um plantão sem resultado.",
    example: "Marquei o cinema com ela, mas levei um bolo.",
  },
  {
    id: "pegar-no-pe",
    text: "Pegar no pé",
    meaning: "Cobrar demais, criticar ou importunar alguém com insistência.",
    origin:
      "A origem não é documentada. A imagem é a de alguém que agarra o pé e não larga.",
    why: "Quem é pego pelo pé não consegue andar à vontade. Fica preso à implicância do outro.",
    example: "Meu chefe vive pegando no meu pé por causa de atraso.",
  },
  {
    id: "meter-o-bedelho",
    text: "Meter o bedelho",
    meaning: "Dar palpite ou se intrometer onde ninguém chamou.",
    origin:
      "A origem é incerta. Bedelho é palavra de sentido antigo, ligada a um tipo de trinco, mas a ligação com a expressão não é confirmada.",
    why: "Meter o que não foi pedido é invadir o espaço dos outros. A palavra bedelho ficou associada a essa intromissão.",
    example: "Ninguém pediu, mas ele meteu o bedelho na conversa.",
  },
  {
    id: "gastar-cera-com-defunto-ruim",
    text: "Gastar cera com defunto ruim",
    meaning: "Esforçar-se por alguém ou algo que não merece.",
    origin:
      "A origem é popular e incerta. A cera é a das velas, usadas em velórios.",
    why: "Gastar velas com quem não valia nada seria desperdício. Vale para qualquer esforço jogado fora.",
    example:
      "Eu ajudei tanto ele e nunca agradeceu, foi gastar cera com defunto ruim.",
  },
  {
    id: "de-grao-em-grao",
    text: "De grão em grão a galinha enche o papo",
    meaning: "Pequenas coisas somadas com constância dão grande resultado.",
    origin:
      "É um ditado antigo e popular, de origem não documentada. Existem versões parecidas em outras línguas.",
    why: "A galinha come um grão de cada vez e mesmo assim fica cheia. O recado é que paciência rende.",
    example:
      "Guardo um pouco todo mês: de grão em grão a galinha enche o papo.",
  },
  {
    id: "deus-ajuda-quem-cedo-madruga",
    text: "Deus ajuda quem cedo madruga",
    meaning: "Quem acorda cedo e age logo tem mais chance de sucesso.",
    origin:
      "É um ditado antigo, de origem popular e não documentada. Aparece em várias línguas românicas.",
    why: "Madrugar é aproveitar as primeiras horas do dia. A ideia é que quem começa cedo leva vantagem.",
    example:
      "Cheguei antes de abrir e peguei a primeira vaga: Deus ajuda quem cedo madruga.",
  },
  {
    id: "mais-vale-um-passaro-na-mao",
    text: "Mais vale um pássaro na mão do que dois voando",
    meaning:
      "É melhor ficar com o que é certo do que arriscar por algo incerto.",
    origin:
      "O provérbio é muito antigo e existe em várias línguas europeias. A origem exata não é documentada.",
    why: "O pássaro na mão é seu. Os dois no ar podem fugir. É um conselho de prudência.",
    example:
      "Aceitei o emprego que já tinha: mais vale um pássaro na mão do que dois voando.",
  },
  {
    id: "quem-ri-por-ultimo",
    text: "Quem ri por último ri melhor",
    meaning:
      "Quem vence no final é quem de fato venceu, mesmo se perdeu antes.",
    origin:
      "É um provérbio de origem popular, com versões em outras línguas. A origem exata não é documentada.",
    why: "Rir primeiro pode ser precipitado. Quem ri no fim já viu o resultado final.",
    example: "Zombaram do meu plano, mas quem ri por último ri melhor.",
  },
  {
    id: "cavalo-dado-nao-se-olham-os-dentes",
    text: "A cavalo dado não se olham os dentes",
    meaning: "Não se deve criticar um presente que se ganhou.",
    origin:
      "Vem da prática antiga de olhar os dentes do cavalo para estimar sua idade e saúde antes de comprá-lo. O ditado é antigo e existe em várias línguas.",
    why: "Olhar os dentes é avaliar para comprar. Quando o cavalo é de graça, avaliar é falta de educação.",
    example:
      "A camisa nem é do meu gosto, mas a cavalo dado não se olham os dentes.",
  },
  {
    id: "gato-escaldado",
    text: "Gato escaldado tem medo de água fria",
    meaning: "Quem já se machucou passa a ter medo até de situações parecidas.",
    origin: "É um ditado antigo e popular. A origem exata não é documentada.",
    why: "O gato que levou água quente passa a fugir de qualquer água, até a fria. O medo se generaliza.",
    example:
      "Depois do golpe, ele não confia em mais ninguém: gato escaldado tem medo de água fria.",
  },
  {
    id: "macaco-velho-nao-mete-a-mao-em-cumbuca",
    text: "Macaco velho não mete a mão em cumbuca",
    meaning: "Quem tem experiência não cai em armadilhas.",
    origin:
      "Vem de uma armadilha popular, descrita em histórias, em que se prende o macaco com uma cumbuca contendo comida. A origem exata da expressão não é documentada.",
    why: "O macaco jovem agarra o alimento e não consegue soltar a mão. O velho já aprendeu a lição.",
    example:
      "Já passei por isso antes, macaco velho não mete a mão em cumbuca.",
  },
  {
    id: "santo-de-casa-nao-faz-milagre",
    text: "Santo de casa não faz milagre",
    meaning: "Quem convive conosco costuma ter o valor menosprezado.",
    origin:
      "O provérbio é de origem popular, e a origem exata não é documentada. Há ideia parecida em textos antigos sobre profeta sem honra em sua terra.",
    why: "O santo da casa é visto todo dia e perde o encanto. O talento que vem de fora parece maior.",
    example:
      "Ele resolve tudo em casa, mas ninguém liga: santo de casa não faz milagre.",
  },
  {
    id: "quem-tem-boca-vai-a-roma",
    text: "Quem tem boca vai a Roma",
    meaning: "Quem pergunta consegue chegar onde quer.",
    origin:
      "O provérbio vem do tempo em que Roma era destino de peregrinação e se chegava lá perguntando o caminho. A origem exata do dito não é documentada.",
    why: "Mesmo sem mapa, quem pergunta acaba chegando. A boca é o instrumento para achar o caminho.",
    example: "Se ficou perdido, pergunte: quem tem boca vai a Roma.",
  },
  {
    id: "casa-de-ferreiro-espeto-de-pau",
    text: "Casa de ferreiro, espeto de pau",
    meaning: "Quem sabe fazer algo muitas vezes não faz para si mesmo.",
    origin: "É um ditado antigo e popular. A origem exata não é documentada.",
    why: "O ferreiro faz espetos de ferro para os outros, mas usa um de pau. A imagem fala de quem não cuida do próprio.",
    example:
      "Ele conserta computador o dia inteiro e o dele vive travando: casa de ferreiro, espeto de pau.",
  },
  {
    id: "o-barato-sai-caro",
    text: "O barato sai caro",
    meaning: "Comprar algo muito barato pode gerar prejuízo maior depois.",
    origin:
      "É um ditado popular de origem não documentada, comum em várias línguas.",
    why: "O produto barato costuma ter qualidade baixa e precisa ser trocado. No fim, o gasto total é maior.",
    example: "Comprei o tênis mais barato e já furou: o barato sai caro.",
  },
  {
    id: "cada-um-sabe-onde-o-sapato-aperta",
    text: "Cada um sabe onde o sapato aperta",
    meaning: "Só quem vive um problema sabe o quanto ele pesa.",
    origin:
      "A origem é antiga. Uma fonte frequentemente citada é um relato atribuído a autores romanos sobre um homem que explica por que deixou a esposa, mas a conexão é incerta.",
    why: "Só quem calça o sapato sente onde ele machuca. O outro vê só o sapato.",
    example: "Não julgue, cada um sabe onde o sapato aperta.",
  },
  {
    id: "a-pressa-e-inimiga-da-perfeicao",
    text: "A pressa é inimiga da perfeição",
    meaning: "Fazer algo com pressa costuma resultar em erros.",
    origin:
      "É um provérbio antigo e comum em várias línguas, com origem não documentada.",
    why: "Quem corre não capricha. O resultado fica pior do que se tivesse feito com calma.",
    example: "Revisa com calma, a pressa é inimiga da perfeição.",
  },
  {
    id: "cao-que-ladra-nao-morde",
    text: "Cão que ladra não morde",
    meaning: "Quem faz muita ameaça geralmente não passa da ameaça.",
    origin:
      "É um provérbio antigo e popular, presente em várias línguas. A origem exata não é documentada.",
    why: "O cachorro que faz barulho está avisando, não atacando. A expressão ensina a não temer fala alta.",
    example: "Ele grita muito, mas não faz nada: cão que ladra não morde.",
  },
  {
    id: "diga-me-com-quem-andas",
    text: "Diga-me com quem andas e te direi quem és",
    meaning: "As companhias de uma pessoa revelam o caráter dela.",
    origin:
      "É um provérbio antigo, de origem popular, comum em várias línguas. Não há registro seguro de autoria.",
    why: "Quem se junta a alguém costuma compartilhar seus hábitos. As amizades acabam dizendo muito.",
    example:
      "Fique atento aos seus amigos, diga-me com quem andas e te direi quem és.",
  },
  {
    id: "filho-de-peixe-peixinho-e",
    text: "Filho de peixe, peixinho é",
    meaning:
      "Os filhos costumam parecer com os pais no jeito e nas habilidades.",
    origin: "É um ditado popular e antigo, de origem não documentada.",
    why: "O filhote do peixe também é peixe. A frase mostra que a herança familiar se repete.",
    example:
      "O pai é músico e o menino toca desde os cinco: filho de peixe, peixinho é.",
  },
  {
    id: "quem-semeia-vento-colhe-tempestade",
    text: "Quem semeia vento colhe tempestade",
    meaning:
      "Quem provoca problemas acaba recebendo consequências bem maiores.",
    origin:
      "A frase tem origem bíblica, no livro de Oseias, e depois virou ditado popular.",
    why: "O vento semeado é pequeno, mas a colheita vem como tempestade. A imagem mostra como o mal cresce.",
    example:
      "Ele espalhou boatos o ano todo e agora sofre as consequências: quem semeia vento colhe tempestade.",
  },
  {
    id: "chorar-o-leite-derramado",
    text: "Chorar o leite derramado",
    meaning: "Lamentar um erro que já não tem mais conserto.",
    origin:
      "É um ditado antigo, com versões em outras línguas, e origem exata não documentada.",
    why: "Leite derramado não volta para o copo. Chorar não adianta, só atrasa quem quer seguir.",
    example: "Já perdeu o prazo, de que adianta chorar o leite derramado?",
  },
  {
    id: "dar-nome-aos-bois",
    text: "Dar nome aos bois",
    meaning: "Citar os nomes dos responsáveis, sem generalizar.",
    origin:
      "A origem é popular e incerta. A imagem vem da roça, em que os bois de uma tropa têm nomes.",
    why: "Chamar cada boi pelo nome é ser específico. Quem dá nome aos bois aponta quem é quem.",
    example:
      "Parem de falar em geral e deem nome aos bois: quem deixou a porta aberta?",
  },
  {
    id: "dar-a-cara-a-tapa",
    text: "Dar a cara a tapa",
    meaning: "Assumir um risco ou enfrentar uma situação difícil de frente.",
    origin:
      "A origem não é documentada. A imagem é a de oferecer o rosto para ser golpeado.",
    why: "Quem dá a cara a tapa se expõe sem se proteger. Mostra coragem, às vezes imprudência.",
    example: "Fui eu quem deu a cara a tapa e falou com o diretor.",
  },
  {
    id: "pisar-no-freio",
    text: "Pisar no freio",
    meaning: "Diminuir o ritmo ou parar para pensar antes de seguir.",
    origin:
      "Vem do dia a dia dos veículos. A passagem para o sentido figurado é natural, mas não tem origem documentada.",
    why: "Pisar no freio reduz a velocidade. Na vida, é segurar a pressa para evitar um erro.",
    example: "Vamos pisar no freio e rever o orçamento antes de gastar mais.",
  },
  {
    id: "segurar-vela",
    text: "Segurar vela",
    meaning: "Acompanhar um casal sem ter o que fazer, ficando sobrando.",
    origin:
      "A origem é popular e não documentada com segurança. Uma explicação cita o tempo em que um acompanhante vigiava os namorados, mas não é confirmada.",
    why: "Quem segura a vela só ilumina, sem participar. É a figura do terceiro desnecessário.",
    example: "Não quero ir com eles ao cinema para segurar vela.",
  },
  {
    id: "jogar-verde-para-colher-maduro",
    text: "Jogar verde para colher maduro",
    meaning:
      "Fazer uma pergunta ou comentário disfarçado para arrancar a verdade de alguém.",
    origin:
      "A origem é popular, vinda da imagem de plantar ou jogar algo verde esperando o amadurecimento. A origem exata não é documentada.",
    why: "Joga-se uma isca de pouco valor para obter a informação real. A fruta madura é o segredo revelado.",
    example:
      "Ela jogou verde para colher maduro e descobriu quem tinha contado.",
  },
  {
    id: "comprar-gato-por-lebre",
    text: "Comprar gato por lebre",
    meaning: "Ser enganado, recebendo algo de qualidade inferior ao prometido.",
    origin:
      "A expressão é antiga e aparece em outras línguas. Uma história comum diz que alguns vendiam carne de gato como se fosse de lebre, mas isso não é comprovado.",
    why: "Gato e lebre se parecem quando já estão limpos. A troca engana quem não olha direito.",
    example:
      "Comprei esse relógio por um preço absurdo e era falso, comprei gato por lebre.",
  },
  {
    id: "tapar-o-sol-com-a-peneira",
    text: "Tapar o sol com a peneira",
    meaning: "Tentar esconder algo que é óbvio.",
    origin: "A origem não é documentada. A imagem é literal e absurda.",
    why: "A peneira tem furos, então a luz do sol passa. Esconder um fato óbvio é tão inútil quanto isso.",
    example: "Negar o erro agora é tapar o sol com a peneira.",
  },
  {
    id: "dormir-como-uma-pedra",
    text: "Dormir como uma pedra",
    meaning: "Dormir muito profundamente.",
    origin:
      "A origem não é documentada. É uma comparação simples entre o sono pesado e a imobilidade de uma pedra.",
    why: "Pedra não se mexe nem acorda. A expressão marca o sono sem interrupção.",
    example: "Depois da trilha, dormi como uma pedra.",
  },
  {
    id: "unha-e-carne",
    text: "Ser unha e carne",
    meaning: "Ser muito amigo e inseparável de alguém.",
    origin:
      "A origem é popular e não documentada. A imagem vem de que a unha e a carne do dedo são ligadas.",
    why: "Separar a unha da carne dói. A expressão mostra uma ligação que não se desfaz.",
    example: "Desde criança os dois são unha e carne.",
  },
  {
    id: "mao-de-vaca",
    text: "Mão de vaca",
    meaning: "Pessoa muito apegada ao dinheiro, que não gosta de gastar.",
    origin:
      "A origem é incerta. Pode vir da ideia de uma mão fechada, mas não há registro seguro.",
    why: "A palavra junta o fechar da mão com um animal pesado. O efeito é o de alguém que não solta nada.",
    example: "Meu tio é mão de vaca e nunca paga a conta.",
  },
  {
    id: "boca-de-siri",
    text: "Boca de siri",
    meaning: "Pedido ou compromisso de manter segredo.",
    origin:
      "A origem não é documentada. A imagem vem do siri, que tem a boca pequena e parece sempre fechada.",
    why: "Quem tem boca de siri não fala nada. Serve como promessa de discrição.",
    example: "Contei para ela, mas pedi boca de siri.",
  },
  {
    id: "dar-sopa-para-o-azar",
    text: "Dar sopa para o azar",
    meaning: "Descuidar-se e dar chance para algo ruim acontecer.",
    origin:
      "A origem não é documentada. A expressão usa a ideia de oferecer facilidade ao azar.",
    why: "Dar sopa é facilitar. Se você facilita, o azar aproveita.",
    example: "Deixar o carro aberto na rua é dar sopa para o azar.",
  },
  {
    id: "chover-canivete",
    text: "Chover canivete",
    meaning: "Chover muito forte, com temporal.",
    origin:
      "A origem é popular e incerta. Existem expressões parecidas em outras línguas, como a inglesa sobre gatos e cães.",
    why: "A imagem de canivetes caindo do céu dá a ideia de uma chuva pesada e perigosa.",
    example: "Choveu canivete ontem e ficamos presos no trânsito.",
  },
  {
    id: "por-um-fio",
    text: "Por um fio",
    meaning: "Estar prestes a acontecer algo ruim, em situação muito frágil.",
    origin:
      "A origem não é documentada com segurança. Uma imagem frequente cita a espada de Dâmocles, presa por um fio, mas a ligação não é confirmada.",
    why: "Algo preso por um fio pode cair a qualquer momento. Mostra a fragilidade da situação.",
    example: "Meu emprego está por um fio depois dessa reunião.",
  },
  {
    id: "ir-pro-brejo",
    text: "Ir pro brejo",
    meaning: "Dar errado, fracassar ou ser arruinado.",
    origin:
      "A origem não é documentada. A imagem é a de algo que se perde no brejo, terreno alagado e difícil.",
    why: "No brejo, tudo afunda e se perde. A expressão aponta um plano que não vai adiante.",
    example: "O projeto foi pro brejo quando cortaram o orçamento.",
  },
  {
    id: "ir-com-muita-sede-ao-pote",
    text: "Ir com muita sede ao pote",
    meaning: "Agir com pressa e voracidade, sem pensar nas consequências.",
    origin:
      "A origem é popular e não documentada. O pote é o recipiente de água.",
    why: "Quem vai com sede ao pote bebe rápido demais e se atrapalha. É o mesmo de quem se precipita.",
    example:
      "Ele foi com muita sede ao pote e acabou fechando um contrato ruim.",
  },
  {
    id: "fazer-vaquinha",
    text: "Fazer vaquinha",
    meaning: "Juntar dinheiro entre várias pessoas para um objetivo comum.",
    origin:
      "A origem é incerta. Há hipóteses, sem comprovação, que ligam à jogada em que cada um entra com uma parte.",
    why: "Cada pessoa põe um pouco e o total se forma. O termo vaquinha é só um nome carinhoso popular.",
    example: "Vamos fazer uma vaquinha para o presente do chefe.",
  },
  {
    id: "sem-pe-nem-cabeca",
    text: "Sem pé nem cabeça",
    meaning: "Sem lógica, sem sentido ou sem organização.",
    origin:
      "A origem não é documentada. É comparação com algo que não tem forma reconhecível.",
    why: "Uma coisa sem pé e sem cabeça não se identifica por onde pegar. A expressão aponta o que é confuso.",
    example: "A história que ele contou não tinha pé nem cabeça.",
  },
  {
    id: "por-a-mao-no-fogo",
    text: "Pôr a mão no fogo",
    meaning: "Garantir a honestidade ou a verdade de algo com total convicção.",
    origin:
      "Vem de provas antigas, as ordálias, em que o inocente deveria resistir ao fogo. Esse costume existiu na Europa medieval, mas a expressão atual é popular.",
    why: "Só põe a mão no fogo quem tem certeza de que não vai se queimar. É um jeito de dizer que se garante.",
    example: "Eu ponho a mão no fogo pela honestidade dele.",
  },
  {
    id: "morte-da-bezerra",
    text: "Pensar na morte da bezerra",
    meaning: "Ficar distraído, pensando em outra coisa.",
    origin:
      "A origem é incerta. A expressão é popular no Brasil, e não há versão segura sobre quem criou.",
    why: "A imagem é a de uma tristeza qualquer que distrai a pessoa do que importa.",
    example:
      "Eu estava pensando na morte da bezerra e perdi a ponto de descer.",
  },
  {
    id: "tirar-de-letra",
    text: "Tirar de letra",
    meaning: "Resolver algo com facilidade, sem grande esforço.",
    origin:
      "A origem é incerta. Uma explicação cita a leitura de partituras ou de textos sem dificuldade, mas não é confirmada.",
    why: "Quem lê de letra faz tudo com fluência. Quem tira de letra faz o difícil parecer fácil.",
    example: "A prova era difícil, mas ele tirou de letra.",
  },
  {
    id: "de-mala-e-cuia",
    text: "De mala e cuia",
    meaning: "Com todos os pertences, para ficar ou se mudar de vez.",
    origin:
      "A origem é incerta. A cuia é um recipiente comum no Brasil, e a expressão sugere carregar a mala e até a cuia, ou seja, tudo.",
    why: "Levar mala e cuia é levar tudo o que tem. Serve para a mudança completa.",
    example: "Ele chegou de mala e cuia e já ficou uma semana.",
  },
  {
    id: "pau-pra-toda-obra",
    text: "Pau pra toda obra",
    meaning: "Pessoa que topa fazer qualquer tipo de serviço.",
    origin:
      "A origem é popular e não documentada. A imagem é a do pau, ferramenta simples que serve para tudo.",
    why: "Um pedaço de madeira pode virar vários usos. Assim é quem faz de tudo um pouco.",
    example: "Ele é pau pra toda obra: pinta, conserta e cozinha.",
  },
  {
    id: "ficar-uma-arara",
    text: "Ficar uma arara",
    meaning: "Ficar muito bravo, irritado.",
    origin:
      "A origem não é documentada. Uma hipótese popular liga a cor vermelha da ave à do rosto de quem se irrita, mas isso é incerto.",
    why: "A arara é barulhenta e colorida. A imagem é a de alguém que se exalta e faz escândalo.",
    example: "Ela ficou uma arara quando viu a conta.",
  },
  {
    id: "dar-calote",
    text: "Dar calote",
    meaning: "Não pagar uma dívida.",
    origin:
      "A origem é incerta. A palavra calote tem uso antigo no português, mas sua etimologia não é segura.",
    why: "A expressão trata o ato de não pagar como um golpe aplicado em quem confiou.",
    example: "Ele deu calote em três lojas e agora está no nome sujo.",
  },
  {
    id: "quem-nao-chora-nao-mama",
    text: "Quem não chora não mama",
    meaning: "Quem não pede ou reclama não consegue o que quer.",
    origin:
      "A origem é popular e não documentada. A imagem vem do bebê, que só é amamentado quando chora.",
    why: "O bebê que se cala fica sem leite. A lição é que é preciso pedir.",
    example: "Peça o aumento, quem não chora não mama.",
  },
  {
    id: "pimenta-nos-olhos-dos-outros",
    text: "Pimenta nos olhos dos outros é refresco",
    meaning: "É fácil aceitar o sofrimento alheio quando não é com a gente.",
    origin:
      "É um ditado popular, comum em várias línguas, de origem não documentada.",
    why: "Pimenta no olho arde muito, mas só em quem sente. Para os outros, parece algo leve.",
    example:
      "Ele diz para eu relaxar, mas pimenta nos olhos dos outros é refresco.",
  },
  {
    id: "cabeca-de-vento",
    text: "Cabeça de vento",
    meaning: "Pessoa distraída, que não leva as coisas a sério.",
    origin:
      "A origem não é documentada. A imagem é a de uma cabeça leve, que se mexe sem rumo como o vento.",
    why: "O vento muda de direção o tempo todo. Quem tem a cabeça assim também esquece e se desvia fácil.",
    example: "Sou cabeça de vento, já esqueci de novo as chaves.",
  },
  {
    id: "estar-nas-nuvens",
    text: "Estar nas nuvens",
    meaning: "Estar distraído, sonhando acordado, sem prestar atenção.",
    origin:
      "A origem não é documentada. A imagem é a de ter a cabeça no alto, longe do chão.",
    why: "Nas nuvens, a pessoa não vê o que acontece embaixo. Mostra a distração de quem se perde em pensamentos.",
    example: "Desculpa, eu estava nas nuvens e não ouvi a pergunta.",
  },
  {
    id: "pisar-em-ovos",
    text: "Pisar em ovos",
    meaning:
      "Agir com muito cuidado para não irritar alguém ou piorar uma situação delicada.",
    origin:
      "A origem não é documentada. É uma imagem cotidiana que não tem criador conhecido.",
    why: "Quem pisa em ovos anda devagar para não quebrar nada. O cuidado vale para palavras e gestos.",
    example:
      "Desde a briga, todo mundo no escritório pisa em ovos com o chefe.",
  },
  {
    id: "cara-de-paisagem",
    text: "Cara de paisagem",
    meaning:
      "Expressão neutra de quem finge que não ouviu ou não tem nada a ver com o assunto.",
    origin:
      "A origem é incerta. É uma gíria recente e popular, sem origem registrada.",
    why: "Uma paisagem não reage a nada. Quem faz cara de paisagem não demonstra emoção alguma.",
    example: "Perguntei sobre o dinheiro e ele fez cara de paisagem.",
  },
  {
    id: "corda-no-pescoco",
    text: "Estar com a corda no pescoço",
    meaning: "Estar em grande aperto, geralmente financeiro, quase sem saída.",
    origin:
      "A origem não é documentada. A imagem vem da forca e é conhecida em várias línguas.",
    why: "Com a corda no pescoço, qualquer passo errado é fatal. É a pressão de quem está no limite.",
    example: "Com tantas dívidas, ele está com a corda no pescoço.",
  },
  {
    id: "no-mato-sem-cachorro",
    text: "Estar no mato sem cachorro",
    meaning: "Estar em uma situação difícil sem ajuda nem saída.",
    origin:
      "A origem não é documentada. A imagem é da caça, em que o cão ajuda a achar rastros.",
    why: "O caçador sem cão está perdido no mato. Falta o apoio que mostraria o caminho.",
    example: "Meu chefe viajou e eu fiquei no mato sem cachorro.",
  },
  {
    id: "dar-o-troco",
    text: "Dar o troco",
    meaning: "Responder a uma ofensa ou prejuízo com algo equivalente.",
    origin:
      "A origem não é documentada. A imagem vem do comércio, em que o troco devolve a diferença.",
    why: "No caixa, o troco devolve o que sobrou. Na vida, devolve o que o outro fez.",
    example: "Ele me humilhou na reunião, mas eu dei o troco com os números.",
  },
  {
    id: "entrar-numa-fria",
    text: "Entrar numa fria",
    meaning: "Meter-se em uma situação ruim ou arriscada.",
    origin: "A origem é incerta. É gíria popular, sem registro claro.",
    why: "Fria é algo desagradável e sem calor humano. Entrar numa fria é cair numa enrascada.",
    example: "Aceitei o negócio sem ler o contrato e entrei numa fria.",
  },
  {
    id: "bater-na-mesma-tecla",
    text: "Bater na mesma tecla",
    meaning: "Repetir o mesmo assunto ou argumento sem parar.",
    origin:
      "A origem não é documentada. A imagem sugere instrumentos como piano ou máquina de escrever.",
    why: "Apertar sempre a mesma tecla só dá a mesma nota. A conversa não anda.",
    example: "Você só bate na mesma tecla, muda o assunto.",
  },
  {
    id: "dormir-no-ponto",
    text: "Dormir no ponto",
    meaning: "Perder uma oportunidade por distração ou descuido.",
    origin:
      "A origem é incerta. Talvez venha do ponto de espera de quem vigiava ou aguardava algo, mas isso não é confirmado.",
    why: "Quem dorme no ponto perde o que passa. A chance vem e vai embora sem ser notada.",
    example: "Dormi no ponto e outro candidato levou a vaga.",
  },
  {
    id: "cair-de-paraquedas",
    text: "Cair de paraquedas",
    meaning: "Chegar em um lugar ou situação sem conhecer nada sobre ela.",
    origin:
      "A origem não é documentada. A imagem é moderna e vem do salto de paraquedas.",
    why: "Quem cai de paraquedas aparece de repente, sem saber onde está nem o que acontece.",
    example: "Cheguei de paraquedas na reunião e não entendi nada.",
  },
  {
    id: "quem-conta-um-conto-aumenta-um-ponto",
    text: "Quem conta um conto aumenta um ponto",
    meaning:
      "Quem repassa uma história costuma exagerar e acrescentar detalhes.",
    origin:
      "A origem não é documentada. É um ditado popular, com rima fácil de lembrar.",
    why: "Cada pessoa que repete uma história adiciona algo. No fim, ela fica bem diferente do que foi.",
    example:
      "A história já mudou três vezes. Quem conta um conto aumenta um ponto.",
  },
  {
    id: "falar-pelos-cotovelos",
    text: "Falar pelos cotovelos",
    meaning: "Falar demais, sem parar.",
    origin:
      "A origem é incerta. Não há registro seguro. A frase tem uso comum no Brasil e em Portugal.",
    why: "A imagem exagera: parece que até o cotovelo fala. A pessoa não consegue ficar calada.",
    example: "Meu tio fala pelos cotovelos, ninguém consegue interromper.",
  },
  {
    id: "quem-nao-arrisca-nao-petisca",
    text: "Quem não arrisca não petisca",
    meaning: "Sem correr riscos, é difícil conseguir algo bom.",
    origin:
      "A origem não é documentada. É um ditado popular que brinca com a rima entre arriscar e petiscar.",
    why: "Petiscar é saborear coisas boas. Só prova quem se arrisca a tentar.",
    example:
      "Vou me candidatar mesmo sem experiência. Quem não arrisca não petisca.",
  },
  {
    id: "vaso-ruim-nao-quebra",
    text: "Vaso ruim não quebra",
    meaning: "Gente de saúde frágil ou pessoa mal vista costuma durar muito.",
    origin:
      "A origem não é documentada. É um ditado popular, sem autoria registrada.",
    why: "O vaso bom é cuidado e acaba quebrando, enquanto o ruim fica ali firme. É um dito irônico sobre a sorte.",
    example:
      "Ela já teve de tudo e está firme aos oitenta. Vaso ruim não quebra.",
  },
  {
    id: "mao-na-roda",
    text: "Mão na roda",
    meaning: "Algo que ajuda muito e facilita uma tarefa.",
    origin:
      "A origem é incerta. Costuma-se imaginar a roda de carroça, que precisa de ajuda para sair do lugar, mas não há confirmação.",
    why: "Uma mão na roda ajuda a empurrar o que está atolado. Então é ajuda na hora certa.",
    example: "Esse aplicativo é uma mão na roda para organizar as contas.",
  },
  {
    id: "cobra-criada",
    text: "Cobra criada",
    meaning: "Pessoa esperta, experiente e que não se deixa enganar.",
    origin:
      "A origem não é documentada. A imagem é de quem foi criado entre cobras e sabe se proteger.",
    why: "Quem cresce no meio de cobras aprende todos os truques. É um elogio à malandragem.",
    example: "Ele é cobra criada no mercado, ninguém passa a perna nele.",
  },
  {
    id: "pedra-no-sapato",
    text: "Pedra no sapato",
    meaning: "Problema pequeno e persistente que atrapalha.",
    origin: "A origem não é documentada. A imagem é de uso cotidiano.",
    why: "Uma pedrinha dentro do sapato incomoda a cada passo. Não é grave, mas não deixa esquecer.",
    example: "Esse atraso nas entregas é uma pedra no sapato da empresa.",
  },
  {
    id: "fechar-com-chave-de-ouro",
    text: "Fechar com chave de ouro",
    meaning: "Terminar algo de forma brilhante.",
    origin:
      "A origem não é documentada. A imagem sugere uma chave valiosa que tranca o evento.",
    why: "A chave de ouro é o ponto final. Terminar assim é encerrar com brilho.",
    example: "A banda fechou o show com chave de ouro.",
  },
  {
    id: "gastar-vela-com-mau-defunto",
    text: "Gastar vela com mau defunto",
    meaning: "Gastar esforço ou dinheiro com algo ou alguém que não merece.",
    origin:
      "A origem é incerta. A imagem remete aos velórios de antigamente, em que as velas eram caras e ficavam acesas junto ao corpo.",
    why: "A vela é um gasto que só faz sentido para um defunto que valha a homenagem. Para um mau, é desperdício.",
    example: "Não vou gastar vela com mau defunto. Ele não merece meu tempo.",
  },
  {
    id: "dar-no-em-pingo-dagua",
    text: "Dar nó em pingo d'água",
    meaning: "Ser muito esperto ou habilidoso, capaz de fazer o impossível.",
    origin:
      "A origem não é documentada. É uma imagem exagerada de uso popular.",
    why: "Dar nó em algo que não tem forma é impossível. Quem faz isso é capaz de tudo.",
    example:
      "O mecânico dá nó em pingo d'água, consertou o que ninguém conseguiu.",
  },
  {
    id: "cair-na-labia",
    text: "Cair na lábia",
    meaning: "Ser convencido ou enganado pela conversa esperta de alguém.",
    origin:
      "A origem não é documentada. Lábia vem de lábio e tem uso popular, sem criador conhecido.",
    why: "A lábia é a conversa que enrola. Cair nela é aceitar o papo sem desconfiar.",
    example: "Caí na lábia do vendedor e comprei o plano mais caro.",
  },
  {
    id: "dar-bola-fora",
    text: "Dar bola fora",
    meaning: "Cometer um erro ou dizer algo inadequado.",
    origin:
      "A origem não é documentada. A imagem vem do futebol, em que a bola sai do campo.",
    why: "A bola fora é um chute sem destino. Na conversa, é a frase que não devia ter saído.",
    example: "Perguntei pra ela se estava grávida e dei bola fora.",
  },
  {
    id: "entrar-pelo-cano",
    text: "Entrar pelo cano",
    meaning: "Sair-se mal; acabar em prejuízo ou fracasso.",
    origin: "A origem é incerta. É gíria popular, sem registro seguro.",
    why: "O que entra pelo cano vai embora no ralo. Então a situação se perdeu.",
    example: "O projeto entrou pelo cano com o corte de verba.",
  },
  {
    id: "puxar-o-tapete",
    text: "Puxar o tapete",
    meaning: "Trair alguém ou prejudicá-lo quando ele menos espera.",
    origin:
      "A origem não é documentada. A imagem é de quem fica desequilibrado ao ter o tapete puxado.",
    why: "Quem está em pé no tapete cai quando ele é puxado. A traição pega de surpresa.",
    example: "Meu colega puxou meu tapete e ficou com a promoção.",
  },
  {
    id: "dar-de-ombros",
    text: "Dar de ombros",
    meaning: "Mostrar indiferença ou desinteresse diante de algo.",
    origin:
      "A origem não é documentada. A imagem é do gesto físico, comum em todas as línguas.",
    why: "Levantar os ombros é um jeito de dizer que tanto faz. A expressão descreve o gesto.",
    example: "Ela deu de ombros quando soube da notícia.",
  },
  {
    id: "quem-nao-tem-cao-caca-com-gato",
    text: "Quem não tem cão caça com gato",
    meaning: "Quem não tem o ideal se vira com o que tem.",
    origin:
      "A origem não é documentada. É um ditado popular com imagem da caça.",
    why: "Cão é o caçador clássico. Sem ele, o gato serve. A frase fala de improvisar.",
    example: "Sem carro, fui de bicicleta. Quem não tem cão caça com gato.",
  },
  {
    id: "pau-que-nasce-torto",
    text: "Pau que nasce torto nunca se endireita",
    meaning: "Quem tem um defeito de formação dificilmente muda quando adulto.",
    origin:
      "A origem não é documentada. É um ditado popular, com imagem de carpintaria.",
    why: "A madeira torta desde jovem cresce assim. A frase diz que hábitos formados cedo ficam.",
    example: "Ele sempre foi assim. Pau que nasce torto nunca se endireita.",
  },
  {
    id: "ao-vencedor-as-batatas",
    text: "Ao vencedor, as batatas",
    meaning: "Quem vence fica com os benefícios, e só isso importa.",
    origin:
      "A frase foi popularizada por Machado de Assis no romance Quincas Borba, de 1891, na filosofia do Humanitismo, de Quincas Borba.",
    why: "Na história, as batatas são o prêmio de quem vence a disputa. A frase mostra a lógica cruel do ganhador.",
    example:
      "Se o time ganhou, ao vencedor as batatas, a premiação é toda dele.",
  },
  {
    id: "cada-cabeca-uma-sentenca",
    text: "Cada cabeça, uma sentença",
    meaning: "Cada pessoa pensa de um jeito.",
    origin:
      "Lembra uma frase latina atribuída ao comediógrafo Terêncio, que diz algo como 'tantos homens, tantas opiniões', e o ditado seguiu no português.",
    why: "Cada cabeça julga como quer. A frase explica por que é difícil chegar a um consenso.",
    example: "Na reunião foi um debate sem fim. Cada cabeça, uma sentença.",
  },
  {
    id: "quem-avisa-amigo-e",
    text: "Quem avisa amigo é",
    meaning:
      "Quem alerta sobre um perigo está agindo como amigo, e você foi avisado.",
    origin:
      "A origem não é documentada. É um dito popular, muito usado como advertência.",
    why: "Só amigo se preocupa a ponto de avisar. A frase também serve para dizer: não diga que não avisei.",
    example: "Cuidado com esse negócio. Quem avisa amigo é.",
  },
  {
    id: "dar-perolas-aos-porcos",
    text: "Dar pérolas aos porcos",
    meaning: "Oferecer algo valioso a quem não sabe dar valor.",
    origin:
      "Vem da Bíblia, no Evangelho de Mateus (7:6), na fala atribuída a Jesus no Sermão da Montanha.",
    why: "Porco não distingue pérola de lama. O que tem valor se perde diante de quem não entende.",
    example: "Explicar poesia para ele é dar pérolas aos porcos.",
  },
  {
    id: "soltar-os-cachorros",
    text: "Soltar os cachorros",
    meaning: "Falar de forma agressiva, com ira, contra alguém.",
    origin:
      "A origem não é documentada. A imagem é de atiçar os cães contra alguém.",
    why: "Quem solta os cachorros quer que eles ataquem. As palavras duras fazem o mesmo estrago.",
    example: "Ele soltou os cachorros em cima do garçom por causa do atraso.",
  },
  {
    id: "comer-poeira",
    text: "Comer poeira",
    meaning: "Ficar para trás, perder para alguém mais rápido.",
    origin:
      "A origem não é documentada. A imagem vem de corridas, em que quem vem atrás engole a poeira de quem passa.",
    why: "Quem corre atrás respira a poeira do líder. É uma derrota visível e incômoda.",
    example: "O time rival correu o jogo todo e a gente comeu poeira.",
  },
  {
    id: "conto-do-vigario",
    text: "Conto do vigário",
    meaning:
      "Golpe em que o enganador usa uma história falsa para tirar vantagem.",
    origin:
      "A origem é incerta. A versão mais conhecida fala de dois golpistas que disputam uma imagem de santo e enganam um vigário, mas não há registro confiável.",
    why: "O vigário é visto como pessoa de confiança. Enganá-lo mostra que ninguém escapa do golpe.",
    example: "Caiu no conto do vigário e pagou por um carro que não existia.",
  },
  {
    id: "quebrar-a-cara",
    text: "Quebrar a cara",
    meaning: "Fracassar ou se dar mal depois de confiar demais.",
    origin:
      "A origem não é documentada. A imagem é de quem leva um tombo no rosto.",
    why: "Quem quebra a cara é quem foi com confiança e tropeçou. O orgulho também se machuca.",
    example: "Apostou tudo e quebrou a cara.",
  },
  {
    id: "descer-do-salto",
    text: "Descer do salto",
    meaning: "Abandonar a arrogância e voltar a agir com humildade.",
    origin:
      "A origem não é documentada. A imagem é de quem se eleva com um salto alto e depois volta ao chão.",
    why: "O salto deixa a pessoa mais alta do que realmente é. Descer dele é voltar ao tamanho real.",
    example: "Ela precisou descer do salto para pedir ajuda.",
  },
  {
    id: "ficar-de-molho",
    text: "Ficar de molho",
    meaning: "Ficar parado, em repouso ou esperando.",
    origin:
      "A origem não é documentada. A imagem vem da cozinha, em que o feijão e outros alimentos ficam de molho antes do preparo.",
    why: "Um alimento de molho espera para amolecer. A pessoa de molho espera para se recuperar.",
    example: "Torci o tornozelo e vou ficar de molho uma semana.",
  },
  {
    id: "santo-do-pau-oco",
    text: "Santo do pau oco",
    meaning: "Pessoa que parece honesta, mas esconde más intenções.",
    origin:
      "A origem é incerta. A versão mais comum fala de santos de madeira ocos que escondiam ouro contrabandeado no Brasil colonial. A história é conhecida, mas não é confirmada.",
    why: "Por fora, é um santo. Por dentro, esconde algo. A imagem serve para quem finge virtude.",
    example: "Ele fala de honestidade, mas é um santo do pau oco.",
  },
  {
    id: "fazer-o-diabo-a-quatro",
    text: "Fazer o diabo a quatro",
    meaning: "Fazer de tudo, com muito empenho, para conseguir algo.",
    origin:
      "A origem é incerta. Vem de Portugal, e há hipóteses sobre uma antiga peça teatral, nenhuma confirmada.",
    why: "Aqui o diabo aparece como símbolo de energia extrema. O número quatro reforça o exagero.",
    example: "Fez o diabo a quatro para entregar o projeto a tempo.",
  },
  {
    id: "farinha-do-mesmo-saco",
    text: "Farinha do mesmo saco",
    meaning: "Pessoas com as mesmas características, geralmente ruins.",
    origin:
      "A origem não é documentada. A imagem vem da farinha no saco, e a frase tem uso popular antigo.",
    why: "Se vêm do mesmo saco, a farinha é igual. O sentido costuma ser negativo.",
    example: "Os dois prometem e não cumprem, são farinha do mesmo saco.",
  },
  {
    id: "mosca-azul",
    text: "Ser picado pela mosca azul",
    meaning: "Ficar deslumbrado com o poder, sobretudo em política.",
    origin:
      "A origem é incerta. A imagem sugere uma mosca que picaria alguém e mudaria seu comportamento, mas não há origem confirmada.",
    why: "A picada de mosca deixa o corpo alterado. A mosca azul altera a cabeça de quem toca o poder.",
    example: "Depois de eleito, foi picado pela mosca azul e mudou.",
  },
  {
    id: "ficar-sem-chao",
    text: "Ficar sem chão",
    meaning: "Ficar abalado e sem saber o que fazer depois de um choque.",
    origin:
      "A origem não é documentada. A imagem é de quem perde o apoio sob os pés.",
    why: "Sem chão, não há onde se apoiar. A pessoa se sente perdida e sem rumo.",
    example: "Com a notícia da demissão, fiquei sem chão.",
  },
  {
    id: "de-vento-em-popa",
    text: "Ir de vento em popa",
    meaning: "Estar indo muito bem, com tudo dando certo.",
    origin:
      "Vem da navegação: popa é a parte de trás do barco, e o vento que sopra por ela empurra a embarcação para a frente.",
    why: "Com o vento atrás, o barco avança rápido sem esforço. A vida também anda assim quando tudo ajuda.",
    example: "A empresa vai de vento em popa desde o lançamento.",
  },
  {
    id: "mandar-ver",
    text: "Mandar ver",
    meaning: "Fazer algo com vontade e sem medo.",
    origin: "A origem não é documentada. É gíria popular, de origem incerta.",
    why: "Mandar é ordenar e ver é conferir. A frase junta ação decidida com confiança.",
    example: "Pode mandar ver no solo, o público está ansioso.",
  },
  {
    id: "por-o-dedo-na-ferida",
    text: "Pôr o dedo na ferida",
    meaning: "Tocar no ponto mais sensível de um assunto.",
    origin: "A origem não é documentada. A imagem é física e direta.",
    why: "Tocar uma ferida dói. Falar do ponto sensível também incomoda.",
    example: "Quando falou da herança, ele pôs o dedo na ferida.",
  },
  {
    id: "ficar-com-o-pe-atras",
    text: "Ficar com o pé atrás",
    meaning: "Desconfiar, ter receio de algo.",
    origin:
      "A origem não é documentada. A imagem é de quem se prepara para recuar.",
    why: "Com o pé de trás firme, é fácil dar um passo para trás. É a postura de quem está desconfiado.",
    example: "Fiquei com o pé atrás por causa da oferta tão boa.",
  },
  {
    id: "sangue-de-barata",
    text: "Ter sangue de barata",
    meaning: "Ser calmo demais e não reagir a provocações ou injustiças.",
    origin:
      "A origem não é documentada. A imagem sugere que o animal não tem calor ou emoção.",
    why: "Sangue de barata é visto como frio. A pessoa parece insensível às ofensas.",
    example:
      "Levou xingamento do chefe e não disse nada, tem sangue de barata.",
  },
  {
    id: "entregar-os-pontos",
    text: "Entregar os pontos",
    meaning: "Desistir, reconhecer a derrota.",
    origin:
      "A origem é incerta. A frase pode vir de jogos ou apostas em que os pontos eram entregues ao vencedor, mas não há confirmação.",
    why: "Entregar os pontos é abrir mão do que se tinha ganho. É reconhecer o fim da disputa.",
    example: "Depois de seis horas de partida, ele entregou os pontos.",
  },
  {
    id: "tirar-o-corpo-fora",
    text: "Tirar o corpo fora",
    meaning: "Evitar um compromisso ou responsabilidade.",
    origin: "A origem não é documentada. A imagem é de quem desvia do golpe.",
    why: "Tirar o corpo da linha de fogo protege quem se esquiva. O problema fica para os outros.",
    example: "Na hora de pagar a conta, ele tirou o corpo fora.",
  },
  {
    id: "cheio-de-nove-horas",
    text: "Estar cheio de nove horas",
    meaning: "Estar cheio de frescura, melindres ou exigências.",
    origin:
      "A origem é incerta. Há hipóteses sobre horário ou rotina, mas nenhuma comprovada.",
    why: "A expressão sugere alguém que vive atento a horas e regras. O significado de frescura ficou.",
    example: "Ela está cheia de nove horas só porque o café esfriou.",
  },
  {
    id: "jogar-agua-na-fervura",
    text: "Jogar água na fervura",
    meaning: "Acalmar os ânimos em uma situação tensa.",
    origin:
      "A origem não é documentada. A imagem vem da cozinha: água fria baixa a fervura.",
    why: "A água fria para o fervilhar da panela. Uma palavra calma faz o mesmo na discussão.",
    example: "Ela jogou água na fervura antes que a briga crescesse.",
  },
  {
    id: "levar-na-esportiva",
    text: "Levar na esportiva",
    meaning: "Aceitar uma derrota ou uma brincadeira com bom humor.",
    origin:
      "A origem não é documentada. A imagem vem do esporte, em que o bom perdedor aceita o resultado.",
    why: "No esporte, a derrota faz parte. Quem leva na esportiva não guarda mágoa.",
    example: "Perdi o jogo e levei na esportiva.",
  },
  {
    id: "dar-uma-de-joao-sem-braco",
    text: "Dar uma de João sem braço",
    meaning: "Fingir que não sabe ou não pode, para escapar de um dever.",
    origin:
      "A origem não é documentada. Não há registro seguro do personagem ou da história.",
    why: "A imagem é de alguém que alega não ter braços para não fazer o que lhe cabe. É a desculpa esperta e conveniente.",
    example:
      "Não vem dar uma de João sem braço, você sabe muito bem como isso funciona.",
  },
  {
    id: "matar-a-cobra-e-mostrar-o-pau",
    text: "Matar a cobra e mostrar o pau",
    meaning: "Resolver um problema e apresentar a prova de que foi resolvido.",
    origin:
      "A origem não é documentada. É dito muito no interior, e a imagem é de quem prova o feito.",
    why: "Quem mata a cobra mostra o pedaço de pau usado ou a própria cobra. Sem prova, ninguém acredita no feito.",
    example:
      "Vamos matar a cobra e mostrar o pau: conserta o bug e anexa o teste.",
  },
  {
    id: "esperar-sentado",
    text: "Esperar sentado",
    meaning: "Ter de aguardar muito tempo por algo que talvez nem aconteça.",
    origin: "A origem não é documentada. Não há origem documentada.",
    why: "Quem espera sentado se prepara para uma espera longa. A frase costuma ser irônica, dizendo que a demora será grande.",
    example:
      "Se você acha que ele vai devolver o dinheiro, pode esperar sentado.",
  },
  {
    id: "cozinhar-o-galo",
    text: "Cozinhar o galo",
    meaning: "Enrolar e adiar o que deveria ser feito logo.",
    origin:
      "A origem não é documentada. Não há origem documentada. A imagem é do galo velho, que demora a ficar macio.",
    why: 'Galo velho leva horas para ficar no ponto. Quem "cozinha o galo" também vai levando devagar e sem resolver.',
    example: "Parem de cozinhar o galo e me deem uma resposta.",
  },
  {
    id: "pendurar-as-chuteiras",
    text: "Pendurar as chuteiras",
    meaning: "Parar de jogar futebol ou se aposentar de uma atividade.",
    origin:
      "A origem não é documentada. É imagem do futebol, que se generalizou, sem data conhecida.",
    why: "O jogador pendura as chuteiras na parede quando para de jogar. O gesto simboliza o fim da carreira.",
    example: "Aos 38 anos, o goleiro decidiu pendurar as chuteiras.",
  },
  {
    id: "chutar-o-pau-da-barraca",
    text: "Chutar o pau da barraca",
    meaning: "Perder a paciência e abandonar ou estragar tudo de repente.",
    origin:
      "A origem não é documentada. A imagem pode vir de barracas de feira ou de camping, sem confirmação.",
    why: "Derrubar o mastro desmonta a barraca toda. Quem faz isso põe fim ao que estava de pé.",
    example: "Cansou da reunião e chutou o pau da barraca.",
  },
  {
    id: "mandar-as-favas",
    text: "Mandar às favas",
    meaning: "Descartar algo ou alguém com irritação.",
    origin:
      "A origem é incerta. A frase é antiga em português. A ligação com as favas, leguminosas, não é bem documentada.",
    why: "A ideia é de mandar para longe, para um lugar sem importância. É um modo educado de xingar.",
    example: "Cansei de tudo e mandei o regulamento às favas.",
  },
  {
    id: "entrar-de-gaiato-no-navio",
    text: "Entrar de gaiato no navio",
    meaning: "Participar de algo sem ter sido chamado, só para se aproveitar.",
    origin:
      'A origem é incerta. "Gaiato" era o rapazote que embarcava de carona. A ideia é de quem entra sem convite.',
    why: "Um gaiato num navio não tem função, só ocupa lugar. É o clássico penetra no que não é dele.",
    example: "Ele entrou de gaiato no navio e ganhou parte do prêmio.",
  },
  {
    id: "cuspir-no-prato-que-comeu",
    text: "Cuspir no prato que comeu",
    meaning: "Ser ingrato com quem lhe ajudou ou lhe deu sustento.",
    origin:
      "A origem não é documentada. É imagem antiga e universal, sem origem exata.",
    why: "O prato é o que alimenta. Quem o suja ofende a fonte que o manteve.",
    example: "Falar mal da empresa que te formou é cuspir no prato que comeu.",
  },
  {
    id: "estar-no-mundo-da-lua",
    text: "Estar no mundo da lua",
    meaning: "Estar distraído, pensando em outra coisa.",
    origin:
      "A origem não é documentada. Há quem ligue à lua como símbolo de sonho, mas sem prova.",
    why: "Quem vive na lua está longe do chão. A mente flutua e perde o contato com o que acontece ao redor.",
    example: "Desculpa, eu estava no mundo da lua. Pode repetir?",
  },
  {
    id: "esticar-as-canelas",
    text: "Esticar as canelas",
    meaning: "Morrer.",
    origin:
      "A origem não é documentada. É um modo irônico e leve de falar da morte.",
    why: "Ao morrer, o corpo se estica. A frase usa essa imagem com humor para suavizar o assunto.",
    example:
      "Se continuar nesse ritmo, vai esticar as canelas antes dos quarenta.",
  },
  {
    id: "bom-de-garfo",
    text: "Bom de garfo",
    meaning: "Que come muito e com gosto.",
    origin:
      "A origem não é documentada. A imagem é a do garfo como símbolo do ato de comer.",
    why: 'O garfo representa a refeição. Ser "bom" nele é ter apetite e prazer em comer.',
    example: "Meu sogro é bom de garfo, repete o prato duas vezes.",
  },
  {
    id: "pagar-para-ver",
    text: "Pagar para ver",
    meaning: "Desafiar alguém a provar o que diz.",
    origin:
      "A origem não é documentada. Vem possivelmente do jogo de cartas, em que se aposta para ver a mão do adversário.",
    why: "No pôquer, pagar para ver é cobrir a aposta e mostrar as cartas. Na vida, é duvidar do blefe e cobrar a prova.",
    example: "Você diz que consegue? Então eu pago para ver.",
  },
  {
    id: "dar-bolo",
    text: "Dar bolo",
    meaning: "Não aparecer a um compromisso marcado.",
    origin:
      "A origem não é documentada. É gíria popular. Não há versão segura do porquê do bolo.",
    why: "Quem leva o bolo fica esperando como na festa em que a pessoa não chegou. A ideia é de um convite desperdiçado.",
    example: "Marquei com ela às oito, mas ela deu bolo.",
  },
  {
    id: "passar-batido",
    text: "Passar batido",
    meaning: "Não ser notado ou deixar passar sem atenção.",
    origin:
      "A origem não é documentada. A imagem é de algo que passa depressa, sem ser visto.",
    why: '"Batido" lembra rapidez. O que passa assim nem é percebido por quem está olhando.',
    example: "O erro passou batido pela revisão.",
  },
  {
    id: "cha-de-cadeira",
    text: "Chá de cadeira",
    meaning: "Longa espera por atendimento ou por alguém.",
    origin: "A origem não é documentada. Não há origem documentada.",
    why: "Quem espera sentado, sem fazer nada, está tomando chá de cadeira: não há chá, só a cadeira.",
    example: "Levei chá de cadeira duas horas no consultório.",
  },
  {
    id: "ter-o-rabo-preso",
    text: "Ter o rabo preso",
    meaning: "Ter algo a esconder e, por isso, não poder criticar ninguém.",
    origin:
      "A origem não é documentada. A imagem é a do animal que não escapa, amarrado pelo rabo.",
    why: "Quem está preso pelo rabo não escapa. Seus podres o impedem de agir ou de falar livremente.",
    example: "Ele não critica o chefe porque tem o rabo preso.",
  },
  {
    id: "lagrimas-de-crocodilo",
    text: "Lágrimas de crocodilo",
    meaning: "Choro falso, sem sinceridade.",
    origin:
      "A origem é incerta. A crença antiga dizia que o crocodilo chora enquanto devora a presa. É lenda, mas virou símbolo.",
    why: 'O crocodilo "chora" e mata ao mesmo tempo. A imagem serve para quem finge dor enquanto prejudica o outro.',
    example: "Ele chorou no enterro, mas era lágrima de crocodilo.",
  },
  {
    id: "bode-expiatorio",
    text: "Bode expiatório",
    meaning: "Pessoa que leva a culpa pelos erros de outros.",
    origin:
      "A origem é incerta. Vem de um ritual judaico descrito na Bíblia, em que um bode levava simbolicamente os pecados do povo para o deserto.",
    why: "O bode era carregado de culpas alheias e expulso. Hoje, é quem paga pelo que outros fizeram.",
    example: "Escolheram o estagiário como bode expiatório do prejuízo.",
  },
  {
    id: "pomo-da-discordia",
    text: "Pomo da discórdia",
    meaning: "Motivo central de uma briga ou desentendimento.",
    origin:
      "A origem é incerta. Vem de um mito grego em que a deusa Éris jogou uma maçã dourada entre três deusas, causando uma disputa.",
    why: "A maçã era o objeto da briga. Pomo é fruto, e a expressão chama de pomo tudo o que faz as pessoas brigarem.",
    example: "A herança foi o pomo da discórdia entre os irmãos.",
  },
  {
    id: "elefante-branco",
    text: "Elefante branco",
    meaning: "Obra ou bem caro, de manutenção pesada e sem utilidade real.",
    origin:
      "A origem é incerta. Conta-se que, no Sião, reis davam elefantes brancos a cortesãos que não podiam recusar nem sustentar. A história é lenda popular.",
    why: "O animal sagrado era caro e impossível de recusar. Hoje, é a obra pública inútil que só dá despesa.",
    example:
      "O estádio virou um elefante branco, e a cidade ainda paga a conta.",
  },
  {
    id: "calcanhar-de-aquiles",
    text: "Calcanhar de Aquiles",
    meaning: "O ponto fraco de alguém ou de algo forte.",
    origin:
      "A origem é incerta. Vem da mitologia grega. Aquiles era invulnerável, menos no calcanhar, por onde foi ferido de morte.",
    why: "O único ponto frágil de um herói derrubou sua fama. Por isso, vale para qualquer fraqueza escondida.",
    example: "A saída de bola é o calcanhar de Aquiles do time.",
  },
  {
    id: "trocar-seis-por-meia-duzia",
    text: "Trocar seis por meia dúzia",
    meaning: "Fazer uma mudança que não altera nada no resultado.",
    origin:
      "A origem não é documentada. A graça é matemática: seis e meia dúzia são iguais.",
    why: "Seis e meia dúzia são a mesma quantidade. Trocar um pelo outro não muda coisa alguma.",
    example:
      "Mudar o nome do projeto sem mudar o processo é trocar seis por meia dúzia.",
  },
  {
    id: "sem-eira-nem-beira",
    text: "Sem eira nem beira",
    meaning: "Sem dinheiro, bens ou posses.",
    origin:
      "A origem é incerta. Eira era o terreiro onde se secava o grão. A beira, em uma das versões, era o beiral do telhado. Os dois símbolos indicam quem possuía terras e casa.",
    why: "Quem não tinha eira nem beira não tinha lavoura, nem casa. Era o mais pobre dos pobres.",
    example: "Chegou sem eira nem beira e hoje tem três lojas.",
  },
  {
    id: "de-mao-beijada",
    text: "De mão beijada",
    meaning: "De graça, sem esforço de quem recebe.",
    origin:
      "A origem não é documentada. Vem do costume de beijar a mão de quem concede um favor, sem confirmação histórica.",
    why: 'Beijava-se a mão do benfeitor em agradecimento. Receber algo "de mão beijada" é ganhar como favor.',
    example: "Ele ganhou o cargo de mão beijada, sem concurso.",
  },
  {
    id: "ficar-com-cara-de-tacho",
    text: "Ficar com cara de tacho",
    meaning: "Ficar sem graça, decepcionado ou sem reação.",
    origin:
      "A origem não é documentada. Não há origem documentada. Tacho é a grande panela de cobre.",
    why: "A cara fica sem expressão e cheia de espanto. A imagem é a de quem ficou vazio como um tacho.",
    example: "Fiquei com cara de tacho quando vi que a loja tinha fechado.",
  },
  {
    id: "dar-com-a-cara-na-porta",
    text: "Dar com a cara na porta",
    meaning: "Chegar a um lugar e encontrá-lo fechado, ou ser recusado.",
    origin:
      "A origem não é documentada. É imagem simples e direta, sem origem registrada.",
    why: "O corpo bate na porta que ninguém abriu. A frase fala de frustração por uma negativa ou por esforço perdido.",
    example: "Fui ao banco e dei com a cara na porta, estava em greve.",
  },
  {
    id: "seguir-o-fio-da-meada",
    text: "Seguir o fio da meada",
    meaning: "Acompanhar o raciocínio ou a pista até encontrar a resposta.",
    origin:
      "A origem é incerta. Costuma ser ligada ao mito de Teseu, que usou um fio para sair do labirinto. A relação com a meada do fiandeiro também é possível.",
    why: "Sem o fio, a meada se emaranha. Quem o segue não se perde e chega ao fim do problema.",
    example: "Segui o fio da meada e descobri onde o dinheiro tinha ido parar.",
  },
  {
    id: "de-medico-e-louco-todo-mundo-tem-um-pouco",
    text: "De médico e louco todo mundo tem um pouco",
    meaning: "Todo mundo se acha entendido de saúde e tem suas manias.",
    origin:
      "A origem não é documentada. É ditado antigo, usado também em Portugal.",
    why: "Todos dão palpite de médico, e todos têm um pouco de maluquice. É um jeito de rir da condição humana.",
    example:
      "Eu tomo chá para tudo. De médico e louco todo mundo tem um pouco.",
  },
  {
    id: "jogar-para-a-torcida",
    text: "Jogar para a torcida",
    meaning: "Agir para agradar ao público, e não para fazer o melhor.",
    origin:
      "A origem não é documentada. É expressão do futebol, usada hoje em outros assuntos.",
    why: "O jogador faz firula para a arquibancada em vez de passar a bola. Quem joga para a torcida busca aplauso.",
    example: "O político só fez isso para jogar para a torcida.",
  },
  {
    id: "queimar-o-filme",
    text: "Queimar o filme",
    meaning: "Estragar a própria imagem ou a reputação perante os outros.",
    origin:
      "A origem não é documentada. Pode vir do cinema, em que o filme queimado se perde, mas isso não é comprovado.",
    why: "Um filme queimado não se recupera. Quem queima o filme perde a credibilidade que tinha.",
    example: "Chegou bêbado na entrevista e queimou o filme.",
  },
  {
    id: "cortar-o-mal-pela-raiz",
    text: "Cortar o mal pela raiz",
    meaning: "Resolver um problema na causa, e não só nos sintomas.",
    origin:
      "A origem não é documentada. A imagem é da jardinagem e da lavoura.",
    why: "Cortar só o galho faz a erva daninha rebrotar. Arrancar a raiz acaba com ela de vez.",
    example:
      "Vamos cortar o mal pela raiz e corrigir o processo, não só o erro.",
  },
  {
    id: "tirar-leite-de-pedra",
    text: "Tirar leite de pedra",
    meaning: "Conseguir algo de onde não há nada, com muito esforço.",
    origin:
      "A origem não é documentada. É imagem do impossível, de uso antigo.",
    why: "Pedra não tem leite. Quem tira leite dela faz o milagre de fazer muito com quase nada.",
    example: "Ela faz milagre, tira leite de pedra com esse orçamento.",
  },
  {
    id: "arregacar-as-mangas",
    text: "Arregaçar as mangas",
    meaning: "Preparar-se para trabalhar duro.",
    origin:
      "A origem não é documentada. A imagem é a de quem dobra as mangas para não sujar a roupa antes de trabalhar.",
    why: "Dobrar as mangas é o gesto de quem vai pegar firme. Vira símbolo de disposição para o trabalho.",
    example: "Hora de arregaçar as mangas e terminar o projeto.",
  },
  {
    id: "comprar-briga",
    text: "Comprar briga",
    meaning: "Assumir uma briga que não é sua.",
    origin:
      "A origem não é documentada. Não há origem documentada. A imagem é de comércio.",
    why: "Brigas viram mercadoria que se compra sem precisar. Quem compra paga o preço de um conflito alheio.",
    example: "Não vou comprar briga por causa disso.",
  },
  {
    id: "acender-uma-vela-para-deus-e-outra-para-o-diabo",
    text: "Acender uma vela para Deus e outra para o diabo",
    meaning: "Agradar a lados opostos para não se arriscar com nenhum.",
    origin:
      "A origem não é documentada. É ditado religioso popular, de origem não registrada.",
    why: "Para garantir proteção, a pessoa reza para os dois lados. Quem faz isso não se compromete com nenhum.",
    example:
      "Ele elogia os dois candidatos: acende uma vela para Deus e outra para o diabo.",
  },
  {
    id: "roupa-suja-se-lava-em-casa",
    text: "Roupa suja se lava em casa",
    meaning: "Problemas privados devem ser resolvidos longe de olhos alheios.",
    origin:
      "A origem não é documentada. É ditado de sabedoria popular, de origem não registrada.",
    why: "A roupa suja é a intimidade que ninguém quer expor. Lavá-la em casa é resolver os problemas sem plateia.",
    example: "Vamos conversar no particular, roupa suja se lava em casa.",
  },
  {
    id: "cutucar-onca-com-vara-curta",
    text: "Cutucar onça com vara curta",
    meaning: "Provocar alguém perigoso, correndo risco desnecessário.",
    origin:
      "A origem não é documentada. A imagem é de quem se expõe ao ataque, sem origem comprovada.",
    why: "A vara curta obriga a ficar perto da onça. Provocar o forte de perto é pedir confusão.",
    example: "Discutir com o chefe é cutucar onça com vara curta.",
  },
  {
    id: "nem-tudo-que-reluz-e-ouro",
    text: "Nem tudo que reluz é ouro",
    meaning: "As aparências enganam.",
    origin:
      "A origem é incerta. A ideia é antiga e aparece em textos medievais e em Shakespeare, em O Mercador de Veneza.",
    why: "O ouro brilha, mas outros materiais também brilham. Não se deve julgar pelo brilho.",
    example: "O apartamento parecia perfeito, mas nem tudo que reluz é ouro.",
  },
  {
    id: "pior-a-emenda-que-o-soneto",
    text: "Pior a emenda que o soneto",
    meaning: "A tentativa de corrigir algo deixa o resultado ainda pior.",
    origin:
      "A origem não é documentada. A ligação com o soneto, poema com forma fixa, não é documentada.",
    why: "O soneto é um poema curto e delicado. Emendá-lo mal estraga o que já estava aceitável.",
    example: "Tentou consertar a frase e ficou pior a emenda que o soneto.",
  },
  {
    id: "cair-como-um-patinho",
    text: "Cair como um patinho",
    meaning: "Ser enganado com facilidade.",
    origin:
      "A origem não é documentada. A imagem é popular e bem-humorada, sem origem documentada.",
    why: "O patinho segue qualquer um e cai na água sem desconfiar. É a ingenuidade em pessoa.",
    example: "Ele caiu como um patinho no golpe do falso prêmio.",
  },
  {
    id: "pulo-do-gato",
    text: "O pulo do gato",
    meaning:
      "O truque ou segredo que faz toda a diferença e que só o mestre conhece.",
    origin:
      "A origem é incerta. A versão mais contada fala de um gato que ensina o tigre a caçar, mas guarda para si um pulo só dele.",
    why: "O gato ensina quase tudo, menos o golpe decisivo. Por isso o pulo do gato virou o detalhe que só o especialista sabe.",
    example: "Cozinhar é fácil, o pulo do gato é o tempero na hora certa.",
  },
  {
    id: "cao-e-gato",
    text: "Viver como cão e gato",
    meaning: "Brigar o tempo todo com alguém, sem se entender em nada.",
    origin:
      "A origem não é documentada. A imagem vem da fama de rivais entre cães e gatos.",
    why: "Cachorro persegue gato e gato arranha cachorro. Duas pessoas que vivem juntas e se atacam lembram essa dupla.",
    example: "Os dois irmãos vivem como cão e gato desde pequenos.",
  },
  {
    id: "rabo-entre-as-pernas",
    text: "Sair de rabo entre as pernas",
    meaning: "Ir embora humilhado, derrotado ou com vergonha.",
    origin:
      "Vem do comportamento do cachorro que, ao ser repreendido ou ameaçado, encolhe o rabo entre as patas.",
    why: "O cachorro com o rabo entre as pernas mostra medo e submissão. Quem sai assim reconhece a derrota sem dizer nada.",
    example: "O time entrou cheio de pose e saiu de rabo entre as pernas.",
  },
  {
    id: "trabalho-de-formiguinha",
    text: "Trabalho de formiguinha",
    meaning:
      "Trabalho feito aos poucos, com paciência e constância, que no fim rende muito.",
    origin:
      "A imagem vem das formigas, que carregam folhas e grãos em fila, pouco a pouco. A fábula da cigarra e da formiga também elogia esse esforço.",
    why: "Uma formiga carrega pouco, mas o formigueiro junta muito. O esforço miúdo e constante constrói resultado grande.",
    example: "Juntei esse dinheiro em trabalho de formiguinha, mês a mês.",
  },
  {
    id: "matar-um-leao-por-dia",
    text: "Matar um leão por dia",
    meaning: "Enfrentar uma dificuldade grande todo dia, como parte da rotina.",
    origin:
      "A origem não é documentada. A imagem é a do leão como o maior desafio possível, repetido diariamente.",
    why: "Matar um leão já seria façanha. Fazer isso todos os dias descreve uma rotina de esforço pesado.",
    example: "Com três filhos e dois empregos, ela mata um leão por dia.",
  },
  {
    id: "lobo-em-pele-de-cordeiro",
    text: "Lobo em pele de cordeiro",
    meaning: "Pessoa que finge ser inofensiva ou boa, mas tem más intenções.",
    origin:
      "Vem de uma frase do Evangelho de Mateus, que avisa contra falsos profetas que chegam vestidos de ovelhas, mas por dentro são lobos.",
    why: "O lobo veste a pele do cordeiro para chegar perto do rebanho sem espantar. Aparência de manso, intenção de devorar.",
    example: "Parecia gente boa, mas era lobo em pele de cordeiro.",
  },
  {
    id: "ovelha-negra",
    text: "Ovelha negra",
    meaning:
      "Pessoa da família ou do grupo que destoa e é vista como a diferente ou a desajustada.",
    origin:
      "A origem é incerta. A explicação mais comum diz que a lã negra era menos valorizada que a branca.",
    why: "Num rebanho todo branco, a negra salta aos olhos. A imagem aponta quem foge do padrão do grupo.",
    example:
      "Ela é a ovelha negra da família: largou a faculdade para tocar na estrada.",
  },
  {
    id: "bebado-como-um-gamba",
    text: "Bêbado como um gambá",
    meaning: "Muito bêbado, sem controle do corpo.",
    origin:
      "A origem é incerta. Uma explicação diz que o gambá, ao se ameaçar, se finge de morto e fica estatelado, como o bêbado caído.",
    why: "O gambá caído e imóvel lembra o bêbado jogado no chão. A comparação pega pela imagem do corpo mole.",
    example: "Voltou da festa bêbado como um gambá.",
  },
  {
    id: "agua-que-passarinho-nao-bebe",
    text: "Água que passarinho não bebe",
    meaning:
      "Jeito brincalhão de chamar a cachaça ou outra bebida alcoólica forte.",
    origin:
      "A origem não é documentada. É um apelido bem-humorado da cachaça na fala popular.",
    why: "A cachaça é clara como água, mas nenhum passarinho beberia. A piada joga com essa aparência enganosa.",
    example: "Hoje ele só quer saber de água que passarinho não bebe.",
  },
  {
    id: "galinha-dos-ovos-de-ouro",
    text: "Galinha dos ovos de ouro",
    meaning:
      "Fonte de lucro constante que não deve ser destruída por ganância.",
    origin:
      "Vem de uma fábula atribuída a Esopo. Um homem tinha uma galinha que botava ovos de ouro, abriu a ave para pegar todo o ouro de uma vez e ficou sem nada.",
    why: "Matar a galinha para pegar tudo de uma vez acaba com a fonte. A expressão aponta o que dá lucro e merece cuidado.",
    example: "Aquele cliente é a nossa galinha dos ovos de ouro.",
  },
  {
    id: "dormir-com-as-galinhas",
    text: "Dormir com as galinhas",
    meaning: "Ir para a cama muito cedo, ao anoitecer.",
    origin:
      "Vem da vida rural, em que as galinhas se recolhem ao galinheiro e dormem quando escurece.",
    why: "Galinha dorme quando o sol se põe. Quem acompanha esse horário vai para a cama cedíssimo.",
    example: "Meu avô dorme com as galinhas e acorda às quatro.",
  },
  {
    id: "peixe-fora-dagua",
    text: "Peixe fora d'água",
    meaning:
      "Pessoa que se sente deslocada e sem jeito num ambiente que não conhece.",
    origin:
      "A imagem é universal: peixe fora da água se debate e sufoca. Expressões iguais existem em outras línguas, como o inglês.",
    why: "O peixe só respira na água. Fora dela, tudo é estranho e desconfortável, como para quem está em lugar alheio.",
    example:
      "No meio daquele pessoal de finanças, me senti um peixe fora d'água.",
  },
  {
    id: "peixe-morre-pela-boca",
    text: "O peixe morre pela boca",
    meaning:
      "Quem fala demais ou sem pensar se prejudica com as próprias palavras.",
    origin:
      "A origem do ditado não é documentada. A imagem vem da pesca, em que o peixe é fisgado ao morder a isca.",
    why: "O peixe morde a isca e se prende no anzol. Quem abre a boca sem cuidado também se prende no que disse.",
    example:
      "Contou o segredo para o chefe e perdeu o emprego. O peixe morre pela boca.",
  },
  {
    id: "vacas-magras",
    text: "Vacas magras",
    meaning: "Período de escassez, de crise e dinheiro curto.",
    origin:
      "Vem do livro de Gênesis, na Bíblia. José interpreta o sonho do faraó, com sete vacas gordas e sete magras, que representam anos de fartura e de fome.",
    why: "Vaca magra dá pouco leite e pouca carne. O tempo de vacas magras é o tempo de pouco recurso.",
    example: "Com a loja vazia, estamos na fase das vacas magras.",
  },
  {
    id: "curral-eleitoral",
    text: "Curral eleitoral",
    meaning:
      "Região onde um político controla os votos, muitas vezes por favor ou pressão.",
    origin:
      "A origem exata não é documentada. A imagem vem do curral, onde o gado fica fechado e sob o comando do dono.",
    why: "O gado no curral vai para onde o dono manda. Os eleitores presos a um político seguem o mesmo roteiro.",
    example: "A cidade pequena virou curral eleitoral da família.",
  },
  {
    id: "patinho-feio",
    text: "Patinho feio",
    meaning:
      "Pessoa que parece sem graça ou desprezada, mas depois se mostra bela ou talentosa.",
    origin:
      "Vem do conto O Patinho Feio, do escritor dinamarquês Hans Christian Andersen, publicado em 1843.",
    why: "No conto, o patinho rejeitado cresce e vira cisne. A expressão guarda a ideia da transformação.",
    example: "Na escola era o patinho feio, hoje é modelo.",
  },
  {
    id: "papagaio-de-pirata",
    text: "Papagaio de pirata",
    meaning:
      "Pessoa que aparece ao lado de alguém famoso só para ganhar visibilidade.",
    origin:
      "A origem do uso é incerta. A imagem é a do papagaio no ombro do pirata, sempre colado nele. No Brasil, o termo ficou comum para quem aparece atrás de repórteres ao vivo.",
    why: "O papagaio fica no ombro do pirata, grudado e aparecendo. Quem faz isso ao lado de famoso ganha o apelido.",
    example: "Um papagaio de pirata invadiu a transmissão ao vivo.",
  },
  {
    id: "um-passarinho-me-contou",
    text: "Um passarinho me contou",
    meaning: "Jeito de dizer que soube de algo sem revelar quem contou.",
    origin:
      "A origem é incerta. A ideia de aves que levam segredos aparece desde o Eclesiastes, na Bíblia, e existe em outras línguas.",
    why: "Passarinho voa por todo lado e ouve tudo. Pôr a culpa nele protege a fonte da notícia.",
    example: "Quem te contou? Um passarinho me contou.",
  },
  {
    id: "elefante-em-loja-de-cristal",
    text: "Elefante em loja de cristal",
    meaning:
      "Pessoa desastrada, que quebra tudo ou age sem delicadeza num lugar delicado.",
    origin:
      "A origem não é documentada. A imagem é a de um bicho grande e pesado entre peças frágeis. Em inglês, a versão usa um touro.",
    why: "O elefante não cabe entre prateleiras frágeis. Cada movimento dele quebra algo.",
    example: "Ele entrou na conversa como elefante em loja de cristal.",
  },
  {
    id: "osso-duro-de-roer",
    text: "Osso duro de roer",
    meaning: "Coisa ou pessoa difícil de enfrentar, resolver ou vencer.",
    origin:
      "A origem não é documentada. A imagem é a do cachorro que tenta roer um osso muito duro e se cansa sem conseguir.",
    why: "Osso duro demora e desgasta os dentes. O problema difícil pede o mesmo esforço.",
    example: "Esse adversário é osso duro de roer.",
  },
  {
    id: "pao-pao-queijo-queijo",
    text: "Pão, pão, queijo, queijo",
    meaning: "Dizer as coisas com clareza, sem rodeios nem meias palavras.",
    origin:
      "A origem é incerta. A ideia é chamar cada coisa pelo nome, o pão de pão e o queijo de queijo.",
    why: "Pão é pão e queijo é queijo: nada de disfarce. A expressão pede conversa franca.",
    example: "Vou falar pão, pão, queijo, queijo: o projeto não vai dar certo.",
  },
  {
    id: "mamao-com-acucar",
    text: "Mamão com açúcar",
    meaning: "Algo muito fácil de fazer, sem esforço.",
    origin:
      "A origem não é documentada. A imagem é a da sobremesa simples, fruta macia com açúcar por cima.",
    why: "Mamão é mole e o açúcar o deixa ainda mais gostoso. Isso lembra tarefa fácil e agradável.",
    example: "A prova foi mamão com açúcar.",
  },
  {
    id: "de-pequenino-se-torce-o-pepino",
    text: "De pequenino é que se torce o pepino",
    meaning:
      "É na infância que se corrige e educa. Depois de grande, mudar fica mais difícil.",
    origin:
      "A origem não é documentada. O pepino entra no ditado pela rima com pequenino.",
    why: "O pepino novo, ainda mole, se endireita com facilidade. Depois de crescido, fica duro.",
    example:
      "Ensina agora a escovar o dente. De pequenino é que se torce o pepino.",
  },
  {
    id: "ovos-na-mesma-cesta",
    text: "Não colocar todos os ovos na mesma cesta",
    meaning:
      "Não apostar tudo em uma só coisa, para não perder tudo se der errado.",
    origin:
      "A origem é incerta. O ditado aparece em várias línguas europeias, e um dos registros mais citados é o Dom Quixote, de Cervantes.",
    why: "Se a cesta cai, todos os ovos quebram. Distribuir em várias cestas reduz o prejuízo.",
    example:
      "Não coloque todos os ovos na mesma cesta: invista em mais de um lugar.",
  },
  {
    id: "acabar-em-pizza",
    text: "Acabar em pizza",
    meaning:
      "Terminar sem punição nem solução, depois de muito barulho, sobretudo em escândalos.",
    origin:
      "A origem é incerta. A versão mais popular fala de uma reunião esportiva em São Paulo que, depois de muito debate, terminou numa pizzaria. Não há confirmação.",
    why: "A confusão toda se resolve num jantar, sem culpado. A pizza vira símbolo do fim sem consequência.",
    example: "A CPI começou com alarde, mas tudo acabou em pizza.",
  },
  {
    id: "arroz-de-festa",
    text: "Arroz de festa",
    meaning: "Pessoa que aparece em todo evento, sem faltar a nenhum.",
    origin:
      "A origem é incerta. Uma explicação possível é que o arroz estava em quase todo banquete, como esse convidado.",
    why: "Onde tem festa tem arroz, e onde tem festa tem essa pessoa. A comparação é de presença certa.",
    example: "Ele é arroz de festa: não perde um aniversário.",
  },
  {
    id: "colher-de-cha",
    text: "Dar uma colher de chá",
    meaning: "Facilitar para alguém, dando uma pequena vantagem ou ajuda.",
    origin:
      "A origem é incerta. A colher de chá é pequena, e a expressão sugere um favor pequeno, mas útil.",
    why: "Uma colher de chá é pouca coisa, mas serve para ajudar. O pequeno favor faz diferença.",
    example: "Me dá uma colher de chá e aceita o pedido atrasado.",
  },
  {
    id: "prato-cheio",
    text: "Ser um prato cheio",
    meaning:
      "Ser uma ótima oportunidade ou material farto para quem quer aproveitar, criticar ou comentar.",
    origin:
      "A origem não é documentada. A imagem é a do prato farto, que dá muito o que comer.",
    why: "Um prato cheio sacia a fome de quem chega. O assunto que é prato cheio dá muito para explorar.",
    example: "O erro do goleiro foi prato cheio para os comentaristas.",
  },
  {
    id: "vermelho-feito-pimentao",
    text: "Vermelho feito pimentão",
    meaning: "Muito vermelho, de vergonha, raiva ou sol.",
    origin:
      "A origem não é documentada. É uma comparação de cor com o pimentão maduro, de vermelho vivo.",
    why: "O rosto fica corado quando há vergonha ou raiva. O pimentão serve como o vermelho mais forte.",
    example:
      "Levou um elogio na frente de todos e ficou vermelho feito pimentão.",
  },
  {
    id: "lua-de-mel",
    text: "Lua de mel",
    meaning:
      "Fase inicial de felicidade e harmonia, depois do casamento ou de um começo.",
    origin:
      "A origem é incerta. Uma explicação antiga diz que casais bebiam hidromel por um mês lunar após o casamento, mas isso é tradição e não está provado.",
    why: "O mel é doce e a lua marca o mês. A expressão junta os dois para o primeiro tempo, o mais doce, da relação.",
    example: "O governo ainda vive a lua de mel com o Congresso.",
  },
  {
    id: "casca-de-banana",
    text: "Escorregar na casca de banana",
    meaning: "Cair por um descuido bobo, ou errar num detalhe simples.",
    origin:
      "A origem do uso figurado não é documentada. A imagem lembra o humor de pastelão, em que a casca de banana derruba quem passa.",
    why: "A casca é pequena e inofensiva, mas derruba quem não olha. O erro bobo derruba até o mais atento.",
    example:
      "O candidato escorregou na casca de banana ao errar o nome da cidade.",
  },
  {
    id: "batata-quente",
    text: "Batata quente",
    meaning:
      "Problema delicado que ninguém quer segurar e todo mundo tenta passar adiante.",
    origin:
      "A origem é incerta. A imagem é a da batata recém-saída da panela, que queima as mãos e se passa rápido. Existe também a brincadeira infantil com esse nome.",
    why: "Batata quente não dá para segurar. Quem pega passa logo para o próximo.",
    example: "Ninguém quer a batata quente da reforma do prédio.",
  },
  {
    id: "entornar-o-caldo",
    text: "Entornar o caldo",
    meaning:
      "Estragar uma situação que ia bem, com uma atitude ou fala que causa confusão.",
    origin:
      "A origem não é documentada. A imagem é a de derrubar a panela de caldo quando a comida já estava pronta.",
    why: "O caldo pronto vai ao chão e a refeição se perde. Um deslize no fim joga fora o trabalho todo.",
    example: "A negociação ia bem até ele entornar o caldo com uma piada.",
  },
  {
    id: "em-banho-maria",
    text: "Em banho-maria",
    meaning: "Em compasso de espera, parado e adiado sem decisão.",
    origin:
      "Vem da técnica de cozinha em que um recipiente é aquecido dentro de outro com água quente, em calor suave e lento. A origem do nome Maria é discutida.",
    why: "No banho-maria nada ferve forte nem termina rápido. O projeto parado esquenta devagar, sem sair do lugar.",
    example: "O projeto ficou em banho-maria por seis meses.",
  },
  {
    id: "virar-abobora",
    text: "Virar abóbora",
    meaning:
      "Ter de ir embora ou parar na hora marcada, sobretudo à meia-noite, e perder o encanto.",
    origin:
      "Vem do conto da Cinderela: à meia-noite, o encanto acaba e a carruagem volta a ser a abóbora que era.",
    why: "A carruagem de abóbora dura até a meia-noite. Quem vira abóbora tem horário e some.",
    example: "Meu limite é meia-noite, depois eu viro abóbora.",
  },
  {
    id: "pao-e-circo",
    text: "Pão e circo",
    meaning:
      "Política que distrai o povo com comida e diversão para evitar protestos.",
    origin:
      "Vem do latim panem et circenses, expressão do poeta romano Juvenal, que criticava um povo que só queria pão e espetáculo.",
    why: "Roma dava trigo e jogos para o povo não cobrar mais nada. A expressão fala dessa troca.",
    example: "Estádio novo e festa na praça: política de pão e circo.",
  },
  {
    id: "panela-de-pressao",
    text: "Panela de pressão",
    meaning:
      "Pessoa ou ambiente muito tensos, prestes a explodir de estresse ou raiva.",
    origin:
      "Vem do utensílio que cozinha sob alta pressão e pode estourar se o vapor não escapar. A comparação é do uso doméstico.",
    why: "Sem a válvula, a pressão sobe até estourar. Quem guarda tudo dentro vira essa panela.",
    example: "O escritório virou uma panela de pressão no fim do projeto.",
  },
  {
    id: "cafe-com-leite",
    text: "Ser café com leite",
    meaning:
      "Participar de brincadeira ou jogo sem valer, tratado com folga por ser menor ou menos preparado.",
    origin:
      "A origem não é documentada. Em brincadeiras infantis, o café com leite é o menor, que brinca mas não conta nas regras.",
    why: "O café com leite é uma bebida suave. O menor, tratado com leveza, entra na brincadeira sem a pressão do jogo.",
    example: "Meu primo é café com leite no pique-esconde, ninguém pega.",
  },
  {
    id: "agua-na-boca",
    text: "Ficar com água na boca",
    meaning: "Sentir muita vontade de comer ou ter algo, a ponto de salivar.",
    origin:
      "A imagem é literal: ao ver ou sentir cheiro de comida, o corpo produz saliva. A expressão se ampliou para qualquer desejo.",
    why: "Saliva em excesso mostra a fome. O desejo por outra coisa aparece pela mesma reação.",
    example: "Só de ver a feijoada, fiquei com água na boca.",
  },
  {
    id: "receita-de-bolo",
    text: "Não existe receita de bolo",
    meaning:
      "Não há passo a passo garantido para resolver algo. Cada caso exige adaptação.",
    origin:
      "A origem não é documentada. A receita de bolo é o exemplo clássico de instrução que dá certo se seguida à risca.",
    why: "Quem segue a receita tira o bolo igual. Na vida, quase nada funciona assim, e a negação mostra isso.",
    example: "Não existe receita de bolo para ser bom pai.",
  },
  {
    id: "custar-os-olhos-da-cara",
    text: "Custar os olhos da cara",
    meaning: "Custar muito caro, sair a um preço altíssimo.",
    origin: "A origem não é documentada.",
    why: "Os olhos são o que se tem de mais precioso. Pagar com eles é pagar o preço máximo.",
    example: "O conserto do carro custou os olhos da cara.",
  },
  {
    id: "dor-de-cotovelo",
    text: "Dor de cotovelo",
    meaning: "Ciúme ou tristeza por um amor perdido ou não correspondido.",
    origin:
      "A origem é incerta. A versão mais comum liga a expressão à postura de quem fica debruçado no balcão do bar, de cotovelos apoiados, remoendo a perda.",
    why: "Quem sofre por amor fica curvado, apoiado nos cotovelos, remoendo a mágoa. A dor ganhou o nome do gesto.",
    example: "Ficou com dor de cotovelo quando viu a ex com outro.",
  },
  {
    id: "lavar-as-maos",
    text: "Lavar as mãos",
    meaning: "Recusar-se a assumir a responsabilidade por algo.",
    origin:
      "Vem do relato bíblico em que Pôncio Pilatos lava as mãos diante da multidão antes de entregar Jesus (Mateus 27:24).",
    why: "Lavar as mãos em público era dizer que a culpa não era dele. O gesto virou símbolo de quem se omite.",
    example: "O gerente lavou as mãos e deixou o time se virar sozinho.",
  },
  {
    id: "esquentar-a-cabeca",
    text: "Esquentar a cabeça",
    meaning: "Se preocupar demais ou se irritar com alguma coisa.",
    origin: "A origem não é documentada.",
    why: "A preocupação esquenta a cabeça como se ela fosse uma panela no fogo. Quanto mais se pensa, mais ferve.",
    example: "Não esquenta a cabeça, a gente dá um jeito.",
  },
  {
    id: "olho-gordo",
    text: "Olho gordo",
    meaning:
      "Inveja que, segundo a crença popular, traz azar a quem é alvo dela.",
    origin:
      "A crença no mau-olhado é muito antiga e aparece em várias culturas do Mediterrâneo. Chegou ao Brasil com os portugueses.",
    why: "Acredita-se que o olhar cobiçoso carrega energia ruim. O olho 'gordo' é o que devora com a vista.",
    example: "Pôs uma pimenteira na porta contra olho gordo.",
  },
  {
    id: "nao-pregar-o-olho",
    text: "Não pregar o olho",
    meaning: "Não conseguir dormir.",
    origin: "A origem não é documentada.",
    why: "Pregar o olho é fechá-lo como se ficasse preso por um prego. Quem não consegue passa a noite acordado.",
    example: "Não preguei o olho na véspera da entrevista.",
  },
  {
    id: "coracao-na-boca",
    text: "Coração na boca",
    meaning: "Sentir muito susto ou nervosismo, com o coração disparado.",
    origin: "A origem não é documentada.",
    why: "Com o susto o coração bate tão forte que parece subir à garganta. A imagem é a de um coração prestes a sair pela boca.",
    example: "Fiquei com o coração na boca na hora do resultado.",
  },
  {
    id: "engolir-em-seco",
    text: "Engolir em seco",
    meaning: "Ficar calado e sem reação diante de algo duro ou assustador.",
    origin: "A origem não é documentada.",
    why: "Com a boca seca de nervoso, só dá para engolir a saliva que não tem. O gesto mostra alguém sem palavras.",
    example: "Ouviu a bronca e engoliu em seco.",
  },
  {
    id: "entrar-por-um-ouvido-e-sair-pelo-outro",
    text: "Entrar por um ouvido e sair pelo outro",
    meaning: "Ouvir sem prestar atenção; ter um conselho ignorado.",
    origin: "A origem não é documentada.",
    why: "O som atravessa a cabeça sem parar no caminho, como se ela fosse um corredor vazio.",
    example: "Falei mil vezes, mas entrou por um ouvido e saiu pelo outro.",
  },
  {
    id: "boca-livre",
    text: "Boca-livre",
    meaning: "Comida e bebida de graça, em geral em festa ou evento.",
    origin: "A origem não é documentada.",
    why: "Boca livre é a boca que come e bebe sem abrir a carteira. Quem vai de boca-livre só aproveita.",
    example: "Foi à inauguração só pela boca-livre.",
  },
  {
    id: "acordar-com-o-pe-esquerdo",
    text: "Acordar com o pé esquerdo",
    meaning: "Acordar de mau humor ou ter um dia em que tudo dá errado.",
    origin:
      "A origem é uma superstição antiga, presente em várias culturas, que liga o lado esquerdo ao azar. Daí o contraste com começar com o pé direito.",
    why: "Se o primeiro pé a tocar o chão é o do azar, o dia já começa torto. A crença virou desculpa para o mau humor.",
    example: "Hoje ele acordou com o pé esquerdo, nem fala com ninguém.",
  },
  {
    id: "pes-no-chao",
    text: "Ter os pés no chão",
    meaning: "Ser realista, sem se deixar levar por fantasias.",
    origin: "A origem não é documentada.",
    why: "Quem pisa firme no chão não flutua entre sonhos. A imagem é a de estabilidade.",
    example: "Gosto de ideias grandes, mas preciso ter os pés no chão.",
  },
  {
    id: "pe-quente",
    text: "Pé-quente",
    meaning: "Pessoa que dá sorte por onde passa.",
    origin: "A origem não é documentada. Faz par com o pé-frio, que dá azar.",
    why: "O calor vira sinal de boa fortuna: onde o pé-quente pisa, as coisas dão certo.",
    example: "Leva o João, ele é pé-quente no bingo.",
  },
  {
    id: "dar-no-pe",
    text: "Dar no pé",
    meaning: "Ir embora às pressas, fugir.",
    origin: "A origem não é documentada.",
    why: "O pé é o que leva a pessoa para longe. Dar no pé é usar as pernas para sumir.",
    example: "A festa esquentou e eu dei no pé.",
  },
  {
    id: "puxar-o-saco",
    text: "Puxar o saco",
    meaning: "Bajular alguém para ganhar uma vantagem.",
    origin: "A origem não é documentada.",
    why: "A imagem é a de quem se põe a serviço do outro, como um carregador, para agradar e conseguir um favor.",
    example: "Vive puxando o saco do chefe.",
  },
  {
    id: "suar-a-camisa",
    text: "Suar a camisa",
    meaning: "Trabalhar ou se esforçar muito para conseguir algo.",
    origin:
      "A origem exata não é documentada. A imagem vem do esforço físico, que molha a roupa de suor.",
    why: "Camisa ensopada é prova visível de esforço. Quem sua a camisa não está de brincadeira.",
    example: "O time suou a camisa para virar o jogo.",
  },
  {
    id: "vestir-a-camisa",
    text: "Vestir a camisa",
    meaning: "Se comprometer de corpo e alma com a empresa ou com uma causa.",
    origin:
      "A origem é incerta. Costuma-se ligar ao futebol, em que o jogador veste a camisa do time e defende suas cores.",
    why: "Quem veste a camisa passa a ser parte do grupo. O que acontece com o time acontece com ele.",
    example: "Ele veste a camisa da empresa desde o primeiro dia.",
  },
  {
    id: "meter-a-mao-no-bolso",
    text: "Meter a mão no bolso",
    meaning: "Pagar, gastar do próprio dinheiro, em geral a contragosto.",
    origin: "A origem não é documentada.",
    why: "O bolso é onde se guarda o dinheiro. Meter a mão ali é abrir a bolsa para pagar.",
    example: "O conserto saiu caro e tive que meter a mão no bolso.",
  },
  {
    id: "jogar-dinheiro-pela-janela",
    text: "Jogar dinheiro pela janela",
    meaning: "Gastar à toa, desperdiçar dinheiro.",
    origin: "A origem não é documentada.",
    why: "Dinheiro atirado pela janela vai embora sem volta e ninguém aproveita. É o retrato do desperdício.",
    example: "Pagar assinatura que não usa é jogar dinheiro pela janela.",
  },
  {
    id: "dinheiro-nao-da-em-arvore",
    text: "Dinheiro não dá em árvore",
    meaning: "Aviso de que dinheiro custa trabalho e não deve ser gasto à toa.",
    origin:
      "A origem não é documentada. É frase típica de pais e avós ao educar os filhos.",
    why: "Se desse em árvore, bastaria colher. A frase lembra que cada nota veio de esforço.",
    example: "Pode ir devagar com as compras, dinheiro não dá em árvore.",
  },
  {
    id: "tempo-e-dinheiro",
    text: "Tempo é dinheiro",
    meaning:
      "Perder tempo equivale a perder dinheiro, então não convém desperdiçá-lo.",
    origin:
      "Costuma ser atribuída a Benjamin Franklin, que escreveu a frase num conselho a jovens comerciantes, no século 18.",
    why: "Quem trabalha por hora sabe: cada minuto parado é um ganho que não entra. O tempo vira moeda.",
    example: "Vamos direto ao ponto, tempo é dinheiro.",
  },
  {
    id: "pe-de-meia",
    text: "Pé-de-meia",
    meaning: "Dinheiro guardado como reserva para o futuro.",
    origin:
      "A explicação mais comum diz que vem do hábito antigo de guardar moedas dentro de meias, escondidas em casa.",
    why: "A meia é o cofre improvisado de quem não confia em esconderijo mais chique. Daí o dinheiro guardado virar pé-de-meia.",
    example: "Com o 13º, ele fez um pé-de-meia.",
  },
  {
    id: "apertar-o-cinto",
    text: "Apertar o cinto",
    meaning: "Cortar gastos por causa de aperto financeiro.",
    origin:
      "A origem não é documentada. A explicação mais citada é a de quem come menos e precisa apertar o cinto para segurar a calça.",
    why: "Com menos dinheiro, o orçamento encolhe como a barriga de quem passa fome. O cinto aperta junto.",
    example: "Com a prestação nova, vamos ter que apertar o cinto.",
  },
  {
    id: "agua-ate-o-pescoco",
    text: "Estar com água até o pescoço",
    meaning:
      "Estar em situação muito difícil, em geral afogado em dívidas ou tarefas.",
    origin: "A origem não é documentada.",
    why: "Com a água no pescoço, mais um pouco e a pessoa se afoga. É o limite antes do desastre.",
    example: "Estou com água até o pescoço de contas atrasadas.",
  },
  {
    id: "passar-o-chapeu",
    text: "Passar o chapéu",
    meaning: "Pedir uma contribuição em dinheiro a um grupo.",
    origin:
      "Vem do costume dos artistas de rua, que passam o chapéu entre o público para recolher moedas.",
    why: "O chapéu vira cofre de ocasião. Cada um joga um pouco e todos ajudam.",
    example: "Passamos o chapéu para comprar o presente dele.",
  },
  {
    id: "dar-duro",
    text: "Dar duro",
    meaning: "Trabalhar muito, se esforçar bastante.",
    origin: "A origem não é documentada.",
    why: "Duro é o oposto de mole. Dar duro é dar o melhor do corpo, sem moleza.",
    example: "Ele deu duro para pagar a faculdade.",
  },
  {
    id: "corpo-mole",
    text: "Fazer corpo mole",
    meaning: "Trabalhar de má vontade, fingindo esforço.",
    origin: "A origem não é documentada.",
    why: "Corpo mole é corpo sem energia, que só finge que faz. É o contrário de dar duro.",
    example: "Ele faz corpo mole quando o assunto é reunião.",
  },
  {
    id: "nao-ter-onde-cair-morto",
    text: "Não ter onde cair morto",
    meaning: "Ser muito pobre, sem casa nem recurso nenhum.",
    origin: "A origem não é documentada.",
    why: "Nem um chão que seja seu para cair. A frase resume a pobreza total.",
    example: "Ele chegou à cidade sem ter onde cair morto.",
  },
  {
    id: "varrer-para-debaixo-do-tapete",
    text: "Varrer para debaixo do tapete",
    meaning: "Esconder um problema em vez de resolvê-lo.",
    origin: "A origem não é documentada.",
    why: "A sujeira some da vista, mas continua lá. O tapete só disfarça.",
    example: "Não adianta varrer o erro para debaixo do tapete.",
  },
  {
    id: "panos-quentes",
    text: "Botar panos quentes",
    meaning: "Suavizar um conflito, evitando enfrentá-lo.",
    origin:
      "A explicação mais aceita liga à prática antiga de aplicar panos aquecidos no corpo para aliviar dores.",
    why: "Pano quente alivia sem curar. Do mesmo jeito, a frase acalma a briga, mas não resolve a causa.",
    example: "O diretor botou panos quentes na discussão.",
  },
  {
    id: "vestir-a-carapuca",
    text: "Vestir a carapuça",
    meaning: "Aceitar como dirigida a si uma crítica feita em geral.",
    origin: "A origem não é documentada.",
    why: "Carapuça é um gorro. Quem o põe na cabeça mostra que a crítica serviu, mesmo sem ninguém ser citado.",
    example: "Falei em geral e ele vestiu a carapuça.",
  },
  {
    id: "saia-justa",
    text: "Saia justa",
    meaning: "Situação constrangedora, difícil de contornar.",
    origin:
      "A origem não é documentada. A imagem mais citada é a da saia apertada que limita os passos.",
    why: "Saia justa prende os movimentos e deixa a pessoa sem jeito. Igual a uma situação embaraçosa.",
    example: "Fiquei numa saia justa quando perguntaram do atraso.",
  },
  {
    id: "fazer-a-casa-cair",
    text: "Fazer a casa cair",
    meaning: "Provocar tumulto ou revelar algo que gera escândalo.",
    origin: "A origem não é documentada.",
    why: "Casa que desaba é o auge do caos. A imagem vale para uma briga ou uma revelação explosiva.",
    example: "Se ela contar tudo, vai fazer a casa cair.",
  },
  {
    id: "pingos-nos-is",
    text: "Colocar os pingos nos is",
    meaning: "Esclarecer cada ponto de um assunto com precisão.",
    origin:
      "Vem da escrita à mão, em que a letra i só fica completa com o pingo.",
    why: "Quem esquece o pingo deixa a letra incompleta. Colocar os pingos é fechar os detalhes que faltam.",
    example: "Vamos pôr os pingos nos is antes de assinar.",
  },
  {
    id: "cabelo-em-pe",
    text: "Ficar de cabelo em pé",
    meaning: "Sentir muito medo ou susto.",
    origin:
      "Vem da reação física do corpo: com o medo, os pelos se eriçam e dá arrepio.",
    why: "O medo faz o cabelo ficar em pé. A frase usa a reação do corpo para nomear o susto.",
    example: "A cena do filme me deixou de cabelo em pé.",
  },
  {
    id: "nao-ir-com-a-cara",
    text: "Não ir com a cara de alguém",
    meaning: "Sentir antipatia sem motivo claro.",
    origin: "A origem não é documentada.",
    why: "A cara é o que se vê primeiro. Dizer que não vai com ela é antipatizar à primeira vista.",
    example: "Não fui com a cara do novo vizinho.",
  },
  {
    id: "braco-direito",
    text: "Ser o braço direito",
    meaning: "Ser a pessoa de maior confiança e ajuda de alguém.",
    origin:
      "A origem não é documentada. A explicação comum liga a imagem ao fato de a maioria das pessoas usar mais o braço direito.",
    why: "O braço direito é o que se usa nas tarefas importantes. Sem ele, tudo fica mais difícil.",
    example: "Ela é o braço direito do diretor.",
  },
  {
    id: "unhas-e-dentes",
    text: "Lutar com unhas e dentes",
    meaning: "Defender algo com toda a força e garra.",
    origin:
      "A origem não é documentada. A imagem é a de quem luta sem armas, só com o corpo.",
    why: "Unhas arranham e dentes mordem. Sem arma, usa-se tudo o que o corpo tem.",
    example: "Ele lutou com unhas e dentes pela vaga.",
  },
  {
    id: "jogo-de-cintura",
    text: "Ter jogo de cintura",
    meaning: "Saber lidar com situações difíceis de forma flexível.",
    origin: "A origem não é documentada.",
    why: "Quem tem cintura solta se esquiva sem cair. Na vida, vale para contornar problemas sem bater de frente.",
    example: "Precisa de jogo de cintura para tratar com esse cliente.",
  },
  {
    id: "passar-a-mao-na-cabeca",
    text: "Passar a mão na cabeça",
    meaning: "Ser condescendente com alguém, perdoando seus erros.",
    origin: "A origem não é documentada.",
    why: "Afago na cabeça é gesto de carinho com criança. Quem faz isso trata o erro como coisa pequena.",
    example: "Os pais sempre passaram a mão na cabeça dele.",
  },
  {
    id: "mexer-os-pauzinhos",
    text: "Mexer os pauzinhos",
    meaning: "Usar influência nos bastidores para conseguir algo.",
    origin:
      "A origem é incerta. A explicação mais citada compara a ação à do manipulador de bonecos, que move varetas para o boneco andar.",
    why: "Quem mexe os pauzinhos comanda sem aparecer. O resultado surge, mas a mão fica escondida.",
    example: "Mexeu uns pauzinhos e conseguiu a vaga.",
  },
  {
    id: "dedo-duro",
    text: "Dedo-duro",
    meaning: "Pessoa que delata os outros, entregando o que viu ou soube.",
    origin: "A origem não é documentada.",
    why: "Apontar com o dedo é o gesto de acusar. O dedo-duro entrega quem fez a coisa.",
    example: "Alguém foi dedo-duro e contou tudo para o chefe.",
  },
  {
    id: "olho-da-rua",
    text: "Botar no olho da rua",
    meaning: "Demitir ou expulsar alguém.",
    origin: "A origem não é documentada.",
    why: "O olho da rua é o meio da rua, a céu aberto. Quem é posto ali fica sem abrigo e sem lugar.",
    example: "A empresa pôs cinquenta pessoas no olho da rua.",
  },
  {
    id: "pegar-no-batente",
    text: "Pegar no batente",
    meaning: "Ir trabalhar; trabalhar de verdade.",
    origin:
      "A origem é incerta. Há quem ligue 'batente' ao batente da porta, o limiar do local de trabalho.",
    why: "Ir para o batente é cruzar a porta do trabalho e começar o serviço.",
    example: "Segunda cedo já tem que pegar no batente.",
  },
  {
    id: "negocio-da-china",
    text: "Negócio da China",
    meaning: "Negócio muito vantajoso, com grande lucro.",
    origin:
      "A origem é incerta. A versão mais comum liga ao comércio com a China, que rendia lucros altos a comerciantes desde a época das grandes navegações.",
    why: "A China era vista como fonte de mercadorias raras e lucro alto. O nome virou sinônimo de bom negócio.",
    example: "Comprei por metade do preço, foi um negócio da China.",
  },
  {
    id: "enxugar-gelo",
    text: "Enxugar gelo",
    meaning: "Fazer um esforço inútil, que nunca resolve o problema.",
    origin: "A origem não é documentada.",
    why: "O gelo derrete, então enxugar não adianta: a água volta sempre. É o trabalho sem fim.",
    example: "Consertar a mesma falha toda semana é enxugar gelo.",
  },
  {
    id: "agulha-no-palheiro",
    text: "Procurar agulha em palheiro",
    meaning: "Tentar achar algo quase impossível de encontrar.",
    origin:
      "A origem não é documentada. Palheiro é um monte de palha, onde uma agulha some com facilidade.",
    why: "Agulha é pequena e palha é muita. Achar uma no meio da outra é quase questão de sorte.",
    example: "Achar esse arquivo no HD é procurar agulha em palheiro.",
  },
  {
    id: "sete-chaves",
    text: "Guardar a sete chaves",
    meaning: "Guardar algo com todo o cuidado, em segredo.",
    origin:
      "A origem é incerta. O número sete aparece em muitos ditos populares com ideia de totalidade, e as chaves lembram cofres e portas trancadas.",
    why: "Sete chaves é trancar de todo jeito, sem brecha. Serve para segredo ou tesouro.",
    example: "Ela guarda a receita a sete chaves.",
  },
  {
    id: "depois-tempestade-bonanca",
    text: "Depois da tempestade vem a bonança",
    meaning: "Depois de uma fase ruim, as coisas se acalmam e melhoram.",
    origin:
      "A origem não é documentada. A ideia aparece em provérbios de várias culturas. Bonança é o mar calmo depois do temporal.",
    why: "O marinheiro que sobrevive ao temporal encontra o mar liso. O ditado diz que a crise também passa e a calma volta.",
    example: "Foi um ano difícil, mas depois da tempestade vem a bonança.",
  },
  {
    id: "remar-contra-a-mare",
    text: "Remar contra a maré",
    meaning:
      "Insistir em algo que vai contra a corrente geral e por isso custa muito esforço.",
    origin:
      "A origem não é documentada. A imagem é de quem rema um barco enquanto a maré empurra para o lado oposto.",
    why: "Remar contra a maré cansa muito e rende pouco. Vale para quem enfrenta a opinião da maioria ou uma situação adversa.",
    example: "Defender essa ideia na empresa é remar contra a maré.",
  },
  {
    id: "mar-de-rosas",
    text: "Mar de rosas",
    meaning:
      "Situação fácil e agradável, sem problemas. Costuma aparecer na negativa.",
    origin:
      "A origem não é documentada. É uma imagem figurada, usada quase sempre em frases como 'a vida não é um mar de rosas'.",
    why: "Um mar inteiro de rosas seria só beleza e perfume. Na prática, ninguém vive assim, por isso a expressão serve de alerta.",
    example: "Morar sozinho não é mar de rosas, as contas chegam todo mês.",
  },
  {
    id: "sol-nasce-para-todos",
    text: "O sol nasce para todos",
    meaning:
      "As oportunidades e os direitos básicos existem para todo mundo, não só para alguns.",
    origin:
      "A origem não é documentada. É um ditado popular que usa o sol como símbolo de algo que ninguém consegue guardar só para si.",
    why: "O sol aparece para ricos e pobres, sem escolher. Por isso a frase lembra que a chance de melhorar de vida é de todos.",
    example:
      "Ele acha que ganhou o lugar por direito, mas o sol nasce para todos.",
  },
  {
    id: "falar-ao-vento",
    text: "Falar ao vento",
    meaning:
      "Falar sem que ninguém ouça ou dê atenção, como se as palavras se perdessem.",
    origin:
      "A origem não é documentada. É uma imagem comum em vários idiomas: palavra dita ao vento é levada embora.",
    why: "O vento carrega a voz para longe e ninguém a recebe. É o que acontece quando o conselho entra por um ouvido e sai pelo outro.",
    example: "Já avisei três vezes, mas é como falar ao vento.",
  },
  {
    id: "setimo-ceu",
    text: "Estar no sétimo céu",
    meaning: "Estar muito feliz, em estado de alegria completa.",
    origin:
      "Várias tradições antigas, como a judaica e a islâmica, falavam em sete céus. O sétimo era o mais alto, onde ficava a divindade.",
    why: "Chegar ao último e mais alto dos céus é a felicidade máxima. Quem está lá em cima não quer descer.",
    example: "Ela ficou no sétimo céu com a notícia da aprovação.",
  },
  {
    id: "fim-da-picada",
    text: "Ser o fim da picada",
    meaning:
      "Ser o cúmulo do abuso ou do absurdo, algo que passou de qualquer limite.",
    origin:
      "A explicação mais aceita liga a frase às picadas, trilhas abertas no mato. Quando a picada acabava, não havia mais caminho nem como seguir.",
    why: "Chegar ao fim da trilha era estar no limite do suportável. A expressão usa essa ideia para a gota d'água.",
    example: "Chegar atrasado e ainda reclamar? Isso é o fim da picada.",
  },
  {
    id: "amanha-e-outro-dia",
    text: "Amanhã é outro dia",
    meaning:
      "Os problemas de hoje podem ser resolvidos depois, e as coisas ainda podem melhorar.",
    origin:
      "A origem não é documentada. É um consolo popular para quem teve um dia ruim ou está cansado demais para continuar.",
    why: "Cada dia traz a chance de recomeçar. A frase pede calma e lembra que nada precisa ser resolvido tudo de uma vez.",
    example: "Perdi o prazo, mas amanhã é outro dia e eu tento de novo.",
  },
  {
    id: "dar-tempo-ao-tempo",
    text: "Dar tempo ao tempo",
    meaning:
      "Ter paciência e deixar as coisas se resolverem com o passar do tempo.",
    origin:
      "A origem não é documentada. É um conselho popular, usado para quem tem pressa em resolver algo que só o tempo resolve.",
    why: "Algumas coisas não aceleram com insistência. O ditado pede que a pessoa espere o tempo fazer a sua parte.",
    example: "Não force a conversa, dê tempo ao tempo e ela volta.",
  },
  {
    id: "fundo-do-poco",
    text: "Chegar ao fundo do poço",
    meaning:
      "Chegar ao pior momento possível, numa situação sem nenhuma saída aparente.",
    origin:
      "A origem não é documentada. É uma imagem figurada: quem está no fundo de um poço não tem mais para onde descer.",
    why: "No fundo do poço não dá para cair mais. Por isso a frase costuma vir junto com a esperança de que dali só se pode subir.",
    example:
      "Depois da falência, ele sentiu que tinha chegado ao fundo do poço.",
  },
  {
    id: "vender-a-alma",
    text: "Vender a alma ao diabo",
    meaning:
      "Abrir mão dos próprios princípios em troca de algo muito desejado, como poder ou dinheiro.",
    origin:
      "Vem da tradição europeia dos pactos com o diabo. A lenda de Fausto, que troca a alma por conhecimento, deixou a ideia famosa.",
    why: "Quem faz o pacto ganha o que quer, mas paga com a alma. A frase aponta quem aceita qualquer coisa para subir na vida.",
    example: "Ele vendeu a alma ao diabo para ocupar aquele cargo.",
  },
  {
    id: "advogado-do-diabo",
    text: "Advogado do diabo",
    meaning:
      "Pessoa que defende a posição contrária, só para testar um argumento ou provocar a discussão.",
    origin:
      "Vem da Igreja Católica. O advocatus diaboli era o encarregado de apontar objeções nos processos de canonização, quando se avaliava se alguém virava santo.",
    why: "Quem faz esse papel finge defender o lado errado para ver se a ideia aguenta. A função tinha o objetivo de testar, não de atacar.",
    example: "Vou fazer o advogado do diabo: e se der tudo errado?",
  },
  {
    id: "diabo-da-cruz",
    text: "Fugir como o diabo da cruz",
    meaning:
      "Fugir de alguém ou de algo com muita pressa e pavor, ou evitar de qualquer jeito.",
    origin:
      "Vem da tradição cristã de que o diabo teme a cruz e foge dela. A frase passou a ser dita de quem tem horror de alguma coisa.",
    why: "A cruz é o que o diabo mais evita, então ele corre. Por isso a frase descreve alguém que se afasta de algo a toda velocidade.",
    example: "Ele foge de reunião como o diabo da cruz.",
  },
  {
    id: "paciencia-de-jo",
    text: "Paciência de Jó",
    meaning: "Paciência enorme, de quem aguenta muita coisa sem reclamar.",
    origin:
      "Vem da Bíblia. O Livro de Jó conta a história de um homem que perde tudo e, mesmo assim, resiste ao sofrimento sem abandonar a fé.",
    why: "Jó é o símbolo de quem suporta a dor sem se revoltar. Quem tem essa paciência aguenta o que ninguém aguentaria.",
    example: "Pra ensinar uma turma dessas, só com paciência de Jó.",
  },
  {
    id: "torre-de-babel",
    text: "Torre de Babel",
    meaning: "Lugar ou situação de confusão total, em que ninguém se entende.",
    origin:
      "Vem da Bíblia, no Gênesis. Os homens construíram uma torre para chegar ao céu e Deus os fez falar idiomas diferentes, e o projeto parou.",
    why: "Se todos falam línguas diferentes, não há como trabalhar junto. A palavra descreve qualquer bagunça em que cada um diz uma coisa.",
    example: "A reunião virou uma torre de Babel, ninguém se entendia.",
  },
  {
    id: "velho-como-matusalem",
    text: "Velho como Matusalém",
    meaning: "Muito velho, antigo ou ultrapassado.",
    origin:
      "Vem da Bíblia. No Gênesis, Matusalém é o homem que viveu mais tempo: 969 anos. Ele virou sinônimo de pessoa muito velha.",
    why: "Quem chegou a quase mil anos serve de medida para tudo que é antigo. A frase pode falar de gente ou de objeto.",
    example: "Esse computador é velho como Matusalém.",
  },
  {
    id: "primeira-pedra",
    text: "Atirar a primeira pedra",
    meaning:
      "Acusar ou condenar alguém sem ter autoridade moral para isso, já que todos têm defeitos.",
    origin:
      "Vem da Bíblia. No Evangelho de João, Jesus diz que quem não tem pecado deve atirar a primeira pedra numa mulher acusada de adultério.",
    why: "Só quem é perfeito poderia punir. Como ninguém é, a frase pede cuidado com o julgamento dos outros.",
    example: "Antes de atirar a primeira pedra, olhe os seus erros.",
  },
  {
    id: "olho-por-olho",
    text: "Olho por olho, dente por dente",
    meaning:
      "Vingança na mesma medida da ofensa: devolver o mal que se sofreu.",
    origin:
      "Vem de leis antigas, como a Lei de Talião, e aparece na Bíblia, no Êxodo. A ideia era limitar a pena ao mesmo tamanho do dano.",
    why: "Quem tirou um olho perde um olho. A frase resume a lógica de revidar na medida exata do que se sofreu.",
    example: "Se você bater nele, vai entrar na lógica do olho por olho.",
  },
  {
    id: "quem-com-ferro-fere",
    text: "Quem com ferro fere, com ferro será ferido",
    meaning: "Quem prejudica os outros acaba sendo prejudicado do mesmo jeito.",
    origin:
      "Vem da Bíblia. No Evangelho de Mateus, Jesus diz a um discípulo que guarde a espada, pois quem usa a espada morrerá pela espada.",
    why: "Quem usa violência ou má-fé tende a receber o mesmo. O ditado vale como aviso para quem age sem pensar no troco.",
    example:
      "Ele viveu enganando todo mundo. Quem com ferro fere, com ferro será ferido.",
  },
  {
    id: "para-ingles-ver",
    text: "Para inglês ver",
    meaning: "Algo feito só de fachada, que parece sério mas não é cumprido.",
    origin:
      "Vem de 1831, quando o Brasil aprovou uma lei que proibia o tráfico de escravos para agradar à Inglaterra. Na prática, a lei quase não foi cumprida.",
    why: "A lei existia só para os ingleses verem, sem efeito real. A frase hoje serve para qualquer medida de fachada.",
    example: "Aquela reunião de segurança foi só para inglês ver.",
  },
  {
    id: "quinto-dos-infernos",
    text: "Quinto dos infernos",
    meaning: "Lugar muito distante, de difícil acesso.",
    origin:
      "A origem é incerta. Quinto era o imposto de 20% sobre o ouro cobrado pela Coroa portuguesa no Brasil colonial. 'Infernos' reforça o exagero.",
    why: "O imposto e o lugar ruim juntos viram uma imagem de algo longe e penoso. A palavra 'infernos' dá o tom de exagero.",
    example: "Ele mora no quinto dos infernos, leva duas horas para chegar lá.",
  },
  {
    id: "presente-de-grego",
    text: "Presente de grego",
    meaning: "Presente ou favor que parece bom, mas traz prejuízo ou problema.",
    origin:
      "Vem do mito do cavalo de Troia, em que os gregos deixaram um cavalo de madeira como presente aos troianos, mas havia soldados escondidos dentro.",
    why: "O 'presente' escondia a armadilha. A expressão serve para o que parece vantagem, mas custa caro depois.",
    example: "Aquele carro barato foi um presente de grego.",
  },
  {
    id: "cavalo-de-troia",
    text: "Cavalo de Troia",
    meaning:
      "Algo aparentemente inofensivo usado para esconder uma ameaça ou infiltrar um problema.",
    origin:
      "Vem do mito grego da Guerra de Troia. Os gregos entregaram um enorme cavalo de madeira com soldados dentro, que atacaram à noite.",
    why: "O cavalo entrou pelos portões como presente e abriu a cidade ao inimigo. Hoje a imagem serve também para vírus de computador.",
    example: "O anexo do e-mail era um cavalo de Troia.",
  },
  {
    id: "roma-nao-foi-feita-num-dia",
    text: "Roma não foi feita num dia",
    meaning:
      "Coisas grandes levam tempo e não se constroem de uma hora para outra.",
    origin:
      "A origem é incerta. É um provérbio europeu antigo, em que Roma era o exemplo de uma grande obra que demorou séculos para ficar pronta.",
    why: "Uma cidade tão grande não nasce pronta. A frase pede paciência a quem quer resultado rápido.",
    example: "Calma, o projeto está só começando. Roma não foi feita num dia.",
  },
  {
    id: "casa-da-mae-joana",
    text: "Casa da mãe Joana",
    meaning:
      "Lugar ou situação bagunçada, sem regras nem autoridade, em que todo mundo faz o que quer.",
    origin:
      "A origem é disputada. Uma versão cita Joana I de Nápoles e regras para casas de prostituição, no século XIV. Não há prova segura dessa ligação.",
    why: "A imagem é de uma casa sem dono que mande, onde cada um entra e faz como quer. Daí vem a ideia de bagunça sem comando.",
    example: "Aqui não é casa da mãe Joana, existem regras.",
  },
  {
    id: "quem-espera-sempre-alcanca",
    text: "Quem espera sempre alcança",
    meaning: "Quem tem paciência acaba conseguindo o que quer.",
    origin:
      "A origem não é documentada. É um provérbio popular que incentiva a esperar com calma, sem desistir.",
    why: "A frase vale a pena para quem sabe aguardar. Dá a entender que a pressa não adianta e o tempo traz o resultado.",
    example: "Passei anos na fila do concurso, mas quem espera sempre alcança.",
  },
  {
    id: "males-para-bem",
    text: "Há males que vêm para bem",
    meaning: "Uma coisa ruim pode acabar trazendo algo de bom.",
    origin:
      "A origem não é documentada. É um provérbio popular que tenta achar sentido em um revés.",
    why: "O que começa como perda pode abrir caminho para algo melhor. A frase serve de consolo depois de um tropeço.",
    example:
      "Perdi o voo, mas conheci um cliente no aeroporto. Há males que vêm para bem.",
  },
  {
    id: "tarde-do-que-nunca",
    text: "Mais vale tarde do que nunca",
    meaning: "É melhor fazer algo com atraso do que não fazer.",
    origin:
      "A origem não é documentada. É um provérbio antigo, comum em várias línguas.",
    why: "Mesmo atrasado, o resultado ainda conta. A frase diz que é melhor chegar depois do que deixar de chegar.",
    example: "Só tirei a carteira aos 40, mas mais vale tarde do que nunca.",
  },
  {
    id: "seguro-morreu-de-velho",
    text: "O seguro morreu de velho",
    meaning:
      "Quem toma cuidado e se previne tem mais chance de evitar problemas.",
    origin:
      "A origem não é documentada. O ditado é antigo e remete à ideia de que quem é prudente vive mais.",
    why: "O 'seguro' aqui é quem é cauteloso, que acabou morrendo velho e não de acidente. A frase defende a prevenção.",
    example: "Faz cópia dos arquivos, que o seguro morreu de velho.",
  },
  {
    id: "quem-canta-seus-males-espanta",
    text: "Quem canta seus males espanta",
    meaning:
      "Quem enfrenta as dificuldades com alegria ou bom humor sofre menos.",
    origin:
      "A frase aparece no Dom Quixote, de Cervantes, e ficou popular em português. O autor falava de cantar para espantar a tristeza.",
    why: "Cantar levanta o ânimo e afasta a tristeza. A frase diz que atitude boa ajuda a aliviar o problema.",
    example: "Quem canta seus males espanta, então liga o som.",
  },
  {
    id: "esperanca-ultima-que-morre",
    text: "A esperança é a última que morre",
    meaning:
      "Mesmo nos piores momentos, ainda dá para ter fé de que as coisas melhorem.",
    origin:
      "A origem não é documentada. É um ditado popular, consolo de quem não quer desistir.",
    why: "Mesmo quando tudo parece perdido, a esperança fica por último. A frase diz que enquanto há vida, existe chance.",
    example: "O time está lá embaixo, mas a esperança é a última que morre.",
  },
  {
    id: "devagar-se-vai-ao-longe",
    text: "Devagar se vai ao longe",
    meaning:
      "Quem age com calma e constância chega mais longe do que quem corre sem pensar.",
    origin:
      "A origem não é documentada. É um provérbio antigo, que valoriza a persistência e o ritmo constante.",
    why: "Quem anda sem pressa e sem parar chega ao destino. Quem corre muito se cansa no meio do caminho.",
    example: "Estudo um pouco por dia. Devagar se vai ao longe.",
  },
  {
    id: "quem-nao-deve-nao-teme",
    text: "Quem não deve não teme",
    meaning:
      "Quem tem a consciência limpa não precisa ter medo de investigação ou cobrança.",
    origin:
      "A origem não é documentada. É um ditado popular usado como defesa de quem não tem culpa.",
    why: "Só tem medo de cobrança quem deve algo. A frase diz que quem age direito fica tranquilo.",
    example: "Pode abrir as contas, quem não deve não teme.",
  },
  {
    id: "ocasiao-faz-o-ladrao",
    text: "A ocasião faz o ladrão",
    meaning:
      "Quando a oportunidade aparece, até quem é honesto pode ceder à tentação.",
    origin:
      "A origem não é documentada. É um ditado antigo, em várias línguas, que alerta para a força da tentação.",
    why: "Quem deixa a porta aberta convida o crime. A frase diz que a oportunidade pode transformar alguém.",
    example: "Não deixe o celular na mesa. A ocasião faz o ladrão.",
  },
  {
    id: "uniao-faz-a-forca",
    text: "A união faz a força",
    meaning: "Pessoas juntas conseguem mais do que cada uma sozinha.",
    origin:
      "A origem não é documentada. É um ditado antigo que virou lema de muitos grupos e países.",
    why: "Um graveto quebra fácil, um feixe não. A frase diz que o grupo unido é mais forte do que cada parte.",
    example: "A vizinhança se juntou e consertou a rua. A união faz a força.",
  },
  {
    id: "quem-tudo-quer-tudo-perde",
    text: "Quem tudo quer, tudo perde",
    meaning: "Quem é ganancioso e quer ficar com tudo pode acabar sem nada.",
    origin:
      "A origem não é documentada. É um provérbio antigo e de várias línguas, contra a ganância.",
    why: "Quem agarra mais do que consegue segurar deixa tudo escapar. A frase avisa que a ambição sem limite sai cara.",
    example: "Quis dois empregos e perdeu os dois. Quem tudo quer, tudo perde.",
  },
  {
    id: "antes-so-do-que-mal-acompanhado",
    text: "Antes só do que mal acompanhado",
    meaning: "É melhor ficar sozinho do que ter por perto uma companhia ruim.",
    origin:
      "A origem não é documentada. É um provérbio antigo, comum em português e em outras línguas.",
    why: "Companhia ruim atrapalha mais do que a solidão. A frase defende a escolha de quem se afasta de gente que faz mal.",
    example: "Terminei o namoro. Antes só do que mal acompanhado.",
  },
  {
    id: "gosto-nao-se-discute",
    text: "Gosto não se discute",
    meaning:
      "Cada pessoa tem suas preferências, e não adianta tentar convencer o outro.",
    origin:
      "A origem não é documentada. É um ditado popular, parecido com o latim 'de gustibus non est disputandum'.",
    why: "Ninguém prova que o seu sabor é o certo. A frase encerra a discussão sobre preferência pessoal.",
    example: "Ele adora pizza com ketchup. Gosto não se discute.",
  },
  {
    id: "quem-cala-consente",
    text: "Quem cala consente",
    meaning:
      "Quem não discorda em voz alta é visto como se estivesse concordando.",
    origin:
      "A ideia vem do direito antigo, em um provérbio latino que diz o mesmo. Em português virou dito popular.",
    why: "Se você ouviu e não reagiu, parece que concordou. A frase cobra posicionamento de quem prefere ficar em silêncio.",
    example: "Ninguém reclamou, então quem cala consente.",
  },
  {
    id: "oxente",
    text: "Oxente",
    meaning:
      "Interjeição nordestina de surpresa, estranhamento ou irritação leve, parecida com 'ora essa'.",
    origin:
      "A explicação mais aceita é que vem de 'ó gente', que foi se encurtando na fala até virar uma palavra só. Ficou como marca do Nordeste, principalmente da Bahia.",
    why: "Quem solta o 'oxente' chama a atenção dos outros para algo inesperado, como se dissesse 'olhem só isso, gente'.",
    example: "Oxente, você ainda não almoçou a essa hora?",
  },
  {
    id: "vixe-maria",
    text: "Vixe Maria",
    meaning:
      "Exclamação nordestina de espanto, susto ou lamento. Hoje é conhecida no país todo.",
    origin:
      "É uma forma encurtada e abrandada de 'Virgem Maria'. 'Vixe' veio de 'virge', em exclamações de surpresa com referência religiosa.",
    why: "Diante do susto, a pessoa invoca a Virgem Maria. Com o tempo a invocação perdeu o peso religioso e ficou só como exclamação.",
    example: "Vixe Maria, olha o tamanho dessa fila!",
  },
  {
    id: "uai-so",
    text: "Uai, sô",
    meaning:
      "Em Minas Gerais, jeito de mostrar surpresa ou estranheza. 'Sô' vem no fim, como tratamento.",
    origin:
      "A origem é incerta. 'Sô' costuma ser explicado como redução de 'seu' ou 'senhor'. A de 'uai' não é bem documentada.",
    why: "O 'uai' abre a frase com ar de espanto tranquilo. O 'sô' amacia e dá intimidade, o que combina com o tom mineiro.",
    example: "Uai, sô, você já voltou da viagem?",
  },
  {
    id: "trem-bao",
    text: "Trem bão",
    meaning:
      "Em Minas e Goiás, coisa boa. 'Trem' é qualquer coisa ou objeto, e 'bão' é bom.",
    origin:
      "A origem é incerta. A versão mais comum diz que o trem, grande novidade em Minas, virou a palavra para qualquer coisa.",
    why: "A palavra é genérica de propósito. 'Trem' pode ser comida, objeto ou situação, e 'bão' diz que o que importa está bom.",
    example: "Esse pão de queijo tá um trem bão demais.",
  },
  {
    id: "bah-tche",
    text: "Bah, tchê",
    meaning:
      "No Rio Grande do Sul, exclamação de surpresa ou admiração. 'Tchê' é uma forma de chamar o outro.",
    origin:
      "'Tchê' vem do 'che' do espanhol do Rio da Prata e chegou ao gaúcho pela fronteira. A origem de 'bah' é incerta.",
    why: "Juntas, as duas palavras funcionam como um 'nossa, cara'. O 'bah' marca a reação e o 'tchê' puxa o interlocutor para a conversa.",
    example: "Bah, tchê, que frio de renguear cachorro hoje!",
  },
  {
    id: "tri-legal",
    text: "Tri legal",
    meaning:
      "No Rio Grande do Sul, muito legal. O 'tri' reforça o adjetivo: tri bom, tri bonito.",
    origin:
      "A origem é incerta. Uma explicação comum liga o 'tri' ao prefixo de 'três', que dá a ideia de algo elevado ao máximo, como em 'tricampeão'.",
    why: "O 'tri' funciona como um 'muito' gaúcho. Colocado antes do adjetivo, ele sobe o grau do elogio.",
    example: "A festa ficou tri legal, todo mundo ficou até o fim.",
  },
  {
    id: "mermao",
    text: "Mermão",
    meaning:
      "No Rio de Janeiro, jeito amigo de chamar alguém, como 'cara' ou 'amigo'.",
    origin:
      "Vem de 'meu irmão', que a fala carioca foi encurtando até virar 'mermão'. Ficou como marca de quem usa o carioquês.",
    why: "Chamar o outro de irmão cria intimidade na hora. A contração deixa o tratamento mais solto e rápido.",
    example: "Mermão, você não vai acreditar no que aconteceu no trem hoje.",
  },
  {
    id: "maneiro",
    text: "Maneiro",
    meaning:
      "Gíria antiga, bem do Rio de Janeiro e do Brasil todo, para algo legal, bonito ou bem feito.",
    origin:
      "A explicação mais aceita é que vem do adjetivo 'maneiro', que quer dizer fácil de manejar. Dali passou a elogiar o que é bom e agradável.",
    why: "O que é maneiro se maneja fácil, sem esforço. Daí a ideia de algo que agrada sem dar trabalho.",
    example: "Esse tênis novo ficou maneiro demais.",
  },
  {
    id: "da-hora",
    text: "Da hora",
    meaning:
      "Gíria paulistana, hoje nacional, para algo legal, bom ou divertido.",
    origin:
      "A origem é incerta. A explicação mais citada é que 'da hora' é o que está no ponto certo, no momento certo.",
    why: "Aquilo que é da hora acontece no tempo exato, sem erro. Isso virou sinônimo de bom, certeiro e atual.",
    example: "O show ontem foi da hora, ninguém quis ir embora.",
  },
  {
    id: "gol-de-placa",
    text: "Gol de placa",
    meaning:
      "Gol tão bonito que merece homenagem. Por extensão, qualquer ato brilhante, no esporte ou fora dele.",
    origin:
      "A versão mais citada liga a expressão a um gol de Pelé no Maracanã, em 1961, que ganhou uma placa comemorativa. A história é bem difundida, mas há versões diferentes dos detalhes.",
    why: "Um gol tão especial que vira monumento: merece uma placa de metal. Na vida, vale para qualquer jogada de mestre.",
    example: "Resolver o problema em cinco minutos foi um gol de placa.",
  },
  {
    id: "engolir-um-frango",
    text: "Engolir um frango",
    meaning:
      "Cometer um erro bobo, de quem deveria ter evitado. No futebol, é o goleiro que deixa passar uma bola fácil.",
    origin:
      "A origem é incerta. A explicação mais comum é que 'frango' passou a designar a bola mole, que um goleiro atento defenderia sem esforço.",
    why: "O goleiro 'engole' a bola fácil, como se ela entrasse por inteiro. O erro vira vergonha pública.",
    example: "O time dominou o jogo todo e engoliu um frango no fim.",
  },
  {
    id: "dar-um-ole",
    text: "Dar um olé",
    meaning:
      "Passar por alguém com superioridade, sem que ele consiga reagir. Vale no esporte e fora dele.",
    origin:
      "O 'olé' vem da tourada espanhola, em que o toureiro passa o touro e a plateia grita 'olé'. No futebol, o grito começou a ser dado quando um time troca passes sem que o rival consiga tomar a bola.",
    why: "O adversário vira o touro que corre atrás da capa. Quem dá o olé mostra que está bem à frente.",
    example: "O candidato deu um olé no adversário durante o debate.",
  },
  {
    id: "bola-na-trave",
    text: "Bola na trave",
    meaning:
      "Quase acertar. Tentativa que chegou perto do sucesso, mas não deu certo por pouco.",
    origin:
      "Vem do futebol: a bola que bate na trave quase entra, mas não vale gol.",
    why: "A bola chega a tocar a estrutura do gol e volta. O quase resultado faz do lance uma pequena tragédia.",
    example: "Passei na prova por meio ponto, foi bola na trave.",
  },
  {
    id: "perna-de-pau",
    text: "Perna de pau",
    meaning:
      "Jogador ruim de bola ou pessoa sem habilidade para alguma atividade. Tom brincalhão, quase carinhoso.",
    origin:
      "A origem não é documentada. A imagem parece vir do futebol de várzea, onde a perna dura do jogador mal treinado lembra uma de madeira.",
    why: "Perna de pau não dobra nem dribla. Quem a tem chuta sem jeito e se movimenta como se estivesse travado.",
    example: "Eu sou perna de pau, mas topo jogar uma pelada.",
  },
  {
    id: "time-que-esta-ganhando",
    text: "Em time que está ganhando não se mexe",
    meaning:
      "O que dá certo não deve ser mudado sem necessidade, no esporte, no trabalho ou em qualquer rotina.",
    origin:
      "É um ditado do futebol brasileiro, de autoria desconhecida. Vem do vocabulário de técnicos e torcedores.",
    why: "Mudar peças de um time que vence pode estragar o entrosamento. O conselho serve para qualquer coisa que já funciona.",
    example:
      "O sistema roda bem há anos, em time que está ganhando não se mexe.",
  },
  {
    id: "quem-nao-faz-leva",
    text: "Quem não faz, leva",
    meaning:
      "Quem desperdiça chances de marcar acaba sofrendo o gol. Vale para qualquer oportunidade perdida.",
    origin:
      "É um ditado do futebol brasileiro, de autor desconhecido. Aparece muito em narrações e conversas de torcedores.",
    why: "O time que perde gols fáceis dá espaço ao adversário. O ditado diz que a bola sempre cobra quem desperdiça.",
    example:
      "Criamos dez chances, não marcamos e tomamos o gol. Quem não faz, leva.",
  },
  {
    id: "cartao-amarelo",
    text: "Dar um cartão amarelo",
    meaning:
      "Fazer um aviso formal a alguém, de modo que fique claro que a próxima falta terá consequência.",
    origin:
      "O cartão amarelo foi criado pelo árbitro inglês Ken Aston e usado pela primeira vez numa Copa do Mundo em 1970. Ele se inspirou nas cores do semáforo.",
    why: "O amarelo do semáforo manda ter atenção. Quem recebe o cartão sabe que está perto do limite.",
    example: "O chefe me deu um cartão amarelo por causa dos atrasos.",
  },
  {
    id: "estar-com-a-bola-toda",
    text: "Estar com a bola toda",
    meaning:
      "Estar em ótima fase, com prestígio e sucesso. Pode servir para pessoas, times e produtos.",
    origin:
      "A origem é incerta. Costuma ser ligada ao futebol, onde o jogador que domina a bola comanda a partida.",
    why: "Quem tem a bola toda controla o jogo. A imagem passou a descrever quem está no auge e faz tudo dar certo.",
    example: "O cantor está com a bola toda e lota todos os shows.",
  },
  {
    id: "tocar-de-ouvido",
    text: "Tocar de ouvido",
    meaning:
      "Fazer algo sem preparo ou instrução formal, improvisando conforme vai percebendo.",
    origin:
      "Vem da música: o instrumentista que toca de ouvido não lê partitura e reproduz o que escuta. A expressão foi estendida a qualquer improviso.",
    why: "Quem toca de ouvido segue o que percebe no momento, sem roteiro. A imagem cabe em qualquer tarefa feita sem manual.",
    example: "Ninguém me explicou o sistema, estou tocando de ouvido.",
  },
  {
    id: "disco-riscado",
    text: "Parecer disco riscado",
    meaning:
      "Repetir a mesma coisa várias vezes, de forma cansativa. Fala-se de quem insiste no mesmo ponto.",
    origin:
      "Vem dos discos de vinil: quando riscados, a agulha volta ao mesmo trecho e repete o som sem avançar. A imagem ficou na fala brasileira.",
    why: "A música não anda e a mesma frase se repete sem parar. Quem fala assim parece preso no mesmo trecho.",
    example: "Você está parecendo um disco riscado, já ouvi isso dez vezes.",
  },
  {
    id: "entrar-de-penetra",
    text: "Entrar de penetra",
    meaning:
      "Ir a uma festa ou evento sem ter sido convidado. Também se diz 'ser penetra'.",
    origin:
      "Penetra vem de 'penetrar', entrar onde não foi chamado. A palavra é antiga, e virou nome de quem aparece sem convite.",
    why: "O penetra entra sem ser chamado, no meio da multidão. A imagem cobre desde festas até eventos abertos só a convidados.",
    example: "Ele entrou de penetra no casamento e comeu o jantar todo.",
  },
  {
    id: "cara-de-pau",
    text: "Cara de pau",
    meaning:
      "Pessoa descarada, que age sem vergonha ou finge inocência diante de algo errado.",
    origin:
      "A origem é incerta. A explicação mais comum compara a cara à madeira, que é dura e não muda de expressão.",
    why: "A madeira não cora nem se mexe. O cara de pau mente ou pede o impossível sem mudar o rosto.",
    example: "Ele pediu dinheiro emprestado de novo, é muito cara de pau.",
  },
  {
    id: "armar-um-barraco",
    text: "Armar um barraco",
    meaning:
      "Provocar uma discussão feia e barulhenta, em público, com gritaria e escândalo.",
    origin:
      "A origem é incerta. A expressão usa 'armar', de montar, ligado à ideia de uma cena que se monta de repente diante dos outros.",
    why: "Quem arma um barraco monta uma cena no lugar. O barraco é precário e chama atenção por ser tão exposto.",
    example: "Ela armou um barraco no restaurante porque o pedido atrasou.",
  },
  {
    id: "tirar-onda",
    text: "Tirar onda",
    meaning:
      "Exibir-se, fazer pose ou se gabar. Também pode significar zombar de alguém de modo leve.",
    origin:
      "A origem é incerta. A gíria é antiga e a imagem pode vir de quem 'surfa' a onda e se mostra para quem está olhando.",
    why: "Quem tira onda se mostra para a plateia, como o surfista que desliza na crista. O foco é a pose.",
    example: "Ele chegou de carro novo só para tirar onda com a turma.",
  },
  {
    id: "ja-era",
    text: "Já era",
    meaning:
      "Acabou, ficou ultrapassado ou perdeu a chance. Também serve para dizer que algo não tem mais volta.",
    origin:
      "A origem não é documentada. É uma gíria urbana de várias décadas, usada em cidades de todo o país.",
    why: "A frase diz no passado o que acabou. Quem fala 'já era' trata a situação como página virada.",
    example: "Perdeu o prazo da matrícula? Já era, só no ano que vem.",
  },
  {
    id: "estou-nem-ai",
    text: "Tô nem aí",
    meaning:
      "Não ligar para algo ou alguém, demonstrar indiferença total diante de uma opinião ou crítica.",
    origin:
      "A origem não é documentada. A forma reduzida 'tô nem aí' ficou comum na fala informal e é entendida em todo o país.",
    why: "Quem está 'nem aí' não se deixa atingir. A expressão fala de um lugar longe, onde o problema não chega.",
    example: "Podem falar o que quiserem, tô nem aí.",
  },
  {
    id: "pegar-leve",
    text: "Pegar leve",
    meaning:
      "Não exagerar, agir com moderação ou ser mais brando com alguém. Também serve como pedido de calma.",
    origin:
      "A origem não é documentada. A expressão contrasta com 'pegar pesado', que fala de esforço ou rigor extremo.",
    why: "Pegar algo leve é carregar sem peso. A imagem dá a ideia de aliviar o ritmo ou a dureza.",
    example: "Pega leve com ele, é o primeiro dia de trabalho.",
  },
  {
    id: "vou-nessa",
    text: "Vou nessa",
    meaning:
      "Despedida informal, como 'estou indo'. Também diz que a pessoa segue uma ideia ou decisão.",
    origin:
      "A origem não é documentada. A forma reduzida é comum na fala informal e atravessa gerações.",
    why: "A pessoa diz que vai 'nessa', numa direção qualquer. O tom solto combina com despedidas rápidas.",
    example: "Já é tarde, vou nessa. A gente se fala amanhã.",
  },
  {
    id: "tamo-junto",
    text: "Tamo junto",
    meaning:
      "Gíria de apoio, que diz 'estou com você', 'conta comigo' ou serve de despedida amigável.",
    origin:
      "A origem não é documentada. A frase é a forma falada de 'estamos juntos' e ficou popular em grupos urbanos.",
    why: "A frase afirma parceria em poucas palavras. Quem fala está dizendo que não vai deixar o outro sozinho.",
    example: "Se precisar de ajuda na mudança, tamo junto.",
  },
  {
    id: "mandar-bem",
    text: "Mandar bem",
    meaning:
      "Ter bom desempenho, fazer algo com talento ou se sair muito bem numa tarefa.",
    origin:
      "A origem não é documentada. O verbo 'mandar' é usado em vários sentidos na gíria, como 'mandar ver' e 'mandar um recado'.",
    why: "Quem manda bem entrega o resultado com firmeza. O verbo dá a ideia de ação segura, sem hesitar.",
    example: "Você mandou bem na apresentação, o cliente adorou.",
  },
  {
    id: "gente-boa",
    text: "Gente boa",
    meaning:
      "Pessoa simpática, confiável e de bom trato, com quem é fácil conviver.",
    origin:
      "A origem não é documentada. É uma expressão simples, em uso há muitas décadas na fala informal do Brasil.",
    why: "Chamar alguém de gente boa resume numa frase a boa índole. Não precisa de lista de qualidades.",
    example: "O vizinho novo é gente boa, já me emprestou a escada.",
  },
  {
    id: "cair-do-cavalo",
    text: "Cair do cavalo",
    meaning: "Levar um susto ou um choque que derruba as certezas.",
    origin:
      "A origem é incerta. É uma imagem popular, muitas vezes associada ao episódio da conversão de Paulo. Mas a Bíblia não cita cavalo.",
    why: "Cair do cavalo é sair da posição alta. Vale para quem perde a pose de repente.",
    example: "Quando viu o resultado, caiu do cavalo.",
  },
  {
    id: "pegar-de-calcas-curtas",
    text: "Pegar de calças curtas",
    meaning: "Pegar alguém desprevenido, sem preparo para o que vem.",
    origin:
      "A origem é incerta. Há várias explicações, nenhuma segura. A imagem é a de alguém flagrado de forma vexatória.",
    why: "Ser pego de calças curtas é ser visto sem preparo, quase sem roupa. Vale para o despreparo geral.",
    example: "A prova surpresa pegou a turma de calças curtas.",
  },
  {
    id: "vender-o-peixe",
    text: "Vender o peixe",
    meaning: "Convencer alguém, apresentando bem uma ideia ou produto.",
    origin:
      "A origem é incerta. A imagem é a do vendedor de feira que anuncia o peixe. Não há registro exato.",
    why: "Vender peixe exige argumento e bom discurso. Assim, vender o peixe é dominar a conversa.",
    example: "Ele vendeu o peixe direitinho e fechou o negócio.",
  },
  {
    id: "botar-a-boca-no-trombone",
    text: "Botar a boca no trombone",
    meaning: "Denunciar algo publicamente, fazendo barulho.",
    origin:
      "A origem é incerta. A imagem é a do instrumento barulhento, mas a expressão não tem registro de origem seguro.",
    why: "O trombone é ouvido de longe. Quem fala nele quer que todo mundo escute.",
    example: "Ele botou a boca no trombone sobre o desvio.",
  },
  {
    id: "ficar-na-mao",
    text: "Ficar na mão",
    meaning: "Ficar sem o que esperava, ou ser deixado sem ajuda.",
    origin:
      "A origem é incerta. Não há origem documentada. A imagem é a de ficar sem nada nas mãos.",
    why: "Mão vazia é o fim da esperança. Serve para quem é abandonado ou perde o que tinha.",
    example: "O fornecedor sumiu e fiquei na mão.",
  },
  {
    id: "ficar-a-pe",
    text: "Ficar a pé",
    meaning: "Ficar sem transporte ou sem recursos para resolver algo.",
    origin:
      "Vem da imagem de alguém sem cavalo, carro ou condução. A origem exata não é documentada.",
    why: "Quem está a pé depende só das pernas. A expressão passou para qualquer falta de meios.",
    example: "O ônibus quebrou e fiquei a pé.",
  },
  {
    id: "um-dia-da-caca-outro-do-cacador",
    text: "Um dia da caça, outro do caçador",
    meaning: "Quem se aproveita dos outros hoje pode ser a vítima amanhã.",
    origin:
      "Provérbio popular de autoria desconhecida. A imagem é a dos papéis que se invertem.",
    why: "Hoje o caçador manda, amanhã vira presa. A sorte muda para todos.",
    example: "Ele abusou de todo mundo, mas um dia da caça, outro do caçador.",
  },
  {
    id: "estar-de-pe-atras",
    text: "Estar de pé atrás",
    meaning: "Estar desconfiado ou com receio de algo.",
    origin:
      "A origem é incerta. Não há registro seguro. A imagem é a de manter um pé recuado, pronto para sair.",
    why: "Quem põe o pé atrás está cauteloso. O gesto indica desconfiança.",
    example: "Fiquei de pé atrás com a oferta.",
  },
  {
    id: "estar-em-maus-lencois",
    text: "Estar em maus lençóis",
    meaning: "Estar numa situação difícil, de problema ou perigo.",
    origin:
      "A origem é incerta. A imagem é a de uma cama desconfortável, mas não há registro seguro.",
    why: "Lençol ruim tira o sono. A imagem passou a valer para qualquer enrascada.",
    example: "Com a dívida crescendo, ele está em maus lençóis.",
  },
  {
    id: "ser-carne-de-pescoco",
    text: "Ser carne de pescoço",
    meaning: "Ser difícil de lidar, resistente ou duro de vencer.",
    origin:
      "A origem é incerta. Não há registro seguro. A carne do pescoço é conhecida por ser dura.",
    why: "Carne dura é difícil de mastigar. Gente assim dá trabalho para vencer.",
    example: "Aquele zagueiro é carne de pescoço.",
  },
  {
    id: "sem-tirar-nem-por",
    text: "Sem tirar nem pôr",
    meaning: "Exatamente igual, sem nenhuma diferença.",
    origin:
      "Não há origem documentada. Fala de algo em que nada foi tirado nem acrescentado.",
    why: "Se não falta nem sobra nada, é fiel ao original.",
    example: "Ele é o pai, sem tirar nem pôr.",
  },
  {
    id: "em-boca-fechada-nao-entra-mosca",
    text: "Em boca fechada não entra mosca",
    meaning: "Quem fica calado evita problemas.",
    origin:
      "Provérbio popular antigo, sem autor conhecido, que vale como conselho de discrição.",
    why: "A mosca só entra se a boca estiver aberta. Falar demais traz encrenca.",
    example: "Ficou quieto na reunião. Em boca fechada não entra mosca.",
  },
  {
    id: "falar-com-os-seus-botoes",
    text: "Falar com os seus botões",
    meaning: "Pensar em voz baixa, falando sozinho.",
    origin:
      "A origem é incerta. Não há origem documentada. Os botões da roupa seriam os ouvintes imaginários.",
    why: "Sem ninguém por perto, os botões da camisa viram plateia.",
    example: "Fiquei falando com os meus botões sobre o que fazer.",
  },
  {
    id: "fazer-boca-de-siri",
    text: "Fazer boca de siri",
    meaning: "Ficar calado, guardando segredo.",
    origin:
      "A origem é incerta. Não há origem documentada. O siri é conhecido por parecer não ter boca visível.",
    why: "Siri não fala. Quem o imita guarda silêncio.",
    example: "Fiz boca de siri e não contei nada.",
  },
  {
    id: "ficar-chupando-o-dedo",
    text: "Ficar chupando o dedo",
    meaning: "Ficar sem nada, enquanto os outros ficam com tudo.",
    origin:
      "A origem é incerta. Não há origem documentada. A imagem é a de quem, sem comida, chupa o dedo.",
    why: "Chupar o dedo é ficar sem o que se esperava. Todo mundo comeu e sobrou só o dedo.",
    example: "Cheguei tarde e fiquei chupando o dedo.",
  },
  {
    id: "nao-ter-pe-nem-cabeca",
    text: "Não ter pé nem cabeça",
    meaning: "Não fazer sentido, ser confuso ou desconexo.",
    origin:
      "A origem é incerta. Não há origem documentada. Um ser sem pé nem cabeça não tem forma.",
    why: "Sem começo nem fim, não dá para entender nada. É o oposto de algo bem montado.",
    example: "A história dele não tem pé nem cabeça.",
  },
  {
    id: "arrastar-uma-asa",
    text: "Arrastar uma asa",
    meaning: "Paquerar ou cortejar alguém.",
    origin:
      "A explicação comum lembra o macho de algumas aves que arrasta a asa para chamar a fêmea. É uma comparação popular, sem registro de origem.",
    why: "O gesto da ave é de sedução. A comparação passou para o flerte.",
    example: "Ele passou a festa arrastando uma asa para a vizinha.",
  },
  {
    id: "morrer-na-praia",
    text: "Morrer na praia",
    meaning: "Falhar quando faltava pouco para conseguir.",
    origin:
      "A origem é incerta. A imagem é a do nadador que não chega à areia. Não há registro seguro.",
    why: "Quem enfrenta o mar e morre na praia perdeu quando estava perto.",
    example: "O time morreu na praia, perdeu nos acréscimos.",
  },
  {
    id: "pagar-na-mesma-moeda",
    text: "Pagar na mesma moeda",
    meaning: "Retribuir a quem fez algo respondendo da mesma maneira.",
    origin:
      "Parece vir da ideia de pagar uma dívida no mesmo valor ou forma. A origem exata não é documentada.",
    why: "Quem paga na mesma moeda devolve igual. Serve para o bem e para o mal.",
    example: "Ele me ignorou, então paguei na mesma moeda.",
  },
  {
    id: "comer-na-palma-da-mao",
    text: "Comer na palma da mão",
    meaning: "Ter total domínio sobre alguém, que obedece sem reclamar.",
    origin:
      "Vem da imagem de um animal manso comendo na mão do dono. A origem exata do uso figurado não é registrada.",
    why: "Quem come na palma da mão confia e obedece. Fica sob o comando de quem alimenta.",
    example: "O prefeito tem a câmara comendo na palma da mão.",
  },
  {
    id: "abrir-o-bico",
    text: "Abrir o bico",
    meaning: "Revelar um segredo, contar o que não devia.",
    origin:
      "A origem é incerta. Não há registro seguro. A imagem é a do pássaro que começa a cantar.",
    why: "Pássaro de bico aberto canta. Quem abre o bico fala o que sabe.",
    example: "Pressionado, abriu o bico e entregou todo mundo.",
  },
  {
    id: "pe-frio",
    text: "Pé-frio",
    meaning: "Pessoa que supostamente dá azar ou que traz má sorte.",
    origin:
      "A origem é incerta. Vem de superstição popular. Não há origem documentada.",
    why: "Pé frio seria o oposto de pé quente, que traz sorte. A ideia é de agouro.",
    example: "Não chama ele, é pé-frio.",
  },
  {
    id: "dar-uma-de-joao-bobo",
    text: "Dar uma de joão-bobo",
    meaning: "Fingir-se de bobo para tirar vantagem.",
    origin:
      "A origem é incerta. Não há origem documentada. O nome João aparece em várias expressões populares.",
    why: "Fazer-se de bobo diminui a desconfiança. A esperteza se esconde atrás da simplicidade.",
    example: "Ele deu uma de joão-bobo para não ajudar.",
  },
  {
    id: "fazer-cera",
    text: "Fazer cera",
    meaning: "Enrolar de propósito, perdendo tempo para evitar fazer algo.",
    origin:
      "A origem é incerta. É comum no futebol, para o time que quer ganhar tempo. A origem exata do termo não é documentada.",
    why: "Fazer cera é demorar sem necessidade. A expressão foi do esporte para o trabalho.",
    example: "Parou de fazer cera e entregue o relatório.",
  },
  {
    id: "empurrar-com-a-barriga",
    text: "Empurrar com a barriga",
    meaning: "Adiar algo que deveria ser resolvido, deixando para depois.",
    origin:
      "A origem é incerta. Não há origem documentada. A imagem é a de empurrar algo sem usar as mãos.",
    why: "Empurrar com a barriga é fazer o mínimo. O problema só anda um pouco.",
    example: "Vai empurrando o prazo com a barriga.",
  },
  {
    id: "dar-tiro-no-pe",
    text: "Dar tiro no pé",
    meaning: "Prejudicar a si mesmo com uma ação que devia ajudar.",
    origin:
      "Não há origem documentada. A imagem é a de errar o alvo e se ferir.",
    why: "Atirar no próprio pé é se machucar sem querer. A ironia é o dano feito por conta própria.",
    example: "Ao mentir no currículo, deu um tiro no pé.",
  },
  {
    id: "fazer-media",
    text: "Fazer média",
    meaning: "Agradar alguém por interesse, tentando ficar bem com ele.",
    origin:
      "A origem é incerta. Não há origem documentada. Pode ter relação com o sentido de nota ou média na escola.",
    why: "Fazer média é agradar o necessário. O objetivo é ficar bem sem esforço.",
    example: "Só faz média com o chefe.",
  },
  {
    id: "ir-pro-vinagre",
    text: "Ir pro vinagre",
    meaning: "Dar errado, estragar ou fracassar.",
    origin:
      "A origem é incerta. Uma explicação diz que o vinho que estraga vira vinagre. Mas a origem não é comprovada.",
    why: "Vinho ruim vira vinagre. O plano que desanda segue o mesmo caminho.",
    example: "Com a chuva, o passeio foi pro vinagre.",
  },
  {
    id: "sapo-de-fora-nao-chia",
    text: "Sapo de fora não chia",
    meaning:
      "Quem está de fora não deve opinar nem reclamar de algo que não vive por dentro.",
    origin:
      "A origem não é documentada. É um ditado de tradição oral, usado em todo o Brasil.",
    why: "Só o sapo que mora na lagoa coaxa ali. O de fora fica calado, e a imagem diz que só quem está dentro tem voz.",
    example: "Ele nem trabalha aqui e quer dar palpite? Sapo de fora não chia.",
  },
  {
    id: "gato-e-sapato",
    text: "Fazer gato e sapato de alguém",
    meaning:
      "Tratar alguém com desprezo, abusando dele ou humilhando sem consideração.",
    origin:
      "A origem é incerta. Uma versão diz que vem de maus-tratos a gatos e sapos, mas isso não está documentado.",
    why: "Gato e sapato aparecem como coisas que se pisam e se maltratam sem dó. Quem é tratado assim vira objeto.",
    example: "O chefe fez gato e sapato dela na reunião inteira.",
  },
  {
    id: "gatos-pardos",
    text: "À noite todos os gatos são pardos",
    meaning:
      "No escuro ou na confusão, as diferenças somem e tudo parece igual.",
    origin:
      "É um provérbio antigo, presente em várias línguas europeias, como o francês e o inglês. O autor original não é conhecido.",
    why: "Sem luz não se vê a cor do pelo, e todo gato parece pardo. Sem clareza, bom e ruim se confundem.",
    example: "Na festa à fantasia, à noite todos os gatos são pardos.",
  },
  {
    id: "gato-sai-ratos-festa",
    text: "Quando o gato sai, os ratos fazem a festa",
    meaning:
      "Sem a autoridade por perto, os subordinados se soltam e fazem o que não podiam.",
    origin:
      "A origem não é documentada. É um ditado de tradição oral que usa a relação natural entre gato e rato.",
    why: "O gato mantém os ratos escondidos. Quando ele some, eles saem e aproveitam. Vale para chefe, professor ou pai.",
    example:
      "O diretor viajou e a sala virou bagunça. Quando o gato sai, os ratos fazem a festa.",
  },
  {
    id: "cachorro-mordido-de-cobra",
    text: "Cachorro mordido de cobra tem medo de linguiça",
    meaning:
      "Quem já se machucou fica com medo até de coisas parecidas e inofensivas.",
    origin:
      "A origem não é documentada. É um ditado popular, e a linguiça entra pela semelhança de forma com a cobra.",
    why: "A linguiça comprida lembra uma cobra para o cachorro assustado. O trauma faz tudo parecido virar ameaça.",
    example:
      "Depois do golpe, ele desconfia até de amigo. Cachorro mordido de cobra tem medo de linguiça.",
  },
  {
    id: "cobra-que-nao-anda",
    text: "Cobra que não anda não engole sapo",
    meaning:
      "Quem fica parado não consegue nada. É preciso se mexer para conquistar.",
    origin:
      "A origem não é documentada. É um ditado de tradição oral que parte da vida da cobra, que precisa sair atrás da presa.",
    why: "A cobra só come se sair caçando. Quem espera tudo cair do céu fica de barriga vazia.",
    example:
      "Manda o currículo, vai atrás! Cobra que não anda não engole sapo.",
  },
  {
    id: "parte-do-leao",
    text: "A parte do leão",
    meaning: "A maior e melhor porção de algo, tomada por quem tem mais poder.",
    origin:
      "Vem de uma fábula atribuída a Esopo, em que o leão caça com outros animais e fica com quase toda a presa. La Fontaine também recontou a história.",
    why: "O leão manda e se serve primeiro, deixando migalhas. Por isso a expressão aponta uma divisão injusta.",
    example: "O sócio majoritário ficou com a parte do leão do lucro.",
  },
  {
    id: "pescar-em-aguas-turvas",
    text: "Pescar em águas turvas",
    meaning: "Tirar proveito de uma situação confusa ou de desordem.",
    origin:
      "A origem é incerta. A explicação mais comum vem da pesca: em água barrenta, o peixe enxerga menos a rede.",
    why: "Na água turva ninguém vê direito, e o pescador leva vantagem. Na confusão, o esperto age sem ser notado.",
    example: "Aproveitou a crise da empresa para pescar em águas turvas.",
  },
  {
    id: "camarao-que-dorme",
    text: "Camarão que dorme a onda leva",
    meaning: "Quem se distrai ou fica parado perde oportunidades e se dá mal.",
    origin:
      "A origem não é documentada. É um ditado popular brasileiro, de uso muito difundido.",
    why: "O camarão que cochila é arrastado pela onda. Quem vacila é levado pelos acontecimentos.",
    example: "Acorda pra vida, camarão que dorme a onda leva.",
  },
  {
    id: "cavalo-selado",
    text: "Cavalo selado não passa duas vezes",
    meaning:
      "Uma boa oportunidade aparece uma vez e não volta, então é preciso aproveitar na hora.",
    origin:
      "A origem não é documentada. A imagem vem da vida rural, em que um cavalo pronto para montar era uma chance de seguir viagem.",
    why: "O cavalo selado está pronto para partir. Se você não monta, ele segue adiante e a chance passa.",
    example: "A vaga é sua agora. Cavalo selado não passa duas vezes.",
  },
  {
    id: "cavalo-de-batalha",
    text: "Cavalo de batalha",
    meaning:
      "O ponto forte, o assunto ou o argumento principal de alguém, no qual ele sempre insiste.",
    origin:
      "Vem do cavalo treinado para a guerra, que o cavaleiro usava nos combates. Ganhou sentido figurado ao designar o que a pessoa mais usa para vencer.",
    why: "O cavalo de batalha é o melhor do cavaleiro. Na fala, é o tema ou a arma que a pessoa mais domina.",
    example: "Segurança pública é o cavalo de batalha desse candidato.",
  },
  {
    id: "mosca-na-sopa",
    text: "Mosca na sopa",
    meaning: "Algo ou alguém que estraga um momento bom ou atrapalha um plano.",
    origin:
      "A origem não é documentada. A imagem é a de um prato quente que ficou estragado por uma mosca que caiu nele.",
    why: "Uma mosca basta para ninguém querer a sopa. Um detalhe pequeno estraga o todo.",
    example: "A festa ia ótima, mas a chuva foi a mosca na sopa.",
  },
  {
    id: "lamber-a-cria",
    text: "Lamber a cria",
    meaning:
      "Mostrar orgulho exagerado e cuidado com o que é seu, como filhos ou trabalho.",
    origin:
      "Vem do hábito de muitos bichos, como vacas e gatas, de lamber o filhote recém-nascido. A expressão passou a descrever o orgulho de quem cuida do que criou.",
    why: "A mãe animal lambe o filhote por carinho. Quem lambe a cria mostra o mesmo afeto, muitas vezes de forma exagerada.",
    example: "Ele não para de mostrar foto da filha, só lambendo a cria.",
  },
  {
    id: "bezerro-de-ouro",
    text: "Bezerro de ouro",
    meaning: "O dinheiro e a riqueza vistos como objeto de adoração.",
    origin:
      "Vem da Bíblia, no livro do Êxodo. Enquanto Moisés estava no monte Sinai, o povo fez um bezerro de ouro e o adorou.",
    why: "O bezerro de ouro é um ídolo feito de metal. Quem adora o dinheiro faz a mesma troca.",
    example: "Para ele, o lucro virou bezerro de ouro.",
  },
  {
    id: "trocar-alhos-por-bugalhos",
    text: "Trocar alhos por bugalhos",
    meaning:
      "Confundir duas coisas bem diferentes, ou misturar assuntos sem relação.",
    origin:
      "A origem exata é incerta. A expressão veio de Portugal e usa a semelhança de som entre alho e bugalho, a galha do carvalho.",
    why: "Alho e bugalho soam parecidos, mas são coisas distintas. Trocar um pelo outro é o engano de quem não distingue.",
    example:
      "Você está trocando alhos por bugalhos: uma coisa não tem a ver com a outra.",
  },
  {
    id: "mingau-pelas-beiradas",
    text: "Comer mingau pelas beiradas",
    meaning: "Agir com cuidado, aos poucos, evitando o centro do problema.",
    origin:
      "A origem não é documentada. O mingau esfria primeiro nas beiradas do prato, e comer por ali evita queimar a boca.",
    why: "No centro o mingau está quente, na borda esfria. Quem come por lá não se queima, e quem age assim evita o risco.",
    example:
      "Ele foi comendo mingau pelas beiradas até assumir o comando da equipe.",
  },
  {
    id: "farinha-pouca-meu-pirao",
    text: "Farinha pouca, meu pirão primeiro",
    meaning: "Quando falta, cada um pensa primeiro em si e nos seus.",
    origin:
      "A origem não é documentada. Pirão é papa de farinha com caldo, base de muita mesa no Brasil.",
    why: "Com pouca farinha, o pirão do dono vem antes. A escassez faz cada um cuidar do seu prato.",
    example: "No fim do mês, farinha pouca, meu pirão primeiro.",
  },
  {
    id: "preco-de-banana",
    text: "Preço de banana",
    meaning: "Preço muito baixo, quase de graça.",
    origin:
      "A origem não é documentada. A banana é uma fruta barata e comum no Brasil, o que sustenta a comparação.",
    why: "Banana é das frutas mais baratas e abundantes. Dizer que algo custa isso é dizer que quase não vale nada.",
    example: "Comprei o sofá a preço de banana na liquidação.",
  },
  {
    id: "jabuticaba",
    text: "Isso é jabuticaba",
    meaning:
      "Coisa que só existe no Brasil, em geral criticada, como regra ou imposto sem equivalente lá fora.",
    origin:
      "A jabuticaba é fruta nativa do Brasil e quase não se encontra fora daqui. O uso figurado é comum em debates sobre leis e impostos.",
    why: "A jabuticaba só nasce direito no Brasil. O que é exclusivo daqui ganha o apelido.",
    example: "Essa taxa é uma jabuticaba: nenhum outro país cobra.",
  },
  {
    id: "uvas-estao-verdes",
    text: "As uvas estão verdes",
    meaning:
      "Desprezar o que não se consegue alcançar, fingindo que não valia a pena.",
    origin:
      "Vem da fábula A Raposa e as Uvas, atribuída a Esopo e recontada por La Fontaine. A raposa não alcança os cachos e diz que estão verdes.",
    why: "A raposa se consola dizendo que a uva está azeda. Quem faz isso esconde a frustração.",
    example: "Ele diz que não queria a vaga? As uvas estão verdes.",
  },
  {
    id: "dedo-podre",
    text: "Dedo podre",
    meaning:
      "Quem escolhe mal, em geral parceiros, ou tem azar com tudo que escolhe.",
    origin: "A origem não é documentada.",
    why: "Parece que tudo o que o dedo escolhe apodrece. A imagem põe a culpa das más escolhas no toque.",
    example: "Ela tem dedo podre: todo namorado vira problema.",
  },
  {
    id: "empinar-o-nariz",
    text: "Empinar o nariz",
    meaning: "Agir com arrogância, se achar superior aos outros.",
    origin: "A origem não é documentada.",
    why: "Quem ergue o nariz olha os outros de cima para baixo. É a postura do corpo que mostra soberba.",
    example: "Depois da promoção, ele empinou o nariz.",
  },
  {
    id: "pao-com-o-suor-do-rosto",
    text: "Ganhar o pão com o suor do rosto",
    meaning: "Viver do próprio trabalho, com esforço.",
    origin:
      "Vem da Bíblia, em Gênesis 3:19, quando Deus diz a Adão que ele comerá o pão com o suor do seu rosto.",
    why: "O pão é o sustento e o suor é o esforço. A imagem diz que o trabalho paga a comida.",
    example: "Meu pai ganhou o pão com o suor do rosto.",
  },
  {
    id: "custar-uma-nota",
    text: "Custar uma nota",
    meaning: "Ser muito caro.",
    origin:
      "Nota é a cédula de dinheiro. A origem da expressão não é documentada.",
    why: "Dizer que custa uma nota é dizer que custa um bom monte de cédulas, e não uma só.",
    example: "Esse celular custou uma nota.",
  },
  {
    id: "de-graca-ate-injecao-na-testa",
    text: "De graça até injeção na testa",
    meaning: "Quando é gratuito, qualquer um aceita, até o que é desagradável.",
    origin: "A origem não é documentada.",
    why: "A imagem exagera de propósito: até algo doloroso e absurdo vira atraente quando não custa nada.",
    example: "Fila enorme por brinde? De graça até injeção na testa.",
  },
  {
    id: "tostao-furado",
    text: "Não ter um tostão furado",
    meaning: "Estar sem dinheiro nenhum.",
    origin:
      "Tostão era uma moeda antiga de pouco valor, usada em Portugal e no Brasil. A origem do 'furado' não é documentada.",
    why: "Se nem a moeda mais miúda existe no bolso, o dinheiro acabou de vez. O 'furado' reforça o pouco valor.",
    example: "Terminou o mês sem um tostão furado.",
  },
  {
    id: "descobrir-um-santo-para-cobrir-outro",
    text: "Descobrir um santo para cobrir outro",
    meaning:
      "Resolver um problema criando outro, como pagar uma dívida com outra.",
    origin: "A origem não é documentada.",
    why: "Cobrir um santo deixa outro à mostra. A imagem serve para a dívida paga com outra dívida.",
    example:
      "Pagar cartão com empréstimo é descobrir um santo para cobrir outro.",
  },
  {
    id: "cortesia-com-chapeu-alheio",
    text: "Fazer cortesia com chapéu alheio",
    meaning: "Ser generoso com o que pertence a outra pessoa.",
    origin: "A origem não é documentada. É um dito popular antigo.",
    why: "O chapéu é do outro, mas quem oferece leva o crédito da gentileza. É generosidade sem custo.",
    example: "Prometeu a casa do primo? Isso é cortesia com chapéu alheio.",
  },
  {
    id: "sandalias-da-humildade",
    text: "Calçar as sandálias da humildade",
    meaning: "Adotar uma postura humilde; ou pedir isso a quem se acha demais.",
    origin:
      "A origem não é documentada. É um dito bem-humorado, usado para pedir modéstia.",
    why: "Sandália é calçado simples, sem pompa. Trocar o sapato chique por ela é baixar a pose.",
    example: "Precisou calçar as sandálias da humildade para pedir ajuda.",
  },
  {
    id: "fechado-para-balanco",
    text: "Fechado para balanço",
    meaning: "Indisponível, sem querer atender ninguém.",
    origin:
      "Vem do aviso de lojas que fecham as portas para fazer o balanço contábil e contar o estoque.",
    why: "Em loja fechada para balanço ninguém entra. A pessoa fechada para balanço também não quer ser incomodada.",
    example: "Hoje estou fechado para balanço, só falo amanhã.",
  },
  {
    id: "costas-quentes",
    text: "Ter as costas quentes",
    meaning: "Ter a proteção de alguém poderoso, que garante apoio.",
    origin: "A origem não é documentada.",
    why: "Costas quentes são costas cobertas e protegidas. Quem as tem se sente amparado por trás.",
    example: "Ele ousa porque tem as costas quentes na diretoria.",
  },
  {
    id: "unha-de-fome",
    text: "Unha de fome",
    meaning: "Pessoa muito avarenta, que não gasta nem com o necessário.",
    origin: "A origem não é documentada.",
    why: "A imagem não é clara. Ela retrata alguém tão apegado ao dinheiro que vive como se passasse fome.",
    example: "Esse unha de fome nunca paga a rodada.",
  },
  {
    id: "aguas-passadas",
    text: "Águas passadas não movem moinhos",
    meaning:
      "O que já passou não adianta mais. Melhor deixar o passado de lado.",
    origin:
      "A origem é incerta e o autor é desconhecido. A imagem vem dos moinhos movidos pela força de um rio ou riacho.",
    why: "A água que já passou pela roda do moinho não gira mais nada. Do mesmo modo, mágoa antiga não resolve o presente.",
    example: "Já pedi desculpa, águas passadas não movem moinhos.",
  },
  {
    id: "ceu-de-brigadeiro",
    text: "Céu de brigadeiro",
    meaning: "Situação tranquila, sem obstáculos nem ameaças à vista.",
    origin:
      "A origem é incerta. Costuma ser ligada à aviação, onde o termo descreve céu sem nuvens e com boa visibilidade para o voo.",
    why: "Céu limpo é o sonho de qualquer piloto: voo calmo e sem surpresa. A imagem passou para qualquer fase em que tudo corre bem.",
    example:
      "Depois de fechar o contrato, a empresa navega em céu de brigadeiro.",
  },
  {
    id: "andorinha-verao",
    text: "Uma andorinha só não faz verão",
    meaning:
      "Um único sinal ou fato isolado não prova nada. Também serve para dizer que ninguém vence sozinho.",
    origin:
      "A ideia aparece na Ética a Nicômaco, de Aristóteles, em que uma andorinha não faz primavera. No Brasil virou 'verão'.",
    why: "Ver uma andorinha não garante que a estação mudou. Um caso isolado também não prova que tudo mudou.",
    example: "Um bom mês não mostra tendência. Uma andorinha só não faz verão.",
  },
  {
    id: "na-chuva-e-pra-se-molhar",
    text: "Quem está na chuva é para se molhar",
    meaning:
      "Quem se envolve numa situação precisa aceitar as consequências que vêm com ela.",
    origin:
      "A origem não é documentada. A imagem é simples: quem sai na chuva não pode reclamar de ficar encharcado.",
    why: "Se escolheu ficar no meio do problema, vai sentir o efeito dele. A frase cobra responsabilidade de quem entrou na confusão.",
    example: "Quem está na chuva é para se molhar, agora aguenta a cobrança.",
  },
  {
    id: "noite-e-uma-crianca",
    text: "A noite é uma criança",
    meaning:
      "Ainda é cedo e dá tempo de aproveitar mais, a diversão está só começando.",
    origin:
      "A origem não é documentada. A imagem é de que a noite, no começo, é nova e ainda tem muita vida pela frente.",
    why: "Criança tem a vida toda pela frente. Por isso a frase fala de uma noite que mal começou e ainda promete muito.",
    example: "Já vai embora? A noite é uma criança!",
  },
  {
    id: "ver-estrelas",
    text: "Ver estrelas",
    meaning:
      "Sentir uma dor forte, em geral por uma pancada, como se houvesse luzes piscando.",
    origin:
      "A origem não é documentada. A imagem vem do efeito real: uma pancada na cabeça ou no rosto pode fazer a pessoa enxergar pontos de luz.",
    why: "Depois de uma batida forte, a visão fica cheia de pontinhos brilhantes, como estrelas. O corpo se confunde por um instante.",
    example: "Bati o dedinho na quina da mesa e vi estrelas.",
  },
  {
    id: "marolinha",
    text: "Marolinha",
    meaning:
      "Problema pequeno, que não deve causar grandes estragos. Usada para minimizar uma crise.",
    origin:
      "Ficou famosa em 2008, quando o então presidente Lula disse que a crise financeira mundial chegaria ao Brasil só como uma marolinha.",
    why: "Marola é a onda pequena e fraca do mar. Chamar algo de marolinha é dizer que o estrago será leve.",
    example: "Ele diz que o prejuízo é só uma marolinha.",
  },
  {
    id: "cruz-e-caldeirinha",
    text: "Entre a cruz e a caldeirinha",
    meaning:
      "Estar numa situação difícil, sem boa saída, pressionado por dois lados.",
    origin:
      "A origem é incerta. A versão mais citada liga a frase aos ritos religiosos, em que a cruz e a caldeirinha de água benta eram usadas por padres.",
    why: "A imagem pinta quem está cercado de todos os lados, sem como escapar. A pessoa se vê pressionada por duas forças.",
    example:
      "Com o prazo apertado e o chefe cobrando, fiquei entre a cruz e a caldeirinha.",
  },
  {
    id: "malhar-o-judas",
    text: "Malhar o Judas",
    meaning: "Criticar ou descontar a raiva em alguém, sem dó nem piedade.",
    origin:
      "Vem de uma tradição do Sábado de Aleluia, em que bonecos de Judas são surrados e queimados. O costume chegou ao Brasil com os portugueses.",
    why: "Surrar o boneco do traidor virou imagem de quem despeja a fúria em alguém. O costume ainda existe em algumas cidades.",
    example: "Depois do jogo, a torcida malhou o Judas do time.",
  },
  {
    id: "linhas-tortas",
    text: "Deus escreve certo por linhas tortas",
    meaning:
      "Coisas ruins ou confusas podem levar a um bom resultado, de um jeito inesperado.",
    origin:
      "A origem é incerta. É um provérbio de tradição cristã, de origem portuguesa, que faz parte do uso popular há muito tempo.",
    why: "Quem escreve em linhas tortas ainda assim chega a um texto certo. Vale para quem não entende o motivo de um revés.",
    example:
      "Perdi o emprego, mas conheci minha esposa. Deus escreve certo por linhas tortas.",
  },
  {
    id: "deus-tarda-mas-nao-falha",
    text: "Deus tarda mas não falha",
    meaning: "A justiça ou a ajuda pode demorar, mas acaba chegando.",
    origin:
      "A origem não é documentada. É um ditado de fé popular, repetido em momentos de espera ou de injustiça.",
    why: "A frase promete que a demora não significa abandono. Quem espera com paciência acaba vendo a resposta.",
    example: "Ficou anos sem receber, mas Deus tarda e não falha.",
  },
  {
    id: "pregar-no-deserto",
    text: "Pregar no deserto",
    meaning: "Falar ou aconselhar sem que ninguém dê atenção.",
    origin:
      "A origem é incerta. A explicação mais citada liga a frase à Bíblia, onde João Batista é a 'voz que clama no deserto' e ninguém escuta.",
    why: "No deserto não há ninguém para ouvir. Quem prega ali fala sozinho, como quem dá conselho a quem não quer escutar.",
    example: "Dei o recado a todos, mas parece que preguei no deserto.",
  },
  {
    id: "mal-que-sempre-dure",
    text: "Não há mal que sempre dure nem bem que nunca acabe",
    meaning:
      "Nada é eterno: as dificuldades passam, mas as boas fases também acabam.",
    origin:
      "A origem não é documentada. É um provérbio de uso antigo em português, que serve de consolo na crise e de alerta na fartura.",
    why: "Tudo muda com o tempo, para o bem e para o mal. A frase pede calma na adversidade e humildade na boa fase.",
    example: "Está duro agora, mas não há mal que sempre dure.",
  },
  {
    id: "habito-nao-faz-o-monge",
    text: "O hábito não faz o monge",
    meaning: "A aparência não prova quem a pessoa é de verdade.",
    origin:
      "Vem de um provérbio medieval, que fala da roupa do monge, o hábito. Vestir o traje não torna ninguém religioso de verdade.",
    why: "Vestir roupa de monge não faz ninguém santo. A frase diz que o que importa é o caráter, não a aparência.",
    example: "Ele fala bonito, mas o hábito não faz o monge.",
  },
  {
    id: "aneis-e-dedos",
    text: "Vão-se os anéis, ficam os dedos",
    meaning:
      "Melhor perder bens do que perder o essencial, como a vida ou a saúde.",
    origin:
      "A origem não é documentada. O ditado é antigo, e os anéis simbolizam bens materiais, enquanto os dedos, o corpo.",
    why: "Joias se repõem, dedos não. A frase serve de consolo a quem perdeu dinheiro, mas se salvou.",
    example: "Perdi o carro no assalto, mas vão-se os anéis, ficam os dedos.",
  },
  {
    id: "rei-morto-rei-posto",
    text: "Rei morto, rei posto",
    meaning:
      "Quando alguém sai de um cargo, logo outro assume o lugar. Ninguém é insubstituível.",
    origin:
      "A origem é incerta. A frase lembra a tradição das monarquias, em que um novo rei assume logo após a morte do anterior.",
    why: "O trono não fica vazio. A expressão diz que o mundo segue, e quem sai de um posto é rapidamente trocado.",
    example: "O diretor saiu e já colocaram outro. Rei morto, rei posto.",
  },
  {
    id: "arretado",
    text: "Arretado",
    meaning:
      "No Nordeste, algo ou alguém muito bom, bonito ou corajoso. Serve de elogio para quase tudo.",
    origin:
      "A origem é incerta. Costuma-se ligar a palavra a 'arretar', do falar nordestino, mas essa ligação não é bem documentada.",
    why: "A palavra soa firme e cheia de energia. Chamar algo de arretado é dizer que ele chama atenção e não passa batido.",
    example:
      "Esse forró de ontem foi arretado, até hoje estou com o pé doendo.",
  },
  {
    id: "pense-num",
    text: "Pense num(a)...",
    meaning:
      "No Nordeste, abertura que anuncia algo no grau máximo: 'pense num calor' quer dizer um calor enorme.",
    origin:
      "A origem não é documentada. É um jeito de falar nordestino que se espalhou pelo país com o humor das redes e da televisão.",
    why: "O falante pede que você imagine o pior ou o melhor exemplo possível. Em seguida diz que o caso real é ainda maior.",
    example: "Pense num calor! Ontem em Fortaleza derreteu até o asfalto.",
  },
  {
    id: "se-lascar",
    text: "Se lascar",
    meaning:
      "No Nordeste, se dar mal, sofrer um prejuízo ou ficar numa situação difícil. 'Lascado' é quem está nessa.",
    origin:
      "Vem de 'lascar', que quer dizer rachar, partir em lascas. O uso para quem se dá mal ficou forte no falar nordestino.",
    why: "Quem se lasca se racha, se quebra. A imagem da madeira rachada serve para um plano que desandou.",
    example: "Se eu perder o prazo da inscrição, me lasquei.",
  },
  {
    id: "no-mineiro",
    text: "Nó!",
    meaning:
      "Em Minas Gerais, exclamação de espanto ou de admiração, como 'nossa!'.",
    origin:
      "A origem é incerta. A explicação mais comum é que seja uma forma encurtada de 'nossa', típica da fala mineira.",
    why: "É uma palavra curta, solta de repente, para reagir a algo grande ou inesperado. O sentido vem do tom e do contexto.",
    example: "Nó! Você viu o preço dessa casa?",
  },
  {
    id: "demais-da-conta",
    text: "Demais da conta",
    meaning:
      "Em Minas e Goiás, em quantidade ou grau enorme: 'bonito demais da conta' quer dizer muito bonito.",
    origin:
      "A origem não é documentada. É um intensificador antigo do interior, de uso forte em Minas Gerais e Goiás.",
    why: "A ideia é passar do que se pode contar. O que é demais da conta foge de qualquer medida.",
    example: "Tinha gente demais da conta na festa da roça.",
  },
  {
    id: "capaz",
    text: "Capaz!",
    meaning:
      "No Rio Grande do Sul, resposta que significa 'imagina' ou 'de jeito nenhum'.",
    origin:
      "A origem não é documentada. O uso gaúcho parece vir de uma frase como 'é capaz?', dita com ironia, e depois ficou só a palavra.",
    why: "Dita sozinha e em tom firme, a palavra nega a ideia sugerida. Vale tanto para recusar um agradecimento quanto para rejeitar algo absurdo.",
    example: "Você esqueceu a carteira? Capaz, está aqui comigo.",
  },
  {
    id: "barbaridade",
    text: "Barbaridade",
    meaning:
      "No Rio Grande do Sul, exclamação de admiração ou de espanto, boa ou ruim: 'Barbaridade, tchê!'.",
    origin:
      "A origem não é documentada. A palavra vem de 'barbaridade', no sentido de algo bárbaro, e no gaúcho virou interjeição.",
    why: "A palavra original fala de algo excessivo e fora do comum. Como exclamação, serve para qualquer coisa fora de série, seja bela ou terrível.",
    example: "Barbaridade, que churrasco bom esse domingo!",
  },
  {
    id: "egua",
    text: "Égua!",
    meaning:
      "No Pará e na Amazônia, exclamação de espanto, admiração ou irritação, dita sozinha ou no início da frase.",
    origin:
      "A origem não é documentada. A palavra, que significa fêmea do cavalo, virou interjeição própria da fala paraense.",
    why: "O sentido não tem relação com o animal. É só uma palavra curta e forte, que se usa para reagir a qualquer surpresa.",
    example: "Égua, mano, tu viu a chuva que caiu hoje em Belém?",
  },
  {
    id: "pai-degua",
    text: "Pai d'égua",
    meaning:
      "No Pará, algo muito bom, bonito ou excelente. Pode ser comida, lugar, pessoa ou situação.",
    origin:
      "A origem não é documentada. A ideia parte do 'égua' paraense, que virou intensificador, ligado a 'pai' no sentido de o melhor.",
    why: "A fórmula junta o 'égua' de espanto com o 'pai' de maioral. O resultado é um elogio no grau máximo.",
    example: "Esse tacacá tá pai d'égua, vale a viagem até Belém.",
  },
  {
    id: "mainha",
    text: "Mainha",
    meaning:
      "Na Bahia e no Nordeste, jeito carinhoso de chamar a mãe. O pai é 'painho'.",
    origin:
      "Vem de 'mãe minha', que na fala foi se encurtando até virar 'mainha'. É forma afetiva comum no Nordeste e na Bahia.",
    why: "A palavra junta 'mãe' e 'minha' em uma só, o que dá ao tratamento um tom de proximidade e de posse carinhosa.",
    example: "Vou pra casa de mainha no fim de semana, ela fez bolo.",
  },
  {
    id: "cair-para-segunda-divisao",
    text: "Cair para a segunda divisão",
    meaning:
      "Perder posição ou nível, como time rebaixado. Usa-se para empresas, pessoas ou projetos em declínio.",
    origin:
      "Vem do futebol: nos campeonatos por divisões, os piores times de uma série descem para a seguinte. A expressão foi levada a outros contextos.",
    why: "Quem cai de divisão perde prestígio, dinheiro e espaço. A imagem aplica-se bem a qualquer queda de nível.",
    example: "Se continuar assim, a loja vai cair para a segunda divisão.",
  },
  {
    id: "entrar-de-sola",
    text: "Entrar de sola",
    meaning:
      "Agir com agressividade e sem cerimônia, atropelando o outro numa discussão ou negociação.",
    origin:
      "Vem do futebol: a 'entrada de sola' é a falta em que o jogador chega com a sola da chuteira. A expressão passou a descrever atitudes duras fora do campo.",
    why: "Quem entra de sola ignora o jogo limpo e vai direto no confronto. Por isso a imagem virou sinônimo de truculência.",
    example: "Na reunião, ele entrou de sola e criticou o projeto inteiro.",
  },
  {
    id: "jogar-na-retranca",
    text: "Jogar na retranca",
    meaning:
      "Agir de forma defensiva, sem arriscar, apenas para evitar perder. Vale para negócios, debates e rotina.",
    origin:
      "Vem do futebol, onde 'retranca' é o esquema em que o time se fecha atrás para proteger o gol. A expressão passou ao uso geral.",
    why: "Quem joga na retranca abre mão de atacar para não ser atacado. A imagem serve para quem prefere segurança a ousadia.",
    example: "A empresa jogou na retranca e não lançou nada novo este ano.",
  },
  {
    id: "samba-de-uma-nota-so",
    text: "Samba de uma nota só",
    meaning: "Falar ou insistir sempre na mesma coisa, sem variar o assunto.",
    origin:
      "Vem do título de uma canção de Tom Jobim e Newton Mendonça, da época da bossa nova. A letra brinca com a melodia que se repete e com a ideia de conversa monótona.",
    why: "A música gira em torno de uma única nota. O que se repete sem variação cansa, como uma conversa que só fala do mesmo tema.",
    example: "Toda reunião vira samba de uma nota só: o orçamento.",
  },
  {
    id: "festa-de-arromba",
    text: "Festa de arromba",
    meaning:
      "Festa grande, animada e lotada, daquelas de que todo mundo lembra.",
    origin:
      "A origem é incerta. A ideia é de uma festa tão intensa que 'arromba' tudo, até a porta.",
    why: "Arrombar é abrir à força. A festa de arromba é tão cheia que não cabe no espaço e transborda.",
    example: "O casamento foi uma festa de arromba, durou até o amanhecer.",
  },
  {
    id: "pe-de-valsa",
    text: "Pé de valsa",
    meaning:
      "Pessoa que adora dançar e dança bem, sem deixar de ir a nenhum baile.",
    origin:
      "A origem não é documentada. A expressão tem ligação com a valsa, dança de salão tradicional e popular nos bailes do passado.",
    why: "O pé é o que carrega a pessoa pela pista. Chamar alguém de pé de valsa é dizer que ele não resiste a uma música.",
    example: "Meu avô é pé de valsa, ninguém aguenta o ritmo dele.",
  },
  {
    id: "atravessar-o-samba",
    text: "Atravessar o samba",
    meaning:
      "Interromper, atrapalhar ou estragar o andamento de algo que ia bem, com intervenção fora de hora.",
    origin:
      "A origem é incerta. A explicação mais comum vem da roda de samba e do desfile, onde quem entra fora do ritmo desorganiza todos.",
    why: "Samba depende de compasso. Quem atravessa quebra o ritmo coletivo e obriga todo mundo a recomeçar.",
    example:
      "Ele atravessou o samba da reunião com um assunto que não tinha nada a ver.",
  },
  {
    id: "tocar-o-terror",
    text: "Tocar o terror",
    meaning:
      "Criar confusão, assustar ou provocar tumulto de propósito. Também usado de modo brincalhão.",
    origin:
      "A origem não é documentada. Parece vir de 'tocar' no sentido de iniciar ou espalhar, ligado a causar medo.",
    why: "Quem toca o terror põe pânico em movimento, como quem começa uma música. A imagem aparece em brincadeiras e em ameaças.",
    example: "Os meninos tocaram o terror na festa e a mãe teve que intervir.",
  },
  {
    id: "arrasta-pe",
    text: "Arrasta-pé",
    meaning:
      "Baile popular animado, em geral de forró, onde se dança arrastando os pés no chão.",
    origin:
      "O nome vem do jeito de dançar o forró e outros ritmos populares, com os pés rente ao chão. A palavra ficou como sinônimo de baile.",
    why: "O pé arrasta no chão porque o passo é miúdo e contínuo. Dá nome a uma festa simples e cheia de gente.",
    example: "No sábado tem arrasta-pé na praça, vamos?",
  },
  {
    id: "fazer-fuzue",
    text: "Fazer fuzuê",
    meaning:
      "Fazer festa, barulho ou confusão animada. Pode ser divertido ou irritante, conforme o caso.",
    origin:
      "A origem não é documentada. A palavra 'fuzuê' é antiga na fala brasileira e já aparece em registros e canções populares.",
    why: "'Fuzuê' tem som de bagunça. Quem faz fuzuê agita o ambiente e atrai todos os olhares.",
    example: "As crianças fizeram um fuzuê no aniversário e quebraram o balão.",
  },
  {
    id: "dar-um-perdido",
    text: "Dar um perdido",
    meaning:
      "Fugir de alguém ou de um compromisso, fingindo que não viu ou escondendo-se para evitar o contato.",
    origin:
      "A origem é incerta. A gíria é do falar urbano e parece vir de 'perdido', como quem some de propósito.",
    why: "Quem dá um perdido faz de conta que se perdeu. Assim evita a pessoa sem precisar se explicar.",
    example: "Vi o ex no mercado e dei um perdido no corredor.",
  },
  {
    id: "da-pa-virada",
    text: "Da pá virada",
    meaning:
      "Pessoa agitada, travessa ou difícil de controlar. Pode ser criança bagunceira ou adulto encrenqueiro.",
    origin:
      "A origem é incerta. Não há explicação consensual para a imagem da 'pá virada'.",
    why: "A pá virada sugere algo fora do lugar. A expressão descreve quem não se encaixa e vive aprontando.",
    example: "Meu sobrinho é da pá virada, não para um minuto.",
  },
  {
    id: "dar-pano-pra-manga",
    text: "Dar pano pra manga",
    meaning: "Render muito assunto ou muita discussão.",
    origin:
      "A origem não é documentada. A imagem vem da costura: é preciso sobra de pano para fazer uma manga.",
    why: "Se o pano dá até para a manga, é porque sobrou bastante. O caso também rende conversa de sobra.",
    example: "Aquela reunião deu pano pra manga durante a semana toda.",
  },
  {
    id: "estar-na-lona",
    text: "Estar na lona",
    meaning: "Estar quebrado, sem dinheiro nenhum.",
    origin:
      "A origem é incerta. A versão mais comum liga ao boxe, em que o lutador derrubado vai parar na lona do ringue. Também há quem cite a lona do circo falido.",
    why: "Quem foi à lona perdeu a luta. Quem está na lona perdeu o dinheiro.",
    example: "Depois da reforma, a gente ficou na lona.",
  },
  {
    id: "ficar-de-rabo-preso",
    text: "Ficar de rabo preso",
    meaning: "Não poder agir ou reclamar porque tem algo a esconder.",
    origin:
      "A origem não é documentada. A imagem é a de um bicho que não foge porque tem o rabo agarrado.",
    why: "Quem tem o rabo preso não se mexe. Quem deve favor ou segredo também não se solta para criticar.",
    example: "O vereador ficou de rabo preso e não votou contra.",
  },
  {
    id: "matar-cachorro-a-grito",
    text: "Matar cachorro a grito",
    meaning: "Viver com muita dificuldade, fazendo o possível para sobreviver.",
    origin:
      "A origem não é documentada. A imagem é a de quem não tem sequer um pau para espantar o cachorro e só grita.",
    why: "Gritar para matar o cachorro é recurso de quem não tem nada. Resume o aperto de quem se vira como pode.",
    example: "Ele matou cachorro a grito até conseguir abrir a loja.",
  },
  {
    id: "dormir-de-touca",
    text: "Dormir de touca",
    meaning: "Descuidar-se e perder uma oportunidade ou ser enganado.",
    origin:
      "A origem não é documentada. A imagem é a de quem está tão entregue ao sono que se esquece de estar atento.",
    why: "Quem dorme de touca está bem acomodado e distraído. Na hora que o fato acontece, já perdeu o lance.",
    example: "Dormiu de touca e o concorrente levou o contrato.",
  },
  {
    id: "fogo-de-palha",
    text: "Fogo de palha",
    meaning: "Entusiasmo que acende rápido e logo se apaga.",
    origin:
      "A origem não é documentada. A palha queima com chama alta e acaba em segundos.",
    why: "O fogo de palha parece grande, mas não tem força para durar. Vale para empolgação sem constância.",
    example: "A dieta dele foi fogo de palha, durou uma semana.",
  },
  {
    id: "vender-o-almoco-para-comprar-a-janta",
    text: "Vender o almoço para comprar a janta",
    meaning: "Abrir mão de algo para cobrir uma urgência, sem sair do aperto.",
    origin:
      "A origem não é documentada. A imagem é a de uma casa com pouca comida que tira de uma refeição para pagar a outra.",
    why: "Quem faz isso resolve a janta e fica sem o almoço. O problema só muda de hora.",
    example:
      "Pegar empréstimo para pagar o cartão é vender o almoço para comprar a janta.",
  },
  {
    id: "estar-no-osso",
    text: "Estar no osso",
    meaning: "Estar totalmente sem dinheiro.",
    origin:
      "A origem não é documentada. A imagem é a do animal que já foi muito aproveitado e só restou o osso.",
    why: "Quando só sobra osso, não há mais o que tirar. O bolso vazio fica na mesma situação.",
    example: "Estou no osso até o dia cinco.",
  },
  {
    id: "pegar-no-tranco",
    text: "Pegar no tranco",
    meaning:
      "Dar a partida em algo com esforço, em especial um carro empurrado.",
    origin:
      "O tranco vem dos carros antigos: com bateria fraca, empurrava-se o veículo e engatava-se a marcha para o motor pegar.",
    why: "Sem ajuda para arrancar, é preciso um empurrão. Serve hoje para qualquer coisa que demora a engrenar.",
    example: "O projeto só pegou no tranco depois da terceira reunião.",
  },
  {
    id: "abotoar-o-paleto",
    text: "Abotoar o paletó",
    meaning: "Morrer.",
    origin:
      "A origem é incerta. A versão mais comum liga a expressão à roupa em que o morto é vestido.",
    why: "O paletó abotoado lembra o último traje. A frase fala da morte sem dizer a palavra.",
    example: "O velho abotoou o paletó aos noventa anos.",
  },
  {
    id: "mais-perdido-que-cachorro-que-caiu-da-mudanca",
    text: "Mais perdido que cachorro que caiu da mudança",
    meaning: "Totalmente desorientado, sem saber para onde ir.",
    origin:
      "A origem não é documentada. A imagem é a do cachorro que cai do caminhão de mudança e fica sozinho numa rua que não conhece.",
    why: "O bicho não sabe onde está nem para onde foi a família. É o retrato do desnorteio.",
    example:
      "No primeiro dia no emprego, fiquei mais perdido que cachorro que caiu da mudança.",
  },
  {
    id: "cara-de-tacho",
    text: "Cara de tacho",
    meaning: "Expressão de quem ficou sem graça ou constrangido.",
    origin:
      "A origem não é documentada. O tacho é uma panela grande, de fundo largo, e a imagem é a de um rosto sem reação.",
    why: "Tacho é redondo e sem expressão. Quem fica de cara de tacho ficou sem saber o que dizer.",
    example: "Ele ficou com cara de tacho quando descobriram a mentira.",
  },
  {
    id: "fazer-cancha",
    text: "Fazer cancha",
    meaning: "No Sul, abrir espaço e passagem para que algo ou alguém passe.",
    origin:
      "A palavra cancha, de origem castelhana, é a pista ou o campo onde se corre e se joga. No Sul, fazer cancha é limpar o caminho.",
    why: "Quem faz cancha prepara a pista para o outro passar. Hoje serve para abrir espaço em qualquer situação.",
    example: "Faz cancha aí que o pessoal quer passar.",
  },
  {
    id: "pegar-o-beco",
    text: "Pegar o beco",
    meaning: "Ir embora de um lugar, geralmente com pressa.",
    origin:
      "A origem não é documentada. A imagem é a de sair por uma viela para sumir sem ser visto.",
    why: "Pegar o beco é escolher a saída discreta. A ideia é sair depressa e sem alarde.",
    example: "Quando a conversa esquentou, peguei o beco.",
  },
  {
    id: "ficar-de-butuca",
    text: "Ficar de butuca",
    meaning: "Ficar de olho, atento, observando com cuidado.",
    origin:
      "A origem não é documentada. Butuca é gíria regional para olho ou olhada.",
    why: "Ficar de butuca é manter o olho aberto. Quem faz isso quer ver tudo o que acontece.",
    example: "Fica de butuca para ver se ele chega.",
  },
  {
    id: "deixar-a-peteca-cair",
    text: "Deixar a peteca cair",
    meaning: "Perder o ritmo ou desanimar e deixar algo se perder.",
    origin:
      "A peteca é um brinquedo de origem indígena, jogado de mão em mão, que não pode cair no chão.",
    why: "Se a peteca cai, o jogo termina. Hoje vale para qualquer coisa que perde o fôlego.",
    example: "Não deixa a peteca cair agora que falta pouco.",
  },
  {
    id: "embarcar-numa-canoa-furada",
    text: "Embarcar numa canoa furada",
    meaning: "Entrar num negócio ou situação com grande chance de dar errado.",
    origin:
      "A origem não é documentada. A imagem é autoexplicativa: canoa com buraco afunda.",
    why: "Entrar na canoa furada é confiar numa coisa que não segura. O prejuízo vem junto.",
    example: "Investir naquela empresa foi embarcar numa canoa furada.",
  },
  {
    id: "chupar-cana-e-assobiar",
    text: "Chupar cana e assobiar",
    meaning: "Fazer duas coisas incompatíveis ao mesmo tempo.",
    origin:
      "A origem não é documentada. A imagem é a de quem tenta chupar cana e assobiar: a boca não faz as duas coisas.",
    why: "A boca ocupada não assobia. É o jeito de dizer que não dá para ter tudo ao mesmo tempo.",
    example: "Estudar e trabalhar o dia todo é querer chupar cana e assobiar.",
  },
  {
    id: "pressa-come-cru",
    text: "Pressa come cru",
    meaning: "Quem se apressa faz mal feito.",
    origin:
      "A origem não é documentada. É ditado popular de roça: ele aparece também como quem tem pressa come cru.",
    why: "Comida que não cozinhou direito fica crua. A pressa tira o ponto e estraga o resultado.",
    example: "Calma, que pressa come cru.",
  },
  {
    id: "saco-vazio-nao-para-em-pe",
    text: "Saco vazio não para em pé",
    meaning: "Quem está com fome não rende nem consegue trabalhar bem.",
    origin:
      "A origem não é documentada. É ditado antigo de roça, em que o saco só se sustenta com alguma coisa dentro.",
    why: "Saco vazio tomba. Gente sem comer também perde a força e o rumo.",
    example: "Almoça antes da prova, que saco vazio não para em pé.",
  },
  {
    id: "papagaio-velho-nao-aprende-a-falar",
    text: "Papagaio velho não aprende a falar",
    meaning: "Quem já está velho em seus hábitos dificilmente muda.",
    origin:
      "A origem não é documentada. É provérbio antigo, ligado à ideia de que o papagaio aprende a falar novo.",
    why: "Ensinar um papagaio velho é perder tempo. A frase diz que hábito antigo não muda.",
    example:
      "Ele nunca vai mexer no celular, papagaio velho não aprende a falar.",
  },
  {
    id: "deus-da-o-frio-conforme-o-cobertor",
    text: "Deus dá o frio conforme o cobertor",
    meaning: "As dificuldades chegam na medida do que a pessoa aguenta.",
    origin:
      "A origem não é documentada. É dito popular de fundo religioso e de uso antigo.",
    why: "A frase junta frio e cobertor para dizer que o peso é compatível com a força de quem o carrega.",
    example: "Foi difícil, mas Deus dá o frio conforme o cobertor.",
  },
  {
    id: "cada-qual-com-seu-cada-qual",
    text: "Cada qual com seu cada qual",
    meaning: "Cada pessoa combina com quem é parecida com ela.",
    origin: "A origem não é documentada. É ditado popular de uso antigo.",
    why: "A repetição do cada qual reforça a ideia de pares que se encaixam. Cada um fica com a sua turma.",
    example: "Ele só anda com gente chique, cada qual com seu cada qual.",
  },
  {
    id: "mais-sujo-que-pau-de-galinheiro",
    text: "Mais sujo que pau de galinheiro",
    meaning: "Muito sujo.",
    origin:
      "A origem não é documentada. O pau de galinheiro é o poleiro onde as galinhas dormem e deixam sujeira.",
    why: "O poleiro recebe as fezes das aves a noite toda. É o modelo de sujeira que todo mundo entende.",
    example: "Seu tênis está mais sujo que pau de galinheiro.",
  },
  {
    id: "mais-feliz-que-pinto-no-lixo",
    text: "Mais feliz que pinto no lixo",
    meaning: "Muito contente, em seu elemento.",
    origin:
      "A origem não é documentada. A imagem é a do pinto que fuça o lixo e acha comida.",
    why: "Para o pinto, o lixo é fartura. É o retrato de quem está contente com o que tem.",
    example: "Com a casa nova, ficou mais feliz que pinto no lixo.",
  },
  {
    id: "mais-por-fora-que-umbigo-de-vedete",
    text: "Mais por fora que umbigo de vedete",
    meaning: "Totalmente desinformado sobre o que acontece.",
    origin:
      "A origem não é documentada. A imagem é a do umbigo à mostra no figurino das vedetes, ou seja, por fora das roupas.",
    why: "A expressão brinca com o por fora, que vale tanto para o umbigo exposto quanto para a pessoa alheia ao assunto.",
    example: "Cheguei mais por fora que umbigo de vedete na reunião.",
  },
  {
    id: "estar-liso",
    text: "Estar liso",
    meaning: "Estar sem dinheiro.",
    origin: "A origem é incerta. É gíria antiga, sem origem comprovada.",
    why: "Liso é superfície sem nada para agarrar. Bolso liso é bolso sem dinheiro.",
    example: "Tô liso, mas semana que vem eu pago.",
  },
  {
    id: "estar-na-bica",
    text: "Estar na bica",
    meaning: "Estar prestes a acontecer.",
    origin:
      "A origem é incerta. A explicação comum é a da bica de água, que está quase para jorrar.",
    why: "Quando a água está na bica, o jato é questão de segundos. O fato também está para sair.",
    example: "O resultado do concurso está na bica.",
  },
  {
    id: "dar-bandeira",
    text: "Dar bandeira",
    meaning: "Revelar algo sem querer, deixando o segredo à mostra.",
    origin:
      "A origem é incerta. A explicação comum é a da bandeira como sinal visível de longe.",
    why: "Bandeira é sinal feito para ser visto. Quem dá bandeira mostra o que queria esconder.",
    example: "Ele deu bandeira quando corou ao ouvir o nome dela.",
  },
  {
    id: "fazer-farol",
    text: "Fazer farol",
    meaning: "Exibir-se, fazer pose para ser notado.",
    origin:
      "A origem não é documentada. É expressão usada no Sul para quem se exibe.",
    why: "Farol é luz que chama atenção. Quem faz farol quer ser visto de longe.",
    example: "Chegou de carro novo só para fazer farol.",
  },
  {
    id: "cair-na-gandaia",
    text: "Cair na gandaia",
    meaning: "Sair para farrear, divertir-se sem compromisso.",
    origin:
      "A origem é incerta. A palavra gandaia vem do português antigo e já designava vida de vadiagem.",
    why: "Quem cai na gandaia deixa os compromissos de lado. A palavra liga a farra à folga.",
    example: "Terminou a prova e a turma caiu na gandaia.",
  },
  {
    id: "ir-a-forra",
    text: "Ir à forra",
    meaning: "Tirar a desforra, ter a revanche.",
    origin:
      "A origem é incerta. A expressão vem do português antigo, ligada à ideia de desforra.",
    why: "Forra remete a recuperar o que se perdeu. Ir à forra é ir buscar o troco.",
    example: "Perdi ontem, mas hoje vou à forra no truco.",
  },
  {
    id: "dar-a-mao-a-palmatoria",
    text: "Dar a mão à palmatória",
    meaning: "Reconhecer o erro e admitir que o outro tinha razão.",
    origin:
      "Palmatória era um instrumento de madeira usado em escolas antigas para bater na palma da mão dos alunos como castigo.",
    why: "Estender a mão à palmatória é aceitar o castigo. Hoje é admitir o erro sem discutir.",
    example: "Dei a mão à palmatória: você tinha razão.",
  },
  {
    id: "pedir-arrego",
    text: "Pedir arrego",
    meaning: "Pedir trégua, desistir diante da pressão.",
    origin: "A origem é incerta. Arrego é gíria sem origem esclarecida.",
    why: "Pedir arrego é levantar a bandeira branca. Quem pede reconhece que não aguenta mais.",
    example: "No segundo tempo, o time pediu arrego.",
  },
  {
    id: "sambar-na-cara",
    text: "Sambar na cara",
    meaning: "Humilhar alguém exibindo superioridade.",
    origin:
      "A origem não é documentada. A imagem é a de dançar sobre a derrota do adversário.",
    why: "Dançar na cara de quem perdeu é jogar a vitória no rosto do outro.",
    example: "O time sambou na cara do rival e fez cinco.",
  },
  {
    id: "tomar-cha-de-sumico",
    text: "Tomar chá de sumiço",
    meaning: "Sumir, ficar um tempo sem dar notícias.",
    origin:
      "A origem não é documentada. O chá é metáfora, como se o sumiço fosse uma bebida tomada.",
    why: "Chá de sumiço é a pessoa que desaparece sem avisar. A brincadeira lembra remédio caseiro.",
    example: "Depois da briga, ele tomou chá de sumiço.",
  },
  {
    id: "pe-na-tabua",
    text: "Pé na tábua",
    meaning: "Acelerar ao máximo, com pressa.",
    origin:
      "A origem é incerta. A explicação comum é a do pedal do acelerador pisado até o fundo, rente à tábua do assoalho.",
    why: "Pé na tábua é pisar fundo. Serve também para quem corre contra o relógio.",
    example: "Pé na tábua, que o filme começa em dez minutos.",
  },
  {
    id: "cantar-de-galo",
    text: "Cantar de galo",
    meaning: "Mandar no grupo, fazer-se de dono do lugar.",
    origin:
      "A origem não é documentada. A imagem é a do galo que canta forte no terreiro como dono do pedaço.",
    why: "O galo domina o terreiro com o canto. Quem canta de galo quer mostrar quem manda.",
    example: "Ele chegou lá e já foi cantando de galo.",
  },
  {
    id: "cavar-a-propria-sepultura",
    text: "Cavar a própria sepultura",
    meaning: "Fazer algo que causa a própria ruína.",
    origin:
      "A origem não é documentada. A imagem é autoexplicativa: cavar a cova em que vai ser enterrado.",
    why: "Quem cava a cova se enterra com as próprias mãos. É o erro que se volta contra o autor.",
    example: "Mentir ao juiz foi cavar a própria sepultura.",
  },
  {
    id: "com-a-faca-nos-dentes",
    text: "Com a faca nos dentes",
    meaning: "Muito decidido a conseguir algo, com garra.",
    origin:
      "A origem não é documentada. A imagem é a de um guerreiro ou pirata avançando de faca entre os dentes.",
    why: "Quem leva a faca nos dentes está pronto para a luta. Vale para quem vai com tudo atrás do que quer.",
    example: "Entrou na campanha com a faca nos dentes.",
  },
  {
    id: "dar-zebra",
    text: "Dar zebra",
    meaning: "Acontecer um resultado inesperado, em especial em disputas.",
    origin:
      "A origem é incerta. A explicação comum liga ao jogo do bicho, em que a zebra não está entre os animais sorteados, então seria resultado impossível.",
    why: "A zebra é o que ninguém esperava. Hoje vale para qualquer surpresa, em geral ruim.",
    example: "O favorito deu zebra e perdeu em casa.",
  },
  {
    id: "estar-na-rua-da-amargura",
    text: "Estar na rua da amargura",
    meaning: "Estar passando por uma fase muito difícil.",
    origin:
      "A origem é incerta. A versão mais comum liga a Rua da Amargura ao caminho que Jesus percorreu até a crucificação.",
    why: "Rua da amargura é o trecho mais doloroso do caminho. Vale para quem passa por um período ruim.",
    example: "Depois da demissão, estou na rua da amargura.",
  },
  {
    id: "cair-na-rede-e-peixe",
    text: "Cair na rede é peixe",
    meaning: "Tudo o que chega serve, aproveita-se o que vier.",
    origin:
      "A origem não é documentada. A imagem é a do pescador que aproveita qualquer coisa que a rede pegue.",
    why: "Para a rede, tudo é peixe. A frase vale para quem aproveita tudo o que aparece.",
    example: "Não escolho cliente, caiu na rede é peixe.",
  },
  {
    id: "bater-o-martelo",
    text: "Bater o martelo",
    meaning: "Tomar a decisão final, encerrar a discussão.",
    origin:
      "A imagem vem do martelo de juízes e leiloeiros, cuja batida marca o fim da decisão ou da venda.",
    why: "O estalo do martelo é o ponto-final. Quem bate o martelo decide e ninguém discute mais.",
    example: "Fechamos o orçamento e a diretoria bateu o martelo.",
  },
  {
    id: "fazer-sala",
    text: "Fazer sala",
    meaning: "Entreter visitas ou fazer companhia até alguém ficar pronto.",
    origin:
      "A sala era o cômodo onde as visitas eram recebidas. Fazer sala é ficar ali com elas.",
    why: "Quem faz sala cuida de quem espera. Hoje serve para qualquer companhia por cortesia.",
    example: "Fica aí fazendo sala enquanto eu me arrumo.",
  },
  {
    id: "cabeca-vazia-oficina-do-diabo",
    text: "Cabeça vazia, oficina do diabo",
    meaning: "Quem não tem o que fazer acaba arrumando confusão.",
    origin:
      "A origem é incerta. O ditado é antigo e de fundo religioso, comum em várias línguas.",
    why: "A cabeça ociosa vira oficina de ideias ruins. A frase serve de alerta contra a preguiça.",
    example: "Arruma um hobby, que cabeça vazia é oficina do diabo.",
  },
  {
    id: "quem-desdenha-quer-comprar",
    text: "Quem desdenha quer comprar",
    meaning: "Quem fala mal de algo, no fundo, o deseja.",
    origin:
      "A origem é incerta. A ideia lembra a fábula da raposa e das uvas, em que a raposa chama de verdes as uvas que não alcança.",
    why: "O desprezo costuma esconder o desejo. A frase serve para tirar sarro de quem finge desdém.",
    example: "Ele critica o carro, mas quem desdenha quer comprar.",
  },
  {
    id: "cada-louco-com-sua-mania",
    text: "Cada louco com sua mania",
    meaning: "Cada pessoa tem suas esquisitices e deve ser respeitada.",
    origin: "A origem não é documentada. É ditado popular de uso antigo.",
    why: "A frase reconhece que todo mundo tem um jeito peculiar. Pede tolerância em vez de crítica.",
    example: "Ele separa os clipes por cor, cada louco com sua mania.",
  },
  {
    id: "jacare-que-vacila-vira-bolsa",
    text: "Jacaré que vacila vira bolsa",
    meaning: "Quem se descuida acaba se dando mal.",
    origin:
      "A origem não é documentada. É gíria recente, de uso informal, que brinca com o couro de jacaré.",
    why: "O jacaré distraído vira acessório de luxo. Quem vacila também paga pelo descuido.",
    example: "Esquece o carro aberto não, jacaré que vacila vira bolsa.",
  },
  {
    id: "estar-com-a-mosca-azul",
    text: "Estar com a mosca azul",
    meaning: "Estar tomado por uma ambição ou ideia fixa.",
    origin:
      "A origem é incerta. Alguns ligam à fábula A mosca azul, de Machado de Assis, em que a mosca simboliza a ambição.",
    why: "A mosca azul gruda na cabeça e faz a pessoa ver só aquela ideia.",
    example: "Ele pegou a mosca azul e só pensa em ser candidato.",
  },
  {
    id: "meter-bronca",
    text: "Meter bronca",
    meaning: "Fazer algo com vontade e energia, sem medo.",
    origin:
      "A origem não é documentada. Bronca é gíria que reúne raiva e coragem.",
    why: "Meter bronca é partir para cima sem medo. Quem faz entra com garra.",
    example: "Vamos meter bronca e entregar hoje.",
  },
  {
    id: "cara-de-quem-comeu-e-nao-gostou",
    text: "Cara de quem comeu e não gostou",
    meaning: "Expressão de desagrado sem palavras.",
    origin:
      "A origem não é documentada. A imagem vem da careta de quem experimenta uma comida ruim.",
    why: "A cara fala por si: foi provado, não agradou. A expressão serve para qualquer desagrado calado.",
    example: "Ela ouviu a proposta com cara de quem comeu e não gostou.",
  },
  {
    id: "cabra-da-peste",
    text: "Cabra da peste",
    meaning: "No Nordeste, homem valente, destemido e esperto.",
    origin:
      "A origem é incerta. Cabra é palavra regional para homem. A peste reforça a ideia de alguém brabo ou fora do comum.",
    why: "Cabra é o homem do sertão e peste soa como elogio áspero. Juntos, descrevem quem é difícil de vencer.",
    example: "Aquele vaqueiro é cabra da peste, não tem medo de nada.",
  },
  {
    id: "pagar-de-bacana",
    text: "Pagar de bacana",
    meaning: "Fingir ser rico ou importante para impressionar.",
    origin:
      "A origem não é documentada. Pagar de é gíria para bancar uma imagem.",
    why: "A expressão trata a pose como se fosse algo que se paga. Quem paga de bacana banca a aparência.",
    example: "Ele paga de bacana, mas mora de aluguel.",
  },
  {
    id: "passar-o-rodo",
    text: "Passar o rodo",
    meaning:
      "Levar tudo, acabar com a concorrência ou conquistar vários de uma vez.",
    origin:
      "A origem não é documentada. A imagem é a do rodo que varre o chão sem deixar nada.",
    why: "O rodo limpa o que tem pela frente. Quem passa o rodo leva tudo sem deixar nada para os outros.",
    example: "O time passou o rodo no campeonato.",
  },
  {
    id: "descer-a-lenha",
    text: "Descer a lenha",
    meaning: "Criticar com dureza ou bater forte em alguém.",
    origin:
      "A origem não é documentada. A imagem é a do lenhador que racha a madeira com golpes fortes.",
    why: "Descer a lenha é bater sem dó. Vale para críticas ou agressões.",
    example: "O técnico desceu a lenha no time depois do jogo.",
  },
  {
    id: "meter-a-colher",
    text: "Meter a colher",
    meaning: "Intrometer-se onde não foi chamado.",
    origin: "Vem do ditado em briga de marido e mulher ninguém mete a colher.",
    why: "A colher é o talher que ninguém pediu. Quem mete a colher entra onde não foi chamado.",
    example: "Não vou meter a colher, mas acho que ele errou.",
  },
  {
    id: "enfiar-a-viola-no-saco",
    text: "Enfiar a viola no saco",
    meaning: "Calar-se e ir embora sem graça, derrotado.",
    origin:
      "A viola é instrumento de cantador. Guardar no saco é encerrar a apresentação.",
    why: "A origem não é documentada. Quem guarda a viola desiste de tocar e fica sem público.",
    example: "Perdeu o debate e teve que enfiar a viola no saco.",
  },
  {
    id: "pau-mandado",
    text: "Pau-mandado",
    meaning: "Pessoa que obedece sem questionar.",
    origin:
      "A origem não é documentada. A palavra pau aparece como instrumento que faz o que o dono manda.",
    why: "Pau não pensa, só obedece. A expressão chama de pau-mandado quem cumpre ordem sem opinar.",
    example: "O gerente é pau-mandado do dono.",
  },
  {
    id: "tirar-o-time-de-campo",
    text: "Tirar o time de campo",
    meaning: "Sair de fininho de uma confusão ou desistir de algo.",
    origin: "A imagem vem do futebol, em que o técnico retira o time do jogo.",
    why: "Tirar o time de campo é sair da disputa antes do fim. Hoje vale para quem foge do problema.",
    example: "Quando começou a briga, tirei o time de campo.",
  },
  {
    id: "jogar-agua-no-chope",
    text: "Jogar água no chope",
    meaning: "Estragar a animação ou o clima de alguém.",
    origin:
      "A origem não é documentada. A imagem é a do chope diluído, que perde o gosto.",
    why: "Água no chope tira o sabor da bebida. A frase serve para quem acaba com o clima.",
    example: "Não quero jogar água no seu chope, mas o prazo acabou.",
  },
  {
    id: "pedra-que-rola",
    text: "Pedra que rola não cria limo",
    meaning:
      "Quem não para num lugar ou numa ocupação não cria raízes nem acumula nada.",
    origin:
      "Vem de um provérbio europeu antigo, que circula em vários idiomas. Limo é o musgo que cresce nas pedras paradas.",
    why: "A pedra parada ganha musgo. A que rola fica limpa, mas também não se firma em lugar nenhum.",
    example:
      "Ele já trocou de emprego cinco vezes. Pedra que rola não cria limo.",
  },
  {
    id: "calendas-gregas",
    text: "Deixar para as calendas gregas",
    meaning: "Adiar algo para uma data que nunca vai chegar.",
    origin:
      "As calendas eram o primeiro dia de cada mês no calendário romano. Os gregos não usavam esse sistema, então a data nunca existiria.",
    why: "Marcar algo para uma data que não existe é o mesmo que nunca fazer. A expressão ironiza promessas vazias.",
    example: "O governo deixou a obra para as calendas gregas.",
  },
  {
    id: "despir-um-santo",
    text: "Despir um santo para vestir outro",
    meaning:
      "Resolver um problema criando outro, tirando de um lugar para cobrir outro.",
    origin:
      "A origem é incerta. A imagem vem das imagens de santos nas igrejas, que ganham roupas e mantos trocados em festas e procissões.",
    why: "Ao tirar a roupa de um santo para pôr em outro, um dos dois fica sem nada. É o remédio que só muda o buraco de lugar.",
    example:
      "Passar o gasto de um cartão para o outro é despir um santo para vestir outro.",
  },
  {
    id: "avexado",
    text: "Avexado",
    meaning:
      "No Nordeste, pessoa apressada, aflita ou nervosa. 'Não se avexe' pede calma.",
    origin:
      "Deve vir de 'avexar', ligado ao verbo 'vexar', que já significou afligir e envergonhar. No falar nordestino passou a indicar pressa e agonia.",
    why: "Quem está avexado se sente pressionado e aflito, correndo sem necessidade. Por isso o conselho é 'não se avexe'.",
    example: "Não se avexe, o ônibus só passa daqui a vinte minutos.",
  },
  {
    id: "ir-pras-cucuias",
    text: "Ir pras cucuias",
    meaning:
      "Morrer, acabar ou ir para um lugar bem longe. Muito dito no Nordeste, mas conhecido em outras regiões.",
    origin:
      "A origem é incerta. A palavra 'cucuia' não tem sentido claro, e as explicações sobre ela não são bem documentadas.",
    why: "A expressão manda alguém ou algo para um lugar vago e distante, de onde não se volta. Daí servir para morte e para fracasso.",
    example: "Se o motor falhar de novo, o carro vai pras cucuias.",
  },
  {
    id: "visse",
    text: "Visse?",
    meaning:
      "No Nordeste, tag no fim da frase para confirmar que o outro entendeu: 'tá certo, viu?'.",
    origin:
      "A origem não é documentada. A forma parece ligada ao verbo 'ver' e funciona como um 'viu?' mais cantado.",
    why: "O falante termina a frase pedindo a concordância do outro, como quem confirma que a mensagem foi vista e entendida.",
    example: "Chega cedo amanhã, visse? Não quero atraso.",
  },
  {
    id: "desafinar-o-coro",
    text: "Desafinar o coro dos contentes",
    meaning:
      "Atrapalhar a alegria geral com uma opinião contrária ou crítica que ninguém esperava.",
    origin:
      "A origem é incerta. A expressão é antiga e usa a imagem do coro, onde uma voz fora do tom é logo percebida.",
    why: "Num coro afinado, uma voz destoante estraga o conjunto. Quem discorda no meio da festa faz o mesmo.",
    example: "Não quero desafinar o coro dos contentes, mas o prazo não fecha.",
  },
];
