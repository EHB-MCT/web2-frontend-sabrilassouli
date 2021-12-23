let listOfMeals = [];
let listOfNames = [];
async function getData() {
    //get the list

    const response = await fetch(`https://projectweb2sabrilassouli.herokuapp.com/meals`)
    const data = await response.json();
    console.log(data)

    data.forEach(meal => {

        listOfMeals.push(meal)
        console.log(meal);
        console.log(`
        _id:${meal._id},
        ingredientName: ${meal.ingredientName},
        Calcium: ${meal.Calcium},
        Carbohydrate: ${meal.Carbohydrate},
        Cholesterol: ${meal.Cholesterol},
        Energy: ${meal.Energy},
        FattyAcidsTotalMononsaturated: ${meal.FattyAcidsTotalMononsaturated},
        FattyAcidsTotalPolyunsaturated: ${meal.FattyAcidsTotalPolyunsaturated},
        FattyAcidsTotalSaturated: ${meal.FattyAcidsTotalSaturated},
        totalLipid: ${meal.totalLipid},
        Iron: ${meal.Iron},
        FiberTotal: ${meal.FiberTotal},
        FolicAcid: ${meal.FolicAcid},
        FolateDFE: ${meal.FolateDFE},
        FolateFood: ${meal.FolateFood},
        Potassium: ${meal.Potassium},
        Magnesium: ${meal.Magnesium},
        Sodium: ${meal.Sodium},
        Niacin: ${meal.Niacin},
        Phosphorus: ${meal.Phosphorus},
        Protein: ${meal.Protein},
        Riboflavin: ${meal.Riboflavin},
        SugarsTotal: ${meal.SugarsTotal},
        Thiamin: ${meal.Thiamin},
        VitaminE: ${meal.VitaminE},
        VitaminA: ${meal.VitaminA},
        VitaminB6: ${meal.VitaminB6},
        VitaminB12: ${meal.VitaminB12},
        VitaminC: ${meal.VitaminC},
        VitaminD: ${meal.VitaminD},
        VitaminK: ${meal.VitaminK},
        Water: ${meal.Water},
        Zink: ${meal.Zink},
        ingredientName: ${meal.ingredientName},
        amount: ${meal.amount}
        `)
    },
    names => {
        listOfNames.push(names)        
        console.log(meal);
        console.log(`
        _id:${meal._id},
        ingredientName: ${meal.ingredientName}`)
    })
    buildList()
}
getData()
