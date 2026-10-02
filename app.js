const formButton = document.querySelector("button");
const activityListElement = document.querySelector(".activitylist");
const summaryElement = document.querySelector(".summary");

const titleInput = document.querySelector("#title");
const topicInput = document.querySelector("#topic");
const minutesInput = document.querySelector("#minutes");
const dateInput = document.querySelector("#date");
const statusInput = document.querySelector("#status");
const reflectionInput = document.querySelector("#reflection");

const activityList = 
    [{id: "HTML Forms2026-09-28", title: "HTML Forms", topic: "Web Development", minutes: 45, date: "2026-09-28", status: "Completed", reflection: ""}, 
    {id: "React Components2026-09-28", title: "React Components", topic: "React", minutes: 60, date: "2026-09-28", status: "In progress", reflection: ""},
    {id: "Rust Ownership2026-09-28", title: "Rust Ownership", topic: "Rust", minutes: 90, date: "2026-09-28", status: "Planned", reflection: ""}];

renderActivityList();

formButton.addEventListener("click", (event) => {
    // Check that all required fields are filled in
    if (titleInput.value === "" || topicInput.value === "" || minutesInput.value === "" || dateInput.value === "" || statusInput.value === "") {
        alert("Please fill in all required fields.");
        event.preventDefault();
        return;n
    } else {
        // Create an object to hold the activity data
        let activity = {};
        activity.title = titleInput.value;
        activity.topic = topicInput.value;
        activity.minutes = parseInt(minutesInput.value);
        activity.date = dateInput.value;
        activity.status = statusInput.value[0].toUpperCase() + statusInput.value.slice(1);
        activity.reflection = reflectionInput.value;
        activity.id = activity.title + activity.date;

        // Clear the form inputs
        titleInput.value = "";
        topicInput.value = "";
        minutesInput.value = "";
        dateInput.value = "";
        statusInput.value = "";
        reflectionInput.value = "";

        // Add the activity to the activityList array and prevent reloading
        activityList.push(activity);
        renderActivityList();
        event.preventDefault();
    }
});

function renderActivityList() {
    // Clear the existing list and summary
    activityListElement.innerHTML = '';
    summaryElement.innerHTML = '';

    // Create variables for the summary statistics
    let totalActivities = activityList.length;
    let totalMinutes = 0;
    let completedActivities = 0;

    // Loop through the activityList and create an article for each activity
    for (const activity of activityList) {
        const article = document.createElement("article");
        article.innerHTML = `
            <p>${activity.title}</p>
            <p>Topic: ${activity.topic}</p>
            <p>Minutes: ${activity.minutes}</p>
            <p>Date: ${activity.date}</p>
            <p>Status: ${activity.status}</p>
            <p>Reflection: ${activity.reflection}</p>
        `;

        totalMinutes += activity.minutes;
        completedActivities += activity.status === "Completed" ? 1 : 0;

        activityListElement.appendChild(article);
    }

    // Update the summary statistics
    const article = document.createElement("article");
    article.innerHTML = `
        <p>Recorded Minutes: ${totalMinutes} minutes</p>
        <p>Number of Activities: ${totalActivities}</p>
        <p>Number Completed: ${completedActivities}</p>
    `;
    summaryElement.appendChild(article);
}