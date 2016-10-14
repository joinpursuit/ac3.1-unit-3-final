var getItems = function(){
   var allItems = [];
	   for(var i = 0; i < store.getState().shirts.length; i++){
	      allItems.push('<li>{'SHIRTS'}</li>')
	      return allItems
	   }