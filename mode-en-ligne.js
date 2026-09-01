/* ==========================================
   CONGOQUIZ — MODE EN LIGNE
   Gestion des confrontations en ligne
========================================== */


/* ==========================================
   ÉLÉMENTS DE LA PAGE
========================================== */

const menuPartieEnLigne =
    document.getElementById("menuPartieEnLigne");

const creationPartie =
    document.getElementById("creationPartie");

const rejoindrePartie =
    document.getElementById("rejoindrePartie");

const salleAttente =
    document.getElementById("salleAttente");

const messageModeEnLigne =
    document.getElementById("messageModeEnLigne");


/* ==========================================
   JOUEUR CONNECTÉ
========================================== */

const joueur = chargerJoueur();


/* ==========================================
   PARTIE ACTUELLE
========================================== */

let partieEnLigneActuelle = null;


/* ==========================================
   SURVEILLANCES
========================================== */

let surveillancePartie = null;

let surveillanceReponses = null;


/* ==========================================
   BASE DE QUESTIONS DU MODE EN LIGNE
========================================== */

function obtenirQuestionsCategorie(categorie){

    switch(categorie){

        case "sport":
            return questionsSport;

        case "histoire":
            return questionsHistoire;

        case "culture":
            return questionsCulture;

        case "institutions":
            return questionsInstitutions;

        case "geographie":
            return questionsGeographie;

        case "personnalites":
            return questionsPersonnalites;

        case "general":
            return questions;

        default:

            console.error(
                "❌ Catégorie inconnue :",
                categorie
            );

            return [];
    }

}


/* ==========================================
   PRÉPARER LES QUESTIONS DE LA PARTIE
========================================== */

function preparerQuestionsPartie(
    categorie,
    nombreQuestions
){

    const base =
        obtenirQuestionsCategorie(categorie);


    if(!base || base.length === 0){

        console.error(
            "❌ Aucune question disponible pour la catégorie :",
            categorie
        );

        return [];
    }


    /*
     * Copie de la base pour ne pas modifier
     * les questions originales.
     */

    const questionsMelangees =
        [...base];


    /*
     * Mélange Fisher-Yates
     */

    for(
        let i = questionsMelangees.length - 1;
        i > 0;
        i--
    ){

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            questionsMelangees[i],
            questionsMelangees[j]
        ] =
        [
            questionsMelangees[j],
            questionsMelangees[i]
        ];

    }


    return questionsMelangees.slice(
        0,
        Math.min(
            nombreQuestions,
            questionsMelangees.length
        )
    );

}


/* ==========================================
   AFFICHAGE DU PROFIL
========================================== */

function afficherProfilEnLigne(){

    const pseudo =
        document.getElementById(
            "pseudoEnLigne"
        );

    const points =
        document.getElementById(
            "pointsEnLigne"
        );


    if(pseudo){

        pseudo.textContent =
            joueur.pseudo || "Joueur";

    }


    if(points){

        points.textContent =
            joueur.points || 0;

    }

}


/* ==========================================
   MESSAGE
========================================== */

function afficherMessage(message){

    if(!messageModeEnLigne){

        return;

    }


    messageModeEnLigne.textContent =
        message;

}


/* ==========================================
   GÉNÉRATION DU CODE DE PARTIE
========================================== */

function genererCodePartie(){

    const caracteres =
        "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";


    let code =
        "CQ-";


    for(let i = 0; i < 4; i++){

        const position =
            Math.floor(
                Math.random() * caracteres.length
            );


        code +=
            caracteres[position];

    }


    return code;

}


/* ==========================================
   CRÉATION D'UN CODE UNIQUE
========================================== */

async function genererCodeUnique(){

    for(
        let tentative = 0;
        tentative < 10;
        tentative++
    ){

        const code =
            genererCodePartie();


        const {
            data,
            error
        } =
            await supabaseClient

                .from("parties_en_ligne")

                .select("id")

                .eq(
                    "code",
                    code
                )

                .limit(1);


        if(error){

            console.error(
                "❌ Erreur vérification du code :",
                error
            );

            return null;

        }


        if(
            !data ||
            data.length === 0
        ){

            return code;

        }

    }


    console.error(
        "❌ Impossible de générer un code unique."
    );


    return null;

}


/* ==========================================
   AFFICHER LA CRÉATION
========================================== */

function afficherCreationPartie(){

    menuPartieEnLigne.style.display =
        "none";

    creationPartie.style.display =
        "block";

    rejoindrePartie.style.display =
        "none";

    salleAttente.style.display =
        "none";

    afficherMessage("");

}


/* ==========================================
   AFFICHER LE MENU PRINCIPAL
========================================== */

function afficherMenuPartie(){

    menuPartieEnLigne.style.display =
        "block";

    creationPartie.style.display =
        "none";

    rejoindrePartie.style.display =
        "none";

    salleAttente.style.display =
        "none";


    afficherMessage("");

}
/* ==========================================
   CRÉER LA PARTIE
========================================== */

async function creerPartieEnLigne(){

    /* ==========================================
       VÉRIFICATION DU JOUEUR
    ========================================== */

    if(!joueur.id){

        afficherMessage(
            "❌ Votre profil n'est pas correctement enregistré en ligne."
        );

        console.error(
            "❌ Aucun ID Supabase pour le joueur."
        );

        return;
    }


    /* ==========================================
       RÉCUPÉRATION DES CHOIX
    ========================================== */

    const categorie =
        document.getElementById(
            "categoriePartie"
        ).value;


    const nombreQuestions =
        Number(
            document.getElementById(
                "nombreQuestionsPartie"
            ).value
        );


    /* ==========================================
       VÉRIFICATION DU NOMBRE
    ========================================== */

    if(![5, 10, 20].includes(nombreQuestions)){

        afficherMessage(
            "❌ Nombre de questions invalide."
        );

        return;

    }


    /* ==========================================
       PRÉPARATION DES QUESTIONS
    ========================================== */

    const questionsPartie =
        preparerQuestionsPartie(
            categorie,
            nombreQuestions
        );


    if(
        questionsPartie.length <
        nombreQuestions
    ){

        afficherMessage(
            "❌ Pas assez de questions disponibles dans cette catégorie."
        );

        return;

    }


    /* ==========================================
       DÉSACTIVATION DU BOUTON
    ========================================== */

    const bouton =
        document.getElementById(
            "confirmerCreationPartie"
        );


    bouton.disabled = true;

    bouton.textContent =
        "⏳ Création en cours...";


    try{

        /* ==========================================
           GÉNÉRATION DU CODE
        ========================================== */

        const code =
            await genererCodeUnique();


        if(!code){

            afficherMessage(
                "❌ Impossible de créer le code de la partie."
            );

            return;

        }


        /* ==========================================
           CRÉATION SUPABASE
        ========================================== */

        const {
            data,
            error
        } =
            await supabaseClient

                .from("parties_en_ligne")

                .insert({

                    code: code,

                    joueur1_id:
                        joueur.id,

                    joueur2_id:
                        null,

                    statut:
                        "attente",

                    categorie:
                        categorie,

                    nombre_questions:
                        nombreQuestions,

                    questions:
                        questionsPartie,

                    score_joueur1:
                        0,

                    score_joueur2:
                        0,

                    gagnant_id:
                        null,

                    question_actuelle:
                        0,

                    reponse_joueur1:
                        null,

                    reponse_joueur2:
                        null,

                    traitement_question:
                        false

                })

                .select()

                .single();


        if(error){

            console.error(
                "❌ Erreur création partie :",
                error
            );

            afficherMessage(
                "❌ Impossible de créer la partie."
            );

            return;

        }


        console.log(
            "✅ Partie créée :",
            data
        );


        /* ==========================================
           SALLE D'ATTENTE
        ========================================== */

        afficherSalleAttente(data);


        /* ==========================================
           SURVEILLER JOUEUR 2
        ========================================== */

        surveillerArriveeAdversaire(
            data.id
        );

    }

    finally{

        bouton.disabled = false;

        bouton.textContent =
            "🚀 Créer la partie";

    }

}


/* ==========================================
   AFFICHER LA SALLE D'ATTENTE
========================================== */

function afficherSalleAttente(partie){

    menuPartieEnLigne.style.display =
        "none";

    creationPartie.style.display =
        "none";

    rejoindrePartie.style.display =
        "none";

    salleAttente.style.display =
        "block";


    document.getElementById(
        "codePartieAffiche"
    ).textContent =
        partie.code;


    document.getElementById(
        "statutPartie"
    ).textContent =
        "En attente d'un joueur...";


    document.getElementById(
        "pseudoAdversaire"
    ).textContent =
        "---";


    document.getElementById(
        "adversaireInfo"
    ).style.display =
        "none";


    afficherMessage("");

}


/* ==========================================
   ANNULER LA CRÉATION
========================================== */

async function annulerPartieEnLigne(){

    if(
        surveillancePartie
    ){

        clearInterval(
            surveillancePartie
        );

        surveillancePartie =
            null;

    }


    afficherMenuPartie();

}


/* ==========================================
   AFFICHER REJOINDRE UNE PARTIE
========================================== */

function afficherRejoindrePartie(){

    menuPartieEnLigne.style.display =
        "none";

    creationPartie.style.display =
        "none";

    rejoindrePartie.style.display =
        "block";

    salleAttente.style.display =
        "none";


    afficherMessage("");


    const champ =
        document.getElementById(
            "codePartie"
        );


    if(champ){

        champ.value =
            "";

        champ.focus();

    }

}


/* ==========================================
   REJOINDRE UNE PARTIE
========================================== */

async function rejoindrePartieEnLigne(){

    /* ==========================================
       VÉRIFICATION DU JOUEUR
    ========================================== */

    if(!joueur.id){

        afficherMessage(
            "❌ Votre profil n'est pas correctement enregistré en ligne."
        );

        console.error(
            "❌ Aucun ID Supabase pour le joueur."
        );

        return;
    }


    /* ==========================================
       RÉCUPÉRATION DU CODE
    ========================================== */

    const champ =
        document.getElementById(
            "codePartie"
        );


    const code =
        champ.value
            .trim()
            .toUpperCase();


    if(code === ""){

        afficherMessage(
            "❌ Entrez le code de la partie."
        );

        return;

    }


    /* ==========================================
       FORMAT DU CODE
    ========================================== */

    if(
        !/^CQ-[A-Z0-9]{4}$/.test(code)
    ){

        afficherMessage(
            "❌ Code de partie invalide."
        );

        return;

    }


    const bouton =
        document.getElementById(
            "confirmerRejoindrePartie"
        );


    bouton.disabled = true;

    bouton.textContent =
        "⏳ Vérification...";


    try{

        /* ==========================================
           RECHERCHE DE LA PARTIE
        ========================================== */

        const {
            data: partie,
            error
        } =
            await supabaseClient

                .from("parties_en_ligne")

                .select("*")

                .eq(
                    "code",
                    code
                )

                .eq(
                    "statut",
                    "attente"
                )

                .is(
                    "joueur2_id",
                    null
                )

                .maybeSingle();


        if(error){

            console.error(
                "❌ Erreur vérification de la partie :",
                error
            );

            afficherMessage(
                "❌ Impossible de vérifier ce code."
            );

            return;

        }


        if(!partie){

            afficherMessage(
                "❌ Cette partie n'existe pas ou n'est plus disponible."
            );

            return;

        }


        /* ==========================================
           EMPÊCHER SA PROPRE PARTIE
        ========================================== */

        if(
            partie.joueur1_id ===
            joueur.id
        ){

            afficherMessage(
                "❌ Vous ne pouvez pas rejoindre votre propre partie."
            );

            return;

        }


        /* ==========================================
           AJOUT DU JOUEUR 2
        ========================================== */

        const {
            data: partieRejointe,
            error: erreurRejoindre
        } =
            await supabaseClient

                .from("parties_en_ligne")

                .update({

                    joueur2_id:
                        joueur.id,

                    statut:
                        "en_cours"

                })

                .eq(
                    "id",
                    partie.id
                )

                .eq(
                    "statut",
                    "attente"
                )

                .is(
                    "joueur2_id",
                    null
                )

                .select()
                .maybeSingle();


        if(erreurRejoindre){

            console.error(
                "❌ Erreur pour rejoindre la partie :",
                erreurRejoindre
            );

            afficherMessage(
                "❌ Impossible de rejoindre la partie."
            );

            return;

        }


        if(!partieRejointe){

            afficherMessage(
                "❌ Cette partie vient d'être rejointe par un autre joueur."
            );

            return;

        }


        console.log(
            "✅ Partie rejointe :",
            partieRejointe
        );


        /* ==========================================
           RÉCUPÉRATION DU PSEUDO
        ========================================== */

        const {
            data: adversaire,
            error: erreurAdversaire
        } =
            await supabaseClient

                .from("joueur")

                .select("pseudo")

                .eq(
                    "id",
                    partieRejointe.joueur1_id
                )

                .maybeSingle();


        if(erreurAdversaire){

            console.warn(
                "⚠️ Impossible de récupérer le pseudo de l'adversaire :",
                erreurAdversaire
            );

        }


        /* ==========================================
           AFFICHAGE
        ========================================== */

        menuPartieEnLigne.style.display =
            "none";

        creationPartie.style.display =
            "none";

        rejoindrePartie.style.display =
            "none";

        salleAttente.style.display =
            "block";


        document.getElementById(
            "codePartieAffiche"
        ).textContent =
            partieRejointe.code;


        document.getElementById(
            "statutPartie"
        ).textContent =
            "✅ Adversaire trouvé !";


        document.getElementById(
            "pseudoAdversaire"
        ).textContent =
            adversaire?.pseudo ||
            "Adversaire";


        document.getElementById(
            "adversaireInfo"
        ).style.display =
            "block";


        afficherMessage(
            "✅ Vous avez rejoint la partie."
        );


        /*
         * On récupère une nouvelle fois
         * la partie complète.
         */

        await chargerPartieEtAfficher(
            partieRejointe.id
        );

    }

    finally{

        bouton.disabled = false;

        bouton.textContent =
            "🎮 Rejoindre";

    }

}


/* ==========================================
   BOUTONS
========================================== */

document
    .getElementById("btnCreerPartie")
    ?.addEventListener(
        "click",
        afficherCreationPartie
    );


document
    .getElementById("confirmerCreationPartie")
    ?.addEventListener(
        "click",
        creerPartieEnLigne
    );


document
    .getElementById("annulerCreationPartie")
    ?.addEventListener(
        "click",
        afficherMenuPartie
    );


document
    .getElementById("btnRejoindrePartie")
    ?.addEventListener(
        "click",
        afficherRejoindrePartie
    );


document
    .getElementById("confirmerRejoindrePartie")
    ?.addEventListener(
        "click",
        rejoindrePartieEnLigne
    );


document
    .getElementById("annulerRejoindrePartie")
    ?.addEventListener(
        "click",
        afficherMenuPartie
    );


/* ==========================================
   INITIALISATION
========================================== */

afficherProfilEnLigne();
/* ==========================================
   CHARGER UNE PARTIE COMPLÈTE
========================================== */

async function chargerPartieEtAfficher(partieId){

    try{

        const {
            data: partie,
            error
        } =
            await supabaseClient

                .from("parties_en_ligne")

                .select("*")

                .eq(
                    "id",
                    partieId
                )

                .maybeSingle();


        if(error){

            console.error(
                "❌ Erreur récupération partie :",
                error
            );

            return;

        }


        if(!partie){

            console.error(
                "❌ Partie introuvable."
            );

            return;

        }


        console.log(
            "🔄 Partie actualisée :",
            partie
        );


        afficherConfrontation(
            partie
        );

    }

    catch(erreur){

        console.error(
            "❌ Erreur inattendue récupération partie :",
            erreur
        );

    }

}


/* ==========================================
   SURVEILLER L'ARRIVÉE DU JOUEUR 2
========================================== */

function surveillerArriveeAdversaire(partieId){

    if(surveillancePartie){

        clearInterval(
            surveillancePartie
        );

    }


    console.log(
        "👀 Surveillance de la partie :",
        partieId
    );


    surveillancePartie =
        setInterval(
            async () => {

                try{

                    const {
                        data: partie,
                        error
                    } =
                        await supabaseClient

                            .from("parties_en_ligne")

                            .select("*")

                            .eq(
                                "id",
                                partieId
                            )

                            .maybeSingle();


                    if(error){

                        console.error(
                            "❌ Erreur surveillance partie :",
                            error
                        );

                        return;

                    }


                    if(!partie){

                        console.warn(
                            "⚠️ Partie introuvable."
                        );

                        return;

                    }


                    if(
                        partie.joueur2_id
                    ){

                        clearInterval(
                            surveillancePartie
                        );

                        surveillancePartie =
                            null;


                        console.log(
                            "✅ Adversaire détecté !",
                            partie
                        );


                        /* ==========================================
                           RÉCUPÉRATION DU PSEUDO
                        ========================================== */

                        const {
                            data: adversaire,
                            error: erreurAdversaire
                        } =
                            await supabaseClient

                                .from("joueur")

                                .select("pseudo")

                                .eq(
                                    "id",
                                    partie.joueur2_id
                                )

                                .maybeSingle();


                        if(erreurAdversaire){

                            console.warn(
                                "⚠️ Impossible de récupérer le pseudo de l'adversaire :",
                                erreurAdversaire
                            );

                        }


                        /* ==========================================
                           AFFICHAGE ADVERSAIRE
                        ========================================== */

                        document.getElementById(
                            "statutPartie"
                        ).textContent =
                            "✅ Adversaire trouvé !";


                        document.getElementById(
                            "pseudoAdversaire"
                        ).textContent =
                            adversaire?.pseudo ||
                            "Adversaire";


                        document.getElementById(
                            "adversaireInfo"
                        ).style.display =
                            "block";


                        afficherMessage(
                            "✅ Votre adversaire a rejoint la partie !"
                        );


                        /*
                         * On récupère la partie complète
                         * et on démarre la confrontation.
                         */

                        afficherConfrontation(
                            partie
                        );

                    }

                }

                catch(erreur){

                    console.error(
                        "❌ Erreur inattendue pendant la surveillance :",
                        erreur
                    );

                }

            },
            1500
        );

}


/* ==========================================
   AFFICHER LA CONFRONTATION
========================================== */

function afficherConfrontation(partie){

    if(!partie){

        console.error(
            "❌ Aucune partie reçue."
        );

        return;

    }


    partieEnLigneActuelle =
        partie;


    /* ==========================================
       AFFICHAGE DES ZONES
    ========================================== */

    menuPartieEnLigne.style.display =
        "none";

    creationPartie.style.display =
        "none";

    rejoindrePartie.style.display =
        "none";

    salleAttente.style.display =
        "none";


    document.getElementById(
        "confrontation"
    ).style.display =
        "block";


    /* ==========================================
       PSEUDOS
    ========================================== */

    document.getElementById(
        "pseudoJoueur1"
    ).textContent =
        "Joueur 1";


    document.getElementById(
        "pseudoJoueur2"
    ).textContent =
        "Joueur 2";


    /* ==========================================
       SCORES
    ========================================== */

    document.getElementById(
        "scoreJoueur1"
    ).textContent =
        partie.score_joueur1 ?? 0;


    document.getElementById(
        "scoreJoueur2"
    ).textContent =
        partie.score_joueur2 ?? 0;


    afficherMessage("");


    /* ==========================================
       AFFICHER LA QUESTION ACTUELLE
    ========================================== */

    afficherQuestionEnLigne(
        partie
    );


    /* ==========================================
       DÉMARRER LA SURVEILLANCE
    ========================================== */

    if(!surveillanceReponses){

        surveillerReponsesPartie();

    }

}


/* ==========================================
   AFFICHER UNE QUESTION EN LIGNE
========================================== */

function afficherQuestionEnLigne(partie){

    if(!partie){

        console.error(
            "❌ Aucune partie reçue."
        );

        return;

    }


    if(!partie.questions){

        console.error(
            "❌ Aucune question enregistrée dans cette partie."
        );

        afficherMessage(
            "❌ Impossible de récupérer les questions de la partie."
        );

        return;

    }


    if(!Array.isArray(partie.questions)){

        console.error(
            "❌ Le format des questions est incorrect :",
            partie.questions
        );

        afficherMessage(
            "❌ Le format des questions est incorrect."
        );

        return;

    }


    if(partie.questions.length === 0){

        console.error(
            "❌ La partie ne contient aucune question."
        );

        afficherMessage(
            "❌ Aucune question disponible."
        );

        return;

    }


    /* ==========================================
       INDEX QUESTION
    ========================================== */

    const indexQuestion =
        Number(
            partie.question_actuelle ?? 0
        );


    const question =
        partie.questions[indexQuestion];


    if(!question){

        console.error(
            "❌ Question introuvable :",
            indexQuestion
        );

        return;

    }


    console.log(
        "✅ Question récupérée :",
        indexQuestion + 1,
        question
    );


    /* ==========================================
       NUMÉRO
    ========================================== */

    document.getElementById(
        "numeroQuestionEnLigne"
    ).textContent =
        "Question " +
        (indexQuestion + 1) +
        " / " +
        partie.questions.length;


    /* ==========================================
       TEXTE DE LA QUESTION
    ========================================== */

    document.getElementById(
        "questionEnLigne"
    ).textContent =
        question.question;


    /* ==========================================
       ZONE DES RÉPONSES
    ========================================== */

    const zoneReponses =
        document.getElementById(
            "reponsesEnLigne"
        );


    if(!zoneReponses){

        console.error(
            "❌ Zone des réponses introuvable."
        );

        return;

    }


    zoneReponses.innerHTML =
        "";


    /* ==========================================
       CRÉATION DES RÉPONSES
    ========================================== */

    if(
        !Array.isArray(
            question.reponses
        )
    ){

        console.error(
            "❌ Les réponses de la question sont incorrectes :",
            question
        );

        return;

    }


    question.reponses.forEach(
        (reponse, index) => {

            const bouton =
                document.createElement(
                    "button"
                );


            bouton.type =
                "button";


            bouton.className =
                "boutonReponseEnLigne";


            bouton.textContent =
                reponse;


            bouton.addEventListener(
                "click",
                () => {

                    enregistrerReponseEnLigne(
                        index
                    );

                }
            );


            zoneReponses.appendChild(
                bouton
            );

        }
    );


    /* ==========================================
       MESSAGE RÉPONSE
    ========================================== */

    const statut =
        document.getElementById(
            "statutReponseEnLigne"
        );


    if(statut){

        statut.textContent =
            "";

    }

}
/* ==========================================
   ENREGISTRER UNE RÉPONSE EN LIGNE
========================================== */

async function enregistrerReponseEnLigne(
    indexReponse
){

    /* ==========================================
       VÉRIFICATION PARTIE
    ========================================== */

    if(!partieEnLigneActuelle){

        console.error(
            "❌ Aucune partie en ligne active."
        );

        return;

    }


    /* ==========================================
       DÉTERMINER LA COLONNE DU JOUEUR
    ========================================== */

    let colonneReponse =
        null;


    if(
        joueur.id ===
        partieEnLigneActuelle.joueur1_id
    ){

        colonneReponse =
            "reponse_joueur1";

    }
    else if(
        joueur.id ===
        partieEnLigneActuelle.joueur2_id
    ){

        colonneReponse =
            "reponse_joueur2";

    }
    else{

        console.error(
            "❌ Le joueur ne fait pas partie de cette partie."
        );

        return;

    }


    /* ==========================================
       EMPÊCHER UNE DEUXIÈME RÉPONSE
    ========================================== */

    const boutons =
        document.querySelectorAll(
            ".boutonReponseEnLigne"
        );


    boutons.forEach(
        bouton => {

            bouton.disabled =
                true;

        }
    );


    /* ==========================================
       ENREGISTRER LA RÉPONSE
    ========================================== */

    const {
        error
    } =
        await supabaseClient

            .from("parties_en_ligne")

            .update({

                [colonneReponse]:
                    indexReponse

            })

            .eq(
                "id",
                partieEnLigneActuelle.id
            );


    if(error){

        console.error(
            "❌ Erreur enregistrement réponse :",
            error
        );


        boutons.forEach(
            bouton => {

                bouton.disabled =
                    false;

            }
        );


        afficherMessage(
            "❌ Impossible d'enregistrer votre réponse."
        );

        return;

    }


    console.log(
        "✅ Réponse enregistrée :",
        indexReponse
    );


    /* ==========================================
       RELIRE LA PARTIE COMPLÈTE
    ========================================== */

    const {
        data: partieActualisee,
        error: erreurActualisation
    } =
        await supabaseClient

            .from("parties_en_ligne")

            .select("*")

            .eq(
                "id",
                partieEnLigneActuelle.id
            )

            .maybeSingle();


    if(erreurActualisation){

        console.error(
            "❌ Erreur récupération partie après réponse :",
            erreurActualisation
        );

        return;

    }


    if(partieActualisee){

        partieEnLigneActuelle =
            partieActualisee;


        /* ==========================================
           MISE À JOUR DES SCORES
        ========================================== */

        document.getElementById(
            "scoreJoueur1"
        ).textContent =
            partieActualisee.score_joueur1 ?? 0;


        document.getElementById(
            "scoreJoueur2"
        ).textContent =
            partieActualisee.score_joueur2 ?? 0;

    }


    /* ==========================================
       MESSAGE
    ========================================== */

    const statut =
        document.getElementById(
            "statutReponseEnLigne"
        );


    if(statut){

        statut.textContent =
            "✅ Réponse enregistrée. En attente de l'adversaire...";

    }

}


/* ==========================================
   SURVEILLANCE DES RÉPONSES
========================================== */

function surveillerReponsesPartie(){

    if(surveillanceReponses){

        return;

    }


    console.log(
        "👀 Surveillance des réponses démarrée."
    );


    surveillanceReponses =
        setInterval(
            async () => {

                if(!partieEnLigneActuelle){

                    return;

                }


                try{

                    const {
                        data: partie,
                        error
                    } =
                        await supabaseClient

                            .from("parties_en_ligne")

                            .select(
                                "id, joueur1_id, joueur2_id, questions, question_actuelle, reponse_joueur1, reponse_joueur2, traitement_question, score_joueur1, score_joueur2, statut"
                            )

                            .eq(
                                "id",
                                partieEnLigneActuelle.id
                            )

                            .maybeSingle();


                    if(error){

                        console.error(
                            "❌ Erreur surveillance réponses :",
                            error
                        );

                        return;

                    }


                    if(!partie){

                        return;

                    }


                    /* ==========================================
                       ANCIEN INDEX
                    ========================================== */

                    const ancienIndex =
                        Number(
                            partieEnLigneActuelle.question_actuelle ?? 0
                        );


                    /* ==========================================
                       NOUVEL INDEX
                    ========================================== */

                    const nouvelIndex =
                        Number(
                            partie.question_actuelle ?? 0
                        );


                    /* ==========================================
                       MISE À JOUR LOCALE
                    ========================================== */

                    partieEnLigneActuelle =
                        partie;


                    /* ==========================================
                       MISE À JOUR DES SCORES
                    ========================================== */

                    document.getElementById(
                        "scoreJoueur1"
                    ).textContent =
                        partie.score_joueur1 ?? 0;


                    document.getElementById(
                        "scoreJoueur2"
                    ).textContent =
                        partie.score_joueur2 ?? 0;


                    /* ==========================================
                       ⭐ CORRECTION PRINCIPALE ⭐
                       
                       Si l'autre navigateur a fait avancer
                       la question, on l'affiche aussi.
                    ========================================== */

                    if(
                        nouvelIndex !==
                        ancienIndex
                    ){

                        console.log(
                            "➡️ Nouvelle question détectée :",
                            nouvelIndex + 1
                        );


                        if(
                            nouvelIndex >=
                            partie.questions.length
                        ){

                            afficherResultatPartie(
                                partie
                            );

                            return;

                        }


                        afficherQuestionEnLigne(
                            partie
                        );


                        const statut =
                            document.getElementById(
                                "statutReponseEnLigne"
                            );


                        if(statut){

                            statut.textContent =
                                "";

                        }

                    }


                    /* ==========================================
                       PARTIE TERMINÉE
                    ========================================== */

                    if(
                        partie.statut ===
                        "terminee"
                    ){

                        afficherResultatPartie(
                            partie
                        );

                        return;

                    }


                    /* ==========================================
                       VÉRIFIER LES DEUX RÉPONSES
                    ========================================== */

                    if(
                        partie.reponse_joueur1 === null ||
                        partie.reponse_joueur2 === null
                    ){

                        return;

                    }


                    /* ==========================================
                       QUESTION DÉJÀ EN TRAITEMENT
                    ========================================== */

                    if(
                        partie.traitement_question === true
                    ){

                        return;

                    }


                    /* ==========================================
                       TENTATIVE DE VERROUILLAGE
                    ========================================== */

                    const {
                        data: verrou,
                        error: erreurVerrou
                    } =
                        await supabaseClient

                            .from("parties_en_ligne")

                            .update({

                                traitement_question:
                                    true

                            })

                            .eq(
                                "id",
                                partie.id
                            )

                            .eq(
                                "traitement_question",
                                false
                            )

                            .select(
                                "id"
                            )

                            .maybeSingle();


                    if(erreurVerrou){

                        console.error(
                            "❌ Erreur verrouillage question :",
                            erreurVerrou
                        );

                        return;

                    }


                    /*
                     * Si aucun résultat :
                     * un autre navigateur a pris le verrou.
                     */

                    if(!verrou){

                        return;

                    }


                    console.log(
                        "🔒 Verrou obtenu pour le traitement."
                    );


                    await traiterQuestionPartie(
                        partie
                    );

                }

                catch(erreur){

                    console.error(
                        "❌ Erreur inattendue surveillance réponses :",
                        erreur
                    );

                }

            },
            1000
        );

}


/* ==========================================
   TRAITER LA QUESTION
========================================== */

async function traiterQuestionPartie(
    partie
){

    const indexQuestion =
        Number(
            partie.question_actuelle ?? 0
        );


    const question =
        partie.questions[indexQuestion];


    if(!question){

        console.error(
            "❌ Question introuvable :",
            indexQuestion
        );

        return;

    }


    /* ==========================================
       VÉRIFICATION DES RÉPONSES
    ========================================== */

    const joueur1Correct =
        Number(partie.reponse_joueur1) ===
        Number(question.bonne);


    const joueur2Correct =
        Number(partie.reponse_joueur2) ===
        Number(question.bonne);


    console.log(
        "Réponse joueur 1 :",
        partie.reponse_joueur1,
        "Correcte :",
        joueur1Correct
    );


    console.log(
        "Réponse joueur 2 :",
        partie.reponse_joueur2,
        "Correcte :",
        joueur2Correct
    );


    /* ==========================================
       CALCUL DES SCORES
    ========================================== */

    const nouveauScoreJoueur1 =
        Number(partie.score_joueur1 || 0) +
        (joueur1Correct ? 1 : 0);


    const nouveauScoreJoueur2 =
        Number(partie.score_joueur2 || 0) +
        (joueur2Correct ? 1 : 0);


    /* ==========================================
       QUESTION SUIVANTE
    ========================================== */

    const prochaineQuestion =
        indexQuestion + 1;


    /* ==========================================
       FIN DE PARTIE ?
    ========================================== */

    const partieTerminee =
        prochaineQuestion >=
        partie.questions.length;


    /* ==========================================
       MISE À JOUR SUPABASE
    ========================================== */

    const {
        error
    } =
        await supabaseClient

            .from("parties_en_ligne")

            .update({

                score_joueur1:
                    nouveauScoreJoueur1,

                score_joueur2:
                    nouveauScoreJoueur2,

                question_actuelle:
                    prochaineQuestion,

                reponse_joueur1:
                    null,

                reponse_joueur2:
                    null,

                traitement_question:
                    false,

                statut:
                    partieTerminee
                        ? "terminee"
                        : "en_cours"

            })

            .eq(
                "id",
                partie.id
            )

            .eq(
                "traitement_question",
                true
            );


    if(error){

        console.error(
            "❌ Erreur traitement question :",
            error
        );

        return;

    }


    console.log(
        "✅ Question traitée :",
        indexQuestion + 1
    );


    console.log(
        "Score joueur 1 :",
        nouveauScoreJoueur1
    );


    console.log(
        "Score joueur 2 :",
        nouveauScoreJoueur2
    );


    /* ==========================================
       RÉCUPÉRATION DE LA PARTIE ACTUALISÉE
    ========================================== */

    const {
        data: partieActualisee,
        error: erreurLecture
    } =
        await supabaseClient

            .from("parties_en_ligne")

            .select("*")

            .eq(
                "id",
                partie.id
            )

            .maybeSingle();


    if(erreurLecture){

        console.error(
            "❌ Erreur récupération partie après traitement :",
            erreurLecture
        );

        return;

    }


    if(!partieActualisee){

        return;

    }


    partieEnLigneActuelle =
        partieActualisee;


    /* ==========================================
       PARTIE TERMINÉE
    ========================================== */

    if(partieTerminee){

        afficherResultatPartie(
            partieActualisee
        );

        if(surveillanceReponses){

            clearInterval(
                surveillanceReponses
            );

            surveillanceReponses =
                null;

        }

        return;

    }


    /* ==========================================
       AFFICHER LA QUESTION SUIVANTE
       
       Le navigateur qui a traité la question
       l'affiche immédiatement.
       
       L'autre navigateur la détectera grâce
       à surveillerReponsesPartie().
    ========================================== */

    afficherQuestionEnLigne(
        partieActualisee
    );


    const statut =
        document.getElementById(
            "statutReponseEnLigne"
        );


    if(statut){

        statut.textContent =
            "";

    }

}


/* ==========================================
   AFFICHER LE RÉSULTAT FINAL
========================================== */

function afficherResultatPartie(
    partie
){

    if(!partie){

        return;

    }


    /* ==========================================
       ARRÊTER LA SURVEILLANCE
    ========================================== */

    if(surveillanceReponses){

        clearInterval(
            surveillanceReponses
        );

        surveillanceReponses =
            null;

    }


    partieEnLigneActuelle =
        partie;


    /* ==========================================
       MASQUER LA CONFRONTATION
    ========================================== */

    const confrontation =
        document.getElementById(
            "confrontation"
        );


    if(confrontation){

        confrontation.style.display =
            "none";

    }


    /* ==========================================
       AFFICHER LE RÉSULTAT
    ========================================== */

    const resultat =
        document.getElementById(
            "resultatPartie"
        );


    if(resultat){

        resultat.style.display =
            "block";

    }


    /* ==========================================
       AFFICHER LES SCORES
    ========================================== */

    const scoreJoueur1 =
        Number(
            partie.score_joueur1 || 0
        );


    const scoreJoueur2 =
        Number(
            partie.score_joueur2 || 0
        );


    const resultatFinal =
        document.getElementById(
            "resultatFinal"
        );


    if(!resultatFinal){

        return;

    }


    if(
        scoreJoueur1 >
        scoreJoueur2
    ){

        resultatFinal.innerHTML = `
            <p>🏆 Joueur 1 gagne !</p>
            <p>Joueur 1 : ${scoreJoueur1}</p>
            <p>Joueur 2 : ${scoreJoueur2}</p>
        `;

    }
    else if(
        scoreJoueur2 >
        scoreJoueur1
    ){

        resultatFinal.innerHTML = `
            <p>🏆 Joueur 2 gagne !</p>
            <p>Joueur 1 : ${scoreJoueur1}</p>
            <p>Joueur 2 : ${scoreJoueur2}</p>
        `;

    }
    else{

        resultatFinal.innerHTML = `
            <p>🤝 Égalité !</p>
            <p>Joueur 1 : ${scoreJoueur1}</p>
            <p>Joueur 2 : ${scoreJoueur2}</p>
        `;

    }

}


/* ==========================================
   NOUVELLE PARTIE
========================================== */

document
    .getElementById("btnNouvellePartie")
    ?.addEventListener(
        "click",
        () => {

            const resultat =
                document.getElementById(
                    "resultatPartie"
                );


            if(resultat){

                resultat.style.display =
                    "none";

            }


            partieEnLigneActuelle =
                null;


            afficherMenuPartie();

        }
    );


/* ==========================================
   RETOUR ACCUEIL
========================================== */

document
    .getElementById("btnRetourAccueil")
    ?.addEventListener(
        "click",
        () => {

            window.location.href =
                "index.html?accueil=1";

        }
    );
    