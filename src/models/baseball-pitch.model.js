const Sequelize = require("sequelize");

class BaseballPitch extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },            
            pitch_type: {
                type: DataTypes.STRING,
                field: 'pitch_type',
                defaultValue: 10
            },
            description:{
                type:DataTypes.STRING,
                field:'description'
                
            },
            detailsUrl:{
                type:DataTypes.STRING,
                field:'details_url'
            },
            speed: {
                type: DataTypes.FLOAT,
                field: 'speed',
                defaultValue: 1.0
            },
            responseId:{
                type: DataTypes.INTEGER,
                field: 'response_id'
            },
            curve: {
                type: DataTypes.FLOAT,
                field: 'curve'
            },         
            destinationX: {
                type: DataTypes.FLOAT,
                field: 'destination_x'
            },
            destinationY: {
                type: DataTypes.FLOAT,
                field: 'destination_y'
            },
            destinationZ:{
                type: DataTypes.FLOAT,
                field: 'destination_z'
            },
            difficulty:{
                type: DataTypes.INTEGER,
                field: 'difficulty',
                defaultValue: 1
            }            
        }, {
            sequelize,
            underscored: true,
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });
    }
}

module.exports = BaseballPitch