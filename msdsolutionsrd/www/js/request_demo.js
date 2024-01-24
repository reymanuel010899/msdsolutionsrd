
window.demo = {};

demo.bind_events = function (){
    $('#submit-btn').on('click', event => {
        console.log("Clicked")
    })
}


demo.bind_events();
