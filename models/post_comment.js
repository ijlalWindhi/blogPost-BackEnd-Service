"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class post_comment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.post, {
                foreignKey: "id_post",
                as: "post",
            });
            this.belongsTo(models.user, {
                foreignKey: "id_user",
                as: "user",
            });
        }
    }
    post_comment.init(
        {
            id_post: DataTypes.STRING,
            id_user: DataTypes.STRING,
            title: DataTypes.STRING,
            content: DataTypes.TEXT,
            publishedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "post_comment",
            tableName: "post_comment",
            timestamps: false,
        }
    );
    return post_comment;
};
