const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/register", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() =>
{
    console.log("db connected....")
}).catch((err) =>
{
    console.log(err);
});