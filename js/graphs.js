function buildChart(render_element_id, YAxisTitle, initSeries) {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: render_element_id,
            defaultSeriesType: 'spline',
            events: {
                load: refreshData
            }
        },
        title: null,
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000
        },
        yAxis: {
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: YAxisTitle,
                margin: 80
            }
        },
        series: initSeries
    });
    return chart;
}

function addGraphPoint(chart, seriesIndex, point) {
    var series = chart.series[seriesIndex];
    var shift = series.data.length > 21;
    chart.series[seriesIndex].addPoint(point, true, shift);
}

        

