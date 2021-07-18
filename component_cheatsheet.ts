

// Step 1: Inside Constructor Parameter inject the following





private fb : FormBuilder,private service: AadharCardService



// Step 2: Build required FormGroups Inside ngOnInit()








//EX 1
this.getAadharForm = this.fb.group({
      aadharNumber:['',[Validators.required,Validators.minLength(12),Validators.maxLength(12),adharNumberIsAlpha]]

    })


//EX 2
this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.formBuilder.group({ //Field that don't mentioned. If so use <fieldset> tag in html with FormGroup name address
	  //ref Lex Reactive forms
        street: [],
        zip: [],
        city: []
      })
 });




//step 3: define required post fn by calling post fn in service class







//EX 1
getAadhar() {
   this.errorMessage = null
   this.successMessage = null
   this.myAadhar = null
   this.service.getAadhar(this.getAadharForm.value).subscribe(
     (aadhar) =>{this.myAadhar =aadhar
                    this.updatePhoneNumberForm.patchValue({
                      aadharNumber:aadhar.aadharNumber,
                      phoneNumber:aadhar.phoneNumber
     })},
     (error) =>this.errorMessage = error.error.message
   )
  }
  
//EX 2
 apply() {

            //Implement your logic here
            this.service.apply(this.internshipApplicationForm.value).subscribe(
              (response)=>{this.successMessage = response.successMessage},
              (error) =>{this.errorMessage = error.error.message}
            )

  }
}


//Step 4: define custom validator fn outside component class if required





//EX 1
//        <span *ngIf="getAadharForm.controls.aadharNumber.hasError('aaName')">alphaNotAllowed</span>
function adharNumberIsAlpha(form: FormControl) {
  // console.log(c.value);
  /* let regExp = /^[a-zA-Z]{4}[0-9]{4}$/; */
  let regExp = new RegExp('[A-Za-z]+');

  if (regExp.test(form.value)) {
    return { aaName: 'alpha not allowed' };
  } else return null;
}
 
 
//EX 2 
function validateEmail(c: FormControl) {
    let EMAIL_REGEXP = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return EMAIL_REGEXP.test(c.value) ? null : {
        emailError: {
            message: "Email is invalid"
        }
    };
}