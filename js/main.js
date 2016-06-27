var cpuChart;
var memoryChart;

function refreshData() {
    $.ajax({
        url: 'data.php',
        success: function(data) {
            var time = (new Date()).getTime();
            var memory = data.Memory;
            var percent_memory = percentage(memory.Used / memory.Total, 2);
            var percent_cpu = percentage(average(data.Cpu) / 100, 2).toString() + ' %';

            for (i in [0, 1, 2, 3]) {
                addGraphPoint(cpuChart, i, [time, data.Cpu[i]]);
            }
            addGraphPoint(memoryChart, 0, [time, percent_memory]);

            $('#total-memory').html(summarize(memory.Total));
            $('#free-memory').html(summarize(memory.Free));
            $('#used-memory').html(summarize(memory.Used));
            $('#current-memory').html(percent_memory + ' %');
            $('#current-cpu').html(percent_cpu);

            setTimeout(refreshData, 1000);
        },
        cache: false
    });
}

$(document).ready(function() {
    switch(window.location.protocol) {
        case 'http:':
        case 'https:':
            cpuChart = buildChart('cpu-graph', '% CPU Load', [
                { name: 'CPU 1', data: [] }, 
                { name: 'CPU 2', data: [] }, 
                { name: 'CPU 3', data: [] }, 
                { name: 'CPU 4', data: [] }
            ]);

            memoryChart = buildChart('memory-graph', '% RAM', [
                { name: 'Used', data: []}
            ]);
            break;
        case 'file:':
            alert("Please within a web server that can serve PHP. This won't work otherwise :)");
            break;
        default: 
            //some other protocol
        }    
});