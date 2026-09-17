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

const joueur =
    chargerJoueur();


/* ==========================================
   PARTIE ACTUELLE
========================================== */

let partieEnLigneActuelle =
    null;


/* ==========================================
   CHRONO
========================================== */

const DUREE_QUESTION =
    20;

let intervalleChrono =
    null;


/* ==========================================
   SURVEILLANCES
========================================== */

let surveillancePartie =
    null;

let surveillanceReponses =
    null;


/* ==========================================
   BASE DE QUESTIONS
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
   PRÉPARER LES QUESTIONS
========================================== */

function preparerQuestionsPartie(
    categorie,
    nombreQuestions
){

    const base =
        obtenirQuestionsCategorie(
            categorie
        );


    if(
        !base ||
        base.length === 0
    ){

        console.error(
            "❌ Aucune question disponible pour la catégorie :",
            categorie
        );

        return [];

    }


    const questionsMelangees =
        [...base];


    /* Mélange Fisher-Yates */

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
   AFFICHER LE PROFIL
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
            joueur?.pseudo ||
            "Joueur";

    }


    if(points){

        points.textContent =
            joueur?.points ||
            0;

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
   GÉNÉRER LE CODE
========================================== */

function genererCodePartie(){

    const caracteres =
        "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";


    let code =
        "CQ-";


    for(
        let i = 0;
        i < 4;
        i++
    ){

        const position =
            Math.floor(
                Math.random() *
                caracteres.length
            );


        code +=
            caracteres[position];

    }


    return code;

}


/* ==========================================
   CODE UNIQUE
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
                .eq("code", code)
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
   AFFICHER CRÉATION
========================================== */

function afficherCreationPartie(){

    arreterChronoEnLigne();
    arreterSurveillancesEnLigne();


    if(menuPartieEnLigne){

        menuPartieEnLigne.style.display =
            "none";

    }


    if(creationPartie){

        creationPartie.style.display =
            "block";

    }


    if(rejoindrePartie){

        rejoindrePartie.style.display =
            "none";

    }


    if(salleAttente){

        salleAttente.style.display =
            "none";

    }


    afficherMessage("");

}


/* ==========================================
   AFFICHER MENU
========================================== */

function afficherMenuPartie(){

    arreterChronoEnLigne();
    arreterSurveillancesEnLigne();


    if(menuPartieEnLigne){

        menuPartieEnLigne.style.display =
            "block";

    }


    if(creationPartie){

        creationPartie.style.display =
            "none";

    }


    if(rejoindrePartie){

        rejoindrePartie.style.display =
            "none";

    }


    if(salleAttente){

        salleAttente.style.display =
            "none";

    }


    afficherMessage("");

}


/* ==========================================
   CRÉATION DE LA PARTIE
========================================== */

async function creerPartieEnLigne(){

    if(!joueur || !joueur.id){

        afficherMessage(
            "❌ Votre profil n'est pas correctement enregistré en ligne."
        );

        console.error(
            "❌ Aucun ID Supabase pour le joueur."
        );

        return;

    }


    const selectCategorie =
        document.getElementById(
            "categoriePartie"
        );


    const selectNombreQuestions =
        document.getElementById(
            "nombreQuestionsPartie"
        );


    const categorie =
        selectCategorie?.value;


    const nombreQuestions =
        Number(
            selectNombreQuestions?.value
        );


    if(
        !categorie ||
        ![5, 10, 20].includes(nombreQuestions)
    ){

        afficherMessage(
            "❌ Paramètres de partie invalides."
        );

        return;

    }


    /* ==========================================
       PRÉPARER LES QUESTIONS
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


    const bouton =
        document.getElementById(
            "confirmerCreationPartie"
        );


    if(bouton){

        bouton.disabled =
            true;

        bouton.textContent =
            "⏳ Création en cours...";

    }


    try{

        /* ==========================================
           GÉNÉRER UN CODE UNIQUE
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
           CRÉER LA PARTIE
        ========================================== */

        const {
            data,
            error
        } =
            await supabaseClient
                .from("parties_en_ligne")
                .insert({

                    code:
                        code,

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
                        false,

                    fin_question:
                        null

                })
                .select("*")
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


        partieEnLigneActuelle =
            data;


        afficherSalleAttente(
            data
        );


        surveillerArriveeAdversaire(
            data.id
        );

    }

    catch(erreur){

        console.error(
            "❌ Erreur inattendue création partie :",
            erreur
        );

        afficherMessage(
            "❌ Une erreur est survenue."
        );

    }

    finally{

        if(bouton){

            bouton.disabled =
                false;

            bouton.textContent =
                "🚀 Créer la partie";

        }

    }

}


/* ==========================================
   AFFICHER SALLE D'ATTENTE
========================================== */

function afficherSalleAttente(partie){

    arreterChronoEnLigne();


    if(menuPartieEnLigne){

        menuPartieEnLigne.style.display =
            "none";

    }


    if(creationPartie){

        creationPartie.style.display =
            "none";

    }


    if(rejoindrePartie){

        rejoindrePartie.style.display =
            "none";

    }


    if(salleAttente){

        salleAttente.style.display =
            "block";

    }


    const code =
        document.getElementById(
            "codePartieAffiche"
        );


    const statut =
        document.getElementById(
            "statutPartie"
        );


    const pseudoAdversaire =
        document.getElementById(
            "pseudoAdversaire"
        );


    const adversaireInfo =
        document.getElementById(
            "adversaireInfo"
        );


    if(code){

        code.textContent =
            partie?.code ||
            "----";

    }


    if(statut){

        statut.textContent =
            "En attente d'un joueur...";

    }


    if(pseudoAdversaire){

        pseudoAdversaire.textContent =
            "---";

    }


    if(adversaireInfo){

        adversaireInfo.style.display =
            "none";

    }


    afficherMessage("");

}


/* ==========================================
   ANNULER CRÉATION
========================================== */

async function annulerPartieEnLigne(){

    arreterChronoEnLigne();
    arreterSurveillancesEnLigne();


    partieEnLigneActuelle =
        null;


    afficherMenuPartie();

}


/* ==========================================
   AFFICHER REJOINDRE
========================================== */

function afficherRejoindrePartie(){

    arreterChronoEnLigne();
    arreterSurveillancesEnLigne();


    if(menuPartieEnLigne){

        menuPartieEnLigne.style.display =
            "none";

    }


    if(creationPartie){

        creationPartie.style.display =
            "none";

    }


    if(rejoindrePartie){

        rejoindrePartie.style.display =
            "block";

    }


    if(salleAttente){

        salleAttente.style.display =
            "none";

    }


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

    if(!joueur || !joueur.id){

        afficherMessage(
            "❌ Votre profil n'est pas correctement enregistré en ligne."
        );

        console.error(
            "❌ Aucun ID Supabase pour le joueur."
        );

        return;

    }


    const champ =
        document.getElementById(
            "codePartie"
        );


    const code =
        champ?.value
            .trim()
            .toUpperCase();


    if(!code){

        afficherMessage(
            "❌ Entrez le code de la partie."
        );

        return;

    }


    if(!/^CQ-[A-Z0-9]{4}$/.test(code)){

        afficherMessage(
            "❌ Code de partie invalide."
        );

        return;

    }


    const bouton =
        document.getElementById(
            "confirmerRejoindrePartie"
        );


    if(bouton){

        bouton.disabled =
            true;

        bouton.textContent =
            "⏳ Vérification...";

    }


    try{

        const {
            data: partie,
            error
        } =
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


        if(!partie){

            afficherMessage(
                "❌ Cette partie n'existe pas ou n'est plus disponible."
            );

            return;

        }


        if(
            partie.joueur1_id ===
            joueur.id
        ){

            afficherMessage(
                "❌ Vous ne pouvez pas rejoindre votre propre partie."
            );

            return;

        }


        /*
         * Le chrono démarre au moment où le deuxième
         * joueur rejoint la partie.
         */

        const finQuestion =
            new Date(
                Date.now() +
                DUREE_QUESTION * 1000
            ).toISOString();


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
                        "en_cours",

                    fin_question:
                        finQuestion

                })
                .eq("id", partie.id)
                .eq("statut", "attente")
                .is("joueur2_id", null)
                .select("*")
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


        partieEnLigneActuelle =
            partieRejointe;


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


        if(menuPartieEnLigne){

            menuPartieEnLigne.style.display =
                "none";

        }


        if(creationPartie){

            creationPartie.style.display =
                "none";

        }


        if(rejoindrePartie){

            rejoindrePartie.style.display =
                "none";

        }


        if(salleAttente){

            salleAttente.style.display =
                "block";

        }


        const codeAffiche =
            document.getElementById(
                "codePartieAffiche"
            );


        const statutPartie =
            document.getElementById(
                "statutPartie"
            );


        const pseudo =
            document.getElementById(
                "pseudoAdversaire"
            );


        const adversaireInfo =
            document.getElementById(
                "adversaireInfo"
            );


        if(codeAffiche){

            codeAffiche.textContent =
                partieRejointe.code;

        }


        if(statutPartie){

            statutPartie.textContent =
                "✅ Adversaire trouvé !";

        }


        if(pseudo){

            pseudo.textContent =
                adversaire?.pseudo ||
                "Adversaire";

        }


        if(adversaireInfo){

            adversaireInfo.style.display =
                "block";

        }


        afficherMessage(
            "✅ Vous avez rejoint la partie."
        );


        afficherConfrontation(
            partieRejointe
        );

    }

    catch(erreur){

        console.error(
            "❌ Erreur inattendue pour rejoindre la partie :",
            erreur
        );

        afficherMessage(
            "❌ Une erreur est survenue."
        );

    }

    finally{

        if(bouton){

            bouton.disabled =
                false;

            bouton.textContent =
                "🎮 Rejoindre";

        }

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


document
    .getElementById("annulerPartie")
    ?.addEventListener(
        "click",
        annulerPartieEnLigne
    );


/* ==========================================
   INITIALISATION
========================================== */

afficherProfilEnLigne();


/* ==========================================
   CHARGER UNE PARTIE COMPLÈTE
========================================== */

async function chargerPartieEtAfficher(
    partieId
){

    try{

        const {
            data: partie,
            error
        } =
            await supabaseClient
                .from("parties_en_ligne")
                .select("*")
                .eq("id", partieId)
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


        partieEnLigneActuelle =
            partie;


        if(
            partie.statut ===
            "terminee"
        ){

            afficherResultatPartie(
                partie
            );

            return;

        }


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
   SURVEILLER JOUEUR 2
========================================== */

function surveillerArriveeAdversaire(
    partieId
){

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
                            .eq("id", partieId)
                            .maybeSingle();


                    if(error){

                        console.error(
                            "❌ Erreur surveillance partie :",
                            error
                        );

                        return;

                    }


                    if(!partie){

                        return;

                    }


                    if(partie.joueur2_id){

                        clearInterval(
                            surveillancePartie
                        );

                        surveillancePartie =
                            null;


                        console.log(
                            "✅ Adversaire détecté !",
                            partie
                        );


                        partieEnLigneActuelle =
                            partie;


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
                                "⚠️ Impossible de récupérer le pseudo :",
                                erreurAdversaire
                            );

                        }


                        const statut =
                            document.getElementById(
                                "statutPartie"
                            );


                        const pseudo =
                            document.getElementById(
                                "pseudoAdversaire"
                            );


                        const adversaireInfo =
                            document.getElementById(
                                "adversaireInfo"
                            );


                        if(statut){

                            statut.textContent =
                                "✅ Adversaire trouvé !";

                        }


                        if(pseudo){

                            pseudo.textContent =
                                adversaire?.pseudo ||
                                "Adversaire";

                        }


                        if(adversaireInfo){

                            adversaireInfo.style.display =
                                "block";

                        }


                        afficherMessage(
                            "✅ Votre adversaire a rejoint la partie !"
                        );


                        afficherConfrontation(
                            partie
                        );

                    }

                }

                catch(erreur){

                    console.error(
                        "❌ Erreur inattendue surveillance :",
                        erreur
                    );

                }

            },
            1000
        );

}
/* ==========================================
   RÉCUPÉRER LES PSEUDOS DE LA PARTIE
========================================== */

async function obtenirPseudosPartie(partie){

    const pseudos = {
        joueur1:
            joueur?.pseudo ||
            "Joueur 1",

        joueur2:
            "Joueur 2"
    };


    if(!partie){

        return pseudos;

    }


    const ids =
        [
            partie.joueur1_id,
            partie.joueur2_id
        ]
        .filter(Boolean);


    if(ids.length === 0){

        return pseudos;

    }


    try{

        const {
            data,
            error
        } =
            await supabaseClient
                .from("joueur")
                .select("id, pseudo")
                .in("id", ids);


        if(error){

            console.warn(
                "⚠️ Impossible de récupérer les pseudos :",
                error
            );

            return pseudos;

        }


        if(Array.isArray(data)){

            const joueur1 =
                data.find(
                    utilisateur =>
                        utilisateur.id ===
                        partie.joueur1_id
                );


            const joueur2 =
                data.find(
                    utilisateur =>
                        utilisateur.id ===
                        partie.joueur2_id
                );


            pseudos.joueur1 =
                joueur1?.pseudo ||
                pseudos.joueur1;


            pseudos.joueur2 =
                joueur2?.pseudo ||
                pseudos.joueur2;

        }

    }

    catch(erreur){

        console.warn(
            "⚠️ Erreur récupération des pseudos :",
            erreur
        );

    }


    return pseudos;

}


async function afficherConfrontation(
    partie
){

    if(!partie){

        console.error(
            "❌ Partie en ligne absente."
        );

        return;

    }


    partieEnLigneActuelle =
        partie;


    const confrontation =
        document.getElementById(
            "confrontation"
        );


    if(!confrontation){

        console.error(
            "❌ Élément HTML #confrontation introuvable."
        );

        return;

    }


    const accueil =
        document.getElementById(
            "accueil"
        );


    if(accueil){

        accueil.style.display =
            "none";

    }


    confrontation.style.display =
        "block";


    if(menuPartieEnLigne){

        menuPartieEnLigne.style.display =
            "none";

    }


    if(creationPartie){

        creationPartie.style.display =
            "none";

    }


    if(rejoindrePartie){

        rejoindrePartie.style.display =
            "none";

    }


    if(salleAttente){

        salleAttente.style.display =
            "none";

    }


    const codePartie =
        document.getElementById(
            "codePartieEnLigne"
        );


    if(codePartie){

        codePartie.textContent =
            partie.code ||
            "";

    }


    /* ==========================================
       AFFICHER LES VRAIS PSEUDOS
    ========================================== */

    const pseudos =
        await obtenirPseudosPartie(
            partie
        );


    const pseudoJoueur1 =
        document.getElementById(
            "pseudoJoueur1"
        );


    const pseudoJoueur2 =
        document.getElementById(
            "pseudoJoueur2"
        );


    if(pseudoJoueur1){

        pseudoJoueur1.textContent =
            pseudos.joueur1;

    }


    if(pseudoJoueur2){

        pseudoJoueur2.textContent =
            pseudos.joueur2;

    }


    mettreAJourScoresEnLigne(
        partie
    );


    afficherQuestionEnLigne(
        partie
    );


    surveillerReponsesPartie();

}


/* ==========================================
   METTRE À JOUR LES SCORES
========================================== */

function mettreAJourScoresEnLigne(
    partie
){

    if(!partie){

        return;

    }


    const score1 =
        Number(
            partie.score_joueur1 ?? 0
        );


    const score2 =
        Number(
            partie.score_joueur2 ?? 0
        );


    const scoreJoueur1 =
        document.getElementById(
            "scoreJoueur1EnLigne"
        );


    const scoreJoueur2 =
        document.getElementById(
            "scoreJoueur2EnLigne"
        );


    if(scoreJoueur1){

        scoreJoueur1.textContent =
            score1;

    }


    if(scoreJoueur2){

        scoreJoueur2.textContent =
            score2;

    }


    /*
     * Ton HTML actuel utilise :
     * scoreJoueur1
     * scoreJoueur2
     *
     * On met donc également ces éléments à jour.
     */

    const ancienScore1 =
        document.getElementById(
            "scoreJoueur1"
        );


    const ancienScore2 =
        document.getElementById(
            "scoreJoueur2"
        );


    if(ancienScore1){

        ancienScore1.textContent =
            score1;

    }


    if(ancienScore2){

        ancienScore2.textContent =
            score2;

    }

}


/* ==========================================
   AFFICHER LA QUESTION + CHRONO
========================================== */

function afficherQuestionEnLigne(
    partie
){

    if(
        !partie ||
        !partie.questions
    ){

        console.error(
            "❌ Partie ou questions absentes."
        );

        return;

    }


    const questions =
        Array.isArray(
            partie.questions
        )
            ? partie.questions
            : [];


    const index =
        Number(
            partie.question_actuelle ?? 0
        );


    const question =
        questions[index];


    if(!question){

        console.error(
            "❌ Question introuvable à l'index :",
            index
        );

        if(
            index >=
            questions.length
        ){

            afficherResultatPartie(
                partie
            );

        }

        return;

    }


    const elementQuestion =
        document.getElementById(
            "questionEnLigne"
        );


    const conteneurReponses =
        document.getElementById(
            "reponsesEnLigne"
        );


    const numeroQuestion =
        document.getElementById(
            "numeroQuestionEnLigne"
        );


    if(
        !elementQuestion ||
        !conteneurReponses
    ){

        console.error(
            "❌ Éléments HTML du quiz en ligne introuvables."
        );

        return;

    }


    elementQuestion.textContent =
        question.question;


    if(numeroQuestion){

        numeroQuestion.textContent =
            `Question ${index + 1}/${questions.length}`;

    }


    conteneurReponses.innerHTML =
        "";


    const reponses =
        Array.isArray(
            question.reponses
        )
            ? question.reponses
            : [];


    reponses.forEach(
        (
            reponse,
            indexReponse
        ) => {

            const bouton =
                document.createElement(
                    "button"
                );


            bouton.className =
                "bouton-reponse";


            bouton.textContent =
                reponse;


            bouton.type =
                "button";


            bouton.addEventListener(
                "click",
                () => {

                    enregistrerReponseEnLigne(
                        indexReponse
                    );

                }
            );


            conteneurReponses.appendChild(
                bouton
            );

        }
    );


    afficherMessage("");


    const statut =
        document.getElementById(
            "statutReponseEnLigne"
        );


    if(statut){

        const maReponse =
            joueur.id ===
            partie.joueur1_id
                ? partie.reponse_joueur1
                : joueur.id ===
                    partie.joueur2_id
                        ? partie.reponse_joueur2
                        : null;


        if(
            maReponse !== null &&
            maReponse !== undefined
        ){

            statut.textContent =
                "✅ Réponse enregistrée. En attente de l'adversaire...";

        }
        else{

            statut.textContent =
                "";

        }

    }


    /*
     * Le chrono est commun aux deux joueurs.
     * Il est calculé à partir de fin_question
     * stocké dans Supabase.
     */

    if(partie.fin_question){

        demarrerChronoEnLigne(
            partie
        );

    }
    else{

        initialiserChronoQuestion(
            partie
        );

    }

}
/* ==========================================
   ENREGISTRER UNE RÉPONSE
========================================== */

async function enregistrerReponseEnLigne(
    indexReponse
){

    if(!partieEnLigneActuelle){

        console.error(
            "❌ Aucune partie en ligne active."
        );

        return;

    }


    const partie =
        partieEnLigneActuelle;


    let colonneReponse =
        null;


    if(
        joueur.id ===
        partie.joueur1_id
    ){

        colonneReponse =
            "reponse_joueur1";

    }
    else if(
        joueur.id ===
        partie.joueur2_id
    ){

        colonneReponse =
            "reponse_joueur2";

    }
    else{

        console.error(
            "❌ Joueur non reconnu dans cette partie."
        );

        return;

    }


    /*
     * Empêcher une deuxième réponse.
     */

    if(
        partie[colonneReponse] !== null &&
        partie[colonneReponse] !== undefined
    ){

        return;

    }


    /*
     * Vérifier que le temps n'est pas déjà écoulé.
     */

    if(partie.fin_question){

        const fin =
            new Date(
                partie.fin_question
            ).getTime();


        if(
            Number.isFinite(fin) &&
            Date.now() >= fin
        ){

            await gererFinChronoEnLigne();

            return;

        }

    }


    const boutons =
        document.querySelectorAll(
            "#reponsesEnLigne .bouton-reponse"
        );


    boutons.forEach(
        bouton => {

            bouton.disabled =
                true;

        }
    );


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
            .eq("id", partie.id)
            .is(
                colonneReponse,
                null
            )
            .select("*")
            .maybeSingle();


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


    if(!data){

        console.warn(
            "⚠️ La réponse existait déjà ou le temps est terminé."
        );

        return;

    }


    partieEnLigneActuelle =
        data;


    arreterChronoEnLigne();


    const statut =
        document.getElementById(
            "statutReponseEnLigne"
        );


    if(statut){

        statut.textContent =
            "✅ Réponse enregistrée. En attente de l'adversaire...";

    }


    console.log(
        "✅ Réponse enregistrée :",
        indexReponse
    );

}


/* ==========================================
   DÉMARRER LE CHRONO
========================================== */

function demarrerChronoEnLigne(
    partie
){

    arreterChronoEnLigne();


    const affichage =
        document.getElementById(
            "tempsRestantEnLigne"
        );


    if(!affichage){

        console.error(
            "❌ Élément #tempsRestantEnLigne introuvable."
        );

        return;

    }


    if(
        !partie ||
        !partie.fin_question
    ){

        affichage.textContent =
            DUREE_QUESTION;

        return;

    }


    const fin =
        new Date(
            partie.fin_question
        ).getTime();


    if(
        !Number.isFinite(fin)
    ){

        console.error(
            "❌ fin_question invalide :",
            partie.fin_question
        );

        affichage.textContent =
            DUREE_QUESTION;

        return;

    }


    function actualiserChrono(){

        const millisecondesRestantes =
            fin -
            Date.now();


        const secondes =
            Math.max(
                0,
                Math.ceil(
                    millisecondesRestantes /
                    1000
                )
            );


        affichage.textContent =
            secondes;


        if(
            secondes <= 0
        ){

            arreterChronoEnLigne();


            afficherMessage(
                "⏰ Temps écoulé !"
            );


            gererFinChronoEnLigne();

        }

    }


    actualiserChrono();


    intervalleChrono =
        setInterval(
            actualiserChrono,
            200
        );

}


/* ==========================================
   ARRÊTER LE CHRONO
========================================== */

function arreterChronoEnLigne(){

    if(intervalleChrono){

        clearInterval(
            intervalleChrono
        );

        intervalleChrono =
            null;

    }

}


/* ==========================================
   INITIALISER LE CHRONO
========================================== */

async function initialiserChronoQuestion(
    partie
){

    if(!partie){

        return;

    }


    /*
     * Si un autre joueur a déjà créé
     * le chrono, on l'utilise.
     */

    if(partie.fin_question){

        demarrerChronoEnLigne(
            partie
        );

        return;

    }


    /*
     * On tente de créer le chrono.
     *
     * Le .is("fin_question", null)
     * garantit qu'un seul joueur
     * peut réellement l'initialiser.
     */

    const finQuestion =
        new Date(
            Date.now() +
            DUREE_QUESTION * 1000
        ).toISOString();


    const {
        data,
        error
    } =
        await supabaseClient
            .from("parties_en_ligne")
            .update({

                fin_question:
                    finQuestion

            })
            .eq("id", partie.id)
            .is(
                "fin_question",
                null
            )
            .select("*")
            .maybeSingle();


    if(error){

        console.error(
            "❌ Erreur initialisation chrono :",
            error
        );

        return;

    }


    if(data){

        partieEnLigneActuelle =
            data;


        demarrerChronoEnLigne(
            data
        );

        return;

    }


    /*
     * Quelqu'un d'autre a probablement
     * initialisé le chrono.
     *
     * On récupère alors la partie.
     */

    const {
        data: partieActualisee,
        error: erreurLecture
    } =
        await supabaseClient
            .from("parties_en_ligne")
            .select("*")
            .eq("id", partie.id)
            .maybeSingle();


    if(erreurLecture){

        console.error(
            "❌ Erreur récupération chrono :",
            erreurLecture
        );

        return;

    }


    if(
        partieActualisee &&
        partieActualisee.fin_question
    ){

        partieEnLigneActuelle =
            partieActualisee;


        demarrerChronoEnLigne(
            partieActualisee
        );

    }

}


/* ==========================================
   GÉRER LA FIN DU CHRONO
========================================== */

async function gererFinChronoEnLigne(){

    if(!partieEnLigneActuelle){

        return;

    }


    const partie =
        partieEnLigneActuelle;


    const colonneReponse =
        partie.joueur1_id ===
        joueur.id
            ? "reponse_joueur1"
            : partie.joueur2_id ===
                joueur.id
                    ? "reponse_joueur2"
                    : null;


    if(!colonneReponse){

        console.error(
            "❌ Le joueur actuel ne participe pas à cette partie."
        );

        return;

    }


    /*
     * Si une réponse existe déjà,
     * rien à faire.
     */

    if(
        partie[colonneReponse] !== null &&
        partie[colonneReponse] !== undefined
    ){

        return;

    }


    const {
        data,
        error
    } =
        await supabaseClient
            .from("parties_en_ligne")
            .update({

                [colonneReponse]:
                    -1

            })
            .eq("id", partie.id)
            .is(
                colonneReponse,
                null
            )
            .select("*")
            .maybeSingle();


    if(error){

        console.error(
            "❌ Erreur lors de l'enregistrement du temps écoulé :",
            error
        );

        return;

    }


    if(data){

        partieEnLigneActuelle =
            data;


        console.log(
            "⏰ Temps écoulé enregistré pour :",
            colonneReponse
        );

    }

}


/* ==========================================
   SURVEILLER LES RÉPONSES
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
                                "id, code, joueur1_id, joueur2_id, questions, question_actuelle, reponse_joueur1, reponse_joueur2, traitement_question, score_joueur1, score_joueur2, statut, fin_question"
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


                    const ancienIndex =
                        Number(
                            partieEnLigneActuelle.question_actuelle ?? 0
                        );


                    const nouvelIndex =
                        Number(
                            partie.question_actuelle ?? 0
                        );


                    partieEnLigneActuelle =
                        partie;


                    /* ==========================================
                       METTRE À JOUR LES SCORES
                    ========================================== */

                    mettreAJourScoresEnLigne(
                        partie
                    );


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
                       NOUVELLE QUESTION
                    ========================================== */

                    if(
                        nouvelIndex !==
                        ancienIndex
                    ){

                        console.log(
                            "➡️ Nouvelle question :",
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

                        return;

                    }


                    /* ==========================================
                       CHRONO EXPIRÉ
                    ========================================== */

                    if(partie.fin_question){

                        const fin =
                            new Date(
                                partie.fin_question
                            ).getTime();


                        if(
                            Number.isFinite(fin) &&
                            Date.now() >= fin
                        ){

                            const misesAJour =
                                {};


                            if(
                                partie.reponse_joueur1 ===
                                null
                            ){

                                misesAJour.reponse_joueur1 =
                                    -1;

                            }


                            if(
                                partie.reponse_joueur2 ===
                                null
                            ){

                                misesAJour.reponse_joueur2 =
                                    -1;

                            }


                            if(
                                Object.keys(
                                    misesAJour
                                ).length > 0
                            ){

                                const {
                                    data:
                                        partieApresTemps,
                                    error:
                                        erreurTemps
                                } =
                                    await supabaseClient
                                        .from(
                                            "parties_en_ligne"
                                        )
                                        .update(
                                            misesAJour
                                        )
                                        .eq(
                                            "id",
                                            partie.id
                                        )
                                        .select("*")
                                        .maybeSingle();


                                if(erreurTemps){

                                    console.error(
                                        "❌ Erreur traitement du chrono :",
                                        erreurTemps
                                    );

                                    return;

                                }


                                if(
                                    partieApresTemps
                                ){

                                    partieEnLigneActuelle =
                                        partieApresTemps;

                                }

                            }

                        }

                    }


                    const partieActuelle =
                        partieEnLigneActuelle;


                    /* ==========================================
                       ATTENDRE LES DEUX RÉPONSES
                    ========================================== */

                    if(
                        !partieActuelle ||
                        partieActuelle.reponse_joueur1 === null ||
                        partieActuelle.reponse_joueur2 === null
                    ){

                        return;

                    }


                    /* ==========================================
                       QUESTION DÉJÀ EN TRAITEMENT
                    ========================================== */

                    if(
                        partieActuelle.traitement_question ===
                        true
                    ){

                        return;

                    }


                    /* ==========================================
                       VERROUILLER LA QUESTION
                    ========================================== */

                    const {
                        data: verrou,
                        error: erreurVerrou
                    } =
                        await supabaseClient
                            .from(
                                "parties_en_ligne"
                            )
                            .update({

                                traitement_question:
                                    true

                            })
                            .eq(
                                "id",
                                partieActuelle.id
                            )
                            .eq(
                                "traitement_question",
                                false
                            )
                            .select("*")
                            .maybeSingle();


                    if(erreurVerrou){

                        console.error(
                            "❌ Erreur verrouillage :",
                            erreurVerrou
                        );

                        return;

                    }


                    if(!verrou){

                        return;

                    }


                    console.log(
                        "🔒 Verrou obtenu."
                    );


                    arreterChronoEnLigne();


                    await traiterQuestionPartie(
                        verrou
                    );

                }

                catch(erreur){

                    console.error(
                        "❌ Erreur surveillance réponses :",
                        erreur
                    );

                }

            },
            500
        );

}


/* ==========================================
   ARRÊTER LES SURVEILLANCES
========================================== */

function arreterSurveillancesEnLigne(){

    if(surveillancePartie){

        clearInterval(
            surveillancePartie
        );

        surveillancePartie =
            null;

    }


    if(surveillanceReponses){

        clearInterval(
            surveillanceReponses
        );

        surveillanceReponses =
            null;

    }

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
        partie.questions[
            indexQuestion
        ];


    if(!question){

        console.error(
            "❌ Question introuvable :",
            indexQuestion
        );

        return;

    }


    /* ==========================================
       VÉRIFIER LES RÉPONSES
    ========================================== */

    const joueur1Correct =
        Number(
            partie.reponse_joueur1
        ) ===
        Number(
            question.bonne
        );


    const joueur2Correct =
        Number(
            partie.reponse_joueur2
        ) ===
        Number(
            question.bonne
        );


    /* ==========================================
       CALCULER LES SCORES
    ========================================== */

    const nouveauScoreJoueur1 =
        Number(
            partie.score_joueur1 || 0
        ) +
        (
            joueur1Correct
                ? 1
                : 0
        );


    const nouveauScoreJoueur2 =
        Number(
            partie.score_joueur2 || 0
        ) +
        (
            joueur2Correct
                ? 1
                : 0
        );


    const prochaineQuestion =
        indexQuestion + 1;


    const partieTerminee =
        prochaineQuestion >=
        partie.questions.length;


    /*
     * Si la partie continue,
     * on crée immédiatement la nouvelle échéance.
     *
     * Si la partie est terminée,
     * fin_question devient null.
     */

    const finQuestion =
        partieTerminee
            ? null
            : new Date(
                Date.now() +
                DUREE_QUESTION * 1000
            ).toISOString();


    /* ==========================================
       MISE À JOUR SUPABASE
    ========================================== */

    const {
        data: partieMiseAJour,
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

                fin_question:
                    finQuestion,

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
            .select("*")
            .maybeSingle();


    if(error){

        console.error(
            "❌ Erreur traitement question :",
            error
        );

        return;

    }


    if(!partieMiseAJour){

        console.warn(
            "⚠️ La question avait déjà été traitée."
        );

        return;

    }


    console.log(
        "✅ Question traitée :",
        indexQuestion + 1
    );


    console.log(
        "📊 Score joueur 1 :",
        nouveauScoreJoueur1
    );


    console.log(
        "📊 Score joueur 2 :",
        nouveauScoreJoueur2
    );


    partieEnLigneActuelle =
        partieMiseAJour;


    /* ==========================================
       FIN DE PARTIE
    ========================================== */

    if(partieTerminee){

        afficherResultatPartie(
            partieMiseAJour
        );

        return;

    }


    /* ==========================================
       AFFICHER LA QUESTION SUIVANTE
    ========================================== */

    afficherQuestionEnLigne(
        partieMiseAJour
    );

}


/* ==========================================
   AFFICHER LE RÉSULTAT FINAL
========================================== */

async function afficherResultatPartie(
    partie
){

    if(!partie){

        return;

    }


    arreterChronoEnLigne();
    arreterSurveillancesEnLigne();


    partieEnLigneActuelle =
        partie;


    const confrontation =
        document.getElementById(
            "confrontation"
        );


    if(confrontation){

        confrontation.style.display =
            "none";

    }


    const resultat =
        document.getElementById(
            "resultatPartie"
        );


    if(resultat){

        resultat.style.display =
            "block";

    }


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


    /* ==========================================
       RÉCUPÉRER LES VRAIS PSEUDOS
    ========================================== */

    const pseudos =
        await obtenirPseudosPartie(
            partie
        );


    const nomJoueur1 =
        String(
            pseudos.joueur1
        )
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );


    const nomJoueur2 =
        String(
            pseudos.joueur2
        )
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );


    if(
        scoreJoueur1 >
        scoreJoueur2
    ){

        resultatFinal.innerHTML = `
            <p>🏆 ${nomJoueur1} gagne !</p>
            <p>${nomJoueur1} : ${scoreJoueur1}</p>
            <p>${nomJoueur2} : ${scoreJoueur2}</p>
        `;

    }
    else if(
        scoreJoueur2 >
        scoreJoueur1
    ){

        resultatFinal.innerHTML = `
            <p>🏆 ${nomJoueur2} gagne !</p>
            <p>${nomJoueur1} : ${scoreJoueur1}</p>
            <p>${nomJoueur2} : ${scoreJoueur2}</p>
        `;

    }
    else{

        resultatFinal.innerHTML = `
            <p>🤝 Égalité !</p>
            <p>${nomJoueur1} : ${scoreJoueur1}</p>
            <p>${nomJoueur2} : ${scoreJoueur2}</p>
        `;

    }

}


/* ==========================================
   NOUVELLE PARTIE
========================================== */

document
    .getElementById(
        "btnNouvellePartie"
    )
    ?.addEventListener(
        "click",
        () => {

            arreterChronoEnLigne();

            arreterSurveillancesEnLigne();


            const resultat =
                document.getElementById(
                    "resultatPartie"
                );


            if(resultat){

                resultat.style.display =
                    "none";

            }


            const confrontation =
                document.getElementById(
                    "confrontation"
                );


            if(confrontation){

                confrontation.style.display =
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
    .getElementById(
        "btnRetourAccueil"
    )
    ?.addEventListener(
        "click",
        () => {

            arreterChronoEnLigne();

            arreterSurveillancesEnLigne();


            partieEnLigneActuelle =
                null;


            window.location.href =
                "index.html?accueil=1";

        }
    );