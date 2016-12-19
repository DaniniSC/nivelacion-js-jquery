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
	/*$(recipesArray).each(function(){
		var parametroRenderRecipe = "";
		for (i=0; i<recipesArray.length; i++){
			if (attr("highlighted")){
				parametroRenderRecipe += recipesArray[i];
			}
		}
		renderRecipe(parametroRenderRecipe);
	});*/
	$.each(recipesArray,function(i, parametroRR){
		if (recipesArray.hasOwnProperty("highlighted"){
			parametroRR += recipesArray[i];
		});
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
	$(".list-recipes").append('<span class="attribution"></span>');
	$(".attribution").append('<span class="title-recipe"></span>');
	$(".title-recipe").html();
	$(".title-recipe").attr('title');
	$(".attribution").append('<span class="metadata-recipe"></span>');
	$(".metadata-recipe").append('<span class="author-recipe"></span>');
	$(".author-recipe").html();
	$(".author-recipe").attr();
	$(".metadata-recipe").append('<span class="bookmarks-recipe"></span>');
	$(".bookmarks-recipe").append('<span class="icon-bookmark"></span>');
	$(".list-recipes").append('<img src=""/>');
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


