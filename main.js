

  $('#submitBtn').click( function(){
      var train = $('#formGroupExampleInput').val().trim();
      var destination = $('#formGroupExampleInput2').val().trim();
      var firstTrain = $('#formGroupExampleInput3').val().trim();
      var frequency = $('#formGroupExampleInput4').val().trim();

      var addedTrain = {
        trainF: train,
        destinationF: destination,
        firstTrainF: firstTrain,
        frequencyF: frequency
      }
      
      console.log(train);
      database.ref().push(addedTrain);
      return false;
  })

  var config = {
    apiKey: "AIzaSyA48-luSX_-ES8g2zYJEGgomzgmZ52Jxv8",
    authDomain: "train-scheduler-bde89.firebaseapp.com",
    databaseURL: "https://train-scheduler-bde89.firebaseio.com",
    projectId: "train-scheduler-bde89",
    storageBucket: "train-scheduler-bde89.appspot.com",
    messagingSenderId: "862435383775"
  };

  firebase.initializeApp(config);

  var database = firebase.database();