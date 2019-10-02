var person = {
    name: 'Milan Lamsal',
    contact: '9863699749',
    address: 'Kathmandu',
    email: 'melamsal555@gmail.com',
    skills: ['python', 'php', 'js'],
    education: [
        {
            level: '+2',
            College: 'St. Lawrence',
            Board: 'HSEB'
        },
        {
            level: 'BE',
            College: 'HCOE',
            Board: 'TU'
        }
    ]
};


for (var i = 5; i > 0; i--) {
    var strArr = [];
    for (var j = 0; j < i; j++) {
        strArr.push("*")
    }
    console.log(...strArr);
}