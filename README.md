<h1 align="center" id="title">Contact Management</h1>

<p align="center"><img src="https://socialify.git.ci/Vishwajeet-Kumar-Patel/Contact_Management/image?font=Bitter&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Solid&amp;stargazers=1&amp;theme=Dark" alt="project-image"></p>

<p id="description">Contact Management feature helps users of the system to keep a track of important contact information of customers / clients. It lets users add view update and delete contact details all in one place. This makes it easy for users to find and manage information which is especially helpful in a business setting where keeping track of relationships is key</p>

<h2>Project Screenshots:</h2>

![Image](https://github.com/Vishwajeet-Kumar-Patel/Contact_management/blob/master/Screenshot%202024-11-17%20122817.png?raw=true)
![Image](https://github.com/Vishwajeet-Kumar-Patel/Contact_management/blob/master/Screenshot%202024-11-17%20122833.png?raw=true)
![Image](https://github.com/Vishwajeet-Kumar-Patel/Contact_management/blob/master/Screenshot%202024-11-17%20122850.png?raw=true)
  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

- **Add Contact**: Users can add new contacts by providing details such as first name, last name, email, phone number, company, and job title.
- **Edit Contact**: Users can edit existing contact details.
- **Delete Contact**: Users can delete contacts.
- **View Contacts**: Users can view a list of all contacts.
- **Search**: Users can search for contacts by name, email, phone number, company, or job title.
- **Pagination**: The contact list is paginated for better usability.
- **Sorting**: Users can sort the contact list by different fields such as first name, last name, email, etc.
- **Notifications**: Users receive notifications for actions such as adding, updating, or deleting contacts.

<h2>💻 Built with</h2>

- **MongoDB**: A NoSQL database used to store contact information.
- **Express**: A web application framework for Node.js used to build the backend API.
- **React**: A JavaScript library for building user interfaces, used to build the frontend of the application.
- **Node.js**: A JavaScript runtime used to build the backend server.
- **Material UI**: A popular React UI framework for styling and components.
- **notistack**: A notification library for React.

## Project Structure

- **Backend**:
  - **server.js**: The entry point of the backend server. Configures Express, connects to MongoDB, and sets up routes.
  - **models/Contact.js**: Defines the Contact schema and model using Mongoose.
  - **routes/contacts.js**: Defines the API routes for managing contacts (CRUD operations).

- **Frontend**:
  - **src/App.js**: The main component that sets up the application layout and routes.
  - **src/components/AddContactForm.js**: A form component for adding and editing contacts.
  - **src/components/ContactList.js**: A component that displays the list of contacts with search, pagination, and sorting features.
  - **src/services/contactService.js**: A service module for making API requests to the backend.
<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the repository</p>

```
git clone https://github.com/Vishwajeet-Kumar-Patel/Contact_Management.git
cd Contact_Management
```

<p>3. Backend</p>

```
cs backend
npm start
```

<p>5. Frontend</p>

```
cd frontend
npm start
```
## Challenges Faced

1. **Handling Duplicate Entries**  
   - **Challenge**: Preventing duplicate entries in the database while providing clear feedback to the user.  
   - **Solution**:  
     - Added unique constraints in the MongoDB schema to enforce uniqueness for fields like email and phone number.  
     - Handled duplicate entry errors gracefully in the backend API.  
     - Utilized the `notistack` library in the frontend to display user-friendly error notifications when duplicates are detected.  

2. **Implementing Pagination and Sorting**  
   - **Challenge**: Improving usability by adding pagination and sorting to the contact list.  
   - **Solution**:  
     - Used Material UI's `TablePagination` and `TableSortLabel` components to enable pagination and dynamic sorting.  
     - Managed state for sorting and pagination in React to ensure a seamless user experience.

3. **Managing State and Form Handling in React**  
   - **Challenge**: Efficiently managing state and handling forms for adding and editing contacts.  
   - **Solution**:  
     - Leveraged React's `useState` and `useEffect` hooks to manage form data and control component behavior.  
     - Implemented logic to reset form fields when switching between adding a new contact and editing an existing one.  
     - Simplified state updates using controlled components for input fields.  

4. **Styling the Application**  
   - **Challenge**: Creating a clean, responsive, and user-friendly interface for the application.  
   - **Solution**:  
     - Used Material UI's design system to maintain consistency across the UI components.  
     - Enhanced responsiveness with Material UI's grid system and custom styles using the `styled` function from `@mui/system`.  
     - Fine-tuned UI elements to ensure clarity and usability across different screen sizes.

## Future Improvements

1. **Advanced Search**:  
   Enable filtering contacts by multiple criteria simultaneously, such as combining name, company, and job title filters to provide a more robust search experience.

2. **Role-Based Access Control (RBAC)**:  
   Implement user roles with different permissions. For example:  
   - **Admin**: Full access to all features, including managing all users' contacts.  
   - **Viewer**: Read-only access to contact information.  

3. **Export/Import Contacts**:  
   - **Export**: Allow users to export their contact list to a CSV file for easy sharing or backup.  
   - **Import**: Provide functionality to import contacts from external CSV files to quickly populate the contact list.  

4. **Enhanced UI/UX**:  
   Revamp the design with a focus on modern aesthetics and better accessibility, ensuring a seamless and user-friendly interface.  

5. **Authentication**:  
   Introduce user login and registration to secure the contact data. Each user will have their own protected list of contacts, accessible only after logging in.

---

## Why Use MongoDB in a Contact Management System?

**MongoDB** is an excellent choice for a contact management system due to its flexible, schema-less architecture and scalability. Here are some reasons:  

1. **Dynamic Schema**:  
   Contacts can have varying fields (e.g., not all contacts may have a company or job title). MongoDB’s schema-less structure allows for storing documents with differing fields seamlessly.

2. **Scalability**:  
   MongoDB can handle a growing amount of data efficiently, making it ideal for systems expected to scale over time with a larger user base and more contacts.

3. **Rich Query Capabilities**:  
   MongoDB provides powerful querying options, such as filtering, searching, and sorting, which are essential for features like advanced search and dynamic sorting.

4. **JSON-like Data Format**:  
   MongoDB stores data in a JSON-like format (BSON), which integrates smoothly with the frontend and backend components of the MERN stack.

5. **Indexing**:  
   MongoDB supports indexing on fields like name, email, or phone number, allowing for faster search and retrieval of contact records.

6. **Integration with Node.js**:  
   Using MongoDB with Mongoose (an ODM for MongoDB) simplifies data manipulation in Node.js, ensuring clean and maintainable code for the backend.

7. **Cloud Flexibility**:  
   MongoDB Atlas provides a cloud-based managed database service, ensuring high availability, backups, and scalability without manual server management.

  

