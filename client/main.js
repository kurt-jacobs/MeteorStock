import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
 

import './main.html';

Template.stockSymbolsTemplate.onCreated(function helloOnCreated() {
   var self = this;
   self.subscribe('symbols'); 
});

Template.stockSymbolsTemplate.helpers({

   settings: function () {
        console.log("Called stock settings");
        return {
            collection: SymbolList,
            rowsPerPage: 20,
            showFilter: false,
			showRowCount: false,
			showNavigationRowsPerPage: false,
			showNavigation: 'auto',
			sortable: false ,
			 fields: [
				{ key: 'symbol', label: 'Symbol' },
				{ key: 'company',  label: 'Company'}, 
				{ key: 'price', label: 'Price',   fn: function (value) { return accounting.formatMoney(value); }},
			] 
			           
        };
    },

   symbolsList: function () {        
        return SymbolList.find();;
    },
});

Template.stockSymbolsTemplate.events({
  
  
});
