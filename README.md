# ARCHIVED AS OF 10/31/2022

# Challenge 14


## Urban-memory: Model-View-Controller (MVC): Tech Blog

---

### Contents 

---

1. Objectives
2. About
3. Screenshots
4. Links
5. Assignment details & grading rubric (*ignore me*)

<br>
<br>

### Objectives ###

---

<br>

1. WHEN I visit the site for the first time THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in.

2. WHEN I click on the homepage option THEN I am taken to the homepage.

3. WHEN I click on any other links in the navigation THEN I am prompted to either sign up or sign in.

4. WHEN I choose to sign up THEN I am prompted to create a username and password.

5. WHEN I click on the sign-up button THEN my user credentials are saved and I am logged into the site.

6. WHEN I revisit the site at a later time and choose to sign in THEN I am prompted to enter my username and password.

7. WHEN I am signed in to the site THEN I see navigation links for the homepage, the dashboard, and the option to log out.

8. WHEN I click on the homepage option in the navigation THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

9. WHEN I click on an existing blog post THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment.

10. WHEN I enter a comment and click on the submit button while signed in THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.

11. WHEN I click on the dashboard option in the navigation THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

12. WHEN I click on the button to add a new blog post THEN I am prompted to enter both a title and contents for my blog post

13. WHEN I click on the button to create a new blog post THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

14. WHEN I click on one of my existing posts in the dashboard THEN I am able to delete or update my post and taken back to an updated dashboard

15. WHEN I click on the logout option in the navigation THEN I am signed out of the site

16. WHEN I am idle on the site for more than a set time THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

<br>
<br>

### About ###

---

<br>

1. WHEN I visit the site for the first time THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in.
    > When the user opens the page, they are presented with a landing page which includes all existing posts and associated comments.

2. WHEN I click on the homepage option THEN I am taken to the homepage.
    > The home button will direct the user to the home/landing page.

3. WHEN I click on any other links in the navigation THEN I am prompted to either sign up or sign in.
    > To navigate to the dashboard the user is prompted to sign in. If they are signed in, they will be directed to the dashboard. Otherwise they will be directed to the sign in page.

4. WHEN I choose to sign up THEN I am prompted to create a username and password.
    > When the user clickes the sign-up button on the home page, they are prompted to enter a username, their email address and choose a password. 

5. WHEN I click on the sign-up button THEN my user credentials are saved and I am logged into the site.
    > Upon signing up, the user is logged into the site and their credentials are saved to the local db.

6. WHEN I revisit the site at a later time and choose to sign in THEN I am prompted to enter my username and password.
    > When the user clicks the sign in page, they are prompted to enter their chosen username and password to log in and make posts.

7. WHEN I am signed in to the site THEN I see navigation links for the homepage, the dashboard, and the option to log out.
    > Option buttons remain visible however any attempt to navigate to the dashboard without logging in prior, the user will be directed to the sign in page first. 

8. WHEN I click on the homepage option in the navigation THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
    > The home page button will direct users to the landing page where they are prompted to either sign in or sign up to create posts. They will see existing posts and comments from this page.

9. WHEN I click on an existing blog post THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment.
    > Clicking on a post title from the home screen brings the user to a page where they can view the content, author, and any comments on the blog post.

10. WHEN I enter a comment and click on the submit button while signed in THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.
    > Users can slick on the comment link which will bring up a modal for them to enter their comment. Clicking the Save Changes button will submit the comment and the new comment will be displayed on the screen.

11. WHEN I click on the dashboard option in the navigation THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
    > Dashboard is only accessible if logged in. It will show any posts made by the user. From here they can make a new post, edit or remove existing posts.

12. WHEN I click on the button to add a new blog post THEN I am prompted to enter both a title and contents for my blog post
    > Clicking Make a Post will bring the user to a page where they can enter a title and blog post content. 

13. WHEN I click on the button to create a new blog post THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
    > Once the user has entered a title and content, they can save the post which will reload the dashboard and their newly created psot will be displayed.

14. WHEN I click on one of my existing posts in the dashboard THEN I am able to delete or update my post and taken back to an updated dashboard
    > Clicking on the edit link for a post will open a modal which the user can then rewrite their post and change the title.

15. WHEN I click on the logout option in the navigation THEN I am signed out of the site
    > Clicking logout button ends the users current session.

16. WHEN I am idle on the site for more than a set time THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
    > Cookies expire after 5 minutes and will automatically destroy the users current session, effectively logging them out.

<br>
<br>

### Screenshots ###

---

<br>

![myscreenshot](./Assets/Screenshot1.png)

Landing page

<br>

![myscreenshot](./Assets/Screenshot2.png)

Dashboard

<br>

![myscreenshot](./Assets/Screenshot3.png)

Making a new blog post

<br>

![myscreenshot](./Assets/Screenshot4.png)

Editing a post

<br>

![myscreenshot](./Assets/Screenshot5.png)

Log out screen

<br>

### Links ###

---

<br>


Link to Github repo: https://github.com/JDReeves86/urban-memory-Blog

Link to deployed app: https://agile-waters-90061.herokuapp.com/
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

---

---

## Assignment Details & Grading Rubric ##

---

---

<br>
<br>

# 14 Model-View-Controller (MVC): Tech Blog

## Your Task

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

Your task this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Mock-Up

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./Assets/14-mvc-homework-demo-01.gif) 

## Getting Started

Your application’s folder structure must follow the Model-View-Controller paradigm. You’ll need to use the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views, use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for your Models, and create an Express.js API for your Controllers.

You’ll also need the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

**Note**: The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and you do not have to do anything to your application other than implement the npm package.

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

    * Application’s folder structure follows the Model-View-Controller paradigm.

    * Uses the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views.

    * Application must be deployed to Heroku.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.

### Application Quality: 15%

* User experience is intuitive and easy to navigate.

* User interface style is clean and polished.

* Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
