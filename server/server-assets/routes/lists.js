var router = require('express').Router()
var Lists = require('../models/list')
var User = require('../models/user')

// Get all
router.get('/api/lists', (req, res, next)=>{
    //Lists.find({creator: req.session.uid})
    Lists.find(req.query)
    .then(lists=>{
        res.status(200).send(lists)
    })
        .catch(err =>{
            res.status(400).send(err)
        })
})

router.get('/api/lists/:id', (req, res, next)=>{
    Lists.findById(req.params.id)
    .then(list=>{
        res.status(200).send(list)
    })
        .catch(err =>{
            res.status(400).send(err)
        })
})

router.post('/api/lists', (req, res, next)=>{
    var list = req.body
    //list.creator = req.session.uid
    Lists.create(list)
    .then(newList=>{
        res.status(200).send(newList)
    })
        .catch(err =>{
            res.status(400).send(err)
        })
})

// router.put('/api/lists/:id/task', (req, res) => {
//     Lists.findById(req.params.id)
//     .then(function(list){
//         list.songs.addToSet(req.body)
//         list.save()
//     })
//     .catch(err=>{
//         res.status(400).send(err)
//     })
//  })


// edit
router.put('/api/lists/:id', (req, res, next)=>{
    Lists.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(list=>{
        res.status(200).send({message: "Successfully Updated!", list})
    })
        .catch(err =>{
           return res.status(400).send(err)
        })
})

// delete
router.delete('/api/lists/:id', (req, res, next)=>{
    Lists.findByIdAndRemove(req.params.id)
    .then(data=>{
        res.send({message: "Successfully Delted!"})
    })
        .catch(err =>{
            res.status(400).send(err)
        })
})

module.exports = {
    router
}