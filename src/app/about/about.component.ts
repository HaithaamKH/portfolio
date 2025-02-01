import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule]
})
export class AboutComponent {
  name: string = "Haitham Al-Khateeb";
  role: string = "Software Developer";
  education: string = "Bachelor's Degree in Computer Science, Yarmouk University";
  currentRole: string = "Jr. Software Developer at E-Tech Systems (Sep 2024 - Present)";
  experience: string[] = [
    "Gained hands-on experience working with enterprise-level applications, enhancing my understanding of scalable architecture and handling high-volume requests efficiently.",
    "Contributed to the development and maintenance of web applications using technologies such as Java, JSF (Trinidad and Prime Faces), Servlets, Jasper Reports, Spring Boot, and Angular.",
    "Collaborated with the team to implement robust solutions, ensuring performance, maintainability, and user satisfaction."
  ];
  skills: string[] = [
    "Programming Languages: Java, SQL, Python, JavaScript/TypeScript, HTML, CSS",
    "Frameworks & Libraries: Spring-Boot, Angular, JSF, Prime Faces, Servlets",
    "Problem Solving: Solved 400+ problems on LeetCode and other platforms",
    "Database Management: MySQL, Oracle, JDBC, JPA/Hibernate",
    "Other Skills: OOP, Clean Code (SOLID), Data Structures & Algorithms"
  ];
  goals: string = "My goal is to continue growing as a developer, contribute to impactful projects, and collaborate with like-minded individuals in the tech industry.";
}