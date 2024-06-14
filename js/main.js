window.onload = function(){

    var luck = ["大凶","凶","末吉","小吉","中吉", "吉", "大吉"];
    var colors = ["赤","青","黄","緑","白","黒","金","銀","茶","紫"];
    var colorValue = {
      "赤": "red",
      "青": "blue",
      "黄": "yellow",
      "緑": "green",
      "白": "white",
      "黒": "black",
      "金": "gold",
      "銀": "silver",
      "茶": "brown",
      "紫": "purple",
    };
      
    var message, random_luck, random_color;
    var btn = document.getElementById("btn");
    var output = document.getElementById("output");
    
    btn.onclick = function(){
      random_luck = luck[ Math.floor( Math.random() * luck.length ) ];
      random_color = colors[ Math.floor( Math.random() * colors.length ) ];
    
      message = "<h2>" + random_luck + "</h2>";
      message += "<p>ラッキーカラーは " + random_color + "</p>";
      output.innerHTML = message;
      
      var backgroundColor = colorValue[random_color];
      output.style["background-color"] = colorValue[random_color];
      
      // テキストカラーを設定
      if (backgroundColor === "white" || backgroundColor === "yellow" || backgroundColor === "gold") {
        output.style["color"] = "black";
        } else if (backgroundColor === "black") {
            output.style["color"] = "white";
        } else {
            output.style["color"] = "white"; // それ以外の色の場合は白に設定
        }
        
    }
    
}