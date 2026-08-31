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

function preparerQuestionsPartie(categorie, nombreQuestions){

    const base =
        obtenirQuestionsCategorie(categorie);


    if(!base || base.length === 0){

        console.error(
            "❌ Aucune question disponible pour la catégorie :",
            categorie
        );

        return [];
    }


    /* Copie de la base pour ne pas modifier
       les questions originales */

    const questionsMelangees =
        [...base];


    /* Mélange aléatoire */

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


    /* Nombre de questions demandé */

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
        document.getElementById("pseudoEnLigne");

    const points =
        document.getElementById("pointsEnLigne");

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

    if(!messageModeEnLigne) return;

    messageModeEnLigne.textContent =
        message;

}


/* ==========================================
   GÉNÉRATION DU CODE DE PARTIE
========================================== */

function genererCodePartie(){

    const caracteres =
        "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let code = "CQ-";

    for(let i = 0; i < 4; i++){

        const position =
            Math.floor(
                Math.random() * caracteres.length
            );

        code += caracteres[position];

    }

    return code;

}


/* ==========================================
   CRÉATION D'UN CODE UNIQUE
========================================== */

async function genererCodeUnique(){

    for(let tentative = 0; tentative < 10; tentative++){

        const code =
            genererCodePartie();


        const { data, error } =
            await supabaseClient

                .from("parties_en_ligne")

                .select("id")

                .eq("code", code)

                .limit(1);


        if(error){

            console.error(
                "❌ Erreur vérification du code :",
                error
            );

            return null;

        }


        if(!data || data.length === 0){

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

    /* Vérification du joueur */

    if(!joueur.id){

        afficherMessage(
            "❌ Votre profil n'est pas correctement enregistré en ligne."
        );

        console.error(
            "❌ Aucun ID Supabase pour le joueur."
        );

        return;

    }


    /* Récupération des choix */

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

    const questionsPartie =
    preparerQuestionsPartie(
        categorie,
        nombreQuestions
    );
    if(questionsPartie.length < nombreQuestions){

    afficherMessage(
        "❌ Pas assez de questions disponibles dans cette catégorie."
    );

    return;
    }
    /* Vérification */

    if(![5, 10, 20].includes(nombreQuestions)){

        afficherMessage(
            "❌ Nombre de questions invalide."
        );

        return;

    }


    /* Désactivation du bouton */

    const bouton =
        document.getElementById(
            "confirmerCreationPartie"
        );

    bouton.disabled = true;

    bouton.textContent =
        "⏳ Création en cours...";


    try{

        /* Génération du code */

        const code =
            await genererCodeUnique();


        if(!code){

            afficherMessage(
                "❌ Impossible de créer le code de la partie."
            );

            return;

        }


        /* Création dans Supabase */

        const { data, error } =
            await supabaseClient

                .from("parties_en_ligne")

                .insert({

                    code: code,

                    joueur1_id: joueur.id,

                    joueur2_id: null,

                    statut: "attente",

                    categorie: categorie,

                    nombre_questions: nombreQuestions,
                    
                    questions: questionsPartie,

                    score_joueur1: 0,

                    score_joueur2: 0,

                    gagnant_id: null

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


        /* Affichage de la salle d'attente */

          afficherSalleAttente(data);


         /* Surveillance de l'arrivée du joueur 2 */

         surveillerArriveeAdversaire(data.id);

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

    afficherMenuPartie();

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

/* ==========================================
   AFFICHER REJOINDRE UNE PARTIE
========================================== */

function afficherRejoindrePartie(){

    menuPartieEnLigne.style.display = "none";
    creationPartie.style.display = "none";
    rejoindrePartie.style.display = "block";
    salleAttente.style.display = "none";

    afficherMessage("");

    const champ = document.getElementById("codePartie");

    if(champ){
        champ.value = "";
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
        document.getElementById("codePartie");

    const code =
        champ.value.trim().toUpperCase();


    if(code === ""){

        afficherMessage(
            "❌ Entrez le code de la partie."
        );

        return;
    }


    /* ==========================================
       VÉRIFICATION DU FORMAT
    ========================================== */

    if ( !/^CQ-[A-Z0-9]{4}$/.test(code)){

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

        const { data: partie, error } =
            await supabaseClient

                .from("parties_en_ligne")

                .select("*")

                .eq("code", code)

                .eq("statut", "attente")

                .is("joueur2_id", null)

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


        /* ==========================================
           PARTIE INTROUVABLE
        ========================================== */

        if(!partie){

            afficherMessage(
                "❌ Cette partie n'existe pas ou n'est plus disponible."
            );

            return;
        }


        /* ==========================================
           EMPÊCHER DE REJOINDRE SA PROPRE PARTIE
        ========================================== */

        if(partie.joueur1_id === joueur.id){

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

                    joueur2_id: joueur.id,
                     statut: "en_cours"

                })

                .eq("id", partie.id)

                .eq("statut", "attente")

                .is("joueur2_id", null)

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


        /* ==========================================
           PARTIE DÉJÀ PRISE
        ========================================== */

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
           RÉCUPÉRATION DU PSEUDO DE L'ADVERSAIRE
        ========================================== */

        const {
            data: adversaire,
            error: erreurAdversaire
        } =
            await supabaseClient

                .from("joueur")

                .select("pseudo")

                .eq("id", partieRejointe.joueur1_id)

                .maybeSingle();


        if(erreurAdversaire){

            console.warn(
                "⚠️ Impossible de récupérer le pseudo de l'adversaire :",
                erreurAdversaire
            );
        }


        /* ==========================================
           AFFICHAGE DE LA SALLE D'ATTENTE
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
            adversaire?.pseudo || "Adversaire";


        document.getElementById(
            "adversaireInfo"
        ).style.display =
            "block";


        afficherMessage(
            "✅ Vous avez rejoint la partie."
        );
        afficherConfrontation(partieRejointe);

    }

    finally{

        bouton.disabled = false;

        bouton.textContent =
            "🎮 Rejoindre";

    }

}
/* ==========================================
   BOUTONS REJOINDRE
========================================== */

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
   SURVEILLANCE DE LA SALLE D'ATTENTE
========================================== */

let surveillancePartie = null;


/* ==========================================
   ATTENDRE L'ARRIVÉE DU JOUEUR 2
========================================== */

function surveillerArriveeAdversaire(partieId){

    /* Évite plusieurs surveillances en même temps */

    if(surveillancePartie){

        clearInterval(surveillancePartie);

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
                            .select(
                             "id, joueur1_id, joueur2_id, statut, code, questions, score_joueur1, score_joueur2"
                            ) 

                            

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


                    /*
                     * Le joueur 2 est arrivé
                     */

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


                        /*
                         * Récupération du pseudo
                         * du joueur 2
                         */

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


                        /*
                         * Affichage
                         */

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
                        afficherConfrontation(partie);

                    }

                }

                catch(erreur){

                    console.error(
                        "❌ Erreur inattendue pendant la surveillance :",
                        erreur
                    );

                }

            },
            2000
        );

}
/* ==========================================
   AFFICHER LA CONFRONTATION
========================================== */

function afficherConfrontation(partie){
    partieEnLigneActuelle = partie;

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


    document.getElementById(
        "pseudoJoueur1"
    ).textContent =
        "Joueur 1";


    document.getElementById(
        "pseudoJoueur2"
    ).textContent =
        "Joueur 2";


    document.getElementById(
        "scoreJoueur1"
    ).textContent =
        partie.score_joueur1 || 0;


    document.getElementById(
        "scoreJoueur2"
    ).textContent =
        partie.score_joueur2 || 0;


    afficherMessage("");
    afficherQuestionEnLigne(partie);
    surveillerReponsesPartie();

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
       RÉCUPÉRER LA PREMIÈRE QUESTION
    ========================================== */

    const question =
        partie.questions[0];


    console.log(
        "✅ Question 1 récupérée :",
        question
    );


    /* ==========================================
       AFFICHER LE NUMÉRO
    ========================================== */

    document.getElementById(
        "numeroQuestionEnLigne"
    ).textContent =
        "Question 1";


    /* ==========================================
       AFFICHER LA QUESTION
    ========================================== */

    document.getElementById(
        "questionEnLigne"
    ).textContent =
        question.question;


    /* ==========================================
       RÉCUPÉRER LA ZONE DES RÉPONSES
    ========================================== */

    const zoneReponses =
        document.getElementById(
            "reponsesEnLigne"
        );


    zoneReponses.innerHTML = "";


    /* ==========================================
       CRÉER LES RÉPONSES
    ========================================== */

    question.reponses.forEach(
    (reponse, index) => {

        const bouton =
            document.createElement("button");


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

}
/* ==========================================
   ENREGISTRER UNE RÉPONSE EN LIGNE
========================================== */

async function enregistrerReponseEnLigne(indexReponse){

    /* Vérification de la partie */

    if(!partieEnLigneActuelle){

        console.error(
            "❌ Aucune partie en ligne active."
        );

        return;
    }


    /* Vérification de la question */

    const indexQuestion =
        partieEnLigneActuelle.question_actuelle || 0;


    /* Vérification du joueur */

    let colonneReponse = null;


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


    /* Empêcher une deuxième réponse */

    const boutons =
        document.querySelectorAll(
            ".boutonReponseEnLigne"
        );


    boutons.forEach(
        bouton => {

            bouton.disabled = true;

        }
    );


    /* Enregistrement dans Supabase */

    const {
        data,
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
            )
            .select()
            .maybeSingle();
            console.log(
             "🔎 Résultat de la mise à jour :",
               data
            );

            


    if(error){

        console.error(
            "❌ Erreur enregistrement réponse :",
            error
        );


        /* Réactiver les boutons */

        boutons.forEach(
            bouton => {

                bouton.disabled = false;

            }
        );


        afficherMessage(
            "❌ Impossible d'enregistrer votre réponse."
        );

        return;
    }


    /* Mise à jour de la partie locale */

    partieEnLigneActuelle =
        data;


    console.log(
        "✅ Réponse enregistrée :",
        indexReponse
    );


    document.getElementById(
        "statutReponseEnLigne"
    ).textContent =
        "✅ Réponse enregistrée. En attente de l'adversaire...";

}
/* ==========================================
   SURVEILLANCE DES RÉPONSES
========================================== */

let surveillanceReponses = null;


function surveillerReponsesPartie(){

    if(surveillanceReponses){

        clearInterval(
            surveillanceReponses
        );

    }


    surveillanceReponses =
        setInterval(
            async () => {

                if(!partieEnLigneActuelle){

                    return;

                }


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


                partieEnLigneActuelle =
                    partie;


                /*
                 * Les deux joueurs doivent avoir répondu.
                 */

                if(
                    partie.reponse_joueur1 === null ||
                    partie.reponse_joueur2 === null
                ){

                    return;

                }


                /*
                 * La question est déjà en cours
                 * de traitement.
                 */

                if(
                    partie.traitement_question === true
                ){

                    return;

                }


                /*
                 * On tente de prendre le verrou.
                 */

                const {
                    data: partieVerrouillee,
                    error: erreurVerrou
                } =
                    await supabaseClient

                        .from("parties_en_ligne")

                        .update({

                            traitement_question: true

                        })

                        .eq(
                            "id",
                            partie.id
                        )

                        .eq(
                            "traitement_question",
                            false
                        )

                        .select()
                        .maybeSingle();


                if(erreurVerrou){

                    console.error(
                        "❌ Erreur verrouillage question :",
                        erreurVerrou
                    );

                    return;

                }


                /*
                 * Un seul navigateur obtient le verrou.
                 */

                if(!partieVerrouillee){

                    return;

                }


                await traiterQuestionPartie(
                    partieVerrouillee
                );

            },
            1000
        );

}
/* ==========================================
   TRAITER LA QUESTION
========================================== */

async function traiterQuestionPartie(partie){

    const indexQuestion =
        partie.question_actuelle || 0;


    const question =
        partie.questions[indexQuestion];


    if(!question){

        console.error(
            "❌ Question introuvable :",
            indexQuestion
        );

        return;

    }


    /*
     * Vérification des bonnes réponses
     */

    const joueur1Correct =
        partie.reponse_joueur1 === question.bonne;


    const joueur2Correct =
        partie.reponse_joueur2 === question.bonne;


    /*
     * Calcul des nouveaux scores
     */

    const nouveauScoreJoueur1 =
        partie.score_joueur1 +
        (joueur1Correct ? 1 : 0);


    const nouveauScoreJoueur2 =
        partie.score_joueur2 +
        (joueur2Correct ? 1 : 0);


    /*
     * Question suivante
     */

    const prochaineQuestion =
        indexQuestion + 1;


    /*
     * Vérifier si la partie est terminée
     */

    const partieTerminee =
        prochaineQuestion >=
        partie.questions.length;


    /*
     * Mise à jour de Supabase
     */

    const {
        data,
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
            )

            .select()
            .single();


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


    /*
     * Mise à jour locale
     */

    partieEnLigneActuelle =
        data;


    /*
     * Si la partie est terminée,
     * on arrête la surveillance.
     */

    if(partieTerminee){

        if(surveillanceReponses){

            clearInterval(
                surveillanceReponses
            );

            surveillanceReponses =
                null;

        }

        return;

    }


    /*
     * Afficher la question suivante.
     */

    afficherConfrontation(
        data
    );

}