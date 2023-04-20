const container = document.querySelector('#maincontent');
const links= document.querySelector("nav").querySelectorAll('a');
let url = "articals.txt";

const content_load = function(clickedvalue){


		switch (clickedvalue)
	{

		case 'index' :
			url = "articals.txt"
			break;

		case 'portfolio':
			
			url = "portfolio.txt";
			break;

		default:

			console.log('not clicked');
	}


	


	
fetch(url)
	.then((response) =>  {
		return response.text()
	})
	.then(data => {
		container.innerHTML=data
	})
	.catch(error => 
		{
			console.log('Error - no file fetched')
		});

}

content_load()

const selectContent=function(event){

	event.preventDefault();
	let anchor_value = this.getAttribute('href');
	content_load(anchor_value);
	
}

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', selectContent, false);
    

}

