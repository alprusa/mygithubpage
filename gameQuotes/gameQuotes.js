//this is the parse javascript file for S.pace website
//https://parse.com/tutorials/todo-app-with-javascript
//learn parse from code academy
var container = document.getElementById('container');

void start(){
     var submit = documents.getElementsById('submit');
     var quote = documents.getElementsById('quote');
     if(quote.value == 'temp'){
          var success = createElement('P');
          success.innerHTML = quote.value + ": quote as been added";
          container.appendChild(success);
     }
     else{
          var failed = createElement('P');
          failed.innerHTML= quote.value + ": quote was previously added";
          container.appendChild(failed);
     }
}

start();
