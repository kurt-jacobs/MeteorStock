import { Mongo } from 'meteor/mongo';
import { Schemas } from 'meteor/aldeed:simple-schema';


seedSymbols = function (){  
   if (SymbolList.find().count() == 0)   {  
      SymbolList.insert( { "symbol" : "ATVI" ,  "company" : "Activision Blizzard Inc" ,  "price" : 34.42,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "ADBE" ,  "company" : "Adobe Systems Incorporated" ,  "price" : 95.15,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "AAL" ,  "company" : "American Airlines Group Inc." ,  "price" : 39.52,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "AMGN" ,  "company" : "Amgen Inc." ,  "price" : 154.16,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "ADI" ,  "company" : "Analog Devices Inc." ,  "price" : 58.98,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "AAPL" ,  "company" : "Apple Inc." ,  "price" : 109.99,  "delta" : 0.0 }); 
		SymbolList.insert( { "symbol" : "BMRN" ,  "company" : "BioMarin Pharmaceutical Inc." ,  "price" : 84.66,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "AVGO" ,  "company" : "Broadcom Limited" ,  "price" : 157.8,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "CA" ,  "company" : "CA Inc." ,  "price" : 30.99,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "CMCSA" ,  "company" : "Comcast Corporation" ,  "price" : 61.87,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "CSX" ,  "company" : "CSX Corporation" ,  "price" : 25.62,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "DLTR" ,  "company" : "Dollar Tree Inc." ,  "price" : 83.31,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "EBAY" ,  "company" : "eBay Inc." ,  "price" : 23.88,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "EA" ,  "company" : "Electronic Arts Inc." ,  "price" : 65.92,  "delta" : 0.0 }); 
		SymbolList.insert( { "symbol" : "INTC" ,  "company" : "Intel Corporation" ,  "price" : 32.45,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "INTU" ,  "company" : "Intuit Inc." ,  "price" : 104.69,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "ISRG" ,  "company" : "Intuitive Surgical Inc." ,  "price" : 606.5,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "JD" ,  "company" : "JD.com Inc." ,  "price" : 26.76,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "LBTYA" ,  "company" : "Liberty Global plc" ,  "price" : 38.92,  "delta" : 0.0 });  
		SymbolList.insert( { "symbol" : "MAR" ,  "company" : "Marriott International" ,  "price" : 67.13,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "MAT" ,  "company" : "Mattel Inc." ,  "price" : 34.26,  "delta" : 0.0 }); 
		SymbolList.insert( { "symbol" : "NTAP" ,  "company" : "NetApp Inc." ,  "price" : 26.97,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "NTES" ,  "company" : "NetEase Inc." ,  "price" : 143.02,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "NFLX" ,  "company" : "Netflix Inc." ,  "price" : 105.68,  "delta" : 0.0 }); 
		SymbolList.insert( { "symbol" : "PCAR" ,  "company" : "PACCAR Inc." ,  "price" : 54.21,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "PAYX" ,  "company" : "Paychex Inc." ,  "price" : 54.17,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "PYPL" ,  "company" : "PayPal Holdings Inc." ,  "price" : 39.4,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "QCOM" ,  "company" : "QUALCOMM Incorporated" ,  "price" : 50.88,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "SIRI" ,  "company" : "Sirius XM Holdings Inc." ,  "price" : 3.96,  "delta" : 0.0 }); 
		SymbolList.insert( { "symbol" : "SBUX" ,  "company" : "Starbucks Corporation" ,  "price" : 61.01,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "SRCL" ,  "company" : "Stericycle Inc." ,  "price" : 127.63,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "SYMC" ,  "company" : "Symantec Corporation" ,  "price" : 18.41,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "TMUS" ,  "company" : "T-Mobile US Inc." ,  "price" : 39.36,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "TSLA" ,  "company" : "Tesla Motors Inc." ,  "price" : 237.59,  "delta" : 0.0 }); 
		SymbolList.insert( { "symbol" : "FOX" ,  "company" : "Twenty-First Century Fox Inc." ,  "price" : 29.12,  "delta" : 0.0 }); 		SymbolList.insert( { "symbol" : "VIAB" ,  "company" : "Viacom Inc." ,  "price" : 41.17,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "VOD" ,  "company" : "Vodafone Group Plc" ,  "price" : 31.73,  "delta" : 0.0 }); 
		SymbolList.insert( { "symbol" : "WFM" ,  "company" : "Whole Foods Market Inc." ,  "price" : 30.52,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "XLNX" ,  "company" : "Xilinx Inc." ,  "price" : 47.62,  "delta" : 0.0 });
		SymbolList.insert( { "symbol" : "YHOO" ,  "company" : "Yahoo! Inc." ,  "price" : 36.48,  "delta" : 0.0 });


	}	
}