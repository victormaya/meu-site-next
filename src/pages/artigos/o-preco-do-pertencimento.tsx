import React from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { ContainerDefaultPage } from '../../styles/ContainerPagesStyled'
import { ArticleContainer } from '../../styles/ArticleStyled'

const TITLE = 'O preço do pertencimento'
const DESCRIPTION =
  'Um eleitor de direita explica por que cansou de defender tudo o que vem do próprio lado — e por que isso não o levou para o outro.'
const URL = 'https://victormayadev.com/artigos/o-preco-do-pertencimento'

function Artigo() {
  return (
    <ContainerDefaultPage>
      <NextSeo
        title={TITLE}
        description={DESCRIPTION}
        canonical={URL}
        noindex
        nofollow
        openGraph={{
          type: 'article',
          locale: 'pt_BR',
          url: URL,
          title: TITLE,
          description: DESCRIPTION
        }}
      />
      <ArticleContainer>
        <Link href="/artigos" className="back">
          ← Artigos
        </Link>

        <h1>{TITLE}</h1>
        <div className="meta">6 de novembro de 2026 · @victormaya_</div>
        <p className="lead">{DESCRIPTION}</p>

        <p>
          Durante anos, tratei a política como quem torce para um time. Conhecia a
          escalação, defendia o técnico, via pênalti em tudo contra o adversário e
          simulação em tudo contra nós. Não virei de esquerda. Continuo discordando de
          boa parte do que ela propõe e devo continuar discordando. O que mudou foi
          outra coisa: perdi a disposição de pertencer a um grupo a ponto de precisar
          justificar cada erro dele e rejeitar, por reflexo, tudo o que vem do outro
          lado.
        </p>
        <p>
          O curioso é que nunca fui eleitor de partido. Para prefeito, quase sempre
          anulei o voto. Para vereador, só votei em parentes. Nas eleições estaduais,
          poucas vezes votei com convicção. Ainda assim, sem perceber, desenvolvi um
          pertencimento ideológico que hoje não quero mais alimentar. Tribalismo,
          descobri, não depende de em quem a gente vota, mas de como a gente pensa.
        </p>

        <h2>O atestado de inteligência</h2>
        <p>
          Há um ditado que a direita brasileira adora repetir: quem não é de esquerda
          aos 20 anos não tem coração; quem continua de esquerda depois dos 30 não tem
          cérebro. Com a ascensão do bolsonarismo, a provocação virou quase doutrina.
          Ser de direita passou a funcionar como atestado de inteligência, e ser de
          esquerda, como prova de ignorância ou má-fé.
        </p>
        <p>
          Comprei essa ideia por mais tempo do que gostaria de admitir. Ela é
          confortável justamente porque não exige nada: basta escolher o lado certo
          para se sentir mais esperto do que metade do país. O problema é que a
          realidade não colabora. Convivo com pessoas de esquerda que têm mais leitura,
          mais repertório e mais capacidade de argumentar do que muita gente que pensa
          como eu. A inteligência delas não evaporava quando discordavam de mim. O que
          faltava era a minha disposição de aceitar que alguém inteligente pudesse
          chegar a conclusões diferentes das minhas.
        </p>
        <p>
          Com o tempo, percebi que eu também estava condicionado a enxergar as pessoas
          pelo lado político a que pertenciam. Era sempre mais fácil achar justificativa
          para os erros dos aliados e desconfiar das intenções dos adversários. O mesmo
          deslize, cometido pelos dois lados, recebia de mim dois julgamentos
          diferentes.
        </p>
        <p>
          Um exemplo concreto: as pautas trabalhistas. Por muito tempo, bastava a
          discussão sobre jornada ou escala 6x1 aparecer para eu já saber o que pensar —
          era pauta de esquerda, logo era demagogia, logo era alguém querendo ganhar sem
          trabalhar. Nunca examinei de verdade. Quando parei para ouvir quem vive uma
          escala dessas, entendi que a pergunta é legítima, mesmo que eu continue
          discordando de boa parte das soluções propostas. Não mudei de lado por causa
          disso. Mudei o reflexo de descartar a pergunta junto com a resposta.
        </p>
        <p>
          Quando parei para olhar, a conclusão foi banal e incômoda. Há gente honesta e
          desonesta, generosa e mesquinha, brilhante e tola em todos os campos. Nenhuma
          ideologia torna alguém automaticamente melhor.
        </p>

        <h2>O feed não é o mundo</h2>
        <p>
          Há um agravante: a bolha. Todo mundo gosta de dizer que consome conteúdo de
          todos os lados. Mas o YouTube, o Instagram e as demais plataformas não mostram
          o mundo. Mostram o que calculam que vamos assistir até o fim. Elas não
          precisam nos convencer de nada; basta continuar entregando o que prende a
          atenção. E o que prende a atenção costuma ser o que indigna, confirma
          suspeitas ou faz rir do adversário.
        </p>
        <p>
          Comigo funcionou assim: passei horas vendo análise política achando que estava
          me informando, quando só aprofundava o que já pensava. E quando o outro lado
          aparecia na tela, raramente era a sua melhor versão. Era o militante mais
          histérico, a declaração mais absurda, o vídeo mais fácil de ridicularizar,
          apresentado como se falasse por todos que pensam daquele jeito.
        </p>
        <p>
          Foi aí que entendi que sair da bolha dá mais trabalho do que dizer que se
          está aberto ao contraditório. Tenho que procurar o que o algoritmo não me entrega,
          ler o melhor argumento do outro lado em vez do pior e aceitar que a versão que
          eu conheço de um assunto pode estar incompleta. Isso vale para mim, para a
          direita e para a esquerda.
        </p>

        <h2>Lealdade acima da coerência</h2>
        <p>
          A bolha explica o que chega até nós. Não explica o que aceitamos sem
          questionar. E é na segunda parte que está minha crítica ao bolsonarismo. Muita gente se aproximou dele
          por razões legítimas: cansaço com a corrupção, desejo de renovação, a
          sensação de que finalmente alguém falava por quem não se sentia representado.
          Entendo esses motivos. O problema começa quando a confiança num líder vira
          licença para relativizar qualquer contradição dele.
        </p>
        <p>
          O caso mais claro, para mim, foi a Lava Jato. Bolsonaro se elegeu em 2018 com
          a bandeira do combate à corrupção e levou Sergio Moro para o Ministério da
          Justiça. Em outubro de 2020, numa cerimônia no Palácio do Planalto, disse que
          tinha acabado com a Lava Jato porque não havia mais corrupção no governo. A
          frase não resiste a dois minutos de reflexão. Encerrar forças-tarefa não cabia
          ao presidente, e a operação investigava fatos de vários governos, não só do
          dele. E veio num momento em que o governo já se aproximava do Centrão,
          justamente a política que o movimento dizia combater. Uma bandeira decisiva
          para conquistar votos passou a valer pouco quando o assunto era cobrar
          coerência do próprio governo. E boa parte dos apoiadores aceitou sem piscar.
        </p>
        <p>
          O mesmo padrão se repetiu em escalas menores, como quando Eduardo Bolsonaro
          justificou sua ida ao Catar, em novembro de 2022, exibindo pen drives que,
          segundo ele, traziam vídeos em inglês sobre a situação do Brasil — explicação
          que fora da bolha virou piada instantânea e, dentro dela, foi defendida com
          seriedade.
        </p>
        <p>
          Não quero transformar esses episódios numa acusação contra todos os que
          votaram em Bolsonaro. O que me incomoda é outra coisa: em certos ambientes,
          apontar essas contradições passou a ser tratado como traição.
        </p>

        <p>
          Existe um nome para o que acontece quando a realidade contradiz algo em que
          acreditamos muito: dissonância cognitiva. Em vez de rever a crença,
          preferimos encontrar uma explicação que a preserve. E quanto mais investimos
          nela, em tempo, reputação e amizades, mais difícil fica admitir que nos
          enganamos.
        </p>
        <p>
          Poucas vezes vi isso tão claro quanto no fim de 2022. Logo depois do segundo
          turno, correntes de WhatsApp pediam aos apoiadores que mantivessem os
          bloqueios nas estradas e esperassem 72 horas: seria o prazo para uma
          intervenção militar com base no artigo 142 da Constituição. O artigo não
          prevê nada disso, e as 72 horas passaram. Vieram outros prazos. Semanas
          depois, com os acampamentos ainda de pé, esperava-se uma &quot;virada&quot; a
          qualquer momento e contavam-se os dias até a &quot;falsa posse&quot;. Cada
          profecia frustrada não enfraquecia o grupo: produzia a próxima.
        </p>
        <p>
          Há uma relação preocupante entre
          ambientes políticos fechados, desconfiança permanente de qualquer informação
          contrária e disposição para acreditar em narrativas extraordinárias sem exigir
          provas à altura. Quando toda informação incômoda vira parte de uma
          conspiração, não sobra terreno comum para conversa.
        </p>
        <h2>A tese aplicada a mim</h2>
        <p>
          Devo uma confissão. Na primeira versão deste texto, eu citava o vídeo
          de bolsonaristas que, em frente a um quartel em Porto Alegre, com o celular na
          cabeça, estariam pedindo socorro a extraterrestres. Fui checar antes de publicar. O vídeo que
          rodou o país como piada mostrava outra coisa: o grupo formava com as lanternas
          as letras &quot;SOS FA&quot;, um apelo às Forças Armadas, para ser fotografado
          por um drone. Continua sendo um pedido de intervenção militar, mas não tem
          nada de ET. Eu acreditei porque confirmava o que eu já pensava sobre quem
          estava ali. Passei o texto inteiro descrevendo esse mecanismo e caí nele na
          véspera de publicar.
        </p>
        <p>
          E esse mecanismo não tem lado. Em 2018, a versão de que a facada em Bolsonaro
          tinha sido encenação circulou com a mesma convicção no campo oposto, e foi
          desmentida por agências de checagem ainda naquele ano e pelos médicos que o
          operaram. O erro é idêntico ao meu: uma história que encaixa perfeitamente no
          que a pessoa já quer acreditar sobre o adversário dispensa verificação. Eu
          reconheço esse reflexo porque ele é meu também, não porque seja privilégio do
          outro lado.
        </p>
        <p>
          E não foi um deslize isolado. Sou arrogante em muitas situações e me acostumei
          a me sentir superior em muitas coisas. Quero aprender a desconfiar das minhas certezas, porque a visão de
          mundo que hoje me parece óbvia pode mudar amanhã. Admitir que posso estar
          errado não deveria ser vergonha. Talvez seja o gesto intelectual mais
          importante que alguém pode fazer.
        </p>
        <p>
          Na prática, comecei pelo mais simples: checo antes de compartilhar e
          desconfio do vídeo que me dá razão rápido demais. Mas também passei a
          acompanhar gente com quem não concordo, direto na fonte, em vez de conhecer o
          argumento dela pelo recorte que o meu lado faz. Mudou o que aparece no meu
          feed e, principalmente, mudou a qualidade do que eu acho que o outro lado
          pensa. Descobri que estava discutindo com a pior versão de um argumento que,
          na forma original, era bem mais difícil de responder.
        </p>

        <h2>O preço de discordar</h2>
        <p>
          Essa mudança também é pessoal. Amo minha família e não quero olhar para quem
          amo com desconfiança ou decepção só porque pensa diferente. Tenho colegas de
          trabalho que discordam das minhas ideias e que me inspiram em muitos aspectos.
          Não quero escolher amigos pela política, nem julgar o caráter de alguém porque
          recebe Bolsa Família ou defende o fim da escala 6x1. Posso questionar uma
          política pública, discutir seus efeitos e defender outra sem transformar isso
          num veredito sobre quem pensa diferente.
        </p>
        <p>
          Há uma coisa pouco nobre aqui: com família e amigos próximos, hoje até torço
          para que eles não falem mais de política comigo. Não foi um episódio que me levou a isso, foi
          cansaço acumulado — a conversa que começa leve, sobe de tom e termina com
          alguém magoado por algo que ninguém ali vai mudar de ideia sobre. Prefiro
          preservar o pouco tempo que tenho com essas pessoas a gastá-lo numa discussão
          que não leva a lugar nenhum. E não é exigência de um lado só: eu também parei
          de puxar o assunto. Se vale para eles, vale para mim.
        </p>
        <p>
          Não confunda isso com fugir do contraditório. O silêncio que eu quero é com
          quem eu amo e não quero perder. Com quem topa discordar sem rebaixar, continuo
          querendo a conversa inteira. A diferença não está no tema: está em se a
          relação sobrevive ao desacordo.
        </p>
        <p>
          Porque nem sempre sobrevive. Já fui chamado de idiota, imbecil, manipulado e
          vítima de lavagem cerebral por pessoas que considerava amigas. Aprendi com
          isso que certas relações dependem de uma cláusula silenciosa: você é
          respeitado enquanto concorda. Prefiro uma discordância honesta a uma amizade
          que só funciona enquanto há alinhamento.
        </p>

        <h2>Convicção sem tribo</h2>
        <p>
          Já pensei em me despolitizar, mas não consigo abandonar minhas batalhas.
          Tenho convicções e me preocupo com o país em que meus futuros filhos vão
          crescer. Quero defender o que considero melhor para eles. Ao mesmo tempo,
          preciso reconhecer que quem está do outro lado também quer o melhor para os
          seus.
        </p>
        <p>
          Talvez a diferença entre nós não esteja nas intenções, mas na maneira como
          enxergamos os problemas e nas soluções em que acreditamos. Discordar de
          alguém sobre o caminho é muito diferente de achá-lo burro ou mau.
        </p>
        <p>
          Continuo de direita, e dizer isso sem explicar seria repetir o rótulo em vez
          de defender a ideia. Então: acho que o Estado brasileiro cobra caro demais
          pelo que devolve, e que o problema não é apenas o tamanho da carga, é a
          distância entre o que se paga e o que se recebe de volta em saúde, segurança
          e educação. Acho que o crime organizado cresceu enquanto o debate público se
          ocupava de outras coisas, e que a resposta passa primeiro por mais repressão:
          polícia presente no território, capacidade real de investigação e punição que
          chegue ao fim. Não acho que prevenção seja inútil, acho que ela não funciona
          onde o Estado perdeu o controle do território para a facção. Primeiro se
          retoma, depois se previne. E acho que as
          decisões sobre valores e formação dos filhos cabem primeiro à família, o que
          não significa que o Estado nunca deva entrar — significa que ele entra por
          exceção, não por padrão.
        </p>
        <p>
          Posso estar errado em qualquer uma dessas três. São convicções, não
          demonstrações. A diferença em relação a alguns anos atrás é que hoje consigo
          dizer o que me faria mudar de ideia. A primeira cai se o nosso problema for
          cobrar pouco, e não gastar mal. A segunda cai se prevenção, sozinha, estiver
          derrubando crime violento onde foi tentada de verdade — ou se, onde a
          repressão foi ampliada de verdade, a queda não tiver se sustentado. A terceira cai se a
          exceção for muito mais comum do que eu suponho.
        </p>
        <p>
          Continuo achando que nem todas as ideias são igualmente boas. Mas quero ser
          menos obcecado em vencer discussões, menos dependente da aprovação do meu
          grupo e menos disposto a consumir só o que confirma o que já penso. Não
          preciso concordar com alguém para respeitá-lo, nem abandonar minhas
          convicções para admitir que posso aprender com quem pensa diferente. Era esse
          o preço do pertencimento: para continuar confortavelmente dentro, eu precisava
          entregar o direito de discordar dos meus. Achei caro demais pelo que vinha de
          volta.
        </p>

        <p className="note">
          Nota do autor: escrevi este texto com ajuda de inteligência artificial
          (ChatGPT e Claude), que usei para organizar e revisar. As ideias, as
          experiências e as convicções, inclusive as que ainda vou rever, são minhas.
        </p>
      </ArticleContainer>
    </ContainerDefaultPage>
  )
}

export default Artigo
