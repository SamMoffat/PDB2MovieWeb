$.ajax({
  url:"php/RemoteStatus.php",
  type: 'POST',
  async: true,
  success: function (data){
    console.log(data);
    res = JSON.parse(data);
    colour = (res.title == "Online" ? "green" : "red");
    $("#processing-status").empty();
    $("#processing-status").css("color", colour);
    $("#processing-status").append(res.title)

      if (res.mode == "vmd") {
        $('#tclModeUpload').css('visibility', 'visible')
      } else {
        $('#pythonModeUpload').css('visibility', 'visible')
      }
  }

  ,
  failure: function (data){
    console.log("FAI");
    res = JSON.parse(data);
    colour = "red"
    $("#processing-status").empty();
    $("#processing-status").css("color", colour);
    $("#processing-status").append(res.title)
  },
  timeout: 10000,
  cache: false,
  contentType: false,
  processData: false
});
