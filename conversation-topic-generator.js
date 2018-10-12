const fs = require('fs');

module.exports = {
    gettopic: function() {
        //var retVal = this.readfile();
        var test = fs.readFile('conversations.json', function read(err, data) {
            if (err) {
            throw err;
            }
            content = JSON.parse(data);
            var randomnr = Math.floor(Math.random() * content.topics.length);
            console.log(randomnr);
            //console.log(content);
            retVal = JSON.stringify(content.topics[randomnr].title);
            console.log(retVal);
            //cb(retVal);
            return retVal;
            
        });
        return test;
    },
        // fs.readFile('conversations.json', function read(err, data) {
        //     if (err) {
        //      throw err;
        //     }
        //     content = JSON.parse(data);
        //     var randomnr = Math.floor(Math.random() * content.topics.length);
        //     console.log(randomnr);
        //     //console.log(content);
        //     retVal = JSON.stringify(content.topics[randomnr].title);
        //     console.log(retVal);
        //     //return retVal
            
        //  });
         //console.log('2:' + retVal);
        //return '';
    readfile: function(e){
       
    }
}
