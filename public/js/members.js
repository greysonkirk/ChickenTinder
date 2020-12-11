$(document).ready(() => {
    const username = $('#usernameInput')
    const zip = $('#zipInput')
    const partnerID = $('#partnerIdInput')

    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get('/api/user_data').then(data => {
        $('.member-name').text(data.email)
    })

    function updateProfile(post) {
        $.ajax({
                method: 'POST',
                url: '/api/profile',
                data: post
            })
            .then(function() {
                window.location.href = '/index'
            })
    }

    $('#profile').on('submit', function handleFormSubmit(event) {
        event.preventDefault()
            // Wont submit the post if we are missing a body or a title
        if (!username.val().trim() || !zip.val().trim()) {
            return
        }
        // Constructing a newPost object to hand to the database
        const newProfile = {
            username: username.val().trim(),
            zip: zip.val().trim(),
            partnerID: partnerID.val()
        }

        console.log(newProfile)

        // If we're updating a post run updatePost to update a post
        // Otherwise run submitPost to create a whole new post

        updateProfile(newProfile)
    })
})