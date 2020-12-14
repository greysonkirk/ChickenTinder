getRest()

const choices = []
function getRest () {
  const lat = 30.326374
  const lng = -97.771258
  $.ajax({
    url: `https://developers.zomato.com/api/v2.1/search?count=10&lat=${lat}&lon=%20${lng}`,
    headers: {
      'user-key': '31549f18a4409b92a3243bf922d7853a',
      Accept: 'application/json'
    }
  }).then((restaurants) => {
    for (let i = 0; i < restaurants.restaurants.length; i++) {
      const restName = restaurants.restaurants[i].restaurant.name
      let restThumb = restaurants.restaurants[i].restaurant.thumb
      const restAddress = restaurants.restaurants[i].restaurant.location.address
      const restHours = restaurants.restaurants[i].restaurant.timings
      const restRating = restaurants.restaurants[i].restaurant.user_rating.rating_text
      const restPhone = restaurants.restaurants[i].restaurant.phone_numbers
      const ratingColor =
                restaurants.restaurants[i].restaurant.user_rating.rating_color
      const restMenu = restaurants.restaurants[i].restaurant.menu_url
      const restCuisines = restaurants.restaurants[0].restaurant.cuisines
      if (restThumb.length < 1) {
        restThumb = 'https://via.placeholder.com/250x250'
      }
      choices.push({
        restName,
        restThumb,
        restAddress,
        restHours,
        restRating,
        restPhone,
        restMenu,
        ratingColor,
        restCuisines
      })
    }
    console.log(choices)
  })
}
