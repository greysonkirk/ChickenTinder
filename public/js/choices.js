getRest()
let lat
let lng
function getRest () {
  $.ajax({
    url: `https://developers.zomato.com/api/v2.1/search?count=20&lat=${lat}&lon=%20${lng}`,
    headers: {
      'user-key': '31549f18a4409b92a3243bf922d7853a',
      Accept: 'application/json'
    }
  }).then((restaurants) => {
    const restName = restaurants.restaurants[0].restaurant.name
    let restThumb = restaurants.restaurants[0].restaurant.thumb
    if (restThumb.length < 1) {
      restThumb = 'https://via.placeholder.com/250x250'
    }
    console.log(restName)
  })
}
