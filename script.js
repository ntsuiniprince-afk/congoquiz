const questions = [

    {
        question: "Quelle est la capitale de la République du Congo ?",
        reponses: ["Pointe-Noire", "Brazzaville", "Owando"],
        bonne: 1,
        explication: "Brazzaville est la capitale politique de la République du Congo."
    },

    {
        question: "Quelle est la monnaie officielle de la République du Congo ?",
        reponses: ["Franc congolais", "Euro", "Franc CFA"],
        bonne: 2,
        explication: "La République du Congo utilise le franc CFA d'Afrique centrale (XAF), monnaie commune aux pays de la CEMAC."
    },

    {
        question: "Quelle est la langue officielle de la République du Congo ?",
        reponses: ["Lingala", "Français", "Kituba"],
        bonne: 1,
        explication: "Le français est la langue officielle de la République du Congo."
    },

    {
        question: "Quel grand fleuve borde Brazzaville ?",
        reponses: ["Le Nil", "Le fleuve Congo", "Le fleuve Niger"],
        bonne: 1,
        explication: "Brazzaville est située sur la rive droite du fleuve Congo, face à Kinshasa."
    },

    {
        question: "Quelle est la deuxième plus grande ville de la République du Congo ?",
        reponses: ["Owando", "Ouesso", "Pointe-Noire"],
        bonne: 2,
        explication: "Pointe-Noire est la deuxième plus grande ville du pays après Brazzaville."
    },

    {
        question: "En quelle année la République du Congo a-t-elle obtenu son indépendance ?",
        reponses: ["1958", "1965", "1960"],
        bonne: 2,
        explication: "La République du Congo est devenue indépendante le 15 août 1960."
    },

    {
        question: "Quelle est la fête nationale de la République du Congo ?",
        reponses: ["30 juin", "15 août", "1er janvier"],
        bonne: 1,
        explication: "Le 15 août est la fête nationale et commémore l'indépendance du Congo."
    },

    {
        question: "Quelle ville est considérée comme la capitale économique de la République du Congo ?",
        reponses: ["Dolisie", "Brazzaville", "Pointe-Noire"],
        bonne: 2,
        explication: "Pointe-Noire est considérée comme la capitale économique du Congo, notamment grâce à son port et à l'importance de ses activités économiques."
    },

    {
        question: "Quel département abrite la ville de Brazzaville ?",
        reponses: ["Pointe-Noire", "Brazzaville", "Pool"],
        bonne: 1,
        explication: "Brazzaville constitue elle-même un département de la République du Congo."
    },

    {
        question: "Quel est le plus long fleuve de la République du Congo ?",
        reponses: ["L'Alima", "Le fleuve Congo", "Le Kouilou"],
        bonne: 1,
        explication: "Le fleuve Congo est le principal et le plus long grand cours d'eau associé au territoire de la République du Congo."
    },

    {
        question: "Quelle est la devise officielle de la République du Congo ?",
        reponses: ["Paix - Travail - Patrie", "Liberté - Égalité - Fraternité", "Unité - Travail - Progrès"],
        bonne: 2,
        explication: "La devise officielle de la République du Congo est « Unité - Travail - Progrès »."
    },

    {
        question: "Quelle est la couleur située au milieu du drapeau congolais ?",
        reponses: ["Vert", "Jaune", "Rouge"],
        bonne: 1,
        explication: "Le jaune forme une bande diagonale qui sépare les parties verte et rouge du drapeau."
    },

    {
        question: "Quel est le plus haut sommet de la République du Congo ?",
        reponses: ["Mont Chaillu", "Mont Cameroun", "Mont Nabemba"],
        bonne: 2,
        explication: "Le mont Nabemba, situé dans le département de la Sangha, est le point culminant de la République du Congo."
    },

    {
        question: "Quel océan borde la République du Congo ?",
        reponses: ["Océan Indien", "Océan Atlantique", "Océan Pacifique"],
        bonne: 1,
        explication: "La République du Congo possède une façade maritime sur l'océan Atlantique."
    },

    {
        question: "Quelle est la capitale du département de la Cuvette ?",
        reponses: ["Ouesso", "Oyo", "Owando"],
        bonne: 2,
        explication: "Owando est le chef-lieu du département de la Cuvette."
    },

    {
        question: "Combien de pays frontaliers la République du Congo possède-t-elle ?",
        reponses: ["4", "5", "6"],
        bonne: 1,
        explication: "La République du Congo possède cinq frontières terrestres avec le Cameroun, la République centrafricaine, la République démocratique du Congo, le Gabon et l'Angola à travers l'enclave de Cabinda."
    },

    {
        question: "Quel département a pour chef-lieu Djambala ?",
        reponses: ["Pool", "Cuvette", "Plateaux"],
        bonne: 2,
        explication: "Djambala est le chef-lieu du département des Plateaux."
    },

    {
        question: "Quel département a pour chef-lieu Sibiti ?",
        reponses: ["Niari", "Bouenza", "Lékoumou"],
        bonne: 2,
        explication: "Sibiti est le chef-lieu du département de la Lékoumou."
    },

    {
        question: "Quel département a pour chef-lieu Impfondo ?",
        reponses: ["Sangha", "Cuvette", "Likouala"],
        bonne: 2,
        explication: "Impfondo est le chef-lieu du département de la Likouala."
    },

    {
        question: "Quel département a pour chef-lieu Ewo ?",
        reponses: ["Sangha", "Cuvette", "Cuvette-Ouest"],
        bonne: 2,
        explication: "Ewo est le chef-lieu du département de la Cuvette-Ouest."
    },

    {
        question: "Quel département a pour chef-lieu Ouesso ?",
        reponses: ["Likouala", "Sangha", "Cuvette"],
        bonne: 1,
        explication: "Ouesso est le chef-lieu du département de la Sangha."
    },

    {
        question: "Quel département a pour chef-lieu Loango ?",
        reponses: ["Niari", "Lékoumou", "Kouilou"],
        bonne: 2,
        explication: "Loango est le chef-lieu du département du Kouilou."
    },

    {
        question: "Quel est le nom de l'hymne national de la République du Congo ?",
        reponses: ["Debout Congolais", "En ce jour", "La Congolaise"],
        bonne: 2,
        explication: "L'hymne national de la République du Congo s'appelle « La Congolaise »."
    },

    {
        question: "Dans quelle communauté économique régionale la République du Congo est-elle membre ?",
        reponses: ["CEDEAO", "SADC", "CEMAC"],
        bonne: 2,
        explication: "La République du Congo est membre de la Communauté économique et monétaire de l'Afrique centrale (CEMAC)."
    },

    {
        question: "Quel était le nom de l'ancien parti unique de la République du Congo à partir de 1969 ?",
        reponses: ["UPADS", "PCT", "MCDDI"],
        bonne: 1,
        explication: "Le Parti congolais du travail (PCT) a été créé en 1969 et est devenu le parti unique du pays."
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
        explication: "Fulbert Youlou a été le premier président de la République du Congo après l'indépendance."
    },

    {
        question: "Quel président congolais a dirigé le pays de 1992 à 1997 ?",
        reponses: ["Pascal Lissouba", "Marien Ngouabi", "Denis Sassou-Nguesso"],
        bonne: 0,
        explication: "Pascal Lissouba a été président de la République du Congo de 1992 à 1997."
    },

    {
        question: "Quel événement a conduit au renversement de Fulbert Youlou en août 1963 ?",
        reponses: ["La Conférence nationale souveraine", "Les Trois Glorieuses", "La guerre civile de 1997"],
        bonne: 1,
        explication: "Les événements d'août 1963, connus sous le nom des Trois Glorieuses, ont conduit à la chute de Fulbert Youlou."
    },

    {
        question: "Quel Congolais a fondé en 1926 l'Amicale des Originaires de l'Afrique-Équatoriale Française ?",
        reponses: ["André Matsoua", "Marien Ngouabi", "Alphonse Massamba-Débat"],
        bonne: 0,
        explication: "André Grenard Matsoua a fondé en 1926 l'Amicale des Originaires de l'Afrique-Équatoriale Française."
    },

    {
        question: "Quel musicien est étroitement associé aux débuts de la rumba congolaise à Brazzaville ?",
        reponses: ["Zao", "Paul Kamba", "Aurlus Mabélé"],
        bonne: 1,
        explication: "Paul Kamba est une figure majeure des débuts de la rumba congolaise à Brazzaville."
    },

    {
        question: "En quelle année la rumba congolaise a-t-elle été inscrite au patrimoine culturel immatériel de l'humanité ?",
        reponses: ["2018", "2023", "2021"],
        bonne: 2,
        explication: "La rumba congolaise a été inscrite en 2021 sur la Liste représentative du patrimoine culturel immatériel de l'humanité de l'UNESCO."
    },

    {
        question: "Quel terme désigne une ancienne danse dont la rumba congolaise est issue selon l'UNESCO ?",
        reponses: ["Kébé-kébé", "Nkumba", "Likembe"],
        bonne: 1,
        explication: "L'UNESCO indique que la rumba congolaise est issue d'une ancienne danse appelée nkumba."
    },

    {
        question: "Quelle ville de la République du Congo est membre du Réseau des villes créatives de l'UNESCO dans le domaine de la musique ?",
        reponses: ["Brazzaville", "Pointe-Noire", "Dolisie"],
        bonne: 0,
        explication: "Brazzaville est membre du Réseau des villes créatives de l'UNESCO dans le domaine de la musique."
    },

    {
        question: "En quelle année l'École de peinture de Poto-Poto a-t-elle été créée ?",
        reponses: ["1944", "1951", "1960"],
        bonne: 1,
        explication: "L'École de peinture de Poto-Poto a été créée à Brazzaville en 1951."
    },

    {
        question: "Quel festival panafricain consacré à la musique a été créé au Congo en 1996 ?",
        reponses: ["FESPACO", "MASA", "FESPAM"],
        bonne: 2,
        explication: "Le Festival panafricain de musique (FESPAM) a été créé au Congo en 1996."
    },

    {
        question: "En quelle année les premiers Jeux africains ont-ils été organisés à Brazzaville ?",
        reponses: ["1965", "1972", "1978"],
        bonne: 0,
        explication: "Les premiers Jeux africains ont été organisés à Brazzaville du 18 au 25 juillet 1965."
    },

    {
        question: "Dans quelle ville se sont déroulés les 11es Jeux africains en 2015 ?",
        reponses: ["Pointe-Noire", "Brazzaville", "Dolisie"],
        bonne: 1,
        explication: "Les 11es Jeux africains se sont déroulés à Brazzaville en 2015."
    },

    {
        question: "Quel club congolais a remporté la Coupe d'Afrique des clubs champions en 1974 ?",
        reponses: ["Étoile du Congo", "Diables Noirs", "CARA Brazzaville"],
        bonne: 2,
        explication: "Le CARA Brazzaville a remporté la Coupe d'Afrique des clubs champions en 1974."
    },

    {
        question: "Quel club de football congolais est basé à Dolisie ?",
        reponses: ["AC Léopards", "Étoile du Congo", "Diables Noirs"],
        bonne: 0,
        explication: "L'AC Léopards est un club de football basé à Dolisie, dans le département du Niari."
    },

    {
        question: "Quel est le surnom de l'équipe nationale masculine de football de la République du Congo ?",
        reponses: ["Les Léopards", "Les Diables Rouges", "Les Panthères"],
        bonne: 1,
        explication: "L'équipe nationale masculine de football de la République du Congo est surnommée les Diables Rouges."
    },

    {
        question: "Quel écrivain congolais a remporté le prix Renaudot en 2006 pour « Mémoires de porc-épic » ?",
        reponses: ["Henri Lopes", "Emmanuel Dongala", "Alain Mabanckou"],
        bonne: 2,
        explication: "Alain Mabanckou a remporté le prix Renaudot en 2006 pour « Mémoires de porc-épic »."
    },

    {
        question: "Quel écrivain congolais est l'auteur du roman « La Vie et demie » ?",
        reponses: ["Sony Labou Tansi", "Henri Lopes", "Alain Mabanckou"],
        bonne: 0,
        explication: "« La Vie et demie » est un roman de l'écrivain congolais Sony Labou Tansi."
    },

    {
        question: "Quel écrivain congolais est l'auteur du roman « Le Pleurer-rire » ?",
        reponses: ["Alain Mabanckou", "Henri Lopes", "Tchicaya U Tam'si"],
        bonne: 1,
        explication: "« Le Pleurer-rire » est un roman de l'écrivain congolais Henri Lopes."
    },

    {
        question: "Quel intellectuel congolais est notamment connu pour ses travaux en égyptologie et en linguistique ?",
        reponses: ["Théophile Obenga", "Henri Lopes", "Alain Mabanckou"],
        bonne: 0,
        explication: "Théophile Obenga est un intellectuel congolais connu notamment pour ses travaux en histoire, linguistique et égyptologie."
    },

    {
        question: "Quel élément culturel traditionnel du Congo est associé à des masques et à des danses rituelles ?",
        reponses: ["La rumba", "Le Kébé-Kébé", "Le soukous"],
        bonne: 1,
        explication: "Le Kébé-Kébé est une expression culturelle traditionnelle associée notamment à des masques et à des danses rituelles."
    },

    {
        question: "Quels sont les trois pays concernés par le site du Trinational de la Sangha ?",
        reponses: ["Congo, Gabon et Cameroun", "Congo, Tchad et République centrafricaine", "Congo, Cameroun et République centrafricaine"],
        bonne: 2,
        explication: "Le Trinational de la Sangha réunit des aires protégées du Congo, du Cameroun et de la République centrafricaine."
    },

    {
        question: "Quel parc national de la République du Congo fait partie du Trinational de la Sangha ?",
        reponses: ["Le parc national de Nouabalé-Ndoki", "Le parc national de Conkouati-Douli", "Le parc national de Lefini"],
        bonne: 0,
        explication: "Le parc national de Nouabalé-Ndoki constitue la partie congolaise du Trinational de la Sangha."
    },

    {
        question: "Quel site naturel de la République du Congo a été inscrit au patrimoine mondial de l'UNESCO en 2023 ?",
        reponses: ["Le parc national de Conkouati-Douli", "Le massif forestier d'Odzala-Kokoua", "Le mont Nabemba"],
        bonne: 1,
        explication: "Le massif forestier d'Odzala-Kokoua a été inscrit sur la Liste du patrimoine mondial de l'UNESCO en 2023."
    },

    {
        question: "Combien de biens de la République du Congo figurent actuellement sur la Liste du patrimoine mondial de l'UNESCO ?",
        reponses: ["Deux", "Trois", "Quatre"],
        bonne: 0,
        explication: "La République du Congo compte actuellement deux biens inscrits sur la Liste du patrimoine mondial de l'UNESCO : le Trinational de la Sangha et le massif forestier d'Odzala-Kokoua."
    },

    {
        question: "Quel est le nom du président qui a dirigé la République du Congo après Alphonse Massamba-Débat à partir de 1968 ?",
        reponses: ["Marien Ngouabi", "Pascal Lissouba", "Fulbert Youlou"],
        bonne: 0,
        explication: "Marien Ngouabi est devenu président de la République du Congo en 1968."
    },

    {
        question: "En quelle année Marien Ngouabi est-il devenu président de la République du Congo ?",
        reponses: ["1963", "1968", "1977"],
        bonne: 1,
        explication: "Marien Ngouabi a pris le pouvoir en 1968."
    },

    {
        question: "Quel président congolais a été assassiné en mars 1977 ?",
        reponses: ["Marien Ngouabi", "Fulbert Youlou", "Pascal Lissouba"],
        bonne: 0,
        explication: "Marien Ngouabi a été assassiné le 18 mars 1977."
    },

    {
        question: "Quel ancien président congolais est mort en exil en 1972 ?",
        reponses: ["Alphonse Massamba-Débat", "Fulbert Youlou", "Marien Ngouabi"],
        bonne: 1,
        explication: "Fulbert Youlou est mort en exil à Madrid en 1972."
    },

    {
        question: "Quel ancien président congolais a été président de 1963 à 1968 ?",
        reponses: ["Alphonse Massamba-Débat", "Marien Ngouabi", "Pascal Lissouba"],
        bonne: 0,
        explication: "Alphonse Massamba-Débat a dirigé la République du Congo de 1963 à 1968."
    },

    {
        question: "Quel événement politique a marqué la République du Congo en 1990 avec l'abandon du système du parti unique ?",
        reponses: ["Le retour au multipartisme", "La proclamation de l'indépendance", "La création du PCT"],
        bonne: 0,
        explication: "La République du Congo a engagé en 1990 la transition vers le multipartisme."
    },

    {
        question: "Quelle conférence politique s'est tenue au Congo en 1991 pour accompagner la transition démocratique ?",
        reponses: ["La Conférence nationale souveraine", "La Conférence de Brazzaville", "La Conférence de Bandung"],
        bonne: 0,
        explication: "La Conférence nationale souveraine s'est tenue à Brazzaville en 1991."
    },

    {
        question: "Quel écrivain congolais a écrit « Verre cassé » ?",
        reponses: ["Henri Lopes", "Alain Mabanckou", "Sony Labou Tansi"],
        bonne: 1,
        explication: "« Verre cassé » est un roman d'Alain Mabanckou publié en 2005."
    },

    {
        question: "Quel écrivain congolais est l'auteur de « Tribaliques » ?",
        reponses: ["Henri Lopes", "Sony Labou Tansi", "Alain Mabanckou"],
        bonne: 0,
        explication: "« Tribaliques » est un recueil de nouvelles d'Henri Lopes."
    },

    {
        question: "Quel écrivain congolais est l'auteur de « L'Anté-peuple » ?",
        reponses: ["Sony Labou Tansi", "Henri Lopes", "Alain Mabanckou"],
        bonne: 0,
        explication: "« L'Anté-peuple » est un roman de Sony Labou Tansi."
    },

    {
        question: "Quel artiste congolais est connu sous le nom de scène Zao ?",
        reponses: ["Un chanteur et musicien", "Un footballeur", "Un écrivain"],
        bonne: 0,
        explication: "Zao est un chanteur et musicien congolais connu notamment pour ses chansons satiriques."
    },

    {
        question: "Quel groupe musical a été fondé à Brazzaville autour de Paul Kamba en 1942 ?",
        reponses: ["Victoria Brazza", "Loketo", "Extra Musica"],
        bonne: 0,
        explication: "Paul Kamba fonde en 1941-1942 à Poto-Poto (Brazzaville) le groupe Victoria Brazza, l'un des tout premiers orchestres légendaires de la rumba congolaise. Les Bantous de la Capitale, autre orchestre historique, seront fondés plus tard, en 1959."
    },

    {
        question: "Quel musicien congolais est surnommé le « roi du soukous » ?",
        reponses: ["Aurlus Mabélé", "Zao", "Paul Kamba"],
        bonne: 0,
        explication: "Aurlus Mabélé, originaire de Brazzaville, est notamment connu comme une grande figure du soukous."
    },

    {
        question: "Dans quelle ville congolaise se trouve le Musée du Cercle africain ?",
        reponses: ["Pointe-Noire", "Brazzaville", "Dolisie"],
        bonne: 0,
        explication: "Le Musée du Cercle africain se trouve à Pointe-Noire."
    },

    {
        question: "Quel quartier de Brazzaville a donné son nom à une célèbre école de peinture ?",
        reponses: ["Bacongo", "Poto-Poto", "Moungali"],
        bonne: 1,
        explication: "L'École de peinture de Poto-Poto porte le nom du quartier de Poto-Poto à Brazzaville."
    },

    {
        question: "Quel instrument traditionnel à lamelles est aussi appelé likembe dans plusieurs régions d'Afrique centrale ?",
        reponses: ["La sanza", "Le tam-tam", "La harpe"],
        bonne: 0,
        explication: "La sanza est un instrument à lamelles, également appelé likembe dans plusieurs régions d'Afrique centrale."
    },

    {
        question: "Quel parc national congolais est particulièrement connu pour ses populations de gorilles des plaines de l'Ouest ?",
        reponses: ["Nouabalé-Ndoki", "Conkouati-Douli", "Odzala-Kokoua"],
        bonne: 0,
        explication: "Le parc national de Nouabalé-Ndoki abrite notamment d'importantes populations de gorilles des plaines de l'Ouest."
    },

    {
        question: "Quel parc national du Congo est situé sur la façade atlantique ?",
        reponses: ["Conkouati-Douli", "Nouabalé-Ndoki", "Odzala-Kokoua"],
        bonne: 0,
        explication: "Le parc national de Conkouati-Douli se situe dans le sud-ouest du Congo, sur la façade atlantique."
    },

    {
        question: "Quel parc national du Congo est l'un des plus anciens parcs nationaux du pays ?",
        reponses: ["Odzala-Kokoua", "Conkouati-Douli", "Nouabalé-Ndoki"],
        bonne: 0,
        explication: "Le parc national d'Odzala-Kokoua a été créé en 1935 et fait partie des plus anciens parcs nationaux du Congo."
    },

    {
        question: "Quel fleuve forme une partie de la frontière entre la République du Congo et la République démocratique du Congo ?",
        reponses: ["Le fleuve Congo", "Le Kouilou", "La Sangha"],
        bonne: 0,
        explication: "Le fleuve Congo forme notamment la frontière entre Brazzaville et Kinshasa."
    },

    {
        question: "Quelle ville congolaise fait face à Kinshasa de l'autre côté du fleuve Congo ?",
        reponses: ["Brazzaville", "Dolisie", "Ouesso"],
        bonne: 0,
        explication: "Brazzaville se trouve sur la rive droite du fleuve Congo, en face de Kinshasa."
    },

    {
        question: "Quel département du Congo est traversé par le fleuve Kouilou et possède une façade maritime ?",
        reponses: ["Kouilou", "Plateaux", "Likouala"],
        bonne: 0,
        explication: "Le département du Kouilou se situe dans le sud-ouest du Congo et possède une façade sur l'océan Atlantique."
    },

    {
        question: "Quelle ville est le chef-lieu du département du Niari ?",
        reponses: ["Dolisie", "Madingou", "Sibiti"],
        bonne: 0,
        explication: "Dolisie est le chef-lieu du département du Niari."
    },

    {
        question: "Quelle ville est le chef-lieu du département de la Bouenza ?",
        reponses: ["Nkayi", "Madingou", "Dolisie"],
        bonne: 1,
        explication: "Madingou est le chef-lieu du département de la Bouenza."
    },

    {
        question: "Quel est le chef-lieu du département du Pool ?",
        reponses: ["Kinkala", "Madingou", "Djambala"],
        bonne: 0,
        explication: "Kinkala est le chef-lieu du département du Pool."
    },

    {
        question: "Quelles sont les deux langues nationales véhiculaires de la République du Congo ?",
        reponses: ["Lingala et kituba", "Français et lingala", "Kituba et anglais"],
        bonne: 0,
        explication: "La Constitution reconnaît le lingala et le kituba comme langues nationales véhiculaires."
    },

    {
        question: "En quelle année le Trinational de la Sangha a-t-il été inscrit au patrimoine mondial de l'UNESCO ?",
        reponses: ["2005", "2012", "2020"],
        bonne: 1,
        explication: "Le Trinational de la Sangha a été inscrit au patrimoine mondial de l'UNESCO en 2012."
    },

    {
        question: "Quel est le nom de l'aéroport international de Brazzaville ?",
        reponses: ["Maya-Maya", "Antonio Agostinho Neto", "Ollombo"],
        bonne: 0,
        explication: "L'aéroport international Maya-Maya est situé à Brazzaville."
    },

    {
        question: "Quel grand port maritime se trouve à Pointe-Noire ?",
        reponses: ["Le port autonome de Pointe-Noire", "Le port de Brazzaville", "Le port d'Ouesso"],
        bonne: 0,
        explication: "Le port autonome de Pointe-Noire est le principal port maritime de la République du Congo."
    },

    {
        question: "Dans quelle ville se trouve le siège du Parlement de la République du Congo ?",
        reponses: ["Dolisie", "Brazzaville", "Pointe-Noire"],
        bonne: 1,
        explication: "Le Parlement de la République du Congo siège à Brazzaville, la capitale."
    },

    {
        question: "Quelle est la superficie approximative de la République du Congo ?",
        reponses: ["150 000 km²", "500 000 km²", "342 000 km²"],
        bonne: 2,
        explication: "La République du Congo couvre une superficie d'environ 342 000 km²."
    },

    {
        question: "Quelle était la population totale de la République du Congo selon le recensement de 2023 ?",
        reponses: ["3 millions", "6,1 millions", "10 millions"],
        bonne: 1,
        explication: "Le recensement de 2023 a dénombré environ 6,1 millions d'habitants en République du Congo."
    },

    {
        question: "Quelle était la population de Brazzaville selon le recensement de 2023 ?",
        reponses: ["1 million", "1,5 million", "2,1 millions"],
        bonne: 2,
        explication: "Brazzaville comptait environ 2,1 millions d'habitants lors du recensement de 2023."
    },

    {
        question: "Quel rang occupe le fleuve Congo parmi les plus longs fleuves d'Afrique ?",
        reponses: ["1er", "3e", "2e, après le Nil"],
        bonne: 2,
        explication: "Le fleuve Congo est le deuxième plus long fleuve d'Afrique, après le Nil."
    },

    {
        question: "Quelles villes le chemin de fer Congo-Océan relie-t-il ?",
        reponses: ["Brazzaville et Ouesso", "Pointe-Noire et Brazzaville", "Dolisie et Owando"],
        bonne: 1,
        explication: "Le chemin de fer Congo-Océan (CFCO) relie Pointe-Noire à Brazzaville."
    },

    {
        question: "Combien de départements comptait la République du Congo avant la réforme administrative de 2024 ?",
        reponses: ["10", "15", "12"],
        bonne: 2,
        explication: "Avant la réforme de 2024, la République du Congo comptait 12 départements."
    },

    {
        question: "Combien de départements compte la République du Congo après la réforme administrative de 2024 ?",
        reponses: ["12", "13", "15"],
        bonne: 2,
        explication: "La réforme de 2024 a créé trois nouveaux départements, portant le total à 15."
    },

    {
        question: "Dans quelle localité Denis Sassou Nguesso est-il né ?",
        reponses: ["Oyo", "Edou", "Owando"],
        bonne: 1,
        explication: "Denis Sassou Nguesso est né à Edou, dans le département de la Cuvette."
    },

    {
        question: "Dans quelle ville se tient le Festival panafricain de musique (FESPAM) ?",
        reponses: ["Pointe-Noire", "Dolisie", "Brazzaville"],
        bonne: 2,
        explication: "Le FESPAM, créé en 1996, se tient à Brazzaville."
    },

    {
        question: "Qui préside l'Assemblée nationale de la République du Congo ?",
        reponses: ["Pierre Ngolo", "André Milongo", "Isidore Mvouba"],
        bonne: 2,
        explication: "Isidore Mvouba préside l'Assemblée nationale de la République du Congo depuis 2017."
    },

    {
        question: "Qui préside le Sénat de la République du Congo ?",
        reponses: ["Isidore Mvouba", "Pierre Ngolo", "André Obami-Itou"],
        bonne: 1,
        explication: "Pierre Ngolo préside le Sénat de la République du Congo depuis 2017."
    },

    {
        question: "Combien de députés compte l'Assemblée nationale de la République du Congo ?",
        reponses: ["72", "100", "151"],
        bonne: 2,
        explication: "L'Assemblée nationale de la République du Congo compte 151 députés."
    },

    {
        question: "Combien de sénateurs compte le Sénat de la République du Congo ?",
        reponses: ["60", "72", "90"],
        bonne: 1,
        explication: "Le Sénat de la République du Congo compte 72 sénateurs."
    },

    {
        question: "Dans quelle ville est né le mouvement vestimentaire de la SAPE ?",
        reponses: ["Pointe-Noire", "Dolisie", "Brazzaville"],
        bonne: 2,
        explication: "Le mouvement de la SAPE (Société des Ambianceurs et des Personnes Élégantes) est né à Brazzaville."
    },

    {
        question: "Comment appelle-t-on un adepte du mouvement de la SAPE ?",
        reponses: ["Un ambianceur", "Un dandy", "Un sapeur"],
        bonne: 2,
        explication: "Un adepte de la SAPE est appelé un sapeur (ou une sapeuse)."
    },

    {
        question: "Quel quartier de Brazzaville est historiquement associé à la sapologie ?",
        reponses: [ "Poto-Poto", "Bacongo", "Moungali"],
        bonne: 1,
        explication: "Bacongo, le plus vieil arrondissement de Brazzaville, est historiquement associé à la sapologie."
    },

    {
        question: "Quel est le surnom du club de football AC Léopards de Dolisie ?",
        reponses: ["Les Lions du Niari", "Les Aigles", "Les Fauves du Niari"],
        bonne: 2,
        explication: "L'AC Léopards de Dolisie est surnommé les Fauves du Niari."
    },

    {
        question: "Quelle institution régionale émet le franc CFA utilisé en République du Congo ?",
        reponses: ["La Banque de France", "La Banque mondiale", "La BEAC (Banque des États de l'Afrique centrale)"],
        bonne: 2,
        explication: "Le franc CFA d'Afrique centrale est émis par la BEAC, la Banque des États de l'Afrique centrale."
    },

    {
        question: "Quel type de climat domine la République du Congo ?",
        reponses: ["Un climat désertique", "Un climat méditerranéen", "Un climat équatorial et tropical humide"],
        bonne: 2,
        explication: "La République du Congo connaît un climat équatorial et tropical humide."
    },

    {
        question: "Quelle est la principale ressource d'exportation de l'économie congolaise ?",
        reponses: ["Le café", "Le coton", "Le pétrole"],
        bonne: 2,
        explication: "Le pétrole constitue la principale ressource d'exportation de la République du Congo."
    },
      {
        question: "Quel pays est voisin de la République du Congo à l'ouest ?",
        reponses: ["Le Cameroun", "La RCA", "Le Gabon"],
        bonne: 2,
        explication: "Le Gabon est le pays voisin de la République du Congo à l'ouest."
    },

    {
        question: "Quel pays est voisin de la République du Congo au nord-nord-est ?",
        reponses: ["La République centrafricaine", "Le Gabon", "La RDC"],
        bonne: 0,
        explication: "La République centrafricaine borde la République du Congo au nord-nord-est."
    },

    {
        question: "Quelle enclave angolaise est voisine de la République du Congo au sud-ouest ?",
        reponses: ["Le Cabinda", "Le Zanzibar", "Le Somaliland"],
        bonne: 0,
        explication: "Le Cabinda, enclave angolaise, est voisin de la République du Congo au sud-ouest."
    },

    {
        question: "Avec quel pays la République du Congo partage-t-elle sa plus longue frontière terrestre ?",
        reponses: ["Le Gabon", "Le Cameroun", "La RDC"],
        bonne: 0,
        explication: "La frontière avec le Gabon, longue d'environ 1 900 km, est la plus longue frontière terrestre du Congo."
    },

    {
        question: "Quelle est l'altitude approximative du mont Nabemba, point culminant du pays ?",
        reponses: ["1 020 mètres", "720 mètres", "1 500 mètres"],
        bonne: 0,
        explication: "Le mont Nabemba culmine à environ 1 020 mètres d'altitude."
    },

    {
        question: "En quelle année le parc national d'Odzala-Kokoua, l'un des plus vieux d'Afrique, a-t-il été créé ?",
        reponses: ["1935", "1960", "1993"],
        bonne: 0,
        explication: "Le parc national d'Odzala-Kokoua a été créé en 1935."
    },

    {
        question: "Quel mammifère aquatique rare est protégé dans les lagunes du parc de Conkouati-Douli ?",
        reponses: ["Le lamantin d'Afrique", "L'hippopotame nain", "Le phoque moine"],
        bonne: 0,
        explication: "Le lamantin d'Afrique est protégé dans les lagunes et rivières du parc de Conkouati-Douli."
    },

    {
        question: "Quel cours d'eau se jette dans le fleuve Congo à Liranga ?",
        reponses: ["L'Oubangui", "La Sangha", "La Léfini"],
        bonne: 0,
        explication: "L'Oubangui se jette dans le fleuve Congo à la hauteur de Liranga."
    },

    {
        question: "L'équateur traverse-t-il le territoire de la République du Congo ?",
        reponses: [ "Oui, il traverse le nord du pays(à Makoua)", "Non, il passe loin au sud", "Non, uniquement au large des côtes"],
        bonne: 0,
        explication: "Le Congo est situé de part et d'autre de l'équateur, qui traverse le nord du pays."
    },

    {
        question: "Quel nouveau département créé en 2024 a pour chef-lieu Odziba ?",
        reponses: ["Le Djoué-Léfini", "La Nkéni-Alima", "Le Congo-Oubangui"],
        bonne: 0,
        explication: "Le département du Djoué-Léfini, créé en 2024, a pour chef-lieu Odziba."
    },

    {
        question: "Quel nouveau département créé en 2024 a pour chef-lieu Gamboma ?",
        reponses: ["La Nkéni-Alima", "Le Congo-Oubangui", "Le Djoué-Léfini"],
        bonne: 0,
        explication: "Le département de la Nkéni-Alima, créé en 2024, a pour chef-lieu Gamboma."
    },

    {
        question: "Quel nouveau département créé en 2024 a pour chef-lieu Mossaka ?",
        reponses: ["La Nkéni-Alima", "Le Djoué-Léfini", "Le Congo-Oubangui"],
        bonne: 2,
        explication: "Le département du Congo-Oubangui, créé en 2024, a pour chef-lieu Mossaka."
    },

    {
        question: "Quelle était approximativement la population de Pointe-Noire selon le recensement de 2023 ?",
        reponses: ["1,4 million", "700 000", "2,5 millions"],
        bonne: 0,
        explication: "Pointe-Noire comptait environ 1,4 million d'habitants lors du recensement de 2023."
    },

    {
        question: "Quel est le département le plus vaste de la République du Congo en superficie ?",
        reponses: ["La Likouala", "Le Pool", "La Sangha"],
        bonne: 0,
        explication: "La Likouala, avec près de 62 000 km², est le département le plus vaste du pays."
    },

    {
        question: "Quel est le département le plus petit en superficie ?",
        reponses: ["Pointe-Noire", "Le Kouilou", "La Lékoumou"],
        bonne: 0,
        explication: "Le département de Pointe-Noire est le plus petit du pays en superficie."
    },

    {
        question: "Quel est le département le moins peuplé de la République du Congo ?",
        reponses: ["Le Kouilou", "La Sangha", "La Cuvette-Ouest"],
        bonne: 0,
        explication: "Le Kouilou est le département le moins peuplé du pays."
    },

    {
        question: "Environ quel pourcentage du territoire congolais est recouvert de forêt tropicale ?",
        reponses: ["70 %", "50 %", "90 %"],
        bonne: 0,
        explication: "Environ 70 % du territoire de la République du Congo est recouvert de forêt tropicale."
    },

    {
        question: "Quel ancien royaume précolonial était établi sur la côte atlantique, dans l'actuel Kouilou ?",
        reponses: ["Le royaume de Loango", "Le royaume du Kanem", "Le royaume du Buganda"],
        bonne: 0,
        explication: "Le royaume de Loango était établi sur la côte atlantique, dans la région de l'actuel Kouilou."
    },

    {
        question: "Sous quel autre nom le royaume Téké était-il connu dans les sources historiques anciennes ?",
        reponses: ["Anzico", "Ngoyo", "Kongo"],
        bonne: 0,
        explication: "Le royaume Téké est également désigné sous le nom d'Anzico dans plusieurs sources anciennes."
    },

    {
        question: "Quel titre portait le souverain du royaume Téké rencontré par Pierre Savorgnan de Brazza ?",
        reponses: ["Manikongo", "Mwami", "Makoko"],
        bonne: 2,
        explication: "Le souverain du royaume Téké portait le titre de Makoko."
    },

    {
        question: "Quel navigateur portugais atteignit l'embouchure du fleuve Congo en 1482 ?",
        reponses: ["Vasco de Gama", "Bartolomeu Dias", "Diogo Cão"],
        bonne: 2,
        explication: "Le navigateur portugais Diogo Cão atteignit l'embouchure du fleuve Congo en 1482."
    },

    {
        question: "Entre quelles années Pierre Savorgnan de Brazza effectua-t-il sa première série d'explorations dans la région ?",
        reponses: ["1875 et 1878", "1885 et 1888", "1890 et 1893"],
        bonne: 0,
        explication: "Brazza effectua une première série d'explorations entre 1875 et 1878."
    },

    {
        question: "Quelle conférence internationale de 1884-1885 a fixé les règles du partage colonial de l'Afrique ?",
        reponses: ["La Conférence de Bandung", "La Conférence de Genève", "La Conférence de Berlin"],
        bonne: 2,
        explication: "La Conférence de Berlin de 1884-1885 a fixé les règles européennes du partage colonial de l'Afrique."
    },

    {
        question: "En quelle année l'Afrique équatoriale française (AEF) a-t-elle été organisée en fédération coloniale ?",
        reponses: ["1898", "1930", "1910"],
        bonne: 2,
        explication: "L'Afrique équatoriale française a été organisée en fédération coloniale en 1910."
    },

    {
        question: "Quel nom colonial désignait le territoire correspondant à l'actuelle République du Congo ?",
        reponses: ["Le Moyen-Congo", "Le Congo belge", "Le Congo portugais"],
        bonne: 0,
        explication: "Le territoire correspondant à l'actuelle République du Congo était appelé Moyen-Congo pendant la période coloniale."
    },

    {
        question: "Quel administrateur colonial devint gouverneur général de l'AEF en novembre 1940 ?",
        reponses: ["René Pleven", "André Malraux", "Félix Éboué"],
        bonne: 2,
        explication: "Félix Éboué fut nommé gouverneur général de l'AEF en novembre 1940."
    },

    {
        question: "Quelle loi française de 1956 accorda une plus grande autonomie politique aux territoires d'outre-mer ?",
        reponses: ["La loi Debré", "La loi Ferry", "La loi-cadre Defferre"],
        bonne: 2,
        explication: "La loi-cadre Defferre de 1956 renforça l'autonomie politique des territoires français d'outre-mer."
    },

    {
        question: "Quel parti politique Fulbert Youlou fonda-t-il en 1956 ?",
        reponses: ["Le MSA", "Le PCT", "L'UDDIA"],
        bonne: 2,
        explication: "Fulbert Youlou fonda l'UDDIA (Union démocratique de défense des intérêts africains) en 1956."
    },

    {
        question: "À quelle date la République du Congo fut-elle admise à l'Organisation des Nations unies ?",
        reponses: ["15 août 1960", "28 novembre 1960", "20 septembre 1960"],
        bonne: 2,
        explication: "La République du Congo fut admise à l'ONU le 20 septembre 1960."
    },

    {
        question: "À quelles dates précises se déroulent les Trois Glorieuses de 1963 ?",
        reponses: ["10, 11 et 12 août", "15, 16 et 17 août", "13, 14 et 15 août"],
        bonne: 2,
        explication: "Les Trois Glorieuses se déroulent les 13, 14 et 15 août 1963."
    },

    {
        question: "Quel parti devient parti unique sous Alphonse Massamba-Débat en 1964 ?",
        reponses: ["Le PCT", "L'UDDIA", "Le Mouvement national de la révolution (MNR)"],
        bonne: 2,
        explication: "Le Mouvement national de la révolution (MNR) devient le parti unique sous Massamba-Débat en 1964."
    },

    {
        question: "Qui fut nommé Premier ministre sous la présidence d'Alphonse Massamba-Débat ?",
        reponses: ["Pascal Lissouba", "Henri Lopes", "André Milongo"],
        bonne: 0,
        explication: "Pascal Lissouba fut nommé Premier ministre sous la présidence d'Alphonse Massamba-Débat."
    },

    {
        question: "Quel organe révolutionnaire fut créé lors de la crise politique de 1968 ?",
        reponses: ["Le Conseil national de la Révolution", "Le Conseil économique et social", "Le Conseil de la magistrature"],
        bonne: 0,
        explication: "Le Conseil national de la Révolution (CNR) fut créé lors de la crise politique de 1968."
    },

    {
        question: "En quelle année le Parti congolais du travail (PCT) a-t-il été créé ?",
        reponses: ["1964", "1977", "1969"],
        bonne: 2,
        explication: "Le Parti congolais du travail a été créé le 31 décembre 1969."
    },

    {
        question: "Quel nom le Congo adopte-t-il officiellement à la fin de 1969 ?",
        reponses: ["République socialiste du Congo", "État populaire du Congo", "République populaire du Congo"],
        bonne: 2,
        explication: "Le pays adopte officiellement le nom de République populaire du Congo à la fin de 1969."
    },

    {
        question: "Qui succède à Marien Ngouabi à la tête du pays en 1977 ?",
        reponses: ["Denis Sassou Nguesso", "Pascal Lissouba", "Joachim Yhombi-Opango"],
        bonne: 2,
        explication: "Joachim Yhombi-Opango dirige le pays après la mort de Marien Ngouabi en 1977."
    },

    {
        question: "À quelle date Joachim Yhombi-Opango est-il écarté du pouvoir ?",
        reponses: ["18 mars 1977", "14 août 1979", "5 février 1979"],
        bonne: 2,
        explication: "Joachim Yhombi-Opango est écarté du pouvoir le 5 février 1979."
    },

    {
        question: "Avec quel grand État socialiste le Congo signe-t-il un traité d'amitié et de coopération en 1981 ?",
        reponses: ["Cuba", "La Chine", "L'Union soviétique"],
        bonne: 2,
        explication: "Le Congo signe en 1981 un traité d'amitié et de coopération avec l'Union soviétique."
    },

    {
        question: "En quelle année Denis Sassou Nguesso est-il réélu président pendant la période du parti unique ?",
        reponses: ["1979", "1989", "1984"],
        bonne: 2,
        explication: "Denis Sassou Nguesso est réélu président en 1984, pendant la période du parti unique."
    },

    {
        question: "Quelle décision idéologique majeure le PCT prend-il en décembre 1990 ?",
        reponses: ["Il devient une monarchie", "Il fusionne avec l'UDDIA", "Il abandonne le marxisme-léninisme"],
        bonne: 2,
        explication: "Le PCT abandonne officiellement le marxisme-léninisme en décembre 1990."
    },

    {
        question: "Quel nom portait la milice associée au camp de Denis Sassou Nguesso pendant la guerre civile de 1997 ?",
        reponses: ["Les Ninjas", "Les Cocoyes", "Les Cobras"],
        bonne: 2,
        explication: "Les Cobras étaient la milice associée au camp de Denis Sassou Nguesso en 1997."
    },

    {
        question: "Quel groupe armé était principalement associé à Bernard Kolélas pendant la guerre civile de 1997 ?",
        reponses: ["Les Cobras", "Les Zoulous", "Les Ninjas"],
        bonne: 2,
        explication: "Les Ninjas étaient principalement associés à Bernard Kolélas pendant la guerre civile de 1997."
    },

    {
        question: "Quel pays a apporté un soutien militaire déterminant au camp de Denis Sassou Nguesso en 1997 ?",
        reponses: ["Le Sénégal", "Le Maroc", "L'Angola"],
        bonne: 2,
        explication: "Les forces angolaises ont apporté un soutien militaire déterminant à Denis Sassou Nguesso en 1997."
    },

    {
        question: "En quelle année une nouvelle Constitution a-t-elle été adoptée par référendum après la guerre civile de 1997 ?",
        reponses: ["1999", "2008", "2002"],
        bonne: 2,
        explication: "Une nouvelle Constitution a été adoptée par référendum en janvier 2002."
    },

    {
        question: "Combien de fois le mandat du Président de la République du Congo est-il renouvelable selon la Constitution de 2015 ?",
        reponses: ["Une fois", "Trois fois", "Deux fois"],
        bonne: 2,
        explication: "Le mandat présidentiel, fixé à cinq ans, est renouvelable deux fois selon la Constitution de 2015."
    },

    {
        question: "Quel âge minimum faut-il avoir pour être candidat à l'élection présidentielle au Congo ?",
        reponses: ["25 ans", "35 ans", "30 ans"],
        bonne: 2,
        explication: "L'âge minimum pour être candidat à la présidence est de trente ans révolus."
    },

    {
        question: "Combien de membres compte la Cour constitutionnelle de la République du Congo ?",
        reponses: ["Sept", "Douze", "Neuf"],
        bonne: 2,
        explication: "La Cour constitutionnelle de la République du Congo est composée de neuf membres."
    },

    {
        question: "Le Parlement de la République du Congo est-il composé d'une ou de deux chambres ?",
        reponses: ["D'une seule chambre", "De trois chambres", "De deux chambres"],
        bonne: 2,
        explication: "Le Parlement congolais est bicaméral : il comprend l'Assemblée nationale et le Sénat."
    },

    {
        question: "Qui peut dissoudre l'Assemblée nationale selon la Constitution congolaise ?",
        reponses: ["Le Premier ministre", "Le Président du Sénat", "Le Président de la République"],
        bonne: 2,
        explication: "Le Président de la République peut dissoudre l'Assemblée nationale."
    },

    {
        question: "Par quel acte l'Assemblée nationale peut-elle renverser le Gouvernement ?",
        reponses: ["Un référendum", "Un décret", "Une motion de censure"],
        bonne: 2,
        explication: "L'Assemblée nationale peut renverser le Gouvernement par le vote d'une motion de censure."
    },

    {
        question: "Quelle juridiction spéciale la Constitution institue-t-elle pour juger le Président en cas de haute trahison ?",
        reponses: ["La Cour suprême", "Le Conseil supérieur de la magistrature", "La Haute Cour de justice"],
        bonne: 2,
        explication: "La Constitution institue une Haute Cour de justice, notamment compétente en cas de haute trahison du Président."
    },

    {
        question: "Qui est l'actuel Premier ministre, chef du Gouvernement de la République du Congo ?",
        reponses: ["Isidore Mvouba", "Pierre Ngolo", "Anatole Collinet Makosso"],
        bonne: 2,
        explication: "Anatole Collinet Makosso est Premier ministre, chef du Gouvernement de la République du Congo."
    },

    {
        question: "Quel plat est considéré comme un plat national du Congo, préparé dans une sauce de noix de palme ?",
        reponses: ["Le saka-saka", "Le fufu", "Le poulet moambe"],
        bonne: 2,
        explication: "Le poulet moambe, cuisiné dans une sauce à base de pulpe de noix de palme, est un plat emblématique du Congo."
    },

    {
        question: "Le saka-saka, plat traditionnel congolais, est préparé à partir de quel ingrédient principal ?",
        reponses: ["Des feuilles de manioc pilées", "Des grains de maïs", "Des feuilles de bananier"],
        bonne: 0,
        explication: "Le saka-saka est préparé à base de feuilles de manioc pilées."
    },

    {
        question: "Comment appelle-t-on la technique traditionnelle consistant à cuire du poisson enveloppé dans des feuilles ?",
        reponses: ["Le fufu", "Le madesu", "Le maboké"],
        bonne: 2,
        explication: "Le maboké (ou liboke) consiste à cuire du poisson enveloppé dans des feuilles."
    },

    {
        question: "Quel accompagnement à base de manioc ou de maïs sert à saisir la sauce et la viande avec les doigts ?",
        reponses: ["Le riz", "Le fufu (foufou)", "Le pain"],
        bonne: 1,
        explication: "Le fufu (ou foufou) est une pâte de manioc ou de maïs utilisée pour saisir la sauce et la viande."
    },

    {
        question: "Quel est le groupe ethnique majoritaire en République du Congo ?",
        reponses: ["Les Bateke", "Les Bakongo", "Les Mbochi"],
        bonne: 1,
        explication: "Les Bakongo constituent le groupe ethnique majoritaire du pays."
    },

    {
        question: "Quel est le deuxième groupe ethnique le plus important du pays, réputé pour ses masques et statues ?",
        reponses: ["Les Bateke", "Les Sangha", "Les Vili"],
        bonne: 0,
        explication: "Les Bateke forment le deuxième groupe ethnique du pays et sont réputés pour leurs masques et statues."
    },

    {
        question: "À quel groupe ethnique appartient l'actuel président Denis Sassou Nguesso ?",
        reponses: ["Bakongo", "Mbochi", "Bateke"],
        bonne: 1,
        explication: "Denis Sassou Nguesso appartient au groupe ethnique Mbochi."
    },

    {
        question: "Comment appelle-t-on le tambour à fente traditionnel, aussi utilisé pour transmettre des messages codés ?",
        reponses: ["La sanza", "Le lokole", "Le balafon"],
        bonne: 1,
        explication: "Le lokole est un tambour à fente qui servait aussi à transmettre des messages codés à distance."
    },

    {
        question: "Comment appelle-t-on localement le xylophone traditionnel congolais ?",
        reponses: ["Le madimba", "Le ngoma", "La sanza"],
        bonne: 0,
        explication: "Le madimba est le nom local du xylophone traditionnel, aussi appelé balafon."
    },

    {
        question: "Quel musicien congolais est crédité d'avoir introduit la sanza dans un orchestre moderne en 1954 ?",
        reponses: ["Franco Luambo", "Antoine Moundanda", "Joseph Kabaselle"],
        bonne: 1,
        explication: "Antoine Moundanda est crédité d'avoir introduit la sanza dans un orchestre moderne en 1954."
    },

    {
        question: "Quel poète congolais est considéré comme une figure majeure de la littérature du pays ?",
        reponses: ["Tchicaya U Tam'si", "Emmanuel Dongala", "Guy Menga"],
        bonne: 0,
        explication: "Tchicaya U Tam'si est considéré comme l'un des plus grands poètes congolais."
    },

    {
        question: "Quel écrivain congolais, également ancien Premier ministre, est l'auteur du « Pleurer-rire » ?",
        reponses: ["Guy Menga", "Henri Lopes", "Jean-Baptiste Tati-Loutard"],
        bonne: 1,
        explication: "Henri Lopes, écrivain et ancien Premier ministre, est l'auteur du « Pleurer-rire »."
    },

    {
        question: "Dans quelle ville congolaise est né le poète Jean-Baptiste Tati-Loutard en 1938 ?",
        reponses: ["Brazzaville", "Pointe-Noire", "Dolisie"],
        bonne: 1,
        explication: "Jean-Baptiste Tati-Loutard est né en 1938 à Pointe-Noire."
    },

    {
        question: "Quel métier scientifique l'écrivain congolais Emmanuel Dongala exerce-t-il en parallèle de l'écriture ?",
        reponses: ["Médecin", "Chimiste", "Géologue"],
        bonne: 1,
        explication: "Emmanuel Dongala est à la fois écrivain et chimiste de formation."
    },

    {
        question: "Dans quel pays la CAN 1972, remportée par le Congo, a-t-elle été organisée ?",
        reponses: ["Le Cameroun", "Le Ghana", "L'Égypte"],
        bonne: 0,
        explication: "La CAN 1972, remportée par le Congo, a été organisée au Cameroun."
    },

    {
        question: "En quelle année la Fédération congolaise de football (FECOFOOT) a-t-elle été fondée ?",
        reponses: ["1960", "1962", "1966"],
        bonne: 1,
        explication: "La FECOFOOT a été fondée en 1962."
    },

    {
        question: "Quel ancien international congolais a joué à Blackburn Rovers puis à l'Anzhi Makhachkala ?",
        reponses: ["Christopher Samba", "Delvin Ndinga", "Prince Oniangué"],
        bonne: 0,
        explication: "Christopher Samba a joué plusieurs saisons à Blackburn Rovers avant de rejoindre l'Anzhi Makhachkala."
    },

    {
        question: "Quel joueur congolais a évolué à l'AJ Auxerre puis à l'AS Monaco ?",
        reponses: ["Prince Oniangué", "Delvin Ndinga", "Fabrice Ondama"],
        bonne: 1,
        explication: "Delvin Ndinga a joué à l'AJ Auxerre avant de rejoindre l'AS Monaco."
    },

    {
        question: "Quel ancien capitaine des Diables Rouges a joué au Stade de Reims puis à Wolverhampton ?",
        reponses: ["Prince Oniangué", "Chris Malonga", "Fabrice Ondama"],
        bonne: 0,
        explication: "Prince Oniangué a joué au Stade de Reims avant de rejoindre Wolverhampton Wanderers."
    },

    {
        question: "Quelle est la capacité du stade de Kintélé, construit pour les Jeux africains de 2015 ?",
        reponses: ["30 000 places", "60 000 places", "90 000 places"],
        bonne: 1,
        explication: "Le stade olympique de Kintélé a une capacité de 60 000 places."
    },

    {
        question: "En quelle année la Fédération congolaise de basket-ball (FECOKET) a-t-elle été créée ?",
        reponses: ["1958", "1961", "1970"],
        bonne: 1,
        explication: "La FECOKET a été créée en octobre 1961."
    },

    {
        question: "En quelle année la Fédération congolaise de handball (FECOHAND) a-t-elle été fondée ?",
        reponses: ["1961", "1970", "1980"],
        bonne: 1,
        explication: "La FECOHAND a été fondée en 1970."
    },

    {
        question: "Combien de titres l'équipe féminine du Congo a-t-elle remportés au Championnat d'Afrique de handball ?",
        reponses: ["Deux", "Quatre", "Six"],
        bonne: 1,
        explication: "L'équipe féminine du Congo a remporté quatre titres au Championnat d'Afrique de handball."
    },

    {
        question: "En 2026, quel club congolais a remporté le Championnat d'Afrique des clubs vainqueurs de coupe de handball masculin ?",
        reponses: ["Inter Club", "Étoile du Congo", "AS Otohô"],
        bonne: 1,
        explication: "L'Étoile du Congo a remporté ce titre continental en juillet 2026, à Kinshasa."
    },

    {
        question: "Quel est le surnom du club de football AC Léopards de Dolisie ?",
        reponses: ["Les Fauves du Niari", "Les Lions de la Cuvette", "Les Aigles du Pool"],
        bonne: 0,
        explication: "L'AC Léopards de Dolisie est surnommé les Fauves du Niari."
    },

    {
        question: "Quel club de football est traditionnellement associé aux couleurs jaune et noir à Brazzaville ?",
        reponses: ["L'Étoile du Congo", "Les Diables Noirs", "L'Inter Club"],
        bonne: 1,
        explication: "Les Diables Noirs de Brazzaville sont traditionnellement associés aux couleurs jaune et noir."
    },

    {
        question: "Quel club a remporté la Coupe de la Confédération de la CAF en 2012 ?",
        reponses: ["L'Étoile du Congo", "L'AC Léopards", "Le CARA"],
        bonne: 1,
        explication: "L'AC Léopards de Dolisie a remporté la Coupe de la Confédération de la CAF en 2012."
    },

    {
        question: "Quel ancien international congolais a évolué au Paris Saint-Germain dans les années 1970 ?",
        reponses: ["François M'Pelé", "Delvin Ndinga", "Fabrice Ondama"],
        bonne: 0,
        explication: "François M'Pelé a évolué au Paris Saint-Germain à partir de 1973."
    },

    {
        question: "En 2015, jusqu'à quel stade de la CAN la République du Congo est-elle allée ?",
        reponses: ["La phase de groupes", "Les quarts de finale", "Les demi-finales"],
        bonne: 1,
        explication: "Les Diables Rouges ont atteint les quarts de finale de la CAN 2015."
    },

    {
        question: "Quel est le nom de scène du chanteur congolais Ibambi Okombi Rogatien, leader du groupe Extra Musica ?",
        reponses: ["Zao", "Roga-Roga", "Aurlus Mabélé"],
        bonne: 1,
        explication: "Roga-Roga est le nom de scène d'Ibambi Okombi Rogatien, leader du groupe Extra Musica."
    },

    {
        question: "Quel royaume précolonial a donné son nom à la ville de Loango, aujourd'hui chef-lieu du Kouilou ?",
        reponses: ["Le royaume Kongo", "Le royaume de Loango", "Le royaume Tio"],
        bonne: 1,
        explication: "La ville de Loango a donné son nom au royaume de Loango, ancienne entité précoloniale de la côte atlantique."
    },

    {
        question: "Quelle ville du Kouilou fut un ancien port d'embarquement d'esclaves lors de la traite transatlantique ?",
        reponses: ["Hinda", "Loango", "Madingo-Kayes"],
        bonne: 1,
        explication: "Loango fut un ancien port d'embarquement d'esclaves lors de la traite transatlantique."
    },

    {
        question: "Comment appelle-t-on un membre féminin du mouvement de la SAPE ?",
        reponses: ["Une ambianceuse", "Une sapeuse", "Une élégante"],
        bonne: 1,
        explication: "Une adepte féminine de la SAPE est appelée une sapeuse."
    },

    {
        question: "Quelle ville est considérée par les sapeurs congolais comme la capitale mythique de la sape ?",
        reponses: ["Bruxelles", "Paris", "Londres"],
        bonne: 1,
        explication: "Paris est considérée comme la capitale mythique de la SAPE."
    },

    {
        question: "Quel est le nom du fleuve qui traverse le nord de la République du Congo et donne son nom à un département ?",
        reponses: ["La Sangha", "La Léfini", "La Bouenza"],
        bonne: 0,
        explication: "La Sangha est un cours d'eau du bassin du Congo qui traverse le nord du pays et donne son nom à un département."
    },

    {
        question: "Quel massif montagneux forestier occupe le sud-ouest de la République du Congo ?",
        reponses: ["Le massif du Chaillu", "Le Mayombe", "Les plateaux Batéké"],
        bonne: 1,
        explication: "Le Mayombe est le massif montagneux forestier du sud-ouest du Congo."
    },

    {
        question: "Comment appelle-t-on les vastes plateaux sablonneux du centre du pays, couverts de savane ?",
        reponses: ["Les plateaux Batéké", "Le massif du Chaillu", "Le Mayombe"],
        bonne: 0,
        explication: "Les plateaux Batéké sont de vastes plateaux sablonneux couverts de savane, au centre du pays."
    },

    {
        question: "À Brazzaville, un immeuble emblématique porte le nom du point culminant du pays. Comment s'appelle-t-il ?",
        reponses: ["La Tour Elf", "La Tour Nabemba", "La Tour du Fleuve"],
        bonne: 1,
        explication: "La Tour Nabemba, à Brazzaville, tire son nom du mont Nabemba."
    },

    {
        question: "Entre quelles années le chemin de fer Congo-Océan a-t-il été construit ?",
        reponses: ["1900 et 1910", "1921 et 1934", "1945 et 1955"],
        bonne: 1,
        explication: "Le chemin de fer Congo-Océan a été construit entre 1921 et 1934."
    },

    {
        question: "Quel est le fuseau horaire de la République du Congo ?",
        reponses: ["UTC", "UTC+1", "UTC+3"],
        bonne: 1,
        explication: "La République du Congo est à l'heure UTC+1 (heure d'Afrique de l'Ouest)."
    },

    {
        question: "Pointe-Noire a été fondée en 1883 en vue de la construction de quel type d'infrastructure ?",
        reponses: ["Un aéroport", "Un port en eau profonde", "Une raffinerie"],
        bonne: 1,
        explication: "Pointe-Noire a été fondée en 1883 en vue de la construction d'un port en eau profonde."
    },

    {
        question: "Quelle loi de 2003 a fixé l'organisation administrative du Congo en 12 départements avant la réforme de 2024 ?",
        reponses: ["La loi n°3-2003", "La loi n°1-1995", "La loi n°10-1998"],
        bonne: 0,
        explication: "La loi n°3-2003 a fixé l'organisation du pays en 12 départements, avant la réforme de 2024."
    },

    {
        question: "Quel massif se situe entre les plateaux Batéké et la vallée du Niari ?",
        reponses: ["Le Mayombe", "Le massif du Chaillu", "Le mont Nabemba"],
        bonne: 1,
        explication: "Le massif du Chaillu se situe entre les plateaux Batéké et la vallée du Niari."
    },

    {
        question: "Comment appelle-t-on l'instrument de percussion traditionnel fabriqué à partir de calebasses séchées remplies de grains ?",
        reponses: ["Le balafon", "Les maracas", "Le tam-tam"],
        bonne: 1,
        explication: "Les maracas traditionnelles sont fabriquées à partir de calebasses séchées remplies de grains."
    },

    {
        question: "Le parc national de Conkouati-Douli, sur la façade atlantique, est un site majeur de nidification pour quelle espèce ?",
        reponses: ["Les albatros", "Les tortues luth", "Les manchots"],
        bonne: 1,
        explication: "Les plages du parc de Conkouati-Douli constituent un site majeur de nidification pour les tortues luth."
    },

    {
        question: "Quelle industrie constitue le principal moteur économique de la ville de Pointe-Noire ?",
        reponses: ["L'industrie textile", "Le pétrole et l'activité portuaire", "L'industrie automobile"],
        bonne: 1,
        explication: "Le pétrole et l'activité du port autonome font de Pointe-Noire le principal centre économique du pays."
    },

    {
        question: "Quelle expression idéologique était utilisée par le régime d'Alphonse Massamba-Débat pour décrire son orientation ?",
        reponses: ["Le socialisme bantou", "Le libéralisme tropical", "Le nationalisme impérial"],
        bonne: 0,
        explication: "Le régime de Massamba-Débat se réclamait notamment d'un « socialisme bantou »."
    },

    {
        question: "En 1940, quelle ville devient un centre majeur de la France libre en Afrique ?",
        reponses: ["Pointe-Noire", "Brazzaville", "Dolisie"],
        bonne: 1,
        explication: "Brazzaville est devenue en 1940 un centre majeur de la France libre en Afrique."
    }



];
    const SUPABASE_URL = "https://ccxbknqqfwlusiprtwbs.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_CdvCSecR8dOp0UfZwW82UQ_y5LBGGsJ";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
supabaseClient
    .from("joueur")
    .select("id")
    .limit(1)
    .then(({ data, error }) => {

        if (error) {
            console.error("❌ Connexion Supabase échouée :", error);
        } else {
            console.log("✅ CongoQuiz est connecté à Supabase !");
            console.log(data);
        }

    });
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
    let reponseVerrouillee = false;
    let nombreQuestions = 0;
    let numeroQuestion = 0;
    let score = 0;
    let temps = 20;
    let chrono;
    let intervalle;
    let categorieChoisie = "";
    let dernierMode = "";
    let questionsActuelles = questions;
    function demarrerQuiz(nombre){

        nombreQuestions = nombre;
        melangerQuestions(questionsActuelles);
        dernierMode = "categorie";
        numeroQuestion = 0;
        score = 0;
    
        document.querySelector(".accueil").innerHTML = `
        <p id="numeroQuestion"></p>
        <div class="barreProgression">
          <div id="progression"></div>
        </div>
        <p id="chrono">⏱️ Temps : 20 s</p>
        <p id="messageErreur" style="color:red;font-weight:bold;"></p>

        <h2 id="question"></h2>

        <div id="reponses"></div>
        
        <p id="explication"></p>
        
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
        reponseVerrouillee = false;
        document.getElementById("numeroQuestion").innerHTML =
        "Question " + (numeroQuestion + 1) + " / " + nombreQuestions;
        let pourcentage = ((numeroQuestion + 1) / nombreQuestions) * 100;

        document.getElementById("progression").style.width =
        pourcentage + "%";

        document.getElementById("question").innerHTML =
        questionsActuelles[numeroQuestion].question
    
        let html = "";
    
        questionsActuelles[numeroQuestion].reponses.forEach(function(rep,index){
    
            html += `
            <label class="carte-reponse" onclick="selectionnerReponse(${index})">
            
                <input
                    type="radio"
                    name="rep"
                    value="${index}"
                    style="display:none;">
            
                <span>${rep}</span>
            
            </label>
            `;
        });
    
        document.getElementById("reponses").innerHTML = html;
        demarrerChrono();
    
    }
    function selectionnerReponse(index){

        if(reponseVerrouillee){
            return;
        }
    
        reponseVerrouillee = true;
    
        let radios = document.querySelectorAll('input[name="rep"]');
    
        radios[index].checked = true;
    
        verifier();
    
    }
    
    function verifier(){

        let choix = document.querySelector('input[name="rep"]:checked');
        let cartes = document.querySelectorAll(".carte-reponse");
    
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

        if (Number(choix.value) === questionsActuelles[numeroQuestion].bonne) {

            score++;
            cartes[questionsActuelles[numeroQuestion].bonne].classList.add("bonne");
        
            const son = document.getElementById("sonCorrect");
            son.currentTime = 0;
            son.play().catch(err => console.log(err));
        
            texte = "✅ Bonne réponse !<br><br>";
        
        } else {
        
            const son = document.getElementById("sonFaux");
            son.currentTime = 0;
            son.play().catch(err => console.log(err));
        
            texte = "❌ Mauvaise réponse.<br><br>";
            cartes[choix.value].classList.add("mauvaise");

            cartes[questionsActuelles[numeroQuestion].bonne].classList.add("bonne");
        
        }
        
        texte += "<strong>Explication :</strong><br>" +
        questionsActuelles[numeroQuestion].explication;
        
        document.getElementById("explication").innerHTML = texte;
        
        document.getElementById("btnSuivant").style.display = "inline-block";

        let radios = document.querySelectorAll('input[name="rep"]');
        radios.forEach(radio => radio.disabled = true);
    }
    async function questionSuivante(){

    document.getElementById("messageErreur").textContent = "";

    numeroQuestion++;

    if(numeroQuestion < nombreQuestions){

        afficherQuestion();

        document.getElementById("explication").innerHTML = "";

        document.getElementById("btnSuivant").style.display = "none";

    }else{

        let joueur = chargerJoueur();

        // ==========================================
        // FIN DE LA PARTIE
        // ==========================================

        // Une partie terminée = une partie jouée
        joueur.partiesJouees++;

        // ==========================================
        // AJOUT DES POINTS
        // ==========================================
        // 1 bonne réponse = 2 points
        // Mauvaise réponse = 0 point
        // Temps écoulé = 0 point
        // Aucune pénalité

        joueur.points += score * 2;

        // ==========================================
        // VICTOIRE PARFAITE
        // ==========================================

        if(score === nombreQuestions){
            joueur.partiesGagnees++;
        }

        // ==========================================
        // MEILLEUR SCORE PAR CATÉGORIE
        // ==========================================

        if(categorieChoisie === "sport" && score > joueur.sport){
            joueur.sport = score;
        }

        if(categorieChoisie === "histoire" && score > joueur.histoire){
            joueur.histoire = score;
        }

        if(categorieChoisie === "culture" && score > joueur.culture){
            joueur.culture = score;
        }

        if(categorieChoisie === "institutions" && score > joueur.institutions){
            joueur.institutions = score;
        }

        if(categorieChoisie === "geographie" && score > joueur.geographie){
            joueur.geographie = score;
        }

        if(categorieChoisie === "personnalites" && score > joueur.personnalites){
            joueur.personnalites = score;
        }

        // ==========================================
        // SAUVEGARDE LOCALE
        // ==========================================

        sauvegarderJoueur(joueur);

        // ==========================================
        // MISE À JOUR AUTOMATIQUE SUPABASE
        // ==========================================

        await mettreAJourJoueurSupabase(joueur);

        // ==========================================
        // AFFICHAGE DU RÉSULTAT
        // ==========================================

        let pourcentage = Math.round(
            (score / nombreQuestions) * 100
        );

        let niveau = "";

        if(pourcentage >= 90){

            niveau = "👑 Expert de la culture congolaise";

        }else if(pourcentage >= 70){

            niveau = "🏆 Très bon connaisseur";

        }else if(pourcentage >= 50){

            niveau = "📚 Bon niveau";

        }else if(pourcentage >= 30){

            niveau = "🌱 Continue à apprendre";

        }else{

            niveau = "💪 Débutant";

        }

        let etoiles = "";

        if(pourcentage >= 90){

            etoiles = "⭐⭐⭐⭐⭐";

        }else if(pourcentage >= 70){

            etoiles = "⭐⭐⭐⭐";

        }else if(pourcentage >= 50){

            etoiles = "⭐⭐⭐";

        }else if(pourcentage >= 30){

            etoiles = "⭐⭐";

        }else{

            etoiles = "⭐";

        }

        document.querySelector(".accueil").innerHTML = `

            <div class="finQuizContainer">

                <h1 class="finQuizTitre">
                    🎉 Quiz terminé !
                </h1>

                <div class="scoreCard">

                    <h2>${score}/${nombreQuestions}</h2>

                    <p>📊 ${pourcentage}%</p>

                    <h3>${niveau}</h3>

                    <div class="etoiles">
                        ${etoiles}
                    </div>

                </div>

                <button
                    class="rejouer"
                    onclick="rejouer()">
                    🔄 Rejouer
                </button>

                <button
                    class="retourAccueil"
                    onclick="window.location.href='index.html?accueil=1'">
                    🏠 Retour au menu
                </button>

            </div>

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

        reponseVerrouillee = true;

        const son = document.getElementById("sonFaux");
        son.currentTime = 0;
        son.play().catch(err => console.log(err));
        let texte = "⏰ Temps écoulé !<br><br>";
    
        texte += "✅ Bonne réponse : <strong>" +
        questionsActuelles[numeroQuestion].reponses[questionsActuelles[numeroQuestion].bonne] +
        "</strong><br><br>";
    
        texte += "<strong>Explication :</strong><br>" +
        questionsActuelles[numeroQuestion].explication;
    
        document.getElementById("explication").innerHTML = texte;
    
        document.getElementById("btnSuivant").style.display = "inline-block";
    
        let radios = document.querySelectorAll('input[name="rep"]');
        radios.forEach(radio => radio.disabled = true);
    }
    // ================================
// Cinématique d'introduction
// ================================
window.addEventListener("load", function () {

    const intro = document.getElementById("intro");
    const creationProfil = document.getElementById("creationProfil");

    const params = new URLSearchParams(window.location.search);

    if(params.get("accueil") === "1"){

        intro.style.display = "none";
    
        if(creationProfil){
            creationProfil.style.display = "none";
        }
    
        const accueil = document.getElementById("accueilSite");
    
        if(accueil){
            accueil.style.display = "block";
        }
    
        return;
    
    }

    setTimeout(function(){

        intro.classList.add("intro-fin");

        setTimeout(function(){

            intro.style.display = "none";

            const joueur = chargerJoueur();
            
            if(joueur.pseudo && joueur.pseudo.trim() !== ""){
            
                document.getElementById("accueilSite").style.display = "block";
            
            }else{
            
                document.getElementById("creationProfil").style.display = "flex";
            
            }

            if(creationProfil){

                const joueur = chargerJoueur();

                if(!joueur.pseudo || joueur.pseudo.trim() === ""){

                    creationProfil.style.display = "flex";

                }

            }

        },800);

    },5000);

});
// ================================
// MENU PRINCIPAL
// ================================

function ouvrirMenuJeu(){

    document.getElementById("menuPrincipal").style.display = "none";

    document.getElementById("menuJeu").style.display = "block";

}

function fermerMenuJeu(){

    document.getElementById("menuJeu").style.display = "none";

    document.getElementById("menuPrincipal").style.display = "block";

}

function ouvrirQuizGeneral(){
    dernierMode = "categorie";

    document.getElementById("menuJeu").style.display = "none";

    document.getElementById("menuQuestions").style.display = "block";

}

function ouvrirCategories(){

    document.getElementById("menuJeu").style.display = "none";

    document.getElementById("menuCategories").style.display = "block";

}

function retourMenuJeu(){

    document.getElementById("menuQuestions").style.display = "none";

    document.getElementById("menuJeu").style.display = "block";

}
function retourMenuPrincipalJeu(){

    document.getElementById("menuCategories").style.display = "none";

    document.getElementById("menuJeu").style.display = "block";

}
function ouvrirQuestionsCategorie(categorie){

    categorieChoisie = categorie;

    document.getElementById("titreCategorie").innerHTML =
        "📚 " + categorie.charAt(0).toUpperCase() + categorie.slice(1);

    document.getElementById("menuCategories").style.display = "none";

    document.getElementById("menuCategorieQuestions").style.display = "block";

}
function retourCategories(){

    document.getElementById("menuCategorieQuestions").style.display = "none";

    document.getElementById("menuCategories").style.display = "block";

}

function demarrerCategorie(nombre){
    dernierMode = "categorie";

    switch(categorieChoisie){

        case "sport":
            questionsActuelles = questionsSport;
            break;

        case "histoire":
            questionsActuelles = questionsHistoire;
            break;

        case "culture":
            questionsActuelles = questionsCulture;
            break;

        case "institutions":
            questionsActuelles = questionsInstitutions;
            break;

        case "geographie":
            questionsActuelles = questionsGeographie;
            break;

        case "personnalites":
            questionsActuelles = questionsPersonnalites;
            break;

        default:
            alert("Catégorie introuvable.");
            return;
    }

    dernierMode = "categorie";
    numeroQuestion = 0;
    score = 0;

    demarrerQuiz(nombre);

}
function rejouer(){

    numeroQuestion = 0;
    score = 0;

    if(dernierMode === "general"){

        questionsActuelles = questions;
        demarrerQuiz(nombreQuestions);

    }else if(dernierMode === "categorie"){

        demarrerQuiz(nombreQuestions);

    }

}
// ================================
// DONNÉES DU JOUEUR
// ================================

function chargerJoueur(){

    let joueur = JSON.parse(localStorage.getItem("joueur"));

    if(!joueur){

        joueur = {

            pseudo: "",
            points: 0,

            partiesJouees: 0,
            partiesGagnees: 0,

            sport: 0,
            histoire: 0,
            culture: 0,
            institutions: 0,
            geographie: 0,
            personnalites: 0,

            tempsJeu: 0,

            dernierChangementPseudo: 0
        };

        sauvegarderJoueur(joueur);
    }


    if(joueur.dernierChangementPseudo === undefined){

        joueur.dernierChangementPseudo = 0;

        sauvegarderJoueur(joueur);
    }


    return joueur;
}


function sauvegarderJoueur(joueur){

    localStorage.setItem(
        "joueur",
        JSON.stringify(joueur)
    );
}


/* ==========================================
   CRÉATION D'UN JOUEUR DANS SUPABASE
   ========================================== */

async function enregistrerJoueurSupabase(joueur){

    const { data, error } =
        await supabaseClient

            .from("joueur")

            .insert({

                pseudo: joueur.pseudo,

                points: joueur.points || 0,

                parties_jouees:
                    joueur.partiesJouees || 0,

                parties_gagnees:
                    joueur.partiesGagnees || 0,

                sport:
                    joueur.sport || 0,

                histoire:
                    joueur.histoire || 0,

                culture:
                    joueur.culture || 0,

                institutions:
                    joueur.institutions || 0,

                geographie:
                    joueur.geographie || 0,

                personnalites:
                    joueur.personnalites || 0

            })

            .select()

            .single();


    if(error){

        console.error(
            "❌ Erreur création joueur :",
            error
        );

        return null;
    }


    console.log(
        "✅ Joueur enregistré dans Supabase :",
        data
    );


    return data;
}


/* ==========================================
   MISE À JOUR D'UN JOUEUR
   ========================================== */

async function mettreAJourJoueurSupabase(joueur){

    if(!joueur.id){

        console.error(
            "❌ Aucun ID Supabase pour ce joueur."
        );

        return false;
    }


    const { data, error } =
        await supabaseClient

            .from("joueur")

            .update({

                pseudo:
                    joueur.pseudo,

                points:
                    joueur.points || 0,

                parties_jouees:
                    joueur.partiesJouees || 0,

                parties_gagnees:
                    joueur.partiesGagnees || 0,

                sport:
                    joueur.sport || 0,

                histoire:
                    joueur.histoire || 0,

                culture:
                    joueur.culture || 0,

                institutions:
                    joueur.institutions || 0,

                geographie:
                    joueur.geographie || 0,

                personnalites:
                    joueur.personnalites || 0

            })

            .eq("id", joueur.id)

            .select()

            .single();


    if(error){

        console.error(
            "❌ Erreur mise à jour Supabase :",
            error
        );

        return false;
    }


    console.log(
        "✅ Joueur mis à jour dans Supabase :",
        data
    );


    return true;
}


/* ==========================================
   MIGRATION DES ANCIENS JOUEURS
   ========================================== */

async function migrerAncienJoueurSupabase(){

    const joueur = chargerJoueur();


    /*
     * Pas de pseudo = aucun profil à migrer.
     */

    if(
        !joueur.pseudo ||
        joueur.pseudo.trim() === ""
    ){

        return joueur;
    }


    /*
     * Le joueur possède déjà un ID.
     * Il est donc déjà lié à Supabase.
     */

    if(joueur.id){

        return joueur;
    }


    console.log(
        "🔄 Ancien joueur détecté. Migration vers Supabase..."
    );


    /*
     * Création du joueur dans Supabase
     * avec toutes ses anciennes données.
     */

    const joueurSupabase =
        await enregistrerJoueurSupabase(joueur);


    /*
     * Si la création échoue,
     * on ne détruit aucune donnée locale.
     */

    if(!joueurSupabase){

        console.error(
            "❌ Migration impossible. Les données locales sont conservées."
        );

        return joueur;
    }


    /*
     * Récupération de l'ID généré
     * automatiquement par Supabase.
     */

    joueur.id =
        joueurSupabase.id;


    /*
     * Sauvegarde définitive de l'ID
     * dans le navigateur.
     */

    sauvegarderJoueur(joueur);


    console.log(
        "✅ Migration terminée. ID Supabase :",
        joueur.id
    );


    return joueur;
}


/* ==========================================
   VÉRIFICATION DU PROFIL
   ========================================== */

async function verifierProfil(){

    const joueur =
        await migrerAncienJoueurSupabase();


    const fenetre =
        document.getElementById(
            "creationProfil"
        );


    if(!fenetre){

        return;
    }


    if(
        joueur.pseudo &&
        joueur.pseudo.trim() !== ""
    ){

        fenetre.style.display =
            "none";
    }

}


/* ==========================================
   CRÉATION DU PROFIL
   ========================================== */

async function creerProfil(){

    const champ =
        document.getElementById(
            "pseudoDepart"
        );


    const pseudo =
        champ.value.trim();


    if(pseudo === ""){

        alert(
            "Veuillez entrer votre pseudo."
        );

        return;
    }


    /*
     * Récupération du joueur local.
     */

    let joueur =
        chargerJoueur();


    joueur.pseudo =
        pseudo;


    /*
     * Sauvegarde locale.
     */

    sauvegarderJoueur(joueur);


    /*
     * Création dans Supabase.
     */

    const joueurSupabase =
        await enregistrerJoueurSupabase(joueur);


    if(!joueurSupabase){

        alert(
            "❌ Impossible de créer votre profil en ligne."
        );

        return;
    }


    /*
     * Récupération de l'ID Supabase.
     */

    joueur.id =
        joueurSupabase.id;


    /*
     * Sauvegarde de l'ID.
     */

    sauvegarderJoueur(joueur);


    console.log(
        "✅ Profil créé avec l'ID Supabase :",
        joueur.id
    );


    const fenetre =
        document.getElementById(
            "creationProfil"
        );


    fenetre.classList.add(
        "fermerProfil"
    );


    setTimeout(() => {

        fenetre.style.display =
            "none";


        document.getElementById(
            "accueilSite"
        ).style.display =
            "block";

    },400);

}


/* ==========================================
   VÉRIFICATION DU PROFIL AU CHARGEMENT
   ========================================== */

window.addEventListener(
    "load",
    verifierProfil
);