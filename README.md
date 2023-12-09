# VoteVista

VoteVista is an open application that allows users to create questions, add options, and cast votes on their favorite options. No authentication is required, making it an inclusive platform for polling and voting.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/swapnil-jadhav-official/VoteVista-Polling-API.git
   cd VoteVista-Polling-API
2. **installation:**
    ```bash
    npm install
3. **starting server**
   ```bash
    npm start
   
 **Usage**
### Create a Question

**Endpoint:** `/questions/create`  
**Method:** `POST`  
**Body:** 
{
  "title": "Your Question Title"
}
### Add Options to a Question

**Endpoint:** `/questions/:id/options/create`  
**Method:** `POST`  
**Params:** Replace `:id` with the question ID  
**Body:** `{ "text": "Option Text" }`

### Delete a Question

**Endpoint:** `/questions/:id/delete`  
**Method:** `DELETE`  
**Params:** Replace `:id` with the question ID  

### Delete an Option

**Endpoint:** `/questions/options/:id/delete`  
**Method:** `DELETE`  
**Params:** Replace `:id` with the option ID  

### Add Vote to an Option

**Endpoint:** `/questions/options/:id/add_vote`  
**Method:** `POST`  
**Params:** Replace `:id` with the option ID  

### View a Question and Its Options

**Endpoint:** `/questions/:id`  
**Method:** `GET`  
**Params:** Replace `:id` with the question ID  

### Contributing

Feel free to contribute to VoteVista by opening issues or submitting pull requests. Your feedback and improvements are welcome!

