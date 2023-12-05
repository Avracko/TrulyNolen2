import express  from "express"
import {con} from "../modelo/db.js"

var crud_factura = ({});

crud_factura.leer = (req, res) => {
    con.query('select * from servicios s where facturaid is null',(error , results)=>{
        if (error) {
            throw error;
        }else{            
            con.query('select * from Factura f inner join servicios s on f.id = s.facturaid where s.facturaid is not null',(error , results1)=>{
                if (error) {
                    throw error;
                }else{            
                    con.query('select * from pagos where facturaid is not null',(error , results2)=>{
                        if (error) {
                            throw error;
                        }else{            
                            res.render('PostVenta',{ resultado: results , facturado: results1 , pagos: results2 })
                        }
                    })
                }
            }) 
        }
    })        
}

crud_factura.facturar = (req, res) => {
    const id = req.params.id;
    const valor = req.params.valor;

    con.query('call insertar_factura(?,now(),?)',[valor,id],(error , results)=>{
        if (error) {
            throw error;
        }else{            
            res.redirect('/postventa') 
        }
    })        
}

export {crud_factura};