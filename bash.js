

var importVariable = module.require("./commands.js");
// Output a prompt
var done = function(output, cmdList, data){
  if (cmdList.length > 1) {
    output = importVariable[cmdList[0]](cmdList.slice(1), done, data);
  } else {
    // process.stdout.write(output);
    // process.stdout.write('\nprompt > ');
    output += output + '\nprompt > ';
  }
  process.stdout.write(output);
}

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data){
  var cmd = data.toString().trim(); // remove the newline
  var cmdList = cmd.split(/\s*\|\s*/g);
  console.log(cmdList);
  importVariable[cmdList[0]](cmdList.slice(1), done, data);
});
