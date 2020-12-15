// Creating our User model
module.exports = function(sequelize, DataTypes) {
    const UserChoice = sequelize.define('UserChoice', {
            // The email cannot be null, and must be a proper email before creation
            userId: {
                type: DataTypes.INTEGER
            },
            // The password cannot be null
            partnerId: {
                type: DataTypes.INTEGER

            },
            restaurantId: {
                type: DataTypes.INTEGER

            },
            restaurantImg: {
                type: DataTypes.STRING

            },
            restaurantName: {
                type: DataTypes.STRING

            }
        })
        // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    return UserChoice
}