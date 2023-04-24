# Social-Penguins [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
In this project, the user is able to use a social platform where they can create a thought, have reactions, and even add or delete friends. This application uses insomnia to test the routes such as GET, POST, PUT, and DELETE. These routes apply to every users, thoughts, reactions, and friends.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## How to use
Once the code is loaded up, simply open up an intergrated terminal and install the required dependencies by using the command `npm i`. After that, use the command `npm start` to initialize the server. Finally, navigate to your insomnia app and text your desired routes. Make sure to use the proper JSON body for POST routes. 

## At a Glance
![2023-04-23 (3)](https://user-images.githubusercontent.com/117941643/233892233-3effe065-a609-4ac7-880a-73d7ebc7ec29.png)

![2023-04-23 (2)](https://user-images.githubusercontent.com/117941643/233892294-a85e87b2-c2b4-4bf3-801c-449e42f061fe.png)

![2023-04-23 (1)](https://user-images.githubusercontent.com/117941643/233892354-db8b094e-decf-4205-9230-c6a7e83653a0.png)

![2023-04-23](https://user-images.githubusercontent.com/117941643/233892152-3a376c03-9c04-4ffb-b468-9657af9cc472.png)

## Tools and Technology Used

 `
    "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^6.9.2"
    },
    "devDependencies": {
    "nodemon": "^2.0.9"
    }
`

### Links
https://drive.google.com/file/d/1X363T9X921IVjdHvulerMVOECA34lrIP/view

https://github.com/JesusV545/Social-Penguins

#### Developer's Note
It's always nice to be a social penguin. 
