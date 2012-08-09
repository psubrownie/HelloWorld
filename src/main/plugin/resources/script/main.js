gadgets.util.registerOnLoadHandler(function() {
  // add code that should run on page load here

  // resize app window to fit content
  // gadgets.window.adjustHeight();
  
  Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.toolbar.Paging',
    'Ext.ModelManager',
    'Ext.layout.*'
]);

Ext.onReady(function(){

    // Define data model
    Ext.define('Company', {
        extend: 'Ext.data.Model',
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            'name', 'POC', 'phone'            
        ],
        idProperty: 'id'
    });
 Ext.define('Resource', {
        extend: 'Ext.data.Model',
        fields: ['ID',
            {
                name: 'SumbitDate',
                type: 'date'
            },
            'Budget_ID','CmpntCode','In_Num','TreasuryCode','ProgramElement','Subcategory',
			'ProjectName','ESSGCognizant','Pay_Nonpay','PY','CY','BY0','BY1','BY2','BY3',
			'BY4','BY5','Submitter'
        ],
        idProperty: 'id'
    });
	
	
    // Create data store
	/*
    var customers = Ext.create('Ext.data.Store', {
        pageSize: 25,
        model: 'Company',
        proxy: {
            url: 'concat?container=default&gadget=http%3A%2F%2Fapphosting.jivesoftware.com%2Fapps%2Fdev%2Ftitaniatesting%2Fapp.xml&debug=0&nocache=1&type=js&1=http%3A%2F%2Fapphosting.jivesoftware.com%2Fapps%2Fdev%2Ftitaniatesting%2F%2Fcustomers.xml',
			 type: 'ajax',
			 headers:{
				'Content-type': 'application/json','Content-Type': 'application/json'
			},
			reader:  {
				type: 'xml',
				record: 'customer',
				totalProperty: 'totalCount'
			},
        },
		remoteSort: true, // to enable sorting
		sortInfo: { // the default sort
			field: 'name',
			direction: 'ASC' | 'DESC'
		}

        
        //sorters: [{
        //    property: 'id',
        //   direction: 'ASC'
        //}]
    });
	*/
var data = [

["1","","","","","T","","","Project1","","PAY","2012","2011","1000","1250","1300","1300","1300","1300","Tom","9/15/2011"]
,["2","","","","","S","","","Project2","","PAY","2012","2011","2880","3690","4320","2160","3510","3870","Joe","8/24/2011"]
,["3","","","","","J","","","Project3","","NO_PAY","2012","2011","3510","2700","2610","3060","3690","3870","Mike","12/21/2011"]
,["4","","","","","C","","","Project4","","PAY","2012","2011","4320","2790","3420","1800","2610","1800","Susan","10/25/2011"]
,["5","","","","","R","","","Project5","","PAY","2012","2011","4230","4320","2430","2880","2970","2430","Mike","2/9/2012"]
,["6","","","","","T","","","Project6","","NO_PAY","2012","2011","2520","3060","3150","2250","4320","3060","Joe","4/10/2012"]
,["7","","","","","S","","","Project7","","PAY","2012","2011","1980","4050","2520","3330","3600","2520","Joe","7/14/2011"]
,["8","","","","","J","","","Project8","","PAY","2012","2011","2160","2610","2430","2880","2070","2880","John","5/29/2012"]
,["9","","","","","C","","","Project9","","NO_PAY","2012","2011","3330","3420","2880","1980","2880","3330","Joe","4/24/2012"]
,["10","","","","","R","","","Project10","","PAY","2012","2011","2070","2070","4320","3420","2700","1800","Tom","4/21/2012"]
,["11","","","","","T","","","Project11","","PAY","2012","2011","3690","3240","2520","2430","3420","2880","Mike","12/14/2011"]
,["12","","","","","S","","","Project12","","NO_PAY","2012","2011","4140","2700","3780","3510","3690","3690","Tom","12/2/2011"]
,["13","","","","","J","","","Project13","","PAY","2012","2011","3600","2880","2880","4140","3960","1800","Joe","10/7/2011"]
,["14","","","","","C","","","Project14","","PAY","2012","2011","2610","3870","1980","2430","2250","4140","Joe","3/14/2012"]
,["15","","","","","R","","","Project15","","NO_PAY","2012","2010","2430","3870","3330","4050","3060","3960","Susan","6/21/2012"]
,["16","","","","","T","","","Project16","","PAY","2012","2010","3960","1890","3600","3870","2610","3960","Susan","7/25/2011"]
,["17","","","","","S","","","Project17","","PAY","2012","2010","1800","2790","4230","3690","4320","2340","Tom","2/7/2012"]
,["18","","","","","J","","","Project18","","NO_PAY","2012","2010","3420","4320","2970","2430","4140","4230","Tom","9/10/2011"]
,["19","","","","","C","","","Project19","","PAY","2013","2010","2340","2070","2520","3060","1890","2340","Tom","4/14/2012"]
,["20","","","","","R","","","Project20","","PAY","2013","2010","2970","3420","3960","3870","2160","3420","Tom","6/14/2012"]
,["21","","","","","T","","","Project21","","NO_PAY","2013","2010","2430","4230","3780","3510","2610","2610","Mike","12/23/2011"]
,["22","","","","","S","","","Project22","","PAY","2013","2010","4320","4230","2340","1890","1800","3780","Mike","1/22/2012"]
,["23","","","","","J","","","Project23","","PAY","2013","2010","4050","3690","1800","2070","4320","2340","Mike","4/10/2012"]
,["24","","","","","C","","","Project24","","NO_PAY","2013","2010","2430","3870","2160","2340","2340","3690","Mike","3/8/2012"]
,["25","","","","","R","","","Project25","","PAY","2013","2010","2700","1890","2970","2070","4320","3690","John","10/30/2011"]
,["26","","","","","T","","","Project26","","PAY","2013","2010","3240","3060","3510","2790","2880","1800","Joe","8/18/2011"]
,["27","","","","","S","","","Project27","","NO_PAY","2013","2010","2790","4140","2430","3420","2700","2700","Susan","11/23/2011"]
,["28","","","","","J","","","Project28","","PAY","2013","2010","2430","2160","3600","4320","3330","3960","John","4/7/2012"]
,["29","","","","","C","","","Project29","","PAY","2013","2010","3060","2160","2250","2790","3600","1800","Susan","11/20/2011"]
,["30","","","","","R","","","Project30","","NO_PAY","2013","2010","2340","3420","2790","4140","2250","2070","Tom","3/21/2012"]
,["31","","","","","T","","","Project31","","PAY","2013","2010","2970","2790","1800","2070","1800","3780","Bill","5/4/2012"]
,["32","","","","","S","","","Project32","","PAY","2013","2010","3870","3960","1980","2070","1890","3780","John","9/15/2011"]
,["33","","","","","J","","","Project33","","NO_PAY","2013","2010","2610","3600","3150","3240","3870","1890","Susan","2/9/2012"]
,["34","","","","","C","","","Project34","","PAY","2013","2010","3780","3510","2880","2070","3780","2700","Tom","8/18/2011"]
,["35","","","","","R","","","Project35","","PAY","2013","2010","2340","2070","2070","1800","3240","2610","Tom","9/15/2011"]
,["36","","","","","T","","","Project36","","NO_PAY","2013","2010","3060","3780","2610","4050","2700","1800","Tom","1/4/2012"]
,["37","","","","","S","","","Project37","","PAY","2013","2010","2880","3780","3510","4320","2250","3600","Mike","2/24/2012"]
,["38","","","","","J","","","Project38","","PAY","2013","2010","2070","4050","3960","2880","3060","3420","Susan","12/13/2011"]
,["39","","","","","C","","","Project39","","NO_PAY","2013","2010","1800","1890","4140","4230","3060","2430","Mike","4/11/2012"]
,["40","","","","","R","","","Project40","","PAY","2013","2010","2430","3600","2160","4230","2070","3870","Mike","5/28/2012"]
,["41","","","","","T","","","Project41","","PAY","2013","2010","3690","2970","3780","3150","2610","2880","John","10/22/2011"]
,["42","","","","","S","","","Project42","","NO_PAY","2013","2010","2880","1800","2880","3690","4230","3960","John","7/17/2011"]
,["43","","","","","J","","","Project43","","PAY","2013","2010","2430","2610","2970","2790","4230","3150","Mike","12/8/2011"]
,["44","","","","","C","","","Project44","","PAY","2013","2010","2520","2880","3960","1980","2790","1890","John","7/28/2011"]
,["45","","","","","R","","","Project45","","NO_PAY","2013","2010","1890","3690","4050","2250","3960","2520","Bill","1/8/2012"]
,["46","","","","","T","","","Project46","","PAY","2013","2010","1890","4230","2520","2430","2700","3240","John","12/7/2011"]
,["47","","","","","S","","","Project47","","PAY","2013","2010","3780","3510","2880","2070","2250","1980","Tom","10/17/2011"]
,["48","","","","","J","","","Project48","","NO_PAY","2013","2010","3600","1890","1980","4230","2970","2340","Bill","8/19/2011"]
,["49","","","","","C","","","Project49","","PAY","2013","2010","2790","2430","2160","3600","4230","3510","Joe","3/12/2012"]
,["50","","","","","R","","","Project50","","PAY","2013","2010","3960","3510","2070","3960","3060","2430","Mike","4/4/2012"]

];
var store = Ext.create('Ext.data.ArrayStore', {
		pageSize: 10,
	    fields: ['ID',
            {
                name: 'SumbitDate',
                type: 'date'
            },
            'Budget_ID','CmpntCode','In_Num','TreasuryCode','ProgramElement','Subcategory',
			'ProjectName','ESSGCognizant','Pay_Nonpay','PY','CY','BY0','BY1','BY2','BY3',
			'BY4','BY5','Submitter'
        ],
	    data: data
	});
    // Create data grid
    var grid = Ext.create('Ext.grid.Panel', {
        renderTo: 'basePoint',
        width: 1100,
        height: 400,
        store: store,
        columns: [
           {text:'Budget_ID', dataIndex: 'Budget_ID'},
		{text:'CmpntCode', dataIndex: 'CmpntCode'},
		{text:'In_Num', dataIndex: 'In_Num'},
		{text:'TreasuryCode', dataIndex: 'TreasuryCode'},
		{text:'ProgramElement', dataIndex: 'ProgramElement'},
		{text:'Subcategory', dataIndex: 'Subcategory'},
		{text:'ProjectName', dataIndex: 'ProjectName'},
		{text:'ESSGCognizant', dataIndex: 'ESSGCognizant'},
		{text:'Pay_Nonpay', dataIndex: 'Pay_Nonpay'},
            {
                text: 'SubmitDate',
                dataIndex: 'SumbitDate'
            },
            {
                text: 'PY',
                dataIndex: 'PY'
            },
            {
                text: 'CY',
                dataIndex: 'CY'
            },
            {
                text: 'BY0',
                dataIndex: 'BY0'
            },
            {
                text: 'BY1',
                dataIndex: 'BY1'
            },
            {
                text: 'BY2',
                dataIndex: 'BY2'
            },
            {
                text: 'BY3',
                dataIndex: 'BY3'
            },
            {
                text: 'BY4',
                dataIndex: 'BY4'
            },
            {
                text: 'BY5',
                dataIndex: 'BY5'
            }			,
            {
                text: 'Submitter',
                dataIndex: 'Submitter'
            }
        ],
        bbar: Ext.create('Ext.PagingToolbar', {
            store: store,
            displayInfo: true,
            displayMsg: 'Displaying resources {0} - {1} of {2}',
            emptyMsg: "No resource to display"
        })
    });

    // Load first data page
    //store.loadPage(1);

});

});
