console.log('app.js');


var new_worker = new window.Worker("./js/app/worker.js");

new_worker.postMessage({
    'msg': 'hi'
});
