const { v4: uuidv4 } = require('uuid');

const users= [
    {
        id:uuidv4(),
        name :'Mr. XXX',
        mail:'mr.sayedx21@mail.com',
        phone: '01999919199'
    },
    {
        id:uuidv4(),
        name :'Undifined',
        mail:'undimia232@mail.com',
        phone: '0189929327'
    },
    {
        id:uuidv4(),
        name :'Optimus prime',
        mail:'iamoptimus@mail.com',
        phone: '01983762624'
    },
    {
        id:uuidv4(),
        name :'Minorime jomee',
        mail:'minorime@mail.com',
        phone: '018635353334'
    },
];

module.exports= users;