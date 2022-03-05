# card-send

## Зпапуск backend:

Для запуска backend'а, вам нужно перейти в папку «backend» и установить все зависимости, для этого в этой папке в терминале наберите команду ниже:
```
npm install
```
После чего заходим в «index.js», там меняем переменную ```settingConnect``` если это потребуется, она обозначает путь для подключения к базе данных MongoDB, значение по умолчанию:
```
const settingConnect = `mongodb://localhost:27017/card`;
```

Для запуска сервера используем команду ниже:
```
npm run start
```

## Запуск frontend:
Для запуска frontend'а, переходим в папку «frontend», и с помощью команду ниже устанавливаем все зависимости:
```
npm install
```
После чего если потребуется заходить в файл «const.js» и там меняем переменную ```BACKEND_URL```, она отвечает за URL до сервера, значение по умолчанию:
```
export const BACKEND_URL = "http://localhost:3000/"
```
Для запуска используете команду ниже:
```
npm run start
```