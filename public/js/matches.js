getRestMatches()

function getRestMatches () {
  $.ajax({
    url: '/api/matched',
    method: 'GET'
  }).then((restaurants) => {
    const choices = []
    console.log(restaurants)
    for (let i = 0; i < restaurants.length; i++) {
      const { restId, restName, restImg } = restaurants[i]
      console.log(restaurants[i])
      choices.push({
        restId,
        restName,
        restImg

      })
    }
    console.log(choices)
    buildMatches(choices)
  })
}

function buildMatches (choices) {
  for (let i = 0; i < choices.length; i++) {
    let active = ''
    if (i === 0) { active = 'active' }
    console.log()
    const swipe = `<div id="restDisplay" class="carousel-item ${active}" data-bs-touch="true" data-value="${choices[i].restId}">
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
