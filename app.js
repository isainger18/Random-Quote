addEventListener("load", set_up_click_handler);

function set_up_click_handler() {
  var url = 'quotes.json';
  const randomBtn= document.getElementById("btnquote")

  randomBtn.addEventListener("click", click_handler)
  


function click_handler(event) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener("load", response_handler);
    request.send();
  };

  function response_handler() {
    if(this.status === 200){
        let obj = JSON.parse(this.responseText);
       
        let list = document.getElementById('randomeQuote');
        str = "";
        for (key in obj)
        {
           
            var randomQuote= Math.floor(Math.random()*(obj[key].quote.length))
           
        }
         list.innerHTML = obj[randomQuote].quote
    }
    else{
        console.log("Some error occured")
    }
}
}

   // var randomQuote= Math.floor(Math.random()*(obj.length))
        // list.innerHTML = obj[randomQuote]