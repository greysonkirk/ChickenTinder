#  Chicken Tinder app

 - ### GitHub Link: https://github.com/greysonkirk/ChickenTinder
 - ### Heroku Link: https://fierce-headland-63080.herokuapp.com/


 This app is like Tinder, but for restaurants!
 If your friend or partner has a hard time choosing where they want to eat,
 this app is for you!!!
 You and your friend/partner will swipe through restaurants and submitting ones you like, once there is a matching restaurant, you will be able to see it!
 
 
This app uses a dataset from https://public.opendatasoft.com/ to get zip codes and their respective latitudes and longitudes.


We are using string interpulation to build out the carousels the user swipes through.
 ```javascript
 const swipe = `<div id="restDisplay" class="carousel-item ${active}" data-bs-touch="true" data-value="${choices[i].restId}" data-img="${choices[i].restThumb}" data-name="${choices[i].restName}">
      <img src='${choices[i].restThumb}' class="d-block w-100" >
      <div class="restName" ><span>${choices[i].restName}</span></div>
      <p>${choices[i].restCuisines} <span class="rounded" style="background-color:#${choices[i].ratingColor}; padding-left: 3px;padding-right: 3px;"; font-size: 20px;"> ${choices[i].restRating}</span></p>
      <p>${choices[i].restAddress}</p>
      <p>${choices[i].restHours}</p>
      <p><a id="icon" href="tel:${choices[i].restPhone}">${choices[i].restPhone}<a/></p>
      <p><a href="${choices[i].restMenu}" target="_blank">Menu</a></p>
  </div>`
```

The data in this app is stored in a MySql database and is manipulated using JavaScript and Sequelize. 
For example the code below shows adding a user to the DB using the post method. 

```javascript
app.post('/api/signup', (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, '/api/login')
      })
      .catch(err => {
        res.status(401).json(err)
      })
  })
```




![](public/assets/css/CTss1.PNG)
![](public/assets/css/ss2.PNG)