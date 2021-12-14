//works
fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=olX4mfNrZLcj25iUhR6MLzbXLVgWb3pmclsLzmnR`)
    .then(response => response.json())
    .then(data => {
        console.log("American government");
        console.log(data);
    })

//works
fetch(`https://api.edamam.com/api/nutrition-data?app_id=051cc148&app_key=defd1ae7cc31d2fb6c0b27cd1049f071&nutrition-type=logging&ingr=apple`)
    .then(response => response.json())
    .then(data => {
        console.log("Edamam");
        console.log(data);
    })

//works
fetch(`https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=c7c3a49a&appKey=332d453b5215349d758b52b534489921`)
    .then(response => response.json())
    .then(data => {
        console.log("Nutritionix");
        console.log(data);
    })

    function component() {
        const element = document.createElement('div');
      
        // Lodash, now imported by this script
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      
        return element;
      }
      
      document.body.appendChild(component());