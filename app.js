$(document).ready(function(){
  $.ajax({
  type: 'GET',
  url: "http://localhost:3000/cities"
  }).done(function(response){
      var citiesContent= '';
      response.forEach(function(city){
        var cities = "<p><b>" + city.name + ", " + city.state + ", "+city.country + "</b>" + "</br>" + city.description +"</p>"
          citiesContent += cities;
          $(".chicago").attr('id', city.id);
      });
      $("#city").html(citiesContent);
    });

  $("#get_all").on("click",function(e){
    var city_id = $(".chicago").attr('id');
    $.ajax({
      type: 'GET',
      url: "http://localhost:3000/cities/"+ city_id + "/tourist_attractions"
    }).done(function(response){
        var attractionsContent = '';
          response.forEach(function(attraction){
            var attractions = "<p><b>" + attraction.name + "</b>" + attraction.description + "</p>"
            attractionsContent += attractions;
          });
      $("#get_attractions").html(attractionsContent);
      });
  });


  $("#landmark").on("click",function(e){
    var city_id = $(".chicago").attr('id');
    $.ajax({
      type: 'GET',
      url: "http://localhost:3000/cities/"+ city_id + "/tourist_attractions"
    }).done(function(response){
        var attractionsContent = '';
          response.forEach(function(attraction){
            if (attraction.category.search("landmark") > 0){
            var attractions = "<p><b>" + attraction.name + "</b>" + attraction.description + "</p>"
            attractionsContent += attractions;
            };
          });
      $("#category").html(attractionsContent);
      });
  });)
});
