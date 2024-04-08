const bcrypt = require('bcrypt');
const saltround = 10;

export default function password_hash(password){
    bcrypt.hash(password,10,(err,hash)=>{
        if(err){
            console.error(err);
            return;
        }
        return hash;
    })
}