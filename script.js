const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


 // JavaScript for Tooltip on Metrics
 const metricElements = document.querySelectorAll('.metric');

 metricElements.forEach(metric => {
	 metric.addEventListener('mouseenter', () => {
		 const tooltip = document.createElement('div');
		 tooltip.classList.add('tooltip');
		 tooltip.textContent = metric.querySelector('h3').textContent;

		 metric.appendChild(tooltip);
	 });

	 metric.addEventListener('mouseleave', () => {
		 const tooltip = metric.querySelector('.tooltip');
		 if (tooltip) {
			 metric.removeChild(tooltip);
		 }
	 });
 });


// Get the canvas element
const predictionChartCanvas = document.getElementById('prediction-chart');

// Create the chart
const predictionChart = new Chart(predictionChartCanvas, {
    type: 'bar', // You can choose the type of chart you want (e.g., bar, line, pie)
    data: {
        labels: ['PRODUCT A', 'PRODUCT  B', 'PRODUCT C', 'PRODUCT D', 'PRODUCT E', 'PRODUCT F'],
        datasets: [{
            label: 'AI Model Predictions',
            data: [0.8, 0.6, 0.9, 1.0, 0.4, 0.5], // Replace with your actual prediction values
            backgroundColor: ['#FF5733', '#36A2EB', '#FFC300', '#FF5733','#36A2EB','#FFC300'], // Colors for each bar
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


