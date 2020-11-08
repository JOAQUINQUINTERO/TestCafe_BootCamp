const rndNumber = Math.random().toString(36).substr(1,15);
const data = {
    email: `dummy${rndNumber}@mailinator.com`,
    firstName: 'Joaquin',
    lastName: 'Quintero',
    password: '88888',
    poBox: 'PO BOX 1',
    city: 'Fresno',
    state: 'California',
    postCode: '93245',
    phone: '2524352435243',
    valid_email: 'dummy.jd7@mailinator.com'
};

export {data}