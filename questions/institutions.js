const questionsInstitutions = [

    {
        question: "Quelle est la capitale de la République du Congo ?",
        reponses: ["Pointe-Noire", "Brazzaville", "Dolisie", "Owando"],
        bonne: 1,
        explication: "L'article 1er de la Constitution dispose que la capitale de la République du Congo est Brazzaville."
    },

    {
        question: "Où est fixé le siège de l'Assemblée nationale de la République du Congo ?",
        reponses: ["Pointe-Noire", "Dolisie", "Brazzaville", "Oyo"],
        bonne: 2,
        explication: "Le règlement intérieur de l'Assemblée nationale fixe son siège à Brazzaville."
    },

    {
        question: "Quelle est la nature de l'État congolais selon la Constitution de la République du Congo ?",
        reponses: ["Un État fédéral, laïc et décentralisé", "Un État unitaire, souverain, indivisible, décentralisé, laïc et démocratique", "Un État confédéral, souverain et démocratique", "Un État unitaire, monarchique et décentralisé"],
        bonne: 1,
        explication: "L'article 1er de la Constitution dispose que la République du Congo est un État de droit, souverain, unitaire et indivisible, décentralisé, laïc et démocratique."
    },

    {
        question: "Quelle fonction le Président de la République exerce-t-il selon la Constitution congolaise ?",
        reponses: ["Il est le Chef de l'État", "Il est le président du Parlement", "Il est le président de la Cour constitutionnelle", "Il est le Chef de la majorité parlementaire"],
        bonne: 0,
        explication: "L'article 64 de la Constitution dispose que le Président de la République est le Chef de l'État."
    },

    {
        question: "Quelle est la durée du mandat du Président de la République du Congo ?",
        reponses: ["Quatre ans", "Six ans", "Cinq ans", "Sept ans"],
        bonne: 2,
        explication: "Selon l'article 65 de la Constitution, le Président de la République est élu pour un mandat de cinq ans."
    },

    {
        question: "Combien de fois le mandat présidentiel peut-il être renouvelé selon la Constitution congolaise ?",
        reponses: ["Une seule fois", "Deux fois", "Trois fois", "Il est renouvelable sans limitation"],
        bonne: 1,
        explication: "L'article 65 prévoit que le mandat du Président de la République est renouvelable deux fois."
    },

    {
        question: "À quel âge minimum peut-on être candidat à l'élection présidentielle au Congo ?",
        reponses: ["25 ans révolus", "30 ans révolus", "35 ans révolus", "40 ans révolus"],
        bonne: 1,
        explication: "L'article 66 de la Constitution fixe à trente ans révolus l'âge minimum pour être candidat aux fonctions de Président de la République."
    },

    {
        question: "Comment le Président de la République du Congo est-il élu ?",
        reponses: ["Au suffrage universel direct, au scrutin uninominal, à la majorité absolue des suffrages exprimés", "Au suffrage universel indirect par le Parlement", "Au suffrage universel direct à la majorité relative dès le premier tour", "Par un collège électoral composé uniquement des députés et sénateurs"],
        bonne: 0,
        explication: "L'article 67 prévoit l'élection du Président au suffrage universel direct, au scrutin uninominal, à la majorité absolue des suffrages exprimés."
    },

    {
        question: "Quelle institution proclame les résultats définitifs de l'élection présidentielle au Congo ?",
        reponses: ["Le ministère de l'Intérieur", "L'Assemblée nationale", "La Cour constitutionnelle", "La Commission nationale électorale indépendante"],
        bonne: 2,
        explication: "Selon l'article 176 de la Constitution, la Cour constitutionnelle veille à la régularité de l'élection présidentielle, examine les réclamations et proclame les résultats définitifs."
    },

    {
        question: "Qui nomme le Premier ministre au Congo ?",
        reponses: ["Le Président du Sénat", "Le Président de l'Assemblée nationale", "La Cour constitutionnelle", "Le Président de la République"],
        bonne: 3,
        explication: "L'article 83 de la Constitution dispose que le Président de la République nomme le Premier ministre."
    },

    {
        question: "Qui préside le Conseil des ministres en République du Congo ?",
        reponses: ["Le Premier ministre", "Le Président de la République", "Le Président du Sénat", "Le ministre chargé de l'Intérieur"],
        bonne: 1,
        explication: "L'article 84 de la Constitution prévoit que le Président de la République préside le Conseil des ministres."
    },

    {
        question: "De quelles institutions le Parlement congolais est-il composé ?",
        reponses: ["De l'Assemblée nationale et du Conseil économique, social et environnemental", "Du Sénat et de la Cour suprême", "De l'Assemblée nationale et du Sénat", "Du Sénat et de la Cour constitutionnelle"],
        bonne: 2,
        explication: "L'article 107 de la Constitution précise que le Parlement est composé de deux chambres : l'Assemblée nationale et le Sénat."
    },

    {
        question: "Quel est le rôle général du Parlement selon la Constitution congolaise ?",
        reponses: ["Exercer le pouvoir législatif et contrôler l'action du Gouvernement", "Nommer directement tous les membres du Gouvernement", "Contrôler uniquement les juridictions nationales", "Organiser les élections présidentielles"],
        bonne: 0,
        explication: "L'article 107 dispose que le Parlement exerce le pouvoir législatif et contrôle l'action du Gouvernement."
    },

    {
        question: "Comment sont élus les députés de l'Assemblée nationale congolaise ?",
        reponses: ["Au suffrage universel indirect", "Par les conseillers départementaux et municipaux", "Au suffrage universel direct", "Par le Président de la République"],
        bonne: 2,
        explication: "L'article 128 de la Constitution précise que les membres de l'Assemblée nationale sont élus au suffrage universel direct."
    },

    {
        question: "Quelle est la durée du mandat des députés au Congo ?",
        reponses: ["Quatre ans renouvelable", "Cinq ans renouvelable", "Six ans renouvelable", "Sept ans non renouvelable"],
        bonne: 1,
        explication: "L'article 129 de la Constitution fixe à cinq ans renouvelable la durée du mandat des députés."
    },

    {
        question: "Comment les sénateurs congolais sont-ils élus ?",
        reponses: ["Au suffrage universel direct", "Par le Président de la République", "Au suffrage universel indirect par les conseillers départementaux et municipaux", "Par les députés réunis en congrès"],
        bonne: 2,
        explication: "L'article 133 dispose que les sénateurs sont élus au suffrage universel indirect par les conseillers départementaux et municipaux."
    },

    {
        question: "Quelle est la durée du mandat des sénateurs au Congo ?",
        reponses: ["Cinq ans renouvelable", "Sept ans renouvelable", "Six ans non renouvelable", "Six ans renouvelable"],
        bonne: 3,
        explication: "Selon l'article 134 de la Constitution, la durée du mandat des sénateurs est de six ans renouvelable."
    },

    {
        question: "Quel rôle particulier le Sénat exerce-t-il en plus de sa fonction législative ?",
        reponses: ["Il est modérateur et conseil de la Nation", "Il dirige le Gouvernement", "Il contrôle directement les juridictions", "Il nomme le Président de la République"],
        bonne: 0,
        explication: "L'article 133 précise que le Sénat exerce, outre sa fonction législative, celle de modérateur et de conseil de la Nation."
    },

    {
        question: "Quelle est la composition du bureau de chacune des deux chambres du Parlement congolais ?",
        reponses: ["Un président, un vice-président, deux secrétaires et deux questeurs", "Un président, deux vice-présidents, un secrétaire et trois questeurs", "Un président, deux vice-présidents, deux secrétaires et deux questeurs", "Un président, trois vice-présidents, deux secrétaires et deux questeurs"],
        bonne: 2,
        explication: "L'article 120 de la Constitution prévoit que le bureau de chaque chambre comprend un président, deux vice-présidents, deux secrétaires et deux questeurs."
    },

    {
        question: "Qui préside les débats lorsque le Parlement congolais se réunit en congrès ?",
        reponses: ["Le Président du Sénat", "Le Président de l'Assemblée nationale", "Le Premier ministre", "Le Président de la République"],
        bonne: 1,
        explication: "L'article 127 de la Constitution prévoit que le bureau de l'Assemblée nationale préside les débats lorsque le Parlement se réunit en congrès."
    },

    {
        question: "Quelle institution est chargée de veiller à la régularité de l'élection présidentielle et du référendum ?",
        reponses: ["La Cour constitutionnelle", "La Cour suprême", "Le Sénat", "Le Conseil économique, social et environnemental"],
        bonne: 0,
        explication: "L'article 176 de la Constitution attribue à la Cour constitutionnelle la mission de veiller à la régularité de l'élection présidentielle et des opérations du référendum."
    },

    {
        question: "Combien de membres composent la Cour constitutionnelle de la République du Congo ?",
        reponses: ["Sept membres", "Huit membres", "Neuf membres", "Douze membres"],
        bonne: 2,
        explication: "L'article 182 de la Constitution prévoit que la Cour constitutionnelle est composée de neuf membres."
    },

    {
        question: "De qui est composé le Gouvernement de la République du Congo ?",
        reponses: ["Du Président de la République, du Sénat et des ministres", "Du Premier ministre, des députés et des sénateurs", "Du Président de la République et des présidents des deux chambres du Parlement", "Du Premier ministre, Chef du Gouvernement, et des ministres"],
        bonne: 3,
        explication: "Selon l'article 98 de la Constitution, le Gouvernement comprend le Premier ministre, Chef du Gouvernement, et les ministres."
    },

    {
        question: "Qui est le Chef du Gouvernement en République du Congo ?",
        reponses: ["Le Président de l'Assemblée nationale", "Le Président de la République", "Le Premier ministre", "Le Président du Sénat"],
        bonne: 2,
        explication: "L'article 98 de la Constitution précise que le Premier ministre est le Chef du Gouvernement."
    },

    {
        question: "Devant quelle institution le Premier ministre est-il responsable de la conduite de la politique économique et sociale de la Nation ?",
        reponses: ["Le Sénat", "La Cour constitutionnelle", "L'Assemblée nationale", "La Cour suprême"],
        bonne: 2,
        explication: "Selon l'article 100 de la Constitution, le Premier ministre est responsable de la conduite de la politique économique et sociale de la Nation devant l'Assemblée nationale."
    },

    {
        question: "Qui détermine la politique économique et sociale de la Nation en concertation avec le Président de la République ?",
        reponses: ["Le Premier ministre", "Le Président du Sénat", "Le Président de l'Assemblée nationale", "Le ministre chargé des Finances"],
        bonne: 0,
        explication: "L'article 99 de la Constitution dispose que le Premier ministre, en concertation avec le Président de la République, détermine la politique économique et sociale de la Nation."
    },

    {
        question: "Qui assure l'exécution des lois et exerce le pouvoir réglementaire dans les matières ne relevant pas des décrets en Conseil des ministres ?",
        reponses: ["Le Président du Sénat", "Le Président de la République", "Le Premier ministre", "La Cour constitutionnelle"],
        bonne: 2,
        explication: "L'article 101 de la Constitution attribue cette compétence au Premier ministre."
    },

    {
        question: "Quelle institution le Premier ministre convoque-t-il et tient-il ?",
        reponses: ["Le Conseil de cabinet", "Le Congrès parlementaire", "Le Conseil supérieur de la magistrature", "Le Conseil constitutionnel"],
        bonne: 0,
        explication: "L'article 102 de la Constitution prévoit que le Premier ministre convoque et tient le Conseil de cabinet."
    },

    {
        question: "Quelle est la plus haute juridiction de l'État en matière constitutionnelle au Congo ?",
        reponses: ["La Cour suprême", "La Cour constitutionnelle", "La Haute Cour de justice", "Le Conseil supérieur de la magistrature"],
        bonne: 1,
        explication: "L'article 175 de la Constitution qualifie la Cour constitutionnelle de haute juridiction de l'État en matière constitutionnelle."
    },

    {
        question: "Quel est le rôle de la Cour constitutionnelle dans le fonctionnement des institutions congolaises ?",
        reponses: ["Elle dirige les activités du Gouvernement", "Elle est l'organe régulateur du fonctionnement des institutions et des activités des pouvoirs publics", "Elle contrôle uniquement les finances publiques", "Elle assure la direction du Parlement"],
        bonne: 1,
        explication: "L'article 175 de la Constitution dispose que la Cour constitutionnelle est l'organe régulateur du fonctionnement des institutions et des activités des pouvoirs publics."
    },

    {
        question: "Quels actes la Cour constitutionnelle peut-elle contrôler au regard de la Constitution ?",
        reponses: ["Uniquement les lois ordinaires", "Les lois, les traités et les accords internationaux", "Uniquement les décrets présidentiels", "Uniquement les décisions des tribunaux"],
        bonne: 1,
        explication: "L'article 175 prévoit que la Cour constitutionnelle est juge de la constitutionnalité des lois, des traités et des accords internationaux."
    },

    {
        question: "Qui peut saisir la Cour constitutionnelle selon la Constitution congolaise ?",
        reponses: ["Uniquement le Président de la République", "Uniquement les membres du Gouvernement", "Le Président de la République, les présidents des deux chambres du Parlement, le Premier ministre ou un tiers des membres de chaque chambre du Parlement", "Uniquement les citoyens inscrits sur les listes électorales"],
        bonne: 2,
        explication: "L'article 178 prévoit notamment la saisine par le Président de la République, le Président de l'Assemblée nationale, le Président du Sénat, le Premier ministre ou un tiers des membres de chaque chambre du Parlement."
    },

    {
        question: "Quel type de contentieux électoral relève de la Cour constitutionnelle ?",
        reponses: ["Le contentieux des élections législatives et sénatoriales", "Le contentieux de toutes les élections locales uniquement", "Uniquement le contentieux de l'élection présidentielle", "Uniquement le contentieux des élections municipales"],
        bonne: 0,
        explication: "Selon l'article 177 de la Constitution, la Cour constitutionnelle est juge du contentieux des élections législatives et sénatoriales."
    },

    {
        question: "Quel particulier peut saisir directement la Cour constitutionnelle sur la constitutionnalité d'une loi ou d'un traité ?",
        reponses: ["Uniquement un député", "Uniquement un sénateur", "Tout particulier, directement ou par la procédure de l'exception d'inconstitutionnalité", "Uniquement un ministre"],
        bonne: 2,
        explication: "L'article 180 prévoit que tout particulier peut saisir la Cour constitutionnelle sur la constitutionnalité des lois et des traités, directement ou par la procédure de l'exception d'inconstitutionnalité."
    },

    {
        question: "Combien de membres de la Cour constitutionnelle sont nommés par le Président de la République ?",
        reponses: ["Deux", "Quatre", "Cinq", "Trois"],
        bonne: 3,
        explication: "Selon l'article 182 de la Constitution, trois membres de la Cour constitutionnelle sont nommés par le Président de la République."
    },

    {
        question: "Qui nomme le président de la Cour constitutionnelle ?",
        reponses: ["Le Président du Sénat", "Le Premier ministre", "Le Président de la République parmi les membres de la Cour", "Le Président de l'Assemblée nationale"],
        bonne: 2,
        explication: "L'article 183 de la Constitution prévoit que le Président de la Cour constitutionnelle est nommé par le Président de la République parmi les membres de la Cour."
    },

    {
        question: "Quelle est la durée du mandat des membres de la Cour constitutionnelle ?",
        reponses: ["Trois ans renouvelable une fois", "Quatre ans renouvelable deux fois", "Cinq ans renouvelable une fois", "Six ans renouvelable deux fois"],
        bonne: 1,
        explication: "L'article 186 de la Constitution fixe à quatre ans la durée du mandat des membres de la Cour constitutionnelle, renouvelable deux fois."
    },

    {
        question: "Quelle institution exerce le pouvoir judiciaire en République du Congo ?",
        reponses: ["Le Parlement", "Le Gouvernement", "La Cour constitutionnelle uniquement", "La Cour suprême, les Cours d'appel et les autres juridictions nationales"],
        bonne: 3,
        explication: "L'article 166 de la Constitution dispose que le pouvoir judiciaire est exercé par la Cour suprême, les Cours d'appel et les autres juridictions nationales."
    },

    {
        question: "De qui le pouvoir judiciaire est-il indépendant en République du Congo ?",
        reponses: ["Du pouvoir exécutif et du pouvoir législatif", "Uniquement du pouvoir exécutif", "Uniquement du Parlement", "Du Président de la République uniquement"],
        bonne: 0,
        explication: "L'article 168 de la Constitution dispose que le pouvoir judiciaire est indépendant du pouvoir exécutif et du pouvoir législatif."
    },

    {
        question: "À quelle autorité les juges sont-ils soumis dans l'exercice de leurs fonctions ?",
        reponses: ["À l'autorité du Gouvernement", "À l'autorité de la loi", "À l'autorité du Parlement", "À l'autorité du Président du Sénat"],
        bonne: 1,
        explication: "L'article 168 de la Constitution précise que les juges ne sont soumis, dans l'exercice de leurs fonctions, qu'à l'autorité de la loi."
    },

    {
        question: "Quelle institution est chargée de garantir l'indépendance du pouvoir judiciaire à travers elle ?",
        reponses: ["La Cour constitutionnelle", "L'Assemblée nationale", "Le Conseil supérieur de la magistrature", "Le Conseil économique, social et environnemental"],
        bonne: 2,
        explication: "L'article 171 prévoit que le Président de la République garantit l'indépendance du pouvoir judiciaire à travers le Conseil supérieur de la magistrature."
    },

    {
        question: "Qui préside le Conseil supérieur de la magistrature au Congo ?",
        reponses: ["Le Président de la République", "Le ministre de la Justice", "Le Premier Président de la Cour suprême", "Le Procureur général"],
        bonne: 0,
        explication: "L'article 170 de la Constitution prévoit que le Conseil supérieur de la magistrature est présidé par le Président de la République."
    },

    {
        question: "Quelle fonction le ministre de la Justice exerce-t-il au sein du Conseil supérieur de la magistrature ?",
        reponses: ["Président", "Premier vice-président", "Deuxième vice-président", "Secrétaire général"],
        bonne: 1,
        explication: "Selon l'article 170 de la Constitution, le ministre de la Justice est le premier vice-président du Conseil supérieur de la magistrature."
    },

    {
        question: "Dans quelles fonctions le Conseil supérieur de la magistrature intervient-il notamment à l'égard des magistrats ?",
        reponses: ["Comme conseil de discipline et organe de gestion de leur carrière", "Comme juridiction constitutionnelle", "Comme chambre parlementaire", "Comme organe chargé de voter les lois"],
        bonne: 0,
        explication: "L'article 171 dispose que le Conseil supérieur de la magistrature statue comme conseil de discipline et comme organe de gestion de la carrière des magistrats."
    },

    {
        question: "Qui nomme les membres de la Cour suprême et les magistrats des autres juridictions nationales ?",
        reponses: ["Le Parlement", "Le ministre de la Justice seul", "Le Président de la République, par décret en Conseil supérieur de la magistrature", "La Cour constitutionnelle"],
        bonne: 2,
        explication: "L'article 172 prévoit que les membres de la Cour suprême et les magistrats des autres juridictions nationales sont nommés par le Président de la République, par décret en Conseil supérieur de la magistrature."
    },

    {
        question: "Que se passe-t-il lorsqu'une disposition est déclarée inconstitutionnelle par la Cour constitutionnelle ?",
        reponses: ["Elle doit être soumise au Sénat", "Elle peut être appliquée provisoirement", "Elle peut être promulguée après modification par le Gouvernement", "Elle ne peut être ni promulguée ni mise en application"],
        bonne: 3,
        explication: "L'article 181 dispose qu'une disposition déclarée inconstitutionnelle ne peut être ni promulguée ni mise en application."
    },

    {
        question: "Les décisions de la Cour constitutionnelle peuvent-elles faire l'objet d'un recours ?",
        reponses: ["Oui, devant la Cour suprême", "Oui, devant le Parlement", "Non, elles ne sont susceptibles d'aucun recours", "Oui, devant le Président de la République"],
        bonne: 2,
        explication: "L'article 181 de la Constitution dispose que les décisions de la Cour constitutionnelle ne sont susceptibles d'aucun recours."
    },

    {
        question: "Qui nomme deux des membres de la Cour constitutionnelle ?",
        reponses: ["Le Président du Sénat", "Le Premier ministre", "Le Président de la Cour suprême", "Le Conseil supérieur de la magistrature"],
        bonne: 0,
        explication: "Selon l'article 182, le Président du Sénat nomme deux des neuf membres de la Cour constitutionnelle."
    },

    {
        question: "Combien de membres de la Cour constitutionnelle sont nommés par le Président de l'Assemblée nationale ?",
        reponses: ["Un", "Deux", "Trois", "Quatre"],
        bonne: 1,
        explication: "L'article 182 de la Constitution prévoit que deux membres de la Cour constitutionnelle sont nommés par le Président de l'Assemblée nationale."
    },

    {
        question: "Combien de membres de la Cour constitutionnelle sont désignés par la Cour suprême ?",
        reponses: ["Un", "Deux", "Trois", "Quatre"],
        bonne: 1,
        explication: "Selon l'article 182, deux membres de la Cour constitutionnelle sont désignés par la Cour suprême parmi les membres de cette juridiction."
    },

    {
        question: "Quel est le rôle du Conseil économique, social et environnemental auprès des pouvoirs publics ?",
        reponses: ["Une assemblée consultative", "Une juridiction administrative", "Une chambre du Parlement", "Un organe du pouvoir judiciaire"],
        bonne: 0,
        explication: "L'article 197 de la Constitution définit le Conseil économique, social et environnemental comme une assemblée consultative."
    },

    {
        question: "Qui peut saisir le Conseil économique, social et environnemental ?",
        reponses: ["Uniquement le Premier ministre", "Le Président de la République, le Président de l'Assemblée nationale ou le Président du Sénat", "Uniquement le Président de la Cour suprême", "Uniquement les collectivités locales"],
        bonne: 1,
        explication: "L'article 197 prévoit que le Conseil économique, social et environnemental est saisi par le Président de la République, le Président de l'Assemblée nationale ou le Président du Sénat."
    },

    {
        question: "Le Conseil économique, social et environnemental peut-il se saisir lui-même de certaines questions ?",
        reponses: ["Non, jamais", "Oui, pour tout type de question politique", "Oui, de tout problème à caractère économique, social ou environnemental", "Oui, uniquement pour les questions judiciaires"],
        bonne: 2,
        explication: "L'article 197 prévoit que le Conseil économique, social et environnemental peut, de sa propre initiative, se saisir de tout problème à caractère économique, social ou environnemental."
    },

    {
        question: "Quelle institution est chargée de simplifier et d'humaniser les rapports entre l'administration et les administrés ?",
        reponses: ["Le Conseil supérieur de la magistrature", "La Cour constitutionnelle", "Le Médiateur de la République", "Le Conseil supérieur de la liberté de communication"],
        bonne: 2,
        explication: "L'article 201 de la Constitution définit le Médiateur de la République comme une autorité indépendante chargée de simplifier et d'humaniser les rapports entre l'administration et les administrés."
    },

    {
        question: "Qui peut saisir le Médiateur de la République à l'occasion d'une affaire le concernant ?",
        reponses: ["Uniquement les fonctionnaires", "Toute personne physique ou morale", "Uniquement les députés et sénateurs", "Uniquement les collectivités locales"],
        bonne: 1,
        explication: "L'article 202 prévoit que toute personne physique ou morale peut saisir le Médiateur de la République par une requête individuelle lorsqu'elle estime qu'un organisme public n'a pas fonctionné conformément à sa mission de service public."
    },

    {
        question: "Quelle institution veille au bon exercice de la liberté de l'information et de la communication au Congo ?",
        reponses: ["La Commission nationale des droits de l'homme", "Le Conseil supérieur de la magistrature", "Le Conseil supérieur de la liberté de communication", "Le Conseil économique, social et environnemental"],
        bonne: 2,
        explication: "L'article 212 de la Constitution prévoit que le Conseil supérieur de la liberté de communication veille au bon exercice de la liberté de l'information et de la communication."
    },

    {
        question: "Quel est le rôle principal de la Cour des comptes et de discipline budgétaire dans la gestion des finances publiques au Congo ?",
        reponses: ["Contrôler les opérations budgétaires et comptables des administrations publiques et d'autres organismes concernés", "Voter chaque année la loi de finances", "Nommer les ministres chargés des finances", "Élaborer directement le budget de l'État"],
        bonne: 0,
        explication: "La Cour des comptes et de discipline budgétaire exerce notamment le contrôle des opérations budgétaires et comptables des administrations publiques, des établissements publics, des collectivités locales et d'autres organismes concernés."
    },

    {
        question: "Quelle institution assiste le Parlement dans le contrôle de l'exécution des lois de finances ?",
        reponses: ["Le Conseil supérieur de la magistrature", "La Cour des comptes et de discipline budgétaire", "Le Conseil supérieur de la liberté de communication", "Le Médiateur de la République"],
        bonne: 1,
        explication: "La Cour des comptes et de discipline budgétaire assiste le Parlement dans le contrôle de l'exécution des lois de finances."
    },

    {
        question: "Quel document la Cour des comptes et de discipline budgétaire peut-elle certifier dans le cadre de ses attributions ?",
        reponses: ["Le programme d'action du Gouvernement", "Le règlement intérieur de l'Assemblée nationale", "Le compte général de l'État", "Le programme électoral des partis politiques"],
        bonne: 2,
        explication: "Dans le cadre de ses attributions, la Cour des comptes et de discipline budgétaire certifie la régularité, la sincérité et la fidélité des comptes de l'État."
    },

    {
        question: "Quel est le nom officiel de la juridiction congolaise chargée du contrôle juridictionnel des opérations budgétaires et comptables ?",
        reponses: ["Cour supérieure des finances publiques", "Cour nationale du budget", "Cour des comptes et de discipline budgétaire", "Tribunal administratif des finances"],
        bonne: 2,
        explication: "La juridiction porte officiellement le nom de Cour des comptes et de discipline budgétaire."
    },

    {
        question: "Quelles sont les deux collectivités locales expressément citées par la Constitution de la République du Congo ?",
        reponses: ["Le district et le village", "Le département et la commune", "L'arrondissement et le quartier", "La région et le district"],
        bonne: 1,
        explication: "L'article 208 de la Constitution dispose que les collectivités locales de la République du Congo sont le département et la commune."
    },

    {
        question: "Comment les collectivités locales de la République du Congo s'administrent-elles ?",
        reponses: ["Par des conseils nommés par le Président de la République", "Directement par les préfets", "Par des conseils élus, dans les conditions prévues par la loi", "Par les membres du Gouvernement"],
        bonne: 2,
        explication: "L'article 209 de la Constitution prévoit que les collectivités locales s'administrent librement par des conseils élus et dans les conditions prévues par la loi."
    },

    {
        question: "Parmi les domaines suivants, lequel relève de la compétence des collectivités locales selon la Constitution congolaise ?",
        reponses: ["La politique étrangère", "La défense nationale", "La monnaie nationale", "L'enseignement préscolaire, primaire et secondaire"],
        bonne: 3,
        explication: "L'article 210 attribue notamment aux collectivités locales des compétences en matière d'enseignement préscolaire, primaire et secondaire."
    },

    {
        question: "Lequel de ces domaines relève également des compétences des collectivités locales congolaises ?",
        reponses: ["La santé de base et l'action sociale", "La négociation des traités internationaux", "La défense nationale", "La politique monétaire"],
        bonne: 0,
        explication: "L'article 210 attribue notamment aux collectivités locales la santé de base, l'action sociale et la protection civile."
    },

    {
        question: "Quel principe financier accompagne la libre administration des collectivités locales ?",
        reponses: ["Les collectivités locales ne disposent d'aucune ressource propre", "L'État leur alloue chaque année une contribution conséquente de développement en plus de leurs ressources propres", "Les collectivités locales financent directement le Parlement", "Les collectivités locales fixent elles-mêmes la monnaie utilisée sur leur territoire"],
        bonne: 1,
        explication: "L'article 209 prévoit qu'en plus de leurs ressources propres, l'État alloue chaque année aux collectivités locales une contribution conséquente de développement."
    },

    {
        question: "Quel moyen de contrôle parlementaire permet aux députés ou sénateurs de demander officiellement des explications au Gouvernement sur une question donnée ?",
        reponses: ["La question orale", "La nomination d'un préfet", "Le décret présidentiel", "La ratification administrative"],
        bonne: 0,
        explication: "La question orale figure parmi les moyens d'information et de contrôle du Parlement sur l'action du Gouvernement, prévus à l'article 107 de la Constitution."
    },

    {
        question: "Lequel de ces moyens fait partie des instruments de contrôle du Parlement sur l'action du Gouvernement ?",
        reponses: ["La nomination des magistrats", "L'enquête parlementaire", "La délivrance des passeports", "La gestion des communes"],
        bonne: 1,
        explication: "L'enquête parlementaire figure parmi les moyens d'information et de contrôle du Parlement sur l'action du Gouvernement."
    },

    {
        question: "Quel est l'âge minimum prévu par la Constitution pour être candidat à l'élection des députés au Congo ?",
        reponses: ["16 ans", "18 ans", "21 ans", "25 ans"],
        bonne: 1,
        explication: "L'article 132 de la Constitution prévoit notamment que les candidats aux élections à l'Assemblée nationale doivent être âgés de dix-huit ans au moins."
    },

    {
        question: "Parmi ces conditions, laquelle est exigée par la Constitution pour être candidat aux élections à l'Assemblée nationale ?",
        reponses: ["Être obligatoirement fonctionnaire", "Être membre d'un parti politique", "Être de nationalité congolaise", "Avoir déjà exercé un mandat local"],
        bonne: 2,
        explication: "L'article 132 prévoit notamment que les candidats aux élections à l'Assemblée nationale doivent être de nationalité congolaise."
    },

    {
        question: "Quelle incompatibilité concerne le mandat de député selon la Constitution congolaise ?",
        reponses: ["Le mandat de député est incompatible avec toute autre fonction à caractère public", "Le mandat de député interdit toute activité agricole", "Le mandat de député interdit toute activité culturelle", "Le mandat de député est incompatible uniquement avec une fonction ministérielle"],
        bonne: 0,
        explication: "L'article 131 dispose que le mandat de député est incompatible avec toute autre fonction à caractère public. Les autres incompatibilités sont fixées par la loi."
    },

    {
        question: "À quel âge un Congolais peut-il être électeur selon la Constitution, sous réserve des conditions prévues par la loi ?",
        reponses: ["16 ans révolus", "17 ans révolus", "18 ans révolus", "21 ans révolus"],
        bonne: 2,
        explication: "L'article 6 de la Constitution prévoit que sont électeurs, dans les conditions fixées par la loi, les Congolais âgés de dix-huit ans révolus et jouissant de leurs droits civils et politiques."
    },

    {
        question: "Quel principe politique est expressément reconnu par la Constitution de la République du Congo ?",
        reponses: ["Le parti unique obligatoire", "Le pluralisme politique", "L'interdiction de l'opposition", "La nomination des partis par le Gouvernement"],
        bonne: 1,
        explication: "L'article 7 de la Constitution consacre le pluralisme politique en République du Congo."
    },

    {
        question: "Quel statut la Constitution reconnaît-elle à l'opposition politique en République du Congo ?",
        reponses: ["Elle est interdite", "Elle est reconnue", "Elle est réservée aux collectivités locales", "Elle est placée sous l'autorité du Sénat"],
        bonne: 1,
        explication: "L'article 63 de la Constitution reconnaît l'opposition politique en République du Congo et prévoit que la loi détermine son statut."
    },

    {
        question: "Quel organisme congolais est chargé de suivre la promotion et la protection des droits de l'homme ?",
        reponses: ["La Commission nationale des droits de l'homme", "Le Conseil supérieur de la magistrature", "La Cour des comptes et de discipline budgétaire", "Le Conseil économique, social et environnemental"],
        bonne: 0,
        explication: "La Constitution institue une Commission nationale des droits de l'homme, qui est un organe de suivi de la promotion et de la protection des droits de l'homme."
    },

    {
        question: "Quelle autre mission le Conseil supérieur de la liberté de communication exerce-t-il dans le domaine de l'information et de la communication ?",
        reponses: ["Il nomme les journalistes des médias publics", "Il émet des avis techniques et formule des recommandations", "Il dirige le ministère de la Communication", "Il contrôle les juridictions nationales"],
        bonne: 1,
        explication: "En plus de veiller au bon exercice de la liberté de l'information et de la communication, le Conseil supérieur de la liberté de communication émet des avis techniques et formule des recommandations dans ce domaine."
    },

    {
        question: "Qui peut dissoudre l'Assemblée nationale selon la Constitution congolaise ?",
        reponses: ["Le Premier ministre", "Le Président du Sénat", "La Cour constitutionnelle", "Le Président de la République"],
        bonne: 3,
        explication: "L'article 138 de la Constitution dispose que le Président de la République peut dissoudre l'Assemblée nationale."
    },

    {
        question: "Par quel acte l'Assemblée nationale peut-elle renverser le Gouvernement ?",
        reponses: ["Un référendum", "Une pétition citoyenne", "Un décret présidentiel", "Le vote d'une motion de censure"],
        bonne: 3,
        explication: "L'article 139 de la Constitution prévoit que l'Assemblée nationale peut, par le vote d'une motion de censure, renverser le Gouvernement."
    },

    {
        question: "À quelle majorité une motion de censure doit-elle être adoptée pour renverser le Gouvernement ?",
        reponses: ["La majorité simple", "La majorité absolue", "La majorité qualifiée des trois quarts", "La majorité des deux tiers des membres de l'Assemblée nationale"],
        bonne: 3,
        explication: "La motion de censure est adoptée à la majorité des deux tiers des membres composant l'Assemblée nationale."
    },

    {
        question: "Que doit faire le Premier ministre lorsqu'une motion de censure est adoptée contre le Gouvernement ?",
        reponses: ["Remettre au Président de la République la démission du Gouvernement", "Dissoudre l'Assemblée nationale", "Saisir la Cour constitutionnelle", "Convoquer un référendum"],
        bonne: 0,
        explication: "L'article 161 de la Constitution dispose que lorsque la motion de censure est adoptée, le Premier ministre remet au Président de la République la démission du Gouvernement."
    },

    {
        question: "Qui arrête l'ordre du jour des sessions de chaque chambre du Parlement congolais ?",
        reponses: ["Le Président de la République", "Le Premier ministre", "La Cour constitutionnelle", "Chaque chambre du Parlement elle-même"],
        bonne: 3,
        explication: "L'article 140 de la Constitution prévoit que chaque chambre du Parlement arrête l'ordre du jour de ses sessions."
    },

    {
        question: "Le Premier ministre et les membres du Gouvernement ont-ils accès aux travaux de l'Assemblée nationale et du Sénat ?",
        reponses: ["Non, jamais", "Uniquement lors des lois de finances", "Uniquement sur autorisation du Président de la République", "Oui, ils y ont accès ainsi qu'à leurs commissions"],
        bonne: 3,
        explication: "L'article 141 de la Constitution dispose que le Premier ministre et les autres membres du Gouvernement ont accès aux travaux de l'Assemblée nationale et du Sénat ainsi qu'à ceux de leurs commissions."
    },

    {
        question: "Quel rôle le Parlement exerce-t-il à l'égard de l'action du Gouvernement, selon la Constitution ?",
        reponses: ["Il la contrôle", "Il la dirige seul", "Il ne peut pas s'en préoccuper", "Il la délègue à la Cour constitutionnelle"],
        bonne: 0,
        explication: "L'article 142 de la Constitution dispose que le Parlement contrôle l'action du Gouvernement."
    },

    {
        question: "Quelle juridiction spéciale la Constitution institue-t-elle notamment pour juger le Président de la République en cas de haute trahison ?",
        reponses: ["La Cour suprême", "La Cour constitutionnelle", "Le Conseil supérieur de la magistrature", "La Haute Cour de justice"],
        bonne: 3,
        explication: "L'article 191 de la Constitution institue une Haute Cour de justice."
    },

    {
        question: "Comment sont désignés les membres de la Haute Cour de justice ?",
        reponses: ["Ils sont nommés par le Président de la République", "Ils sont tirés au sort parmi les magistrats", "Ils sont élus par le peuple", "Des députés et des sénateurs élus en nombre égal par leurs pairs"],
        bonne: 3,
        explication: "L'article 191 de la Constitution prévoit que la Haute Cour de justice est composée de députés et de sénateurs élus en nombre égal par leurs pairs."
    },

    {
        question: "Quand débute le mandat du Président de la République selon la Constitution ?",
        reponses: ["Le jour de sa prestation de serment", "Le jour de la proclamation des résultats", "Le jour de son investiture par le Parlement", "Le premier jour de l'année suivant son élection"],
        bonne: 0,
        explication: "L'article 76 de la Constitution dispose que le mandat du Président de la République débute le jour de sa prestation de serment."
    },

    {
        question: "Dans quel délai maximum le Président élu doit-il prêter serment après son élection ?",
        reponses: ["5 jours au plus tard", "10 jours au plus tard", "15 jours au plus tard", "20 jours au plus tard"],
        bonne: 3,
        explication: "L'article 76 de la Constitution prévoit que la prestation de serment du Président de la République élu intervient vingt jours au plus tard après la proclamation des résultats."
    },

    {
        question: "Un député peut-il être poursuivi pour les opinions ou votes qu'il a émis dans l'exercice de ses fonctions ?",
        reponses: ["Oui, systématiquement", "Oui, mais uniquement après la fin de son mandat", "Oui, sur simple plainte d'un citoyen", "Non, il bénéficie d'une immunité"],
        bonne: 3,
        explication: "L'article 130 de la Constitution dispose qu'aucun député ne peut être poursuivi, recherché, détenu ou jugé pour des opinions ou votes émis dans l'exercice de ses fonctions."
    },

    {
        question: "Pendant les sessions parlementaires, un député peut-il être poursuivi ou arrêté sans autorisation ?",
        reponses: ["Non, sauf autorisation de l'Assemblée nationale ou cas de flagrant délit", "Oui, à tout moment", "Oui, sur simple décision du Gouvernement", "Non, en aucun cas, même en cas de crime flagrant"],
        bonne: 0,
        explication: "L'article 130 de la Constitution prévoit qu'aucun député ne peut, pendant la durée des sessions, être poursuivi ou arrêté sans l'autorisation de l'Assemblée nationale, sauf cas de crime ou délit flagrant."
    },

    {
        question: "Que se passe-t-il pour un député en cas d'incompatibilité de son mandat avec une autre fonction ?",
        reponses: ["Il perd définitivement son siège", "Il doit démissionner du Parlement", "Une élection partielle est immédiatement organisée", "Il est remplacé par son suppléant"],
        bonne: 3,
        explication: "En cas d'incompatibilité, le député est remplacé par son suppléant et retrouve de plein droit son siège à la fin de l'incompatibilité."
    },

    {
        question: "Comment chaque député à l'Assemblée nationale congolaise est-il élu, en plus de lui-même ?",
        reponses: ["Seul, sans suppléant", "Avec un vice-député", "Avec un conseiller technique", "Avec un suppléant"],
        bonne: 3,
        explication: "L'article 129 de la Constitution précise que chaque député est élu avec un suppléant."
    },

    {
        question: "Que dispose la Constitution congolaise au sujet de la censure de la presse ?",
        reponses: ["Elle est prohibée", "Elle est autorisée en cas de crise", "Elle relève du Premier ministre", "Elle est soumise à l'accord du Sénat"],
        bonne: 0,
        explication: "La Constitution dispose que la censure de la presse est prohibée et que l'accès aux sources d'information est libre et protégé."
    },

    {
        question: "Combien de sièges compte l'Assemblée nationale de la République du Congo depuis les élections de 2022 ?",
        reponses: ["101 sièges", "121 sièges", "139 sièges", "151 sièges"],
        bonne: 3,
        explication: "L'Assemblée nationale de la République du Congo comprend 151 députés depuis les élections législatives de 2022."
    },

    {
        question: "Comment les 151 députés de l'Assemblée nationale congolaise sont-ils élus ?",
        reponses: ["À la proportionnelle intégrale", "Au scrutin de liste national", "Au suffrage universel indirect", "Au scrutin uninominal majoritaire à deux tours"],
        bonne: 3,
        explication: "Les 151 sièges de l'Assemblée nationale sont pourvus au scrutin uninominal majoritaire à deux tours dans autant de circonscriptions électorales."
    },

    {
        question: "Depuis quand la 15e législature de l'Assemblée nationale congolaise, issue des élections de 2022, est-elle en fonction ?",
        reponses: ["Depuis juillet 2022", "Depuis janvier 2020", "Depuis août 2017", "Depuis mars 2025"],
        bonne: 0,
        explication: "Les élections législatives de 2022 se sont tenues en juillet 2022 (premier tour le 10 juillet, second tour le 31 juillet), donnant naissance à la 15e législature."
    },

    {
        question: "Un sénateur bénéficie-t-il de la même immunité qu'un député pour les opinions et votes émis dans l'exercice de ses fonctions ?",
        reponses: ["Non, les sénateurs n'ont aucune immunité", "Non, cette immunité ne concerne que les députés", "Uniquement s'il est président d'une commission", "Oui, une immunité similaire est prévue pour les sénateurs"],
        bonne: 3,
        explication: "L'article 135 de la Constitution prévoit qu'aucun membre du Sénat ne peut être poursuivi, recherché, détenu ou jugé pour des opinions ou votes émis dans l'exercice de ses fonctions, à l'instar des députés."
    },

    {
        question: "Qui préside l'audience solennelle d'installation du premier président de la Cour des comptes et de discipline budgétaire ?",
        reponses: ["Le Président de la République", "Le ministre de la Justice", "Le Premier Président de la Cour suprême", "Le doyen d'âge de la Cour des comptes et de discipline budgétaire"],
        bonne: 3,
        explication: "Avant d'entrer en fonction, le premier président de la Cour des comptes et de discipline budgétaire est installé au cours d'une audience solennelle présidée par le doyen d'âge de la Cour."
    },

    {
        question: "Quelle obligation pèse sur le Premier ministre ou un ministre invité par une chambre du Parlement ?",
        reponses: ["Assister à la séance et fournir toutes explications utiles", "Démissionner immédiatement", "Dissoudre le Gouvernement", "Saisir la Cour constitutionnelle"],
        bonne: 0,
        explication: "L'article 141 de la Constitution dispose que lorsqu'ils sont invités par une chambre du Parlement, le Premier ministre et les membres du Gouvernement ont l'obligation d'assister à la séance et de fournir toutes explications utiles."
    },

    {
        question: "En quelle année la Cour des comptes et de discipline budgétaire, créée en 2002, a-t-elle été intégrée dans la Constitution congolaise ?",
        reponses: ["2002", "2010", "2012", "2015"],
        bonne: 3,
        explication: "La Cour des comptes et de discipline budgétaire, créée en 2002, a été institutionnalisée en 2015 après son intégration dans la Constitution."
    },

    {
        question: "Le Premier ministre et les membres du Gouvernement peuvent-ils être entendus par le Parlement sur leur propre demande ?",
        reponses: ["Non, jamais", "Uniquement le Premier ministre", "Uniquement lors du vote du budget", "Oui, ils peuvent être entendus sur leur demande"],
        bonne: 3,
        explication: "L'article 141 de la Constitution précise que le Premier ministre et les autres membres du Gouvernement peuvent être entendus par le Parlement sur leur demande."
    },

    {
        question: "Qui informe le Gouvernement de l'ordre du jour arrêté par chaque chambre du Parlement ?",
        reponses: ["Le Médiateur de la République", "La Cour constitutionnelle", "Le Conseil économique, social et environnemental", "Le Président de chaque chambre"],
        bonne: 3,
        explication: "L'article 140 de la Constitution prévoit que le Président de chaque chambre informe le Gouvernement de l'ordre du jour arrêté."
    },
    

    {
        question: "Selon l'article 8 de la Constitution, la peine de mort est-elle appliquée en République du Congo ?",
        reponses: ["Non, elle est abolie", "Oui, pour les crimes les plus graves", "Oui, mais rarement appliquée", "La Constitution ne se prononce pas"],
        bonne: 0,
        explication: "L'article 8 de la Constitution dispose que la peine de mort est abolie en République du Congo."
    },

    {
        question: "Que dispose l'article 8 de la Constitution au sujet du droit à la vie ?",
        reponses: ["La personne humaine est sacrée et a droit à la vie", "Le droit à la vie n'est pas garanti", "Il est soumis à des conditions", "Il ne concerne que les citoyens majeurs"],
        bonne: 0,
        explication: "L'article 8 dispose que la personne humaine est sacrée et a droit à la vie, que l'État a l'obligation de respecter et de protéger."
    },

    {
        question: "Selon l'article 9 de la Constitution, comment tout prévenu est-il considéré jusqu'à sa condamnation ?",
        reponses: ["Présumé innocent", "Coupable jusqu'à preuve du contraire", "Automatiquement détenu", "Sans droits particuliers"],
        bonne: 0,
        explication: "L'article 9 consacre la présomption d'innocence : tout prévenu est présumé innocent jusqu'à ce que sa culpabilité soit établie."
    },

    {
        question: "Un citoyen congolais peut-il être extradé vers une puissance étrangère, selon l'article 10 de la Constitution ?",
        reponses: ["Non, sauf en cas de perte ou de déchéance de sa nationalité", "Oui, systématiquement", "Oui, sur simple demande diplomatique", "Non, en aucun cas, même sans nationalité"],
        bonne: 0,
        explication: "L'article 10 dispose qu'aucun citoyen congolais ne peut être extradé, sauf en cas de perte ou de déchéance de sa nationalité."
    },

    {
        question: "Que dispose la Constitution congolaise au sujet de la torture et des traitements inhumains ?",
        reponses: ["Ils sont interdits", "Ils sont autorisés en cas d'état d'urgence", "Ils sont soumis à autorisation judiciaire", "La Constitution ne s'exprime pas sur ce point"],
        bonne: 0,
        explication: "La Constitution interdit tout acte de torture et tout traitement cruel, inhumain ou dégradant."
    },

    {
        question: "Selon l'article 19 de la Constitution, un Congolais peut-il acquérir une seconde nationalité ?",
        reponses: ["Oui, la Constitution garantit ce droit", "Non, jamais", "Uniquement avec autorisation présidentielle", "Uniquement pour les diplomates"],
        bonne: 0,
        explication: "L'article 19 dispose que tout Congolais a le droit de changer de nationalité ou d'en acquérir une seconde."
    },

    {
        question: "Que dispose l'article 20 de la Constitution au sujet du domicile ?",
        reponses: ["Il est inviolable", "Il peut être perquisitionné sans mandat", "Il appartient à l'État", "Il est soumis à déclaration annuelle"],
        bonne: 0,
        explication: "L'article 20 de la Constitution dispose que le domicile est inviolable."
    },

    {
        question: "Le travail forcé est-il autorisé par la Constitution congolaise ?",
        reponses: ["Non, sauf comme peine prononcée par une juridiction légalement établie", "Oui, dans tous les cas", "Oui, en cas de nécessité économique", "Non, en aucun cas, même comme peine"],
        bonne: 0,
        explication: "Nul ne peut être astreint au travail forcé, sauf en cas de peine privative de liberté prononcée par une juridiction légalement établie."
    },

    {
        question: "La Constitution garantit-elle un droit au repos et aux congés payés ?",
        reponses: ["Oui", "Non", "Uniquement pour les fonctionnaires", "Uniquement pour les femmes"],
        bonne: 0,
        explication: "La Constitution garantit à toute personne le droit au repos et aux loisirs, notamment à des congés périodiques rémunérés."
    },

    {
        question: "La Constitution protège-t-elle les intérêts moraux et matériels résultant d'une œuvre scientifique ou artistique ?",
        reponses: ["Oui, au titre de la propriété intellectuelle", "Non", "Uniquement pour les œuvres publiées à l'étranger", "Uniquement pendant dix ans"],
        bonne: 0,
        explication: "La Constitution garantit à tout citoyen le droit à la protection des intérêts moraux et matériels résultant de ses œuvres."
    },

    {
        question: "Qui décrète l'état d'urgence ou l'état de siège en République du Congo ?",
        reponses: ["Le Président de la République en Conseil des ministres", "Le Premier ministre seul", "L'Assemblée nationale", "La Cour constitutionnelle"],
        bonne: 0,
        explication: "L'état d'urgence, comme l'état de siège, est décrété par le Président de la République en Conseil des ministres."
    },

    {
        question: "Que se passe-t-il pour le Parlement lorsque l'état de siège ou l'état d'urgence est décrété ?",
        reponses: ["Il se réunit de plein droit", "Il est dissous automatiquement", "Il est suspendu pour la durée de l'état d'urgence", "Il transfère ses pouvoirs au Gouvernement"],
        bonne: 0,
        explication: "Lorsque l'état d'urgence ou l'état de siège est décrété, le Parlement se réunit de plein droit."
    },

    {
        question: "Une révision de la Constitution peut-elle intervenir pendant un état de guerre, d'urgence ou de siège ?",
        reponses: ["Non, la révision est alors interdite", "Oui, sans restriction", "Oui, mais uniquement par référendum", "Oui, avec l'accord du Sénat uniquement"],
        bonne: 0,
        explication: "Aucune révision de la Constitution ne peut intervenir durant un état de guerre, d'urgence ou de siège."
    },

    {
        question: "Une révision de la Constitution peut-elle intervenir lorsque les pouvoirs du Président sont exercés par intérim ?",
        reponses: ["Non, la révision est alors exclue", "Oui, sans condition", "Oui, uniquement si le Sénat l'approuve", "Oui, mais seulement pour les questions économiques"],
        bonne: 0,
        explication: "La révision constitutionnelle est exclue lorsque les pouvoirs présidentiels sont exercés par intérim, notamment par le Président du Sénat."
    },

    {
        question: "Les séances des chambres du Parlement congolais sont-elles publiques par principe ?",
        reponses: ["Oui, sauf exception de huis clos", "Non, elles sont toujours secrètes", "Oui, mais seulement pour l'Assemblée nationale", "Non, elles ne le sont que pour le vote du budget"],
        bonne: 0,
        explication: "L'article 122 de la Constitution dispose que les séances de chaque chambre du Parlement sont publiques, sauf demande de huis clos."
    },

    {
        question: "Qui peut demander qu'une chambre du Parlement siège à huis clos ?",
        reponses: ["Le Président de la République, le Président de la chambre, ou un tiers de ses membres", "Uniquement le Président de la République", "Uniquement les journalistes accrédités", "Uniquement le Premier ministre"],
        bonne: 0,
        explication: "Le huis clos peut être demandé par le Président de la République, le Président de la chambre concernée, ou un tiers de ses membres."
    },

    {
        question: "En cas de vacance de la présidence de l'Assemblée nationale par décès ou démission, que se passe-t-il ?",
        reponses: ["La chambre élit un nouveau président", "L'Assemblée nationale est dissoute", "Le Sénat prend le contrôle de l'Assemblée nationale", "Le poste reste vacant jusqu'aux élections suivantes"],
        bonne: 0,
        explication: "En cas de vacance de la présidence d'une chambre, celle-ci élit un nouveau président."
    },

    {
        question: "Qui vote la loi en République du Congo, selon l'article 124 de la Constitution ?",
        reponses: ["Le Parlement seul", "Le Président de la République", "Le Gouvernement", "La Cour constitutionnelle"],
        bonne: 0,
        explication: "L'article 124 dispose que le Parlement vote seul la loi."
    },

    {
        question: "À quel moment de l'année le projet de loi de finances est-il soumis au Parlement ?",
        reponses: ["Dès l'ouverture de la session d'octobre", "En janvier uniquement", "Le jour de la fête nationale", "À la demande du Président de la République uniquement"],
        bonne: 0,
        explication: "Le Parlement est saisi du projet de loi de finances dès l'ouverture de la session d'octobre."
    },

    {
        question: "Dans quelles circonstances les mandats de député ou sénateur peuvent-ils être prolongés par la Cour constitutionnelle ?",
        reponses: ["En cas de circonstances exceptionnellement graves empêchant les élections", "Jamais, ils ne peuvent pas être prolongés", "Sur simple demande du titulaire du mandat", "Uniquement en cas de guerre déclarée"],
        bonne: 0,
        explication: "La Cour constitutionnelle peut prolonger les mandats de député ou sénateur en cas de circonstances exceptionnellement graves empêchant le déroulement normal des élections."
    },

    {
        question: "Les magistrats du siège sont-ils inamovibles selon la Constitution congolaise ?",
        reponses: ["Oui, les magistrats du siège sont inamovibles", "Non, ils peuvent être déplacés librement", "Uniquement les juges de la Cour suprême", "Non, seuls les magistrats du parquet le sont"],
        bonne: 0,
        explication: "La Constitution dispose que les magistrats du siège sont inamovibles, garantie de l'indépendance judiciaire."
    },

    {
        question: "Combien de titres compose la Constitution de la République du Congo de 2015 ?",
        reponses: ["Dix titres", "Douze titres", "Dix-sept titres", "Vingt-cinq titres"],
        bonne: 2,
        explication: "La Constitution de 2015 comprend dix-sept titres, du préambule aux dispositions finales."
    },

    {
        question: "Quel titre de la Constitution est consacré à la Cour des comptes et de discipline budgétaire ?",
        reponses: ["Le titre 8", "Le titre 10", "Le titre 9", "Le titre 11"],
        bonne: 2,
        explication: "Le titre 9 de la Constitution est consacré à la Cour des comptes et de discipline budgétaire."
    },

    {
        question: "Quel titre de la Constitution est consacré à la Haute Cour de justice ?",
        reponses: ["Le titre 8", "Le titre 9", "Le titre 10", "Le titre 12"],
        bonne: 2,
        explication: "Le titre 10 de la Constitution est consacré à la Haute Cour de justice."
    },

    {
        question: "Quel titre de la Constitution est consacré au Médiateur de la République ?",
        reponses: ["Le titre 11", "Le titre 13", "Le titre 12", "Le titre 14"],
        bonne: 2,
        explication: "Le titre 12 de la Constitution est consacré au Médiateur de la République."
    },

    {
        question: "Quel titre de la Constitution est consacré à la force publique ?",
        reponses: ["Le titre 12", "Le titre 14", "Le titre 13", "Le titre 15"],
        bonne: 2,
        explication: "Le titre 13 de la Constitution est consacré à la force publique."
    },

    {
        question: "Quel titre de la Constitution est consacré aux collectivités locales ?",
        reponses: ["Le titre 13", "Le titre 15", "Le titre 14", "Le titre 16"],
        bonne: 2,
        explication: "Le titre 14 de la Constitution est consacré aux collectivités locales."
    },

    {
        question: "Quel titre de la Constitution est consacré au Conseil supérieur de la liberté de communication ?",
        reponses: ["Le titre 14", "Le titre 16", "Le titre 15", "Le titre 17"],
        bonne: 2,
        explication: "Le titre 15 de la Constitution est consacré au Conseil supérieur de la liberté de communication."
    },

    {
        question: "Quel titre de la Constitution est consacré à la Commission nationale des droits de l'homme ?",
        reponses: ["Le titre 15", "Le titre 17", "Le titre 16", "Le titre 18"],
        bonne: 2,
        explication: "Le titre 16 de la Constitution est consacré à la Commission nationale des droits de l'homme."
    },

    {
        question: "Quel titre de la Constitution est consacré au Conseil économique, social et environnemental ?",
        reponses: ["Le titre 9", "Le titre 10", "Le titre 11", "Le titre 12"],
        bonne: 2,
        explication: "Le titre 11 de la Constitution est consacré au Conseil économique, social et environnemental."
    },

    {
        question: "Quel titre de la Constitution traite des rapports entre le pouvoir exécutif et le pouvoir législatif ?",
        reponses: ["Le titre 4", "Le titre 5", "Le titre 6", "Le titre 7"],
        bonne: 2,
        explication: "Le titre 6 de la Constitution traite des rapports entre le pouvoir exécutif et le pouvoir législatif."
    },

    {
        question: "Quel titre de la Constitution est consacré aux droits, libertés et devoirs des citoyens ?",
        reponses: ["Le titre 1", "Le titre 3", "Le titre 2", "Le titre 4"],
        bonne: 2,
        explication: "Le titre 2 de la Constitution est consacré aux droits, libertés et devoirs des citoyens."
    },

    {
        question: "Quel titre de la Constitution est consacré aux partis politiques et au statut de l'opposition ?",
        reponses: ["Le titre 2", "Le titre 4", "Le titre 3", "Le titre 5"],
        bonne: 2,
        explication: "Le titre 3 de la Constitution est consacré aux partis politiques et au statut de l'opposition."
    },

    {
        question: "Le préambule de la Constitution congolaise se réfère-t-il à la Déclaration universelle des droits de l'Homme de 1948 ?",
        reponses: ["Non", "Uniquement de manière indirecte", "Oui", "Non, seulement à la Charte africaine"],
        bonne: 2,
        explication: "Le préambule déclare partie intégrante de la Constitution les principes de la Déclaration universelle des droits de l'Homme du 10 décembre 1948."
    },

    {
        question: "Le préambule de la Constitution se réfère-t-il à la Charte africaine des droits de l'Homme et des peuples ?",
        reponses: ["Non", "Oui, mais seulement de façon informelle", "Oui, celle du 26 juin 1981", "Non, uniquement à la charte de l'ONU"],
        bonne: 2,
        explication: "Le préambule se réfère à la Charte africaine des droits de l'Homme et des Peuples du 26 juin 1981."
    },

    {
        question: "Que condamne expressément le préambule de la Constitution congolaise ?",
        reponses: ["Le coup d'État et l'exercice tyrannique du pouvoir", "La liberté de la presse", "La décentralisation", "Le multipartisme"],
        bonne: 0,
        explication: "Le préambule condamne le coup d'État, l'exercice tyrannique du pouvoir et l'usage de la violence politique comme moyens d'accession au pouvoir."
    },

    {
        question: "La Charte de l'unité nationale de 1991 est-elle mentionnée dans le préambule de la Constitution ?",
        reponses: ["Non", "Oui, mais seulement dans une version antérieure", "Oui, ainsi que la Charte des droits et des libertés du 29 mai 1991", "Non, seulement les textes internationaux le sont"],
        bonne: 2,
        explication: "Le préambule mentionne la Charte de l'unité nationale et la Charte des droits et des libertés du 29 mai 1991."
    },

    {
        question: "Que dispose la Constitution congolaise au sujet du droit à un environnement sain ?",
        reponses: ["Il n'est pas mentionné", "Il ne concerne que les zones protégées", "Il est reconnu comme un droit du citoyen", "Il relève uniquement de la loi ordinaire"],
        bonne: 2,
        explication: "La Constitution reconnaît le droit de chaque citoyen à un environnement sain, satisfaisant et durable."
    },

    {
        question: "La liberté syndicale est-elle reconnue par la Constitution congolaise ?",
        reponses: ["Non", "Uniquement pour les fonctionnaires", "Oui", "Uniquement pour le secteur privé"],
        bonne: 2,
        explication: "La Constitution reconnaît la liberté syndicale à tout citoyen."
    },

    {
        question: "Le droit de grève est-il reconnu par la Constitution congolaise ?",
        reponses: ["Non, il est interdit", "Oui, sans aucune limite", "Oui, dans les conditions fixées par la loi", "Uniquement pour les enseignants"],
        bonne: 2,
        explication: "Le droit de grève est reconnu par la Constitution, dans les conditions fixées par la loi."
    },

    {
        question: "La liberté de la presse, telle qu'affirmée par la Constitution, est-elle absolue ou encadrée par la loi ?",
        reponses: ["Absolue, sans aucune limite", "Elle n'est pas mentionnée", "Encadrée par la loi", "Réservée aux médias publics"],
        bonne: 2,
        explication: "La liberté de la presse est affirmée par la Constitution mais s'exerce dans les conditions fixées par la loi."
    },

    {
        question: "Selon la Constitution, à qui appartient la souveraineté nationale en République du Congo ?",
        reponses: ["Au Président de la République", "Au Parlement", "Au peuple", "À la Cour constitutionnelle"],
        bonne: 2,
        explication: "La souveraineté nationale appartient au peuple, qui l'exerce par ses représentants ou par voie de référendum."
    },

    {
        question: "Comment le peuple congolais peut-il exercer directement sa souveraineté, en dehors de l'élection de représentants ?",
        reponses: ["Par voie de référendum", "Uniquement par pétition", "Par saisine directe de la Cour constitutionnelle", "Il ne peut pas l'exercer directement"],
        bonne: 0,
        explication: "Le peuple exerce sa souveraineté par ses représentants élus ou directement par voie de référendum."
    },

    {
        question: "Quelle est la nature du drapeau décrit dans la Constitution congolaise ?",
        reponses: ["Un drapeau tricolore horizontal", "Un drapeau uni rouge", "Un drapeau tricolore avec une bande diagonale jaune", "Un drapeau à croix"],
        bonne: 2,
        explication: "La Constitution décrit le drapeau national comme tricolore vert, jaune et rouge, avec une bande jaune diagonale."
    },

    {
        question: "La Constitution fixe-t-elle le sceau de l'État ?",
        reponses: ["Non, ce n'est pas mentionné", "Uniquement pour usage militaire", "Oui, parmi les symboles de la République", "Uniquement pour les traités internationaux"],
        bonne: 2,
        explication: "La Constitution mentionne le sceau parmi les symboles de la République, aux côtés du drapeau, de l'hymne et de la devise."
    },

    {
        question: "La République du Congo reconnaît-elle constitutionnellement le principe de laïcité de l'État ?",
        reponses: ["Non", "Uniquement pour les écoles publiques", "Oui, l'article 1er qualifie l'État de laïc", "Non, la religion d'État est le christianisme"],
        bonne: 2,
        explication: "L'article 1er de la Constitution qualifie la République du Congo d'État laïc."
    },

    {
        question: "La Constitution garantit-elle la liberté de religion et de culte ?",
        reponses: ["Non", "Uniquement pour les religions reconnues officiellement", "Oui", "Uniquement pour le christianisme"],
        bonne: 2,
        explication: "La Constitution garantit la liberté de religion et de culte à tous les citoyens."
    },

    {
        question: "Le mariage est-il défini dans la Constitution congolaise comme relevant de l'ordre public ?",
        reponses: ["Non, il relève uniquement du droit coutumier", "Non, il n'est pas mentionné", "Oui, l'État protège la famille, base de la société", "Uniquement pour les mariages religieux"],
        bonne: 2,
        explication: "La Constitution dispose que l'État protège la famille, cellule de base de la société."
    },

    {
        question: "La protection de la femme et de l'enfant est-elle explicitement prévue par la Constitution congolaise ?",
        reponses: ["Non", "Uniquement pour les enfants scolarisés", "Uniquement dans les zones rurales", "Oui"],
        bonne: 3,
        explication: "La Constitution prévoit explicitement la protection de la femme et de l'enfant par l'État."
    },

    {
        question: "Le droit à l'éducation est-il consacré par la Constitution congolaise ?",
        reponses: ["Non", "Uniquement pour les filles", "Uniquement pour l'enseignement supérieur", "Oui, l'enseignement primaire est notamment obligatoire"],
        bonne: 3,
        explication: "La Constitution consacre le droit à l'éducation, avec un enseignement primaire obligatoire."
    },

    {
        question: "Le droit à la santé est-il reconnu par la Constitution congolaise ?",
        reponses: ["Non", "Uniquement en cas d'épidémie", "Uniquement pour les fonctionnaires", "Oui, l'État a le devoir de veiller à la santé de la population"],
        bonne: 3,
        explication: "La Constitution reconnaît le droit à la santé et l'obligation pour l'État d'y veiller."
    },

    {
        question: "La propriété privée est-elle protégée par la Constitution congolaise ?",
        reponses: ["Non, toute propriété appartient à l'État", "Non, elle n'est pas mentionnée", "Oui, sans aucune exception possible", "Oui, sauf expropriation pour cause d'utilité publique et juste indemnisation"],
        bonne: 3,
        explication: "La Constitution protège la propriété privée, sous réserve d'expropriation pour cause d'utilité publique moyennant une juste indemnisation."
    },

    {
        question: "La liberté d'entreprendre est-elle garantie par la Constitution congolaise ?",
        reponses: ["Non", "Uniquement pour les investisseurs étrangers", "Uniquement pour les entreprises publiques", "Oui"],
        bonne: 3,
        explication: "La liberté d'entreprendre est garantie par la Constitution congolaise, dans le cadre des lois et règlements."
    },

    {
        question: "Comment la Constitution qualifie-t-elle la République du Congo au regard de la forme de l'État ?",
        reponses: ["Un État fédéral", "Une monarchie constitutionnelle", "Un État confédéral", "Un État unitaire décentralisé"],
        bonne: 3,
        explication: "L'article 1er qualifie la République du Congo d'État unitaire, décentralisé."
    },

    {
        question: "Combien de fois la Constitution de la République du Congo a-t-elle été modifiée depuis son adoption en 2015 ?",
        reponses: ["Jamais", "Cinq fois", "Trois fois", "Une fois, en 2022"],
        bonne: 3,
        explication: "La Constitution de 2015 a été modifiée une fois, par la loi constitutionnelle n°2-2022 du 7 janvier 2022."
    },

    {
        question: "Quel article de la Constitution a été révisé par la loi constitutionnelle n°2-2022 ?",
        reponses: ["L'article 65", "L'article 1er", "L'article 182", "L'article 157"],
        bonne: 3,
        explication: "La loi constitutionnelle n°2-2022 a révisé l'article 157 de la Constitution du 25 octobre 2015."
    },

    {
        question: "Qui a l'initiative de la révision de la Constitution, concurremment avec le Parlement ?",
        reponses: ["Le Président de la République", "La Cour constitutionnelle", "Le Médiateur de la République", "Le Conseil économique et social"],
        bonne: 0,
        explication: "L'initiative de la révision constitutionnelle appartient concurremment au Président de la République et aux membres du Parlement."
    },

    {
        question: "Un projet de révision constitutionnelle doit-il être approuvé par référendum ?",
        reponses: ["Toujours, sans exception", "Uniquement si le Président le refuse", "Jamais, le Parlement seul décide", "Oui, sauf si le Congrès l'adopte à une majorité qualifiée"],
        bonne: 3,
        explication: "Un projet de révision constitutionnelle est en principe soumis au référendum, sauf s'il est adopté par le Congrès à une majorité qualifiée."
    },

    {
        question: "La forme républicaine de l'État peut-elle faire l'objet d'une révision constitutionnelle, selon les principes habituels des Constitutions d'inspiration française ?",
        reponses: ["Oui, sans restriction", "Cela dépend du Premier ministre", "Oui, par simple loi ordinaire", "Non, elle est généralement protégée comme clause intangible"],
        bonne: 3,
        explication: "Comme dans plusieurs Constitutions francophones, la forme républicaine de l'État est généralement protégée comme clause intangible non révisable."
    },

    {
        question: "Qui compose la force publique selon le titre 13 de la Constitution congolaise ?",
        reponses: ["Uniquement l'armée", "Uniquement la gendarmerie", "Uniquement la police nationale", "Les forces armées et les forces de sécurité intérieure"],
        bonne: 3,
        explication: "La force publique comprend les forces armées et les forces de sécurité intérieure de la République du Congo."
    },

    {
        question: "La force publique est-elle soumise à l'autorité civile selon la Constitution ?",
        reponses: ["Non, elle est autonome", "Uniquement pour la gendarmerie", "Uniquement en temps de paix", "Oui, elle est soumise à l'autorité civile"],
        bonne: 3,
        explication: "La force publique est soumise à l'autorité civile, conformément aux principes constitutionnels."
    },

    {
        question: "Le Président de la République est-il le chef suprême des armées selon la Constitution congolaise ?",
        reponses: ["Non, c'est le Premier ministre", "Non, ce rôle revient au chef d'état-major", "Non, c'est le ministre de la Défense", "Oui"],
        bonne: 3,
        explication: "Le Président de la République est le chef suprême des armées selon la Constitution congolaise."
    },

    {
        question: "Qui négocie et ratifie les traités internationaux au nom de la République du Congo ?",
        reponses: ["Le Premier ministre", "Le ministre des Affaires étrangères seul, sans validation présidentielle", "Le Président de l'Assemblée nationale", "Le Président de la République"],
        bonne: 3,
        explication: "Le Président de la République négocie et ratifie les traités internationaux."
    },

    {
        question: "Certains traités internationaux doivent-ils être approuvés par une loi avant ratification par le Président ?",
        reponses: ["Non, jamais", "Uniquement les traités signés avec la France", "Non, la ratification présidentielle suffit toujours", "Oui, notamment les traités de paix ou de commerce"],
        bonne: 3,
        explication: "Certains traités, comme les traités de paix ou de commerce, doivent être approuvés par une loi avant leur ratification."
    },

    {
        question: "Les traités régulièrement ratifiés ont-ils une autorité supérieure aux lois internes, selon les principes constitutionnels congolais ?",
        reponses: ["Non, les lois internes priment toujours", "Non, ils ont valeur simplement indicative", "Cela dépend du type de traité uniquement", "Oui, sous réserve de réciprocité"],
        bonne: 3,
        explication: "Les traités ou accords régulièrement ratifiés ont, dès leur publication, une autorité supérieure à celle des lois, sous réserve de réciprocité."
    },

    {
        question: "La Constitution reconnaît-elle un droit d'asile pour les personnes persécutées ?",
        reponses: ["Non", "Uniquement pour les réfugiés climatiques", "Uniquement pour les ressortissants de la CEMAC", "Oui, pour les personnes persécutées en raison de leur action pour la liberté"],
        bonne: 3,
        explication: "La Constitution reconnaît le droit d'asile pour les personnes persécutées en raison de leur action en faveur de la liberté et de la démocratie."
    },

    {
        question: "Combien de membres composent le Conseil économique, social et environnemental de la République du Congo, selon les textes organiques ?",
        reponses: ["30 membres", "200 membres", "120 membres", "60 membres"],
        bonne: 3,
        explication: "Le Conseil économique, social et environnemental de la République du Congo compte environ 60 membres, selon les textes organiques."
    },

    {
        question: "Combien de membres composent la Commission nationale des droits de l'homme ?",
        reponses: ["9 membres", "45 membres", "30 membres", "15 membres"],
        bonne: 3,
        explication: "La Commission nationale des droits de l'homme est composée d'environ 15 membres, selon les textes organiques."
    },

    {
        question: "Quel est le rôle du Conseil supérieur de la liberté de communication en matière de nomination des dirigeants des médias publics ?",
        reponses: ["Il n'a aucun rôle", "Il n'intervient qu'en cas de litige commercial", "Il nomme uniquement les journalistes stagiaires", "Il donne un avis ou nomme certains responsables des médias publics"],
        bonne: 3,
        explication: "Le Conseil supérieur de la liberté de communication donne un avis, voire nomme certains responsables des médias publics, selon les textes organiques."
    },

    {
        question: "La Constitution prévoit-elle un statut particulier pour les anciens présidents de la République ?",
        reponses: ["Non, aucun statut particulier", "Ils siègent automatiquement au Sénat", "Ils redeviennent de simples citoyens sans distinction", "Oui, un statut d'ancien chef de l'État est prévu par la loi"],
        bonne: 3,
        explication: "La loi prévoit un statut particulier pour les anciens présidents de la République du Congo."
    },

    {
        question: "Le budget de l'État congolais est-il voté chaque année par le Parlement ?",
        reponses: ["Non, il est fixé par décret présidentiel", "Oui, mais seulement tous les cinq ans", "Non, il est reconduit automatiquement", "Oui, dans le cadre de la loi de finances"],
        bonne: 3,
        explication: "Le budget de l'État est voté chaque année par le Parlement dans le cadre de la loi de finances."
    },

    {
        question: "Que se passe-t-il si le Parlement ne s'est pas prononcé sur le projet de loi de finances dans le délai constitutionnel ?",
        reponses: ["Le budget de l'année précédente est reconduit indéfiniment", "Le pays reste sans budget", "Le Gouvernement démissionne automatiquement", "Le Président peut mettre en vigueur le budget par ordonnance"],
        bonne: 3,
        explication: "Si le Parlement ne s'est pas prononcé dans les délais, le Président de la République peut mettre en vigueur le projet de loi de finances par ordonnance."
    },

    {
        question: "Qui contrôle l'exécution des lois de finances votées par le Parlement ?",
        reponses: ["Le Parlement, assisté de la Cour des comptes", "Le Président de la République seul", "Le Conseil économique et social", "Le Médiateur de la République"],
        bonne: 0,
        explication: "Le Parlement contrôle l'exécution des lois de finances, assisté par la Cour des comptes et de discipline budgétaire."
    },

    {
        question: "Le Premier ministre peut-il engager la responsabilité du Gouvernement sur un texte devant l'Assemblée nationale ?",
        reponses: ["Non, ce mécanisme n'existe pas", "Uniquement en début de législature", "Uniquement pour les lois de finances", "Oui, un mécanisme proche de l'engagement de responsabilité existe"],
        bonne: 3,
        explication: "Le Premier ministre dispose, comme dans plusieurs régimes inspirés du modèle français, d'un mécanisme d'engagement de la responsabilité du Gouvernement sur un texte."
    },

    {
        question: "Les ministres peuvent-ils cumuler leur fonction avec un mandat parlementaire selon la Constitution congolaise ?",
        reponses: ["Oui, sans restriction", "Cela dépend du parti politique", "Oui, mais seulement pour le Premier ministre", "Non, les fonctions gouvernementales sont incompatibles avec le mandat parlementaire"],
        bonne: 3,
        explication: "Les fonctions de membre du Gouvernement sont incompatibles avec l'exercice d'un mandat parlementaire, selon le principe de séparation des pouvoirs repris par la Constitution."
    },

    {
        question: "Le Président de la République peut-il être également chef d'un parti politique tout en exerçant ses fonctions ?",
        reponses: ["Non, c'est interdit par la Constitution", "Oui, la Constitution ne l'interdit pas explicitement", "Non, il doit démissionner de tout parti dès son élection", "Uniquement s'il obtient l'accord du Parlement"],
        bonne: 1,
        explication: "La Constitution congolaise n'interdit pas explicitement au Président de la République de conserver des responsabilités partisanes."
    },

    {
        question: "Le Congrès du Parlement congolais réunit-il l'Assemblée nationale et le Sénat en une seule séance ?",
        reponses: ["Non, ils siègent toujours séparément", "Oui, notamment pour certaines révisions constitutionnelles", "Oui, mais uniquement pour le vote du budget", "Non, cette procédure n'existe pas au Congo"],
        bonne: 1,
        explication: "Le Congrès réunit l'Assemblée nationale et le Sénat en une seule séance, notamment pour certaines procédures de révision constitutionnelle."
    },

    {
        question: "Une loi organique doit-elle être soumise à la Cour constitutionnelle avant sa promulgation ?",
        reponses: ["Non, jamais", "Oui, systématiquement avant promulgation", "Uniquement si un tiers des députés le demande", "Uniquement pour les lois de finances"],
        bonne: 1,
        explication: "Les lois organiques doivent être soumises à la Cour constitutionnelle avant leur promulgation."
    },

    {
        question: "Une loi ordinaire doit-elle obligatoirement être soumise à la Cour constitutionnelle avant promulgation ?",
        reponses: ["Oui, systématiquement", "Non, sauf saisine par les autorités habilitées", "Oui, mais seulement pour les lois fiscales", "Non, aucune loi n'est jamais contrôlée"],
        bonne: 1,
        explication: "Une loi ordinaire n'est examinée par la Cour constitutionnelle qu'en cas de saisine par les autorités habilitées."
    },

    {
        question: "Le Président de la République peut-il légiférer par ordonnance en dehors des sessions parlementaires ?",
        reponses: ["Non, jamais", "Oui, dans certaines conditions prévues par la Constitution", "Oui, sans aucune limite de domaine", "Non, seul le Parlement peut légiférer, en toutes circonstances"],
        bonne: 1,
        explication: "Le Président de la République peut, dans certaines conditions et sur habilitation, légiférer par ordonnance en dehors des sessions parlementaires."
    },

    {
        question: "Une ordonnance présidentielle doit-elle être ratifiée par le Parlement pour conserver force de loi ?",
        reponses: ["Non, elle a valeur définitive dès sa signature", "Oui, elle doit être ratifiée dans un délai déterminé", "Non, elle n'a jamais force de loi", "Oui, mais seulement après dix ans"],
        bonne: 1,
        explication: "Une ordonnance doit être ratifiée par le Parlement dans un délai déterminé pour conserver force de loi."
    },

    {
        question: "Le Sénat congolais peut-il initier des lois, comme l'Assemblée nationale ?",
        reponses: ["Non, seule l'Assemblée nationale le peut", "Oui, l'initiative des lois appartient concurremment aux deux chambres et au Gouvernement", "Non, seul le Gouvernement a l'initiative des lois", "Oui, mais seulement pour les lois de finances"],
        bonne: 1,
        explication: "L'initiative des lois appartient concurremment au Premier ministre et aux membres du Parlement, y compris les sénateurs."
    },

    {
        question: "En cas de désaccord entre l'Assemblée nationale et le Sénat sur un texte de loi, quelle procédure peut être engagée ?",
        reponses: ["Le texte est automatiquement rejeté", "Une commission mixte paritaire peut être réunie", "Le Président de la République tranche seul", "Le texte est soumis à référendum"],
        bonne: 1,
        explication: "En cas de désaccord entre les deux chambres, une commission mixte paritaire peut être réunie pour proposer un texte de compromis."
    },

    {
        question: "En dernier ressort, si le désaccord persiste entre les deux chambres, qui peut trancher définitivement ?",
        reponses: ["Le Président de la République", "L'Assemblée nationale, statuant définitivement", "Le Sénat, statuant définitivement", "La Cour constitutionnelle"],
        bonne: 1,
        explication: "En cas de désaccord persistant, l'Assemblée nationale peut être appelée à statuer définitivement, selon les principes du bicamérisme inégalitaire."
    },

    {
        question: "Le Sénat congolais dispose-t-il d'un droit de veto définitif sur les lois de finances ?",
        reponses: ["Oui, un droit de veto total", "Non, l'Assemblée nationale a le dernier mot", "Oui, mais seulement pour les impôts locaux", "Non, le Sénat ne peut jamais examiner ces lois"],
        bonne: 1,
        explication: "Sur les lois de finances, comme sur les autres textes, l'Assemblée nationale dispose en dernier ressort d'une préséance sur le Sénat en cas de désaccord persistant."
    },

    {
        question: "Combien de sessions ordinaires le Parlement congolais tient-il chaque année, selon la pratique constitutionnelle ?",
        reponses: ["Une seule", "Deux", "Trois", "Quatre"],
        bonne: 1,
        explication: "Le Parlement congolais tient traditionnellement deux sessions ordinaires par an."
    },

    {
        question: "Qui peut convoquer le Parlement en session extraordinaire ?",
        reponses: ["Uniquement le Premier ministre", "Le Président de la République, sur un ordre du jour déterminé", "Uniquement le Président de l'Assemblée nationale", "Le Parlement ne peut jamais être convoqué en session extraordinaire"],
        bonne: 1,
        explication: "Le Parlement peut être convoqué en session extraordinaire par le Président de la République, sur un ordre du jour déterminé."
    },

    {
        question: "Une session extraordinaire du Parlement est-elle limitée dans sa durée ?",
        reponses: ["Non, elle peut durer indéfiniment", "Oui, elle est généralement limitée à une durée fixée par la Constitution ou la loi", "Non, il n'existe pas de session extraordinaire au Congo", "Oui, elle dure obligatoirement un an"],
        bonne: 1,
        explication: "Une session extraordinaire du Parlement est en principe limitée dans sa durée par les textes constitutionnels."
    },

    {
        question: "Le Gouvernement est-il responsable devant le Sénat comme il l'est devant l'Assemblée nationale ?",
        reponses: ["Oui, de la même manière", "Non, la responsabilité gouvernementale s'exerce principalement devant l'Assemblée nationale", "Non, il n'est responsable devant aucune chambre", "Oui, mais uniquement pour la politique étrangère"],
        bonne: 1,
        explication: "La responsabilité politique du Gouvernement s'exerce principalement devant l'Assemblée nationale, et non devant le Sénat."
    },

    {
        question: "La Constitution prévoit-elle la création de circonscriptions électorales spécifiques pour les Congolais de l'étranger ?",
        reponses: ["Non, ils ne votent jamais", "Oui, dans le cadre fixé par la loi électorale", "Uniquement pour l'élection présidentielle", "Uniquement pour le Sénat"],
        bonne: 1,
        explication: "La loi électorale peut prévoir des dispositions particulières pour la représentation ou le vote des Congolais résidant à l'étranger."
    },

    {
        question: "Quel organe est chargé d'organiser matériellement les élections en République du Congo, en lien avec le ministère de l'Intérieur ?",
        reponses: ["La Cour constitutionnelle", "Une commission ou un organe électoral national", "Le Médiateur de la République", "Le Conseil économique et social"],
        bonne: 1,
        explication: "L'organisation matérielle des élections relève d'un organe électoral national, en lien avec l'administration territoriale."
    },

    {
        question: "Un référendum peut-il être organisé pour réviser la Constitution congolaise ?",
        reponses: ["Non, jamais", "Oui, c'est l'une des voies de révision constitutionnelle prévues", "Uniquement pour les lois ordinaires", "Non, seul le Parlement peut réviser la Constitution"],
        bonne: 1,
        explication: "Le référendum est l'une des voies prévues pour l'adoption d'une révision constitutionnelle en République du Congo."
    },

    {
        question: "Qui peut décider de soumettre un projet de loi au référendum, en dehors des révisions constitutionnelles ?",
        reponses: ["Uniquement le Parlement", "Le Président de la République, sur certains sujets d'intérêt national", "Uniquement les citoyens par voie de pétition", "La Cour constitutionnelle"],
        bonne: 1,
        explication: "Le Président de la République peut soumettre au référendum tout projet de loi portant sur des sujets d'intérêt national."
    },

    {
        question: "La Constitution reconnaît-elle un droit de pétition aux citoyens congolais ?",
        reponses: ["Non", "Oui", "Uniquement pour les fonctionnaires", "Uniquement pour les personnes morales"],
        bonne: 1,
        explication: "La Constitution reconnaît aux citoyens un droit de pétition auprès des pouvoirs publics."
    },

    {
        question: "Le principe de la présomption d'innocence s'applique-t-il devant toutes les juridictions congolaises ?",
        reponses: ["Non, seulement devant la Cour suprême", "Oui, il s'agit d'un principe général de procédure", "Non, uniquement en matière civile", "Oui, mais seulement pour les mineurs"],
        bonne: 1,
        explication: "La présomption d'innocence est un principe général applicable devant l'ensemble des juridictions congolaises."
    },

    {
        question: "Les décisions de justice rendues en République du Congo doivent-elles être motivées ?",
        reponses: ["Non", "Oui, en principe", "Uniquement pour les décisions de la Cour constitutionnelle", "Uniquement en matière pénale"],
        bonne: 1,
        explication: "Les décisions de justice doivent, en principe, être motivées, conformément aux garanties d'un procès équitable."
    },

    {
        question: "Le droit à un procès équitable est-il garanti par la Constitution congolaise ?",
        reponses: ["Non", "Oui, notamment par l'article 9", "Uniquement pour les affaires pénales", "Uniquement pour les personnes de nationalité congolaise"],
        bonne: 1,
        explication: "L'article 9 de la Constitution garantit le droit à un procès juste et équitable, respectant les droits de la défense."
    },

    {
        question: "Les droits de la victime sont-ils mentionnés par la Constitution congolaise, à côté de ceux du prévenu ?",
        reponses: ["Non, seuls les droits du prévenu sont mentionnés", "Oui, l'article 9 garantit aussi les droits de la victime", "Uniquement en cas de crime grave", "Non, ils relèvent uniquement du droit civil"],
        bonne: 1,
        explication: "L'article 9 de la Constitution garantit à la fois les droits de la défense du prévenu et les droits de la victime."
    },

    {
        question: "Le Conseil supérieur de la magistrature intervient-il dans la nomination des magistrats du parquet ?",
        reponses: ["Non, uniquement pour les magistrats du siège", "Oui, il intervient également pour les magistrats du parquet", "Non, cette compétence appartient au seul ministre de la Justice", "Oui, mais uniquement pour les procureurs généraux"],
        bonne: 1,
        explication: "Le Conseil supérieur de la magistrature intervient dans la gestion de la carrière de l'ensemble des magistrats, y compris ceux du parquet."
    },

    {
        question: "Le ministère public devant les juridictions congolaises est-il placé sous l'autorité du ministre de la Justice ?",
        reponses: ["Non, il est totalement indépendant", "Oui, dans une certaine mesure, selon l'organisation judiciaire", "Non, il dépend du Président de la République uniquement", "Oui, mais uniquement en matière civile"],
        bonne: 1,
        explication: "Le ministère public est, dans une certaine mesure, placé sous l'autorité du ministre de la Justice, garde des Sceaux."
    }




];