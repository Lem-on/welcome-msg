//automsg

message = prompt("bitch idk");

API.on(API.USER_JOIN, function(data){

if(message == ""){
API.sendChat("@" + data.username Vítám tě! :) :) );
} else {
API.sendChat(message + " @" + data.username);

}
});
