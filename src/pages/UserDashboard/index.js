const express = require('express');
const { ParseServer } = require('parse-server');
const path = require('path');

const app = express();
const api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/dev', // قاعدة البيانات الخاصة بك
  cloud: path.join(__dirname, '/cloud/main.js'), // كود cloud
  appId: 'myAppId',
  masterKey: 'myMasterKey', // احتفظ بهذه السرية!
  serverURL: 'http://localhost:1337/parse', // يجب أن يتوافق مع إعدادات الخادم
});

// مسار واجهة برمجة التطبيقات لـ Parse
app.use('/parse', api);

app.listen(1337, function() {
  console.log('parse-server running on port 1337.');
});
