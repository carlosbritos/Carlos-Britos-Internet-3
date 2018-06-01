/* here goes the scripts */
var tablebuild = {
    listAll: function(){
        for (var i = 0; i < tablebuild.items.length; i++ ){
            $('#table-body').append(tablebuild.assamble(tablebuild.items[i]))
        }
    },

    assamble: function(items){
            return  '<div class="row">'
            + '<span class="col-2">' +'</span>'
           + '<span class="col-2">'+ items.brand +'</span>'
           + '<span class="col-2">'+ items.location +'</span>'
           + '<span class="col-2">'+ items.lunch +'</span>'
           + '<span class="col-2">'+ items.price +'</span>'
           + '<span class="col-2">'+'</span>'
           + '<span class="description col-12"></span>'
        + '</div>';
    },

    setItems: function(a){
        tablebuild.items = a;
    },

    items: [],
    
}