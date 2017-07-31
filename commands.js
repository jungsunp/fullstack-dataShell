// importing
var fs = require('fs');


// exporting
module.exports = {
  pwd: function(stdin, done){
    var output = process.cwd();
    done(output, stdin);
  },

  ls: function(stdin, done){
    var output ='';

    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        output += file.toString() + '\n';
      })
      done(output);
    });
  },

  echo: function(stdin, done, data){
    var output = data.slice(5);
    done(output);
  },

  cat: function(stdin, done, data){
    var fileName = data.toString().slice(4).trim();
    fs.readFile(process.cwd() + '/' + fileName, function(err, contents){
      if (err) throw err;
      var output = contents.toString();
      done(output);
    });
  },

  head: function(stdin, done, data){
    var output ='';
    var fileName = data.toString().slice(4).trim();
    fs.readFile(process.cwd() + '/' + fileName, function(err, contents){
      if (err) throw err;
      var strArr = contents.toString().split('\n').slice(0,5);
      strArr.forEach(function(str){
        output += str + '\n';
      })
      done(output);
    });
  },

  tail: function(stdin, done, data){
    var output ='';
    var fileName = data.toString().slice(4).trim();
    fs.readFile(process.cwd() + '/' + fileName, function(err, contents){
      if (err) throw err;
      var strArr = contents.toString().split('\n').slice(-6);
      strArr.forEach(function(str){
        output += str + '\n';
      })
      done(output);
    });
  },

  curl: function(stdin, done, data){
    var address  = data.toString().slice(5).trim();
    console.log(address);
    var request = require('request');
    request(address, function(error, response, body){
      if (error) throw error;
      done(body);
    });
  }
};
