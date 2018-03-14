var config = {
    apiKey: "AIzaSyA48-luSX_-ES8g2zYJEGgomzgmZ52Jxv8",
    authDomain: "train-scheduler-bde89.firebaseapp.com",
    databaseURL: "https://train-scheduler-bde89.firebaseio.com",
    projectId: "train-scheduler-bde89",
    storageBucket: "",
    messagingSenderId: "862435383775"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  $('#submit').on('click', function(){
    event.preventDefault();
      var train = $('#formGroupExampleInput').val().trim();
      var destination = $('#formGroupExampleInput2').val().trim();
      var firstTrain = $('#formGroupExampleInput3').val().trim();
      var frequency = $('#formGroupExampleInput4').val().trim();
  })