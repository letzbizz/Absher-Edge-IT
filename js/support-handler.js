function highlightElement(event) {
   event.classList.add('p-3');
   event.classList.add('box-shadow');
   event.classList.add('w-100');
}

function removeHighlightElement(event) {
   event.classList.remove('p-3');
   event.classList.remove('box-shadow');
   event.classList.remove('w-100');
}

function highlightFooter(event) {
   event.classList.add('box-shadow');
}

function removeHighlightFooter(event) {
   event.classList.remove('box-shadow');
}

// Access Request Information Data
var accessRequestid = $('#access-request-help');
var accessRequest = '<div id="pop1" class="popbox" ><h5>Access Request</h5> <p>Service Description :  <div style="font-size: 12px;">A access request, is a "ask" to a entity or organisation asking for access to the application </div> </p>   <p>Service Level Agreement : </p> <div style="font-size: 12px; overflow: hidden;	white-space: nowrap;"> <li style="display: inline-block;">High - 10 hrs </li> <li style="display: inline-block; padding-left:10px; padding-right:10px ">Medium - 15 hrs </li>	<li style="display: inline-block;">Low - 3 Days 5 hrs </li>  </ol>  </div>';

// Communication Information Data
var communicationid = $('#communication-info');
var communicationData = '<div id="pop1" class="popbox" ><h5>Communication</h5> <p>Service Description :   <div style="font-size: 14px;">A access request, is a "ask" to a entity or organisation asking for access to the application </div> </p>   <p>Service Level Agreement : </p> <div style="font-size: 12px; overflow: hidden;	white-space: nowrap;"> <li style="display: inline-block;">High - 10 hrs </li> <li style="display: inline-block; padding-left:10px; padding-right:10px ">Medium - 15 hrs </li>	<li style="display: inline-block;">Low - 3 Days 5 hrs </li>  </ol>  </div>';

// Hardware Information Data
var hardwareid = $('#hardware-info');
var hardware = '<div id="pop1" class="popbox" ><h5>Hardware</h5> <p>Service Description :   <div style="font-size: 14px;">A access request, is a "ask" to a entity or organisation asking for access to the application </div> </p>   <p>Service Level Agreement : </p> <div style="font-size: 12px; overflow: hidden;	white-space: nowrap;"> <li style="display: inline-block;">High - 10 hrs </li> <li style="display: inline-block; padding-left:10px; padding-right:10px ">Medium - 15 hrs </li>	<li style="display: inline-block;">Low - 3 Days 5 hrs </li>  </ol>  </div>';

// Software Information Data
var softwareid = $('#software-info');
var software = '<div id="pop1" class="popbox" ><h5>Software</h5> <p>Service Description :   <div style="font-size: 14px;">A access request, is a "ask" to a entity or organisation asking for access to the application </div> </p>   <p>Service Level Agreement : </p> <div style="font-size: 12px; overflow: hidden;	white-space: nowrap;"> <li style="display: inline-block;">High - 10 hrs </li> <li style="display: inline-block; padding-left:10px; padding-right:10px ">Medium - 15 hrs </li>	<li style="display: inline-block;">Low - 3 Days 5 hrs </li>  </ol>  </div>';

// Connectivity Information Data
var connectivityid = $('#connectivity-info');
var connectivity = '<div id="pop1" class="popbox" ><h5>Connectivity</h5> <p>Service Description :   <div style="font-size: 14px;">A access request, is a "ask" to a entity or organisation asking for access to the application </div> </p>   <p>Service Level Agreement : </p> <div style="font-size: 12px; overflow: hidden;	white-space: nowrap;"> <li style="display: inline-block;">High - 10 hrs </li> <li style="display: inline-block; padding-left:10px; padding-right:10px ">Medium - 15 hrs </li>	<li style="display: inline-block;">Low - 3 Days 5 hrs </li>  </ol>  </div>';

// Network Information Data
var networkid = $('#network-info');
var network = '<div id="pop1" class="popbox" style="width:150%" ><h5>Network</h5> <p>Service Description :   <div style="font-size: 14px;">A access request, is a "ask" to a entity or organisation asking for access to the application </div> </p>   <p>Service Level Agreement : </p> <div style="font-size: 12px; overflow: hidden;	white-space: nowrap;"> <li style="display: inline-block;">High - 10 hrs </li> <li style="display: inline-block; padding-left:10px; padding-right:10px ">Medium - 15 hrs </li>	<li style="display: inline-block;">Low - 3 Days 5 hrs </li>  </ol>  </div>';

// Human Capital Information Data
var humanCapitalid = $('#human-capital-info');
var humanCapital = '<div id="pop1" class="popbox" ><h5>Human Capital</h5> <p>Service Description :   <div style="font-size: 14px;">A access request, is a "ask" to a entity or organisation asking for access to the application </div> </p>   <p>Service Level Agreement : </p> <div style="font-size: 12px; overflow: hidden;	white-space: nowrap;"> <li style="display: inline-block;">High - 10 hrs </li> <li style="display: inline-block; padding-left:10px; padding-right:10px ">Medium - 15 hrs </li>	<li style="display: inline-block;">Low - 3 Days 5 hrs </li>  </ol>  </div>';

// IT Infrastructure Information Data
var infrastructureid = $('#infrastructure-info');
var infrastructureData = '<div id="pop1" class="popbox" ><h5>IT Infrastructure</h5> <p>Service Description :   <div style="font-size: 14px;">A access request, is a "ask" to a entity or organisation asking for access to the application </div> </p>   <p>Service Level Agreement : </p> <div style="font-size: 12px; overflow: hidden;	white-space: nowrap;"> <li style="display: inline-block;">High - 10 hrs </li> <li style="display: inline-block; padding-left:10px; padding-right:10px ">Medium - 15 hrs </li>	<li style="display: inline-block;">Low - 3 Days 5 hrs </li>  </ol>  </div>';

// IT Security Information Data
var securityid = $('#security-info');
var securityData = '<div id="pop1" class="popbox" ><h5>IT Security</h5> <p>Service Description :   <div style="font-size: 14px;">A access request, is a "ask" to a entity or organisation asking for access to the application </div> </p>   <p>Service Level Agreement : </p> <div style="font-size: 12px; overflow: hidden;	white-space: nowrap;"> <li style="display: inline-block;">High - 10 hrs </li> <li style="display: inline-block; padding-left:10px; padding-right:10px ">Medium - 15 hrs </li>	<li style="display: inline-block;">Low - 3 Days 5 hrs </li>  </ol>  </div>';

// Data Management Information Data
var dataManagementid = $('#dataManagement-info');
var dataManagementInfo = '<div id="pop1" class="popbox" ><h5>Data Management</h5> <p>Service Description :   <div style="font-size: 14px;">A access request, is a "ask" to a entity or organisation asking for access to the application </div> </p>   <p>Service Level Agreement : </p> <div style="font-size: 12px; overflow: hidden;	white-space: nowrap;"> <li style="display: inline-block;">High - 10 hrs </li> <li style="display: inline-block; padding-left:10px; padding-right:10px ">Medium - 15 hrs </li>	<li style="display: inline-block;">Low - 3 Days 5 hrs </li>  </ol>  </div>';

// App Management Information Data
var appManagementid = $('#appManagement-info');
var appManagementData = '<div id="pop1" class="popbox" ><h5>App Management</h5> <p>Service Description :   <div style="font-size: 14px;">A access request, is a "ask" to a entity or organisation asking for access to the application </div> </p>   <p>Service Level Agreement : </p> <div style="font-size: 12px; overflow: hidden;	white-space: nowrap;"> <li style="display: inline-block;">High - 10 hrs </li> <li style="display: inline-block; padding-left:10px; padding-right:10px ">Medium - 15 hrs </li>	<li style="display: inline-block;">Low - 3 Days 5 hrs </li>  </ol>  </div>';

// New Project Information Data
var newProjectid = $('#newProject-info');
var newProjectData = '<div id="pop1" class="popbox" style="width:150%" ><h5>New Project</h5> <p>Service Description :   <div style="font-size: 14px;">A access request, is a "ask" to a entity or organisation asking for access to the application </div> </p>   <p><b>Service Level Agreement :</b> <ol style="font-size: 12px;"> <li>High - 10 hrs </li> <li>Medium - 15 hrs </li>	<li>Low - 3 Days 5 hrs </li>  </ol></p> </div>';

var tOut;

// Helper method for Access Request Tab Hover In & out
$('.access-request').hover(function () {
   tOut = setTimeout(
      function () {
         accessRequestid.html(accessRequest);
      }
      , 1000);
}, function () {
   clearTimeout(tOut);
   accessRequestid.html(''); //<-- Causes dlg text to appear/disappear as you move mouse on/off grid box.
});

// Helper method for Communication Tab Hover In
$('.communication').hover(function () {
   tOut = setTimeout(
      function () {
         communicationid.html(communicationData);
      }
      , 1000);
}, function () {
   clearTimeout(tOut);
   communicationid.html(''); //<-- Causes dlg text to appear/disappear as you move mouse on/off grid box.
});

// Helper method for Hardware Tab Hover In
$('.hardware').hover(function () {
   tOut = setTimeout(
      function () {
         hardwareid.html(hardware);
      }
      , 1000);
}, function () {
   clearTimeout(tOut);
   hardwareid.html(''); //<-- Causes dlg text to appear/disappear as you move mouse on/off grid box.
});

// Helper method for Software Tab Hover In
$('.software').hover(function () {
   tOut = setTimeout(
      function () {
         softwareid.html(software);
      }
      , 1000);
}, function () {
   clearTimeout(tOut);
   softwareid.html(''); //<-- Causes dlg text to appear/disappear as you move mouse on/off grid box.
});

// Helper method for Connectivity Tab Hover In
$('.connectivity').hover(function () {
   tOut = setTimeout(
      function () {
         connectivityid.html(connectivity);
      }
      , 1000);
}, function () {
   clearTimeout(tOut);
   connectivityid.html(''); //<-- Causes dlg text to appear/disappear as you move mouse on/off grid box.
});

// Helper method for Network Tab Hover In
$('.network').hover(function () {
   tOut = setTimeout(
      function () {
         networkid.html(network);
      }
      , 1000);
}, function () {
   clearTimeout(tOut);
   networkid.html(''); //<-- Causes dlg text to appear/disappear as you move mouse on/off grid box.
});

// Helper method for Human Capital Tab Hover In
$('.humancapital').hover(function () {
   tOut = setTimeout(
      function () {
         humanCapitalid.html(humanCapital);
      }
      , 1000);
}, function () {
   clearTimeout(tOut);
   humanCapitalid.html(''); //<-- Causes dlg text to appear/disappear as you move mouse on/off grid box.
});

// Helper method for Infrastructure Tab Hover In
$('.infrastructure').hover(function () {
   tOut = setTimeout(
      function () {
         infrastructureid.html(infrastructureData);
      }
      , 1000);
}, function () {
   clearTimeout(tOut);
   infrastructureid.html(''); //<-- Causes dlg text to appear/disappear as you move mouse on/off grid box.
});

// Helper method for Security Tab Hover In
$('.security').hover(function () {
   tOut = setTimeout(
      function () {
         securityid.html(securityData);
      }
      , 1000);
}, function () {
   clearTimeout(tOut);
   securityid.html(''); //<-- Causes dlg text to appear/disappear as you move mouse on/off grid box.
});

// Helper method for Data Management Tab Hover In
$('.dataManagement').hover(function () {
   tOut = setTimeout(
      function () {
         dataManagementid.html(dataManagementInfo);
      }
      , 1000);
}, function () {
   clearTimeout(tOut);
   dataManagementid.html(''); //<-- Causes dlg text to appear/disappear as you move mouse on/off grid box.
});

// Helper method for App Management Tab Hover In
$('.appManagement').hover(function () {
   tOut = setTimeout(
      function () {
         appManagementid.html(appManagementData);
      }
      , 1000);
}, function () {
   clearTimeout(tOut);
   appManagementid.html(''); //<-- Causes dlg text to appear/disappear as you move mouse on/off grid box.
});

// Helper method for New Project Tab Hover In
$('.newProject').hover(function () {
   tOut = setTimeout(
      function () {
         newProjectid.html(newProjectData);
      }
      , 1000);
}, function () {
   clearTimeout(tOut);
   newProjectid.html(''); //<-- Causes dlg text to appear/disappear as you move mouse on/off grid box.
});
