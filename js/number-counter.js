var nbr = 0;

$().ready(function() {
    display(nbr);
    
    $("#sub").click(function() {
        display(--nbr);
    });

    $("#add").click(function() {
        display(++nbr);
    });
});

function display(nbr) {
    $("label").text(nbr)
}