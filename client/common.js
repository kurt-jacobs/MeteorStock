// Common utility helpers that are used in many places


// Check that 2 objects are equal
Template.registerHelper(
   "equals", function (a, b) {
      return (a === b);
});

// Format number as currency
Template.registerHelper(
  "currency",  function (value) {
        return accounting.formatMoney(value);
});
 

// Format value as an integer (don't display bids as float etc)
Template.registerHelper(
  "integer",  function (value) {
       var newnumber = Math.round(value * Math.pow(10, 0)) / Math.pow(10, 0);
        return newnumber;
});

 
 