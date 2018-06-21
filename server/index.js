//console.log("Saludos desde node");
var http=require("http")
var Routin=require('./request.js')
var PORT=8080



var PrimerServer= http.createServer(Routin)
PrimerServer.listen(PORT,function(){
  console.log('Server es funcionte en '+PORT)
})
