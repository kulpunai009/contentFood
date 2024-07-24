let urlParams = new URLSearchParams(window.location.search)

let mealId = urlParams.get("id")

let API = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
let IMAGE_API = "https://www.themealdb.com/images/ingredients/"
async function getMeals() {
    try {
        const res = await fetch(API)
        const data = await res.json()

        console.log(data);

        showMeal(data.meals[0])
    } catch (error) {
        console.log(error);
    }
}

getMeals()

let result = document.querySelector(".strawberry")

function showMeal(data) {
    let showUrl = ""

    for (let i = 0; i < 20; i++) {
        const findUrl = data["strIngredient" + i]
        if (findUrl) {
            showUrl += `
             <div class="product">
                <img src="${IMAGE_API + findUrl}.png" alt="">
                <p>${findUrl}</p>
            </div>
            `
        }
    }





    result.innerHTML = `
            <div class="about-image">
                    <div>
                        <img src="" alt="">

                    </div>
                    <img class="klubnika" src="${data.strMealThumb}"  alt="">
                    <button>FRUITY</button>
                    <div class="strelka">
                        <img src="	https://www.themealdb.com/images/icons/Arrow-Left.png" alt="">
                        <img src="	https://www.themealdb.com/images/icons/Arrow-Right.png" alt="">
                    </div>
                </div>


                <div class="products">
                ${showUrl}
                </div>
                </div>
    `
}


