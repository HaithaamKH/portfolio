import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule],
})
export class ProjectsComponent {
  projects = [
    {
      title: "Crud-App (Oct 2024 – Nov 2024)",
      description: "Built a secure web app using filters and sessions to handle login authentication and session timeout, and performed CRUD operations on a database.",
      technologies: ["JavaEE", "MySQL", "JSF", "Prime-Faces", "Tomcat"]
    },
    {
      title: "Crud-App (Sep 2024 – Oct 2024)",
      description: "Built a web app using filters and sessions for role-based authentication. Admins could perform all CRUD operations, while users could only edit their own information.",
      technologies: ["JavaEE", "Servlets", "MySQL", "JSP", "Tomcat"]
    },
    {
      title: "Rest-API-App (Feb 2024 – Apr 2024)",
      description: "Designed and implemented a REST API for user data management, featuring secure CRUD operations with Spring Security based on roles (admin, manager, and employee).",
      technologies: ["Spring-Boot", "MySQL", "Hibernate", "Security"]
    },
    {
      title: "Hand Gesture Detector (Oct 2023 – Jan 2024)",
      description: "A senior project focused on machine learning that detects sign language letters from hand gestures and displays them based on pre-processed data.",
      technologies: ["Python", "Scikit-learn", "MediaPipe", "OpenCV"]
    }
  ];
}