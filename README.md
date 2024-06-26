# Dynamic Form Validation With JSON File

A React project that demonstrates dynamic form validation using configurations defined in a JSON file. The form fields and their validation rules are dynamically generated based on the JSON configuration file.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Form Configuration](#form-configuration)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

1. Clone the repo:
    ```sh
    https://github.com/Chandruvijayakumar/Dynamic-Form.git
    ```
2. Navigate to the project directory:
    ```sh
    cd dynamic-form-validation-json
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the application:
    ```sh
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000` to see the form.

## Form Configuration

Create a `FormConfig.json` file in the `src` directory with the following content:

```json
[
  {
    "name": "username",
    "type": "text",
    "label": "Username",
    "required": true,
    "minLength": 3,
    "validationMessage": "Username is required and should be at least 3 characters long."
  },
  {
    "name": "email",
    "type": "email",
    "label": "Email",
    "required": true,
    "validationMessage": "Please enter a valid email address."
  },
  {
    "name": "password",
    "type": "password",
    "label": "Password",
    "required": true,
    "minLength": 8,
    "validationMessage": "Password is required and should be at least 8 characters long."
  },
  {
    "name": "gender",
    "type": "radio",
    "label": "Gender",
    "options": ["Male", "Female"],
    "required": true,
    "validationMessage": "Please select your gender."
  },
  {
    "name": "terms",
    "type": "checkbox",
    "label": "I agree to the terms and conditions",
    "required": true,
    "validationMessage": "You must agree to the terms and conditions."
  }
]
```
## Features

- Dynamic form generation based on JSON configuration
- Real-time form validation
- Customizable validation rules

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Chandru Vijayakumar - [@My_LinkedIn_Page](https://www.linkedin.com/in/chandru-vijayakumar/) 

Project Link: [Clone GitHub](https://github.com/your-username/dynamic-form-validation-json)