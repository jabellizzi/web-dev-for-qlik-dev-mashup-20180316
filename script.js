// Define the baseUrl where the qlik.js file will bel loaded from
require.config({
  baseUrl: 'http://localhost:4848/resources'
});

var app;
var showSubject = true;
/*
  Load in qlik.js file using RequireJS so that we can
  use the qlik object within our callback function
*/
require(['js/qlik'], function(qlik) {
  // Open the Helpdesk Management app using openApp() method
  app = qlik.openApp('Helpdesk Management');

  // Use getObject() to add Qlik Sense charts
  app.getObject('kpi-0', 'jTuCwkB');
  app.getObject('kpi-1', 'JARjh');
  app.getObject('kpi-2', 'JsVPe');
  app.getObject('scatter-0', '298bbd6d-f23d-4469-94a2-df243d680e0c');
  app.getObject('bar-0', 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398');
  app.getObject('pie-0', 'PAppmU');
  app.getObject('line-1', 'xfvKMP');
  app.getObject('table-0', 'uETyGUP');


  // Use getObject() to add Line Chart
  app.getObject('chart-3', 'hRZaKk');


  app.visualization.create(
    'table',
    ['CaseNumber', 'Subject', '[Case Owner]']
  ).then(function(vis) {
    vis.show('table-1');
  });
  
});

function subjectFunction() {
  if(showSubject === true) {
    app.visualization.create(
      'table',
      ['CaseNumber', 'Subject', '[Case Owner]']
    ).then(function(vis) {
      vis.show('table-1');
    });

    showSubject = false;
  }
  else if(showSubject === false) {
    app.visualization.create(
      'table',
      ['CaseNumber', '[Case Owner]']
    ).then(function(vis) {
      vis.show('table-1');
    });

    showSubject = true;
  }
}


function whatIf(event) {
  var sliderValue = event.target.valueAsNumber;
  app.variable.setNumValue('vWhatIf', sliderValue);

  var sliderValueElement = document.getElementById('slider-value');
  sliderValueElement.innerHTML = sliderValue;
}


function changeSheet(sheet) {
  var dashboardSheet = document.getElementById('dashboard');
  var performanceSheet = document.getElementById('performance');

  if(sheet === 'dashboard') {
    performanceSheet.style.display = 'none';
    dashboardSheet.style.display = 'block';
  }
  else if(sheet === 'performance') {
    dashboardSheet.style.display = 'none';
    performanceSheet.style.display = 'block';
  }
}