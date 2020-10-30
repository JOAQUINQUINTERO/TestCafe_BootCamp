const rndNumber = Math.random().toString(36).substr(1,4);
const data = {
    email: `dummy${rndNumber}@mailinator.com`,
    firstName: 'Joaquin',
    lastName: 'Quintero',
    password: '88888',
    poBox: 'PO BOX 1',
    city: 'Fresno',
    state: 'California',
    postCode: '93245',
    phone: '2524352435243'
}

export {data}