# 🏀 Hangtime - The App for Pickup BBallers ⛹⛹️‍♀️


Welcome to Hangtime – the app for pickup basketball players to schedule games, and/or join games already scheduled by other app users in your local area! Users that schedule a game can also invite other users to participate in their game as well.

In order to access the MVP of this app, you can follow these steps below after forking and cloning the file to your local files…

1. Open a terminal in the visual code app, make sure that you are in the correct directory (folder) that contains a Pipfile, and then run pipenv install in your terminal to install the required Python libraries.

2. After verifying that your pipenv virtual environment is ready to use, enter pipenv shell to enter the virtual environment.

3. Run npm install --prefix client in your terminal to install the dependencies for the React app.

4. Enter the command cd server in the terminal to move into the server directory

5. Enter the command python app.py in the terminal to run the Flask app (make sure you are still in the server directory before running this terminal command).

6. In a new terminal, run npm start --prefix client in your terminal to run the React app in the browser. If your browser does not automatically open the page for you, open http://localhost:4000 to view it in your browser.

Below is an outline/summary of the functionality within each route of this MVP website/app, as well as some of the small bugs and missing features that will be addressed and updated in the next version.

I. Homepage (route: “/”)

Upon reaching this page for the first time, you will need to log in to an account to access the homepage, and you can do so by clicking the “Login” button appearing in the top left of the logged out user’s navbar.

This will then bring you the “/login” route outlined in the next section below…

The “Create Account” button to the right, however, is not yet functional, but will be in the next app version.

After logging in (per instructions in section below for login route) you’re brought to a page that displays a list of all the basketball courts in our database (currently using three examples in NYC in our seed.py file). There is also a search bar directly above the list which allows you to search by court name or location, and the list will filter results based on search bar inputs from the user. There are also two buttons in the rightmost columns of the table, detailed below…

“View Games” (secondary): clicking this button will currently just take you to one of our other routes outlined in one of the sections below (“join games”), which displays all upcoming games scheduled by other users, but it doesn’t direct to games unique to the court you selected the associated view game button from, as intended (to be addressed in next version)

“Create New Game” (primary): clicking this button will take you to our “create games” route (detailed below in another section). The only missing piece of this user journey, which we will address in the next app version, is to have the appropriate court pre-selected for the user when going to create a new game via the create a new game form in /create_games route.

II. Login (route: “/login”)
For demo purposes, you can login with the credentials built for one of our dummy accounts, detailed below…

Username: dishindimes88
Password: Amd1071988

Click “submit” (pressing “enter” on keyboard doesn’t fulfill login yet)
Upon doing so, you’ll notice the only change to the page is the navbar values – in version 2.0 we will address this issue by bringing you into the homepage route after logging in

III. Courts (route: “/courts”)

This route is an exact replica to our “homepage” route detailed in section I above.

IV. Join Games (route: “/find_games”)

This route displays a list of upcoming games that have been scheduled by other users of the website, as well as a search bar that allows you to search values belonging to each of the columns of the table (i.e. can search by date/time, court, skill level, gender, game type, and spots remaining), and the table will filter out values that are not in correspondence with your search inputs.
There is also a “Join Game” button for each row of the table that allows you to claim one of the remaining spots listed in the table, and once you have done so, the spots remaining values will decrease by one and the button will change from displaying “Join Game” to “Leave Game”, should you decide to change your mind.
Also, when you click the “Join Game” button, you will see this game appear in an “Upcoming Games” table within your profile page, explained further in one of the sections below for the “Profile” route.
If you click the subsequent “Leave Game” button, the spots remaining value will increase up by 1 to its previously listed value again.
Small bug - when reloading the page, the button and spots remaining values don’t properly persist in the fashion we want, which we will address in next version

V. Create Games (route: “/create_games”)

There are five required fields for you to fill out before clicking the “create game” button and completing the process of adding a game to our database…

Date/time picker
Select a court dropdown*
Select a skill level*
Select a gender*
Select a game type*

*can only select one of the values currently in our seeded database

After successfully adding a game a message of “Thanks for adding a new game!” will display on the screen, and if you toggle over to the “Join Games” route via the navbar, you will see your newly added game appear in the bottommost row of the table

Small bugs to address in next version: 

date/times of newly added game rows display in different, and ill-fitting format than we have in our seed file.
Spots remaining value is automated to display 9 regardless of whether you choose to create a full-court (5v5) game or a half-court (3v3) game; for the latter of those two options we will look to have that value automate to 5 instead of 9, in order to signify that only 5 additional players (other than yourself) are needed to fill the game.


VI. Players (route: “/players”)

Just like the “courts” and “join games” routes, this route displays a table and a search bar that interact with one another. The table displays all of the users (or players) currently in our database, and primarily serves to assist our users that recently created a new game that needs to be filled, as there is an “invite to play” button in the rightmost column of each row.
You can search for other players by any of the values in the table – so, for instance, if you’re looking for a center to fill out your squad, you can search by position, and the table will filter the results of your search accordingly
Bugs to fix:
“Invite to play” button is for display only as of now, it currently doesn’t perform any function in the website, but in a future version of the app, this would basically prompt a notification in a user’s profile that allows them to accept or decline the invitation to play
We are also unable to view another user/player’s profile page as of yet, but we’ve built a profile route, outlined below, in order to show what profile pages look like, and you can currently only view the profile of yourself as a logged in user/player.

VII. Profile (route: “/profile”)

This route is mostly for display purposes only at this stage, but the “upcoming games” table does have some functionality to it based on behaviors taken within other routes of the website. As previously referenced in section IV for the join games route, there is an upcoming games table towards the bottom of your profile, which is meant to display each of the games you’ve clicked “join game” on via the join game route’s table.
Above this table is your id card with a profile pic to the left, and username, bio, and vitals (i.e. age | gender | height | weight | position) listed.
Small bug to address:
The upcoming games table is currently only set up to ingest and display one row, and we will address this in the next version

For any questions or general inquiries, please feel free to contact us at amdiamond107@gmail.com.
