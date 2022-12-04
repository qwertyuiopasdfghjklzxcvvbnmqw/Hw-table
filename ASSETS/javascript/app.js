     // alert("hello");
 
    var infotag = [
	
	{position: 1, name: 'Hydrogen', weight: 1.0079,
	symbol: 'H'},
	{position: 2, name: 'Helium', weight: 4.0026,
	symbol: 'He'},
	{position: 3, name: 'Lithium', weight: 6.941,
	symbol: 'Li'},
	{position: 4, name: 'Beryllium', weight: 9.0122,
	symbol: 'Be'},
	{position: 5, name: 'Boron', weight: 10.811,
	symbol: 'B'},
	{position: 6, name: 'Carbon', weight: 12.0107,
	symbol: 'C'},
	{position: 7, name: 'Nitrogen', weight: 14.0067,
	symbol: 'N'},
	{position: 8, name: 'Oxygen', weight: 15.9994,
	symbol: 'O'},
	{position: 9, name: 'Fluorine', weight: 18.9984,
	symbol: 'F'},
	{position: 10, name: 'Neon', weight: 20.1797,
	symbol: 'Ne'},
	
	];
	  
	  var result = " ";
	  var infotbody = document.getElementById("info");
	  
	  
	  infotag.forEach(function(element,i){
		  result += `
		  
		   <tr> 
		    <td>${infotag[i].position}</td>
		    <td>${infotag[i].name}</td>
		     <td>${infotag[i].weight}</td>
			 <td>${infotag[i].symbol}</td>
			
            </tr>`
	  });

        console.log(result);
		
		infotbody.innerHTML = result; 
		
		
		
		////
		
		
		
		
	var infos =	 [
	
	{srno: 1, author:'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
	{srno: 2, author: 'Steve Jobs', title: 'Walter lsaacon', libraryID: 4264},
	{srno: 3, author: 'Suzanne Collins', title:'Mockingjay: The Final Book of The Hunger Games',libraryID:3245},	
	
	];
	
	var result1 = " ";
	
	var infotbody = document.getElementById("infoname");
	
	
	
	 infos.forEach(function(elements,j){
		 
		 result1 += `
		 <tr>
		    <td>${infos[j].srno}</td>
		    <td>${infos[j].author}</td>
		     <td>${infos[j].title}</td>
			 <td>${infos[j].libraryID}</td>
			 
            </tr>`
		 
	 });
	 
	 console.log(result1);
	 
	 infotbody.innerHTML = result1;
	
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  // var infos = [ 
   // {srno:1, author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   // {srno:2, author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   // {srno:3, author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
// ];

// var result1 = " ";
// var infotbody = document.getElementById("infoname");

// infos.forEach(function(elements,j){
	// result1 += `
	// <tr> 
	// <th>${infos[j].srno}</th>
	// <td>${infos[j].author}</td>
	// <td>${infos[j].title}</td>
	// <td>${infos[j].libraryID}</td>
	// </tr>`
// })

 // console.log(result1);
 
 // infotbody.innerHTML = result1;
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	 
	  