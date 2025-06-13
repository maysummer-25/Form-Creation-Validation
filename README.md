# 🚀 Form Creation, Validation, and API Data Fetching

This project includes a set of beginner-friendly web development tasks that demonstrate form creation, client-side validation, and fetching data from an external API using JavaScript.

---

## 📁 Project Structure

Form-Creation-Validation/
├── index.html # Simple Quiz Form
├── styles.css # Styles for the Quiz Form
├── script.js # Form validation and scoring logic
├── fetch-data.html # HTML structure for API fetching
├── fetch-data.css # Styling for user list display
├── fetch-data.js # JS logic to fetch and display user data
└── README.md # Project documentation

---

## 1. Form Creation and Validation

This project is a user registration form that implements **client-side validation** using HTML, CSS, and JavaScript. Users must enter a valid username, email, and password to register successfully. Feedback is shown dynamically based on the validity of the inputs.

---

## 🧰 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## 📝 Features

- Username, email, and password fields
- Validation on form submission:
  - Username must be at least 3 characters
  - Email must contain `@` and `.`
  - Password must be at least 8 characters
- Real-time visual feedback:
  - Error messages displayed in red
  - Success message in green
- Form won't submit unless all validations pass
- Clean and modern UI using basic CSS

---

## 🔧 Validation Rules

| Field     | Requirement                                  |
|-----------|----------------------------------------------|
| Username  | Minimum of 3 characters                      |
| Email     | Must include both `@` and `.` (valid format) |
| Password  | Minimum of 8 characters                      |

---

## 📦 Setup Instructions

To run this project on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Form-Creation-Validation.git

---

## 💡 Lessons Learned
How to use DOMContentLoaded to wait for DOM readiness

How to prevent default form submission

Using string methods like .trim() for input sanitization

Displaying dynamic feedback using JavaScript and CSS

---

## 2️⃣ Fetch User Data from API

### Description
Fetches a list of users from a public API and dynamically displays their names in a styled list on the webpage.

### API Used
- Endpoint: `https://jsonplaceholder.typicode.com/users`

### Features
- Fetch data asynchronously using `fetch` and `async/await`
- Display user names in a formatted `<ul>`
- Error handling for failed requests
- Initial loading indicator

### JavaScript Logic Summary

```js
async function fetchUserData () {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

}  ...(continue from fetch.html)
```

---

## 🚀 Getting Started

1. Clone or download the repository.
2. Open `index.html` (quiz) or `fetch-data.html` in your browser.
3. Interact with the form and observe the user data loading.

---

## ✅ Status

All listed tasks are completed and function as expected.

---

## 👩🏽‍💻 Author

**Mmesoma Chukwumezie**
Aspiring Front-End Developer

