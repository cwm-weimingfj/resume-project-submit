// bio
var bio = {
    'name': 'Michael Jordan',
    'role': 'Senior Web Developer',
    'contacts': {
        'mobile': '12345678',
        'email': 'mj@google.com',
        'github': 'mj',
        'twitter': '@mj',
        'location': 'Chigago'
    },
    'welcomeMessage': 'Welcome to my resume',
    'skills': [
        'PHP',
        'MySQL',
        'JS',
        'HTML',
        'CSS',
        'Java'
    ],
    'biopic': 'https://pbs.twimg.com/profile_images/3095402126/f4af1bcc754243eb32e11fb9348f1a9b.png',
    'display': function() {
        var formattedName = formathtml(HTMLheaderName, this.name);
        var formattedRole = formathtml(HTMLheaderRole, this.role);
        var formattedGenCon = HTMLcontactGeneric.replace('%contact%', 'contact')
            .replace('%data%', 'Me');
        var formattedMobile = formathtml(HTMLmobile, this.contacts.mobile);
        var formattedEmail = formathtml(HTMLemail, this.contacts.email);
        var formattedGithub = formathtml(HTMLgithub, this.contacts.github);
        var formattedTwitter = formathtml(HTMLtwitter, this.contacts.twitter);
        var formattedLocation = formathtml(HTMLlocation, this.contacts.location);
        var formattedBioPic = formathtml(HTMLbioPic, this.biopic);
        var formattedWelcomeMsg = formathtml(HTMLwelcomeMsg, this.welcomeMessage);

        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);
        $('#header').append(formattedBioPic);
        $('#header').append(formattedWelcomeMsg);
        $('#header').append(HTMLskillsStart);

        $('#topContacts').append(formattedGenCon);
        $('#topContacts').append(formattedMobile);
        $('#topContacts').append(formattedEmail);
        $('#topContacts').append(formattedGithub);
        $('#topContacts').append(formattedTwitter);
        $('#topContacts').append(formattedLocation);

        $('#footerContacts').append(formattedMobile);
        $('#footerContacts').append(formattedEmail);
        $('#footerContacts').append(formattedGithub);
        $('#footerContacts').append(formattedTwitter);
        $('#footerContacts').append(formattedLocation);

        for (i = 0; i < this.skills.length; i++) {
            $("#skills").append(formathtml(HTMLskills, this.skills[i]));
        }
    }
};

// education
var education = {
    'schools': [{
        'name': 'University of ABC',
        'location': 'NY',
        'degree': 'Art',
        'majors': [
            'Bachelor of Art',
            'Master of Art',
        ],
        'dates': '1995 - 1998',
        'url': '@todo'
    }, {
        'name': 'University of XYZ',
        'location': 'Chigago',
        'degree': 'Science',
        'majors': [
            'Bachelor of Physics',
            'Master of Physics',
        ],
        'dates': '1995 - 1998',
        'url': '@todo'
    }],
    'onlineCourses': [{
        'title': 'Froendend Dev',
        'school': 'Udacity',
        'dates': '2000 - 2005',
        'url': 'Udacity'
    }, {
        'title': 'iOS Dev',
        'school': 'Udemy',
        'dates': '2005 - 2008',
        'url': 'Udemy'
    }],
    'display': function() {

        $("#education").append(HTMLschoolStart);

        for (i = 0; i < this.schools.length; i++) {
            var formattedName = formathtml(HTMLschoolName, this.schools[i].name);
            var formattedDegree = formathtml(HTMLschoolDegree, this.schools[i].degree);
            var formattedDates = formathtml(HTMLschoolDates, this.schools[i].dates);
            var formattedLocation = formathtml(HTMLschoolLocation, this.schools[i].location);
            var formattedMajors = '';

            var majors = this.schools[i].majors;
            for (j = 0; j < majors.length; j++) {
                formattedMajors += formathtml(HTMLschoolMajor, majors[j]);
            }

            var formatted = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajors;

            $(".education-entry").prepend(formatted);
        }


        $("#education").append(HTMLonlineClasses);

        for (i = 0; i < this.onlineCourses.length; i++) {
            var formattedTitle = formathtml(HTMLonlineTitle, this.onlineCourses[i].title);
            var formattedSchool = formathtml(HTMLonlineSchool, this.onlineCourses[i].school);
            var formattedDates = formathtml(HTMLonlineDates, this.onlineCourses[i].dates);
            var formattedURL = formathtml(HTMLonlineURL, this.onlineCourses[i].url);
            var formatted = formattedTitle + formattedSchool + formattedDates + formattedURL;
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formatted);
        }
    }
};

// work
var work = {
    'jobs': [{
        'employer': 'Google',
        'title': 'Web Developer',
        'location': 'NY',
        'dates': '2000 - 2003',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }, {
        'employer': 'Apple',
        'title': 'Product Designer',
        'location': 'Cuppertino',
        'dates': '2003 - 2006',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }, {
        'employer': 'YouTube',
        'title': 'Product Manager',
        'location': 'Chigago',
        'dates': '2006 - 2010',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }],
    'display': function() {
        $("#workExperience").append(HTMLworkStart);

        for (i = 0; i < this.jobs.length; i++) {
            var formattedEmployer = formathtml(HTMLworkEmployer, this.jobs[i].employer);
            var formattedTitle = formathtml(HTMLworkTitle, this.jobs[i].title);
            var formattedLoc = formathtml(HTMLworkLocation, this.jobs[i].location);
            var formattedDates = formathtml(HTMLworkDates, this.jobs[i].dates);
            var formattedDesc = formathtml(HTMLworkDescription, this.jobs[i].description);

            var formatted = formattedEmployer + formattedTitle + formattedDates + formattedLoc + formattedDesc;

            $(".work-entry").prepend(formatted);
        }
    }
};

// projects
var projects = {
    'projects': [{
        'title': 'Google Plus',
        'dates': '2000-2003',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'images': [
            'http://placehold.it/300x150',
            'http://placehold.it/300x150',
            'http://placehold.it/300x150'
        ]
    }, {
        'title': 'iPhone 4S',
        'dates': '2003-2006',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'images': [
            'http://placehold.it/300x150',
            'http://placehold.it/300x150',
            'http://placehold.it/300x150'
        ]
    }, {
        'title': 'YouTube',
        'dates': '2006-2010',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'images': [
            'http://placehold.it/300x150',
            'http://placehold.it/300x150',
            'http://placehold.it/300x150'
        ]
    }],
    'display': function() {
        $("#projects").append(HTMLprojectStart);

        for (i = 0; i < this.projects.length; i++) {
            var formattedTitle = formathtml(HTMLprojectTitle, this.projects[i].title);
            var formattedDate = formathtml(HTMLprojectDates, this.projects[i].dates);
            var formattedDesc = formathtml(HTMLprojectDescription, this.projects[i].description);
            var formattedImgs = '';

            var imgs = this.projects[i].images;
            for (j = 0; j < imgs.length; j++) {
                formattedImgs += formathtml(HTMLprojectImage, imgs[j]);
            }

            var formatted = formattedTitle + formattedDate + formattedDesc + formattedImgs;

            $(".project-entry").prepend(formatted);
        }
    }
};

// custom functions
function formathtml(template, newContent, placeholder = '%data%') {
    return template.replace(placeholder, newContent);
}

// display stuffs
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
