import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Grafico(){
    const router = useRouter();

    useEffect(()=>{
        try{
        (function() {
                const data = [
                  { dia: 1, count: 10 },
                  { dia: 2, count: 20 },
                  { dia: 3, count: 30 },
                  { dia: 4, count: 40 },
                  { dia: 5, count: 50 },
                  { dia: 6, count: 60 },
                  { dia: 7, count: 70 },
                ];
              
                var myChart  = new Chart(
                  document.getElementById('acquisitions'),
                  {
                    type: 'bar',
                    data: {
                      labels: data.map(row => row.dia),
                      datasets: [
                        {
                          label: 'Visitas ao Anuncio',
                          data: data.map(row => row.count)
                        }
                      ]
                    }
                  }
    
                  
                );
    
                //myChart.destroy()
                
              })() }catch(e){

              }           
        
          
        
    },[])


    function Comp(){


          return ""

    }
  

    return(
        <div>
            <h1>Testando Gráficos !</h1>
        
            <div style={{"width":"800px"}}><canvas id="acquisitions"></canvas></div>
        </div>
    )

}