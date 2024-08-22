import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/datadase'; 
import bcrypt from 'bcrypt';
import Note from './notes'; 
import Cathegory from './cathegory'; 

const User = sequelize.define('user', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    gmail: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: false,
    hooks: {
        beforeCreate: async (user) => {
            const hashed = await bcrypt.hash(user.password, 10);
            user.password = hashed;
        }
    }
});

User.hasMany(Note, { foreignKey: 'userid' });
User.hasMany(Cathegory, { foreignKey: 'userid' });

Note.belongsTo(User, { foreignKey: 'userid' });
Cathegory.belongsTo(User, { foreignKey: 'userid' });

export default User;
