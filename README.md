## Users:
Primary user - an individual learner recording professional development activities on one device.
Mentor or reviewer - a person such as Dom who can view a demonstration and understand progress from the summary screen. The application does not require a separate mentor login.
No authentication, user accounts, teams, administration screens or multi-user sharing are required.

## Screens and Required Content:
Dashboard - Shows total learning minutes, number of activities, completed activities and a filtered activity list.
Add Activity - Form for title, topic, minutes, date, status and optional reflection. It may be displayed on the dashboard rather than as a separate route.
Activity Detail and Edit - Shows one activity and allows its fields or status to be changed. In the first two weeks this may be a card or inline editing rather than a separate route.
Empty Loading and Error States - Clear messages shown when there are no activities, when API data is loading and when a request fails.

## Required Functions:
* Create a learning activity.
* Display all learning activities.
* Edit an activity and mark it planned, in progress or completed.
* Delete an activity after confirmation.
* Filter activities by topic and status.
* Show summary totals for recorded minutes, number of activities and number completed.
* Validate required fields and require minutes to be greater than zero.
* Preserve data between sessions: localStorage in Week 2, then SQLite through the Rust API in Week 4.
* Display useful loading, empty, validation and error messages.

## Approved Data Fields:
Each learning activity contains: id, title, topic, minutes, activity date, status and optional reflection. Status must be one of Planned, In Progress or Completed. Topic is entered as text; a separate topic-management feature is not required.

## Initial GitHub Backlog:
~~Issue 1 - Create semantic HTML page structure and accessible activity form.~~
~~Issue 2 - Add responsive CSS layout and visible keyboard focus.~~
~~Issue 3 - Render supplied sample activities and dashboard totals.~~
Issue 4 - Convert the page into React components.
Issue 5 - Add React create, edit, complete, delete and filter behaviour.
Issue 6 - Persist React data in localStorage.
Issue 7 - Create Rust LearningActivity model and command-line operations.
Issue 8 - Create Axum API routes and JSON request and response models.
Issue 9 - Add SQLite migration and SQLx persistence.
Issue 10 - Connect React to the API and implement loading and error states.
Issue 11 - Add tests, documentation, screenshots and release notes.

## Live URL: 
https://setherell.github.io/learning-tracker/

## Screenshot
<img width="1901" height="952" alt="image" src="https://github.com/user-attachments/assets/2b61e05b-b2c7-4e3f-a3e2-e8b6c697dfa7" />

## Features
* Dynamic rendering
* Form validation
* Responsive layout

## Limitations
* No backend database to store added data
* Can not update/delete existing data

## Technology List
* HTML
* CSS
* JavaScript
* GitHub Pages

## Local Run Instructions
1. Clone the repository with: *git clone https://setherell.github.io/learning-tracker/*
2. Open the project folder
3. Open index.html in a browser
