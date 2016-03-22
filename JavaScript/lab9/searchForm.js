window.addEventListener('load', function(){
var  searchForm = document.querySelector('[data-id="searchForm"]'),
searchTextInput = searchForm.searchText,
listNode = document.querySelector('[data-id="list"]'),	
	
search = function(db, searchText){
	var resultArr = db.filter(function(value){
	return value.indexOf(searchText) === 0;	
	});
	return resultArr;
};	

searchTextInput.addEventListener('keyup', function(e){
	var searchText = searchTextInput.value;
	if(searchText){
	var	result = search(searchDb, searchText),
		listHtml = '',
		resultLength = result.length;
	
	if(resultLength){
		for(var i=0; i<resultLength; i++){
		listHtml += '<li>'+ result[i] + '</li>'; 
		}
	}
		listNode.innerHTML = listHtml;
		
	} else {
		listNode.innerHTML = '';
	}
});	
	
searchForm.addEventListener('submit', function(e){
	window.open('https://www.google.com.ua/webhp?s#q=' + 	 searchTextInput.value.split(' ').join('+'));
	e.preventDefault();
	return false;
	});	

listNode.onclick = function(e){
	if(e.target !== e.currentTarget){
	searchTextInput.value = e.target.innerHTML;	
	}
}

});

