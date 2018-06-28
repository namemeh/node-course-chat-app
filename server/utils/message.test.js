var  expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',() => {
    it('should generate correct message object', () => {

        var from ='Jen';
        var text = 'Some message';

        var message = generateMessage(from,text);

        expect(typeof message.createdAt).toBe('number');

        expect(message.from).toEqual(from);
        expect(message.text).toEqual(text);

        /*
        expect(message).to.include({
            from: from,
            text: text,
        });*/

        /* expect(message).toInclude({
            from: from,
            text: text,
        });
        */
 });
});

describe('generateLocationMessage',() => {
    it('should generate correct location message object',()=>{

    var from ='Admin';
    var latitude  = 1;
    var longitude = 1;
    var url="https://www.google.com/maps?q="+latitude+","+longitude;
    var message = generateLocationMessage(from,latitude,longitude);

    expect(typeof message.createdAt).toBe('number');
    expect(message.from).toEqual(from);
    expect(message.url).toEqual(url);
    /*
    expect(message).to.be.include({
        from: from,
        url: url});
    */
    });
});