import express from 'express';
import { PostMentor, PostStudent } from "../Helper.js";
const router = express.Router();

router.route('/mentor')
.post(async (request, response) => {
    const data = request.body;
    const result = await PostStudent(data);
    response.send(result);
})

router.route('/student')
.post(async (request, response) => {
    const data = request.body;
    const result = await PostMentor(data);
    response.send(result);
})





export const Router = router;