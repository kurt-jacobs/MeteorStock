import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './templates/stockSymbols.html';
import './templates/main.html';
import './templates/price.html';
import './templates/delta.html';


// Helper function to format the price 
Template.price.helpers({
   formatPrice:  function (value) {    
       return value.toFixed(2);        
    },
});

// Helper function to format the delta 
Template.delta.helpers({
   formatDelta:  function (value) {    
       return value.toFixed(2);        
    },
});

// when stockSymbols template has been create
// subscribe to symbol list
Template.stockSymbols.onCreated(
   function stocksOnCreated() {
     var self = this;
     self.subscribe('symbols'); 
});

Template.stockSymbols.helpers({

   settings: function () {       
        return {
            collection: SymbolList,
            rowsPerPage: 20,
            showFilter: true,
			showRowCount: true,
			showNavigationRowsPerPage: true,
			showNavigation: 'auto',
			sortable: false ,
			 fields: [
				{ key: 'symbol', label: 'Symbol' },
				{ key: 'company',  label: 'Company'}, 
				{ key: 'price', label: 'Price',  tmpl: Template.price,  fn: function (value) { return price ; }},
				{ key: 'delta', label: 'Delta' , tmpl: Template.delta,  fn: function (value) { return value ; }},
			] 
			           
        };
    },
   
   symbolsList: function () {        
        return SymbolList.find();;
    },
});

// Example of handling an event for the table
Template.stockSymbols.events({
  'click .reactive-table tbody tr': function (event) {
       alert("Quit clicking on the table. What's up with that?");
  }
 
  
});
