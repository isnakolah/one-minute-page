function User(name, head1, head1text){
    this.name=name;
    this.head1=head1
    this.head1text=head1text;
}

User.prototype.change= function(changer){
    var name = this.name 
    var head1 = this.head1
    var head1text= this.head1text

    function name(a){

    }
}

$(function (){
    $('[data-toggle="tooltip"]').tooltip()
});

$('#myModal').modal('show')

function save(){
    var data = $('#message-text').val();
    document.getElementById('head1').innerHTML=data
}

function save2(){
    var data = $('#message-text2').val();
    document.getElementById('head1-text').innerHTML=data
}












