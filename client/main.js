import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './templates/stockSymbols.html';
import './templates/main.html';
import './templates/price.html';
import './templates/delta.html';


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
				{ key: 'price', label: 'Price',  tmpl: Template.price,  fn: function (value) { return value.toFixed(2) ; }},
				{ key: 'delta', label: 'Delta' , tmpl: Template.delta,  fn: function (value) { return  value.toFixed(2); }},
			] 
			           
        };
    },

   symbolsList: function () {        
        return SymbolList.find();;
    },
});

Template.stockSymbols.events({
  'click .reactive-table tbody tr': function (event) {
       alert("Quit clicking on the table. What's up with that?");
  }
 
  
});
