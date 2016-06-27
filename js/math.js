function summarize(memory) {
    var KB = 1024;
    var MB = KB * KB;
    var GB = MB * MB;
    var TB = GB * GB;

    if (memory >= TB)
        return round(memory / TB, 2).toString() + ' TB';
    else if (memory >= GB)
        return round(memory / GB, 2).toString() + ' GB';
    else if (memory >= MB)
        return round(memory / MB, 2).toString() + ' MB';
    else if (memory >= KB)
        return round(memory / KB, 2).toString() + ' KB';
    else
        return round(memory, 2).toString() + ' b';
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