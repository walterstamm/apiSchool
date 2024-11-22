const mongodb = require('../database/db');
const ObjectId = require('mongodb').ObjectId;



const getAllStudents = async (req, res) => {
    const result = await mongodb.getDb().db().collection('students').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getStudentById = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('students').find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

const createStudent = async (req, res) => {
    const student = req.body;
    const result = await mongodb.getDb().db().collection('students').insertOne(student);
    res.status(201).json(result);
};


const updateStudent = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const student = req.body;
    const result = await mongodb.getDb().db().collection('students').replaceOne({ _id: userId }, student);
    res.status(204).json(result);
};

const deleteStudent = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('students').deleteOne({ _id: userId });
    res.status(200).json(result);
};  

module.exports = { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent };
