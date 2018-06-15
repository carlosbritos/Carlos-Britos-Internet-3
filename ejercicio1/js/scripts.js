/* here goes the scripts */

var tablebuild = {
    listAll: function(){
        for (var i = 0; i < tablebuild.items.length; i++ ){
            $('#table-body').append(tablebuild.assamble(tablebuild.items[i]))
        }
        $('.show').on('click',function(){
            var id = $(this).parents('.row')
            .find('.description').fadeIn();
        
        })
    },

    filtromarca: function(brand){
        for (var i = 0; i < tablebuild.items.length; i++ ){
            if(tablebuild.items[i].brand == brand){
                $('#table-body').append(tablebuild.assamble(tablebuild.items[i]))
            }
            
        }
    },

    assamble: function(items){
            return  '<div class="row" '
            + 'data-id="'+items.id+'">'
            + '<span class="col-2">' +'</span>'
           + '<span class="col-2">'+ items.brand +'</span>'
           + '<span class="col-2">'+ items.location +'</span>'
           + '<span class="col-2">'+ items.lunch +'</span>'
           + '<span class="col-2">'+ items.price +'</span>'
           + '<span class="col-2">'
           + '<button type="text" class="show">show</button>'
           + '</span>'
           + '<span class="description col-12">'
           + items.description+ '</span>'
        + '</div>';
    },

    setItems: function(a){
        tablebuild.items = a;
    },

    items: [],


    
}
tablebuild.setItems(elementsList);

$('#action1').on('click',function(){
    var brand = $('#brandfilter').val();
    tablebuild.filtromarca(brand);
})


/*
tocar el boton-
tomar lo que esta en el input-
recorrer la lista-
lo que coincida con lo buscado
mostrar 
*/




























