Hi I have built this application using MERN stack.

#Backend-->

Here is a swagger documnetation for better undersating of api endpints -> https://reachhub-l2zo.onrender.com/api-docs/
Might take few seconds to start as it is deployed on render.

Security Measures --> 
1. Validation has been applied i.e if a existing users tries to signup, it will show user already in use or email/password is incorrect it will show inavlid credentials.
2. Bcrypt has been used to protect password.

Backend git--> https://github.com/arpit017/Reachhub-Backend
   

Api-Endpoints-->
1.https://reachhub-l2zo.onrender.com/top-players: Retrieves a list of the top 50 classical chess players.
2.https://reachhub-l2zo.onrender.com/player/{username}/rating-history: Retrieves the 30-day rating history for a specified player.
3.https://reachhub-l2zo.onrender.com/players/rating-history-csv: Generates and provides a CSV file with the rating history for the top 50 players. Each row contains the player’s username, their rating from 30 days ago, and their rating for each subsequent day up to today.

Frontend-->

Securtiy Measures-->
1.Conditional renedering has been applied i.e you cannot got to home or download csv file without logging in.

Performance Optimization-->
1.Redux has been used for data fetching and state management for a smooth user experience.
2.Login/Logout functionality has been used.
3.Implemented charts to visualize the rating history.
4.Chakra UI has been used for css.




