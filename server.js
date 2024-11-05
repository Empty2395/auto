require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Путь к вашему сайту (например, статические файлы)
app.use(express.static('public')); // Если ваши файлы в папке public

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Укажите путь к вашему главному HTML файлу
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
