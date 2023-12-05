import express  from "express"
import {con} from "../modelo/db.js"

var crud_ventas = ({});
crud_ventas.leer = (req, res) => {
    con.query('select * from contratos where aprov is null',(error , results)=>{
        if (error) {
            throw error;
        }else{            
            con.query('select * from contratos where aprov is true',(error , results1)=>{
                if (error) {
                    throw error;
                }else{            
                    con.query('select * from contratos where aprov is false',(error , results2)=>{
                        if (error) {
                            throw error;
                        }else{            
                            res.render('ventas',{ resultado: results , aprov: results1 , reject: results2 })
                        }
                    })
                }
            }) 
        }
    })        
}

crud_ventas.leerRe = (req, res) => {
            
}


crud_ventas.aprovar = (req, res) => {
    const id = req.params.id;

    con.query('update contratos set aprov = true where contrato_id = ?',[id],(error , results)=>{
        if (error) {
            throw error;
        }else{            
            res.redirect('/ventas')
        }
    })        
} 

crud_ventas.denegar = (req, res) => {
    const id = req.params.id;

    con.query('update contratos set aprov = false where contrato_id = ?',[id],(error , results)=>{
        if (error) {
            throw error;
        }else{            
            res.redirect('/ventas')
        }
    })        
} 


export {crud_ventas};
