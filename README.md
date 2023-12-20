# khuda-lagche

## Project Overview

This project aims to develop a web application that provides personalized recipe recommendations. It uses a combination of Next.js with TypeScript for the frontend, FastAPI for the backend, and AWS services including DynamoDB for database management and Amplify for frontend hosting.

## Key Technologies

- **Frontend**: Next.js with TypeScript
- **Backend**: FastAPI
- **Database**: AWS DynamoDB
- **Hosting**: AWS Amplify for the frontend, AWS Elastic Beanstalk for the backend
- **Machine Learning**: Python (Scikit-Learn, TensorFlow, or PyTorch)
- **Authentication**: AWS Cognito

## Getting Started

### Prerequisites

- Node.js and npm
- Python 3.x
- AWS Account
- AWS CLI

### Setting Up the Project

1. **Clone the repository**

   ```bash
   git clone https://github.com/thetajwar2003/khuda-lagche.git
   cd khuda-lagche
   ```

2. **Install dependencies**

   Frontend:

   ```bash
   cd frontend
   npm install
   ```

   Backend:

   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. **Configure AWS**

   Set up AWS credentials and configure the AWS CLI with your account.

4. **Set up DynamoDB**

   Create the necessary tables in DynamoDB.

5. **Environment Variables**

   Set up the required environment variables for both frontend and backend.

### Running the Application

1. **Start the Frontend**

   ```bash
   cd frontend
   npm run dev
   ```

2. **Start the Backend**

   ```bash
   cd backend
   uvicorn main:app --reload
   ```

## Features

### Frontend

- User account management
- Recipe searching and browsing
- Recipe rating and saving
- Responsive UI

### Backend

- RESTful API for user and recipe management
- Recipe recommendation engine
- Secure user data handling

### Machine Learning

- Personalized recipe recommendations
- Continuous learning and adaptation

## Deployment

- **Frontend**: Deploy on AWS Amplify
- **Backend**: Host on AWS Elastic Beanstalk
