const express = require('express');
const router = express.Router();
const Question = require('../models/questionModel');
const Option = require('../models/optionModel');

// Create a question
router.post('/create', async (req, res) => {
  try {
    const { title } = req.body;
    const newQuestion = await Question.create({ title });
    res.json(newQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add options to a specific question
router.post('/:id/options/create', async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    const { text } = req.body;
    const newOption = await Option.create({ text, question: question._id });
    question.options.push(newOption);
    await question.save();
    res.json(newOption);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a question
router.delete('/:id/delete', async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.json({ message: 'Question deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an option
router.delete('/options/:id/delete', async (req, res) => {
  try {
    await Option.findByIdAndDelete(req.params.id);
    res.json({ message: 'Option deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add vote to an option
router.post('/options/:id/add_vote', async (req, res) => {
  try {
    const option = await Option.findById(req.params.id);
    option.votes += 1;
    await option.save();
    res.json({ message: 'Vote added successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// View a question and its options
router.get('/:id', async (req, res) => {
  try {
    const question = await Question.findById(req.params.id).populate('options');
    res.json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
