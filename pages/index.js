import Chart from 'chart.js/auto';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Grafico(){
    const router = useRouter();

    const [lista,setLista] = useState([])


    

    useEffect(()=>{
      fetch('https://api-previsao-projeto-integrador-production.up.railway.app/previsao/semar/tempar/20')
      .then(valor=>valor.json())
      .then(valor=>{
        let array = []
        
        let chave_anteriores = Object.keys(valor['anteriores'])
        let valores_anteriores = Object.values(valor['anteriores'])
        let hoje = new Date()
        let dados_hoje = []
 
        for(let i of chave_anteriores){
            let x =  new Date(i)
            if(x.toDateString() == hoje.toDateString()){
                dados_hoje.push(x)
            }
        }

        console.log(valor['previsao'])

        for(let i = 0;i<=dados_hoje.length-1;i++){
          array.push({hora:dados_hoje[i].getHours(),temperatura:valores_anteriores[i]})
        }
        
        console.log(array)
        try{
          (async function() {
                  try{
                  var myChart  = new Chart(
                    document.getElementById('sem_ar_real'),
                    {
                      type: 'line',
                      data: {
                        labels: array.map(row => row.hora),
                        datasets: [
                          {
                            label: 'Temperatura Real',
                            data: array.map(row => row.temperatura)
                          }
                        ]
                      }
                    }
      
                    
                  );}catch(e){
  
                  }
      
                  //myChart.destroy()
                  
                })() }catch(e){
  
                }

                let lista = []
                let dados_prev =  []
                let chave_prev = Object.keys(valor['previsao'])
                let valores_prev= Object.values(valor['previsao'])
                for(let i of chave_prev){
                    let x =  new Date(i)
                    if(x.toDateString() == hoje.toDateString()){
                      dados_prev.push(x)
                    }
                }
                for(let i = 0;i<=dados_hoje.length-1;i++){
                  lista.push({hora:dados_prev[i].getHours(),temperatura:valores_prev[i]})
                }
        try{
          (async function() {
                  try{
                  var myChart  = new Chart(
                    document.getElementById('sem_ar_prev'),
                    {
                      type: 'line',
                      data: {
                        labels: lista.map(row => row.hora),
                        datasets: [
                          {
                            label: 'Previsão de Temperatura',
                            data: lista.map(row => row.temperatura),
                            borderColor: 'red'
                          }
                        ]
                      }
                    }
      
                    
                  );}catch(e){
  
                  }
      
                  //myChart.destroy()
                  
                })() }catch(e){
  
                }


          })




    },[])


    useEffect(()=>{
      fetch('https://api-previsao-projeto-integrador-production.up.railway.app/previsao/comar/tempar/20')
      .then(valor=>valor.json())
      .then(valor=>{
        let array = []
        
        let chave_anteriores = Object.keys(valor['anteriores'])
        let valores_anteriores = Object.values(valor['anteriores'])
        let hoje = new Date()
        let dados_hoje = []
 
        for(let i of chave_anteriores){
            let x =  new Date(i)
            if(x.toDateString() == hoje.toDateString()){
                dados_hoje.push(x)
            }
        }

        console.log(valor['previsao'])

        for(let i = 0;i<=dados_hoje.length-1;i++){
          array.push({hora:dados_hoje[i].getHours(),temperatura:valores_anteriores[i]})
        }
        
        console.log(array)
        try{
          (async function() {
                  try{
                  var myChart  = new Chart(
                    document.getElementById('com_ar_real'),
                    {
                      type: 'line',
                      data: {
                        labels: array.map(row => row.hora),
                        datasets: [
                          {
                            label: 'Temperatura Real',
                            data: array.map(row => row.temperatura)
                          }
                        ]
                      }
                    }
      
                    
                  );}catch(e){
  
                  }
      
                  //myChart.destroy()
                  
                })() }catch(e){
  
                }

                let lista = []
                let dados_prev =  []
                let chave_prev = Object.keys(valor['previsao'])
                let valores_prev= Object.values(valor['previsao'])
                for(let i of chave_prev){
                    let x =  new Date(i)
                    if(x.toDateString() == hoje.toDateString()){
                      dados_prev.push(x)
                    }
                }
                for(let i = 0;i<=dados_hoje.length-1;i++){
                  lista.push({hora:dados_prev[i].getHours(),temperatura:valores_prev[i]})
                }
        try{
          (async function() {
                  try{
                  var myChart  = new Chart(
                    document.getElementById('com_ar_prev'),
                    {
                      type: 'line',
                      data: {
                        labels: lista.map(row => row.hora),
                        datasets: [
                          {
                            label: 'Previsão de Temperatura',
                            data: lista.map(row => row.temperatura),
                            borderColor: 'red'
                          }
                        ]
                      }
                    }
      
                    
                  );}catch(e){
  
                  }
      
                  //myChart.destroy()
                  
                })() }catch(e){
  
                }


          })




    },[])




    function Comp(){


          return ""

    }
  

    return(
        <div>
          <Head>
            <title>Previsão de Temperatura</title>
          </Head>
          <div class="alert alert-primary" role="alert" id="alert">
            Os dados Apresentados são referentes a seguinte data : {new Date().toLocaleDateString('pt-BR')}.
            <br/>
            O Campo horizontal (eixo x do gráfico) representa as horas do dia em questão.
            <br/>
            O Campo Vertical (eixo y do gráfico) representa a Temperatura relativa as horas.
          </div>
            <h1 id="title">Temperatura Com Ar Condicionado</h1>
            <div  id="grafo"><canvas id="com_ar_real"></canvas></div>
            <div  id="grafo"><canvas id="com_ar_prev"></canvas></div>

            <h1 id="title">Temperatura Sem Ar Condicionado</h1>
        
            <div  id="grafo"><canvas id="sem_ar_real"></canvas></div>
            <div  id="grafo"><canvas id="sem_ar_prev"></canvas></div>
        </div>
    )

}