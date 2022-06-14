# Budgie Budgeting App
### [View App Here!](https://bslevin.github.io/budgie-budget-app/index.html){:target="\_blank"}

## Objective

* Personal Objective
To plan, create and develop something new using technologies I have not used before. 

* Academic Objective
To satisfy the criteria for my Code Institute course.

* User Objective
To create a web app that is user-friendly, enjoyable and useful.

## Table of Contents

- [UX & Design](#ux-&-design)
  * [Strategy Plane](#strategy-plane)
    + [User Stories](#user-stories)
  * [Skeleton Plane](#skeleton-plane)
    + [Wireframes](#sub-sub-heading)
  * [Surface Plane](#surface-plane)
    + [Colour Scheme](#colour-scheme)
    + [Imagery](#imagery)
    + [Iconography](#iconography)
    + [Typography](#typography)
  * [Structure Plane](#structure-plane)
  * [Scope Plane](#scope-plane)
- [Features left to implement](#features-left-to-implement)
- [Technologies used](#technologies-used)
- [Testing](#testing)
  * [Test Cases](#test-cases)
- [Deployment](#deployment)
  * [Project inception](#project-inception)
  * [GitHub Pages - Website Hosting](#githubpages---website-hosting)
- [Credits & Acknowledgements](#credits-&-acknowledgements)


## UX & Design

Goals:

* Demonstrate acquired knowledge with HTML, CSS and JavaScript.
* Give website users an interactive, useful budget app experience.
* Create a web app that will make the user want to return to the website and recommend it to others.

### User Stories

As a user, I want to:
* 1. Understand the purpose of the site on landing.
* 2. Be able to navigate the website without any issue.
* 3. Be able to use the budget app component.

User Story (1):

***"Understand the purpose of the site on landing."***

Criteria:
* Website states its objective immediately on landing without much effort for the user.

Observed:
* With the help of a call out message and description. It is clear what the purpose and intention of the web app is.  

Result: Pass

User Story (2):

***"Be able to navigate the website without any issue."***

Criteria:
* Website is easy to use and all links to different pages work as expected. The path taken is intuitive.

Observed:
* The minimalist look and feel of the web app makes the journey very easy. All links are working and labelled correctly to use the main site objective.    

Result: Pass

User Story (3):

***"Be able to use the budget app component."***

Criteria:
* Website budget tool should work as expected.

Observed:
* Able to add a total budget amount.
* Able to add an individual expense name.
* Able to add an individual expense amount.
* Able to edit an individual expense name.
* Able to edit an individual expense amount.
* Able to delete an individual expense.
* Able to delete all expenses.
* Got a visual display of Total budget amount, Total expense amount and Total balance.
* Got a visual display of the percentage (%) of each expense as part of the total budget.

Result: Pass


### Strategy Plane

Goals:

* Showcase knowledge acquired in HTML, CSS and JavaScript.
* Give website users an interactive experience and useful budget tool.
* Create an App that will make its users want to return on multiple visits. 


### Skeleton Plane 

#### Wireframes

Homepage Desktop

![Homepage Desktop](https://github.com/bslevin/budgie-budget-app/blob/main/assets/wireframe/budgieHomepage.png)


Homepage Mobile

![Homepage Mobile](https://github.com/bslevin/budgie-budget-app/blob/main/assets/wireframe/budgieHomepageMobile.png)


About page Desktop

![About Desktop](https://github.com/bslevin/budgie-budget-app/blob/main/assets/wireframe/budgieAbout.png)


About page Mobile

![About Mobile](https://github.com/bslevin/budgie-budget-app/blob/main/assets/wireframe/budgieAboutMobile.png)


Budget app Desktop

![Budget Desktop](https://github.com/bslevin/budgie-budget-app/blob/main/assets/wireframe/budgieBudget.png)


Budget App Mobile

![Budget Mobile](https://github.com/bslevin/budgie-budget-app/blob/main/assets/wireframe/budgieBudgetMobile.png)



## Features left to implement
* Ability for user to save different budget lists for different categories.
* Ability for a user to create saving goals.
* Vizualizations and charts to give the user a better experience.
* Create cookies so that expenses and budget can be persistent.


## Technologies used

* Balsamiq 
   * Wireframes for UX design.

* HTML
   * HTML to complete the structure of the website.

* CSS
   *  CSS to style the website.

* FontAwesome
   * Font Awesome is a font and icon toolkit based on CSS, I added it's CDN to allow the use of icons in the project.

* Google Developer Tools
   * Used to inspect page elements and help debug issues with the website in real time.

* JavaScript
   * JS for functionality and behaviour throughout the website, event listeners, functions and main BudgetApp Class.  

* Visual Studio Code
   * VSCode used VS Code and the live server extension to code and develop this project before committing to GitHub. 

* GitHub
   * Is the repository I used to store and also where the live website is hosted.

* Git 
   * Is the version control software used to add, commit and push code to the GitHub repository.

* Google Fonts
   * font-family: 'Courgette', sans-serif used throughout this project.

* Bootstrap
   * Main Framework used for CSS.


### Defensive programming measures

* Added if/else conditions on all form input to check for positive, not null values before accepting any data.

## Testing

Testing of HTML, CSS and JS was done using the below validators:

JavaScript [JavaScript](https://jshint.com/)
HTML HTML [HTML](https://validator.w3.org/#validate_by_input)
CSS [CSS](https://validator.w3.org/#validate_by_input)

Result: All passed with no errors.

Index.html
![Index](https://github.com/bslevin/budgie-budget-app/blob/main/assets/wireframe/home.png)

About.html
![About](https://github.com/bslevin/budgie-budget-app/blob/main/assets/wireframe/about.png)

Budget.html
![Budget](https://github.com/bslevin/budgie-budget-app/blob/main/assets/wireframe/budget.png)

CSS
![CSS](https://github.com/bslevin/budgie-budget-app/blob/main/assets/wireframe/css.png)

JS
![JS](https://github.com/bslevin/budgie-budget-app/blob/main/assets/wireframe/jshint.PNG)




### Surface Plane 

#### Colour Scheme
Colour scheme for the website was designed to be subtle with accents of Lime Green to complement the Budgie theme.
* Body: --defaultWhite: #f5f5f5;
* Text: Lime Green #beee3a;, White #fff, Black #000000. Lime Green colour selected to match feathers of Budgie bird. 
* Navbar: White: #fff
* Footer: rgba(0, 0, 0, 0.2);

#### Imagery

* Budgie bird logo: Immediately alerts the user to the theme of the app.  
* Body: Other images of people profiles to show the review section of the homepage.

#### Iconography 
* About page: use of fontawsome icons for LinkedIn and Github on the contact buttons leave the user in no doubt where to navigate to.
* Mobile: on small screen form factors the burger menu has been given extra bolder detail so that the user can easily use it to access the other parts of the site.

#### Typography
* font-family: 'Courgette', sans-serif; imported from Google Fonts used throughout.


## Bugs

* There was an issue where the JS eventlistener for page load was not working. I discovered on stack overflow that the 'document.load' could be unrealiable.
It was recommended to use 'window.load' instead.
Outcome: Issue resloved.

### Structure Plane


## Deployment

#### GitHub Pages - Cloud Hosting

I decided to get the app hosted early in the development cycle before a lot of the code was produced.

The steps taken to host the Budgie app live were:

* Navigating to the GitHub Repository page.
* Selecting the 'Settings' Tab.
* Scroll Down to the GitHub Pages Heading on the left of the screen.
* Select 'Master/Main Branch' as the source and root folder.
* Click the Save button.
* Click on the link to go to the live deployed page (this may take a few moments while the page is built).


## Credits & Acknowledgements

The Budgie App was created with the help of tutorials and resources from:

Images were open source.

* :heart: MDP [MDP](https://mdbootstrap.com/)
* :heart: Coding Addict [Coding Addict](https://www.youtube.com/codingaddict)

Thank you to my mentor, CI community and everyone who helped along the way :heart