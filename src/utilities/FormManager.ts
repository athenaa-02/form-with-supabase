import { FormUtility } from "./FormUtility";

export type TFormInput = {
  value: string | null;
  isValid: boolean;
};

export type TFormData = {
  firstName: TFormInput;
  lastName: TFormInput;
  email: TFormInput;
  password: TFormInput;
  repeatPassword: TFormInput;
};

export class FormManager {
  //it gives an arror when i use validateForm in signupform.tsx and quick fix adds this lines here 
  static validateForm(): { isValid: any; data: any; } {
    throw new Error("Method not implemented.");
  }

  //we are expecting that every objects created from FormManager will have this properties
  //it is property daclaration:
 private _formData: TFormData;
  formUtility: FormUtility;

  //constructor is a method that is automatically called whenever a new instance, (object) of this class, is created
  constructor() {
    this.formUtility = new FormUtility();
    this._formData = {
      firstName: { value: null, isValid: false },
      lastName: { value: null, isValid: false },
      email: { value: null, isValid: false },
      password: { value: null, isValid: false },
      repeatPassword: { value: null, isValid: false },
    };
  }
    //  When we access `formManager.formData`, this getter runs:
  public get formData(): TFormData{
    return{...this._formData} 
    // It returns a *copy* (`{ ...this._formData }`) of the internal `_formData`.
    // -updates only happen through the `FormManager`'s own methods
  }

  public updateFieldValue(fieldName: keyof TFormData, value: string): TFormData {
    let isValid = false;
    switch (fieldName) {
      case 'email':
        isValid = this.formUtility.emailValidator(value);
        break;
      case 'password':
        isValid = value.length >= 6;
        break;
      case 'repeatPassword':
        isValid = value === (this._formData.password.value || '');
        break;
      case 'firstName':
      case 'lastName':
        isValid = value.trim().length > 0; 
        break;
      default:
        isValid = true; 
    }

    //a copy of _formdata, mxolod vaapdeitebt fieldnames : value and isVAlid
    this._formData = {
      ...this._formData,
      [fieldName]: {
        value: value,
        isValid: isValid,
      },
    };
    return { ...this._formData }; // Return the updated copy
  }

   // validate all fields in the form, after pressing submit btn
  public validateForm(): { isValid: boolean; data: TFormData } {
    
    let allValid = true;
    const updatedFormData: TFormData = { ...this._formData };

//Loop through each field in the `updatedFormData` copy.
    for (const key in updatedFormData) {
      if (updatedFormData.hasOwnProperty(key)) {
        const fieldName = key as keyof TFormData;
        const fieldValue = updatedFormData[fieldName].value || '';

        // Use the same validation logic as updateFieldValue
        let isValid = false;
        switch (fieldName) {
          case 'email':
            isValid = this.formUtility.emailValidator(fieldValue);
            break;
          case 'password':
            isValid = fieldValue.length >= 6;
            break;
          case 'repeatPassword':
            isValid = fieldValue === (this._formData.password.value || '');
            break;
          case 'firstName':
          case 'lastName':
            isValid = fieldValue.trim().length > 0;
            break;
          default:
            isValid = true;
        }
        // Update validity in the copy
          updatedFormData[fieldName].isValid = isValid;
          //if any filed is not valid 
        if (!isValid) {
          allValid = false;
        }
      }
      
}
  this._formData = updatedFormData; 

   return {
      isValid: allValid,
      data: { ...this._formData },
    };
  }

  public resetForm(): TFormData {
    this._formData = {
      firstName: { value: null, isValid: false },
      lastName: { value: null, isValid: false },
      email: { value: null, isValid: false },
      password: { value: null, isValid: false },
      repeatPassword: { value: null, isValid: false }
    };
    //copy
    return { ...this._formData };

  }
}
