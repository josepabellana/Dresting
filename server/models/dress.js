'use strict';

module.exports = (sequelize, DataTypes) => sequelize.define('Dress', {
  category: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  brand: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  size: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  itemName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  color: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  calendarFromDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  calendarUntilDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
  // The timestamp is added automatically by Sequelize
});
