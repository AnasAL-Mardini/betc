const options = {
    method: 'GET',
    url: 'https://bing-image-search1.p.rapidapi.com/images/search',
    params: {q: 'Drugs'},
    headers: {
      'X-RapidAPI-Key': 'e641166ffcmsh24bde9766cc0b57p19fb59jsn4548b17d97c8',
      'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
    }
  };

async function getimagesData(){
 
    let res = await fetch('https://bing-image-search1.p.rapidapi.com/images/search?q=Drugs',options);
    let data = await res.json();
    console.log(data);
    showimagesData(data);
 }
 

    getimagesData();
 
    function showimagesData(data){
    
       let tableData = `<tr>
    
    <th style = "text-align: center;"  >ImgDrug </th>
    
   
    </tr>`;
    
    
    for(let i = 0; i<100; i++){
    
           tableData+= `<tr>
    
    

    <td><img src ="${data.value[i].thumbnailUrl}"/></td>
    
    
    </tr>`;
    
       document.getElementById("table110").innerHTML = tableData;
    
    }
    
    }