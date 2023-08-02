const apiKey = ""

const recipeListEl = document.getElementById("recipe-list")



function displayRecipes(recipes){
    recipeListEl.innerHTML = ""
    recipes.forEach((recipe) => {
        const recipeItemEl = document.createElement("li")
        recipeItemEl.classList.add("recipe-item")

        const recipeImageEl = document.createElement("img")
        recipeImageEl.src = recipe.image
        recipeImageEl.alt = "recipe image"

        const recipeTitleEl = document.createElement("h2")
        recipeTitleEl.textContent = recipe.title

        const recipeIngeredientsEl = document.createElement("p")
        recipeIngeredientsEl.innerHTML = `<strong>Ingredients:</strong> ${
            recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")
        }`

        const recipeLinkEl = document.createElement("a")
        recipeLinkEl.href = recipe.sourceUrl
        recipeLinkEl.innerText = "view recipe"


        recipeItemEl.appendChild(recipeImageEl)
        recipeItemEl.appendChild(recipeTitleEl)
        recipeItemEl.appendChild(recipeIngeredientsEl)
        recipeItemEl.appendChild(recipeLinkEl)

        recipeListEl.appendChild(recipeItemEl)

    })
}

async function getRecipes(){
    const url = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`
    const response = await fetch(url)

    const data = await response.json()

    return data.recipes
}

async function init(){
    const recipes = await getRecipes()
    // console.log(recipes)
    displayRecipes(recipes)
}

init()


