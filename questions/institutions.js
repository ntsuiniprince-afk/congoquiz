const questionsInstitutions = [

    {
        question: "Quelle est la capitale de la République du Congo ?",
        reponses: ["Pointe-Noire", "Brazzaville", "Dolisie", "Owando"],
        bonne: 1,
        explication: "Brazzaville est la capitale du Congo."
    },
    
    {
        question: "Quel est le siège du Parlement congolais ?",
        reponses: ["Brazzaville", "Pointe-Noire", "Oyo", "Nkayi"],
        bonne: 0,
        explication: "Le Parlement siège à Brazzaville."
    },
    {
        question: "Quelle est la nature de l'État congolais selon la Constitution de la République du Congo ?",
    
        reponses: [
            "Un État fédéral, laïc et décentralisé",
            "Un État unitaire, souverain, indivisible, décentralisé, laïc et démocratique",
            "Un État confédéral, souverain et démocratique",
            "Un État unitaire, monarchique et décentralisé"
        ],
    
        bonne: 1,
    
        explication: "L'article 1er de la Constitution dispose que la République du Congo est un État de droit, souverain, unitaire et indivisible, décentralisé, laïc et démocratique."
    },
    
    {
        question: "Quelle fonction le Président de la République exerce-t-il selon la Constitution congolaise ?",
    
        reponses: [
            "Il est le Chef de l'État",
            "Il est le président du Parlement",
            "Il est le président de la Cour constitutionnelle",
            "Il est le Chef de la majorité parlementaire"
        ],
    
        bonne: 0,
    
        explication: "L'article 64 de la Constitution dispose que le Président de la République est le Chef de l'État."
    },
    
    {
        question: "Quelle est la durée du mandat du Président de la République du Congo ?",
    
        reponses: [
            "Quatre ans",
            "Six ans",
            "Cinq ans",
            "Sept ans"
        ],
    
        bonne: 2,
    
        explication: "Selon l'article 65 de la Constitution, le Président de la République est élu pour un mandat de cinq ans, renouvelable deux fois."
    },
    
    {
        question: "Combien de fois le mandat présidentiel peut-il être renouvelé selon la Constitution congolaise ?",
    
        reponses: [
            "Une seule fois",
            "Deux fois",
            "Trois fois",
            "Il est renouvelable sans limitation"
        ],
    
        bonne: 1,
    
        explication: "L'article 65 prévoit que le Président de la République est élu pour cinq ans et que son mandat est renouvelable deux fois."
    },
    
    {
        question: "À quel âge minimum peut-on être candidat à l'élection présidentielle au Congo ?",
    
        reponses: [
            "25 ans révolus",
            "30 ans révolus",
            "35 ans révolus",
            "40 ans révolus"
        ],
    
        bonne: 1,
    
        explication: "L'article 66 de la Constitution fixe à trente ans révolus l'âge minimum pour être candidat aux fonctions de Président de la République."
    },
    
    {
        question: "Comment le Président de la République du Congo est-il élu ?",
    
        reponses: [
            "Au suffrage universel direct, au scrutin uninominal, à la majorité absolue des suffrages exprimés",
            "Au suffrage universel indirect par le Parlement",
            "Au suffrage universel direct à la majorité relative dès le premier tour",
            "Par un collège électoral composé uniquement des députés et sénateurs"
        ],
    
        bonne: 0,
    
        explication: "L'article 67 prévoit l'élection du Président au suffrage universel direct, au scrutin uninominal, à la majorité absolue des suffrages exprimés."
    },
    
    {
        question: "Quelle institution proclame les résultats définitifs de l'élection présidentielle au Congo ?",
    
        reponses: [
            "Le ministère de l'Intérieur",
            "L'Assemblée nationale",
            "La Cour constitutionnelle",
            "La Commission nationale électorale indépendante"
        ],
    
        bonne: 2,
    
        explication: "Selon l'article 176 de la Constitution, la Cour constitutionnelle veille à la régularité de l'élection présidentielle, examine les réclamations et proclame les résultats définitifs."
    },
    
    {
        question: "Qui nomme le Premier ministre au Congo ?",
    
        reponses: [
            "Le Président du Sénat",
            "Le Président de l'Assemblée nationale",
            "La Cour constitutionnelle",
            "Le Président de la République"
        ],
    
        bonne: 3,
    
        explication: "L'article 83 de la Constitution dispose que le Président de la République nomme le Premier ministre et met fin à ses fonctions."
    },
    
    {
        question: "Qui préside le Conseil des ministres en République du Congo ?",
    
        reponses: [
            "Le Premier ministre",
            "Le Président de la République",
            "Le Président du Sénat",
            "Le ministre chargé de l'Intérieur"
        ],
    
        bonne: 1,
    
        explication: "L'article 84 de la Constitution prévoit que le Président de la République préside le Conseil des ministres."
    },
    
    {
        question: "De quelles institutions le Parlement congolais est-il composé ?",
    
        reponses: [
            "De l'Assemblée nationale et du Conseil économique, social et environnemental",
            "Du Sénat et de la Cour suprême",
            "De l'Assemblée nationale et du Sénat",
            "Du Sénat et de la Cour constitutionnelle"
        ],
    
        bonne: 2,
    
        explication: "L'article 107 de la Constitution précise que le Parlement est composé de deux chambres : l'Assemblée nationale et le Sénat."
    },
    
    {
        question: "Quel est le rôle général du Parlement selon la Constitution congolaise ?",
    
        reponses: [
            "Exercer le pouvoir législatif et contrôler l'action du Gouvernement",
            "Nommer directement tous les membres du Gouvernement",
            "Contrôler uniquement les juridictions nationales",
            "Organiser les élections présidentielles"
        ],
    
        bonne: 0,
    
        explication: "L'article 107 dispose que le Parlement exerce le pouvoir législatif et contrôle l'action du Gouvernement."
    },
    
    {
        question: "Comment sont élus les députés de l'Assemblée nationale congolaise ?",
    
        reponses: [
            "Au suffrage universel indirect",
            "Par les conseillers départementaux et municipaux",
            "Au suffrage universel direct",
            "Par le Président de la République"
        ],
    
        bonne: 2,
    
        explication: "L'article 128 de la Constitution précise que les membres de l'Assemblée nationale sont élus au suffrage universel direct."
    },
    
    {
        question: "Quelle est la durée du mandat des députés au Congo ?",
    
        reponses: [
            "Quatre ans renouvelable",
            "Cinq ans renouvelable",
            "Six ans renouvelable",
            "Sept ans non renouvelable"
        ],
    
        bonne: 1,
    
        explication: "L'article 129 de la Constitution fixe à cinq ans renouvelable la durée du mandat des députés."
    },
    
    {
        question: "Comment les sénateurs congolais sont-ils élus ?",
    
        reponses: [
            "Au suffrage universel direct",
            "Par le Président de la République",
            "Au suffrage universel indirect par les conseillers départementaux et municipaux",
            "Par les députés réunis en congrès"
        ],
    
        bonne: 2,
    
        explication: "L'article 133 dispose que les sénateurs sont élus au suffrage universel indirect par les conseillers départementaux et municipaux."
    },
    
    {
        question: "Quelle est la durée du mandat des sénateurs au Congo ?",
    
        reponses: [
            "Cinq ans renouvelable",
            "Six ans renouvelable",
            "Sept ans renouvelable",
            "Six ans non renouvelable"
        ],
    
        bonne: 1,
    
        explication: "Selon l'article 134 de la Constitution, la durée du mandat des sénateurs est de six ans renouvelable."
    },
    
    {
        question: "Quel rôle particulier le Sénat exerce-t-il en plus de sa fonction législative ?",
    
        reponses: [
            "Il est modérateur et conseil de la Nation",
            "Il dirige le Gouvernement",
            "Il contrôle directement les juridictions",
            "Il nomme le Président de la République"
        ],
    
        bonne: 0,
    
        explication: "L'article 133 précise que le Sénat exerce, outre sa fonction législative, celle de modérateur et de conseil de la Nation."
    },
    
    {
        question: "Quelle est la composition du bureau de chacune des deux chambres du Parlement congolais ?",
    
        reponses: [
            "Un président, un vice-président, deux secrétaires et deux questeurs",
            "Un président, deux vice-présidents, un secrétaire et trois questeurs",
            "Un président, deux vice-présidents, deux secrétaires et deux questeurs",
            "Un président, trois vice-présidents, deux secrétaires et deux questeurs"
        ],
    
        bonne: 2,
    
        explication: "L'article 120 de la Constitution prévoit que le bureau de chaque chambre comprend un président, deux vice-présidents, deux secrétaires et deux questeurs, soit sept membres."
    },
    
    {
        question: "Qui préside les débats lorsque le Parlement congolais se réunit en congrès ?",
    
        reponses: [
            "Le Président du Sénat",
            "Le Président de l'Assemblée nationale",
            "Le Premier ministre",
            "Le Président de la République"
        ],
    
        bonne: 1,
    
        explication: "L'article 127 de la Constitution prévoit que lorsque le Parlement se réunit en congrès, le bureau de l'Assemblée nationale préside les débats."
    },
    
    {
        question: "Quelle institution est chargée de veiller à la régularité de l'élection présidentielle et du référendum ?",
    
        reponses: [
            "La Cour constitutionnelle",
            "La Cour suprême",
            "Le Sénat",
            "Le Conseil économique, social et environnemental"
        ],
    
        bonne: 0,
    
        explication: "La Constitution attribue cette compétence à la Cour constitutionnelle. L'article 176 précise qu'elle veille à la régularité de l'élection du Président de la République et des opérations du référendum."
    },
    
    {
        question: "Combien de membres composent la Cour constitutionnelle de la République du Congo ?",
    
        reponses: [
            "Sept membres",
            "Huit membres",
            "Neuf membres",
            "Douze membres"
        ],
    
        bonne: 2,
    
        explication: "L'article 182 de la Constitution prévoit que la Cour constitutionnelle est composée de neuf membres."
    },
    {
        question: "De qui est composé le Gouvernement de la République du Congo ?",
    
        reponses: [
            "Du Président de la République, du Sénat et des ministres",
            "Du Premier ministre, Chef du Gouvernement, et des ministres",
            "Du Premier ministre, des députés et des sénateurs",
            "Du Président de la République et des présidents des deux chambres du Parlement"
        ],
    
        bonne: 1,
    
        explication: "Selon l'article 98 de la Constitution, le Gouvernement comprend le Premier ministre, Chef du Gouvernement, et les ministres."
    },
    
    {
        question: "Qui est le Chef du Gouvernement en République du Congo ?",
    
        reponses: [
            "Le Président de l'Assemblée nationale",
            "Le Président de la République",
            "Le Premier ministre",
            "Le Président du Sénat"
        ],
    
        bonne: 2,
    
        explication: "L'article 98 de la Constitution précise que le Premier ministre est le Chef du Gouvernement."
    },
    
    {
        question: "Devant quelle institution le Premier ministre est-il responsable de la conduite de la politique économique et sociale de la Nation ?",
    
        reponses: [
            "Le Sénat",
            "La Cour constitutionnelle",
            "L'Assemblée nationale",
            "La Cour suprême"
        ],
    
        bonne: 2,
    
        explication: "Selon l'article 100 de la Constitution, le Premier ministre est responsable de la conduite de la politique économique et sociale de la Nation devant l'Assemblée nationale."
    },
    
    {
        question: "Qui détermine la politique économique et sociale de la Nation en concertation avec le Président de la République ?",
    
        reponses: [
            "Le Premier ministre",
            "Le Président du Sénat",
            "Le Président de l'Assemblée nationale",
            "Le ministre chargé des Finances"
        ],
    
        bonne: 0,
    
        explication: "L'article 99 de la Constitution dispose que le Premier ministre, en concertation avec le Président de la République, détermine la politique économique et sociale de la Nation."
    },
    
    {
        question: "Qui assure l'exécution des lois et exerce le pouvoir réglementaire dans les matières ne relevant pas des décrets en Conseil des ministres ?",
    
        reponses: [
            "Le Président du Sénat",
            "Le Président de la République",
            "Le Premier ministre",
            "La Cour constitutionnelle"
        ],
    
        bonne: 2,
    
        explication: "L'article 101 de la Constitution attribue cette compétence au Premier ministre."
    },
    
    {
        question: "Quelle institution le Premier ministre convoque-t-il et tient-il ?",
    
        reponses: [
            "Le Conseil de cabinet",
            "Le Congrès parlementaire",
            "Le Conseil supérieur de la magistrature",
            "Le Conseil constitutionnel"
        ],
    
        bonne: 0,
    
        explication: "L'article 102 de la Constitution prévoit que le Premier ministre convoque et tient le Conseil de cabinet."
    },
    
    {
        question: "Quelle est la plus haute juridiction de l'État en matière constitutionnelle au Congo ?",
    
        reponses: [
            "La Cour suprême",
            "La Cour constitutionnelle",
            "La Haute Cour de justice",
            "Le Conseil supérieur de la magistrature"
        ],
    
        bonne: 1,
    
        explication: "L'article 175 de la Constitution qualifie la Cour constitutionnelle de haute juridiction de l'État en matière constitutionnelle."
    },
    
    {
        question: "Quel est le rôle de la Cour constitutionnelle dans le fonctionnement des institutions congolaises ?",
    
        reponses: [
            "Elle dirige les activités du Gouvernement",
            "Elle est l'organe régulateur du fonctionnement des institutions et des activités des pouvoirs publics",
            "Elle contrôle uniquement les finances publiques",
            "Elle assure la direction du Parlement"
        ],
    
        bonne: 1,
    
        explication: "L'article 175 de la Constitution dispose que la Cour constitutionnelle est l'organe régulateur du fonctionnement des institutions et des activités des pouvoirs publics."
    },
    
    {
        question: "Quels actes la Cour constitutionnelle peut-elle contrôler au regard de la Constitution ?",
    
        reponses: [
            "Uniquement les lois ordinaires",
            "Les lois, les traités et les accords internationaux",
            "Uniquement les décrets présidentiels",
            "Uniquement les décisions des tribunaux"
        ],
    
        bonne: 1,
    
        explication: "L'article 175 prévoit que la Cour constitutionnelle est juge de la constitutionnalité des lois, des traités et des accords internationaux."
    },
    
    {
        question: "Qui peut saisir la Cour constitutionnelle selon la Constitution congolaise ?",
    
        reponses: [
            "Uniquement le Président de la République",
            "Uniquement les membres du Gouvernement",
            "Le Président de la République, les présidents des deux chambres du Parlement, le Premier ministre ou un tiers des membres de chaque chambre du Parlement",
            "Uniquement les citoyens inscrits sur les listes électorales"
        ],
    
        bonne: 2,
    
        explication: "L'article 178 prévoit notamment la saisine par le Président de la République, le Président de l'Assemblée nationale, le Président du Sénat, le Premier ministre ou un tiers des membres de chaque chambre du Parlement."
    },
    
    {
        question: "Quel type de contentieux électoral relève de la Cour constitutionnelle ?",
    
        reponses: [
            "Le contentieux des élections législatives et sénatoriales",
            "Le contentieux de toutes les élections locales uniquement",
            "Uniquement le contentieux de l'élection présidentielle",
            "Uniquement le contentieux des élections municipales"
        ],
    
        bonne: 0,
    
        explication: "Selon l'article 177 de la Constitution, la Cour constitutionnelle est juge du contentieux des élections législatives et sénatoriales."
    },
    
    {
        question: "Combien de membres composent la Cour constitutionnelle de la République du Congo ?",
    
        reponses: [
            "Six membres",
            "Sept membres",
            "Neuf membres",
            "Douze membres"
        ],
    
        bonne: 2,
    
        explication: "L'article 182 de la Constitution prévoit que la Cour constitutionnelle est composée de neuf membres."
    },
    
    {
        question: "Combien de membres de la Cour constitutionnelle sont nommés par le Président de la République ?",
    
        reponses: [
            "Deux",
            "Trois",
            "Quatre",
            "Cinq"
        ],
    
        bonne: 1,
    
        explication: "Selon l'article 182 de la Constitution, trois membres de la Cour constitutionnelle sont nommés par le Président de la République."
    },
    
    {
        question: "Qui nomme le président de la Cour constitutionnelle ?",
    
        reponses: [
            "Le Président du Sénat",
            "Le Premier ministre",
            "Le Président de la République parmi les membres de la Cour",
            "Le Président de l'Assemblée nationale"
        ],
    
        bonne: 2,
    
        explication: "L'article 183 de la Constitution prévoit que le Président de la Cour constitutionnelle est nommé par le Président de la République parmi les membres de la Cour."
    },
    
    {
        question: "Quelle est la durée du mandat des membres de la Cour constitutionnelle ?",
    
        reponses: [
            "Trois ans renouvelable une fois",
            "Quatre ans renouvelable deux fois",
            "Cinq ans renouvelable une fois",
            "Six ans renouvelable deux fois"
        ],
    
        bonne: 1,
    
        explication: "L'article 186 de la Constitution fixe à quatre ans la durée du mandat des membres de la Cour constitutionnelle, renouvelable deux fois."
    },
    {
        question: "Quelle institution exerce le pouvoir judiciaire en République du Congo ?",
    
        reponses: [
            "Le Parlement",
            "Le Gouvernement",
            "La Cour constitutionnelle uniquement",
            "La Cour suprême, les Cours d'appel et les autres juridictions nationales"
        ],
    
        bonne: 3,
    
        explication: "L'article 166 de la Constitution dispose que le pouvoir judiciaire est exercé par la Cour suprême, les Cours d'appel et les autres juridictions nationales."
    },
    
    {
        question: "De qui le pouvoir judiciaire est-il indépendant en République du Congo ?",
    
        reponses: [
            "Du pouvoir exécutif et du pouvoir législatif",
            "Uniquement du pouvoir exécutif",
            "Uniquement du Parlement",
            "Du Président de la République uniquement"
        ],
    
        bonne: 0,
    
        explication: "L'article 168 de la Constitution dispose que le pouvoir judiciaire est indépendant du pouvoir exécutif et du pouvoir législatif."
    },
    
    {
        question: "À quelle autorité les juges sont-ils soumis dans l'exercice de leurs fonctions ?",
    
        reponses: [
            "À l'autorité du Gouvernement",
            "À l'autorité de la loi",
            "À l'autorité du Parlement",
            "À l'autorité du Président du Sénat"
        ],
    
        bonne: 1,
    
        explication: "L'article 168 de la Constitution précise que les juges ne sont soumis, dans l'exercice de leurs fonctions, qu'à l'autorité de la loi."
    },
    
    {
        question: "Quelle institution est chargée de garantir l'indépendance du pouvoir judiciaire à travers elle ?",
    
        reponses: [
            "La Cour constitutionnelle",
            "L'Assemblée nationale",
            "Le Conseil supérieur de la magistrature",
            "Le Conseil économique, social et environnemental"
        ],
    
        bonne: 2,
    
        explication: "L'article 171 prévoit que le Président de la République garantit l'indépendance du pouvoir judiciaire à travers le Conseil supérieur de la magistrature."
    },
    
    {
        question: "Qui préside le Conseil supérieur de la magistrature au Congo ?",
    
        reponses: [
            "Le Président de la République",
            "Le ministre de la Justice",
            "Le Premier Président de la Cour suprême",
            "Le Procureur général"
        ],
    
        bonne: 0,
    
        explication: "L'article 170 de la Constitution prévoit que le Conseil supérieur de la magistrature est présidé par le Président de la République."
    },
    
    {
        question: "Quelle fonction le ministre de la Justice exerce-t-il au sein du Conseil supérieur de la magistrature ?",
    
        reponses: [
            "Président",
            "Premier vice-président",
            "Deuxième vice-président",
            "Secrétaire général"
        ],
    
        bonne: 1,
    
        explication: "Selon l'article 170 de la Constitution, le ministre de la Justice est le premier vice-président du Conseil supérieur de la magistrature."
    },
    
    {
        question: "Dans quelles fonctions le Conseil supérieur de la magistrature intervient-il notamment à l'égard des magistrats ?",
    
        reponses: [
            "Comme conseil de discipline et organe de gestion de leur carrière",
            "Comme juridiction constitutionnelle",
            "Comme chambre parlementaire",
            "Comme organe chargé de voter les lois"
        ],
    
        bonne: 0,
    
        explication: "L'article 171 dispose que le Conseil supérieur de la magistrature statue comme conseil de discipline et comme organe de gestion de la carrière des magistrats."
    },
    
    {
        question: "Qui nomme les membres de la Cour suprême et les magistrats des autres juridictions nationales ?",
    
        reponses: [
            "Le Parlement",
            "Le ministre de la Justice seul",
            "Le Président de la République, par décret en Conseil supérieur de la magistrature",
            "La Cour constitutionnelle"
        ],
    
        bonne: 2,
    
        explication: "L'article 172 prévoit que les membres de la Cour suprême et les magistrats des autres juridictions nationales sont nommés par le Président de la République, par décret en Conseil supérieur de la magistrature."
    },
    
    {
        question: "Quelle institution est la plus haute juridiction de l'État en matière constitutionnelle ?",
    
        reponses: [
            "La Cour suprême",
            "La Cour constitutionnelle",
            "La Haute Cour de justice",
            "Le Conseil supérieur de la magistrature"
        ],
    
        bonne: 1,
    
        explication: "L'article 175 de la Constitution qualifie la Cour constitutionnelle de haute juridiction de l'État en matière constitutionnelle."
    },
    
    {
        question: "Que se passe-t-il lorsqu'une disposition est déclarée inconstitutionnelle par la Cour constitutionnelle ?",
    
        reponses: [
            "Elle doit être soumise au Sénat",
            "Elle peut être appliquée provisoirement",
            "Elle peut être promulguée après modification par le Gouvernement",
            "Elle ne peut être ni promulguée ni mise en application"
        ],
    
        bonne: 3,
    
        explication: "L'article 181 dispose qu'une disposition déclarée inconstitutionnelle ne peut être ni promulguée ni mise en application."
    },
    
    {
        question: "Les décisions de la Cour constitutionnelle peuvent-elles faire l'objet d'un recours ?",
    
        reponses: [
            "Oui, devant la Cour suprême",
            "Oui, devant le Parlement",
            "Non, elles ne sont susceptibles d'aucun recours",
            "Oui, devant le Président de la République"
        ],
    
        bonne: 2,
    
        explication: "L'article 181 de la Constitution dispose que les décisions de la Cour constitutionnelle ne sont susceptibles d'aucun recours."
    },
    
    {
        question: "Qui nomme deux des membres de la Cour constitutionnelle ?",
    
        reponses: [
            "Le Président du Sénat",
            "Le Premier ministre",
            "Le Président de la Cour suprême",
            "Le Conseil supérieur de la magistrature"
        ],
    
        bonne: 0,
    
        explication: "Selon l'article 182, le Président du Sénat nomme deux des neuf membres de la Cour constitutionnelle."
    },
    
    {
        question: "Combien de membres de la Cour constitutionnelle sont nommés par le Président de l'Assemblée nationale ?",
    
        reponses: [
            "Un",
            "Deux",
            "Trois",
            "Quatre"
        ],
    
        bonne: 1,
    
        explication: "L'article 182 de la Constitution prévoit que deux membres de la Cour constitutionnelle sont nommés par le Président de l'Assemblée nationale."
    },
    
    {
        question: "Combien de membres de la Cour constitutionnelle sont désignés par la Cour suprême ?",
    
        reponses: [
            "Un",
            "Deux",
            "Trois",
            "Quatre"
        ],
    
        bonne: 1,
    
        explication: "Selon l'article 182, deux membres de la Cour constitutionnelle sont désignés par la Cour suprême parmi les membres de cette juridiction."
    },
    
    {
        question: "Quel est le rôle du Conseil économique, social et environnemental auprès des pouvoirs publics ?",
    
        reponses: [
            "Une assemblée consultative",
            "Une juridiction administrative",
            "Une chambre du Parlement",
            "Un organe du pouvoir judiciaire"
        ],
    
        bonne: 0,
    
        explication: "L'article 197 de la Constitution définit le Conseil économique, social et environnemental comme une assemblée consultative auprès des pouvoirs publics."
    },
    
    {
        question: "Qui peut saisir le Conseil économique, social et environnemental ?",
    
        reponses: [
            "Uniquement le Premier ministre",
            "Le Président de la République, le Président de l'Assemblée nationale ou le Président du Sénat",
            "Uniquement le Président de la Cour suprême",
            "Uniquement les collectivités locales"
        ],
    
        bonne: 1,
    
        explication: "L'article 197 prévoit que le Conseil économique, social et environnemental est saisi par le Président de la République, le Président de l'Assemblée nationale ou le Président du Sénat."
    },
    
    {
        question: "Le Conseil économique, social et environnemental peut-il se saisir lui-même de certaines questions ?",
    
        reponses: [
            "Non, jamais",
            "Oui, pour tout type de question politique",
            "Oui, de tout problème à caractère économique, social ou environnemental",
            "Oui, uniquement pour les questions judiciaires"
        ],
    
        bonne: 2,
    
        explication: "L'article 197 prévoit que le Conseil économique, social et environnemental peut, de sa propre initiative, se saisir de tout problème à caractère économique, social ou environnemental."
    },
    
    {
        question: "Quelle institution est chargée de simplifier et d'humaniser les rapports entre l'administration et les administrés ?",
    
        reponses: [
            "Le Conseil supérieur de la magistrature",
            "La Cour constitutionnelle",
            "Le Médiateur de la République",
            "Le Conseil supérieur de la liberté de communication"
        ],
    
        bonne: 2,
    
        explication: "L'article 201 de la Constitution définit le Médiateur de la République comme une autorité indépendante chargée de simplifier et d'humaniser les rapports entre l'administration et les administrés."
    },
    
    {
        question: "Qui peut saisir le Médiateur de la République à l'occasion d'une affaire le concernant ?",
    
        reponses: [
            "Uniquement les fonctionnaires",
            "Toute personne physique ou morale",
            "Uniquement les députés et sénateurs",
            "Uniquement les collectivités locales"
        ],
    
        bonne: 1,
    
        explication: "L'article 202 prévoit que toute personne physique ou morale qui estime qu'un organisme public n'a pas fonctionné conformément à sa mission de service public peut saisir le Médiateur de la République par une requête individuelle."
    },
    
    {
        question: "Quelle institution veille au bon exercice de la liberté de l'information et de la communication au Congo ?",
    
        reponses: [
            "La Commission nationale des droits de l'homme",
            "Le Conseil supérieur de la magistrature",
            "Le Conseil supérieur de la liberté de communication",
            "Le Conseil économique, social et environnemental"
        ],
    
        bonne: 2,
    
        explication: "L'article 212 de la Constitution prévoit que le Conseil supérieur de la liberté de communication veille au bon exercice de la liberté de l'information et de la communication."
    },
    {
        question: "Quel est le rôle principal de la Cour des comptes et de discipline budgétaire dans la gestion des finances publiques au Congo ?",
    
        reponses: [
            "Contrôler les opérations budgétaires et comptables des administrations publiques et d'autres organismes concernés",
            "Voter chaque année la loi de finances",
            "Nommer les ministres chargés des finances",
            "Élaborer directement le budget de l'État"
        ],
    
        bonne: 0,
    
        explication: "La Cour des comptes et de discipline budgétaire assure notamment le contrôle juridictionnel des opérations budgétaires et comptables des administrations publiques, des établissements publics, des collectivités locales et d'autres organismes concernés."
    },
    
    {
        question: "Quelle institution assiste le Parlement dans le contrôle de l'exécution des lois de finances ?",
    
        reponses: [
            "Le Conseil supérieur de la magistrature",
            "La Cour des comptes et de discipline budgétaire",
            "Le Conseil supérieur de la liberté de communication",
            "Le Médiateur de la République"
        ],
    
        bonne: 1,
    
        explication: "La Cour des comptes et de discipline budgétaire assiste le Parlement dans le contrôle de l'exécution des lois de finances."
    },
    
    {
        question: "Quel document la Cour des comptes et de discipline budgétaire peut-elle certifier dans le cadre de ses attributions ?",
    
        reponses: [
            "Le programme d'action du Gouvernement",
            "Le règlement intérieur de l'Assemblée nationale",
            "Le compte général de l'État",
            "Le programme électoral des partis politiques"
        ],
    
        bonne: 2,
    
        explication: "Parmi ses attributions, la Cour des comptes et de discipline budgétaire certifie la régularité, la sincérité et la fidélité du compte général de l'État."
    },
    
    {
        question: "Quel est le nom officiel de la juridiction congolaise chargée du contrôle juridictionnel des opérations budgétaires et comptables ?",
    
        reponses: [
            "Cour supérieure des finances publiques",
            "Cour nationale du budget",
            "Cour des comptes et de discipline budgétaire",
            "Tribunal administratif des finances"
        ],
    
        bonne: 2,
    
        explication: "La juridiction porte officiellement le nom de Cour des comptes et de discipline budgétaire."
    },
    
    {
        question: "Qui est indiqué comme Premier Président de la Cour des comptes et de discipline budgétaire sur le site officiel de cette institution ?",
    
        reponses: [
            "Charles Emile Appesse",
            "Ludovic Ngouala",
            "Michel Miambi",
            "Jocelyne Milandou Kanza"
        ],
    
        bonne: 0,
    
        explication: "Le site officiel de la Cour des comptes et de discipline budgétaire présente Charles Emile Appesse comme Premier Président de l'institution."
    },
    
    {
        question: "Quelles sont les deux collectivités locales expressément citées par la Constitution de la République du Congo ?",
    
        reponses: [
            "Le district et le village",
            "Le département et la commune",
            "L'arrondissement et le quartier",
            "La région et le district"
        ],
    
        bonne: 1,
    
        explication: "L'article 208 de la Constitution dispose que les collectivités locales de la République du Congo sont le département et la commune."
    },
    
    {
        question: "Comment les collectivités locales de la République du Congo s'administrent-elles ?",
    
        reponses: [
            "Par des conseils nommés par le Président de la République",
            "Directement par les préfets",
            "Par des conseils élus, dans les conditions prévues par la loi",
            "Par les membres du Gouvernement"
        ],
    
        bonne: 2,
    
        explication: "L'article 209 de la Constitution prévoit que les collectivités locales s'administrent librement par des conseils élus et dans les conditions prévues par la loi."
    },
    
    {
        question: "Parmi les domaines suivants, lequel relève de la compétence des collectivités locales selon la Constitution congolaise ?",
    
        reponses: [
            "La politique étrangère",
            "La défense nationale",
            "La monnaie nationale",
            "L'enseignement préscolaire, primaire et secondaire"
        ],
    
        bonne: 3,
    
        explication: "L'article 210 attribue notamment aux collectivités locales des compétences en matière d'enseignement préscolaire, primaire et secondaire."
    },
    
    {
        question: "Lequel de ces domaines relève également des compétences des collectivités locales congolaises ?",
    
        reponses: [
            "La santé de base et l'action sociale",
            "La négociation des traités internationaux",
            "La défense nationale",
            "La politique monétaire"
        ],
    
        bonne: 0,
    
        explication: "La Constitution attribue notamment aux collectivités locales la santé de base, l'action sociale et la protection civile."
    },
    
    {
        question: "Quel principe financier accompagne la libre administration des collectivités locales ?",
    
        reponses: [
            "Les collectivités locales ne disposent d'aucune ressource propre",
            "L'État leur alloue chaque année une contribution de développement en plus de leurs ressources propres",
            "Les collectivités locales financent directement le Parlement",
            "Les collectivités locales fixent elles-mêmes la monnaie utilisée sur leur territoire"
        ],
    
        bonne: 1,
    
        explication: "L'article 209 prévoit qu'en plus de leurs ressources propres, l'État alloue chaque année aux collectivités locales une contribution conséquente de développement."
    },
    
    {
        question: "Quel moyen de contrôle parlementaire permet aux députés ou sénateurs de demander officiellement des explications au Gouvernement sur une question donnée ?",
    
        reponses: [
            "La question orale",
            "La nomination d'un préfet",
            "Le décret présidentiel",
            "La ratification administrative"
        ],
    
        bonne: 0,
    
        explication: "La Constitution cite la question orale parmi les moyens d'information et de contrôle du Parlement sur l'action du Gouvernement."
    },
    
    {
        question: "Lequel de ces moyens fait partie des instruments de contrôle du Parlement sur l'action du Gouvernement ?",
    
        reponses: [
            "La nomination des magistrats",
            "L'enquête parlementaire",
            "La délivrance des passeports",
            "La gestion des communes"
        ],
    
        bonne: 1,
    
        explication: "L'enquête parlementaire figure parmi les moyens d'information et de contrôle du Parlement sur l'action du Gouvernement."
    },
    
    {
        question: "Quel est l'âge minimum prévu par la Constitution pour être candidat à l'élection des députés au Congo ?",
    
        reponses: [
            "16 ans",
            "18 ans",
            "21 ans",
            "25 ans"
        ],
    
        bonne: 1,
    
        explication: "L'article 132 de la Constitution prévoit notamment que les candidats aux élections à l'Assemblée nationale doivent être âgés de dix-huit ans au moins."
    },
    
    {
        question: "Parmi ces conditions, laquelle est exigée par la Constitution pour être candidat aux élections à l'Assemblée nationale ?",
    
        reponses: [
            "Être obligatoirement fonctionnaire",
            "Être membre d'un parti politique",
            "Être de nationalité congolaise",
            "Avoir déjà exercé un mandat local"
        ],
    
        bonne: 2,
    
        explication: "L'article 132 prévoit notamment que les candidats aux élections à l'Assemblée nationale doivent être de nationalité congolaise."
    },
    
    {
        question: "Quelle incompatibilité concerne le mandat de député selon la Constitution congolaise ?",
    
        reponses: [
            "Le mandat de député est incompatible avec toute autre fonction à caractère public",
            "Le mandat de député interdit toute activité agricole",
            "Le mandat de député interdit toute activité culturelle",
            "Le mandat de député est incompatible uniquement avec une fonction ministérielle"
        ],
    
        bonne: 0,
    
        explication: "L'article 131 dispose que le mandat de député est incompatible avec toute autre fonction à caractère public. Les autres incompatibilités sont fixées par la loi."
    },
    
    {
        question: "À quel âge un Congolais peut-il être électeur selon la Constitution, sous réserve des conditions prévues par la loi ?",
    
        reponses: [
            "16 ans révolus",
            "17 ans révolus",
            "18 ans révolus",
            "21 ans révolus"
        ],
    
        bonne: 2,
    
        explication: "L'article 6 de la Constitution prévoit que sont électeurs, dans les conditions fixées par la loi, les Congolais âgés de dix-huit ans révolus et jouissant de leurs droits civils et politiques."
    },
    
    {
        question: "Quel principe politique est expressément reconnu par la Constitution de la République du Congo ?",
    
        reponses: [
            "Le parti unique obligatoire",
            "Le pluralisme politique",
            "L'interdiction de l'opposition",
            "La nomination des partis par le Gouvernement"
        ],
    
        bonne: 1,
    
        explication: "L'article 7 de la Constitution consacre le pluralisme politique en République du Congo."
    },
    
    {
        question: "Quel statut la Constitution reconnaît-elle à l'opposition politique en République du Congo ?",
    
        reponses: [
            "Elle est interdite",
            "Elle est reconnue",
            "Elle est réservée aux collectivités locales",
            "Elle est placée sous l'autorité du Sénat"
        ],
    
        bonne: 1,
    
        explication: "L'article 63 de la Constitution reconnaît l'opposition politique en République du Congo et prévoit que la loi détermine son statut."
    },
    
    {
        question: "Quel organisme congolais est chargé de suivre la promotion et la protection des droits de l'homme ?",
    
        reponses: [
            "La Commission nationale des droits de l'homme",
            "Le Conseil supérieur de la magistrature",
            "La Cour des comptes et de discipline budgétaire",
            "Le Conseil économique, social et environnemental"
        ],
    
        bonne: 0,
    
        explication: "La Constitution institue une Commission nationale des droits de l'homme, qui est un organe de suivi de la promotion et de la protection des droits de l'homme."
    },
    
    {
        question: "Quelle institution congolaise est chargée de veiller au bon exercice de la liberté de l'information et de la communication ?",
    
        reponses: [
            "La Commission nationale des droits de l'homme",
            "Le Conseil supérieur de la liberté de communication",
            "La Cour des comptes et de discipline budgétaire",
            "Le Conseil supérieur de la magistrature"
        ],
    
        bonne: 1,
    
        explication: "Le Conseil supérieur de la liberté de communication est chargé de veiller au bon exercice de la liberté de l'information et de la communication. Il émet également des avis techniques et formule des recommandations dans ce domaine."
    }
    
   
 ];