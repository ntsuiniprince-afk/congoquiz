
const questions = [

    {
        question: "Quelle est la capitale de la République du Congo ?",
        reponses: ["Pointe-Noire", "Brazzaville", "Owando"],
        bonne: 1,
        explication: "Brazzaville est la capitale politique de la République du Congo."
    },
    
    {
        question: "Quelle est la monnaie officielle de la République du Congo ?",
        reponses: ["Franc CFA", "Franc congolais", "Euro"],
        bonne: 0,
        explication: "La République du Congo utilise le franc CFA (XAF), la monnaie de la CEMAC."
    },
    
    {
        question: "Quelle est la langue officielle de la République du Congo ?",
        reponses: ["Lingala", "Français", "Kituba"],
        bonne: 1,
        explication: "Le français est la langue officielle du pays."
    },
    
    {
        question: "Quel grand fleuve borde Brazzaville ?",
        reponses: ["Le Nil", "Le fleuve Congo", "Le fleuve Niger"],
        bonne: 1,
        explication: "Le fleuve Congo sépare Brazzaville de Kinshasa."
    },
    
    {
        question: "Quelle est la deuxième plus grande ville de la République du Congo ?",
        reponses: ["Ouesso", "Pointe-Noire", "Owando"],
        bonne: 1,
        explication: "Pointe-Noire est la deuxième ville du pays et son principal port."
    },

    {
    question: "Quel est le principal port maritime de la République du Congo ?",
    reponses: ["Ouesso", "Pointe-Noire", "Owando"],
    bonne: 1,
    explication: "Pointe-Noire est le principal port maritime du pays."
},

{
    question: "En quelle année la République du Congo a-t-elle obtenu son indépendance ?",
    reponses: ["1960", "1958", "1965"],
    bonne: 0,
    explication: "La République du Congo est devenue indépendante le 15 août 1960."
},

{
    question: "Quelles sont les deux langues nationales les plus parlées au Congo ?",
    reponses: ["Lingala et Kituba", "Français et Anglais", "Kikongo et Swahili"],
    bonne: 0,
    explication: "Le lingala et le kituba sont les deux principales langues nationales."
},

{
    question: "Quelle est la fête nationale de la République du Congo ?",
    reponses: ["15 août", "30 juin", "1er janvier"],
    bonne: 0,
    explication: "Le 15 août célèbre l'indépendance du pays."
},

{
    question: "Quelle ville est surnommée la capitale économique du Congo ?",
    reponses: ["Brazzaville", "Pointe-Noire", "Dolisie"],
    bonne: 1,
    explication: "Pointe-Noire est la capitale économique grâce à son port et à son activité pétrolière."
},

{
    question: "Quel département abrite la ville de Brazzaville ?",
    reponses: ["Pool", "Brazzaville", "Kouilou"],
    bonne: 1,
    explication: "Brazzaville est à la fois une ville et un département."
},

{
    question: "Quel est le plus long fleuve de la République du Congo ?",
    reponses: ["Le fleuve Congo", "Le Kouilou", "L'Alima"],
    bonne: 0,
    explication: "Le fleuve Congo est le plus grand fleuve du pays."
},

{
    question: "Quelle est la devise officielle de la République du Congo ?",
    reponses: ["Unité - Travail - Progrès", "Paix - Travail - Patrie", "Liberté - Égalité - Fraternité"],
    bonne: 0,
    explication: "La devise officielle est : « Unité - Travail - Progrès »."
},

{
    question: "Quelle est la couleur située au milieu du drapeau congolais ?",
    reponses: ["Rouge", "Jaune", "Vert"],
    bonne: 1,
    explication: "Le drapeau est composé d'une bande jaune en diagonale entre le vert et le rouge."
},

{
    question: "Quel est le plus haut sommet de la République du Congo ?",
    reponses: ["Mont Nabemba", "Mont Chaillu", "Mont Cameroun"],
    bonne: 0,
    explication: "Le mont Nabemba est le point culminant du pays."
},

{
    question: "Dans quelle ville se trouve le principal port pétrolier du Congo ?",
    reponses: ["Pointe-Noire", "Ouesso", "Nkayi"],
    bonne: 0,
    explication: "Pointe-Noire est le principal port maritime et pétrolier du pays."
},

{
    question: "Quel océan borde la République du Congo ?",
    reponses: ["Océan Indien", "Océan Atlantique", "Océan Pacifique"],
    bonne: 1,
    explication: "Le pays possède une façade sur l'océan Atlantique."
},

{
    question: "Quelle est la capitale du département de la Cuvette ?",
    reponses: ["Owando", "Ouesso", "Oyo"],
    bonne: 0,
    explication: "Owando est le chef-lieu du département de la Cuvette."
},

{
    question: "Combien de pays frontaliers la République du Congo possède-t-elle ?",
    reponses: ["4", "5", "6"],
    bonne: 1,
    explication: "Le Congo est frontalier du Cameroun, de la République centrafricaine, de la RDC, de l'Angola (Cabinda) et du Gabon."
},

{
    question: "Quelle est la principale langue officielle de l'administration congolaise ?",
    reponses: ["Français", "Lingala", "Kituba"],
    bonne: 0,
    explication: "Le français est la langue officielle utilisée dans l'administration et l'enseignement."
},
{
    question: "Quel département a pour chef-lieu Djambala ?",
    reponses: ["Plateaux", "Cuvette", "Pool"],
    bonne: 0,
    explication: "Djambala est le chef-lieu du département des Plateaux."
},

{
    question: "Quel département a pour chef-lieu Sibiti ?",
    reponses: ["Niari", "Lékoumou", "Bouenza"],
    bonne: 1,
    explication: "Sibiti est le chef-lieu du département de la Lékoumou."
},

{
    question: "Quel département a pour chef-lieu Impfondo ?",
    reponses: ["Likouala", "Sangha", "Cuvette-Ouest"],
    bonne: 0,
    explication: "Impfondo est le chef-lieu du département de la Likouala."
},

{
    question: "Quel département a pour chef-lieu Mossendjo ?",
    reponses: ["Niari", "Kouilou", "Cuvette-Ouest"],
    bonne: 2,
    explication: "Mossendjo est le chef-lieu de la Cuvette-Ouest."
},

{
    question: "Quel département a pour chef-lieu Ouesso ?",
    reponses: ["Sangha", "Likouala", "Pool"],
    bonne: 0,
    explication: "Ouesso est le chef-lieu du département de la Sangha."
},

{
    question: "Quel département a pour chef-lieu Loango ?",
    reponses: ["Kouilou", "Niari", "Bouenza"],
    bonne: 0,
    explication: "Loango est le chef-lieu du département du Kouilou."
},

{
    question: "Quelle est la couleur située en haut du drapeau de la République du Congo ?",
    reponses: ["Rouge", "Vert", "Jaune"],
    bonne: 1,
    explication: "Le vert occupe la partie supérieure gauche du drapeau."
},

{
    question: "Quel est le nom de l'hymne national de la République du Congo ?",
    reponses: ["La Congolaise", "Debout Congolais", "En ce jour"],
    bonne: 0,
    explication: "L'hymne national de la République du Congo est « La Congolaise »."
},

{
    question: "Quel est le plus grand affluent du fleuve Congo situé en République du Congo ?",
    reponses: ["La Sangha", "Le Niari", "La Loufoulakari"],
    bonne: 0,
    explication: "La Sangha est l'un des plus importants affluents du fleuve Congo."
},

{
    question: "Dans quelle communauté économique régionale la République du Congo est-elle membre ?",
    reponses: ["CEMAC", "CEDEAO", "SADC"],
    bonne: 0,
    explication: "La République du Congo fait partie de la Communauté économique et monétaire de l'Afrique centrale (CEMAC)."
},

{
    question: "Quel était le nom de l'ancien parti unique de la République du Congo à partir de 1969 ?",
    reponses: ["PCT", "UPADS", "MCDDI"],
    bonne: 0,
    explication: "Le Parti Congolais du Travail (PCT) a été créé en 1969."
},

{
    question: "Quelle ville a accueilli la conférence de Brazzaville en 1944 ?",
    reponses: ["Brazzaville", "Pointe-Noire", "Dolisie"],
    bonne: 0,
    explication: "La conférence de Brazzaville s'est tenue à Brazzaville en 1944."
},

{
    question: "Quel est le nom du premier président de la République du Congo après l'indépendance ?",
    reponses: ["Fulbert Youlou", "Pascal Lissouba", "Alphonse Massamba-Débat"],
    bonne: 0,
    explication: "Fulbert Youlou a été le premier président du Congo indépendant."
},

{
    question: "Quel président congolais a dirigé le pays de 1992 à 1997 ?",
    reponses: ["Pascal Lissouba", "Marien Ngouabi", "Denis Sassou-Nguesso"],
    bonne: 0,
    explication: "Pascal Lissouba a été président de la République du Congo de 1992 à 1997."
},

{
    question: "Quel est le nom du parlement qui représente le peuple congolais ?",
    reponses: ["Assemblée nationale", "Cour constitutionnelle", "Conseil économique"],
    bonne: 0,
    explication: "L'Assemblée nationale est la chambre qui représente les citoyens au Parlement."
},

{
    question: "Comment appelle-t-on les membres élus de l'Assemblée nationale ?",
    reponses: ["Députés", "Sénateurs", "Ministres"],
    bonne: 0,
    explication: "Les membres de l'Assemblée nationale sont appelés députés."
},

{
    question: "Quelle institution contrôle la conformité des lois à la Constitution au Congo ?",
    reponses: ["Cour constitutionnelle", "Banque centrale", "Mairie"],
    bonne: 0,
    explication: "La Cour constitutionnelle veille au respect de la Constitution."
},

{
    question: "Quel est le nom de l'hymne national de la République du Congo ?",
    reponses: ["La Congolaise", "Le Chant du départ", "Debout Congolais"],
    bonne: 0,
    explication: "L'hymne national du Congo s'appelle La Congolaise."
},

{
    question: "Quelle est la capitale politique de la République du Congo ?",
    reponses: ["Brazzaville", "Pointe-Noire", "Ouesso"],
    bonne: 0,
    explication: "Brazzaville est la capitale politique et administrative du pays."
},

{
    question: "Quel président congolais est associé à la période de la révolution de 1963 ?",
    reponses: ["Alphonse Massamba-Débat", "Fulbert Youlou", "Pascal Lissouba"],
    bonne: 0,
    explication: "Alphonse Massamba-Débat a dirigé le Congo après les événements de 1963."
},

{
    question: "Quel événement historique a marqué le Congo en 1997 ?",
    reponses: ["Une guerre civile", "Une indépendance", "Une nouvelle monnaie"],
    bonne: 0,
    explication: "Une guerre civile a marqué le Congo en 1997."
},

{
    question: "Quel est le nom du chef du gouvernement congolais ?",
    reponses: ["Premier ministre", "Président du Sénat", "Maire"],
    bonne: 0,
    explication: "Le Premier ministre est le chef du gouvernement."
},

{
    question: "Quel est le siège du gouvernement de la République du Congo ?",
    reponses: ["Brazzaville", "Pointe-Noire", "Oyo"],
    bonne: 0,
    explication: "Le gouvernement siège dans la capitale, Brazzaville."
},

{
    question: "Quel président dirige la République du Congo depuis 1997 avec une interruption entre 1992 et 1997 ?",
    reponses: ["Denis Sassou-Nguesso", "Pascal Lissouba", "Fulbert Youlou"],
    bonne: 0,
    explication: "Denis Sassou-Nguesso est revenu au pouvoir en 1997 après une période d'interruption. "
},

{
    question: "Quel est le nom de la monnaie commune utilisée par plusieurs pays d'Afrique centrale dont le Congo ?",
    reponses: ["Franc CFA d'Afrique centrale", "Franc congolais", "Naira"],
    bonne: 0,
    explication: "Le Congo utilise le franc CFA d'Afrique centrale."
},

{
    question: "Quelle organisation regroupe plusieurs pays d'Afrique centrale dont le Congo ?",
    reponses: ["CEMAC", "CEDEAO", "UMA"],
    bonne: 0,
    explication: "La République du Congo est membre de la CEMAC."
},

{
    question: "Quel est le nom de la chambre haute du Parlement congolais ?",
    reponses: ["Sénat", "Assemblée nationale", "Cour suprême"],
    bonne: 0,
    explication: "Le Sénat est la chambre haute du Parlement."
},

{
    question: "Quel secteur économique est historiquement très important pour le Congo ?",
    reponses: ["Pétrole", "Café uniquement", "Textile uniquement"],
    bonne: 0,
    explication: "Le pétrole occupe une place importante dans l'économie congolaise."
},

{
    question: "Quel président congolais a été élu lors de la présidentielle de 2021 selon les résultats définitifs annoncés par la Cour constitutionnelle ?",
    reponses: ["Denis Sassou-Nguesso", "Pascal Lissouba", "Fulbert Youlou"],
    bonne: 0,
    explication: "Denis Sassou-Nguesso a été déclaré élu lors de la présidentielle de 2021."
},
{
    question: "Quel département a pour chef-lieu Dolisie ?",
    reponses: ["Niari", "Bouenza", "Lékoumou"],
    bonne: 0,
    explication: "Dolisie est le chef-lieu du département du Niari."
},

{
    question: "Quelle ville est le chef-lieu du département de la Cuvette-Ouest ?",
    reponses: ["Ewo", "Owando", "Ouesso"],
    bonne: 0,
    explication: "Ewo est le chef-lieu de la Cuvette-Ouest."
},

{
    question: "Quel est le plus grand département de la République du Congo en superficie ?",
    reponses: ["Likouala", "Sangha", "Plateaux"],
    bonne: 0,
    explication: "La Likouala est le plus vaste département du Congo."
},

{
    question: "Quelle ville est située à la frontière entre la République du Congo et la RDC ?",
    reponses: ["Brazzaville", "Kinkala", "Owando"],
    bonne: 0,
    explication: "Brazzaville est située en face de Kinshasa, séparée par le fleuve Congo."
},

{
    question: "Quel fleuve traverse la ville de Brazzaville ?",
    reponses: ["Le Congo", "La Sangha", "L'Alima"],
    bonne: 0,
    explication: "Brazzaville est située sur la rive droite du fleuve Congo."
},

{
    question: "Quel département a pour chef-lieu Madingou ?",
    reponses: ["Bouenza", "Pool", "Niari"],
    bonne: 0,
    explication: "Madingou est le chef-lieu de la Bouenza."
},

{
    question: "Quelle ville est le chef-lieu du département des Plateaux ?",
    reponses: ["Djambala", "Gamboma", "Ngo"],
    bonne: 0,
    explication: "Djambala est le chef-lieu du département des Plateaux."
},

{
    question: "Quelle couleur n'apparaît pas sur le drapeau de la République du Congo ?",
    reponses: ["Bleu", "Vert", "Jaune"],
    bonne: 0,
    explication: "Le drapeau congolais est composé du vert, du jaune et du rouge."
},

{
    question: "Quel département a pour chef-lieu Sibiti ?",
    reponses: ["Lékoumou", "Bouenza", "Pool"],
    bonne: 0,
    explication: "Sibiti est le chef-lieu de la Lékoumou."
},

{
    question: "Quel est le chef-lieu du département de la Likouala ?",
    reponses: ["Impfondo", "Ouesso", "Owando"],
    bonne: 0,
    explication: "Impfondo est le chef-lieu du département de la Likouala."
},
{
    question: "Quel est le chef-lieu du département du Pool ?",
    reponses: ["Kinkala", "Kindamba", "Mindouli"],
    bonne: 0,
    explication: "Kinkala est le chef-lieu du département du Pool."
},

{
    question: "Quel président a proclamé l'indépendance de la République du Congo en 1960 ?",
    reponses: ["Alphonse Massamba-Débat", "Fulbert Youlou", "Marien Ngouabi"],
    bonne: 1,
    explication: "Fulbert Youlou était le premier président de la République du Congo."
},

{
    question: "Quel est le plus haut sommet du Congo ?",
    reponses: ["Mont Fouari", "Mont Mavoumbou", "Mont Nabemba"],
    bonne: 2,
    explication: "Le mont Nabemba est le point culminant de la République du Congo."
},

{
    question: "Dans quel département se trouve la ville de Boundji ?",
    reponses: ["Cuvette", "Likouala", "Plateaux"],
    bonne: 0,
    explication: "Boundji est une commune du département de la Cuvette."
},

{
    question: "Quelle est la devise officielle de la République du Congo ?",
    reponses: ["Unité – Travail – Justice", "Travail – Progrès – Humanité", "Paix – Travail – Patrie"],
    bonne: 1,
    explication: "La devise officielle est « Travail – Progrès – Humanité »."
},

{
    question: "Quel département a pour chef-lieu Sibiti ?",
    reponses: ["Bouenza", "Niari", "Lékoumou"],
    bonne: 2,
    explication: "Sibiti est le chef-lieu du département de la Lékoumou."
},

{
    question: "Quel est le principal aéroport international de Brazzaville ?",
    reponses: ["Maya-Maya", "Agostinho-Neto", "Ollombo"],
    bonne: 0,
    explication: "L'aéroport international Maya-Maya est situé à Brazzaville."
},

{
    question: "Quel fleuve est un affluent du fleuve Congo ?",
    reponses: ["Kouilou", "Sangha", "Niari"],
    bonne: 1,
    explication: "La Sangha est l'un des principaux affluents du fleuve Congo."
},

{
    question: "Dans quel département se trouve la ville de Zanaga ?",
    reponses: ["Bouenza", "Lékoumou", "Niari"],
    bonne: 1,
    explication: "Zanaga est située dans le département de la Lékoumou."
},

{
    question: "Quelle équipe a remporté le plus de championnats nationaux au Congo ?",
    reponses: ["Diables Noirs", "Étoile du Congo", "CARA Brazzaville"],
    bonne: 2,
    explication: "Le CARA Brazzaville fait partie des clubs les plus titrés du pays."
},

{
    question: "Quel département possède le parc national de Nouabalé-Ndoki ?",
    reponses: ["Sangha", "Likouala", "Cuvette"],
    bonne: 0,
    explication: "Le parc national de Nouabalé-Ndoki est situé dans la Sangha."
},

{
    question: "Quelle ville est la capitale du département du Niari ?",
    reponses: ["Loudima", "Dolisie", "Mossendjo"],
    bonne: 1,
    explication: "Dolisie est le chef-lieu du département du Niari."
},

{
    question: "Quel écrivain congolais est l'auteur de « Verre Cassé » ?",
    reponses: ["Emmanuel Dongala", "Henri Lopes", "Alain Mabanckou"],
    bonne: 2,
    explication: "Alain Mabanckou est l'auteur du roman « Verre Cassé »."
},

{
    question: "Quel département est le moins peuplé du Congo ?",
    reponses: ["Cuvette-Ouest", "Likouala", "Lékoumou"],
    bonne: 0,
    explication: "La Cuvette-Ouest est l'un des départements les moins peuplés du pays."
},

{
    question: "Quelle ville est connue pour ses gorges de Diosso ?",
    reponses: ["Loango", "Diosso", "Pointe-Noire"],
    bonne: 1,
    explication: "Les gorges de Diosso sont situées près de la ville de Diosso."
},

{
    question: "Quelle couleur traverse le drapeau congolais en diagonale ?",
    reponses: ["Rouge", "Vert", "Jaune"],
    bonne: 2,
    explication: "La bande jaune traverse le drapeau en diagonale."
},

{
    question: "Dans quel département se trouve la ville de Kindamba ?",
    reponses: ["Pool", "Bouenza", "Plateaux"],
    bonne: 0,
    explication: "Kindamba est située dans le département du Pool."
},

{
    question: "Quelle langue est la plus utilisée dans le nord du Congo ?",
    reponses: ["Kituba", "Lingala", "Lari"],
    bonne: 1,
    explication: "Le lingala est très utilisé dans le nord du pays."
},

{
    question: "Quel département a pour chef-lieu Djambala ?",
    reponses: ["Cuvette", "Plateaux", "Pool"],
    bonne: 1,
    explication: "Djambala est le chef-lieu des Plateaux."
},

{
    question: "Quel parc national est réputé pour ses gorilles de plaine ?",
    reponses: ["Conkouati-Douli", "Odzala-Kokoua", "Lefini"],
    bonne: 1,
    explication: "Le parc national d'Odzala-Kokoua est mondialement connu pour ses gorilles de plaine."
},
{
    question: "Quel département a pour chef-lieu Loango ?",
    reponses: ["Pointe-Noire", "Loango", "Mvouti"],
    bonne: 1,
    explication: "Loango est le chef-lieu du département du Kouilou."
},

{
    question: "Quel président est à l'origine de la devise « Travail, Progrès, Humanité » ?",
    reponses: ["Fulbert Youlou", "Marien Ngouabi", "Aucun président"],
    bonne: 2,
    explication: "La devise est inscrite dans la Constitution et n'est pas attribuée à un président en particulier."
},

{
    question: "Quelle ville est située en face de Kinshasa ?",
    reponses: ["Brazzaville", "Pointe-Noire", "Owando"],
    bonne: 0,
    explication: "Brazzaville fait face à Kinshasa, de l'autre côté du fleuve Congo."
},

{
    question: "Quel département possède la ville de Kimongo ?",
    reponses: ["Niari", "Lékoumou", "Kouilou"],
    bonne: 0,
    explication: "Kimongo est une commune du département du Niari."
},

{
    question: "Quel est le principal port maritime du Congo ?",
    reponses: ["Loango", "Pointe-Noire", "Brazzaville"],
    bonne: 1,
    explication: "Le port autonome de Pointe-Noire est le principal port maritime du pays."
},

{
    question: "Quel département a pour chef-lieu Madingou ?",
    reponses: ["Pool", "Bouenza", "Niari"],
    bonne: 1,
    explication: "Madingou est le chef-lieu de la Bouenza."
},

{
    question: "Quel est le plus long affluent congolais du fleuve Congo ?",
    reponses: ["La Sangha", "La Léfini", "La Bouenza"],
    bonne: 0,
    explication: "La Sangha est l'un des plus importants affluents du fleuve Congo."
},

{
    question: "Quel écrivain congolais a écrit « Mémoires de porc-épic » ?",
    reponses: ["Henri Lopes", "Alain Mabanckou", "Emmanuel Dongala"],
    bonne: 1,
    explication: "« Mémoires de porc-épic » est un roman d'Alain Mabanckou."
},

{
    question: "Dans quel département se trouve la ville d'Etoumbi ?",
    reponses: ["Cuvette-Ouest", "Sangha", "Likouala"],
    bonne: 0,
    explication: "Etoumbi est une commune de la Cuvette-Ouest."
},

{
    question: "Quel département est le plus au nord du Congo ?",
    reponses: ["Sangha", "Likouala", "Cuvette"],
    bonne: 1,
    explication: "La Likouala est le département le plus septentrional du pays."
},

{
    question: "Quel est le siège du Parlement congolais ?",
    reponses: ["Brazzaville", "Pointe-Noire", "Dolisie"],
    bonne: 0,
    explication: "Le Parlement de la République du Congo siège à Brazzaville."
},

{
    question: "Quel département possède la ville de Lékana ?",
    reponses: ["Plateaux", "Pool", "Cuvette"],
    bonne: 0,
    explication: "Lékana est située dans le département des Plateaux."
},

{
    question: "Quel parc national est situé près de l'océan Atlantique ?",
    reponses: ["Odzala-Kokoua", "Conkouati-Douli", "Nouabalé-Ndoki"],
    bonne: 1,
    explication: "Le parc national de Conkouati-Douli borde l'océan Atlantique."
},

{
    question: "Quelle ville est connue pour le musée de Diosso ?",
    reponses: ["Diosso", "Loango", "Pointe-Noire"],
    bonne: 0,
    explication: "Le musée de Diosso est installé dans l'ancien palais royal de Diosso."
},

{
    question: "Quel département possède la ville de Mbinda ?",
    reponses: ["Bouenza", "Niari", "Lékoumou"],
    bonne: 1,
    explication: "Mbinda est située dans le département du Niari."
},

{
    question: "Quelle est la langue officielle de la République du Congo ?",
    reponses: ["Kituba", "Lingala", "Français"],
    bonne: 2,
    explication: "Le français est la langue officielle du pays."
},

{
    question: "Quel département a pour chef-lieu Djambala ?",
    reponses: ["Plateaux", "Cuvette", "Pool"],
    bonne: 0,
    explication: "Djambala est le chef-lieu des Plateaux."
},

{
    question: "Quelle ville est surnommée la capitale économique du Congo ?",
    reponses: ["Brazzaville", "Pointe-Noire", "Dolisie"],
    bonne: 1,
    explication: "Pointe-Noire est la capitale économique du Congo."
},

{
    question: "Quel département possède la ville de Ngoko ?",
    reponses: ["Sangha", "Likouala", "Cuvette"],
    bonne: 1,
    explication: "Ngoko est une localité de la Likouala."
},

{
    question: "Quel monument est considéré comme l'un des symboles de Brazzaville ?",
    reponses: ["Le Mausolée Marien Ngouabi", "La Basilique Sainte-Anne", "Le Palais du Parlement"],
    bonne: 1,
    explication: "La Basilique Sainte-Anne est l'un des monuments les plus emblématiques de Brazzaville."
},
{
    question: "Quel président est associé à la devise « Travail, Progrès, Humanité » ?",
    reponses: ["Marien Ngouabi", "Aucun président", "Denis Sassou N'Guesso"],
    bonne: 1,
    explication: "Cette devise est celle de la République et n'est pas attribuée à un président en particulier."
},

{
    question: "Quel est le nom de l'équipe nationale masculine de football du Congo ?",
    reponses: ["Les Fauves", "Les Diables Rouges", "Les Panthères"],
    bonne: 1,
    explication: "L'équipe nationale est surnommée les Diables Rouges."
},

{
    question: "En quelle année les Diables Rouges ont-ils remporté leur seul titre de champion d'Afrique (CAN) ?",
    reponses: ["1968", "1972", "1974"],
    bonne: 1,
    explication: "Le Congo a remporté la Coupe d'Afrique des Nations en 1972."
},

{
    question: "Quel ancien footballeur congolais est devenu président de la FIFA ?",
    reponses: ["François Mpelé", "Jean-Michel Mbono", "Aucun"],
    bonne: 2,
    explication: "Aucun ancien footballeur congolais n'a été président de la FIFA."
},

{
    question: "Quel club est basé à Brazzaville ?",
    reponses: ["Diables Noirs", "AS Cheminots", "JS Talangaï"],
    bonne: 0,
    explication: "Les Diables Noirs sont un club historique de Brazzaville."
},

{
    question: "Quel artiste est connu pour la chanson « Ancien combattant » ?",
    reponses: ["Zao", "Aurlus Mabélé", "Pamelo Mounk'a"],
    bonne: 0,
    explication: "Zao est célèbre pour sa chanson satirique « Ancien combattant »."
},

{
    question: "Quel chanteur est surnommé le roi du soukous ?",
    reponses: ["Pamelo Mounk'a", "Aurlus Mabélé", "Jean Serge Essous"],
    bonne: 1,
    explication: "Aurlus Mabélé est considéré comme l'un des grands noms du soukous."
},

{
    question: "Quel écrivain congolais a reçu le Grand Prix de littérature Henri-Gal ?",
    reponses: ["Henri Lopes", "Alain Mabanckou", "Emmanuel Dongala"],
    bonne: 1,
    explication: "Alain Mabanckou a reçu plusieurs distinctions littéraires internationales."
},

{
    question: "Qui est l'auteur du roman « Le Pleurer-rire » ?",
    reponses: ["Henri Lopes", "Tchicaya U Tam'si", "Emmanuel Dongala"],
    bonne: 0,
    explication: "« Le Pleurer-rire » est un roman d'Henri Lopes."
},

{
    question: "Quelle danse traditionnelle est connue dans la région du Pool ?",
    reponses: ["Kebe-kebe", "Mouyondzi", "Likembe"],
    bonne: 0,
    explication: "Le Kebe-kebe est une danse traditionnelle connue dans cette région."
},

{
    question: "Quel instrument est très utilisé dans les musiques traditionnelles congolaises ?",
    reponses: ["Likembe", "Violon", "Cornemuse"],
    bonne: 0,
    explication: "Le likembe est un instrument traditionnel à lamelles métalliques."
},

{
    question: "Quel plat est préparé avec des feuilles de manioc ?",
    reponses: ["Saka-saka", "Ntaba", "Mbika"],
    bonne: 0,
    explication: "Le saka-saka est un plat à base de feuilles de manioc pilées."
},

{
    question: "Quel est le siège du gouvernement de la République du Congo ?",
    reponses: ["Brazzaville", "Pointe-Noire", "Dolisie"],
    bonne: 0,
    explication: "Les principales institutions de l'État siègent à Brazzaville."
},

{
    question: "Combien de chambres compose le Parlement congolais ?",
    reponses: ["Deux", "Une", "Trois"],
    bonne: 0,
    explication: "Le Parlement comprend l'Assemblée nationale et le Sénat."
},

{
    question: "Quel est le nom de l'hymne national du Congo ?",
    reponses: ["La Congolaise", "Le Chant de la Patrie", "Terre d'Espérance"],
    bonne: 0,
    explication: "« La Congolaise » est l'hymne national de la République du Congo."
},

{
    question: "Quel poète congolais est considéré comme l'une des grandes figures de la littérature africaine ?",
    reponses: ["Tchicaya U Tam'si", "Henri Lopes", "Sony Labou Tansi"],
    bonne: 0,
    explication: "Tchicaya U Tam'si est l'un des plus grands poètes congolais."
},

{
    question: "Quelle couleur symbolise l'espoir sur le drapeau de la République du Congo ?",
    reponses: ["Vert", "Rouge", "Jaune"],
    bonne: 0,
    explication: "Le vert représente la nature et l'espoir."
}
    ];
function melangerQuestions(tableau) {

    for (let i = tableau.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [tableau[i], tableau[j]] = [tableau[j], tableau[i]];

    }

}
function choisirQuestions(nombre) {

    let disponibles = questions.filter(q => !questionsRecentes.includes(q));

    if (disponibles.length < nombre) {

        questionsRecentes = [];

        disponibles = [...questions];

    }

    melangerQuestions(disponibles);

    let selection = disponibles.slice(0, nombre);

    questionsRecentes.push(...selection);

    return selection;

}
    
    let nombreQuestions = 0;
    let numeroQuestion = 0;
    let score = 0;
    let temps = 20;
    let chrono;
    let intervalle;
    
    function demarrerQuiz(nombre){
    
        nombreQuestions = nombre;
        melangerQuestions(questions);
    
        document.querySelector(".accueil").innerHTML = `
        <p id="numeroQuestion"></p>
        <p id="chrono">⏱️ Temps : 20 s</p>
        <p id="messageErreur" style="color:red;font-weight:bold;"></p>

        <h2 id="question"></h2>

        <div id="reponses"></div>
        
        <p id="explication"></p>
        
        <button id="btnValider" onclick="verifier()">Valider</button>
        
        <button id="btnSuivant" onclick="questionSuivante()" style="display:none;">
        Question suivante
        </button>
        
        <p id="score"></p>
        <audio id="sonCorrect" src="sons/correct.mp3"></audio>
        <audio id="sonFaux" src="sons/faux.mp3"></audio>
        `;
    
        afficherQuestion();
    
    }
    
    function afficherQuestion(){
    
        document.getElementById("numeroQuestion").innerHTML =
        "Question " + (numeroQuestion + 1) + " / " + nombreQuestions;

        document.getElementById("question").innerHTML =
        questions[numeroQuestion].question;
    
        let html = "";
    
        questions[numeroQuestion].reponses.forEach(function(rep,index){
    
            html += `
            <label>
                <input type="radio" name="rep" value="${index}">
                ${rep}
            </label><br><br>
            `;
    
        });
    
        document.getElementById("reponses").innerHTML = html;
        demarrerChrono();
    
    }
    
    function verifier(){

        let choix = document.querySelector('input[name="rep"]:checked');
    
        if(!choix){
    
            document.getElementById("messageErreur").textContent =
            "⚠️ Veuillez sélectionner une réponse.";
    
            return;
    
        }
    
        // On efface le message d'erreur
        document.getElementById("messageErreur").textContent = "";
    
        // On arrête le chrono uniquement si une réponse a été choisie
        clearInterval(intervalle);
    
        let texte = "";

        if (Number(choix.value) === questions[numeroQuestion].bonne) {

            score++;
        
            const son = document.getElementById("sonCorrect");
            son.currentTime = 0;
            son.play().catch(err => console.log(err));
        
            texte = "✅ Bonne réponse !<br><br>";
        
        } else {
        
            const son = document.getElementById("sonFaux");
            son.currentTime = 0;
            son.play().catch(err => console.log(err));
        
            texte = "❌ Mauvaise réponse.<br><br>";
        
        }
        
        texte += "<strong>Explication :</strong><br>" +
        questions[numeroQuestion].explication;
        
        document.getElementById("explication").innerHTML = texte;
        
        document.getElementById("btnValider").style.display = "none";
        document.getElementById("btnSuivant").style.display = "inline-block";
    
    }
    function questionSuivante(){
        document.getElementById("messageErreur").textContent = "";
        numeroQuestion++;
    
        if(numeroQuestion < nombreQuestions){
    
            afficherQuestion();
    
            document.getElementById("explication").innerHTML = "";
    
            document.getElementById("btnValider").style.display = "inline-block";
            document.getElementById("btnSuivant").style.display = "none";
    
        }else{
    
            let pourcentage = Math.round((score / nombreQuestions) * 100);

            let niveau = "";

            if (pourcentage >= 90) {
            niveau = "👑 Expert de la culture congolaise";
            }  else if (pourcentage >= 70) {
            niveau = "🏆 Très bon connaisseur";
            } else if (pourcentage >= 50) {
            niveau = "📚 Bon niveau";
            } else if (pourcentage >= 30) {
            niveau = "🌱 Continue à apprendre";
            } else {
            niveau = "💪 Débutant";
            }

            document.querySelector(".accueil").innerHTML = `
            <h1 class="finQuiz">🎉 Quiz terminé !</h1>

              <h2>Score : ${score}/${nombreQuestions}</h2>

              <h3>📊 Pourcentage : ${pourcentage}%</h3>

              <h3 class="niveau">${niveau}</h3>

              <button class="rejouer" onclick="location.reload()">🔄 Rejouer</button>
            `;
    
        }
        
        
    
    }
    function demarrerChrono(){

        clearInterval(intervalle);
    
        temps = 20;
    
        document.getElementById("chrono").innerHTML =
        "⏱️ Temps : " + temps + " s";
    
        intervalle = setInterval(function(){
    
            temps--;
    
            document.getElementById("chrono").innerHTML =
            "⏱️ Temps : " + temps + " s";
    
            if(temps <= 0){
    
                clearInterval(intervalle);
    
                verifierTemps();
    
            }
    
        },1000);
    
    }
    function verifierTemps(){

        const son = document.getElementById("sonFaux");
        son.currentTime = 0;
        son.play().catch(err => console.log(err));
        let texte = "⏰ Temps écoulé !<br><br>";
    
        texte += "✅ Bonne réponse : <strong>" +
        questions[numeroQuestion].reponses[questions[numeroQuestion].bonne] +
        "</strong><br><br>";
    
        texte += "<strong>Explication :</strong><br>" +
        questions[numeroQuestion].explication;
    
        document.getElementById("explication").innerHTML = texte;
    
        document.getElementById("btnValider").style.display = "none";
        document.getElementById("btnSuivant").style.display = "inline-block";
    
        let radios = document.querySelectorAll('input[name="rep"]');
        radios.forEach(radio => radio.disabled = true);
    }
    // ================================
// Cinématique d'introduction
// ================================

window.addEventListener("load", function () {

    const intro = document.getElementById("intro");
    const params = new URLSearchParams(window.location.search);

    if(params.get("accueil") === "1"){

    document.getElementById("intro").style.display = "none";
    return;

    }

    
    setTimeout(function () {

        intro.classList.add("intro-fin");

        setTimeout(function () {

            intro.style.display = "none";

        }, 800);

    }, 5000);

});
// ================================
// MENU PRINCIPAL
// ================================

function ouvrirMenuJeu(){

    document.getElementById("btnJouer").style.display = "none";

    document.querySelector("button[disabled]").style.display = "none";

    document.getElementById("menuJeu").style.display = "block";

}

function fermerMenuJeu(){

    document.getElementById("menuJeu").style.display = "none";

    document.getElementById("btnJouer").style.display = "block";

    document.querySelector("button[disabled]").style.display = "block";

}

function ouvrirQuizGeneral(){

    document.getElementById("menuJeu").style.display = "none";

    document.getElementById("menuQuestions").style.display = "block";

}

function ouvrirCategories(){

    alert("🚧 Cette fonctionnalité sera disponible prochainement.");

}
function retourMenuJeu(){

    document.getElementById("menuQuestions").style.display = "none";

    document.getElementById("menuJeu").style.display = "block";

}