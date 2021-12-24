let dailyTotal = [];
let listOfNames = [];
let userData = [];
let currentMeal = [];

window.onload = function () {
    getDailyTotal();
    getDailyMeals();
    getUserInfo();
    popUp();

}

async function getDailyTotal() {
    //get the list

    const response = await fetch(`https://projectweb2sabrilassouli.herokuapp.com/dailyTotal`)
    const data = await response.json();
    //console.log(data)

    data.forEach(total => {

        dailyTotal.push(total)
        console.log(total);
        console.log(`
        _id:${total._id},
        ingredientName: ${total.ingredientName},
        Calcium: ${total.Calcium},
        Carbohydrate: ${total.Carbohydrate},
        Cholesterol: ${total.Cholesterol},
        Energy: ${total.Energy},
        FattyAcidsTotalMononsaturated: ${total.FattyAcidsTotalMononsaturated},
        FattyAcidsTotalPolyunsaturated: ${total.FattyAcidsTotalPolyunsaturated},
        FattyAcidsTotalSaturated: ${total.FattyAcidsTotalSaturated},
        totalLipid: ${total.totalLipid},
        Iron: ${total.Iron},
        FiberTotal: ${total.FiberTotal},
        FolicAcid: ${total.FolicAcid},
        FolateDFE: ${total.FolateDFE},
        FolateFood: ${total.FolateFood},
        Potassium: ${total.Potassium},
        Magnesium: ${total.Magnesium},
        Sodium: ${total.Sodium},
        Niacin: ${total.Niacin},
        Phosphorus: ${total.Phosphorus},
        Protein: ${total.Protein},
        Riboflavin: ${total.Riboflavin},
        SugarsTotal: ${total.SugarsTotal},
        Thiamin: ${total.Thiamin},
        VitaminE: ${total.VitaminE},
        VitaminA: ${total.VitaminA},
        VitaminB6: ${total.VitaminB6},
        VitaminB12: ${total.VitaminB12},
        VitaminC: ${total.VitaminC},
        VitaminD: ${total.VitaminD},
        VitaminK: ${total.VitaminK},
        Water: ${total.Water},
        Zink: ${total.Zink}
        `)
    })
    buildNutritionList()
}
async function getDailyMeals() {
    //get the list

    const response = await fetch(`https://projectweb2sabrilassouli.herokuapp.com/meals`)
    const data = await response.json();
    console.log(data)

    data.forEach(names => {

        listOfNames.push(names)
        console.log(names);
        console.log(`
        _id:${names._id},
        ingredientName: ${names.ingredientName},
        amount: ${names.amount}
        `)
    })
    buildNameList()
    buildAmountList()
}
async function getUserInfo() {
    //get the list

    const response = await fetch(`https://projectweb2sabrilassouli.herokuapp.com/User-data`)
    const data = await response.json();
    console.log(data)

    data.forEach(user => {
        userData.push(user)
        console.log(user);
        console.log(`       
        currentWeight: ${user.currentWeight},
        exerciseFrequency: ${user.exerciseFrequency},
        currentHeight: ${user.currentHeight},
        lastUpdate: ${user.lastUpdate},
        startingWeight: ${user.startingWeight},
        weight: ${user.weight},
        _id: ${user._id},
        `)
    })
    //showUserInfo()
}
async function getMealInfo() {
    //get the list
    let food = document.getElementById('userInput').value
    const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=051cc148&app_key=defd1ae7cc31d2fb6c0b27cd1049f071&nutrition-type=logging&ingr=${food}`)
    const data = await response.json();
    console.log("api test")
    console.log(data)
    currentMeal.push(data)

    IngredientData(data)

}

function buildNutritionList() {
    let html = ``;
    dailyTotal.forEach(total => {
        console.log("TEST2", total.Calcium)
        html += ` 
        <h5>Calcium: ${total.Calcium}</h5>
        <H5>Calcium: ${total.Carbohydrate}</H5>
        <H5>Cholesterol: ${total.Cholesterol}</H5>
        <H5>Energy: ${total.Energy}</H5>
        <H5>FattyAcidsTotalMononsaturated: ${total.FattyAcidsTotalMononsaturated}</H5>
        <H5>FattyAcidsTotalPolyunsaturated: ${total.FattyAcidsTotalPolyunsaturated}</H5>
        <H5>FattyAcidsTotalSaturated: ${total.FattyAcidsTotalSaturated}</H5>
        <H5>totalLipid: ${total.totalLipid}</H5>
        <H5>Iron: ${total.Iron}</H5>
        <H5>FiberTotal: ${total.FiberTotal}</H5>
        <H5>FolicAcid: ${total.FolicAcid}</H5>
        <H5>FolateDFE: ${total.FolateDFE}</H5>
        <H5>FolateFood: ${total.FolateFood}</H5>
        <H5>Potassium: ${total.Potassium}</H5>
        <H5>Magnesium: ${total.Magnesium}</H5>
        <H5>Sodium: ${total.Sodium}</H5>
        <H5>Niacin: ${total.Niacin}</H5>
        <H5>Phosphorus: ${total.Phosphorus}</H5>
        <H5>Protein: ${total.Protein}</H5>
        <H5>Riboflavin: ${total.Riboflavin}</H5>
        <H5>SugarsTotal: ${total.SugarsTotal}</H5>
        <H5>Thiamin: ${total.Thiamin}</H5>
        <H5>VitaminE: ${total.VitaminE}</H5>
        <H5>VitaminA: ${total.VitaminA}</H5>
        <H5>VitaminB6: ${total.VitaminB6}</H5>
        <H5>VitaminB12: ${total.VitaminB12}</H5>
        <H5>VitaminC: ${total.VitaminC}</H5>
        <H5>VitaminD: ${total.VitaminD}</H5>
        <H5>VitaminK: ${total.VitaminK}</H5>
        <H5>Water: ${total.Water}</H5>
        <H5>Zink: ${total.Zink}</H5>
        `
    })
    document.getElementById('nutritionList').innerHTML += html;

}

function buildNameList() {
    let html = ``;
    listOfNames.forEach(names => {
        html += ` 
        <H5>ingredient: ${names.ingredientName}</H5>
        `
    })
    document.getElementById('mealList').innerHTML += html;
}

function buildAmountList() {
    let html = ``;
    listOfNames.forEach(names => {
        //console.log("TEST AMOUNT", names.amount)
        html += `
        <H5>weight: ${names.amount}</H5>
        `
    })
    document.getElementById('amountList').innerHTML += html;
}


//Popup window
function popUp() {

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    var btn2 = document.getElementById("myBtn2");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
        getMealInfo()

    }
    btn2.onclick = function () {
        saveMeals()

    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};

function IngredientData(data) {

    let nutritionList = [];
    let html = ``;
    let header = ``;
    let food = document.getElementById('userInput').value
    console.log(header += `<h1>Ingredient: ${food}</h1>`)

    Object.values(data.totalNutrients).forEach(val => {
        nutritionList.push(val)
        console.log(val);
        console.log(`
    label:${val.label},
    quantity: ${val.quantity},
    unit: ${val.unit}
    `)
        html += ` 
        <H5>nutritional value: ${val.label} ${val.quantity} ${val.unit}</H5>
        `
    })
    document.getElementById('popupBody').innerHTML = html;
    document.getElementById('popupHeader').innerHTML = header;

}


// function saveMeals(data) {
//     const url = 'https://projectweb2sabrilassouli.herokuapp.com/meals';
//     // post body data 

//     let food = document.getElementById('userInput').value
//     let amountOfFood = document.getElementById('foodAmount').value

//     console.log("testaroni", currentMeal)
//     const newMeal = {

//         Calcium: currentMeal.totalNutrients.CA.quantity,
//         Carbohydrate: currentMeal.totalNutrients.CHOCDF.Carbohydrate,
//         Cholesterol: currentMeal.totalNutrients.CHOLE.Cholesterol,
//         Energy: currentMeal.totalNutrients.ENERC_KCAL.Energy,
//         FattyAcidsTotalMononsaturated: currentMeal.totalNutrients.FAMS.FattyAcidsTotalMononsaturated,
//         FattyAcidsTotalPolyunsaturated: currentMeal.totalNutrients.FAPU.FattyAcidsTotalPolyunsaturated,
//         FattyAcidsTotalSaturated: currentMeal.totalNutrients.FASAT.FattyAcidsTotalSaturated,
//         totalLipid: currentMeal.totalNutrients.FAT.totalLipid,
//         Iron: currentMeal.totalNutrients.FE.Iron,
//         FiberTotal: currentMeal.totalNutrients.FIBTG.FiberTotal,
//         FolicAcid: currentMeal.totalNutrients.FOLAC.FolicAcid,
//         FolateDFE: currentMeal.totalNutrients.FOLDFE.FolateDFE,
//         FolateFood: currentMeal.totalNutrients.FOLFD.FolateFood,
//         Potassium: currentMeal.totalNutrients.K.Potassium,
//         Magnesium: currentMeal.totalNutrients.MG.Magnesium,
//         Sodium: currentMeal.totalNutrients.NA.Sodium,
//         Niacin: currentMeal.totalNutrients.NIA.Niacin,
//         Phosphorus: currentMeal.totalNutrients.P.Phosphorus,
//         Protein: currentMeal.totalNutrients.PROCNT.Protein,
//         Riboflavin: currentMeal.totalNutrients.RIBF.Riboflavin,
//         SugarsTotal: currentMeal.totalNutrients.SUGAR.SugarsTotal,
//         Thiamin: currentMeal.totalNutrients.THIA.Thiamin,
//         VitaminE: currentMeal.totalNutrients.TOCPHA.VitaminE,
//         VitaminA: currentMeal.totalNutrients.VITA_RAE.VitaminA,
//         VitaminB6: currentMeal.totalNutrients.VITB6A.VitaminB6,
//         VitaminB12: currentMeal.totalNutrients.VITB12.VitaminB12,
//         VitaminC: currentMeal.totalNutrients.VITC.VitaminC,
//         VitaminD: currentMeal.totalNutrients.VITD.VitaminD,
//         VitaminK: currentMeal.totalNutrients.VITK1.VitaminK,
//         Water: currentMeal.totalNutrients.WATER.Water,
//         Zink: currentMeal.totalNutrients.ZN.Zink,
//         ingredientName: food,
//         amount: amountOfFood
//     };
//     console.log("step2 fav:", newMeal)

    
   
// }