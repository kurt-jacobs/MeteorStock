import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Collection2 } from 'meteor/aldeed:collection2';
 

var Schemas= {};

Schemas.SymbolTypeSchema = new SimpleSchema({  
 	symbol: {
       type: String,
       label: "Symbol Name",
	    max: 5
    },	
  	company: {
       type: String,
       label: "Company Name",
	    max: 80
    },	  
	price: {
       type: Number,
       label: "Price",
	   decimal: true,
	   defaultValue: 0,
	   min:0,
	   max:99999999
    },
	delta: {
       type: Number,
       label: "Delta",
	   decimal: true,
	   defaultValue: 0,
	   min:0,
	   max:99999999
    }	
 });  
 
 
SymbolList.attachSchema( Schemas.SymbolTypeSchema );
 
 
 