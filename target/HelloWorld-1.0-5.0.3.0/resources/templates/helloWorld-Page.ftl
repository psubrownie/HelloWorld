<@resource.javascript>
function cmpDisplay(obj){
	var span = document.getElementById('cmpSpan');
	var s = document.getElementById('CMP').value;

	/*
	for(var i=0;i<span.children.length;i++){
		span.children[i].style.display='none';
	}
	span.children[s].style.display='';
	for(var i=1;i<=span.children.length;i++){
		document.getElementById('cmpPic'+i).style.display='none'
	}
	*/
	document.getElementById('cmpPic1').style.display='none'
	document.getElementById('cmpPic2').style.display='none'
	document.getElementById('cmpPic3').style.display='none'
	document.getElementById('cmpPic4').style.display='none'
	
	document.getElementById('cmpPic'+s).style.display=''
}
</@resource.javascript>
        	  
            <p style="display:none;">  
                <@s.text name="admin.decorator.helloworld.welcome.message"/>
            </p>
            <select id="CMP">
            <option value="1">FY12</option>
            <option value="2">FY13</option>
            <option value="3">FY14</option>
            <option value="4">FY15</option>
            </select>
            GAP Pivot Chart
            <input type="button" onclick="cmpDisplay(this);" value="Display"/>
            <br/>
            <span id="cmpSpan">
	            <img id="cmpPic1" src="<@s.url value='/plugins/HelloWorld/resources/images/pic2.png'/>" style="display:none;"/>
	            <img id="cmpPic2" src="<@s.url value='/plugins/HelloWorld/resources/images/pic3.png'/>" style="display:none;"/>
	            <img id="cmpPic3" src="<@s.url value='/plugins/HelloWorld/resources/images/pic4.png'/>" style="display:none;"/>
	            <img id="cmpPic4" src="<@s.url value='/plugins/HelloWorld/resources/images/pic5.png'/>" style="display:none;"/>
			</span>
            <br/>  
			<div id="basePoint"></div>


             