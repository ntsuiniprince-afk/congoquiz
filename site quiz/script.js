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
        reponses: ["Poto-Poto", "Bacongo", "Moungali"],
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

        document.getElementById ("messageErreur").textContent = "";
    
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
    
            // Ajout des points gagnés
            joueur.points += score;
    
            // Victoire parfaite
            if(score === nombreQuestions){
                joueur.partiesGagnees++;
            }
    
            // Sanction si le joueur est sous la moyenne
            if(score < (nombreQuestions / 2)){
                joueur.points -= nombreQuestions;
            }
    
            // Empêcher les points négatifs
            if(joueur.points < 0){
                joueur.points = 0;
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