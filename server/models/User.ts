import { DataTypes } from 'sequelize';
import BaseModel from './BaseModel';
import sequelize from '../config/database';
import jwt from 'jsonwebtoken';
import config from '../config/config';

export class User extends BaseModel<User> {
  declare id: number;
  declare email: string;
  declare password: string;
  declare role: 'user' | 'sitter' | 'admin';
  declare createdAt: Date;
  declare updatedAt: Date;

  static async verifyByToken(token: string) {
    try {
      const decoded = jwt.verify(token, config.jwtSecret) as { id: number };
      return await User.findByPk(decoded.id);
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('user', 'sitter', 'admin'),
      defaultValue: 'user'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'User'
  }
); 