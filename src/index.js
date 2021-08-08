const app= require('./app')

//SERVER
app.listen(app.get('port'), ()=>{
    console.log('SERVER ON PORT' , app.get('port'));
})