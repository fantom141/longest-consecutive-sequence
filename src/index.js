module.exports = function longestConsecutiveLength(a) {

    if (!a.length) {
        return 0;
    }

    var s = [];
    var m = 1;

    for (var i=0; i<a.length; i++)
        s.push(a[i]);

    for (var i=0; i<a.length; i++) {
        var l = a[i] - 1;
        var r = a[i] + 1;
        var c = 1;

        while (s.includes(l)) {
            c++;
            s.splice(s.indexOf(l), 1);
            l--;
        }

        while (s.includes(r)) {
            c++;
            s.splice(s.indexOf(r), 1);
            r++;
        }

        m = Math.max(c, m);
    }

    return m;
}
