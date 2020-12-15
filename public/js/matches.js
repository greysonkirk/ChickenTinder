getRestMatches()

function getRestMatches() {
    $.ajax({
        url: '/api/matched',
        method: 'GET'
    }).then((restaurants) => {
        const choices = []
        console.log(restaurants)
        for (let i = 0; i < restaurants.length; i++) {
            const { restaurantId, restaurantName, restaurantImg } = restaurants[i]
            console.log(restaurants[i])
            console.log(restaurantName)
            choices.push({
                restaurantId,
                restaurantName,
                restaurantImg

            })
        }
        console.log(choices)
        buildMatches(choices)
    })
}

function buildMatches(choices) {
    for (let i = 0; i < choices.length; i++) {
        let active = ''
        if (i === 0) { active = 'active' }
        console.log()
        const swipe = `<div id="restDisplay" class="carousel-item ${active}" data-bs-touch="true" data-value="${choices[i].restaurantId}">
      <img src='${choices[i].restaurantImg}' class="d-block w-100" style="padding-top:4px;>
      <div class="restName"><span>${choices[i].restaurantName}</span></div>
  </div>`
        $(swipe).appendTo('.carousel-inner')
    }
}