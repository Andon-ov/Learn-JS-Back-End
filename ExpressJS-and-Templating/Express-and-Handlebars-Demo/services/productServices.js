const data = [
    {
        id: 'sdf123',
        name: 'Windshield Wiper',
        price: '49.5'
    }, {
        id: 'sdf124',
        name: 'Headlight Bulb',
        price: '12.9'
    },
];


function getList() {
    return data;
}

function getById(id) {
    return data.find(p => p.id === id);
}

module.exports = {
    getList,
    getById
};