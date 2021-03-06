const express = require('express');
const app = express();
const hbs = require('express-handlebars');

const path = require('path');
const moment = require('moment');
const bodyParser = require('body-parser');

const postRoutes = require('./routes/postRoutes.js');
const loginroutes = require('./routes/loginRoutes.js');
const dashboardRoutes = require('./routes/dashboard.js');
const adminLogin = require('./routes/adminLogin');

app.use(express.static(path.join(__dirname, 'public')));


exphbs = hbs.create({
    helpers: {
        dateFormat: (posteddate, format) => {


            return moment(posteddate)
                .format('MM/DD/YYYY');

        }
    }

});


app.engine('handlebars', exphbs.engine);



app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/post', postRoutes);
app.use('/login', loginroutes);
app.use('/dashboard', dashboardRoutes);
app.use('/admin', adminLogin);



app.listen(5000, () => {
    console.log("Server running on port 5000")

})