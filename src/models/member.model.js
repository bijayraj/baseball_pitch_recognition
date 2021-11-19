const Sequelize = require("sequelize");
const {
    Joi
} = require("express-validation");

class Member extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            firstName: {
                type: DataTypes.STRING,
                field: 'first_name',
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING,
                field: 'last_name',
                allowNull: false
            },            
            dob: DataTypes.DATEONLY,            
            photoUrl: {
                type: DataTypes.STRING,
                field: 'photo_url'
            },
            description: DataTypes.TEXT,
            email: {
                type: DataTypes.STRING,
                unique: true
            }
        }, {
            sequelize,
            underscored: true,
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });
    }

    // static associate(models) {
    //     this.myAssociation = this.belongsTo(models.Batch);
    // }


    //This is used in route validation! 
    static get validationCreate() {
        const joiObj = Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            dob: Joi.date().required(),
            photoUrl: Joi.string(),
            description: Joi.string(),
            email: Joi.string().email({
                tlds: {
                    allow: false
                }
            }).required()
        });

        return joiObj;
    }

}

module.exports = Member