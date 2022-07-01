    
let ArrayObjectUser_correo = ArrayObjectUser[userActive]['Correo'];
let venta = JSON.parse(localStorage.getItem(ArrayObjectUser_correo));

let gasto = JSON.parse(localStorage.getItem(ArrayObjectUser_correo));

graficado(venta[0],gasto[1]); 

function graficado(V,G){

var ctx= document.getElementById("grafica-ventas").getContext("2d");
var graficas= new Chart(ctx,{
        type:"bar",
        data:{
            labels:['VENTAS','GASTOS'],
            datasets:[{
                 label: 'Perspectiva Ventas', /* Nombre */
                data:[V,G],
                backgroundColor:[
                    'rgba(206, 248, 111, 0.8)'
                ]    
            }]
        },
        options:{
            scales:{
                yAxes:[{
                    ticks: {
                        beginAtZaero:true
                    }
                }]
            }
        }
    });

    var ctx= document.getElementById("grafica-gastos").getContext("2d");
    var graficas= new Chart(ctx,{
            type:"bar",
            data:{
                labels:['GASTOS','VENTAS'],
                datasets:[{
                     label: 'Perspectiva Gastos',
                    data:[G,V],  /* Datos de manipulación de tal*/
                    backgroundColor:[
                        'rgba(248, 184, 111, 0.8)'
                    ]    
                }]
            },
            options:{
                scales:{
                    yAxes:[{
                        ticks: {
                            beginAtZaero:true
                        }
                    }]
                }
            }
        }); 
}