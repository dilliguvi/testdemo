//step 01: create an XHR object
var request=new XMLHttpRequest();
//step02: request a connection(which data you need to receive)
request.open("GET","https://www.anapioficeandfire.com/api/books/1");
//step 03: sending a connection request
request.send();
//step 04: once the data successfully received
// from the server (200)
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    //for (var i=0;i<data.length;i++){
      //  console.log(data[i].name,data[i].capital);
        
    //console.log(`Name:${data[i].name} capital:${data[i].capital}`);

 //for(var i=0;i<data.length;i++){
    //console.log(`flag:${data[i].flag}`);
   // console.log(`name:${data[i].name} latlng:${data[i].latlng} long:${data[i].latlng}`);
 //}
 console.log(`authors:${data.authors[0]} publisher:${data.publisher} numberOfPages:${data.numberOfPages} url:${data.url}`)
}