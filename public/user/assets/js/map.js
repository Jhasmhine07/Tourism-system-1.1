const apiKey = 'pk.eyJ1IjoiamVyaG9tZTEyIiwiYSI6ImNsOHpkeWk4MTBsNHYzb3A0aXhwM3N2OG8ifQ.H-GhPpJAiB7I8niy2vjsVg';

$(document).ready(function ()
{

    load_map();

    var myMap = L.map('map', {
        maxZoom: 20,
        minZoom: 6,
        zoomControl: false
    }).setView([16.3398435,119.8216285], 11);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 100,
    }).addTo(myMap);

    L.control.zoom({
        position: 'bottomright'
    }).addTo(myMap);

    var tourism_office = L.marker([ 16.388653840169958, 119.89281431024764]).addTo(myMap);

    // circle on map
   L.circle([16.388653840169958, 119.89281431024764], {
       color: 'red',
       fillColor: '#f03',
       fillOpacity: 0.5,
       radius: 500
   }).addTo(myMap);

   // add text circle
   var tourismoffice = L.divIcon({
       className: 'my-div-icon',
       html: '<h1 style="font-size:10px; width:fit-content; height:300px;">Tourism Office</h1>',
       iconAnchor: [15, -7]
   });
   // you can set .my-div-icon styles in CSS
   
   L.marker([119.89281431024764, 119.89281431024764], {
       icon: tourismoffice
   }).addTo(myMap);

   // pop up message on map
  
   tourism_office.bindPopup("<div style='width:fit-content; height:fit-content; display:flex; flex-direction: column; justify-content:center; align-items:center; box-sizing:border-box;'>\
   <div style='font-size: 10px;'>Tourism Office</div>\
   <div><a href='https://goo.gl/maps/Jb6MPWpCgaXXu739A'>Visit</a>\
   </div>");


    function load_map ()
    {
        $.ajax ({
            type: "GET",
            url: "/locations/map",
            dataType: "json",
            success: function (response) 
            {
    
                let l = response.locations.length;

                var mapHover = document.querySelector('#mapHover');

                for (let i = 0; i < l; i++)
                {
                    var name = response.locations[i].name;
                    var names = name;
                    var count_visit = response.locations[i].visit_count;

                    var locName = document.querySelector('#'+response.locations[i].name+'');

                    
                    // Mark
                    var name = L.marker([response.locations[i].latitude, response.locations[i].longitude]).addTo(myMap);
    
                    // side text
                    var toollip = L.tooltip({
                        permanent: true
                    }).setContent(response.locations[i].visit_count);

                    name.bindTooltip(toollip);

                    //  circle on map
                    var vir_map = L.circle([response.locations[i].latitude, response.locations[i].longitude], {
                        color: 'red',
                        fillColor: '#f03',
                        fillOpacity: 0.5,
                        radius: 500
                    }).addTo(myMap);

                    // var circle = L.circle([response.locations[i].latitude, response.locations[i].longitude], 500, {
                    //     color: 'red',
                    //     fillColor: '#f03',
                    //     fillOpacity: 0.5
                    // }).addTo(myMap);
                    
                    // var myZoom = {
                    //   start:  myMap.getZoom(),
                    //   end: myMap.getZoom()
                    // };
                    
                    // myMap.on('zoomstart', function(e) {
                    //    myZoom.start = myMap.getZoom();
                    // });
                    
                    // myMap.on('zoomend', function(e) {
                    //     myZoom.end = myMap.getZoom();
                    //     var diff = myZoom.start - myZoom.end;
                    //     if (diff > 0) {
                    //         circle.setRadius(circle.getRadius() * 2);
                    //     } else if (diff < 0) {
                    //         circle.setRadius(circle.getRadius() / 2);
                    //     }
                    // });
    
                    // add text circle
                    var tundol = L.divIcon({
                        className: 'my-div-icon',
                        html: '<h1 style="font-size:10px; width:fit-content; height:300px;">'+response.locations[i].name+'</h1>',
                        iconAnchor: [15, -7]
                    });
                    // you can set .my-div-icon styles in CSS
                    
                    L.marker([response.locations[i].latitude, response.locations[i].longitude], {
                        icon: tundol
                    }).addTo(myMap);
    
                    // pop up message on map
                   
                    if (response.locations[i].type == '1')
                    {
                        name.bindPopup("<div style='width:fit-content; height:fit-content; display:flex; flex-direction: column; justify-content:center; align-items:center; box-sizing:border-box;'>\
                        <div style='font-size: 10px;'>"+names+" Visited</div>\
                        <div><img src='/user/assets/img/download.jpg' style='height:100px; width: 100px'></div\
                        </div>");
                    }
                    else
                    {
                        name.bindPopup("<div style='width:fit-content; height:fit-content; display:flex; flex-direction: column; justify-content:center; align-items:center; box-sizing:border-box;'>\
                        <div style='font-size: 10px;'>"+names+" Visited</div>\
                        <div>\
                        </div>");
                    }

                    // zoom in
                    locName.addEventListener("mouseover", ()=>
                    {
                       
                        myMap.flyTo([response.locations[i].latitude, response.locations[i].longitude], 14);

                    },false);

                    mapHover.addEventListener("mouseover", ()=>{
                        myMap.flyTo([16.3398435,119.8216285], 11);
                    },false);
                }
            }
        });
    }


       
});
