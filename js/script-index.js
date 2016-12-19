$(document).ready( function(){

function printNews(){
	$(".callout-news p").html("NUEVAS RECETAS");
}
printNews();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	$.each(recipesArray,function(i, parametroRR){
		if (recipesArray.highlighted == true){
			parametroRR += recipesArray[i];
		};
		renderRecipe(parametroRR);
	});
	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	$(".list-recipes").append('<a class="item-recipe" href="#"></a>');
	$(".item-recipe").append('<span class="attribution"></span>');
	$(".attribution").append('<span class="title-recipe"></span>');
	var tituloReceta = recipe.title;
	$(".title-recipe").html(tituloReceta);
	$(".attribution").append('<span class="metadata-recipe"></span>');
	$(".metadata-recipe").append('<span class="author-recipe"></span>');
	var sourceReceta = recipe.source;
	var autorReceta = sourceReceta.name;
	$(".author-recipe").html();
	$(".metadata-recipe").append('<span class="bookmarks-recipe"></span>');
	$(".bookmarks-recipe").append('<span class="icon-bookmark"></span>');
	$(".list-recipes").append('<img src=""/>');
	var imgReceta = sourceReceta.url;
	$(".list-recipes img").attr("src", imgReceta);
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	$.each(activitiesArray, function(y, paramActivities){
		for (y=0; y<activitiesArray.length ; y++){
			renderActivity(activitiesArray[y]);
		}
	})
	if (activitiesArray != 0){
		$(".wrapper-message").hide();
	}
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


