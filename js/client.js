var chat = document.getElementById("chat");
var send;

nexus.dial('ws://localhost:443', function(nc, err) {
    nc.login('root', 'root', function() {
        send = function(evt) {
            evt.preventDefault();
            nc.topicPublish("demo.chat", 
                           {"user": evt.target[0].value, "msg": evt.target[1].value}, null);
            return false;
        };
        nc.pipeCreate({"len": 100}, function(pipe, e){
            var ReadPipe = function() {
                pipe.read(1, 60, function(msgs, err) {
                    chat.innerHTML += '<br>' + msgs.msgs[0].msg.msg.user + 
                                      ': ' + msgs.msgs[0].msg.msg.msg;
                    ReadPipe();
                });
            }
            nc.topicSubscribe(pipe, "demo.chat", ReadPipe, null);
        });
    });
});
