'use strict';

require('dotenv').config();

const connectToDatabase = require('../../config/db');
const Form = require('./form.model');

/**
 * Get all Forms with getAllForms function
 */
module.exports.getAll = async (_, context) => {
  try {
    context.callbackWaitsForEmptyEventLoop = false;
    await connectToDatabase();

    const forms = await Form.find();
    return {
      statusCode: 200,
      body: JSON.stringify({ result: forms }, null, 2),
      headers: { "Content-Type": "application/json" }
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error: ' + err.message, }, null, 2),
      headers: { "Content-Type": "application/json" }
    };
  }
}

/**
 * Get Form with getForm function
 */
module.exports.get = async (event, context) => {
  try {
    context.callbackWaitsForEmptyEventLoop = false;
    await connectToDatabase();

    const { path } = event.pathParameters;
    const form = await Form.findOne({ path });

    if (!form)
      return {
        statusCode: 404,
        body: JSON.stringify({ result: null }, null, 2),
        headers: { "Content-Type": "application/json" }
      };
    else
      return {
        statusCode: 200,
        body: JSON.stringify({ result: form }, null, 2),
        headers: { "Content-Type": "application/json" }
      };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error: ' + err.message, }, null, 2),
      headers: { "Content-Type": "application/json" }
    };
  }
}

/**
 * Create Form with newForm function
 */
module.exports.create = async (event, context) => {
  try {
    context.callbackWaitsForEmptyEventLoop = false;
    await connectToDatabase();

    const { path, title, fields } = JSON.parse(event.body);
    const form = await Form.create({
      path,
      title,
      fields
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ result: form }, null, 2),
      headers: { "Content-Type": "application/json" }
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error: ' + err.message, }, null, 2),
      headers: { "Content-Type": "application/json" }
    };
  }
}

/**
 * Update Form with updateForm function
 */
module.exports.update = async (event, context) => {
  try {
    context.callbackWaitsForEmptyEventLoop = false;
    await connectToDatabase();

    const { path } = event.pathParameters;
    const newFields = JSON.parse(event.body);
    const form = await Form.findOneAndUpdate({
      path
    }, {
      ...newFields,
    }, {
      new: true,
      timestamps: true
    });
    
    return {
      statusCode: 200,
      body: JSON.stringify({ result: form }, null, 2),
      headers: { "Content-Type": "application/json" }
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error: ' + err.message, }, null, 2),
      headers: { "Content-Type": "application/json" }
    };
  }
}


/**
 * Delete Form with removeForm function
 */
module.exports.delete = async (event, context) => {
  try {
    context.callbackWaitsForEmptyEventLoop = false;
    await connectToDatabase();

    const { path } = event.pathParameters;
    const form = await Form.findOneAndDelete({ path });

    return {
      statusCode: 200,
      body: JSON.stringify({ result: form }, null, 2),
      headers: { "Content-Type": "application/json" }
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error: ' + err.message, }, null, 2),
      headers: { "Content-Type": "application/json" }
    };
  }
}
