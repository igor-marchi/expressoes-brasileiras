import type { EntryData } from "@/data/entry";

/**
 * Slang ("firmeza", "bora", "cringe"), from the most to the least famous.
 * `entries.ts` merges this list with `expressions.ts` and `noun-phrases.ts`.
 */
export const slang: EntryData[] = [
  {
    id: "firmeza",
    text: "Firmeza",
    meaning: "Expressa que está tudo bem ou concorda com algo.",
    origin: "Vem de firme, com o sufixo -eza. Circula na fala de rua e no rap.",
    why: "Firme é o que não balança nem cede. Dizer firmeza passa a ideia de que está tudo estável e confirmado.",
    example: "Chegou bem em casa? Firmeza, tudo certo por aqui.",
  },
  {
    id: "bora",
    text: "Bora",
    meaning: "Convite para ir ou começar algo, equivalente a vamos.",
    origin:
      "Forma reduzida de embora, vinda da expressão vamos embora, com perda da sílaba inicial.",
    why: "Vamos embora já era um chamado para sair. Cortar a palavra deixa o convite mais rápido e informal.",
    example: "Já deu a hora, bora pro cinema?",
  },
  {
    id: "mano",
    text: "Mano",
    meaning: "Forma íntima de chamar um amigo ou de se referir a alguém.",
    origin:
      "Forma reduzida de irmão. Se espalhou pela fala da periferia paulistana e pelo hip hop.",
    why: "Irmão é quem tem laço próximo. Chamar o amigo de mano traz esse laço para a conversa.",
    example: "Mano, você viu o jogo de ontem?",
  },
  {
    id: "beleza",
    text: "Beleza",
    meaning: "Resposta de aprovação, equivalente a tudo bem ou combinado.",
    origin:
      "Vem do substantivo beleza, usado como interjeição de aprovação na fala informal brasileira.",
    why: "O que é belo agrada. Dizer beleza aprova o que o outro falou.",
    example: "Amanhã às oito? Beleza.",
  },
  {
    id: "valeu",
    text: "Valeu",
    meaning: "Agradecimento informal, também usado como despedida ou aceite.",
    origin:
      "É o pretérito do verbo valer. Veio de frases como valeu a ajuda e valeu o favor.",
    why: "Dizer que algo valeu reconhece que o gesto teve valor. A frase completa foi se perdendo e sobrou só o verbo.",
    example: "Valeu pela carona, cara!",
  },
  {
    id: "sextou",
    text: "Sextou",
    meaning:
      "Comemoração de que a sexta-feira chegou e o fim de semana começou.",
    origin:
      "Formado a partir de sexta, com a terminação -ou de pretérito, como em chegou. Se espalhou pelas redes sociais.",
    why: "Usar um verbo no passado faz a sexta parecer uma ação concluída: a semana de trabalho acabou.",
    example: "Sextou! Hoje eu só saio do sofá para pedir pizza.",
  },
  {
    id: "zoar",
    text: "Zoar",
    meaning: "Brincar, tirar sarro de alguém ou fazer bagunça.",
    origin:
      "Vem de zoada, o barulho confuso e o zumbido. O sentido de brincadeira surgiu na fala informal.",
    why: "Quem zoa faz barulho e agito. Daí o verbo passou a nomear a bagunça e a gozação entre amigos.",
    example: "A gente só estava zoando, ninguém ficou bravo.",
  },
  {
    id: "bagulho",
    text: "Bagulho",
    meaning: "Qualquer coisa, objeto ou situação, sem precisar dar nome.",
    origin:
      "Deriva de bago, o grão ou caroço de fruto. A palavra designava algo de pouco valor e passou a servir para coisa qualquer.",
    why: "Quando não há nome à mão, bagulho cobre tudo. Na fala, o sentido muda conforme o contexto.",
    example: "Passa aquele bagulho que está em cima da mesa.",
  },
  {
    id: "ta-ligado",
    text: "Tá ligado",
    meaning:
      "Pergunta se o outro entendeu, ou afirma que ele sabe do que se trata.",
    origin:
      "Vem de ligado, particípio de ligar. Se espalhou na fala do rap e da periferia.",
    why: "Estar ligado é estar conectado, como um aparelho em tomada. Quem está ligado acompanha o assunto.",
    example: "Hoje o treino é mais cedo, tá ligado?",
  },
  {
    id: "crush",
    text: "Crush",
    meaning: "Pessoa por quem se tem uma paixonite.",
    origin:
      "Vem do inglês crush, como em have a crush on someone. Entrou no português pelas redes sociais.",
    why: "Em inglês, crush é esmagar. O sentimento por alguém derruba e domina quem sente, como um golpe.",
    example: "Meu crush curtiu minha foto.",
  },
  {
    id: "cringe",
    text: "Cringe",
    meaning: "Algo que provoca vergonha alheia ou parece forçado.",
    origin:
      "Vem do inglês to cringe, encolher-se de vergonha. Ficou popular entre jovens na internet.",
    why: "Cringe nomeia a reação do corpo: o encolher de quem sente constrangimento ao ver a cena.",
    example: "Aquela dancinha foi muito cringe.",
  },
  {
    id: "mo",
    text: "Mó",
    meaning:
      "Intensificador usado antes de adjetivo ou substantivo, com sentido de muito.",
    origin:
      "Gíria da fala paulistana, usada como advérbio de intensidade antes do termo que reforça.",
    why: "A palavra vem antes do adjetivo e aumenta a força dele, como muito ou bastante.",
    example: "Aquele show foi mó legal.",
  },
  {
    id: "top",
    text: "Top",
    meaning: "Excelente, de primeira qualidade.",
    origin:
      "Vem do inglês top, topo. Entrou no português como adjetivo de aprovação.",
    why: "O topo é o ponto mais alto. Quem ou o que é top está no nível máximo.",
    example: "Seu trabalho ficou top.",
  },
  {
    id: "zueira",
    text: "Zueira",
    meaning: "Brincadeira, bagunça e humor sem compromisso.",
    origin:
      "Formada de zoar com o sufixo -eira. Ganhou força na internet, com os memes.",
    why: "O sufixo -eira indica algo em grande quantidade. Zueira é muita zoação junta.",
    example: "Foi só zueira, não levem a sério.",
  },
  {
    id: "lacrar",
    text: "Lacrar",
    meaning: "Arrasar, fazer algo de forma impecável.",
    origin:
      "Vem do verbo lacrar, fechar com lacre. A cultura LGBTQIA+ deu o sentido de arrasar e a internet espalhou o uso.",
    why: "O que é lacrado fica fechado de vez. Quem lacra deixa o assunto resolvido, sem nada a acrescentar.",
    example: "Ela entrou no palco e lacrou.",
  },
  {
    id: "tretar",
    text: "Tretar",
    meaning: "Brigar, discutir ou criar confusão.",
    origin:
      "Formado de treta, palavra que já significava ardil e enrolação. O verbo passou a nomear a briga.",
    why: "Treta é o enrosco, e tretar é entrar nele. A discussão vira um nó difícil de desfazer.",
    example: "Os dois tretaram no grupo da turma.",
  },
  {
    id: "rala",
    text: "Rala",
    meaning: "Ordem para alguém ir embora.",
    origin:
      "É a forma imperativa de ralar, verbo que na gíria também significa sair, ir embora.",
    why: "A ordem é curta e seca, no mesmo tom de sai daqui.",
    example: "Rala daqui, que eu estou ocupado.",
  },
  {
    id: "partiu",
    text: "Partiu",
    meaning: "Convite para ir ou começar algo, como vamos.",
    origin:
      "Vem de partir, no sentido de ir embora. O pretérito partiu virou chamada para agir.",
    why: "O verbo no passado dá a ideia de que a saída já está acontecendo, sem espaço para adiar.",
    example: "Partiu praia?",
  },
  {
    id: "mala",
    text: "Mala",
    meaning: "Pessoa chata e inconveniente.",
    origin:
      "Vem de mala, a bagagem. Aparece em mala sem alça, a mala difícil de carregar.",
    why: "Mala é peso que a gente carrega. A pessoa chata é a que cansa quem está perto.",
    example: "Não convida ele, é muito mala.",
  },
  {
    id: "caraca",
    text: "Caraca",
    meaning: "Interjeição de espanto ou admiração.",
    origin:
      "Eufemismo de caralho, com a troca do final da palavra. É típica do falar carioca.",
    why: "A troca suaviza o palavrão e mantém a força da exclamação.",
    example: "Caraca, olha o tamanho desse bolo!",
  },
  {
    id: "irado",
    text: "Irado",
    meaning: "Muito bom, impressionante.",
    origin:
      "Vem de irado, adjetivo de ira, quem está tomado pela raiva. A gíria inverteu o sentido para algo forte e positivo.",
    why: "O que provoca ira é intenso. Na gíria, a intensidade ficou e virou elogio.",
    example: "Essa moto é irada.",
  },
  {
    id: "massa",
    text: "Massa",
    meaning: "Legal, muito bom.",
    origin:
      "Uso do substantivo massa como adjetivo de aprovação na fala nordestina.",
    why: "Dizer que algo é massa o põe na conta das coisas boas, no tom de legal.",
    example: "O passeio de ontem foi massa.",
  },
  {
    id: "barril",
    text: "Barril",
    meaning: "Situação difícil ou perigosa.",
    origin:
      "Vem do substantivo barril. Aparece na fala nordestina em frases como está barril e é barril.",
    why: "Dizer que algo é barril reforça o peso da situação, como um recipiente pesado e difícil de mover.",
    example: "Chegar a tempo naquele horário é barril.",
  },
  {
    id: "abestado",
    text: "Abestado",
    meaning: "Bobo, avoado ou desligado.",
    origin:
      "Formado de besta, com o prefixo a- e o sufixo -ado. É forma comum na fala nordestina.",
    why: "Quem é abestado se comporta como besta, sem perceber o que acontece ao redor.",
    example: "Deixa de ser abestado e olha por onde anda.",
  },
  {
    id: "bolado",
    text: "Bolado",
    meaning: "Chateado ou indignado.",
    origin:
      "Particípio de bolar. Na fala carioca, bolado passou a descrever quem está chateado ou preocupado.",
    why: "Estar bolado é ficar com a cabeça tomada pelo problema, sem conseguir pensar em outra coisa.",
    example: "Ele ficou bolado com a resposta.",
  },
  {
    id: "ranco",
    text: "Ranço",
    meaning: "Antipatia ou desgosto por alguém ou algo.",
    origin:
      "Vem de ranço, o sabor e o cheiro de gordura estragada. O uso figurado para antipatia se espalhou pelas redes sociais.",
    why: "O gosto azedo do ranço lembra a repulsa que se sente ao ver ou ouvir quem não se suporta.",
    example: "Tenho ranço dessa música de tanto ouvir.",
  },
  {
    id: "brabo",
    text: "Brabo",
    meaning: "Muito bom, habilidoso, ou bravo.",
    origin:
      "Variante de bravo, com troca do v por b. O sentido de elogio vem da ideia de quem enfrenta tudo.",
    why: "Quem é bravo é forte e valente. Na gíria, isso vira elogio de quem manda bem.",
    example: "Esse goleiro é brabo.",
  },
  {
    id: "grana",
    text: "Grana",
    meaning: "Dinheiro.",
    origin:
      "Vem do italiano grana, grão, que também é gíria para dinheiro. Entrou no português como termo informal.",
    why: "A palavra passou direto da gíria italiana para o português, sem mudar de sentido.",
    example: "Estou sem grana para sair hoje.",
  },
  {
    id: "bufunfa",
    text: "Bufunfa",
    meaning: "Dinheiro.",
    origin: "Palavra da gíria popular brasileira para dinheiro.",
    why: "A palavra é cheia de sons repetidos e soa leve e bem-humorada. Por isso funciona como apelido informal para o dinheiro.",
    example: "Tô sem bufunfa até o fim do mês.",
  },
  {
    id: "tutu",
    text: "Tutu",
    meaning: "Dinheiro.",
    origin:
      "Tutu já existia como palavra do português, com outros sentidos, como o bicho-papão e o prato mineiro de feijão. A gíria usa a mesma forma para dinheiro.",
    why: "O apelido não tem ligação clara com o dinheiro. Pegou pelo costume e pelo tom de brincadeira.",
    example: "Esse celular custou um tutu.",
  },
  {
    id: "parca",
    text: "Parça",
    meaning: "Amigo próximo, companheiro.",
    origin: "É uma redução de parceiro.",
    why: "A palavra corta o começo e o fim de parceiro e fica curta, como se fala entre amigos. O sentido é o mesmo: quem está junto nas ocasiões.",
    example: "Sábado vou ao jogo com os parças.",
  },
  {
    id: "truta",
    text: "Truta",
    meaning: "Amigo de confiança.",
    origin:
      "Truta é o nome do peixe, do latim tructa. Na gíria brasileira, a palavra passou a designar o amigo próximo.",
    why: "O uso é figurado e a palavra funciona como apelido carinhoso entre amigos. Ela marca uma amizade de confiança.",
    example: "Pode falar, truta, eu te ajudo.",
  },
  {
    id: "vei",
    text: "Véi",
    meaning: "Cara, amigo; usado para chamar alguém de forma informal.",
    origin:
      "É a pronúncia reduzida de velho. O lh de velho vira i na fala, e sai vei.",
    why: "Chamar o amigo de velho é um tratamento de proximidade, sem relação com a idade. A forma curta é a que se fala no dia a dia.",
    example: "Véi, você viu o jogo de ontem?",
  },
  {
    id: "joia",
    text: "Joia",
    meaning: "Tudo certo, ótimo.",
    origin:
      "Vem do substantivo joia, o objeto precioso. A gíria usa a palavra como resposta e como adjetivo.",
    why: "Uma joia é algo valioso e sem defeito. Dizer joia é dizer que a situação está nesse nível.",
    example: "Tá tudo joia por aqui.",
  },
  {
    id: "suave",
    text: "Suave",
    meaning: "Tranquilo, tudo bem.",
    origin:
      "Vem do adjetivo suave, do latim suavis. Na gíria, ganhou o uso de resposta e de aprovação.",
    why: "Suave é o que é macio e sem aspereza. Na fala vira sinônimo de situação calma, sem problema.",
    example: "Pode vir, tá suave por aqui.",
  },
  {
    id: "zica",
    text: "Zica",
    meaning: "Azar, má sorte.",
    origin:
      "É uma forma reduzida de ziquizira, palavra de uso regional que também significa azar.",
    why: "O encurtamento deixa a palavra mais seca e rápida. É o tom de quem aponta o azar sem rodeio.",
    example: "Esse carro tá com zica, quebrou de novo.",
  },
  {
    id: "pistolado",
    text: "Pistolado",
    meaning: "Muito irritado, furioso.",
    origin:
      "Vem de pistola, como em ficar pistola, com o sufixo -ado. A expressão é da fala popular.",
    why: "Quem fica pistola está pronto para disparar, como uma arma. A imagem é a de quem perdeu a paciência.",
    example: "Ele ficou pistolado com o atraso.",
  },
  {
    id: "chapado",
    text: "Chapado",
    meaning: "Muito sob efeito de bebida ou droga, ou muito cansado.",
    origin:
      "É o particípio de chapar, verbo da fala coloquial. O adjetivo chapado já significa achatado, liso.",
    why: "Quem está chapado fica sem energia e sem reação, como algo achatado. A imagem é de quem não se levanta.",
    example: "Voltei do plantão chapado de sono.",
  },
  {
    id: "embacado",
    text: "Embaçado",
    meaning: "Complicado, difícil ou suspeito.",
    origin:
      "É o particípio de embaçar, que significa tornar baço, sem brilho ou transparência. A gíria usa o sentido figurado.",
    why: "Um vidro embaçado não deixa ver direito. Uma situação embaçada tem a mesma falta de clareza.",
    example: "A situação ficou embaçada depois daquela briga.",
  },
  {
    id: "sinistro",
    text: "Sinistro",
    meaning: "Impressionante, muito bom ou muito perigoso.",
    origin:
      "Vem do latim sinister, que significa esquerdo e, depois, agourento. O adjetivo sinistro já indicava algo ameaçador.",
    why: "O sentido de ameaça virou intensidade na gíria. Sinistro passou a marcar tudo o que impressiona, no bom e no mau sentido.",
    example: "Esse show foi sinistro, nunca vi nada igual.",
  },
  {
    id: "fera",
    text: "Fera",
    meaning: "Pessoa muito talentosa.",
    origin:
      "Fera vem do latim fera, o animal selvagem. A gíria aplica a palavra a quem se destaca no que faz.",
    why: "A fera é forte e dominante no ambiente dela. Quem é fera domina o assunto do mesmo jeito.",
    example: "Ela é fera em matemática.",
  },
  {
    id: "craque",
    text: "Craque",
    meaning: "Pessoa muito hábil.",
    origin:
      "Vem do inglês crack, usado para o atleta excelente. A palavra entrou no português pelo futebol.",
    why: "O termo nasceu no esporte e passou a valer para qualquer campo. Craque é quem se destaca entre os melhores.",
    example: "Meu primo é craque em consertar computador.",
  },
  {
    id: "cabuloso",
    text: "Cabuloso",
    meaning: "Impressionante, difícil ou pesado.",
    origin:
      "Vem de cabula, gíria para azar, com o sufixo -oso. Com o tempo, o adjetivo passou a descrever o que impressiona.",
    why: "Do que dava azar, a palavra passou a descrever o que é intenso. O peso do original ficou no sentido de algo difícil ou forte.",
    example: "A prova de hoje foi cabulosa.",
  },
  {
    id: "azarar",
    text: "Azarar",
    meaning: "Paquerar, dar em cima.",
    origin:
      "Vem de azar, palavra de origem árabe, com o sufixo -ar. Na fala coloquial, azarar passou a significar investir numa conquista.",
    why: "Quem azara tenta a sorte com alguém, sem garantia de resposta. A imagem vem do jogo.",
    example: "Ele ficou azarando a colega a festa toda.",
  },
  {
    id: "paquera",
    text: "Paquera",
    meaning: "Flerte, ato de cortejar.",
    origin: "É o substantivo de paquerar, verbo da fala coloquial brasileira.",
    why: "A palavra descreve o jogo de olhares e abordagens de quem quer conquistar alguém. Serve para o ato e para a pessoa paquerada.",
    example: "A paquera começou na fila do cinema.",
  },
  {
    id: "gamado",
    text: "Gamado",
    meaning: "Apaixonado.",
    origin:
      "É o particípio de gamar, verbo coloquial que significa apaixonar-se.",
    why: "Quem está gamado fica preso a uma pessoa ou coisa, sem pensar em outra. O adjetivo marca a paixão forte.",
    example: "Ele está gamado na vizinha.",
  },
  {
    id: "zerar",
    text: "Zerar",
    meaning: "Terminar um jogo ou resolver algo por completo.",
    origin:
      "Vem de zero, com o sufixo -ar. O uso de terminar o jogo surgiu no vocabulário dos videogames.",
    why: "Quando se zera um jogo, não sobra fase para cumprir. A ideia é a de levar o que faltava a zero.",
    example: "Zerei o jogo em duas semanas.",
  },
  {
    id: "tankar",
    text: "Tankar",
    meaning: "Aguentar uma situação difícil, resistir a um golpe.",
    origin:
      "Vem do inglês tank. Nos jogos eletrônicos, o tank é o personagem que absorve o dano pelo grupo.",
    why: "Quem tanka segura o que vem para os outros, como o personagem do jogo. A imagem vale para qualquer pressão.",
    example: "Ele tankou a bronca do chefe sozinho.",
  },
  {
    id: "gado",
    text: "Gado",
    meaning: "Pessoa que segue alguém cegamente, por paixão ou fanatismo.",
    origin:
      "Vem de gado, o rebanho. A gíria usa a imagem de quem segue sem pensar.",
    why: "O gado anda onde a boiada vai, sem escolher o caminho. É assim que se vê o fã ou o eleitor que segue sem questionar.",
    example: "Ele defende o ídolo em tudo, é um gado.",
  },
  {
    id: "hitar",
    text: "Hitar",
    meaning: "Fazer sucesso, estourar.",
    origin:
      "Vem do inglês hit, o grande sucesso, com o sufixo -ar. A palavra nasceu no vocabulário da música e se espalhou pela internet.",
    why: "Um hit é o que todo mundo ouve. Hitar é virar assunto geral.",
    example: "A música hitou nas redes em uma semana.",
  },
  {
    id: "shippar",
    text: "Shippar",
    meaning: "Torcer para que duas pessoas fiquem juntas.",
    origin:
      "Vem do inglês ship, de relationship. A palavra surgiu entre fãs de séries e filmes, que torcem por casais da ficção.",
    why: "Quem shippa defende um casal como quem embarca num navio. Hoje o uso vale para casais da ficção e da vida real.",
    example: "Eu shippo esses dois desde o primeiro episódio.",
  },
  {
    id: "flopar",
    text: "Flopar",
    meaning: "Fazer feio, dar errado, fracassar.",
    origin: "Vem do inglês flop, que significa fracasso, com o sufixo -ar.",
    why: "Flop descreve a obra ou a ideia que cai sem repercussão. O verbo aplica isso a qualquer tentativa que não funciona.",
    example: "O lançamento flopou e ninguém comentou.",
  },
  {
    id: "hype",
    text: "Hype",
    meaning: "Expectativa e entusiasmo em torno de algo.",
    origin:
      "Vem do inglês hype, a publicidade exagerada. A palavra entrou no português pelas redes e pela cultura pop.",
    why: "O hype cresce antes do lançamento e movimenta quem espera. O termo marca esse barulho em torno de algo.",
    example: "Estou com muito hype para o novo álbum.",
  },
  {
    id: "delulu",
    text: "Delulu",
    meaning: "Pessoa iludida, que acredita em algo irreal.",
    origin:
      "É a forma encurtada de delusional, palavra do inglês. O termo se espalhou pelas redes entre fãs de K-pop.",
    why: "A palavra encurta delusional e soa leve e brincalhona. O tom brincalhão é parte do uso.",
    example: "Ela é delulu, acha que o ator vai responder.",
  },
  {
    id: "gag",
    text: "Gag",
    meaning: "Algo chocante ou surpreendente.",
    origin:
      "Vem do inglês gag, engasgar. O uso veio da cultura drag e dos fãs de cultura pop, que falam em dar gag.",
    why: "A reação ao choque é perder o ar, como quem engasga. A palavra descreve o que causa isso.",
    example: "A virada do capítulo deu gag em todo mundo.",
  },
  {
    id: "nerfar",
    text: "Nerfar",
    meaning: "Enfraquecer algo.",
    origin:
      "Vem do inglês nerf, termo dos jogos eletrônicos para reduzir a força de um personagem ou item. A palavra faz alusão à marca Nerf, de brinquedos de espuma.",
    why: "Uma arma de espuma não machuca. Nerfar é deixar algo tão fraco quanto ela.",
    example: "Nerfaram o personagem e ele perdeu a graça.",
  },
  {
    id: "biscoito",
    text: "Biscoito",
    meaning: "Quem faz qualquer coisa para ganhar curtida, elogio ou atenção.",
    origin:
      'Gíria das redes sociais, usada nos anos 2010 e 2020, com o verbo derivado "biscoitar" e o adjetivo "biscoiteiro".',
    why: "Biscoito é o petisco que se dá como recompensa. Quem faz algo só para receber aplauso age como quem espera o biscoito.",
    example: "Ela postou o treino só pra ganhar biscoito.",
  },
  {
    id: "red-flag",
    text: "Red flag",
    meaning: "Sinal de alerta de que alguém ou algo traz problema.",
    origin:
      'Vem do inglês "red flag", bandeira vermelha usada para avisar de perigo, em corridas, ferrovias e praias. Entrou no português pelas redes sociais, principalmente em conversas sobre relacionamentos.',
    why: "A bandeira vermelha manda parar ou ter cuidado. Um comportamento suspeito funciona como esse aviso.",
    example: "Ele fala mal de todas as ex, isso é red flag.",
  },
  {
    id: "dar-pt",
    text: "Dar PT",
    meaning: "Ficar tão bêbado que perde a noção das coisas.",
    origin:
      'PT é a sigla de "perda total", termo dos seguros para o veículo que não tem conserto. Entrou na gíria das baladas e dos bares.',
    why: "Carro com perda total não volta a funcionar. A pessoa que passou do ponto bebendo também não responde mais por si.",
    example: "Na festa de ontem ele deu PT antes da meia-noite.",
  },
  {
    id: "bombar",
    text: "Bombar",
    meaning: "Fazer muito sucesso, estar em alta.",
    origin:
      'Verbo derivado de "bomba". Na linguagem das redes e da música, ganhou o sentido de estourar em popularidade.',
    why: "Uma bomba estoura e todos notam. O que bomba chama atenção da mesma forma.",
    example: "O clipe novo bombou no primeiro dia.",
  },
  {
    id: "viralizar",
    text: "Viralizar",
    meaning: "Espalhar-se muito rápido pela internet.",
    origin:
      'Verbo formado a partir de "viral", de vírus, palavra do latim. O marketing digital chamou de viral o conteúdo que circula de pessoa em pessoa.',
    why: "O vírus passa de um para outro e se multiplica. O vídeo compartilhado de tela em tela faz o mesmo.",
    example: "O vídeo do cachorro viralizou em uma tarde.",
  },
  {
    id: "stalkear",
    text: "Stalkear",
    meaning: "Vasculhar o perfil de alguém nas redes sem que a pessoa saiba.",
    origin:
      'Vem do verbo inglês "to stalk", perseguir, com a terminação "-ear" que o português usa para adaptar verbos estrangeiros.',
    why: "O stalker segue alguém de perto sem ser notado. Quem olha foto por foto de um perfil faz o mesmo na tela.",
    example: "Passei a noite stalkeando o perfil da ex dele.",
  },
  {
    id: "cancelar",
    text: "Cancelar",
    meaning:
      "Rejeitar publicamente uma pessoa ou marca por algo que fez ou disse.",
    origin:
      'Vem de "cancel culture", expressão em inglês que se popularizou nas redes sociais dos Estados Unidos nos anos 2010 e chegou ao Brasil. O verbo "cancelar" já existia no português, vindo do latim "cancellare".',
    why: "Cancelar um compromisso é riscá-lo da lista. Cancelar uma pessoa é tirá-la do convívio e do apoio do público.",
    example: "A marca foi cancelada depois da propaganda.",
  },
  {
    id: "ta-pago",
    text: "Tá pago",
    meaning: "Está resolvido, assunto encerrado, sem dívida.",
    origin:
      "Vem do verbo pagar, no sentido de quitar uma conta. Passou da conversa sobre dinheiro para qualquer situação resolvida.",
    why: "Conta paga não deixa pendência. A frase diz que nada mais está em aberto entre as pessoas.",
    example: "Você me ajudou ontem, então tá pago.",
  },
  {
    id: "ta-dominado",
    text: "Tá dominado",
    meaning: "Está sob controle, não precisa se preocupar.",
    origin:
      "Vem do verbo dominar, ter controle sobre algo. Foi bastante usada na fala dos anos 2000.",
    why: "Quem domina uma situação decide o que acontece nela. Por isso a frase tranquiliza.",
    example: "Pode viajar, aqui tá dominado.",
  },
  {
    id: "caozeiro",
    text: "Caôzeiro",
    meaning: "Quem mente ou conta histórias exageradas.",
    origin:
      'Vem de "caô", gíria carioca para mentira e conversa fiada, com o sufixo "-eiro", que indica quem pratica o ato.',
    why: 'O sufixo "-eiro" nomeia o hábito, como em "fofoqueiro". O caôzeiro é quem vive de contar caô.',
    example: "Não acredita nele, o cara é caôzeiro.",
  },
  {
    id: "beca",
    text: "Beca",
    meaning: "Roupa, o jeito de se vestir.",
    origin:
      "Beca é a veste longa usada por juízes, professores e formandos. A gíria estendeu o nome para qualquer roupa, em especial a mais arrumada.",
    why: "A beca marca uma ocasião formal. Por isso a palavra passou a nomear o traje caprichado.",
    example: "Ele chegou na festa com uma beca nova.",
  },
  {
    id: "abalar",
    text: "Abalar",
    meaning: "Arrasar, causar grande impacto.",
    origin:
      'Vem do verbo abalar, sacudir, fazer tremer, derivado de "abalo". A gíria juvenil tomou o sentido de impressionar muito.',
    why: "O abalo sacode tudo ao redor. Quem abala deixa o ambiente sacudido pela presença.",
    example: "Ela abalou na festa com esse vestido.",
  },
  {
    id: "piriguete",
    text: "Piriguete",
    meaning: "Mulher que se veste de forma chamativa e sai muito para festas.",
    origin:
      "Palavra da gíria que se espalhou pelo Brasil nos anos 2000, associada ao funk e às festas, e depois foi registrada em dicionários.",
    why: "O termo descreve um tipo pelo visual e pelo hábito de sair, não por uma característica de personalidade.",
    example: "Ela se arrumou toda de piriguete para a balada.",
  },
  {
    id: "barra-pesada",
    text: "Barra-pesada",
    meaning: "Situação ou lugar difícil e perigoso.",
    origin:
      'Surgiu na gíria dos anos 1970. "Barra" já nomeava situação ou circunstância, como em "segurar a barra".',
    why: "Peso é dificuldade de carregar. A situação pesada é a que custa aguentar.",
    example: "O bairro onde ele cresceu era barra-pesada.",
  },
  {
    id: "careta",
    text: "Careta",
    meaning:
      "Pessoa convencional, que segue as regras e foge do que é fora do padrão.",
    origin:
      "Careta é o gesto de contrair o rosto. A contracultura dos anos 1960 e 1970 usou a palavra para quem não aderia ao novo comportamento.",
    why: "O rosto fechado lembra quem não se solta. A palavra pinta a pessoa certinha como alguém de cara amarrada.",
    example: "Meu tio é careta, nunca aceitou o rock.",
  },
  {
    id: "grilado",
    text: "Grilado",
    meaning: "Preocupado, desconfiado, com a cabeça cheia de um problema.",
    origin:
      'Vem de "grilo", gíria para preocupação ou ideia fixa, como em "estar com um grilo". O "-ado" forma o particípio.',
    why: "O grilo é um bicho que canta sem parar. A preocupação também ronda a cabeça sem sossego.",
    example: "Fiquei grilado com aquele barulho na janela.",
  },
  {
    id: "chuchu-beleza",
    text: "Chuchu beleza",
    meaning: "Tudo certo, tudo ótimo.",
    origin:
      'Gíria dos anos 1970. "Beleza" já significava "tudo bem", e "chuchu" entrou como reforço carinhoso.',
    why: 'Chuchu é termo de carinho. Ao se juntar a "beleza", a frase soa ainda mais alegre.',
    example: "Como foi a prova? Chuchu beleza!",
  },
  {
    id: "patota",
    text: "Patota",
    meaning: "Grupo de amigos próximos.",
    origin:
      'Vem do espanhol platino, onde "patota" nomeia um grupo de jovens que anda junto.',
    why: "A palavra aponta um bando que se reúne sempre, com laços de amizade.",
    example: "Sábado a patota inteira vai ao churrasco.",
  },
  {
    id: "bidu",
    text: "Bidu",
    meaning: "Pessoa esperta, que saca tudo rápido.",
    origin:
      "Gíria usada desde os anos 1970 como elogio a quem é sagaz e antecipa as situações.",
    why: "A palavra vale como rótulo de quem pega as coisas no ar e acerta sempre.",
    example: "Ele é bidu, entendeu tudo na primeira explicação.",
  },
  {
    id: "bode",
    text: "Bode",
    meaning: "Mau humor, chateação ou problema.",
    origin:
      'Gíria dos anos 1980. "Estar de bode" e "dar bode" nomeiam o aborrecimento e a confusão.',
    why: "O bode tem fama de rabugento. Estar de bode é estar de mau humor.",
    example: "Acordei de bode hoje.",
  },
  {
    id: "antenado",
    text: "Antenado",
    meaning: "Bem informado, atento ao que acontece.",
    origin:
      'Vem de "antena", o que capta sinais. A gíria dos anos 1990 passou a descrever quem capta as novidades.',
    why: "A antena pega o que passa no ar. A pessoa antenada percebe as tendências antes dos outros.",
    example: "Minha prima é antenada em tudo que sai de música nova.",
  },
  {
    id: "papo-reto",
    text: "Papo reto",
    meaning: "Conversa franca e direta, sem enrolação.",
    origin:
      'Junta "papo", conversa na gíria, e "reto", sem curva. É muito usada na fala da periferia e no rap.',
    why: "A linha reta vai direto ao ponto. A conversa reta dispensa rodeios.",
    example: "Vou te dar um papo reto: esse plano não funciona.",
  },
  {
    id: "patricinha",
    text: "Patricinha",
    meaning: "Garota de classe alta, vaidosa e ligada em moda e marcas.",
    origin:
      'Vem do nome Patrícia no diminutivo. A palavra ficou popular nos anos 1990, ao lado do filme "As Patricinhas de Beverly Hills", como o título saiu no Brasil.',
    why: "Usa-se um nome próprio comum para nomear um tipo social inteiro.",
    example: "A patricinha só compra roupa de marca.",
  },
  {
    id: "mauricinho",
    text: "Mauricinho",
    meaning: "Rapaz de classe alta, vaidoso e atento a marcas.",
    origin:
      'Vem do nome Maurício no diminutivo, criado como par masculino de "patricinha" nos anos 1990.',
    why: "O nome próprio serve de apelido para um tipo de jovem endinheirado e cuidadoso com a aparência.",
    example: "O mauricinho chegou de carro importado.",
  },
  {
    id: "quebrado",
    text: "Quebrado",
    meaning: "Sem dinheiro.",
    origin:
      'Particípio de "quebrar". Em economia, "quebrar" já significava falir, como em "o banco quebrou".',
    why: "Quem quebrou perdeu a base para se sustentar. O bolso vazio é o dinheiro que se partiu.",
    example: "Estou quebrado até o fim do mês.",
  },
  {
    id: "marombado",
    text: "Marombado",
    meaning: "Com o corpo muito musculoso.",
    origin:
      'Vem de "maromba", gíria de academia para a musculação, com o sufixo "-ado".',
    why: "Quem treina na maromba chega a esse físico. A palavra descreve o resultado do treino.",
    example: "Ele ficou marombado depois de dois anos na academia.",
  },
  {
    id: "biruta",
    text: "Biruta",
    meaning: "Maluco, desmiolado, de cabeça avoada.",
    origin:
      "Biruta é a manga de vento dos aeroportos, que gira para todo lado conforme o vento. A palavra ganhou o sentido de pessoa sem rumo.",
    why: "A biruta muda de direção sem parar. A pessoa cuja cabeça faz o mesmo parece maluca.",
    example: "Ele é biruta, muda de plano toda hora.",
  },
  {
    id: "pirado",
    text: "Pirado",
    meaning: "Maluco, fora de si.",
    origin:
      'Particípio de "pirar". O verbo vem da gíria que significava ir embora, fugir, e passou a significar enlouquecer.',
    why: "A cabeça foi embora do lugar. Quem pirou parece ter deixado a razão para trás.",
    example: "Tá pirado, quer pular de paraquedas sem treino.",
  },
  {
    id: "tiozao",
    text: "Tiozão",
    meaning:
      "Homem de meia-idade ou mais velho, de hábitos e gosto antiquados.",
    origin:
      "Aumentativo de tio. No uso familiar, tio já nomeia qualquer homem mais velho, e o sufixo -ão reforça a ideia.",
    why: "O aumentativo carrega a imagem do adulto grande e de outra geração, visto de fora por quem é mais jovem.",
    example: "O tiozão do pavê contou a mesma piada de novo.",
  },
  {
    id: "bobeira",
    text: "Bobeira",
    meaning: "Coisa sem importância, besteira, ou descuido bobo.",
    origin:
      "Formada de bobo com o sufixo -eira, que dá nome a ato ou conjunto de atos, como em tolice e moleza.",
    why: "Quem faz bobeira age como bobo, e por isso o termo serve tanto para o erro bobo quanto para o assunto que não vale a pena.",
    example: "Foi só uma bobeira, nem esquenta com isso.",
  },
  {
    id: "furada",
    text: "Furada",
    meaning:
      "Situação ou programa que dá errado e deixa a pessoa em desvantagem.",
    origin:
      "Vem de furar. Aparece em frases como entrar numa furada e cair numa furada.",
    why: "A imagem é a de quem cai num buraco: a furada é o lugar onde a pessoa se enrola sem ter percebido.",
    example:
      "Aceitei ir naquele show e foi uma furada, nem consegui ver o palco.",
  },
  {
    id: "roubada",
    text: "Roubada",
    meaning:
      "Situação ruim em que a pessoa sai no prejuízo ou se arrepende de ter entrado.",
    origin:
      "Vem de roubar. Aparece em frases como entrar numa roubada e foi roubada.",
    why: "Quem se dá mal numa roubada sai como se tivesse sido lesado, sem ter o que queria.",
    example: "Pegar estrada no feriado foi roubada: levamos seis horas.",
  },
  {
    id: "vacilo",
    text: "Vacilo",
    meaning:
      "Erro, descuido ou deslize cometido por distração ou falta de atenção.",
    origin:
      "Substantivo de vacilar, do latim vacillare, que significa balançar e cambalear. Na gíria urbana, vacilar passou a significar errar ou bobear.",
    why: "Vacilar é perder o equilíbrio por um instante. O vacilo é esse tropeço no momento em que a pessoa devia estar firme.",
    example: "Deixar a porta aberta foi um vacilo meu.",
  },
  {
    id: "arrasar",
    text: "Arrasar",
    meaning: "Ter um desempenho muito bom, causar forte impressão.",
    origin:
      "Verbo antigo que significa destruir, deixar raso. Na fala jovem e nas redes sociais, passou a ser usado de forma elogiosa para quem se sai muito bem.",
    why: "Quem arrasa deixa o lugar sem rival, como se tivesse passado por cima de tudo. A força do verbo vira elogio.",
    example: "Ela arrasou na apresentação de ontem.",
  },
  {
    id: "fechou",
    text: "Fechou",
    meaning: "Combinado, de acordo, está resolvido.",
    origin:
      "Vem do verbo fechar no sentido de concluir um negócio ou um acerto, como em fechar um acordo.",
    why: "Quando o trato é fechado, nada mais fica aberto a discussão. A palavra encerra o assunto.",
    example: "Amanhã às oito, na portaria? Fechou.",
  },
  {
    id: "sangue-bom",
    text: "Sangue bom",
    meaning: "Pessoa de bom caráter, em quem se pode confiar.",
    origin:
      "Junta sangue, usado há muito tempo para falar de índole e temperamento, com o adjetivo bom. Circula na fala informal e na gíria urbana.",
    why: "Dizer que o sangue é bom é dizer que a natureza da pessoa é boa. Por isso a expressão vale como elogio.",
    example: "Pode confiar nele, é sangue bom.",
  },
  {
    id: "rolo",
    text: "Rolo",
    meaning: "Confusão, enrolação, ou envolvimento amoroso informal.",
    origin:
      "Rolo é a peça cilíndrica de material enrolado, como o rolo de fio ou de papel. O sentido de confusão e de caso passageiro vem de enrolar.",
    why: "O fio enrolado em rolo é difícil de desfazer, como uma situação embaralhada. O mesmo vale para o envolvimento que não tem forma definida.",
    example: "Aquela reforma virou um rolo com o síndico.",
  },
  {
    id: "gastura",
    text: "Gastura",
    meaning: "Sensação de agonia, arrepio ou incômodo físico e emocional.",
    origin:
      "Palavra formada de gastar com o sufixo -ura. Gastar vem do latim vastare, que significa devastar.",
    why: "A sensação gasta os nervos de quem a sente, como o ruído de unha na lousa. O nome diz que ela desgasta a pessoa.",
    example: "Ouvir isso me dá uma gastura.",
  },
  {
    id: "mimimi",
    text: "Mimimi",
    meaning: "Reclamação repetitiva sobre algo que parece pequeno.",
    origin:
      "Onomatopeia formada pela repetição da sílaba mi, que imita voz chorosa. Ficou muito usada na fala e na internet do Brasil.",
    why: "A repetição de mi soa como lamúria de criança. A palavra transforma a queixa em ruído sem conteúdo.",
    example: "Chega de mimimi e vamos resolver o problema.",
  },
  {
    id: "vish",
    text: "Vish",
    meaning:
      "Interjeição que expressa espanto, preocupação ou que algo deu errado.",
    origin:
      "Grafia informal de vixe, interjeição nordestina. Aparece escrita também como vixi e vige.",
    why: "A forma curta e arrastada imita o som de quem toma um susto ou vê um problema. Serve para reagir na hora.",
    example: "Vish, esqueci a chave dentro de casa.",
  },
  {
    id: "eita",
    text: "Eita",
    meaning: "Interjeição que expressa surpresa, espanto ou admiração.",
    origin:
      "Interjeição típica do Nordeste, registrada também como eta. É palavra expressiva, formada por sons curtos sem sentido próprio.",
    why: "O som curto sai de uma vez diante do inesperado. Ela serve para surpresas boas, ruins ou só inesperadas.",
    example: "Eita, que bolo grande!",
  },
  {
    id: "aff",
    text: "Aff",
    meaning: "Interjeição que expressa irritação, enfado ou desdém.",
    origin:
      "Interjeição escrita, muito ligada ao uso na internet e no chat entre brasileiros.",
    why: "O som arrastado do ff lembra um sopro de quem perde a paciência. Por isso a palavra funciona como suspiro escrito.",
    example: "Aff, de novo esse barulho?",
  },
  {
    id: "mina",
    text: "Mina",
    meaning: "Moça, garota, mulher.",
    origin: "Gíria urbana do Brasil, com uso forte em São Paulo e no Sul.",
    why: "A palavra ficou como forma curta e informal de nomear a mulher na fala de rua. Ela soa mais solta que garota ou moça.",
    example: "Conheci uma mina muito legal na festa.",
  },
  {
    id: "maluco",
    text: "Maluco",
    meaning:
      "Amigo, cara; também pessoa fora do comum, excêntrica ou que age sem juízo.",
    origin:
      "Adjetivo para quem perdeu o juízo. Na gíria urbana, também passou a nomear o amigo ou o cara em geral, como em e aí, maluco.",
    why: "O sentido de gente fora da regra virou tom de intimidade: quem é chamado assim é tratado como parceiro, não como estranho.",
    example: "Fala, maluco, quanto tempo!",
  },
  {
    id: "bizu",
    text: "Bizu",
    meaning: "Dica prática, macete para resolver algo com mais facilidade.",
    origin:
      "Gíria que circula entre militares e estudantes, usada para a dica passada de um colega ao outro.",
    why: "A dica quebra o galho de quem não conhece o caminho. O bizu é o atalho que se aprende com alguém que já passou por ali.",
    example: "Me passa o bizu para essa prova.",
  },
  {
    id: "brega",
    text: "Brega",
    meaning: "Cafona, de mau gosto; também estilo musical popular.",
    origin:
      "No Nordeste, a palavra nomeava zona de prostituição e depois passou a nomear o gosto popular e exagerado. Brega também é o nome de um estilo musical do Pará e de Pernambuco.",
    why: "Quem vê o estilo de fora acha exagerado e fora da moda. Já o gênero musical usou o nome com orgulho e o fez seu.",
    example: "O brega paraense toca em toda festa de aparelhagem.",
  },
  {
    id: "cafona",
    text: "Cafona",
    meaning: "Fora de moda ou de mau gosto, sem elegância.",
    origin:
      "Do italiano cafone, que significa camponês grosseiro, palavra do napolitano.",
    why: "O cafone era o homem do campo visto como rude pelo habitante da cidade. A ideia de falta de refino ficou no adjetivo.",
    example: "Essa decoração de Natal é cafona demais.",
  },
  {
    id: "quebrada",
    text: "Quebrada",
    meaning: "Bairro de periferia onde a pessoa mora ou cresceu.",
    origin:
      "Quebrada é o terreno cheio de ladeiras e declives. Ficou como nome do bairro periférico na fala do rap e do funk, sobretudo em São Paulo.",
    why: "Muitos bairros de periferia ficam em morros e ladeiras. O nome do terreno virou o nome do lugar e de quem vive ali.",
    example: "Cresci na quebrada e conheço todo mundo.",
  },
  {
    id: "lombra",
    text: "Lombra",
    meaning:
      "Estado de relaxamento, torpor ou devaneio, geralmente por efeito de droga.",
    origin:
      "Gíria urbana ligada ao efeito de maconha. Depois ganhou sentido mais amplo, de estar desligado e lento.",
    why: "Na lombra a pessoa fica mole e distante, sem acompanhar o ritmo ao redor. A palavra descreve esse estado.",
    example: "Depois do almoço fiquei numa lombra e não consegui estudar.",
  },
  {
    id: "sacar",
    text: "Sacar",
    meaning: "Entender, perceber, notar.",
    origin:
      "Verbo sacar significa tirar para fora, puxar. Na gíria, passou a significar entender ou perceber algo.",
    why: "Entender é tirar a ideia de dentro do que se ouviu ou viu. Quem saca puxa o sentido para fora.",
    example: "Você sacou o que ele quis dizer?",
  },
  {
    id: "descolado",
    text: "Descolado",
    meaning: "Pessoa moderna, desencanada e com estilo próprio.",
    origin:
      "Particípio de descolar, que significa soltar o que estava colado. Na gíria, descolar também é conseguir algo.",
    why: "Quem é descolado parece solto, sem amarras e sem esforço. A imagem é a de quem se desprendeu da rigidez.",
    example: "Ele é descolado, se veste bem e fala com todo mundo.",
  },
  {
    id: "sem-nocao",
    text: "Sem noção",
    meaning: "Que não percebe os limites ou o que cabe em cada situação.",
    origin:
      "Formada de sem e noção, que significa ideia ou senso. Ficou comum na fala jovem urbana.",
    why: "Falta a ideia de como agir no momento. Quem é sem noção age sem medir o efeito do que diz ou faz.",
    example: "Ligar às seis da manhã foi sem noção.",
  },
  {
    id: "rolezinho",
    text: "Rolezinho",
    meaning:
      "Passeio em grupo, em especial de jovens que se reúnem em shopping center.",
    origin:
      "Diminutivo de rolê, que vem de rolé, palavra da gíria paulistana para passeio. Os rolezinhos de shopping, organizados em redes sociais, ficaram conhecidos em São Paulo em 2013 e 2014.",
    why: "O rolê é a volta sem destino e sem hora marcada. O diminutivo dá o tom leve e informal do passeio.",
    example: "A turma marcou um rolezinho no shopping no sábado.",
  },
  {
    id: "fominha",
    text: "Fominha",
    meaning:
      "Pessoa que quer tudo para si e não divide; no esporte, quem não passa a bola.",
    origin:
      "Formada de fome com o sufixo -inha. Muito usada no futebol e no esporte amador.",
    why: "Quem tem fome pega tudo o que vê. No jogo, o fominha fica com a bola e não passa para o colega.",
    example: "Ele é fominha, nunca toca a bola para ninguém.",
  },
  {
    id: "parada",
    text: "Parada",
    meaning: "Coisa, assunto ou situação, sem precisar nomear.",
    origin:
      "Substantivo de parar, formado como parada de ônibus e parada militar. Na gíria urbana, tomou o sentido de coisa qualquer.",
    why: "A palavra aponta algo sem dar nome, como o que está ali parado diante da pessoa. Por isso serve para qualquer assunto.",
    example: "Que parada é essa que você está fazendo?",
  },
  {
    id: "brother",
    text: "Brother",
    meaning: "Amigo próximo, parceiro de confiança.",
    origin:
      "Palavra inglesa para irmão. Entrou na fala jovem urbana brasileira, sobretudo na linguagem de música e de rua.",
    why: "Tratar o amigo como irmão mostra proximidade. A palavra estrangeira dá tom descontraído à saudação.",
    example: "Valeu, brother, ajudou demais.",
  },
];
