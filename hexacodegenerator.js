    var letters = "0123456789ABCDEF";
    function generate(){
        var color = '#';
    for (var i = 0; i < 6; i++)
    color += letters[(Math.floor(Math.random() * 16))];
    return color;
    }
