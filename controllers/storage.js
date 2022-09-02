const { storagesModel } = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;

/*** Get tours
 * @param {*} req
 * @param {*} res
 * 
 * **/

const getTours = async (req, res) => {
    const data = await storagesModel.find({});

    res.send({ data });
}

const getTour = async (req, res) => {

}
/*** Create tour
 * @param {*} req
 * @param {*} res
 * 
 * **/
const createTour = async (req, res) => {
    const { body, file } = req;
    console.log(file);
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storagesModel.create(fileData);
    res.send({ data });
}
/*** Update tour
 * @param {*} req
 * @param {*} res
 * 
 * **/
const updateTour = async (req, res) => {

}
/*** Delete tour
 * @param {*} req
 * @param {*} res
 * 
 * **/
const deleteTour = async (req, res) => {

}

module.exports = { getTours, getTour, createTour, updateTour, deleteTour };