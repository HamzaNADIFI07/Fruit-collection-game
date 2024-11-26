# TP 3 : Projet 1 - mangez des fruits

## Mise en place du TP

  Cette mise en place est similaire à celle du TP précédent. Le dossier `tp3` contient une structure telle que celle décrite dans ce [document](https://intranet.fil.univ-lille.fr/2020/04/09/nodejs-et-npm/).  
  1. Dans le dossier `tp3/` exécutez
```bash  	  
tp3$  npm install
```  
  2. Exécutez la commande `npm run build` pour créer le dossier `./dist/` et construire un premier *bundle*
  3. Vous pouvez ouvrir le fichier `dist/index.html`, pour vérifier que tout s'est bien déroulé en consultant la console (<kbd>Ctrl Shift K</kbd>) dans laquelle vous devez lire le message `le bundle a été généré`.  

  >  Attention, le résultat <strong>ne se consulte pas</strong> avec le fichier `src/index.html` : vous devez faire vos modifications et votre travail dans le dossier `src/` **mais le résultat du travail est observé dans le dossier `dist/`**.

  4.	Pendant le TP vous devrez compléter ou créer les modules JavaScript demandés.  
    Comme dans le TP précédent, profitez des facilités offertes par Webpack pendant la phase de développement pour construire le bundle et visualiser les résultats "à chaud" en démarrant le serveur de développement :Après chaque modification, il faut générer le <q>nouveau</q> <i>bundle</i>, toujours à l'aide de la commande <code>npm run build</code> et c'est le fichier **`dist`**`/index.html` qu'il faut consulter pour avoir le résultat

```bash
tp3$  npm run dev-server
```

  **C'est la solution que l'on vous conseille d'adopter.**

  5. N'oubliez pas d'exécuter la commande <code>npm run build</code> après l'arrêt du serveur de développement pour mettre à jour le dossier `dist/`.

> NB : le dossier `dist/` ne sera pas mis sur le dépôt car il peut être regénéré à partir des sources.

## Votre travail

Expliquez ici comment exécuter votre projet. Vous pouvez également ajouter toute précision utile sur votre travail.

### Travail réalisé
Tout a été fait dans le projet, et tout fonctionne.

### Compilation et exécution du programme:
Pour produire le bundle, il faudra se mettre dans le dossier principale du tp3, et exécuter la commande suivante:
```
TP-JS-S4-23-24$ cd tp3  
  
tp3$ npm run build
```
Pour exécuter le projet, il faudra se mettre dans le dossier principale du tp3, et exécuter la commande suivante:
```
tp3$ npm run dev-server
```

### Précision du code:
Au début j'avais implémenté mes deux classes Hungry et Greedy en leur mettant une classe mère Actor, mes j'ai eu quelque problème d'héritage c'est pour ça j'ai décidé d'enlever la classe Actorpour éviter les problème et je l'ai rajouter à la fin du projet en la renommant par Monster.
Et pour la classe animate j'ai lui ait rechanger un peu la structure vu que j'avais un problème pour la création du nouveau Hungry après 7 fruits mangé, et en faite le problèmes était à cause de l'incrémentation des points des fruits mangé par les hungry, avant je filtrer les fruits mangés après je met la condition de collision pour incrementer mais dans ce cas c'est trop tard parce que les fruits mangés il sans déjà supprimer donc la condition elle n'est jamais satisfaite et le nombre de points ne s'incrémente jamais c'est pour ça que j'ai mis la condition de collision et après je filtre les fruits mangé, et là normalement tous marche très bien.



