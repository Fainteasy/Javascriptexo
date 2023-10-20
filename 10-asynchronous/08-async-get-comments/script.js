/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    (async () => {
        async function getCommentsForArticle(article) {
            try {
                const comments = await window.lib.getComments(article.id);
                article.comments = comments;
                return article;
            } catch (error) {
                console.error("Erreur lors de la récupération des commentaires pour l'article ID", article.id, ":", error);
                article.comments = [];
                return article;
            }
        } 
        async function getPostsAndComments() {
            try {
                const articles = await window.lib.getPosts();
                
                for (const article of articles) {
                    await getCommentsForArticle(article);
                    console.log("Article ID :", article.id);
                    console.log("Titre :", article.title);
                    console.log("Contenu :", article.body);
                    console.log("Commentaires :", article.comments);
                    console.log("-----------------------------");
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des articles :", error);
            }
        }
    
        async function onClickButton() {
            await getPostsAndComments();
        }

        document.getElementById("run").addEventListener("click", onClickButton);
    })();
})();

