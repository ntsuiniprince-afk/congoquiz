/* ==========================================
   CONGOQUIZ — MODE EN LIGNE
   Gestion des confrontations en ligne
   2, 3 ou 4 joueurs
========================================== */


/* ==========================================
   ÉLÉMENTS HTML PRINCIPAUX
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

function obtenirQuestionsCategorie(
    categorie
){

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

function afficherMessage(
    message
){

    if(messageModeEnLigne){

        messageModeEnLigne.textContent =
            message;

    }

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
   NOMBRE DE JOUEURS
========================================== */

function obtenirNombreJoueurs(
    partie
){

    const nombre =
        Number(
            partie?.nombre_joueurs ?? 2
        );


    if(
        [2, 3, 4].includes(
            nombre
        )
    ){

        return nombre;

    }


    return 2;

}


/* ==========================================
   OBTENIR LES JOUEURS ACTIFS DE LA PARTIE
========================================== */
function obtenirJoueursPartie(partie) {

    const nombre = obtenirNombreJoueurs(partie);

    const joueurs = [];

    for (let numero = 1; numero <= nombre; numero++) {

        const idJoueur = partie[`joueur${numero}_id`];

        if (idJoueur !== null && idJoueur !== undefined) {
            joueurs.push(idJoueur);
        }
    }

    return joueurs;
}


/* ==========================================
   OBTENIR LE NUMÉRO DU JOUEUR CONNECTÉ
========================================== */

function obtenirNumeroJoueur(partie) {

    if (!joueur || !joueur.id) {
        return null;
    }

    const nombre = obtenirNombreJoueurs(partie);

    for (let numero = 1; numero <= nombre; numero++) {

        if (partie[`joueur${numero}_id`] === joueur.id) {
            return numero;
        }
    }

    return null;
}

/* ==========================================
   OBTENIR LA COLONNE DE RÉPONSE
========================================== */

function obtenirColonneReponse(
    partie
){

    const numeroJoueur =
        obtenirNumeroJoueur(
            partie
        );


    if(!numeroJoueur){

        return null;

    }


    return `reponse_joueur${numeroJoueur}`;

}


/* ==========================================
   OBTENIR LA COLONNE DE SCORE
========================================== */

function obtenirColonneScore(
    numeroJoueur
){

    if(
        ![1, 2, 3, 4].includes(
            numeroJoueur
        )
    ){

        return null;

    }


    return `score_joueur${numeroJoueur}`;

}


/* ==========================================
   RÉCUPÉRER LES PSEUDOS
========================================== */

async function obtenirPseudosPartie(
    partie
){

    const pseudos = {

        joueur1:
            "Joueur 1",

        joueur2:
            "Joueur 2",

        joueur3:
            "Joueur 3",

        joueur4:
            "Joueur 4"

    };


    if(!partie){

        return pseudos;

    }


    const nombreJoueurs =
        obtenirNombreJoueurs(
            partie
        );


    const ids = [];


    for(
        let numero = 1;
        numero <= nombreJoueurs;
        numero++
    ){

        const id =
            partie[
                `joueur${numero}_id`
            ];


        if(
            id !== null &&
            id !== undefined
        ){

            ids.push(id);

        }

    }


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
                .in(
                    "id",
                    ids
                );


        if(error){

            console.warn(
                "⚠️ Impossible de récupérer les pseudos :",
                error
            );

            return pseudos;

        }


        if(Array.isArray(data)){

            for(
                let numero = 1;
                numero <= nombreJoueurs;
                numero++
            ){

                const id =
                    partie[
                        `joueur${numero}_id`
                    ];


                if(
                    id === null ||
                    id === undefined
                ){

                    continue;

                }


                const utilisateur =
                    data.find(
                        element =>
                            String(element.id) ===
                            String(id)
                    );


                if(
                    utilisateur?.pseudo
                ){

                    pseudos[
                        `joueur${numero}`
                    ] =
                        utilisateur.pseudo;

                }

            }

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


    const confrontation =
        document.getElementById(
            "confrontation"
        );


    const resultat =
        document.getElementById(
            "resultatPartie"
        );


    if(confrontation){

        confrontation.style.display =
            "none";

    }


    if(resultat){

        resultat.style.display =
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


    const confrontation =
        document.getElementById(
            "confrontation"
        );


    const resultat =
        document.getElementById(
            "resultatPartie"
        );


    if(confrontation){

        confrontation.style.display =
            "none";

    }


    if(resultat){

        resultat.style.display =
            "none";

    }


    afficherMessage("");

}

/* ==========================================
   AFFICHER LA SALLE D'ATTENTE
========================================== */

function afficherSalleAttentePartie(){

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


    const confrontation =
        document.getElementById(
            "confrontation"
        );


    const resultat =
        document.getElementById(
            "resultatPartie"
        );


    if(confrontation){

        confrontation.style.display =
            "none";

    }


    if(resultat){

        resultat.style.display =
            "none";

    }

}


/* ==========================================
   CRÉATION DE LA PARTIE
========================================== */

/* ==========================================
   CRÉATION DE LA PARTIE
========================================== */

async function creerPartieEnLigne(){

    if(!joueur || !joueur.id){

        afficherMessage(
            "Impossible de créer la partie : joueur non identifié."
        );

        return;

    }


    const categorieElement =
        document.getElementById(
            "categoriePartie"
        );


    const nombreQuestionsElement =
        document.getElementById(
            "nombreQuestionsPartie"
        );


    const nombreJoueursElement =
        document.getElementById(
            "nombreJoueursPartie"
        );


    const bouton =
        document.getElementById(
            "confirmerCreationPartie"
        );


    if(
        !categorieElement ||
        !nombreQuestionsElement ||
        !nombreJoueursElement
    ){

        afficherMessage(
            "Erreur : formulaire de création incomplet."
        );

        return;

    }


    const categorie =
        categorieElement.value;


    const nombreQuestions =
        parseInt(
            nombreQuestionsElement.value,
            10
        );


    const nombreJoueurs =
        parseInt(
            nombreJoueursElement.value,
            10
        );


    if(
        ![2, 3, 4].includes(
            nombreJoueurs
        )
    ){

        afficherMessage(
            "Le nombre de joueurs doit être compris entre 2 et 4."
        );

        return;

    }


    const questions =
        preparerQuestionsPartie(
            categorie,
            nombreQuestions
        );


    if(
        !questions ||
        questions.length < nombreQuestions
    ){

        afficherMessage(
            "Pas assez de questions disponibles dans cette catégorie."
        );

        return;

    }


    if(bouton){

        bouton.disabled =
            true;

    }


    try{

        const code =
            await genererCodeUnique();


        if(!code){

            afficherMessage(
                "Impossible de générer un code de partie unique."
            );

            return;

        }


        const {
            data,
            error
        } =
            await supabaseClient
                .from("parties_en_ligne")
                .insert([{

                    code:
                        code,

                    joueur1_id:
                        joueur.id,

                    joueur2_id:
                        null,

                    joueur3_id:
                        null,

                    joueur4_id:
                        null,

                    statut:
                        "attente",

                    categorie:
                        categorie,

                    nombre_questions:
                        nombreQuestions,

                    nombre_joueurs:
                        nombreJoueurs,

                    score_joueur1:
                        0,

                    score_joueur2:
                        0,

                    score_joueur3:
                        0,

                    score_joueur4:
                        0,

                    gagnant_id:
                        null,

                    questions:
                        questions,

                    question_actuelle:
                        0,

                    reponse_joueur1:
                        null,

                    reponse_joueur2:
                        null,

                    reponse_joueur3:
                        null,

                    reponse_joueur4:
                        null,

                    traitement_question:
                        false,

                    fin_question:
                        null

                }])
                .select("*")
                .single();


        if(error){

            throw error;

        }


        partieEnLigneActuelle =
            data;


        console.log(
            "Partie créée :",
            data
        );


        afficherSalleAttentePartie();


        await mettreAJourSalleAttente(
            data
        );


        afficherMessage(
            `Partie créée ! Code : ${data.code}`
        );


        surveillerArriveeJoueurs(
            data.id
        );

    }

    catch(error){

        console.error(
            "Erreur lors de la création de la partie :",
            error
        );


        afficherMessage(
            "Impossible de créer la partie. Réessaie."
        );

    }

    finally{

        if(bouton){

            bouton.disabled =
                false;

        }

    }

}


/* ==========================================
   METTRE À JOUR LA SALLE D'ATTENTE
========================================== */

async function mettreAJourSalleAttente(partie) {

    if (!partie) {
        return;
    }

    const nombreJoueurs = obtenirNombreJoueurs(partie);

    const joueurs = obtenirJoueursPartie(partie);

    const pseudos = await obtenirPseudosPartie(partie);

    const codePartieAffiche = document.getElementById("codePartieAffiche");
    const statutPartie = document.getElementById("statutPartie");
    const listeJoueursAttente = document.getElementById("listeJoueursAttente");

    if (codePartieAffiche) {
        codePartieAffiche.textContent = partie.code || "----";
    }

    if (statutPartie) {

        if (partie.statut === "attente") {

            statutPartie.textContent =
                `Joueurs présents : ${joueurs.length}/${nombreJoueurs}`;

        } else if (partie.statut === "en_cours") {

            statutPartie.textContent =
                "La partie commence...";

        } else if (partie.statut === "terminee") {

            statutPartie.textContent =
                "Partie terminée.";

        } else {

            statutPartie.textContent =
                "En attente des joueurs...";
        }
    }

    if (listeJoueursAttente) {

        let html = "";

        for (let numero = 1; numero <= nombreJoueurs; numero++) {

            const idJoueur = partie[`joueur${numero}_id`];

            const pseudo = pseudos[`pseudo${numero}`];

            if (idJoueur !== null && idJoueur !== undefined) {

                html += `
                    <p>
                        👤 Joueur ${numero} :
                        <strong>
                            ${securiserTexte(pseudo || "Joueur")}
                        </strong>
                    </p>
                `;

            } else {

                html += `
                    <p>
                        ⏳ Joueur ${numero} :
                        <strong>
                            En attente...
                        </strong>
                    </p>
                `;
            }
        }

        listeJoueursAttente.innerHTML = html;
    }
}


/* ==========================================
   ANNULER PARTIE
========================================== */

async function annulerPartieEnLigne(){

    arreterChronoEnLigne();
    arreterSurveillancesEnLigne();


    if(
        partieEnLigneActuelle &&
        joueur?.id
    ){

        try{

            const numeroJoueur =
                obtenirNumeroJoueur(
                    partieEnLigneActuelle
                );


            if(
                numeroJoueur === 1
            ){

                await supabaseClient
                    .from("parties_en_ligne")
                    .delete()
                    .eq(
                        "id",
                        partieEnLigneActuelle.id
                    )
                    .eq(
                        "statut",
                        "attente"
                    );

            }

            else if(
                numeroJoueur
            ){

                await supabaseClient
                    .from("parties_en_ligne")
                    .update({

                        [`joueur${numeroJoueur}_id`]:
                            null

                    })
                    .eq(
                        "id",
                        partieEnLigneActuelle.id
                    )
                    .eq(
                        "statut",
                        "attente"
                    );

            }

        }

        catch(erreur){

            console.warn(
                "⚠️ Erreur annulation partie :",
                erreur
            );

        }

    }


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


    const confrontation =
        document.getElementById(
            "confrontation"
        );


    const resultat =
        document.getElementById(
            "resultatPartie"
        );


    if(confrontation){

        confrontation.style.display =
            "none";

    }


    if(resultat){

        resultat.style.display =
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

    if(
        !joueur ||
        !joueur.id
    ){

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


    if(
        !/^CQ-[A-Z0-9]{4}$/.test(
            code
        )
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


    if(bouton){

        bouton.disabled =
            true;

        bouton.textContent =
            "⏳ Vérification...";

    }


    try{

        let partieRejointe =
            null;


        /*
         * Plusieurs tentatives permettent de gérer
         * l'arrivée simultanée de joueurs.
         */

        for(
            let tentative = 0;
            tentative < 3;
            tentative++
        ){

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


            /*
             * Empêcher le créateur de rejoindre
             * sa propre partie.
             */

            if(
                String(partie.joueur1_id) ===
                String(joueur.id)
            ){

                afficherMessage(
                    "❌ Vous ne pouvez pas rejoindre votre propre partie."
                );

                return;

            }


            /*
             * Empêcher un joueur déjà présent
             * de rejoindre une deuxième fois.
             */

            let dejaPresent =
                false;


            const nombreJoueurs =
                obtenirNombreJoueurs(
                    partie
                );


            for(
                let numero = 1;
                numero <= nombreJoueurs;
                numero++
            ){

                const id =
                    partie[
                        `joueur${numero}_id`
                    ];


                if(
                    id !== null &&
                    id !== undefined &&
                    String(id) ===
                    String(joueur.id)
                ){

                    dejaPresent =
                        true;

                    break;

                }

            }


            if(dejaPresent){

                afficherMessage(
                    "❌ Vous êtes déjà dans cette partie."
                );

                return;

            }


            const joueursPresents =
                obtenirJoueursPartie(
                    partie
                );


            if(
                joueursPresents.length >=
                nombreJoueurs
            ){

                afficherMessage(
                    "❌ Cette partie est déjà complète."
                );

                return;

            }


            /*
             * Chercher le premier emplacement libre.
             */

            let numeroJoueurLibre =
                null;


            for(
                let numero = 2;
                numero <= nombreJoueurs;
                numero++
            ){

                const id =
                    partie[
                        `joueur${numero}_id`
                    ];


                if(
                    id === null ||
                    id === undefined
                ){

                    numeroJoueurLibre =
                        numero;

                    break;

                }

            }


            if(!numeroJoueurLibre){

                afficherMessage(
                    "❌ Cette partie est complète."
                );

                return;

            }


            const colonneJoueur =
                `joueur${numeroJoueurLibre}_id`;


            /*
             * Réservation protégée :
             * l'emplacement doit encore être NULL.
             */

            const {
                data: resultatUpdate,
                error: erreurUpdate
            } =
                await supabaseClient
                    .from("parties_en_ligne")
                    .update({

                        [colonneJoueur]:
                            joueur.id

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
                        colonneJoueur,
                        null
                    )
                    .select("*")
                    .maybeSingle();


            if(erreurUpdate){

                console.error(
                    "❌ Erreur pour rejoindre la partie :",
                    erreurUpdate
                );

                afficherMessage(
                    "❌ Impossible de rejoindre la partie."
                );

                return;

            }


            if(resultatUpdate){

                partieRejointe =
                    resultatUpdate;

                break;

            }

        }


        if(!partieRejointe){

            afficherMessage(
                "❌ La partie vient d'être rejointe par un autre joueur. Réessayez."
            );

            return;

        }


        partieEnLigneActuelle =
            partieRejointe;


        const nombreJoueurs =
            obtenirNombreJoueurs(
                partieRejointe
            );


        const joueursApresRejoindre =
            obtenirJoueursPartie(
                partieRejointe
            );


        console.log(
            `👥 Joueurs présents : ${joueursApresRejoindre.length}/${nombreJoueurs}`,
            partieRejointe
        );


        /*
         * Si la partie est complète,
         * on tente de la démarrer.
         */

        if(
            joueursApresRejoindre.length >=
            nombreJoueurs
        ){

            const finQuestion =
                new Date(
                    Date.now() +
                    DUREE_QUESTION * 1000
                ).toISOString();


            const {
                data: partieDemarree,
                error: erreurDemarrage
            } =
                await supabaseClient
                    .from("parties_en_ligne")
                    .update({

                        statut:
                            "en_cours",

                        fin_question:
                            finQuestion

                    })
                    .eq(
                        "id",
                        partieRejointe.id
                    )
                    .eq(
                        "statut",
                        "attente"
                    )
                    .select("*")
                    .maybeSingle();


            if(erreurDemarrage){

                console.error(
                    "❌ Erreur démarrage partie :",
                    erreurDemarrage
                );

                afficherMessage(
                    "❌ Impossible de démarrer la partie."
                );

                return;

            }


            if(partieDemarree){

                partieEnLigneActuelle =
                    partieDemarree;

            }

            else{

                /*
                 * Un autre joueur a déjà démarré
                 * la partie.
                 */

                const {
                    data: partieActualisee,
                    error: erreurLecture
                } =
                    await supabaseClient
                        .from("parties_en_ligne")
                        .select("*")
                        .eq(
                            "id",
                            partieRejointe.id
                        )
                        .maybeSingle();


                if(erreurLecture){

                    console.error(
                        "❌ Erreur récupération partie actualisée :",
                        erreurLecture
                    );

                    afficherMessage(
                        "❌ Impossible de récupérer l'état de la partie."
                    );

                    return;

                }


                if(partieActualisee){

                    partieEnLigneActuelle =
                        partieActualisee;

                }

            }

        }


        /*
         * Si la partie est maintenant en cours,
         * afficher la confrontation.
         */

        if(
            partieEnLigneActuelle &&
            partieEnLigneActuelle.statut ===
            "en_cours"
        ){

            await afficherConfrontation(
                partieEnLigneActuelle
            );

        }

        else{

            afficherSalleAttentePartie();


            await mettreAJourSalleAttente(
                partieEnLigneActuelle
            );


            afficherMessage(
                "✅ Vous avez rejoint la partie."
            );


            surveillerArriveeJoueurs(
                partieEnLigneActuelle.id
            );

        }

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
   CHARGER UNE PARTIE COMPLÈTE
========================================== */

/* ==========================================
   CHARGER UNE PARTIE COMPLÈTE
========================================== */

async function chargerPartieEtAfficher(
    partieId
){

    const {
        data,
        error
    } =
        await supabaseClient
            .from("parties_en_ligne")
            .select("*")
            .eq(
                "id",
                partieId
            )
            .single();


    if(error){

        console.error(
            "Erreur lors du chargement de la partie :",
            error
        );


        afficherMessage(
            "Impossible de charger la partie."
        );


        return;

    }


    partieEnLigneActuelle =
        data;


    if(
        data.statut ===
        "attente"
    ){

        afficherSalleAttentePartie();


        await mettreAJourSalleAttente(
            data
        );


        surveillerArriveeJoueurs(
            data.id
        );


        return;

    }


    if(
        data.statut ===
        "en_cours"
    ){

        await afficherConfrontation(
            data
        );


        return;

    }


    if(
        data.statut ===
        "terminee"
    ){

        await afficherResultatPartie(
            data
        );


        return;

    }

}


/* ==========================================
   SURVEILLER L'ARRIVÉE DES JOUEURS
========================================== */

/* ==========================================
   SURVEILLER L'ARRIVÉE DES JOUEURS
========================================== */

function surveillerArriveeJoueurs(
    partieId = null
){

    /*
     * Si aucun ID n'est fourni, on récupère
     * celui de la partie actuellement ouverte.
     */

    const idPartie =
        partieId ||
        partieEnLigneActuelle?.id;


    if(!idPartie){

        console.error(
            "❌ Impossible de surveiller la partie : ID de partie absent."
        );

        return;

    }


    if(surveillancePartie){

        clearInterval(
            surveillancePartie
        );

    }


    console.log(
        "👀 Surveillance de la partie :",
        idPartie
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
                                idPartie
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
                            "⚠️ Partie introuvable pendant la surveillance."
                        );

                        return;

                    }


                    partieEnLigneActuelle =
                        partie;


                    const nombreJoueurs =
                        obtenirNombreJoueurs(
                            partie
                        );


                    const joueursPresents =
                        obtenirJoueursPartie(
                            partie
                        );


                    /*
                     * Tant que la partie attend encore
                     * des joueurs, on actualise la salle.
                     */

                    if(
                        partie.statut ===
                        "attente"
                    ){

                        await mettreAJourSalleAttente(
                            partie
                        );

                        return;

                    }


                    /*
                     * Lorsque la partie passe à "en_cours",
                     * chaque joueur présent sur son propre écran
                     * arrive ici et affiche la confrontation.
                     */

                    if(
                        partie.statut ===
                        "en_cours"
                    ){

                        /*
                         * Sécurité :
                         * on ne lance le jeu que lorsque
                         * tous les joueurs prévus sont présents.
                         */

                        if(
                            joueursPresents.length <
                            nombreJoueurs
                        ){

                            return;

                        }


                        clearInterval(
                            surveillancePartie
                        );

                        surveillancePartie =
                            null;


                        console.log(
                            "✅ Partie démarrée pour tous les joueurs :",
                            partie
                        );


                        afficherMessage(
                            "⚔️ La confrontation commence !"
                        );


                        await afficherConfrontation(
                            partie
                        );


                        return;

                    }


                    /*
                     * Partie terminée.
                     */

                    if(
                        partie.statut ===
                        "terminee"
                    ){

                        clearInterval(
                            surveillancePartie
                        );

                        surveillancePartie =
                            null;


                        afficherResultatPartie(
                            partie
                        );

                    }

                }

                catch(erreur){

                    console.error(
                        "❌ Erreur inattendue surveillance partie :",
                        erreur
                    );

                }

            },
            1000
        );

}


/* ==========================================
   AFFICHER LA CONFRONTATION
========================================== */

async function afficherConfrontation(
    partie
){

    if(!partie){

        console.error(
            "❌ Partie en ligne absente."
        );

        return;

    }


    const nombreJoueurs =
        obtenirNombreJoueurs(
            partie
        );


    const joueursPresents =
        obtenirJoueursPartie(
            partie
        );


    if(
        partie.statut !==
        "en_cours" ||
        joueursPresents.length <
        nombreJoueurs
    ){

        await mettreAJourSalleAttente(
            partie
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


    const pseudos =
        await obtenirPseudosPartie(
            partie
        );


    /*
     * Afficher les cartes correspondant
     * au nombre réel de joueurs.
     */

    for(
        let numero = 1;
        numero <= 4;
        numero++
    ){

        const carte =
            document.getElementById(
                `joueurConfrontation${numero}`
            );


        const pseudo =
            document.getElementById(
                `pseudoJoueur${numero}`
            );


        const score =
            document.getElementById(
                `scoreJoueur${numero}`
            );


        if(carte){

            carte.style.display =
                numero <= nombreJoueurs
                    ? "flex"
                    : "none";

        }


        if(
            numero <=
            nombreJoueurs
        ){

            if(pseudo){

                pseudo.textContent =
                    pseudos[
                        `joueur${numero}`
                    ] ||
                    `Joueur ${numero}`;

            }


            if(score){

                score.textContent =
                    Number(
                        partie[
                            `score_joueur${numero}`
                        ] ?? 0
                    );

            }

        }

    }


    /*
     * Le VS est conservé uniquement en 1v1.
     */

    const separateur =
        confrontation.querySelector(
            ".vs"
        );


    if(separateur){

        separateur.style.display =
            nombreJoueurs === 2
                ? "block"
                : "none";

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


    const nombreJoueurs =
        obtenirNombreJoueurs(
            partie
        );


    for(
        let numero = 1;
        numero <= 4;
        numero++
    ){

        const element =
            document.getElementById(
                `scoreJoueur${numero}`
            );


        if(element){

            element.textContent =
                numero <= nombreJoueurs
                    ? Number(
                        partie[
                            `score_joueur${numero}`
                        ] ?? 0
                    )
                    : "";

        }

    }

}


/* ==========================================
   AFFICHER QUESTION + CHRONO
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


            bouton.type =
                "button";


            bouton.textContent =
                reponse;


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


    const colonneReponse =
        obtenirColonneReponse(
            partie
        );


    const maReponse =
        colonneReponse
            ? partie[
                colonneReponse
            ]
            : null;


    const statut =
        document.getElementById(
            "statutReponseEnLigne"
        );


    if(statut){

        if(
            maReponse !== null &&
            maReponse !== undefined
        ){

            statut.textContent =
                "✅ Réponse enregistrée. En attente des autres joueurs...";

        }

        else{

            statut.textContent =
                "";

        }

    }


    if(
        maReponse !== null &&
        maReponse !== undefined
    ){

        document
            .querySelectorAll(
                "#reponsesEnLigne .bouton-reponse"
            )
            .forEach(
                bouton => {

                    bouton.disabled =
                        true;

                }
            );

    }


    /*
     * Le chrono est commun à tous les joueurs.
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


    const colonneReponse =
        obtenirColonneReponse(
            partie
        );


    if(!colonneReponse){

        console.error(
            "❌ Joueur non reconnu dans cette partie."
        );

        return;

    }


    if(
        partie[
            colonneReponse
        ] !== null &&
        partie[
            colonneReponse
        ] !== undefined
    ){

        return;

    }


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
            .eq(
                "id",
                partie.id
            )
            .eq(
                "question_actuelle",
                Number(
                    partie.question_actuelle ?? 0
                )
            )
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
            "⚠️ La réponse existait déjà ou la question a changé."
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
            "✅ Réponse enregistrée. En attente des autres joueurs...";

    }


    console.log(
        "✅ Réponse enregistrée :",
        indexReponse,
        colonneReponse
    );

}


/* ==========================================
   DÉMARRER LE CHRONO
========================================== */

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


    /*
     * Nouvelle question :
     * on efface immédiatement l'ancien message.
     */

    afficherMessage("");


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


            /*
             * Afficher le message uniquement
             * pendant la transition de fin de question.
             */

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


    if(partie.fin_question){

        demarrerChronoEnLigne(
            partie
        );

        return;

    }


    const nombreJoueurs =
        obtenirNombreJoueurs(
            partie
        );


    const joueursPresents =
        obtenirJoueursPartie(
            partie
        );


    if(
        partie.statut !==
        "en_cours" ||
        joueursPresents.length <
        nombreJoueurs
    ){

        return;

    }


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
            .eq(
                "id",
                partie.id
            )
            .eq(
                "statut",
                "en_cours"
            )
            .eq(
                "question_actuelle",
                Number(
                    partie.question_actuelle ?? 0
                )
            )
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
     * Un autre joueur a probablement
     * initialisé le chrono.
     */

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
        obtenirColonneReponse(
            partie
        );


    if(!colonneReponse){

        console.error(
            "❌ Le joueur actuel ne participe pas à cette partie."
        );

        return;

    }


    if(
        partie[
            colonneReponse
        ] !== null &&
        partie[
            colonneReponse
        ] !== undefined
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
            .eq(
                "id",
                partie.id
            )
            .eq(
                "question_actuelle",
                Number(
                    partie.question_actuelle ?? 0
                )
            )
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
                                "id, code, joueur1_id, joueur2_id, joueur3_id, joueur4_id, nombre_joueurs, questions, question_actuelle, reponse_joueur1, reponse_joueur2, reponse_joueur3, reponse_joueur4, traitement_question, score_joueur1, score_joueur2, score_joueur3, score_joueur4, statut, fin_question, gagnant_id"
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


                    mettreAJourScoresEnLigne(
                        partie
                    );


                    /* ==========================================
                       PARTIE DÉJÀ TERMINÉE
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
                       VÉRIFIER SI LE CHRONO EST EXPIRÉ
                    ========================================== */

                    let partieActuelle =
                        partie;


                    if(partie.fin_question){

                        const fin =
                            new Date(
                                partie.fin_question
                            ).getTime();


                        if(
                            Number.isFinite(fin) &&
                            Date.now() >= fin
                        ){

                            console.log(
                                "⏰ Chrono terminé. Vérification des réponses..."
                            );


                            const misesAJour =
                                {};


                            const nombreJoueurs =
                                obtenirNombreJoueurs(
                                    partie
                                );


                            /*
                             * Toutes les réponses manquantes
                             * deviennent -1.
                             */

                            for(
                                let numero = 1;
                                numero <= nombreJoueurs;
                                numero++
                            ){

                                const colonne =
                                    `reponse_joueur${numero}`;


                                if(
                                    partie[colonne] === null ||
                                    partie[colonne] === undefined
                                ){

                                    misesAJour[colonne] =
                                        -1;
                                }
                            }


                            /*
                             * Il reste au moins une réponse
                             * à enregistrer.
                             */

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
                                        .eq(
                                            "question_actuelle",
                                            nouvelIndex
                                        )
                                        .select("*")
                                        .maybeSingle();


                                if(erreurTemps){

                                    console.error(
                                        "❌ Erreur enregistrement des réponses après expiration :",
                                        erreurTemps
                                    );

                                    return;
                                }


                                if(partieApresTemps){

                                    partieActuelle =
                                        partieApresTemps;

                                    partieEnLigneActuelle =
                                        partieApresTemps;
                                }
                            }
                        }
                    }


                    /* ==========================================
                       VÉRIFIER À NOUVEAU TOUTES LES RÉPONSES
                    ========================================== */

                    const nombreJoueurs =
                        obtenirNombreJoueurs(
                            partieActuelle
                        );


                    let toutesLesReponses =
                        true;


                    for(
                        let numero = 1;
                        numero <= nombreJoueurs;
                        numero++
                    ){

                        const colonne =
                            `reponse_joueur${numero}`;


                        if(
                            partieActuelle[colonne] === null ||
                            partieActuelle[colonne] === undefined
                        ){

                            toutesLesReponses =
                                false;

                            break;
                        }
                    }


                    /*
                     * Au moins un joueur n'a pas encore
                     * répondu et son chrono n'est pas
                     * encore arrivé à zéro.
                     */

                    if(!toutesLesReponses){
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
                            .eq(
                                "question_actuelle",
                                Number(
                                    partieActuelle.question_actuelle ?? 0
                                )
                            )
                            .select("*")
                            .maybeSingle();


                    if(erreurVerrou){

                        console.error(
                            "❌ Erreur verrouillage de la question :",
                            erreurVerrou
                        );

                        return;
                    }


                    /*
                     * Un autre joueur a obtenu le verrou.
                     */

                    if(!verrou){
                        return;
                    }


                    console.log(
                        "🔒 Question verrouillée. Traitement..."
                    );


                    arreterChronoEnLigne();


                    /* ==========================================
                       TRAITER LA QUESTION
                    ========================================== */

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
        partie.questions?.[
            indexQuestion
        ];


    if(!question){

        console.error(
            "❌ Question introuvable :",
            indexQuestion
        );

        return;

    }


    const nombreJoueurs =
        obtenirNombreJoueurs(
            partie
        );


    const misesAJour =
        {};


    /* ==========================================
       CALCULER LES SCORES
    ========================================== */

    for(
        let numero = 1;
        numero <= nombreJoueurs;
        numero++
    ){

        const colonneReponse =
            `reponse_joueur${numero}`;


        const colonneScore =
            obtenirColonneScore(
                numero
            );


        const reponse =
            Number(
                partie[
                    colonneReponse
                ]
            );


        const ancienScore =
            Number(
                partie[
                    colonneScore
                ] ?? 0
            );


        const bonneReponse =
            Number(
                question.bonne
            );


        const estCorrect =
            reponse ===
            bonneReponse;


        misesAJour[
            colonneScore
        ] =
            ancienScore +
            (
                estCorrect
                    ? 1
                    : 0
            );

    }


    const prochaineQuestion =
        indexQuestion + 1;


    const partieTerminee =
        prochaineQuestion >=
        partie.questions.length;


    const finQuestion =
        partieTerminee
            ? null
            : new Date(
                Date.now() +
                DUREE_QUESTION * 1000
            ).toISOString();


    /*
     * Réinitialiser les réponses
     * des joueurs actifs.
     */

    for(
        let numero = 1;
        numero <= nombreJoueurs;
        numero++
    ){

        misesAJour[
            `reponse_joueur${numero}`
        ] =
            null;

    }


    misesAJour.question_actuelle =
        prochaineQuestion;


    misesAJour.fin_question =
        finQuestion;


    misesAJour.traitement_question =
        false;


    misesAJour.statut =
        partieTerminee
            ? "terminee"
            : "en_cours";


    /* ==========================================
       DÉTERMINER LE GAGNANT
    ========================================== */

    if(partieTerminee){

        const joueurs =
            [];


        for(
            let numero = 1;
            numero <= nombreJoueurs;
            numero++
        ){

            joueurs.push({

                numero:
                    numero,

                id:
                    partie[
                        `joueur${numero}_id`
                    ],

                score:
                    misesAJour[
                        `score_joueur${numero}`
                    ]

            });

        }


        const scoreMax =
            Math.max(
                ...joueurs.map(
                    element =>
                        element.score
                )
            );


        const gagnants =
            joueurs.filter(
                element =>
                    element.score ===
                    scoreMax
            );


        misesAJour.gagnant_id =
            gagnants.length === 1
                ? gagnants[0].id
                : null;

    }


    /* ==========================================
       MISE À JOUR SUPABASE
    ========================================== */

    const {
        data: partieMiseAJour,
        error
    } =
        await supabaseClient
            .from("parties_en_ligne")
            .update(
                misesAJour
            )
            .eq(
                "id",
                partie.id
            )
            .eq(
                "traitement_question",
                true
            )
            .eq(
                "question_actuelle",
                indexQuestion
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


    for(
        let numero = 1;
        numero <= nombreJoueurs;
        numero++
    ){

        console.log(
            `📊 Score joueur ${numero} :`,
            partieMiseAJour[
                `score_joueur${numero}`
            ]
        );

    }


    partieEnLigneActuelle =
        partieMiseAJour;


    if(partieTerminee){

        afficherResultatPartie(
            partieMiseAJour
        );

        return;

    }


    afficherQuestionEnLigne(
        partieMiseAJour
    );

}


/* ==========================================
   SÉCURISER UN TEXTE
========================================== */

function securiserTexte(
    texte
){

    return String(
        texte
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

}


/* ==========================================
   AFFICHER LE RÉSULTAT FINAL
========================================== */

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


    /* ==========================================
       RÉCUPÉRER LE JOUEUR ACTUEL
    ========================================== */

    const numeroJoueur =
        obtenirNumeroJoueur(
            partie
        );


    /*
     * Si le joueur actuel ne fait pas partie
     * de cette partie, on n'attribue rien.
     */

    if(
        numeroJoueur &&
        joueur &&
        joueur.id
    ){

        const colonneScore =
            `score_joueur${numeroJoueur}`;


        const colonnePointsAttribues =
            `points_attribues_joueur${numeroJoueur}`;


        const scoreFinal =
            Number(
                partie[
                    colonneScore
                ] ?? 0
            );


        /*
         * Vérifier si les points de cette partie
         * ont déjà été attribués à ce joueur.
         */

        const {
            data: attribution,
            error: erreurAttribution
        } =
            await supabaseClient
                .from("parties_en_ligne")
                .update({
                    [colonnePointsAttribues]:
                        true
                })
                .eq(
                    "id",
                    partie.id
                )
                .eq(
                    colonnePointsAttribues,
                    false
                )
                .select("*")
                .maybeSingle();


        if(erreurAttribution){

            console.error(
                "❌ Erreur lors de la vérification des points :",
                erreurAttribution
            );

        }

        else if(attribution){

            /*
             * Une seule attribution :
             *
             * 1 bonne réponse = 1 point dans la partie
             * puis score final × 2 = points du profil.
             */

            const pointsGagnes =
                scoreFinal * 2;


            const joueurLocal =
                chargerJoueur();


            joueurLocal.points =
                Number(
                    joueurLocal.points ?? 0
                ) +
                pointsGagnes;


            joueurLocal.partiesJouees =
                Number(
                    joueurLocal.partiesJouees ?? 0
                ) +
                1;


            /*
             * Sauvegarde locale.
             */

            sauvegarderJoueur(
                joueurLocal
            );


            /*
             * Mise à jour du profil Supabase.
             */

            const miseAJourReussie =
                await mettreAJourJoueurSupabase(
                    joueurLocal
                );


            if(!miseAJourReussie){

                /*
                 * Si la mise à jour du profil échoue,
                 * on remet le marqueur à false afin
                 * de pouvoir réessayer plus tard.
                 */

                await supabaseClient
                    .from("parties_en_ligne")
                    .update({
                        [colonnePointsAttribues]:
                            false
                    })
                    .eq(
                        "id",
                        partie.id
                    )
                    .eq(
                        colonnePointsAttribues,
                        true
                    );


                console.error(
                    "❌ Les points de la partie n'ont pas pu être ajoutés au profil."
                );

            }

            else{

                console.log(
                    `🏆 Partie en ligne terminée : ${scoreFinal} bonne(s) réponse(s) → +${pointsGagnes} points.`
                );

            }

        }

        else{

            console.log(
                "ℹ️ Les points de cette partie ont déjà été attribués à ce joueur."
            );

        }

    }


    /* ==========================================
       AFFICHAGE DU RÉSULTAT
    ========================================== */

    const confrontation =
        document.getElementById(
            "confrontation"
        );


    const resultat =
        document.getElementById(
            "resultatPartie"
        );


    const resultatFinal =
        document.getElementById(
            "resultatFinal"
        );


    if(confrontation){

        confrontation.style.display =
            "none";

    }


    if(salleAttente){

        salleAttente.style.display =
            "none";

    }


    if(resultat){

        resultat.style.display =
            "block";

    }


    if(!resultatFinal){

        return;

    }


    const nombreJoueurs =
        obtenirNombreJoueurs(
            partie
        );


    const pseudos =
        await obtenirPseudosPartie(
            partie
        );


    const joueurs =
        [];


    for(
        let numero = 1;
        numero <= nombreJoueurs;
        numero++
    ){

        const id =
            partie[
                `joueur${numero}_id`
            ];


        if(
            id === null ||
            id === undefined
        ){

            continue;

        }


        joueurs.push({

            numero:
                numero,

            id:
                id,

            pseudo:
                pseudos[
                    `joueur${numero}`
                ] ||
                `Joueur ${numero}`,

            score:
                Number(
                    partie[
                        `score_joueur${numero}`
                    ] ?? 0
                )

        });

    }


    if(joueurs.length === 0){

        resultatFinal.innerHTML =
            "<p>Résultat indisponible.</p>";

        return;

    }


    const scoreMax =
        Math.max(
            ...joueurs.map(
                joueurPartie =>
                    joueurPartie.score
            )
        );


    const gagnants =
        joueurs.filter(
            joueurPartie =>
                joueurPartie.score ===
                scoreMax
        );


    let html =
        "";


    if(
        gagnants.length === 1
    ){

        html +=
            `<p>🏆 ${
                securiserTexte(
                    gagnants[0].pseudo
                )
            } gagne !</p>`;

    }

    else{

        html +=
            "<p>🤝 Égalité !</p>";

    }


    joueurs.forEach(
        joueurPartie => {

            html +=
                `
                <p>
                    ${
                        securiserTexte(
                            joueurPartie.pseudo
                        )
                    }
                    : ${joueurPartie.score}
                </p>
                `;

        }
    );


    resultatFinal.innerHTML =
        html;

}


/* ==========================================
   BOUTONS
========================================== */

document
    .getElementById(
        "btnCreerPartie"
    )
    ?.addEventListener(
        "click",
        afficherCreationPartie
    );


document
    .getElementById(
        "confirmerCreationPartie"
    )
    ?.addEventListener(
        "click",
        creerPartieEnLigne
    );


document
    .getElementById(
        "annulerCreationPartie"
    )
    ?.addEventListener(
        "click",
        afficherMenuPartie
    );


document
    .getElementById(
        "btnRejoindrePartie"
    )
    ?.addEventListener(
        "click",
        afficherRejoindrePartie
    );


document
    .getElementById(
        "confirmerRejoindrePartie"
    )
    ?.addEventListener(
        "click",
        rejoindrePartieEnLigne
    );


document
    .getElementById(
        "annulerRejoindrePartie"
    )
    ?.addEventListener(
        "click",
        afficherMenuPartie
    );


document
    .getElementById(
        "annulerPartie"
    )
    ?.addEventListener(
        "click",
        annulerPartieEnLigne
    );


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


            partieEnLigneActuelle =
                null;


            const resultat =
                document.getElementById(
                    "resultatPartie"
                );


            const confrontation =
                document.getElementById(
                    "confrontation"
                );


            if(resultat){

                resultat.style.display =
                    "none";

            }


            if(confrontation){

                confrontation.style.display =
                    "none";

            }


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


/* ==========================================
   INITIALISATION
========================================== */

afficherProfilEnLigne();