import express from 'express';
const app = express();
const port = 9000;
app.get('/', (req, res) => {
    res.send('Server is up and running! Dev Branch');
});
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});