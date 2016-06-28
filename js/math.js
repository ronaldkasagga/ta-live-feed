var KB = 1024;
var MB = KB * KB;
var GB = MB * MB;
var TB = GB * GB;

var memoryUnits = [];
memoryUnits[TB] = 'TB';
memoryUnits[GB] = 'GB';
memoryUnits[MB] = 'MB';
memoryUnits[KB] = 'KB';

function summarize(memory) {
    for (var unit = TB; unit >= KB; unit = Math.sqrt(unit))
        if (memory >= unit)
            return minimize(memory, unit);

    return round(memory, 2).toString() + ' b';
}

function minimize(memory, unit) {
    var size = memory / unit;
    if (size / 1024 > 1)
        return round(size / 1024, 2).toString() + ' ' + memoryUnits[unit * unit];
    return round(size, 2).toString() + ' ' + memoryUnits[unit];
}

function round(num, digits) {
    return +(Math.round(num + "e+" + digits) + "e-" + digits);
}

function percentage(ratio, round_digits) {
    return round((100 * ratio), round_digits);
}

function average(list) {
    var sum = 0;
    for (var i = 0; i < list.length; i++)
        sum += list[i];

    return sum / list.length;
}