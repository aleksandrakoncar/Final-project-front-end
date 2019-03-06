var numberOfItems = $(".container2 .card").length;
      var limitPerPage = 3;
      $(".container2 .card:gt(" + (limitPerPage - 1) + ")").hide();
      var totalPages = Math.round(numberOfItems / limitPerPage);
      
      $('#pagination').append("<li class='page-item current-page active'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>");

      for (var i=2; i<=totalPages; i++) {
        $("#pagination").append("<li class='page-item current-page'><a class='page-link' href='javascript:void(0)'>" + i + "</a></li>");
      }

      $('#pagination').append("<li id='next-page' class='page-item'><a class='page-link' href='javascript:void(0)' aria-label='Next'><aria-hidden='true'>&raquo;</a></li>");
      
      $('#pagination li.current-page').on("click", function() {
        if($(this).hasClass('active')){
          return false;
        }
        else{
        var currentPage = $(this).index();
        $('#pagination li').removeClass('active');
        $(this).addClass('active');
        $(".container2 .card").hide();

        var grandTotal = limitPerPage * currentPage;

        for(var i = grandTotal - limitPerPage; i<grandTotal; i++){
          $(".container2 .card:eq("+ i +")").show();
        }
    }
  });

  $("#next-page").on("click", function() {
  var currentPage = $("#pagination li.active").index(); 
  if (currentPage === totalPages) {
    return false; 
  } else {
    currentPage++; 
    $("#pagination li").removeClass('active'); 
    $(".container2 .card").hide(); 
    var grandTotal = limitPerPage * currentPage; 

    
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $(".container2 .card:eq(" + i + ")").show(); 
    }

    $("#pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); 
  }
});

$("#previous-page").on("click", function() {
  var currentPage = $("#pagination li.active").index(); 
  if (currentPage === 1) {
    return false; 
  } else {
    currentPage--; 
    $("#pagination li").removeClass('active'); 
    $(".container2 .card").hide(); 
    var grandTotal = limitPerPage * currentPage; 

    
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $(".container2 .card:eq(" + i + ")").show(); 
    }

    $("#pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); 
  }
});