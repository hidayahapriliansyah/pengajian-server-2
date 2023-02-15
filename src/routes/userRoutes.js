// import express from 'express';
// import userController from '../controller/userController.js'; 

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.index);

router.get('/signup', userController.signup_get);
router.post('/signup', userController.signup_post);

router.get('/login', userController.login_get);
router.post('/login', () => {});

router.get('/invite', () => {});
router.post('/invite', () => {});
router.get('/invite/create', () => {});
router.post('/invite/create', () => {});
router.get('/invite/:id', () => {});
router.get('/invite/:id/edit', () => {});
router.patch('/invite/:id/edit', () => {});

router.get('/profile', () => {});
router.get('/profile/edit', () => {});

router.get('/sponsor', () => {});
router.get('/sponsor/create', () => {});
router.post('/sponsor/create', () => {});
router.get('/sponsor/:id', () => {});
router.get('/sponsor/:id/edit', () => {});
router.patch('/sponsor/:id/edit', () => {});

router.get('/notifications', () => {});
router.patch('/notifications/:id', () => {});

module.exports = router;