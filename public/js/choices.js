getRest()

function getRest () {
  // const lat = 30.326374
  // const lng = -97.771258
  $.ajax({
    url: '/api/zomato/30.326374/-97.771258'
  }).then((restaurants) => {
    const choices = []
    console.log(restaurants)
    for (let i = 0; i < restaurants.restaurants.length; i++) {
      const restId = restaurants.restaurants[i].restaurant.id
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
        restId,
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
    buildSwipe(choices)
  })
}

function buildSwipe (choices) {
  for (let i = 0; i < choices.length; i++) {
    let active = ''
    if (i === 0) { active = 'active' }
    console.log(i)
    const swipe = `<div class="carousel-item ${active}" data-bs-touch="true" value="${choices[i].restId}">
      <img src='${choices[i].restThumb}' class="d-block w-100">
      <div class="restName"><span>${choices[i].restName}</span></div>
      <p>${choices[i].restCuisines} <span class="rounded" style="background-color:#${choices[i].ratingColor}; padding-left: 3px;padding-right: 3px;"; font-size: 20px;"> ${choices[i].restRating}</span></p>
      <p>${choices[i].restAddress}</p>
      <p>${choices[i].restHours}</p>
      <p><a id="icon" href="tel:${choices[i].restPhone}">${choices[i].restPhone}<a/></p>
      <p><a href="${choices[i].restMenu}" target="_blank">Menu</a></p>
  </div>`
    $(swipe).appendTo('.carousel-inner')
  }
}
