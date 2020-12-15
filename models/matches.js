// Creating our User model
module.exports = function(sequelize, DataTypes) {
    const Matches = sequelize.define('Matches', {
        // The email cannot be null, and must be a proper email before creation
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        partnerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        restaurantId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        }
    })

    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    return Matches
}