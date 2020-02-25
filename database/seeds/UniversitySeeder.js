'use strict'

/*
|--------------------------------------------------------------------------
| UniversitySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const University = use('App/Models/University')

class UniversitySeeder {
  async run() {
    await University.createMany([
      {
        name: 'Ifac -  Instituto Federal do Acre',
      },
      {
        name: 'Ufac -  Universidade Federal do Acre',
      },
      {
        name: 'CLARETIANO -  centro universitário',
      },
      {
        name: 'ESAB –  ESCOLA SUPERIOR ABERTA DO BRASIL',
      },
      {
        name: 'ESB –  Instituto de Ensino Superior Brasileiro',
      },
      {
        name: 'FAAO -  Faculdade da Amazônia Ocidental',
      },
      {
        name: 'FCE - Faculdade Campos Elíseos',
      },
      {
        name: 'FACEL – Faculdade de Administração, Ciências, Educação e Letras',
      },
      {
        name: 'Faculdade Futura',
      },
      {
        name: 'FADERGS -  Faculdade de Desenvolvimento do Rio Grande do Sul',
      },
      {
        name: 'FADISI -  Faculdade Diocesana São José',
      },
      {
        name: 'FAEL –  Faculdade Educacional da Lapa',
      },
      {
        name: 'FAP -  Faculdade Pitágoras',
      },
      {
        name: 'FAVENI -  Faculdade Venda Nova do Imigrante',
      },
      {
        name: 'FTBB - FACULDADE DE TEOLOGIA BATISTA BETEL',
      },
      {
        name: 'Iesacre -  Instituição de Ensino Superior do Acre',
      },
      {
        name: 'IEESE -  Instituto de Educação e Ensino Superior Ebenézer',
      },
      {
        name: 'UBC -  Universidade Braz Cubas',
      },
      {
        name: 'UNAMA -  Universidade da Amazônia',
      },
      {
        name: 'UCAM -  Universidade Cândido Mendes',
      },
      {
        name: 'UNESA -  Universidade Estácio de Sá',
      },
      {
        name: 'UNIASSELVI -  Centro Universitário Leonardo da Vinci',
      },
      {
        name: 'UniCesumar -  Centro Universitário de Maringá',
      },
      {
        name: 'UNICSUL -  Universidade Cruzeiro do Sul',
      },
      {
        name: 'Unimeta -  Unimeta Centro Universitário',
      },
      {
        name: 'Uninorte -  Centro Universitário Uninorte',
      },
      {
        name: 'UNINTER -  Grupo Educacional Uninter',
      },
      {
        name: 'Unip -  Universidade Paulista',
      },
      {
        name: 'UNISA -  Universidade de Santo Amaro',
      },
      {
        name: 'UNOPAR -  Universidade Norte do Paraná',
      },
      {
        name: ' (SENAC) Serviço Nacional de Aprendizagem Comercial',
      },
      {
        name: 'Uneal -  Universidade Estadual de Alagoas',
      },
      {
        name:
          'Uncisal -  Universidade Estadual de Ciências da Saúde de Alagoas',
      },
      {
        name: 'Ifal -  Instituto Federal de Alagoas',
      },
      {
        name: 'Ufal -  Universidade Federal de Alagoas',
      },
      {
        name: 'CESMAC -  Centro de Estudos Superiores de Maceió',
      },
      {
        name: 'FAA & IESA -  Associação de Ensino Superior de Alagoas',
      },
      {
        name: 'FACIMA -  Faculdade da Cidade de Maceió',
      },
      {
        name: 'FAP -  Faculdade Pitágoras',
      },
      {
        name: 'FITS -  Faculdade Integrada Tiradentes',
      },
      {
        name: 'Ueap -  Universidade Estadual do Amapá',
      },
      {
        name: 'IFAP -  Instituto Federal do Amapá',
      },
      {
        name: 'UNIFAP -  Universidade Federal do Amapá',
      },
      {
        name: 'CEAP -  Centro de Ensino Superior do Amapá',
      },
      {
        name: 'FABRAN -  Faculdade Brasil Norte',
      },
      {
        name: 'FAMA -  Faculdade do Amapá',
      },
      {
        name: 'FESAM -  Faculdade de Ensino Superior da Amazônia',
      },
      {
        name: 'IESAP -  Instituto de Ensino Superior do Amapá',
      },
      {
        name: 'IMMES -  Instituto Macapaense do Melhor Ensino Superior',
      },
      {
        name: 'META -  Faculdade Meta',
      },
      {
        name: 'UEA -  Universidade do Estado do Amazonas',
      },
      {
        name: 'IFAM -  Instituto Federal do Amazonas',
      },
      {
        name: 'UFAM -  Universidade Federal do Amazonas',
      },
      {
        name:
          'Universidade Luterana do Brasil - Universidade Luterana do Brasil',
      },
      {
        name: 'FSDB -  Faculdade Salesiana Dom Bosco',
      },
      {
        name: 'Ciesa -  Centro Universitário de Ensino Superior do Amazonas',
      },
      {
        name: 'UNINILTONLINS -  Centro Universitário Nilton Lins',
      },
      {
        name: 'Cesf -  Instituto de Ensino Superior Fucapi',
      },
      {
        name: 'FT -  Faculdade Táhirih',
      },
      {
        name: 'Fametro -  Faculdade Metropolitana de Manaus',
      },
      {
        name: 'FMF -  Faculdade Martha Falcão',
      },
      {
        name: 'Fal -  Faculdade Literatus',
      },
      {
        name: 'Unisalle -  Faculdade La Salle',
      },
      {
        name: 'Iaes -  Faculdade do Amazonas',
      },
      {
        name: 'Fom -  Faculdade de Odontologia de Manaus',
      },
      {
        name:
          'FBNCTSB -  Faculdade Boas Novas de Ciências Teológicas, Sociais e Biotecnológicas',
      },
      {
        name: 'Esbam -  Escola Superior Batista do Amazonas',
      },
      {
        name: 'Uninorte -  Centro Universitário do Norte',
      },
      {
        name: 'Unip -  Universidade Paulista',
      },
      {
        name: 'UECE -  Universidade Estadual do Ceará',
      },
      {
        name: 'URCA -  Universidade Regional do Cariri',
      },
      {
        name: 'UVA -  Universidade Estadual Vale do Acaraú',
      },
      {
        name: 'IFCE -  Instituto Federal do Ceará',
      },
      {
        name: 'UFC -  Universidade Federal do Ceará',
      },
      {
        name:
          'UNILAB -  Universidade Federal de Integração Luso-Afro-Brasileira',
      },
      {
        name: 'UFCA -  Universidade Federal do Cariri',
      },
      {
        name: 'CENTEC -  Falcudade de Tecnologia CENTEC',
      },
      {
        name: 'FCC -  Faculdade Católica do Ceará',
      },
      {
        name: 'FCF -  Faculdade Católica de Fortaleza',
      },
      {
        name: 'FCRS -  Faculdade Católica Rainha do Sertão',
      },
      {
        name: 'INTA -  Instituto Superior de Teologia Aplicada',
      },
      {
        name: 'IESF - Instituto de Ensino Superior de Fortaleza',
      },
      {
        name: 'UNICHRISTUS -  Centro Universitário Christus',
      },
      {
        name: 'UNIFAMETRO -  Centro Universitário Fametro',
      },
      {
        name: 'UNIFOR -  Universidade de Fortaleza',
      },
      {
        name: 'UNIFANOR - Centro Universitário Unifanor',
      },
      {
        name: 'UNIGRANDE - Centro Universitário da Grande Fortaleza',
      },
      {
        name: 'UPA -  Universidade Patativa do Assaré',
      },
      {
        name: 'ESTÁCIO FIC -  Faculdade Integrada do Ceará',
      },
      {
        name: 'FA7 -  Faculdade 7 de Setembro',
      },
      {
        name: 'FAC -  Faculdades Cearenses',
      },
      {
        name: 'FACE -  Faculdade Evolutivo',
      },
      {
        name: 'FAECE -  Faculdade de Ensino e Cultura do Ceará',
      },
      {
        name: 'FAFOR -  Faculdade de Fortaleza',
      },
      {
        name: 'FALS -  Faculdade de Ciências Aplicadas Doutor Leão Sampaio',
      },
      {
        name: 'FAP -  Faculdade Paraíso do Ceará',
      },
      {
        name: 'FAS - Faculdade Ari de Sá',
      },
      {
        name: 'FATE - Faculdade Ateneu',
      },
      {
        name: 'FATENE -  Faculdade Terra Nordeste',
      },
      {
        name: 'FFB -  Faculdade Farias Brito',
      },
      {
        name: 'FJN -  Faculdade de Juazeiro do Norte',
      },
      {
        name: 'FLF -  Faculdade Luciano Feijão',
      },
      {
        name: 'FMJ -  Faculdade de Medicina de Juazeiro do Norte',
      },
      {
        name: 'FTA -  Faculdade de Tecnologia Apoena',
      },
      {
        name: 'FVJ -  Faculdade Vale do Jaguaribe',
      },
      {
        name: 'UNIASSELVI -  Centro Universitário Leonardo da Vinci',
      },
      {
        name: 'ESCS -  Escola Superior de Ciências da Saúde',
      },
      {
        name: 'IFB -  Instituto Federal de Brasília',
      },
      {
        name: 'UnB -  Universidade de Brasília',
      },
      {
        name: 'UCB -  Universidade Católica de Brasília',
      },
      {
        name: 'UPIS -  União Pioneira de Integração Social',
      },
      {
        name: 'CEUB -  Centro Universitário de Brasília',
      },
      {
        name: 'FATE -  Faculdade Ateneu',
      },
      {
        name:
          'FACIPLAC -  Faculdade de Ciência e Tecnologia do Planalto Central',
      },
      {
        name: 'FACITEC -  Faculdade de Ciências Sociais e Tecnológicas',
      },
      {
        name: 'FACICESP - FACULDADES INTEGRADAS ICESP -  UNICESP -  Brasília',
      },
      {
        name: 'FASEP -  Faculdade Serrana',
      },
      {
        name: 'FTB -  Faculdades Integradas da Terra de Brasília',
      },
      {
        name: 'IESB -  Instituto de Educação Superior de Brasília',
      },
      {
        name: 'SENAC - Faculdade  Senac',
      },
      {
        name: 'UDF -  Centro Universitário do Distrito Federal',
      },
      {
        name: 'UNIEURO -  Centro Universitário Euroamericano',
      },
      {
        name:
          'UNIDESC -  Centro Universitário de Desenvolvimento do Centro Oeste',
      },
      {
        name: 'UNIP -  Universidade Paulista',
      },
      {
        name: 'UNIPLAN -  Centro Universitário Planalto do Distrito Federal',
      },
      {
        name: 'UNISEB - Centro Universitário Estácio UniSEB -  Brasília',
      },
      {
        name: 'UNOPAR -  Universidade Norte do Paraná',
      },
      {
        name: 'FACELI -  Faculdade de Ensino Superior de Linhares',
      },
      {
        name:
          'FAMES -  Faculdade De Musica do Espírito Santo" Mauricio de Oliveira"',
      },
      {
        name: 'IFES -  Instituto Federal do Espírito Santo',
      },
      {
        name: 'UFES -  Universidade Federal do Espírito Santo',
      },
      {
        name:
          'EMESCAM -  Escola Superior de Ciências da Santa Casa de Misericórdia de Vitória',
      },
      {
        name: 'FAPECS -  Instituto de Pesquisa em Ciências da Saude',
      },
      {
        name: 'UVV -  Universidade Vila Velha',
      },
      {
        name: 'UNESC - Centro Universitário do Espírito Santo',
      },
      {
        name: 'FAESA -  Faculdades Integradas Espírito-Santenses',
      },
      {
        name: 'UCL -  Faculdade do Centro Leste',
      },
      {
        name: 'Favi/FACES -  Faculdade do Espírito Santo',
      },
      {
        name: 'ESFA -  Escola Superior São Francisco de Assis',
      },
      {
        name: 'CUSC -  Centro Universitário São Camilo',
      },
      {
        name: 'FAFIA -  Faculdade de Filosofia Ciências e Letras de Alegre',
      },
      {
        name: 'FCB -  Faculdade Castelo Branco',
      },
      {
        name: 'CESAT -  Escola de Ensino Superior Anísio Teixeira',
      },
      {
        name: 'CESV -  Centro de Ensino Superior de Vitória',
      },
      {
        name: 'DOCTUM -  Rede de Ensino Doctum',
      },
      {
        name: 'FABAVI -  Faculdade Batista de Vitoria',
      },
      {
        name: 'FAACZ -  Faculdade de Aracruz',
      },
      {
        name: 'FACE -  Faculdade Casa do Estudante',
      },
      {
        name: 'FACES -  Faculdade do Espírito Santo',
      },
      {
        name: 'FASE -  Faculdade da Serra',
      },
      {
        name: 'FAVI -  Associação Vitoriana de Ensino Superior',
      },
      {
        name: 'FCMV -  Faculdade Candido Mendes de Vitória',
      },
      {
        name: 'FDV -  Faculdades Integradas de Vitória',
      },
      {
        name:
          'FUCAPE - Fundação Instituto Capixaba de Pesquisas em Contabilidade, Economia e Finanças',
      },
      {
        name: 'MULTIVIX -  Faculdade Brasileira',
      },
      {
        name: 'PIO XII -  Faculdade de Estudos Sociais do Espírito Santo',
      },
      {
        name: 'SABERES -  Faculdade Saberes',
      },
      {
        name: 'UNESA -  Universidade Estácio de Sá',
      },
      {
        name: 'UniRV (FESURV) -  Universidade de Rio Verde',
      },
      {
        name: 'UEG -  Universidade Estadual de Goiás',
      },
      {
        name: 'IFG -  Instituto Federal de Goiás',
      },
      {
        name: 'UFG -  Universidade Federal de Goiás',
      },
      {
        name: 'IF Goiano  -  Instituto Federal Goiano',
      },
      {
        name: 'UFCat - Universidade Federal de Catalão',
      },
      {
        name: 'UFJat - Universidade Federal de Jataí',
      },
      {
        name:
          'IPOG (página não existe) - IPOG - Instituto de Pós-Graduação (página não existe)',
      },
      {
        name: 'UCG - Pontifícia Universidade Católica de Goiás',
      },
      {
        name: 'UNIVERSO - UNIVERSO',
      },
      {
        name:
          'Fac (página não existe) - Faculdade Católica de Anápolis (página não existe)',
      },
      {
        name: 'ULBRA - Universidade Luterana do Brasil',
      },
      {
        name: 'Fasug -  Faculdade do Sudeste Goiano',
      },
      {
        name: 'ALFA -  Faculdade Alves Faria',
      },
      {
        name: 'CESUC -  Centro de Ensino Superior de Catalão',
      },
      {
        name: 'FACERES -  Faculdade de Ceres',
      },
      {
        name: 'FACER -  Faculdade de Ciências de Rubiataba',
      },
      {
        name: 'FACEG -  Faculdade Evangelica de Goianesia',
      },
      {
        name: 'Facmais -  Faculdade de Inhumas',
      },
      {
        name: 'FAA -  Faculdade Anhanguera de Anápolis',
      },
      {
        name: 'FASAM -  Faculdade Sul-Americana',
      },
      {
        name: 'IESRIVER -  Instituto de Ensino Superior de Rio Verde',
      },
      {
        name: 'INSJAR -  Instituto Jordão de Arruda',
      },
      {
        name: 'UNESA -  Universidade Estácio de Sá',
      },
      {
        name: 'UNIP -  Universidade Paulista',
      },
      {
        name: 'UNIFASC -  Faculdade Santa Rita de Cássia',
      },
      {
        name: 'UniEvangelica -  Universidade Evangélica',
      },
      {
        name: 'Unianhanguera -  Universidade Anhanguera',
      },
      {
        name: 'IAESUP -  Faculdades e Colégio Aphonsiano',
      },
      {
        name: 'IUESO -  Instituto Unificado de Ensino Superior Objetivo',
      },
      {
        name: 'FMB -  Faculdade Montes Belos',
      },
      {
        name: 'UEMA -  Universidade Estadual do Maranhão',
      },
      {
        name:
          'UEMASUL -  Universidade Estadual da Região Tocantina do Maranhão',
      },
      {
        name: 'IEMA -  Instituto Estadual do Maranhão',
      },
      {
        name: 'IFMA -  Instituto Federal do Maranhão',
      },
      {
        name: 'UFMA -  Universidade Federal do Maranhão',
      },
      {
        name: 'CEST -  Faculdade Santa Terezinha',
      },
      {
        name: 'FACEM -  Faculdade do Estado do Maranhão',
      },
      {
        name: 'UNIFACEMA -  Faculdade de Ciências e Tecnologia do Maranhão',
      },
      {
        name: 'FACIMP -  Faculdade de Imperatriz',
      },
      {
        name: 'FAMA -  Faculdade Atenas Maranhense',
      },
      {
        name: 'FAP - Faculdade do Baixo Paranaíba ( Chapadinha',
      },
      {
        name: 'FEST -  Faculdade de Educação Santa Terezinha',
      },
      {
        name: 'FSL - Faculdade São Luís',
      },
      {
        name:
          'IESF - Instituto de Ensino Superior Franciscano ( Paço do Lumiar',
      },
      {
        name: 'IMEC -  Instituto Maranhense de Ensino e Cultura',
      },
      {
        name: 'UNDB -  Centro Universitário  Dom Bosco',
      },
      {
        name: 'CEUMA -   Universidade CEUMA',
      },
      {
        name: 'UNEMAT      -  Universidade do Estado de Mato Grosso',
      },
      {
        name: 'IFMT        -  Instituto Federal do Mato Grosso',
      },
      {
        name: 'UFMT        -  Universidade Federal de Mato Grosso',
      },
      {
        name: 'FAUC -  Faculdade Cuiabá',
      },
      {
        name: 'FCR -  Faculdade Cândido Rondon',
      },
      {
        name: 'FAUSB -  Faculdade Desembargador Sávio Brandão',
      },
      {
        name: 'CATHEDRAL -  Faculdades Cathedral-Barra do Garças',
      },
      {
        name:
          'EDUVALE -  Faculdade de Ciências Sociais Aplicadas do Vale do São Lourenço',
      },
      {
        name: 'FADAF - Faculdade de Direito de Alta Floresta',
      },
      {
        name: 'FAPAN - Faculdade do Pantanal',
      },
      {
        name: 'FASIPE -  Faculdade FASIPE',
      },
      {
        name: 'ICEC -  Instituto Cuiabá de Ensino e Cultura',
      },
      {
        name: 'IESMT -  Instituto de Ensino Superior de Mato Grosso',
      },
      {
        name: 'LA SALLE -  Faculdade La Salle',
      },
      {
        name: 'ULBRA - Universidade Luterana do Brasil - EAD',
      },
      {
        name: 'UNIC -  Universidade de Cuiabá',
      },
      {
        name: 'UNIP -  Universidade Paulista',
      },
      {
        name: 'UNIRONDON  -  Centro Universitário Cândido Rondon',
      },
      {
        name: 'UNIVAG -  Centro Universitário de Várzea Grande',
      },
      {
        name:
          'UNIVAR -  Universidades Unidas do Vale do Araguaia-Barra do Garças',
      },
      {
        name: 'UEMS -  Universidade Estadual do Mato Grosso do Sul',
      },
      {
        name: 'UFGD -  Universidade Federal da Grande Dourados',
      },
      {
        name: 'IFMS -  Instituto Federal de Mato Grosso do Sul',
      },
      {
        name: 'UFMS -  Universidade Federal do Mato Grosso do Sul',
      },
      {
        name: 'UCDB -  Universidade Católica Dom Bosco',
      },
      {
        name: 'AEMS -  Faculdades Integradas de Três Lagoas',
      },
      {
        name: 'FCG -  Faculdade Campo Grande',
      },
      {
        name: 'FACSUL -  Faculdade Mato Grosso do Sul',
      },
      {
        name: 'UNAES -  Centro Universitário de Campo Grande',
      },
      {
        name:
          'UNIDERP -  Universidade para o Desenvolvimento do Estado e Região do Pantanal',
      },
      {
        name: 'UNIGRAN -  Centro Universitário da Grande Dourados',
      },
      {
        name: 'FJP -  Fundação João Pinheiro',
      },
      {
        name: 'UEMG -  Universidade do Estado de Minas Gerais',
      },
      {
        name: 'UNIMONTES -  Universidade Estadual de Montes Claros',
      },
      {
        name:
          'CEFET-MG -  Centro Federal de Educação Tecnológica de Minas Gerais',
      },
      {
        name: 'IFMG -  Instituto Federal de Minas Gerais',
      },
      {
        name: 'IFNMG -  Instituto Federal do Norte de Minas Gerais',
      },
      {
        name: 'IFSM -  Instituto Federal do Sudeste de Minas',
      },
      {
        name: 'IFSULDEMINAS -  Instituto Federal do Sul de Minas',
      },
      {
        name: 'IFTM -  Instituto Federal do Triângulo Mineiro',
      },
      {
        name: 'UFJF -  Universidade Federal de Juiz de Fora',
      },
      {
        name: 'UFLA -  Universidade Federal de Lavras',
      },
      {
        name: 'UFMG -  Universidade Federal de Minas Gerais',
      },
      {
        name: 'UFOP -  Universidade Federal de Ouro Preto',
      },
      {
        name: 'UFSJ -  Universidade Federal de São João del-Rei',
      },
      {
        name: 'UFTM -  Universidade Federal do Triângulo Mineiro',
      },
      {
        name: 'UFU -  Universidade Federal de Uberlândia',
      },
      {
        name: 'UFV -  Universidade Federal de Viçosa',
      },
      {
        name:
          'UFVJM -  Universidade Federal dos Vales do Jequitinhonha e Mucuri',
      },
      {
        name: 'UNIFAL -  Universidade Federal de Alfenas',
      },
      {
        name: 'UNIFEI -  Universidade Federal de Itajubá',
      },
      {
        name: 'APM-MG -  Academia de Polícia Militar de Minas Gerais',
      },
      {
        name: 'EEK - Escola de Engenharia Kennedy',
      },
      {
        name: 'EEWB -  Escola de Enfermagem Wenceslau Braz',
      },
      {
        name: 'ESDHC -  Escola Superior Dom Helder Câmara',
      },
      {
        name: 'FACAPA -  Faculdade Católica de Pouso Alegre',
      },
      {
        name: 'FACSFX - Faculdade São Francisco Xavier  undefined',
      },
      {
        name: 'FADIPA -  Faculdade de Direito de Ipatinga',
      },
      {
        name: 'FAC -  Faculdade Arquidiocesana de Curvelo',
      },
      {
        name: 'FAP -  Faculdade Arquidiocesana de Pirapora',
      },
      {
        name: 'FADMINAS - Faculdades Integradas Adventistas de Minas Gerais',
      },
      {
        name: 'FAGAMMON -  Faculdade Presbiteriana Gammon',
      },
      {
        name: 'FDSM - Faculdade de Direito do Sul de Minas',
      },
      {
        name:
          'FAC FUNAM - Faculdade de Tecnologia Alto e Médio São Francisco  undefined',
      },
      {
        name: 'FACECA - Faculdade Cenecista de Varginha',
      },
      {
        name:
          'FASF/Unisa - Faculdade de Filosofia, Ciências e Letras do Alto São Francisco',
      },
      {
        name: 'FAZU -  Faculdades Associadas de Uberaba',
      },
      {
        name: 'FCMMG -  Faculdade de Ciências Médicas de Minas Gerais',
      },
      {
        name:
          'FCMS/JF -  Faculdade de Ciências Médicas e da Saúde de Juiz de Fora',
      },
      {
        name: 'FMG -  Faculdade Metodista Granbery',
      },
      {
        name: 'FMIT -  Faculdade de Medicina de Itajubá',
      },
      {
        name: 'FUNJOB -  Faculdade de Medicina de Barbacena',
      },
      {
        name: 'FMS -  Faculdade Machado Sobrinho',
      },
      {
        name: 'FUMEC -  Fundação Mineira de Educação e Cultura',
      },
      {
        name: 'FUNCESI -  Fundação Comunitária de Ensino Superior de Itabira',
      },
      {
        name: 'INATEL -  Instituto Nacional de Telecomunicações',
      },
      {
        name: 'IESP - Instituto de Educação Superior de  Patrocínio',
      },
      {
        name: 'PUCMG -  Pontifícia Universidade Católica de Minas Gerais',
      },
      {
        name: 'UIT -  Universidade de Itaúna',
      },
      {
        name: 'UNIARAXÁ -  Centro Universitário do Planalto de Araxá',
      },
      {
        name: 'UNIBH -  Centro Universitário de Belo Horizonte',
      },
      {
        name: 'UNICERP - Centro Universitário do Cerrado - Patrocínio',
      },
      {
        name:
          'UNIFEMM - Centro Universitário de Sete Lagoas "Monsenhor Messias"',
      },
      {
        name: 'UNIFORMG -  Centro Universitário de Formiga',
      },
      {
        name: 'UNILESTE -  Centro Universitário do Leste de Minas Gerais',
      },
      {
        name: 'UNIPAC -  Universidade Presidente Antônio Carlos',
      },
      {
        name: 'UNIPAM -  Centro Universitário de Patos de Minas',
      },
      {
        name: 'UNITRI - Centro Universitário do Triângulo',
      },
      {
        name: 'UNIUBE - Universidade de Uberaba',
      },
      {
        name: 'UNIVAS -  Universidade do Vale do Sapucaí',
      },
      {
        name: 'UNIVALE -  Universidade Vale do Rio Doce',
      },
      {
        name: 'UNIVERSO -  Universidade Salgado de Oliveira',
      },
      {
        name: 'CUEA - Centro Universitário Eaprenda Elearning',
      },
      {
        name: 'ASMEC - Associação Sul Mineira de Educação e Cultura',
      },
      {
        name: 'CECON - Centro Educacional Conceição Nunes',
      },
      {
        name: 'CENSI - Centro de Ensino Superior de Itabira',
      },
      {
        name: 'DOCTUM -  Rede de Ensino Doctum',
      },
      {
        name: 'FACEMG -  Faculdade de Ensino de Minas Gerais',
      },
      {
        name:
          'FACESM -  Faculdade de Ciências Sociais Aplicadas do Sul de Minas',
      },
      {
        name: 'FACICA - Faculdade de Ciências da Saúde de Campos Gerais',
      },
      {
        name: 'FACED - Faculdade de Ciências Contabeis de Divinópolis',
      },
      {
        name: 'FACIC - Faculdade de Ciências Humanas de Curvelo  undefined',
      },
      {
        name: 'FACSUM -  Faculdade do Sudeste Mineiro',
      },
      {
        name: 'FACTU -  Faculdade de Ciências e Tecnologia de Unaí',
      },
      {
        name: 'FAF - Faculdade de Frutal  undefined',
      },
      {
        name: 'FAJESSEN -  Faculdade Arnaldo Jessen',
      },
      {
        name: 'FAVENORTE -  Instituto Superior de Educação Verde Norte',
      },
      {
        name: 'FEMG - Faculdade de Engenharia de Minas Gerais',
      },
      {
        name: 'FJF -  Faculdade Juiz de Fora',
      },
      {
        name: 'FMC -  Faculdades Milton Campos',
      },
      {
        name: 'FPAS -  Faculdade Pitágoras de Administração Superior',
      },
      {
        name: 'FPMG -  Faculdade Promove de Minas Gerais',
      },
      {
        name: 'FPU - Faculdade Politécnica de Uberlândia',
      },
      {
        name: 'FSA - Faculdades Santo Agostinho',
      },
      {
        name: 'FUC - Faculdades Unificadas de Cataguases  undefined',
      },
      {
        name: 'FUNEDI - Fundação Educacional de Divinópolis',
      },
      {
        name: 'IBHES -  Instituto Belo Horizonte de Ensino Superior',
      },
      {
        name: 'INESC -  Instituto de Ensino Superior Cenecista',
      },
      {
        name: 'IPTAN -  Instituto de Ensino Superior Presidente Tancredo Neves',
      },
      {
        name: 'ISEC - Instituto Superior de Educação de Campos Gerais',
      },
      {
        name: 'SECAL - Faculdade Santa Amélia',
      },
      {
        name: 'UNA -  Centro Universitário UNA',
      },
      {
        name: ' - Universidade de Alfenas José do Rosário Vellano UNIFENAS',
      },
      {
        name: 'UNILAVRAS -  Centro Universitário de Lavras',
      },
      {
        name: 'UNIVERSITAS -  Centro Universitário de Itajubá',
      },
      {
        name: 'UNIVIÇOSA -   União de Ensino Superior de Viçosa',
      },
      {
        name: 'UFRA -  Universidade Federal Rural da Amazônia',
      },
      {
        name: 'UFPA -  Universidade Federal do Pará',
      },
      {
        name: 'IFPA -  Instituto Federal do Pará',
      },
      {
        name: 'UFOPA -  Universidade Federal do Oeste do Pará',
      },
      {
        name: 'UNIFESSPA -  Universidade Federal do Sul e Sudeste do Pará',
      },
      {
        name: 'UEPA -  Universidade do Estado do Pará',
      },
      {
        name: 'CIABA -  Centro de Instrução Almirante Braz de Aguiar',
      },
      {
        name: 'CEAMA -  Centro de Educação da Amazônia',
      },
      {
        name: 'CESUPA -  Centro Universitário do Pará',
      },
      {
        name: 'ESMAC -  Escola Superior Madre Celeste',
      },
      {
        name: 'ESAMAZ -  Escola Superior da Amazônia',
      },
      {
        name: 'ESTÁCIO FAP -  Estácio de Sá Faculdade do Pará',
      },
      {
        name: 'FAAMA - Faculdade Adventista da Amazônia',
      },
      {
        name: 'FAAM  -  Faculdade da Amazônia',
      },
      {
        name: 'FAMAZ -  Faculdade Metropolitana da Amazônia',
      },
      {
        name: 'FABEL -  Faculdade de Belém',
      },
      {
        name: 'FACETE - Faculdade de Ensino Tecnológico do Estado do Pará',
      },
      {
        name: 'FACI - Faculdade Ideal',
      },
      {
        name: 'FACIP -  Faculdade Ipiranga',
      },
      {
        name: 'FAPAN -  Faculdade Pan Amazônica',
      },
      {
        name: 'FAPEN -  Faculdade Paraense de Ensino',
      },
      {
        name: 'FCAT -  Faculdade de Castanhal',
      },
      {
        name: 'FEAPA -  Faculdade de Estudos Avançados do Pará',
      },
      {
        name: 'FIT - Faculdades Integradas do Tapajós (Santarém)',
      },
      {
        name: 'FIBRA -  Faculdade Integrada Brasil Amazônia',
      },
      {
        name: 'FMM - Faculdade Metropolitana de Marabá',
      },
      {
        name: 'FPA - Faculdade Pan Americana',
      },
      {
        name: 'IESAM -  Instituto de Ensinos Superiores da Amazônia',
      },
      {
        name: 'UNAMA -  Universidade da Amazônia',
      },
      {
        name: 'UNIP -  Universidade Paulista',
      },
      {
        name: 'UNIPLAN',
      },
      {
        name: 'UEPB -  Universidade Estadual da Paraíba',
      },
      {
        name: 'IFPB -  Instituto Federal da Paraíba',
      },
      {
        name: 'UFPB -  Universidade Federal da Paraíba',
      },
      {
        name: 'UFCG -  Universidade Federal de Campina Grande',
      },
      {
        name: 'UNIPÊ -  Centro Universitário de João Pessoa',
      },
      {
        name: 'ASPER -  Associação Paraibana de Ensino Renovado',
      },
      {
        name: 'DEVRY -  DeVry João Pessoa',
      },
      {
        name: 'ESAC - Escola Superior de Aviação Civil',
      },
      {
        name: 'ESBJ -  Faculdade Maurício de Nassau',
      },
      {
        name: 'FAC - Faculdade de Campina Grande',
      },
      {
        name: 'FACENE -  Faculdade de Enfermagem Nova Esperança',
      },
      {
        name: 'UNIFUTURO - Faculdades Integradas do Brasil (página não existe)',
      },
      {
        name: 'FAFIC - Faculdade de Filosofía, Ciências e Letras de Cajazeiras',
      },
      {
        name: 'FAFIL - Faculdade de Filosofía Ciências e Letras',
      },
      {
        name: 'FAP -  Faculdade Paraibana',
      },
      {
        name: 'FARR - Faculdade Reinaldo Ramos',
      },
      {
        name: 'FASER - Faculdade Santa Emília de Rodat',
      },
      {
        name: 'FASP -  Faculdade São Francisco da Paraíba',
      },
      {
        name: 'FATEC - Faculdade de Tecnologia de João Pessoa',
      },
      {
        name: 'FATECPB - Faculdade de Tecnología da Paraíba',
      },
      {
        name: 'FAVAP -  Faculdades Vale do Piancó',
      },
      {
        name: 'FCM -  Faculdade de Ciências Médicas de Campina Grande',
      },
      {
        name: 'FCM-PB - Faculdade de Ciências Médicas da Paraíba',
      },
      {
        name: 'FEF - Faculdade Evilásio Formiga',
      },
      {
        name: 'FESVIP - Faculdade de Enfermagem São Vicente de Paula',
      },
      {
        name: 'FESP - Faculdade de Ensino Superior da Paraíba',
      },
      {
        name: 'FIAA - Faculdades Integradas Anglo-Americano',
      },
      {
        name: 'FPB - Faculdade Potiguar da Paraíba',
      },
      {
        name: 'FPB - Faculdade Internacional da Paraíba',
      },
      {
        name: 'FPPD - Faculdade Paraibana de Processamento de Dados',
      },
      {
        name: 'FSM - Faculdade Santa María',
      },
      {
        name: 'IESP -  Instituto de Educação Superior da Paraíba',
      },
      {
        name: 'INPER - Insituto Paraibano de Ensino Renovado',
      },
      {
        name: 'IPOG - Instituto de Pós-Graduação & Graduação',
      },
      {
        name: 'ISEC - Instituto Superior de Educação de Cajazeiras',
      },
      {
        name: 'LUMEN FAC - Faculdade de Ciências Contábeis Luiz Mendes',
      },
      {
        name: 'UNIBRATEC - Faculdade de Tecnologia Ibratec',
      },
      {
        name: 'UNIFIP -  Centro Universitário de Patos',
      },
      {
        name: 'UNIPB -  Faculdade Unida da Paraíba',
      },
      {
        name: 'UNIUOL - Faculdade de Tecnologia do Uniuol',
      },
      {
        name: 'UNESPAR -  Universidade Estadual do Paraná',
      },
      {
        name: 'UEL -  Universidade Estadual de Londrina',
      },
      {
        name: 'UEM -  Universidade Estadual de Maringá',
      },
      {
        name: 'UENP -  Universidade Estadual do Norte do Paraná',
      },
      {
        name: 'UEPG -  Universidade Estadual de Ponta Grossa',
      },
      {
        name: 'UNICENTRO -  Universidade Estadual do Centro-Oeste',
      },
      {
        name: 'UNIOESTE -  Universidade Estadual do Oeste do Paraná',
      },
      {
        name: 'IFPR - Instituto Federal do Paraná',
      },
      {
        name: 'UTFPR -  Universidade Tecnológica Federal do Paraná',
      },
      {
        name: 'UFPR -  Universidade Federal do Paraná',
      },
      {
        name: 'UNILA -  Universidade Federal da Integração Latino-Americana',
      },
      {
        name: 'UFFS -  Universidade Federal da Fronteira do Sul',
      },
      {
        name: 'FAE -  FAE Centro Universitário',
      },
      {
        name: 'FAG -  Fundação Assis Gurgacz',
      },
      {
        name: 'FEPAR -  Faculdade Evangélica do Paraná',
      },
      {
        name: 'FPP - Faculdades Pequeno Príncipe',
      },
      {
        name: 'FTSA -  Faculdade Teológica Sul Americana',
      },
      {
        name: 'PUCPR -  Pontifícia Universidade Católica do Paraná',
      },
      {
        name: 'UNIFIL -  Centro Universitário Filadélfia',
      },
      {
        name: 'Univel -  União Educacional de Cascavel',
      },
      {
        name: 'UNINGÁ - Faculdade Ingá',
      },
      {
        name: 'CAMPO REAL -  Faculdade Campo Real',
      },
      {
        name: 'CESCAGE -  Centro de Ensino Superior dos Campos Gerais',
      },
      {
        name: 'CESUFOZ -  Centro de Ensino Superior de Foz do Iguaçu',
      },
      {
        name: 'FAAB -  Faculdade Alfa Brasil',
      },
      {
        name: 'FAC -  Faculdade Curitibana',
      },
      {
        name: 'FAFIG -  Faculdade de Foz do Iguaçu',
      },
      {
        name: 'FAG -  Faculdade Guairacá',
      },
      {
        name: 'FAJAR -  Faculdade Jaguariaíva',
      },
      {
        name: 'FATEB -  Faculdade de Telêmaco Borba',
      },
      {
        name: 'FANP -  Faculdade do Noroeste Paranaense',
      },
      {
        name: 'FAPAR -  Faculdade Paranaense',
      },
      {
        name: 'FAPI -  Faculdades de Pinhais',
      },
      {
        name: 'FASF - Faculdade Sagrada Família',
      },
      {
        name: 'FARESC -  Faculdades Integradas Santa Cruz de Curitiba',
      },
      {
        name:
          'FEITEP -  Faculdade de Engenharia e Inovação Técnico Profissional',
      },
      {
        name: 'FESC -  Fundação de Ensino Superior de Clevelândia',
      },
      {
        name: 'FG -  Faculdade Guarapuava',
      },
      {
        name: 'FIES -  Faculdades Integradas Espírita',
      },
      {
        name: 'FML -  Faculdade Metropolitana Londrinense',
      },
      {
        name: 'OPET -  Organização Paranaense de Ensino Técnico',
      },
      {
        name: 'SECAL - Faculdade Santa Amélia',
      },
      {
        name: 'UDC - Centro Universitário União Dinâmica das Cataratas',
      },
      {
        name: 'UEB -  Universidade Eletrônica do Brasil',
      },
      {
        name: 'UNIANDRADE -  Centro Universitário Campos de Andrade',
      },
      {
        name: 'UNICAMPO -  Faculdade União de Campo Mourão',
      },
      {
        name: 'UniCesumar -  Centro Universitário de Maringá',
      },
      {
        name: 'UNICURITIBA -  Centro Universitário Curitiba',
      },
      {
        name: 'UNINTER -  Grupo Educacional Uninter',
      },
      {
        name: 'UNIPAR -  Universidade Paranaense',
      },
      {
        name: 'UNOPAR -  Universidade do Norte do Paraná',
      },
      {
        name: 'UCP -  Faculdades do Centro do Paraná',
      },
      {
        name: 'UP -  Universidade Positivo',
      },
      {
        name: 'UTP -  Universidade Tuiuti do Paraná',
      },
      {
        name: 'UNISEP - União de Ensino do Sudoeste do Paraná  undefined',
      },
      {
        name: 'UFPI -  Universidade Federal do Piauí',
      },
      {
        name: 'IFPI -  Instituto Federal do Piauí',
      },
      {
        name: 'UNIVASF -  Universidade Federal do Vale do São Francisco',
      },
      {
        name: 'UFPDra -   Universidade Federal do Delta do Parnaíba',
      },
      {
        name: 'UESPI -  Universidade Estadual do Piauí',
      },
      {
        name: 'ISEAF -  Instituto Superior de Educação Antonino Freire',
      },
      {
        name: 'Associação de Ensino Superior do Piauí (página não existe)',
      },
      {
        name: 'ALIANÇA - Faculdade Aliança',
      },
      {
        name: 'CET - Centro de Educação Tecnológico',
      },
      {
        name: 'CEUT -  Centro de Ensino Unificado de Teresina',
      },
      {
        name: 'FACID - Faculdade Integral Diferencial',
      },
      {
        name: 'FAP - Faculdade Piauiense',
      },
      {
        name: 'Faculdade do Piauí (página não existe)',
      },
      {
        name: 'FSA -  Faculdade Santo Agostinho',
      },
      {
        name: 'ICF - Instituto Camillo Filho',
      },
      {
        name:
          'IERSA - Instituto Educacional Raimundo Sá (Faculdade Raimundo Sá)',
      },
      {
        name:
          ' - Faculdade de Saúde, Ciências Humanas e Tecnológicas do Piauí Novafapi',
      },
      {
        name: 'NovaUnesc - Faculdade Nova Unesc',
      },
      {
        name:
          'FeMASS -  Faculdade Professor Miguel Ângelo da Silva Santos - Macaé',
      },
      {
        name: 'ISERJ -  Instituto Superior de Educação do Rio de Janeiro',
      },
      {
        name:
          'FAETERJ -  Faculdade de Educação Tecnológica do Estado do Rio de Janeiro',
      },
      {
        name: 'UENF -  Universidade Estadual do Norte Fluminense',
      },
      {
        name: 'UERJ -  Universidade do Estado do Rio de Janeiro',
      },
      {
        name: 'UEZO -  Universidade Estadual da Zona Oeste',
      },
      {
        name: 'IFF -  Instituto Federal Fluminense',
      },
      {
        name: 'IFRJ -  Instituto Federal do Rio de Janeiro',
      },
      {
        name:
          'CEFET/RJ -  Centro Federal de Educação Tecnológica Celso Suckow da Fonseca',
      },
      {
        name: 'ENCE -  Escola Nacional de Ciências Estatísticas',
      },
      {
        name: 'UFF -  Universidade Federal Fluminense',
      },
      {
        name: 'UFRJ -  Universidade Federal do Rio de Janeiro',
      },
      {
        name: 'UFRRJ -  Universidade Federal Rural do Rio de Janeiro',
      },
      {
        name: 'UNIRIO -  Universidade Federal do Estado do Rio de Janeiro',
      },
      {
        name: 'ABMDP II -  Academia de Bombeiro Militar Dom Pedro II',
      },
      {
        name: 'AMAN -  Academia Militar de Agulhas Negras',
      },
      {
        name: 'APMDJVI -  Academia de Polícia Militar Dom João VI',
      },
      {
        name: 'CIAGA -  Centro de Instrução Almirante Graça Aranha',
      },
      {
        name: 'EN -  Escola Naval',
      },
      {
        name: 'IME -  Instituto Militar de Engenharia',
      },
      {
        name: 'MACKENZIE-RIO -  Faculdade Presbiteriana Mackenzie Rio',
      },
      {
        name: 'IBMEC -  Instituto Brasileiro de Mercado e Capitais',
      },
      {
        name: 'FGV -  Fundação Getulio Vargas',
      },
      {
        name: 'ESPM-RIO -  Escola Superior de Propaganda e Marketing',
      },
      {
        name: 'PUC-RIO -  Pontifícia Universidade Católica do Rio de Janeiro',
      },
      {
        name: 'UNIGRANRIO -  Universidade do Grande Rio',
      },
      {
        name: 'CELSO LISBOA -  Centro Universitário Celso Lisboa',
      },
      {
        name: 'FUNENSEG -  Escola Nacional de Seguros',
      },
      {
        name: 'FIJ -  Faculdades Integradas de Jacarepaguá',
      },
      {
        name: 'FACHA -  Faculdades Integradas Hélio Alonso',
      },
      {
        name: 'FFSD -  Faculdade de Filosofia Santa Doroteia',
      },
      {
        name: 'FMC -  Faculdade de Medicina de Campos',
      },
      {
        name: 'FSMA -  Faculdade Salesiana de Macaé',
      },
      {
        name: 'FTESM -  Fundação Técnico Educacional Souza Marques',
      },
      {
        name: 'FSB/RJ -  Faculdade de São Bento do Rio de Janeiro',
      },
      {
        name: 'UCAM -  Universidade Cândido Mendes',
      },
      {
        name: 'IBMR -  Centro Universitário IBMR',
      },
      {
        name: 'UCB -  Universidade Castelo Branco',
      },
      {
        name: 'UCP -  Universidade Católica de Petrópolis',
      },
      {
        name: 'UGB -  Centro Universitário Geraldo Di Biase',
      },
      {
        name: 'UGS -  Universidade Gama e Souza',
      },
      {
        name: 'UNISUAM -  Centro Universitário Augusto Motta',
      },
      {
        name: 'UNIABEU -  UNIABEU Centro Universitário',
      },
      {
        name: 'UNICARIOCA -  Centro Universitário Carioca',
      },
      {
        name: 'UNIFESO -  Centro Universitário Serra dos Órgãos',
      },
      {
        name: 'UNIVERSO -  Universidade Salgado de Oliveira',
      },
      {
        name: 'USS -  Universidade Severino Sombra',
      },
      {
        name: 'USU -  Universidade Santa Úrsula',
      },
      {
        name: 'UVA -  Universidade Veiga de Almeida',
      },
      {
        name:
          'REDENTOR - Sociedade Universitária Redentor ( Faculdade Redentor',
      },
      {
        name: 'UNIVERITAS - Centro Universitário Universus Veritas',
      },
      {
        name: 'INFNET -  Instituto Infnet',
      },
      {
        name: 'SENAC - Faculdade  Senac',
      },
      {
        name: 'UBM -  Centro Universitário de Barra Mansa',
      },
      {
        name: 'UNESA -  Universidade Estácio de Sá',
      },
      {
        name: 'UNIFOA -  Centro Universitário de Volta Redonda',
      },
      {
        name: 'UERN -  Universidade do Estado do Rio Grande do Norte',
      },
      {
        name: 'IFRN -  Instituto Federal do Rio Grande do Norte',
      },
      {
        name: 'UFERSA -  Universidade Federal Rural do Semi-Árido',
      },
      {
        name: 'UFRN -  Universidade Federal do Rio Grande do Norte',
      },
      {
        name: 'ULBRA -  Universidade Luterana do Brasil',
      },
      {
        name: 'UNP -  Universidade Potiguar',
      },
      {
        name:
          'FARN -  Faculdade Natalense para o Desenvolvimento do Rio Grande do Norte',
      },
      {
        name:
          'Fatern Gama Filho -  Faculdade de Excelência do Rio Grande do Norte',
      },
      {
        name: 'FAL - Faculdade de Natal',
      },
      {
        name: 'Facex - Faculdade de Ciências, Cultura e Extensão do RN',
      },
      {
        name: 'FCC - Faculdade Câmara Cascudo',
      },
      {
        name: 'Fanec - Faculdade Natalense de Ensino e Cultura',
      },
      {
        name: 'FCNSN - Faculdade Católica Nossa Senhora Das Neves',
      },
      {
        name: 'UNOPAR -  Universidade Norte do Paraná',
      },
      {
        name: 'UNINASSAU -  Faculdade Maurício de Nassau',
      },
      {
        name: 'IPOG - Instituto de Pós-Graduação (Pólo  Natal',
      },
      {
        name: 'FCRN - Faculdade Católica do Rio Grande do Norte',
      },
      {
        name:
          'Facene/RN - Faculdade de Enfermagem e Medicina Nova Esperança de Mossoró',
      },
      {
        name: 'Mater Christi - Faculdade Mater Christi',
      },
      {
        name: 'UERGS -  Universidade Estadual do Rio Grande do Sul',
      },
      {
        name: 'FURG -  Universidade Federal do Rio Grande',
      },
      {
        name: 'IFFarroupilha -  Instituto Federal Farroupilha',
      },
      {
        name: 'IFRS -  Instituto Federal do Rio Grande do Sul',
      },
      {
        name: 'IFSul -  Instituto Federal Sul-rio-grandense',
      },
      {
        name:
          'UFCSPA -  Universidade Federal de Ciências da Saúde de Porto Alegre',
      },
      {
        name: 'UFPEL -  Universidade Federal de Pelotas',
      },
      {
        name: 'UFRGS -  Universidade Federal do Rio Grande do Sul',
      },
      {
        name: 'UFSM -  Universidade Federal de Santa Maria',
      },
      {
        name: 'UNIPAMPA -  Universidade Federal do Pampa',
      },
      {
        name: 'UFFS -  Universidade Federal da Fronteira do Sul',
      },
      {
        name: 'CNECSAN -  Faculdade CNEC Santo Ângelo',
      },
      {
        name: 'FACCAT -  Faculdades de Taquara',
      },
      {
        name: 'FACOS -  Faculdade Cenecista de Osório',
      },
      {
        name: 'FISMA -  Faculdade Integrada de Santa Maria',
      },
      {
        name: 'FAPA -  Faculdade Porto-Alegrense',
      },
      {
        name: 'FEEVALE -  Universidade Feevale',
      },
      {
        name: 'FACENSA -  Faculdade Cenecista Nossa Senhora dos Anjos',
      },
      {
        name: 'IACS -  Instituto Adventista Cruzeiro do Sul',
      },
      {
        name: 'MARQUÊS -  Instituto de Educação Cenecista Marquês de Herval',
      },
      {
        name: 'IPA -  Centro Universitário Metodista do Instituto Porto Alegre',
      },
      {
        name: 'PUCRS -  Pontifícia Universidade Católica do Rio Grande do Sul',
      },
      {
        name: 'UCPEL -  Universidade Católica de Pelotas',
      },
      {
        name: 'UCS -  Universidade de Caxias do Sul',
      },
      {
        name: 'ULBRA -  Universidade Luterana do Brasil',
      },
      {
        name: 'UNICRUZ -  Universidade de Cruz Alta',
      },
      {
        name: 'UFN -  Universidade Franciscana',
      },
      {
        name:
          'UNIJUÍ -  Universidade Regional do Noroeste do Estado do Rio Grande do Sul',
      },
      {
        name: 'UNIRITTER -  Centro Universitário Ritter dos Reis',
      },
      {
        name: 'UNILASALLE-RJ -  Universidade La Salle - RJ',
      },
      {
        name: 'UNISC -  Universidade de Santa Cruz do Sul',
      },
      {
        name: 'UNISINOS -  Universidade do Vale do Rio dos Sinos',
      },
      {
        name: 'UNIVATES -  Centro Universitário UNIVATES',
      },
      {
        name: 'UPF -  Universidade de Passo Fundo',
      },
      {
        name: 'URCAMP -  Universidade da Região da Campanha',
      },
      {
        name:
          'URI -  Universidade Regional Integrada do Alto Uruguai e das Missões',
      },
      {
        name: 'EST -  Faculdades EST',
      },
      {
        name: 'CESF -  Centro de Ensino Superior Cenecista de Farroupilha',
      },
      {
        name: 'CASTELLI -  Escola Superior de Hotelaria Castelli',
      },
      {
        name:
          'ESMARGS -  Escola Superior de Música e Artes do Rio Grande do Sul',
      },
      {
        name: 'FADERGS -  Faculdade de Desenvolvimento do Rio Grande do Sul',
      },
      {
        name: 'FAE - Faculdade Anglicana de Erechim',
      },
      {
        name: 'FAE -  Faculdades Equipe',
      },
      {
        name: 'FAM -  Faculdade Antonio Meneghetti',
      },
      {
        name: 'FSG -  Faculdade da Serra Gaúcha',
      },
      {
        name: 'FTEC -  Faculdade de Tecnologia TecBrasil',
      },
      {
        name:
          'IDEAU - Instituto de Desenvolvimento Educacional do Alto Uruguai -  Getúlio Vargas',
      },
      {
        name: 'SENAC - Faculdade  Senac',
      },
      {
        name: 'SJT -  Instituição Educacional São Judas Tadeu',
      },
      {
        name: 'UNIANHANGUERA -  Anhanguera Educacional S.A.',
      },
      {
        name: 'UNIRITTER -  Centro Universitário Ritter dos Reis',
      },
      {
        name: 'FEMA -  Escola Técnica e Superior Machado de Assis',
      },
      {
        name: 'FADISMA -  Faculdade de Direito de Santa Maria',
      },
      {
        name: 'FAACS - Faculdade Anglo-Americano de Caxias do Sul  undefined',
      },
      {
        name: 'UNIR -  Universidade Federal de Rondônia',
      },
      {
        name: 'IFRO -  Instituto Federal de Rondônia',
      },
      {
        name: 'AVEC -  Associação Vilhenense de Educação e Cultura',
      },
      {
        name: 'CEULJI/ULBRA -  Centro Universitário Luterano de Ji-Paraná',
      },
      {
        name:
          'ILES/ULBRA -  Instituto Luterano de Ensino Superior de Porto Velho',
      },
      {
        name: 'FAMA -  Faculdade da Amazônia',
      },
      {
        name: 'FAEV/UNESC -  Faculdade de Educação e Cultura de Vilhena',
      },
      {
        name:
          'FARO -  Faculdade de Ciências Humanas, Exatas e Letras de Rondônia',
      },
      {
        name: 'UNIRON -  Faculdade Interamericana de Porto Velho',
      },
      {
        name: 'FIMCA - Faculdades Integradas Aparício Carvalho',
      },
      {
        name: 'FSL -  Faculdade São Lucas',
      },
      {
        name: 'FIAR -  Faculdades Integradas de Ariquemes',
      },
      {
        name: 'FAAR -  Faculdades Associadas de Ariquemes',
      },
      {
        name: 'FAEMA -  Faculdade de Educação e Meio Ambiente',
      },
      {
        name: 'FACIMED -  Faculdade de Ciências Biomédicas de Cacoal',
      },
      {
        name: 'UNESC - Faculdades Integradas de Cacoal',
      },
      {
        name: 'UNIJIPA -  Faculdade Panamericana de Ji-Paraná',
      },
      {
        name: 'CLARETIANO -  centro universitário',
      },
      {
        name: 'Funorte -  Faculdades Unidas do Norte de Minas',
      },
      {
        name: 'UNOPAR -  universidade á distancia do norte do Paraná',
      },
      {
        name: 'UNIP - Universidade Paulista undefined',
      },
      {
        name: 'UERR -  Universidade Estadual de Roraima',
      },
      {
        name: 'UFRR -  Universidade Federal de Roraima',
      },
      {
        name: 'IFRR -  Instituto Federal de Roraima',
      },
      {
        name: 'Estácio  - Estácio Atual',
      },
      {
        name:
          'FACETEN - Faculdade de Ciências, Educação e Teologia do Norte do Brasil',
      },
      {
        name: 'Cathedral - Faculdades Cathedral',
      },
      {
        name: 'FARES -  Faculdade Roraimense de Ensino Superior',
      },
      {
        name: 'FURB -  Fundação Universidade Regional de Blumenau',
      },
      {
        name: 'SOCIESC -  Sociedade Educacional de Santa Catarina',
      },
      {
        name: 'UNESC -  Universidade do Extremo Sul Catarinense',
      },
      {
        name: 'USJ -  Universidade Municipal de São José',
      },
      {
        name: 'FMP -  Faculdade Municipal de Palhoça',
      },
      {
        name: 'UDESC -  Universidade do Estado de Santa Catarina',
      },
      {
        name: 'UFFS -  Universidade Federal da Fronteira Sul',
      },
      {
        name: 'IFSC -  Instituto Federal de Santa Catarina',
      },
      {
        name: 'IFC -  Instituto Federal Catarinense',
      },
      {
        name: 'UFSC -  Universidade Federal de Santa Catarina',
      },
      {
        name: 'ACE -  Associação Catarinense de Ensino',
      },
      {
        name: 'FACC -  Faculdade Concórdia',
      },
      {
        name: 'FAACH - Faculdade Santa Rita de Chapecó',
      },
      {
        name: 'FAP - Faculdade Santa Rita Palmitos',
      },
      {
        name: 'SENAC - Faculdade  Senac',
      },
      {
        name: 'UNOESC -  Universidade do Oeste de Santa Catarina',
      },
      {
        name: 'UNIASSELVI -  Centro Universitário Leonardo da Vinci',
      },
      {
        name: 'UNIBAVE -  Universidade Barriga Verde',
      },
      {
        name: 'UNIFEBE -  Centro Universitário de Brusque',
      },
      {
        name: 'UNISUL -  Universidade do Sul de Santa Catarina',
      },
      {
        name: 'UNC -  Universidade do Contestado',
      },
      {
        name: 'UNIARP -  Universidade Alto Vale do Rio do Peixe',
      },
      {
        name: 'UNERJ -  Centro Universitário de Jaraguá do Sul',
      },
      {
        name: 'UNIVALI -  Universidade do Vale do Itajaí',
      },
      {
        name: 'UNIVILLE -  Universidade da Região de Joinville',
      },
      {
        name: 'UNOCHAPECÓ -  Universidade Comunitária Regional de Chapecó',
      },
      {
        name: 'UNIPLAC -  Universidade do Planalto Catarinense',
      },
      {
        name: 'UNISUL  -  Universidade do Sul de Santa Catarina',
      },
      {
        name: 'UNITAU -  Universidade de Taubaté',
      },
      {
        name: 'USCS -  Universidade Municipal de São Caetano do Sul',
      },
      {
        name:
          'UNIFAE -  Centro Universitário das Faculdades Associadas de Ensino',
      },
      {
        name: 'Uni-FACEF -  Centro Universitário de Franca',
      },
      {
        name: 'CUFSA -  Centro Universitário Fundação Santo André',
      },
      {
        name: 'FACCAMP -  Faculdade de Campo Limpo Paulista',
      },
      {
        name: 'EEP/FUMEP -  Escola de Engenharia de Piracicaba',
      },
      {
        name:
          'ESEFIC -  Escola Superior de Cruzeiro "Prefeito Hamilton Vieira Mendes"',
      },
      {
        name: 'ESEFJ -  Escola Superior de Educação Física de Jundiaí',
      },
      {
        name: 'FITO -  Fundação Instituto Tecnológico de Osasco',
      },
      {
        name: 'FATEB -  Faculdade de Ciências e Tecnologia de Birigui',
      },
      {
        name: 'FDF -  Faculdade de Direito de Franca',
      },
      {
        name: 'FDSBC -  Faculdade de Direito de São Bernardo do Campo',
      },
      {
        name: 'FAIBI -  Faculdade de Filosofia, Ciências e Letras de Ibitinga',
      },
      {
        name:
          'FFCL -  Faculdade de Filosofia Ciências e Letras de São José do Rio Pardo',
      },
      {
        name: 'FMABC -  Faculdade de Medicina do ABC',
      },
      {
        name: 'FMJ -  Faculdade de Medicina de Jundiaí',
      },
      {
        name:
          'FMPFM -  Faculdade Municipal Professor Franco Montoro de Mogi Guaçu',
      },
      {
        name: 'FAI -  Faculdades Adamantinenses Integradas',
      },
      {
        name: 'FAFEM -  Faculdades da Fundação de Ensino de Mococa',
      },
      {
        name: 'FUNEC -  Faculdades Integradas de Santa Fé do Sul',
      },
      {
        name: 'IESF -  Instituto de Ensino Superior da Fupesp',
      },
      {
        name: 'IMMES -  Instituto Matonense Municipal de Ensino Superior',
      },
      {
        name:
          'IMESB -  Instituto Municipal de Ensino Superior de Bebedouro Victório Cardassi',
      },
      {
        name:
          'IMES Catanduva -  Instituto Municipal de Ensino Superior de Catanduva',
      },
      {
        name: 'IMESSM -  Instituto Municipal de Ensino Superior de São Manuel',
      },
      {
        name: 'IMESA -  Instituto Municipal de Ensino Superior de Assis',
      },
      {
        name: 'FEA -  Fundação Educacional  Araçatuba',
      },
      {
        name: 'USP -  Universidade de São Paulo',
      },
      {
        name: 'UNICAMP -  Universidade Estadual de Campinas',
      },
      {
        name: 'UNESP -  Universidade Estadual Paulista',
      },
      {
        name: 'UNIVESP -  Universidade Virtual do Estado de São Paulo',
      },
      {
        name: 'FAMEMA -  Faculdade de Medicina de Marília',
      },
      {
        name: 'FAMERP -  Faculdade de Medicina de São José do Rio Preto',
      },
      {
        name: 'FATEC -  Faculdade de Tecnologia do Estado de São Paulo',
      },
      {
        name: 'APMBB -  Academia de Polícia Militar do Barro Branco',
      },
      {
        name: 'UFSCar -  Universidade Federal de São Carlos',
      },
      {
        name: 'UNIFESP -  Universidade Federal de São Paulo',
      },
      {
        name: 'UFABC -  Universidade Federal do ABC',
      },
      {
        name:
          'IFSP -  Instituto Federal de Educação, Ciência e Tecnologia de São Paulo',
      },
      {
        name: 'ITA -  Instituto Tecnológico de Aeronáutica',
      },
      {
        name: 'AFA -  Academia da Força Aérea',
      },
      {
        name: 'MACK -  Universidade Presbiteriana Mackenzie',
      },
      {
        name: 'PUCSP -  Pontifícia Universidade Católica de São Paulo',
      },
      {
        name: 'PUC-Campinas -  Pontifícia Universidade Católica de Campinas',
      },
      {
        name: 'UMESP -  Universidade Metodista de São Paulo',
      },
      {
        name: 'UNAERP -  Universidade de Ribeirão Preto',
      },
      {
        name: 'UNIMEP -  Universidade Metodista de Piracicaba',
      },
      {
        name: 'UNISANTOS -  Universidade Católica de Santos',
      },
      {
        name: 'UNICASTELO -  Universidade Camilo Castelo Branco',
      },
      {
        name: 'UNISA -  Universidade de Santo Amaro',
      },
      {
        name: 'UNIVAP -  Universidade do Vale do Paraíba',
      },
      {
        name: 'UNOESTE -  Universidade do Oeste Paulista',
      },
      {
        name: 'USF -  Universidade São Francisco',
      },
      {
        name: "UNISANT'ANNA -  Universidade Sant'Anna",
      },
      {
        name: 'CBM -  Centro Universitário Barão de Mauá',
      },
      {
        name: 'UNISALESIANO - Centro Universitário Católico Salesiano Auxilium',
      },
      {
        name: 'CUSC -  Centro Universitário São Camilo',
      },
      {
        name: 'FEBASP -  Centro Universitário Belas Artes de São Paulo',
      },
      {
        name: 'FEI -  Centro Universitário FEI',
      },
      {
        name:
          'FMU -  Centro Universitário das Faculdades Metropolitanas Unidas',
      },
      {
        name: 'SENAC -   Centro Universitário Senac -',
      },
      {
        name: 'UNASP -  Centro Universitário Adventista de São Paulo',
      },
      {
        name: 'UNIARA -  Universidade de Araraquara',
      },
      {
        name: 'UNICEP -  Centro Universitário Central Paulista',
      },
      {
        name: 'UNIFAI -  Centro Universitário Assunção',
      },
      {
        name:
          'UNIFEB - Centro Universitário da Fundação Educacional de Barretos undefined',
      },
      {
        name: 'UNIFEOB -  Centro Universitário Octávio Bastos',
      },
      {
        name: 'UNIFIEO -  Centro Universitário FIEO',
      },
      {
        name: 'UNILAGO -  União das Faculdades dos Grandes Lagos',
      },
      {
        name: 'UNIMONTE -  Centro Universitário Monte Serrat',
      },
      {
        name: 'UNISAL -  Centro Universitário Salesiano de São Paulo',
      },
      {
        name: 'UNORP -  Centro Universitário do Norte Paulista',
      },
      {
        name: 'UNIRP - Centro Universitário de Rio Preto',
      },
      {
        name: 'UNIVEM -  Centro Universitário Eurípedes de Marília',
      },
      {
        name: 'BSP -  Business School São Paulo',
      },
      {
        name: 'FGV -  Fundação Getúlio Vargas',
      },
      {
        name: 'FATEC - Faculdade de Teologia e Ciências  [6]',
      },
      {
        name: 'FECAP -  Fundação Escola de Comércio Álvares Penteado',
      },
      {
        name: 'ESPM -  Escola Superior de Propaganda e Marketing',
      },
      {
        name: 'ESAGS -  Escola Superior de Administração e Gestão',
      },
      {
        name: 'IMT -  Instituto Mauá de Tecnologia',
      },
      {
        name: 'FCL -  Faculdade Cásper Líbero',
      },
      {
        name: 'FAAP -  Fundação Armando Álvares Penteado',
      },
      {
        name: 'Insper -  Instituto de Ensino e Pesquisa',
      },
      {
        name: 'IMT -  Instituto Mauá de Tecnologia',
      },
      {
        name: 'FESPSP -  Fundação Escola de Sociologia e Política de São Paulo',
      },
      {
        name: 'FRB -  Faculdades Integradas Rio Branco',
      },
      {
        name: 'DOMPEDRO - Faculdades Integradas Dom Pedro II',
      },
      {
        name: 'FIO -  Faculdades Integradas de Ourinhos',
      },
      {
        name: 'FIRB -  Faculdades Integradas Rio Branco',
      },
      {
        name: 'FTML -  Faculdade de Teologia Metodista Livre',
      },
      {
        name: 'FTT -  Faculdade de Tecnologia Termomecânica',
      },
      {
        name: 'FAPCOM - Faculdade Paulus de Comunicação e Tecnologia',
      },
      {
        name: 'UCESP -  Faculdade União Cultural do Estado de São Paulo',
      },
      {
        name:
          'UniSãopaulo - Instituto São Paulo de Formação e Especialização Profissional',
      },
      {
        name: 'FAZP -  Faculdade Zumbi dos Palmares',
      },
      {
        name: 'FEF - Fundação Educacional de Fernandópolis',
      },
      {
        name:
          'FCMSCSP -  Faculdade de Ciências Médicas da Santa Casa de São Paulo',
      },
      {
        name: 'CEUNSP -  Centro Universitário Nossa Senhora do Patrocínio',
      },
      {
        name: 'FCDA -  Faculdade Drummond',
      },
      {
        name: 'ITE -  Centro Universitário de Bauru',
      },
      {
        name: 'UAM -  Universidade Anhembi Morumbi',
      },
      {
        name: 'UBC -  Universidade Braz Cubas',
      },
      {
        name: 'UMC -  Universidade de Mogi das Cruzes',
      },
      {
        name: 'UNG -  Universidade Guarulhos',
      },
      {
        name: 'UniABC -  Universidade do Grande ABC',
      },
      {
        name: 'UNIBAN -  Universidade Bandeirante de São Paulo',
      },
      {
        name: 'UNIBERO -  Centro Universitário Anhanguera de São Paulo',
      },
      {
        name: 'UNICSUL -  Universidade Cruzeiro do Sul',
      },
      {
        name: 'UNISEB - Centro Universitário Estácio UniSEB - São Paulo',
      },
      {
        name: 'UNIFRAN -  Universidade de Franca',
      },
      {
        name: 'UNIMAR -  Universidade de Marília',
      },
      {
        name: 'UNINOVE -  Universidade Nove de Julho',
      },
      {
        name: 'UNIP -  Universidade Paulista',
      },
      {
        name: 'UNIMES -  Universidade Metropolitana de Santos',
      },
      {
        name: 'UNISANTA -  Universidade Santa Cecília',
      },
      {
        name: 'UNISO -  Universidade de Sorocaba',
      },
      {
        name: 'USJT -  Universidade São Judas Tadeu',
      },
      {
        name: 'AESA -  Anhanguera Educacional',
      },
      {
        name: 'FACAMP -  Faculdades de Campinas',
      },
      {
        name: 'FACIC - Faculdade de Ciências Humanas de Cruzeiro',
      },
      {
        name: 'FACMIL - Faculdade de Administração de São José do Rio Preto',
      },
      {
        name: 'FADI -  Faculdade de Direito de Sorocaba',
      },
      {
        name: 'FADISC -  Faculdades Integradas de São Carlos',
      },
      {
        name: 'FALS -  Faculdade do Litoral Sul Paulista',
      },
      {
        name: 'FAM -  Faculdade de Americana',
      },
      {
        name: 'FIAP -  Faculdade de Informática e Administração Paulista',
      },
      {
        name: 'FIRB -  Faculdades Integradas Rio Branco',
      },
      {
        name: 'FIT -  Faculdade Impacta Tecnologia',
      },
      {
        name: 'FMS -  Faculdade Mario Schenberg',
      },
      {
        name: 'FNC -  Faculdade Nossa Cidade',
      },
      {
        name: 'FOC -  Faculdades Oswaldo Cruz',
      },
      {
        name: 'ISES -  Faculdade Sumaré',
      },
      {
        name: 'JAPI - Faculdade Japi',
      },
      {
        name:
          'SLMANDIC -  Faculdade de Odontologia e Centro de Pesquisas Odontológicas São Leopoldo Mandic',
      },
      {
        name: 'TECMED - Faculdade de Tecnologia Tecmed',
      },
      {
        name: 'BANDTEC -  Faculdade de Tecnologia Bandeirantes',
      },
      {
        name: 'FLAMINGO - Faculdade Flamingo',
      },
      {
        name: 'UFS -  Universidade Federal de Sergipe',
      },
      {
        name: 'IFS -  Instituto Federal de Sergipe',
      },
      {
        name: 'Unit -  Universidade Tiradentes',
      },
      {
        name: 'FPD -  Faculdade Pio Décimo',
      },
      {
        name: 'ESTÁCIO -  Faculdade Estácio de Sergipe',
      },
      {
        name: 'FANESE -  Faculdade de Administração e Negócios de Sergipe',
      },
      {
        name: 'FAMA -  Faculdade Amadeus',
      },
      {
        name: 'FSLF -  Faculdade São Luis de França',
      },
      {
        name: 'UNOPAR -  Universidade Norte do Paraná',
      },
      {
        name: 'FASER -  Faculdade Sergipana',
      },
      {
        name: 'FACAR -  Faculdade de Aracaju',
      },
      {
        name: 'UNIRB -  Faculdade Serigy',
      },
      {
        name: 'FAJAR -  Faculdade Jardins',
      },
      {
        name: 'FA -  Faculdade Atlântico',
      },
      {
        name: 'UNIDOM - Universidade Dom Pedro II',
      },
      {
        name: 'UniCOC -  Sistema COC de Educação',
      },
      {
        name: 'UNINASSAU -  Faculdade Maurício de Nassau',
      },
      {
        name: 'UnirG -  Centro Universitário UnirG',
      },
      {
        name: 'UNITINS -  Fundação Universidade do Tocantins',
      },
      {
        name: 'IFTO -  Instituto Federal do Tocantins',
      },
      {
        name: 'UFT -  Universidade Federal do Tocantins',
      },
      {
        name: 'CEULP/ULBRA -  Centro Universitário Luterano de Palmas',
      },
      {
        name: 'FACTO -  Faculdade Católica do Tocantins',
      },
      {
        name: 'FACDO -  Faculdade Católica Dom Orione',
      },
      {
        name: 'FACIT - Faculdade de Ciências do Tocantins',
      },
      {
        name: 'FECIPAR - Faculdade de Educação Ciências e Letras de Paraíso',
      },
      {
        name: 'FAPAL - Faculdade de Palmas',
      },
      {
        name: 'FAG - Faculdade Guaraí',
      },
      {
        name: 'FIESC - Faculdade Integrada de Ensino Superior de Colinas',
      },
      {
        name: 'FASEC - Faculdade Serra do Carmo',
      },
      {
        name: 'IEPO - Instituto de Ensino e Pesquisa Objetivo',
      },
      {
        name: 'ITPAC - Instituto Tocantinense Presidente Antônio Carlos',
      },
      {
        name:
          'ITPAC Porto - Instituto Tocantinense Presidente Antônio Carlos de Porto Nacional',
      },
    ])
  }
}

module.exports = UniversitySeeder
