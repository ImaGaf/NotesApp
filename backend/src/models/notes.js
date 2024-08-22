import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/datadase';
import Cathegory from './cathegory'; 
import User from './users'; 

const Note = sequelize.define('note', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false 
    },
    cathegoryid: {
        type: DataTypes.INTEGER,
        references: {
            model: Cathegory,
            key: 'id'
        },
        allowNull: true 
    },
    userid: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        allowNull: false
    },
    archieved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false
});

export default Note;
