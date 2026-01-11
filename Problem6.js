/*
TODO: Problem-6: This time, create a project management system, where there will be many projects in an array, each project will have a project name, project description, team members (in the array), deadline and tasks, each task will have a title, assignee and status, convert it to json with .stringify
*/

// Solution: 

const projectManagement = {
    projects: [
        {
            projectName: 'Website Redesign',
            projectDescription: 'Redesign the corporate website to improve user experience.',
            teamMembers: ['Alice', 'Bob', 'Charlie'],
            deadline: '2024-12-31',
            tasks: [
                { title: 'Create wireframes', assignee: 'Alice', status: 'Completed' },
                { title: 'Develop frontend', assignee: 'Bob', status: 'In Progress' },
                { title: 'Test website', assignee: 'Charlie', status: 'Pending' }
            ]   
        },
        {
            projectName: 'Mobile App Development',  
            projectDescription: 'Develop a mobile app for our services.',
            teamMembers: ['David', 'Eve', 'Frank'],
            deadline: '2025-03-15', 
            tasks: [
                { title: 'Design UI', assignee: 'David', status: 'Completed' },
                { title: 'Implement backend', assignee: 'Eve', status: 'In Progress' },
                { title: 'Deploy app', assignee: 'Frank', status: 'Pending' }
            ]   
        }
    ]
};
const projectManagementJSON = JSON.stringify(projectManagement);
console.log(projectManagementJSON);
