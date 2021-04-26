
var ctx = document.getElementById("myChart").getContext("2d");
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  // any initialisation options go here
});

input.addEventListener("countrychange", function() {
  var iti = window.intlTelInputGlobals.getInstance(document.querySelector("#phone"));
  var element = iti.getSelectedCountryData();
  console.log()
  document.getElementById("dial").value = "+"+element.dialCode;
});



function grafica(){
  const data_ = {
    labels: ['Bonos Extranjeros', 'Criptoactivos', 'Factoring Latam y USA', 'Mercado Inmobiliario', 'Factoring Internacional', 'Divisas','Fondos Satélite'],
    datasets: [{
      label: '%',
      backgroundColor:["#a4c0ff", "#6795fd","#3a6ddf", "#2755bd","#1c4399", "#0c4391","#072146"],
      borderWidth: 2,
      borderRadius: 5,
      borderSkipped: false,
      data: [5,7,9,11,13,16,27],
    }]
  };
  var delayed
  const animation = {
    onComplete: () => {
      delayed = true;
    },
    delay: (context) => {
      let delay = 0;
      if (context.type === 'data' && context.mode === 'default' && !delayed) {
        delay = context.dataIndex * 300 + context.datasetIndex * 100;
      }
      return delay;
    },
    
  };


  const config = {  
    responsive:true,
    animation,
    plugins: {
      legend: {
        position: 'right',
      }
    }
  };

  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: data_,
    options: config
  });

}



window.addEventListener('scroll', () => {
  let scrollPage = window.pageYOffset;
  let portafolio = document.getElementById('portafolio').offsetTop;

  if(scrollPage > portafolio - 400){
    grafica();
  }
})