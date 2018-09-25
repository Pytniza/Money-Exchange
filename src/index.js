// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var obj = {};
    
        if (currency <= 0) return obj;
        if (currency >= 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
        var h = Math.floor(currency / 50);
          if (h) obj.H = h;
        var rest = currency - h * 50;
        var q = Math.floor(rest / 25);
          if (q) obj.Q = q;
        rest = rest - q * 25;
        var d = Math.floor(rest / 10);
          if (d) obj.D = d;
        rest = rest - d * 10;
        var n = Math.floor(rest / 5);
          if (n) obj.N = n;
        p = rest - n * 5;
          if (p) obj.P = p;
    return obj;
    // Return an object containing the minimum number of coins needed to make change
}
