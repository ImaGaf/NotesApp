import { sequelize } from '../utils/datadase';
import { DataTypes } from 'sequelize';
import Note from './notes';

const Cathegory = sequelize.define('cathegory', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cathegory: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    userid: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'cathegory',
    timestamps: false
});


export default Cathegory;
