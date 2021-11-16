module.exports = {
    sum: function() {
        var sum = 0;
        Array.from(arguments).forEach(function(e){
            sum += e;
        }); // from 을 사용해서 유사배열을 배열로 만들어 줌

        return sum;
    },

    max: function() {
        var max = Number.MIN_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){
            max = e > max ? e : max;
        });

        return max
    }, 
    
    min: function() {
        var min = Number.MAX_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){
            min = e < min ? e : min;
        });

        return min
    }
}