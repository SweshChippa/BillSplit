# BillSplit

BillSplit is a MERN stack application designed to optimize and minimize transactions when splitting bills among a group of people. Whether you're out dining with friends or sharing expenses while living together, BillSplit ensures that the number of transactions required to settle debts is minimized, making the process smooth and efficient.

## Features

### Authentication
- **Login Page**: Users can securely log into their accounts.
- **Register Page**: New users can create an account to start using the application.

### Dashboard
- **Home Page**: Users can view their groups, see the amounts they owe or are owed by other members, and access other essential features.

### Group Management
- **Create Groups**: Users can create new groups for different events or situations where expenses need to be shared.
- **Add Members**: Users can add other members to their groups. Group members will be able to see the group's information and contribute to expense tracking.
- **Group Page**: Each group has a dedicated page where members can view all relevant details.

### Expense Tracking
- **Add Purchase Information**: Users can log purchases made on behalf of the group. This information is used to calculate the amount each member owes.
- **View Group Dashboard**: All group members can view the group's expense information on their group dashboard.

### Admin Features
- **Finalize Group**: The group admin (creator) has the option to finalize the group expenses, triggering the bill splitting process.
- **Split Bills**: Once finalized, the application calculates the minimized transactions required to settle all debts within the group.
- **Delete Group**: The admin can delete the group once all transactions are settled.

### Optimized Transactions
- **Minimized Transactions**: After finalizing, the application displays the minimized number of transactions required for each group member to settle their debts, making it easy for everyone to pay back the right amount.

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/BillSplit.git
