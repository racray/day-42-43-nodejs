import { client } from "./index.js";

export async function GetMovie(filter) {
    return await client.db("b28wd").collection("movies").find(filter).toArray();
}
export async function PostStudent(data) {
    return await client.db("b28wd").collection("student").insertOne(data);
}



export async function PostMentor(data) {
    return await client.db("b28wd").collection("mentor").insertOne(data);
}
export async function CheckUserName(username) {
    return await client.db("b28wd").collection("users").findOne({ username: username });
}





export async function genPassword(password) {
    const NO_OF_ROUNDS = 10;
    const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
    const hashPassword = await bcrypt.hash(password,salt);
    return hashPassword;
}

