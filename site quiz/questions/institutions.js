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
    }


];