function renderRest () {
  const restCount = Math.floor(Math.random() * 99)
  $.ajax({
    url: `https://developers.zomato.com/api/v2.1/search?start=${restCount}&count=1&lat=${lat}&lon=%20${lng}`,
    headers: {
      'user-key': '31549f18a4409b92a3243bf922d7853a',
      Accept: 'application/json'
    }
  }).then((restaurants) => {
    const restName = restaurants.restaurants[0].restaurant.name
    const restCuisines = restaurants.restaurants[0].restaurant.cuisines
    const restAddress = restaurants.restaurants[0].restaurant.location.address
    const restHours = restaurants.restaurants[0].restaurant.timings
    let restThumb = restaurants.restaurants[0].restaurant.thumb
    const restRating = restaurants.restaurants[0].restaurant.user_rating.rating_text
    const restPhone = restaurants.restaurants[0].restaurant.phone_numbers
    const ratingColor =
            restaurants.restaurants[0].restaurant.user_rating.rating_color
    const restMenu = restaurants.restaurants[0].restaurant.menu_url

    if (restThumb.length < 1) {
      restThumb = 'https://via.placeholder.com/250x250'
    }
  })
}
