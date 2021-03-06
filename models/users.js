module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
  },
  {
    indexes: [
        {
            unique: true,
            fields: ['email']
        }
    ]
  });
  
    Users.associate = function(models) {
      Users.belongsToMany(models.Restaurants, {
        as: "user_favorite", // used for querying data
        through: models.Favorites,
        foreignKey: "user_id"
      });
  
      Users.belongsToMany(models.Restaurants, {
        as: "user_restaurant",
        through: models.Last_Search,
        foreignKey: "user_id"
      });
    };
  
    return Users;
  };
  