
const options = {
   method: 'GET',
   url: 'https://covid-19-news.p.rapidapi.com/v1/covid',
   
   headers: {
     'X-RapidAPI-Key': 'e641166ffcmsh24bde9766cc0b57p19fb59jsn4548b17d97c8',
     'X-RapidAPI-Host': 'covid-19-news.p.rapidapi.com'
   }
 };
 
 async function getPillPackData(){
 
    let res = await fetch('https://covid-19-news.p.rapidapi.com/v1/covid?q=covid',options);
    let data = await res.json();
    console.log(data);
    showPillPackData(data);
 }
 
 getPillPackData();
 
 function showPillPackData(data){
 
    let tableData = `<tr>
 
 <th style = "text-align: center;">title</th>
 <th style = "text-align: center;">summary</th>
 <th style = "text-align: center;">country</th>
 <th style = "text-align: center;">url</th>

 </tr>`;
 
 
 for(let i = 0; i<100; i++){
 
        tableData+= `<tr>
        <td>${data.articles[i].title}</td> 
 <td>${data.articles[i].summary}</td>
 <td>${data.articles[i].country}</td>
 <td>${data.articles[i].clean_url}</td>
 </tr>`;
 
    document.getElementById("table11").innerHTML = tableData;
 
 }
 
 }