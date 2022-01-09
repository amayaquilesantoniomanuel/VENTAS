db.ventas.aggregate(
    [
         { $match :
             { tipo : 'camara samsung' }
        }
    ]
).pretty();
db.ventas.aggregate(
    [
      {$match:{tipo:'camara lg'}},
        {$group:
          {
            _id: { precio: { precio: "$precio"}, unidades_vendidas: { unidades: "$unidades_vendidas" } },
            ganancias_totales: { $sum:{$multiply: [ "$unidades_vendidas",'$precio'] } }
        
          }
      }
    ]
 ).pretty()
db.ventas.aggregate([
   
     {$group:
        {
        _id:{cliente:{cliente:'$cliente'},tipo:{tipo:'$tipo'}},
        media:{$sum:{$divide:['$precio','$unidades_vendidas']}}

        }}

    ]
).pretty()
