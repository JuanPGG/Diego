
var ctx = document.getElementById("myChart").getContext("2d");
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  // any initialisation options go here
});



const data_ = {
  labels: ['Bonos Extranjeros', 'Criptoactivos', 'Factoring Latam y USA', 'Mercado Inmobiliario', 'Factoring Internacional', 'Divisas','Fondos Satélite'],
  datasets: [{
    label: '%',
    borderColor: "#072146",
    backgroundColor: ["#072146","#072146","#072146","#072146","#072146","#072146","#072146"],
    borderWidth: 1,
    radius: 0,
    data: [5,7,9,11,13,16,27,29],
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
      position: 'top',
    },
    title: {
      display: false
    }
  }
};

var myChart = new Chart(ctx, {
  type: 'bar',
  data: data_,
  options: config
});

