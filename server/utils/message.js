var generateMessage = (vfrom,vtext) => {
    return {
        from: vfrom,
        text: vtext,
        createdAt: new Date().getTime()
    };
};

module.exports = {generateMessage};