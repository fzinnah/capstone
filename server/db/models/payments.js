const Sequelize = require('sequelize');
const db = require('../database');

const Payment = db.define('payment', {
  method: {
    type: Sequelize.ENUM({
      values: ['credit/debit card', 'stripe', 'venmo'],
    }),
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  ccNum: {
    type: Sequelize.BIGINT,
  },
  ccExpMonth: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 12,
    },
  },
  ccExpYear: {
    type: Sequelize.INTEGER,
    validate: {
      min: 2023,
    },
  },
  ccSecurityCode: {
    type: Sequelize.INTEGER,
    validate: {
      min: 100,
      max: 9999,
    },
  },
  isDefault: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Payment;
