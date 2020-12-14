getRest()

const choices = []

function getRest () {
  // const lat = 30.326374
  // const lng = -97.771258
  $.ajax({
    url: 'https://developers.zomato.com/api/v2.1/search?count=10&lat=30.326374&lon=%20-97.771258',
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
    buildSwipe()
  })
}

function buildSwipe () {
  for (let i = 0; i < choices.length; i++) {
    const swipe = `<div class="swiper-slide"><img class="restImg" src='${choices[i].restThumb}'></img>
        <div class="restName"><span>${choices[i].restName}</span></div>
        <p>${choices[i].restCuisines} <span class="rounded" style="background-color:#${choices[i].ratingColor}; padding-left: 3px;padding-right: 3px;"; font-size: 20px;"> ${choices[i].restRating}</span></p>
        <p>${choices[i].restAddress}</p>
        <p>${choices[i].restHours}</p>
        <p><a id="icon" href="tel:${choices[i].restPhone}">${choices[i].restPhone}<a/></p>
        <p><a href="${choices[i].restMenu}" target="_blank">Menu</a></p>
        <div class="buttons text-center">
            <div id="yum" class="btn btn-success btn-hover">Yummy!</div>
            <div id="#yuck" class="btn btn-danger btn-hover">Yuck!</div>
        </div>
    </div>`
    $(swipe).appendTo('.swiper-wrapper')
  }
}
