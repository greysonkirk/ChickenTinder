// Creating our User model
module.exports = function(sequelize, DataTypes) {
    const Location = sequelize.define('Location', {
        // The email cannot be null, and must be a proper email before creation
        Zip: {
            type: DataTypes.INTEGER,

        },
        // The password cannot be null
        City: {
            type: DataTypes.STRING
        },
        State: {
            type: DataTypes.STRING

        },
        Latitude: {
            type: DataTypes.DOUBLE

        },
        Longitude: {
            type: DataTypes.DOUBLE

        }
    })


    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    return Location
}