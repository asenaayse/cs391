 const validation = (values) => {
    let errors= {} ;
    if((!values.username)||values.username.length>11||values.username.length<3){
        errors.username="Username length must be between 3 and 11!"
    }
    if(!values.email){
        errors.email="Email must be required!" 
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid!"
    }
    if((!values.password)||values.password.length>16|| values.password.length<5){
        errors.password="Password length must be between 5 and 16!"
    }
    if(values.repassword!==values.password){
        errors.repassword="Two passwords should be equal!"
    }
    if(values.agreement==false){
        errors.agreement="Agreement must be accepted!"
    }
    return errors;
}
export default validation;