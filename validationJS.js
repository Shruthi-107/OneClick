function validation(formId){
   //event.preventDefault(); // Prevent form submission
    // var firstName= document.forms.myForm.fname.value;
    // var lastName= document.forms.myForm.lname.value;
    // var Password=document.forms.myForm.pwd.value;
    // var Confirm_Password=document.forms.myForm.Cpwd.value;
    var email=document.forms[formId].Email.value;
    var Password=document.forms[formId].pwd.value;


    if(formId==='signupform')
    {   
        var regName = /^[A-Za-z]+$/;
        var firstName= document.forms[formId].fname.value;
        var lastName= document.forms[formId].lname.value;

        //checking if first name is valid
        if(!(firstName.length >=6)){
            window.alert("first name should contain min 6 letters");
            return false;
        }
        else if (!(regName.test(firstName))){
                 window.alert("Firt name should contain only Alphabets");
                 return false;
        }

        //checking if last name is valid
        if(!(lastName.length >=5)){
            window.alert("Last name should contain min 5 letters");
            return false;
          }
           else if (!(regName.test(lastName))){
            window.alert("Firt name should contain only Alphabets");
            return false;
        }
    }

    
       

    //checking the password validation

    var Pass_word_validation="_1234567890";
    if(Password.length>=8)
    {
    for( var i=0; i<Password.length;i++)
    {
        if(Pass_word_validation.indexOf(Password.charAt(i)) == -1)
        {
            window.alert("Password should contain only Numbers and unserscore(_)");
            return false;
        }
    }
    }
    else{
        window.alert("Password should contain minimum 8 characters");
        return false;
    }
       
    //checking the validation of email

    var email_validation_check1="@gmail.com"
    if(!(email.includes(email_validation_check1)))
    {
        window.alert("email is missing '@gmail' part");
        return false;
    }
    else{
        var email_validation_check2="abcdeghijklmnopqrstuvwxyz.";
        for(var i=0; i<(email.length-email_validation_check1.length);i++)
        {
            if(email_validation_check2.indexOf(email.charAt(i)) == -1)
            {
                window.alert("Email should contain only alphabets in small case and period(.)");
                return false;
            }
        }
        // if(!(email.includes(email_validation_check2)))
        // var index1=email.indexOf("@"); //12-10
        if (!(email.length-(email.length-email_validation_check1.length)>=5))
        {
            window.alert(" user part in userName@gmail should contain minimum 5 characters");
            return false;
        }
    }

    document.forms.formId.submit();
   }
