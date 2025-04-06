import express from 'express';
import BookRepository from '../repository/BookRepository.js';



const findAll = async(req, res) => {
    const books = await BookRepository.findAll();
    return res.json(books);
};


const findById = async(req, res) => {
    const { id } = req.params
    const book = await BookRepository.findById(id);
    return res.json(book);
};

export default { findAll, findById };