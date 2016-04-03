import { Mongo } from 'meteor/mongo';
import { Schemas } from 'meteor/aldeed:simple-schema';


seedSymbols = function (){  
   if (SymbolList.find().count() == 0)   {  
     	SymbolList.insert( { "symbol" : "ATVI" ,  "company" : "Activision Blizzard Inc" ,  "price" : "34.42" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "ADBE" ,  "company" : "Adobe Systems Incorporated" ,  "price" : "95.15" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "AKAM" ,  "company" : "Akamai Technologies Inc." ,  "price" : "55.22" ,  "delta" : "0.0" }); 
		SymbolList.insert( { "symbol" : "GOOG" ,  "company" : "Alphabet Inc." ,  "price" : "749.91" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "AMZN" ,  "company" : "Amazon.com Inc." ,  "price" : "598.5" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "AAL" ,  "company" : "American Airlines Group Inc." ,  "price" : "39.52" ,  "delta" : "0.0" }); 
		SymbolList.insert( { "symbol" : "AAPL" ,  "company" : "Apple Inc." ,  "price" : "109.99" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "AMAT" ,  "company" : "Applied Materials Inc." ,  "price" : "21.42" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "ADSK" ,  "company" : "Autodesk Inc." ,  "price" : "57.77" ,  "delta" : "0.0" }); 
		SymbolList.insert( { "symbol" : "BIDU" ,  "company" : "Baidu Inc." ,  "price" : "190.32" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "BBBY" ,  "company" : "Bed Bath &amp; Beyond Inc." ,  "price" : "49.51" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "BIIB" ,  "company" : "Biogen Inc." ,  "price" : "260.54" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "BMRN" ,  "company" : "BioMarin Pharmaceutical Inc." ,  "price" : "84.66" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "AVGO" ,  "company" : "Broadcom Limited" ,  "price" : "157.8" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "CA" ,  "company" : "CA Inc." ,  "price" : "30.99" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "CELG" ,  "company" : "Celgene Corporation" ,  "price" : "101.19" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "CERN" ,  "company" : "Cerner Corporation" ,  "price" : "54.08" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "CHTR" ,  "company" : "Charter Communications Inc." ,  "price" : "203.47" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "CSCO" ,  "company" : "Cisco Systems Inc." ,  "price" : "28.68" ,  "delta" : "0.0" });	 
		SymbolList.insert( { "symbol" : "COST" ,  "company" : "Costco Wholesale Corporation" ,  "price" : "158.25" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "CSX" ,  "company" : "CSX Corporation" ,  "price" : "25.62" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "CTRP" ,  "company" : "Ctrip.com International Ltd." ,  "price" : "44.84" ,  "delta" : "0.0" }); 
		SymbolList.insert( { "symbol" : "DISCK" ,  "company" : "Discovery Communications Inc." ,  "price" : "27.48" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "DISH" ,  "company" : "DISH Network Corporation" ,  "price" : "46.2775" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "DLTR" ,  "company" : "Dollar Tree Inc." ,  "price" : "83.31" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "EBAY" ,  "company" : "eBay Inc." ,  "price" : "23.88" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "EA" ,  "company" : "Electronic Arts Inc." ,  "price" : "65.92" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "EXPE" ,  "company" : "Expedia Inc." ,  "price" : "108.2" ,  "delta" : "0.0" }); 
		SymbolList.insert( { "symbol" : "ILMN" ,  "company" : "Illumina Inc." ,  "price" : "166.86" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "INCY" ,  "company" : "Incyte Corporation" ,  "price" : "73.3" ,  "delta" : "0.0" });	 
		SymbolList.insert( { "symbol" : "INTU" ,  "company" : "Intuit Inc." ,  "price" : "104.69" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "ISRG" ,  "company" : "Intuitive Surgical Inc." ,  "price" : "606.5" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "JD" ,  "company" : "JD.com Inc." ,  "price" : "26.76" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "LRCX" ,  "company" : "Lam Research Corporation" ,  "price" : "82.93" ,  "delta" : "0.0" });	 
		SymbolList.insert( { "symbol" : "LMCK" ,  "company" : "Liberty Media Corporation" ,  "price" : "38.31" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "LLTC" ,  "company" : "Linear Technology Corporation" ,  "price" : "45" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "MAR" ,  "company" : "Marriott International" ,  "price" : "67.13" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "MAT" ,  "company" : "Mattel Inc." ,  "price" : "34.26" ,  "delta" : "0.0" }); 
		SymbolList.insert( { "symbol" : "MU" ,  "company" : "Micron Technology Inc." ,  "price" : "11.03" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "MSFT" ,  "company" : "Microsoft Corporation" ,  "price" : "55.55" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "MNST" ,  "company" : "Monster Beverage Corporation" ,  "price" : "134.79" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "MYL" ,  "company" : "Mylan N.V." ,  "price" : "47.5" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "NTAP" ,  "company" : "NetApp Inc." ,  "price" : "26.97" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "NTES" ,  "company" : "NetEase Inc." ,  "price" : "143.02" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "NFLX" ,  "company" : "Netflix Inc." ,  "price" : "105.68" ,  "delta" : "0.0" });	 
		SymbolList.insert( { "symbol" : "ROST" ,  "company" : "Ross Stores Inc." ,  "price" : "58.64" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "STX" ,  "company" : "Seagate Technology PLC" ,  "price" : "33.69" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "SIRI" ,  "company" : "Sirius XM Holdings Inc." ,  "price" : "3.96" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "SWKS" ,  "company" : "Skyworks Solutions Inc." ,  "price" : "78.18" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "SBUX" ,  "company" : "Starbucks Corporation" ,  "price" : "61.01" ,  "delta" : "0.0" }); 
		SymbolList.insert( { "symbol" : "SYMC" ,  "company" : "Symantec Corporation" ,  "price" : "18.41" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "TMUS" ,  "company" : "T-Mobile US Inc." ,  "price" : "39.36" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "TSLA" ,  "company" : "Tesla Motors Inc." ,  "price" : "237.59" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "KHC" ,  "company" : "The Kraft Heinz Company" ,  "price" : "79.08" ,  "delta" : "0.0" });	 
		SymbolList.insert( { "symbol" : "VOD" ,  "company" : "Vodafone Group Plc" ,  "price" : "31.73" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "WBA" ,  "company" : "Walgreens Boots Alliance Inc." ,  "price" : "86.7" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "WDC" ,  "company" : "Western Digital Corporation" ,  "price" : "46.6" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "WFM" ,  "company" : "Whole Foods Market Inc." ,  "price" : "30.52" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "XLNX" ,  "company" : "Xilinx Inc." ,  "price" : "47.62" ,  "delta" : "0.0" });
		SymbolList.insert( { "symbol" : "YHOO" ,  "company" : "Yahoo! Inc." ,  "price" : "36.48" ,  "delta" : "0.0" });

	}	
}