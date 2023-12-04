import express  from "express"
import { crud_cliente } from "./Controladores/crud_clientes.js";
import { crud_ventas} from "./Controladores/crud_ventas.js";
import { crud_truly } from "./Controladores/crud_clientes.js";

const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static('public'))
app.use(express.static('src'))
app.use(express.static('Controladores'))

app.set('views', './views')
app.set('view engine', 'ejs')

const port = process.env.PORT || 3000;

app.listen(port,"0.0.0.0",function(){ 
    console.log('Aplicacion Iniciada : http://localhost:3000/')
})

app.get('/',function(req,res){
    res.render('index')       
})

app.get('/login',function(req,res){

    res.render('login')
        
})

app.get('/registro',function(req,res){

    res.render('registro')
        
})

app.get('/main',crud_cliente.leer);

app.get('/truly',crud_truly.leer);

app.get('/ventas',crud_ventas.leer);

app.get('/ventas',function(req,res){

    res.render('ventas')
        
})


app.post('/update',crud_truly.update);

//editar cliente apertura

app.get('/trulyedit/:id',crud_truly.edit);
app.post('/crud_c',crud_cliente.agregarC);
//editar cliente cierre


//Borrar Cliente Apertura
app.get('/borrar/:id/:sucursal_id',crud_truly.borrar);
//Cierre
app.get('/postventa',function(req,res){

    res.render('PostVenta')
        
})


app.get('/calendario',function(req,res){

    res.render('calendario')
        
})
