var log = (function (arg, type) {
    // if(!type) console.log(type ? type + " : " + arg : arg); // display only non typed logs
    // if(type) console.log(type ? type + " : " + arg : arg); // display only typed logs
    // if(type == "Warning") console.log(type ? type + " : " + arg : arg); // display only warning logs
});


var buffer = "";

var add0 = function (string) { return string.length == 6 ? string : add0("0" + string);};

var hashString = function (s) {
    log("parsing " + s,"Info");
    // max value = 16777215 and min  = 000000
    var color = 16777216;

    // simple hash algo : only multiply the number by itself and then do a modulo
    for(var i in s){
        color *= s[i].charCodeAt(0);
    }

    return (color%16777215).toString(16);
};

var parseColor = function(input){
    // detecting the input
    if (!input) return log("No input " ,"Error") || "#bada55";

    // adding the input to the buffer
    buffer += "\n" +  input;

    // detecting if the input is a string
    if (typeof input !== "string") return log("unable to parse element : " + input,"Error") || "#bada55";
    log("parsing : " + input,"Success");

    // detecting if the input is a hex color with the #
    if (input.match(/^#(?:[0-9a-f]{3}){1,2}$/i)) return log("Color already hexadecimal : " + input, "Warning") || input;

    //detect defined colors
    var definedColors = ["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"];
    if(definedColors.indexOf(input) != -1) return log("Color already defined : " + input, "Warning") || input;

    // other cases ?

    // convert the current input to color string
    var color = add0(hashString(input)).toUpperCase();
    buffer += " : " + color;

    log(color,"Success");

    return "#" +  color;
};
