var index = 0;

function changeColors(){
    var color = ["#495C83","#7A86B6","#A8A4CE","#C8B6E2"];

    document.getElementsByTagName("body")[0].style.background = color[index++];

    if(index > color.length -1)
        index = 0;
}

