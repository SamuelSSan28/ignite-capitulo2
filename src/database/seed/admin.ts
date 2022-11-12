import createConnection from '../index';
import { v4 as uuidv4 } from 'uuid';
import { hashPasswordMD5 } from '../../utils/ComparePassword';

async function createUserAdmin() {
    const connection = await createConnection('localhost');

    const id = uuidv4();
    const password = hashPasswordMD5('admin');

    console.log(`
    INSERT INTO USERS (id,name,email,password,"isAdmin",created_at,driver_license) 
    values ("${id}","sADMin","admin@admin.com","${password}",true,'now()',"teste")
`);
    await connection.query(`
        INSERT INTO USERS (id,name,email,password,"isAdmin",created_at,driver_license) 
        values ('${id}','sADMin','admin@admin.com','${password}',true,'now()','teste')
    `);

    connection.close();
}

createUserAdmin().then(() => console.log('UserAdmin created!'));
