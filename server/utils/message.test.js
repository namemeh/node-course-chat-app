var  expect = require('expect');

var {generateMessage} = require('./message');

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