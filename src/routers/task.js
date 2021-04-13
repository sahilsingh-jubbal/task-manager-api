const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const auth = require('../middleware/auth');

router.post('/tasks', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try {
        await task.save();
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e);
    }
})



//GET /tasks?completed_task=true
router.get('/tasks', auth, async (req, res) => {
    let isMatch = false, match, tasks;
    if (req.query.completed_task === 'true' || req.query.completed_task === 'false') {
        console.log('stared...');
        isMatch = true;
        match = req.query.completed_task === 'true';
    }

    try {
        if (isMatch) {
            tasks = await Task.find({ owner: req.user._id, completed_task: match });
        }
        else {
            tasks = await Task.find({ owner: req.user._id });
        }
        // await req.user.populate({
        //     path: 'tasks',
        //     match:match
        // }).execPopulate();

        res.send(tasks);
    } catch (e) {
        res.status(500).send(e);
    }
})

router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id;

    try {
        // const task = await Task.findById(_id);
        const task = await Task.findOne({ _id: _id, owner: req.user._id })
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send();
    }
})

router.patch('/tasks/:id', auth, async (req, res) => {

    const updates = Object.keys(req.body);
    const ValidUpdate = ['decription', 'completed_task'];
    const isValidOperation = updates.every((update) => ValidUpdate.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ 'error': 'invalid update!' })
    }

    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id });
        if (!task) {
            return res.status(404).send();
        }

        updates.forEach((update) => task[update] = req.body[update]);
        await task.save();
        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        res.send(task);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
        if (!task) {
            return req.status(404).send();
        }
        res.send(task);
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router;