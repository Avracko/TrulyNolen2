import express  from "express"
import {con} from "../modelo/db.js"

var crud_ventas = ({});
crud_ventas.leer = (req, res) => {
    con.query('select * from contratos',(error , results)=>{
        if (error) {
            throw error;
        }else{            
            res.render('ventas',{resultado: results})
        }
    })        
}
export {crud_ventas};