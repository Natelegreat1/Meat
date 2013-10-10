 function hexFromRGB(r, g, b) {
    var hex = [
      r.toString( 16 ),
      g.toString( 16 ),
      b.toString( 16 )
    ];
    $.each( hex, function( nr, val ) {
      if ( val.length === 1 ) {
        hex[ nr ] = "0" + val;
      }
    });
    return hex.join( "" ).toUpperCase();
  }

  function refreshSwatch() {
    var red = $( "#red" ).slider( "value" );
    var hex = hexFromRGB( red, 16, 16 );

    $( "#swatch" ).css( "background-color", "#" + hex );
    //$("#all").css( "background-color", "#" + hex );
  }

  $(function() {
    $( "#red").slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
    $( "#red" ).slider( "value", 255 );
  });