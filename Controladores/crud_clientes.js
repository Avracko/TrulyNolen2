import express  from "express"
import {con} from "../modelo/db.js"

var crud_cliente = ({});
crud_cliente.leer = (req, res) => {
    con.query('select c.cliente_id, c.razonsocial, c.mote, c.rtn from clientes c',(error , results)=>{
        if (error) {
            throw error;
        }else{            
            res.render('PaginaPrincipal',{resultado: results})
        }
    })        
}

var crud_truly = ({});
crud_truly.leer = (req, res) => {
    con.query('select c.cliente_id, c.razonsocial, c.mote, c.rtn, s.direccion,s.moteide,s.sucursal_id from clientes c left join sucursales s ON c.cliente_id = s.cliente_id where sucursal_id is not null',(error , results)=>{
        if (error) {
            throw error;
        }else{            
            res.render('Trulyn',{resultado: results})
        }
    })        
}

crud_truly.edit = (req, res) => {
    const id = req.params.id
    con.query('select c.cliente_id, c.razonsocial, c.mote, c.rtn, s.direccion,s.moteide, s.sucursal_id from clientes c left join sucursales s ON c.cliente_id = s.cliente_id where s.cliente_id = ?',[id],(error , results)=>{
        if (error) {
            throw error;
        }else{            
            res.render('Trulynedit',{user:results[0]})
        }
    })   
}

crud_truly.update = (req, res) => {
    
    const id = req.body.id;
    const cliente = req.body.cliente;
    const identificador = req.body.identificador;
    const rtn = req.body.rtn;
    const direccion = req.body.direccion;
    const contacto = req.body.contacto;
    const sucursal_id = req.body.sucursalid;
    console.log(sucursal_id);
    con.query('Update sucursales set ? where cliente_id = ? and sucursal_id = ? ',[{cliente_id:id,direccion:direccion,moteide:contacto},id,sucursal_id],(error , results)=>{
        if (error) {
            throw error;
        }else{            
            con.query('Update clientes set ? where cliente_id = ? ',[{razonsocial:cliente,mote:identificador,rtn:rtn},id],(error , results)=>{
                
                if (error) {
                    throw error;
                }else{            
                    res.redirect('/truly')
                }
            })
        }
    })
 
}

crud_truly.borrar = (req, res) => {
    
    const id = req.params.id;
    const sucursal_id = req.params.sucursal_id;

    con.query('delete from sucursales where sucursal_id = ? ',[sucursal_id],(error , results)=>{
        if (error) {
            throw error;
        }else{            
            res.redirect('/truly')
        }
    })
 
}



crud_cliente.agregarC = (req, res) => {

    const btn_insert = req.body.Insert;
    const btn_actualizar =req.body.actualizar;
    const btn_borrar =req.body.borrar;
    const cliente = req.body.cliente;
    const identificador = req.body.identificador;
    const rtn = req.body.rtn;
    const direccion = req.body.direccion;
    const contacto = req.body.contacto;
    const telefono = req.body.telefono;

    if(btn_insert){
        con.query('insert into clientes set ?',{razonsocial:cliente,mote:identificador,rtn:rtn}, (error,results) =>{

            const id = results.insertId;

            con.query('insert into sucursales set ?',{direccion:direccion,cliente_id:id}, (error,results) =>{
                
                if (error) {
                    console.log(error);
                }
            })

            if (error) {
                console.log(error);
            }else{            
                res.redirect('/truly');
            }
        });
    }
};

export {crud_cliente};
export {crud_truly};

