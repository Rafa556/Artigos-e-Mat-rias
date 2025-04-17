class Article {
  title: string;
  subtitle: string;
  publishedAt: Date;
  author: string;
  image: string;
  content: string;

  constructor(
    title: string,
    subtitle: string,
    publishedAt: Date,
    author: string,
    image: string,
    content: string
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.publishedAt = publishedAt;
    this.author = author;
    this.image = image;
    this.content = content;
  }
}

class CreateArticle {
  articleRepository: ArticleRepository;
  constructor(articleRepository: ArticleRepository) {
    this.articleRepository = articleRepository;
  }

  execute(
    title: string,
    subtitle: string,
    publishedAt: Date,
    author: string,
    image: string,
    content: string
  ): void {
    const article: Article = new Article(
      title,
      subtitle,
      publishedAt,
      author,
      image,
      content
    );
    this.articleRepository.addArticle(article);
  }
}

class RemoveArticles {
  articleRepository: ArticleRepository;
  constructor(articleRepository: ArticleRepository) {
    this.articleRepository = articleRepository;
  }
  execute(title: string) {
    this.articleRepository.removeArticles(title);
  }
}

class ArticleRepository {
  private articleList: Article[] = [];

  addArticle(article: Article): void {
    this.articleList.push(article);
  }

  getArticles(): Article[] {
    return this.articleList;
  }
  removeArticles(title: string): void {
    this.articleList = this.articleList.filter(
      (article) => article.title !== title
    );
  }
}

const articleRepository: ArticleRepository = new ArticleRepository();
const createArticle: CreateArticle = new CreateArticle(articleRepository);

createArticle.execute(
  "Murilo Huff é conhecido pelas canções apaixonadas e dedicação a família.",
  "Fonte: ViolaShow.",
  new Date("2024-12-18"),
  "Núcleo Digital",
  "https://diario89.com.br/upload/materias/8b172e78147719ec0f6ec5c912d91ed7.png",
  "Nesta segunda-feira, 16, um lançamento chega para completar o seu repertório, desta vez com uma motivação diferente: uma homenagem ao filho Leo no dia do seu aniversário de cinco anos. “Quanto custa?” está disponível em todas as plataformas de áudio e no Youtube. A música foi gravada pelo papai de Leo no projeto “Fortaleza” em 2024, que ganhou grande notoriedade com a faixa “Anestesiado”. “Gravei “Quanto custa?” e estava esperando um momento especial para fazer esse lançamento, chegou a hora! Hoje o Leozinho completa cinco anos, separei vários vídeos lindos para ilustrar o clipe. Vale a pena ouvir essa música, passa uma mensagem muito bacana de amor”, revela Murilo Huff."
);
createArticle.execute(
  "Morre a cantora Marília Mendonça em acidente aéreo",
  "Além da cantora, mais quatro pessoas perderam a vida no acidente que aconteceu em Minas Gerais",
  new Date("2021-11-05"),
  "Núcleo Digital",
  "https://diario89.com.br/upload/materias/aad6363261669e9ef21ec7dbb816625e.jpg",
  "Por meio de uma nota, a assessoria de imprensa da cantora confirma a morte da Marília Mendonça, 26 anos, e de mais quatro pessoas que estavam no avião, que caiu nesta sexta-feira, 5, na zona rural da cidade mineira de Piedade de Caratinga, por volta das 15h30. O avião decolou de Goiânia com destino a Caratinga (MG), onde a cantora faria um show. Confira a nota enviada pela assessoria de imprensa da cantora: 'Com imenso pesar, confirmamos a morte da cantora Marília Mendonça, seu produtor Henrique Ribeiro, seu tio e assessor Abicieli Silveira Dias Filho, do piloto e co-pilto do avião, os quais iremos preservar os nomes neste momento. O avião decolou de Goiânia com destino a Caratinga/MG, onde Marília teria uma apresentação esta noite. De momento, são estas as informações que temos.'. Antes de embarcar, Marília fez um vídeo e postou nas rede sociais. A aeronave era um bimotor Beech Aircraft, da PEC Táxi Aéreo, de Goiás, com capacidade para seis passageiros. O avião estava em situação regular, segundo a Anac. Sobre Marília Mendonça Conhecida como a “Rainha da Sofrência”, a cantora nasceu em Cristianópolis, Goiás, em 22 de julho de 1995. Em 2016, ficou nas paradas musicais com “Infiel” e “Eu sei de cor”. Antes, já era compositora de grandes sucessos da música sertaneja."
);

createArticle.execute(
  "Zezé di Camargo é flagrado trabalhando no campo pela noiva",
  "Cantor resolveu relembrar um pouco de suas raízes na fazenda",
  new Date("2021-07-22"),
  "Núcleo Digital",
  "https://diario89.com.br/upload/materias/661b6663c3c4c53fbde9eebe68255ff0.jpg",
  "No início da semana, Graciele Lacerda compartilhou no Instagram o lado fazendeiro do noivo, o sertanejo Zezé di Camargo. A influenciadora fez questão de mostrar o estilo do músico enquanto trabalhava nas plantações da fazenda do casal. Chamado de 'cowboy' pela amada, Zezé foi visto de chapéu e bota segurando uma enxada com a qual manuseava o trabalho rural. Ao se aproximar, Graciele questionou em tom bem-humorado: 'E esse cowboy, vai fazer o quê?'. Zezé respondeu a comparação de Graciele: 'Isso não é cowboy, é agricultor. Cowboy usa bota, agricultor usa botinha, o chapéu é diferente', afirmou."
);

createArticle.execute(
  "Marília Mendonça muda visual para aniversário e recebe elogio de Murilo Huff: “Gata”",
  "A Rainha da Sofrência completa 26 anos hoje!",
  new Date("2021-07-22"),
  "Núcleo Digital",
  "https://diario89.com.br/upload/materias/e42e4a3c60ae8883f2b33ad34b87b2ef.jpg",
  "Marília Mendonça completa 26 anos hoje, quinta-feira, 22, e, para comemorar, resolveu mudar! A cantora agora está loira platinada! Marília mudou seu cabelo e mostrou o novo corte, com franja, em suas redes sociais. Nos comentários, o namorado, Murilo Huff, elogiou a sertaneja. “Gata!” disse ele. Na legenda da publicação, a 'Rainha da Sofrência' explicou que o cabelo novo foi pensado há bastante tempo. 'Mais de um mês sem dormir pensando no tão sonhado corte, mais de um mês mandando referências um pro outro e não é que ficou lindo? Cada tesourada era uma gargalhada ontem', escreveu."
);

createArticle.execute(
  "Luan Santana posa com moto e anuncia novo clipe",
  "Cantor compartilhou sequência de cliques que enlouqueceu as fãs",
  new Date("2021-07-21"),
  "Núcleo Digital",
  "https://diario89.com.br/upload/materias/c5b369da64d1d9a3633384f349777003.jpg",
  "Na última segunda-feira, 19, Luan Santana deu o que falar ao compartilhar uma sequência de cliques poderosíssimos em cima de uma motocicleta. Na legenda das imagens, o cantor ainda anunciou um novo videoclipe, o que animou as fãs. ''Rolêzim depois de gravar um clipe lindo ontem..depois do hitaço “morena” será que vocês tão preparados?!'', perguntou ele."
);

createArticle.execute(
  "Maraisa revela que usa soro para controlar a ansiedade: “Semana pesada”",
  "Cantora sofre com o transtorno e recorre ao tratamento para controlar as crises",
  new Date("2021-07-21"),
  "Núcleo Digital",
  "https://diario89.com.br/upload/materias/9ec9efa1e149d1d4c156d301059237cd.jpg",
  "Maraisa, da dupla com Maiara, revelou que aplica um soro em seu braço para lidar com o transtorno de ansiedade que possui. A cantora falou que sua agenda de trabalho nesta semana será intensa e, por isso, foi até o médico realizar o procedimento. Em uma publicação no Instagram, a sertaneja falou sobre a aplicação do soro. “Fui tomar o sorinho da ansiedade. Esse sorinho é top. Daqui a pouco estou calminha. Esse soro muda a vida. Esta semana vai ser pesada. Já tomei porque a pessoa quase não é ansiosa. Daqui a pouquinho estou zen, nada me tira do sério, tudo é paz”, brincou ela."
);

const articles = articleRepository.getArticles();
const removeArticles: RemoveArticles = new RemoveArticles(articleRepository);

removeArticles.execute("Luan Santana posa com moto e anuncia novo clipe");

console.log(articleRepository.getArticles());

// console.log(removeArticles);
