const mongodb = require('../database/db');
const ObjectId = require('mongodb').ObjectId;

const getAllTeachers = async (req, res) => {
    const result = await mongodb.getDb().db().collection('teachers').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};


const getTeacherById = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('teachers').find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

const createTeacher = async (req, res) => {
    const teacher = req.body;
    const result = await mongodb.getDb().db().collection('teachers').insertOne(teacher);
    res.status(201).json(result);
};

const updateTeacher = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const teacher = req.body;
    const result = await mongodb.getDb().db().collection('teachers').replaceOne({ _id: userId }, teacher);
    res.status(204).json(result);
};


const deleteTeacher = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('teachers').deleteOne({ _id: userId });
    res.status(200).json(result);
};  

module.exports = { getAllTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher };
