window.onload = function(){

  var first = 'A ';
  var adjective = ['small ', 'big ', 'old ', 'angry ','mad ','nervous ','hungry ','fast ','young ' ];
  var noun = ['dog ','cousin ','chef ', 'robot ', 'cat ', 'monster ', 'hulk '];
  var action = ['burned my ', 'shot my ', 'sold my ' , 'ate my ', 'broke my ', 'threw my ', 'punched my ', 'kicked my '];
  var object = ['mobile phone', 'laptop ', 'computer ', 'TV ', 't-shirt ', 'eyes ', 'gamepad ', 'trousers ', 'shoes ', 'face '];
  var place = ['near the metro','in the shop','in the bus', 'behind the centre', 'close to the fountain', 'during the zombie apocalypse', 'in my house'];
  
   var adj = Math.floor((Math.random() * adjective.length) );
   var n = Math.floor((Math.random() * noun.length) );
   var act = Math.floor((Math.random() * action.length) );
   var obj = Math.floor((Math.random() * object.length) );
   var pl = Math.floor((Math.random() * place.length) );
  
    document.querySelector('#excuse').innerHTML = first + adjective[adj] + noun[n] + action[act] + object[obj] + place[pl];
}
