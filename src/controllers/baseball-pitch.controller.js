const httpStatus = require('http-status');
const db = require('../database/sequelize');
const baseService = require('../services/base.service');
const APIError = require('../helpers/APIError');
const Exercise = db.BaseballPitch;


class BaseballPitchController {

    async create(req, res) {
        try {
            const dept = await new baseService(db.BaseballPitch).create(req.body);
            res.json(dept);
        } catch (exception) {
            throw exception
        }
    }

    async list(req, res) {
        const page = req.query.page;
        const pageSize = req.query.pageSize;
        const depts = await new baseService(db.BaseballPitch).list(page, pageSize);
        res.json(depts);
    }

    async update(req, res) {
        const dept = await new baseService(db.BaseballPitch).update(req.params.id, req.body);
        res.json(dept);
    }

    async get(req, res) {
        const dept = await new baseService(db.BaseballPitch).getOne(req.params.id);
        res.json(dept);
    }

    async remove(req, res) {
        const dept = await new baseService(db.BaseballPitch).delete(req.params.id);
        res.json({
            message: `Object with id ${req.params.id} deleted!`
        });
    }

    async get_random(req,res){
        const dept = await new baseService(db.BaseballPitch).getOneRandom();
        res.json(dept);
    }

}

module.exports = new BaseballPitchController()