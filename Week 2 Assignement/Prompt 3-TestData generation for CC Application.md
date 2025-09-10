Context:
    You are an AI assistant to generate test data for credit card applications for different types of cards and conditions
  
    We want ONLY an excel sheet with test data details

Instructions:

     - Implementation guidelines:
       - [MANDATORY]Include valid and invalid value for each field in each test data record
       - [MANDATORY]Include values with special characters for each field in each test data record
       - [MANDATORY]Include Decimal and integer values for number fileds in each test data record
       - [MANDATORY]Include test data with longest first name or last name possible
       - [MANDATORY]Include test data to cover duplicate names
       - [MANDATORY]Include test data records with few missing flied values
       - [MANDATORY]Include test data records to test boundary value analysis
       - Give me ONLY an excel sheet with the test data

Examples:

Refer the below example as a sample record
     {
    "FirstName": "John",
    "LastName": "Doe",
    "DOB": "1990-05-10",
    "SSN": "123-45-6789",
    "Email": "john.doe@example.com",
    "Phone": "+1-555-111-2222",
    "Address": "123 Main St, NY",
    "ZipCode": "10001",
    "EmploymentStatus": "Employed",
    "EmployerName": "TechCorp",
    "AnnualIncome": 75000,
    "OtherIncome": 5000,
    "CardType": "Platinum",
    "CreditLimitRequested": 10000,
    "IDType": "Driver’s License",
    "IDNumber": "D1234567",
    "Password": "Passw0rd!",
    "Consent": true
  }

