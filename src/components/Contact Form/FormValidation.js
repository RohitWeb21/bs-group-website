import React, { useState } from "react";
const FormValidation = () => {
  const [userValues, setUserValues] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
  });
  const [errors, setError] = useState({});

  const [allRecord, setAllRecord] = useState([]);
  //   const { firstName, lastName, contactNumber, Email } = userContactData;

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUserValues({
      ...userValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      ...userValues,
      id: new Date().getTime().toString(),
    };
    setAllRecord({ ...allRecord, newRecord });
    console.log(newRecord);
    

    //   validation start

    // first name validation
    if (!userValues.firstName.trim()) {
      errors.firstName = "First name is required";
    } else if (userValues.firstName.length < 3) {
      errors.firstName = "Enter a valid first name ";
    } else {
      errors.firstName = "";
    }

    // last name validation
    if (!userValues.lastName.trim()) {
      errors.lastName = "Last name is required ";
    } else if (userValues.lastName.length <= 5) {
      errors.lastName = "Enter a valid last name ";
    } else {
      errors.lastName = "";
    }
    // contact number validation
    if (userValues.contactNumber == "") {
      errors.contactNumber = "Contact Number Is Required ";
    } else if (userValues.contactNumber.length < 10) {
      errors.contactNumber = "Contact number must have 10 digits";
    } else if (userValues.contactNumber.length > 12) {
      errors.contactNumber = "Enter valid contact number";
    } else {
      errors.contactNumber = "";
    }
    // email validation

    if (userValues.email == "") {
      errors.email = "Email is required";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userValues.email)
    ) {
      errors.email = "Email Address Is Invalid";
    } else {
      errors.email = "";
    }

    console.log(errors.email);

    userValues.firstName = "";
    userValues.lastName = "";
    userValues.contactNumber = "";
    userValues.email = "";
 
  };

  return { handleInput, userValues, errors, handleSubmit };
};
export default FormValidation;
