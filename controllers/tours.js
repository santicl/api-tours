const { toursModel } = require('../models');

/*** Get tours
 * @param {*} req
 * @param {*} res
 * 
 * **/

const getTours = async (req, res) => {
    const data = await toursModel.find({});

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
    const { body } = req;
    console.log(body);
    const data = await toursModel.create(body);
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