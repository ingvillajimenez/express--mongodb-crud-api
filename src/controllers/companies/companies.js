const mongoose = require('mongoose');
const Company = require('../../models/Company');

const controllers = {
    index: (req, res) => {
        Company
            .find()
            .exec()
            .then(data => {
                res
                    .json({
                        type: 'Reading Companies',
                        data: data
                    })
                    .status(200)
            })
            .catch(err => {
                console.log(`caugth error: ${err}`);
                return res.status(500).json(err);
            })
    },
    create: (req, res) => {
        const newCompany = new Company({
            _id: mongoose.Types.ObjectId(),
            name: req.body.name
        });

        newCompany
            .save()
            .then(data => {
                res
                    .json({
                        type: 'Company created',
                        data: data
                    })
                    .status(200)
            })
            .catch(err => {
                console.log(`caugth error: ${err}`);
                return res.status(500).json(err);
            })
    },
    findBy: (req, res) => {
        Company
            .findById(req.params.companyId)
            .exec()
            .then(data => {
                res
                    .json({
                        type: 'Reading a company',
                        data: data
                    })
                    .status(200)
            })
            .catch(err => {
                console.log(`caugth error: ${err}`);
                return res.status(500).json(err);
            })
    },
    removeBy: (req, res) => {
        Company
            .deleteOne({_id: req.params.companyId})
            .then(data => {
                res
                    .json({
                        type: 'Company removed',
                        data: data
                    })
                    .status(200)
            })
            .catch(err => {
                console.log(`caugth error: ${err}`);
                return res.status(500).json(err);
            })
    },
    update: (req, res) => {
        Company
            .updateOne({_id: req.params.companyId}, {name: req.body.name})
            .then(data => {
                res
                    .json({
                        type: 'Company updated',
                        data: data
                    })
                    .status(200)
            })
            .catch(err => {
                console.log(`caugth error: ${err}`);
                return res.status(500).json(err);
            })
    }
};

module.exports = controllers;

