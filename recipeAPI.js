var requestUrl = 'https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=q&app_id=20d9ad98&app_key=36640ef1bae5b32a15f86654c8a8fbd8%09&ingr=5-8&calories=200-500';
var clickBtn = document.getElementById('click');
var recipeResult = [];
var containerEl = document.getElementById('first');

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    recipeResult = data.hits;
    console.log(recipeResult);
  });

  
 //Function to go through array
 function find() {
  for (let i = 0; i < recipeResult.length; i++) {
  
  // create
  var h1El = document.createElement('h1');
  
  // add
  h1El.textContent = recipeResult[i]

  // append
  containerEl.append(h1El); 
  }
  }

  clickBtn.addEventListener('click', find);