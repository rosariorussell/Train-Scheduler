$(document).ready(function () {

  $('#submitBtn').click(function () {
    var train = $('#formGroupExampleInput').val().trim();
    var destination = $('#formGroupExampleInput2').val().trim();
    var firstTrain = moment($('#formGroupExampleInput3').val().trim(), "HH:mm").subtract(1, "years").format("X");
    var frequency = $('#formGroupExampleInput4').val().trim();

    var addedTrain = {
      train: train,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency
    }

    database.ref().push(addedTrain);

    $('#formGroupExampleInput').val('');
    $('#formGroupExampleInput2').val('');
    $('#formGroupExampleInput3').val('');
    $('#formGroupExampleInput4').val('');

    return false;
  })
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

database.ref().on('child_added', function (snapshot) {
  var train = snapshot.val().train;
  var destination = snapshot.val().destination;
  var firstTrain = snapshot.val().firstTrain;
  var frequency = snapshot.val().frequency;

  var timeRemaining = moment().diff(moment.unix(firstTrain), "minutes") % frequency;
  var minutesRemaining = frequency - timeRemaining;
  var arriving = moment().add(minutesRemaining, "m").format("hh:mm A");

  $('tbody').append("<tr><td>" + train + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + arriving + "</td><td>" + minutesRemaining + "</td><td>");
})