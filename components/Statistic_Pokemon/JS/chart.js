const ctx = document.getElementById('myChart')

new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['HP', 'Attack', 'Defence', 'Sp. Defence', 'Sp. Defence', 'Speed'],
		datasets: [
			{
				label: '# of Votes',
				data: [12, 19, 13, 8, 13, 10],
				borderWidth: 1,
				backgroundColor: ['#FFC0CB', '#6890F0'],
				borderRadius: [30, 30, 30, 30, 30, 30],
			},
		],
	},
	options: {
		plugins:{
			legend: {
				display: false,
			},
		},
		scales: {
			x: {
				grid: {
					drawOnChartArea: false,
				},
			},

			y: {
				beginAtZero: true,
				grid: {
					drawOnChartArea: false,
				},
				ticks: {
					display: false,
				},
			},
		},
	},
	plugins: [ChartDataLabels],
})
