var dispatcher=require('httpdispatcher')

function primadispatcher(req,res){
  dispatcher.onGet('/user',function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Estas en el modulo de User')
  })
  dispatcher.onGet('/admin',function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Estas en el modulo de Admin')
  })
  dispatcher.onGet('/dashboard',function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Estas en el modulo de Dashborad')
  })
  dispatcher.onError(function(req,res){
    res.writeHead(400)
    res.end('No se ha encontrado el recurso')
  })

  dispatcher.dispatch(req,res)
}

module.exports=primadispatcher
/*function prima(req,res){
  //res.end('Funcionando correctamente, Recurso pedido: '+req.url)
  var url=req.url
  switch (url) {
    case '/user':
      res.end('Esta en el modulo de User')
      break;
    case '/admin':
      res.end('Estas en el modulo de Admin')
      break;
    case '/dashboard':
      res.end('Estas en el modulo de Dashboard')
      break;
    default:
      res.end('Recurso no encontrado')
      break;
  }
}*/
