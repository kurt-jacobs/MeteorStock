import { Meteor } from 'meteor/meteor';

	Meteor.startup(() => {  
		seedSymbols();  
	});

	Meteor.methods({
	    stockTickerFeed : function (symbolId,value) {			
		    SymbolList.update(symbolId, { $set: { delta:value } , $inc: {price: value } }); 
	   },

	});

	Meteor.publish ('symbols',  function() {	 
		var options = {};	 
		options.fields={ _id: true, symbol : true , company:true, price:true, delta:true };	
		return SymbolList.find({}, options)		 
	});