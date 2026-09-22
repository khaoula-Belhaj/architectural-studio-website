# KHAM Studio Design — Architectural Studio Website

**KHAM Studio Design** is a modern, responsive web platform developed to establish a refined digital presence for an architecture and interior design studio.

The website combines **visual storytelling, architectural portfolio presentation, interactive interfaces and responsive front-end development** to create an immersive digital experience that reflects the studio's creative identity and professional positioning.

The platform brings together the studio's **projects, services, agency presentation and contact experience** through a structured and visually focused interface designed around the principles of contemporary architecture and interior design.

---

## Project Overview

The objective of the project was to transform a traditional architecture portfolio into a **structured digital platform** capable of presenting the studio's work in a professional and engaging way.

The website was designed around a visual-first approach, allowing architectural photography and project content to remain the primary focus while maintaining clear navigation and intuitive interactions.

### Core Objectives

* Establish a professional digital presence for the studio
* Showcase architecture and interior design projects
* Organize projects through a structured portfolio
* Provide dedicated pages for individual projects
* Create an immersive image exploration experience
* Present the studio's services and design approach
* Provide a clear contact and inquiry interface
* Ensure responsive behavior across desktop, tablet and mobile devices
* Combine visual design with functional front-end engineering

---

# Key Features

## 01 — Immersive Homepage

The homepage provides the primary introduction to the studio, combining visual identity, architectural imagery and structured navigation.

### Main elements

* Full-width visual hero section
* Studio branding
* Primary navigation
* Architectural imagery
* Service presentation
* Interactive visual elements
* Responsive layout

The interface prioritizes visual hierarchy and allows the studio's architectural work to remain the central focus of the experience.

---

## 02 — Architectural Project Portfolio

The portfolio section provides a structured presentation of the studio's architecture and interior design projects.

### Features

* Project listing
* Project categories and information
* Visual project cards
* Dedicated project pages
* Structured project metadata
* Architectural image presentation
* Responsive project layouts

The portfolio is designed to make project discovery simple while maintaining an editorial and premium visual presentation.

---

## 03 — Dynamic Project Pages

Individual projects are rendered dynamically from structured JavaScript data.

Each project can contain:

* Project title
* Project description
* Project information
* Project category
* Project imagery
* Image galleries
* Additional project details

The selected project is determined through a URL parameter.

```text
project.html?project=PROJECT_ID
```

This architecture allows multiple projects to share a common project-detail interface while dynamically displaying project-specific content.

### Benefits

* Reusable project templates
* Centralized project data
* Reduced duplication
* Easier project management
* Consistent presentation across the portfolio

---

## 04 — Interactive Image Gallery

The project pages include an interactive gallery designed to provide an immersive way of exploring architectural projects.

### Gallery capabilities

* Full-size image viewing
* Lightbox interface
* Previous / next navigation
* Image counter
* Interactive controls
* Multiple images per project
* Responsive gallery behavior

The gallery system is designed to emphasize architectural photography while providing a smooth browsing experience.

---

## 05 — Studio / Agency Presentation

The agency section introduces the studio and communicates its professional identity.

It presents information related to:

* Studio identity
* Design approach
* Services
* Creative philosophy
* Professional positioning

The section provides visitors with contextual information before they move from project exploration to direct contact.

---

## 06 — Contact Experience

The contact section provides a dedicated interface for project inquiries and client communication.

### Contact form

* Name
* Email address
* Project type
* Message
* Required-field validation
* Email format validation
* Submission feedback

Form submissions are handled through **EmailJS**, connecting the front-end interface to the email delivery workflow.

---

## 07 — Responsive Web Design

The website was developed with a responsive-first approach to provide a consistent experience across different screen sizes.

### Responsive implementation

* Flexible layouts
* Responsive typography
* Adaptive spacing
* Responsive image presentation
* Mobile navigation
* Mobile-specific interactions
* Responsive project galleries
* Touch-oriented interactions

The interface adapts its structure and interactions according to the available screen space without compromising the visual identity of the website.

---

## 08 — Mobile Navigation

A dedicated mobile navigation system provides an optimized experience for smaller screens.

### Mobile features

* Burger menu
* Responsive navigation controls
* Touch-oriented interactions
* Adaptive menu behavior
* Simplified mobile navigation

---

# Technology Stack

## Front-End

| Technology            | Purpose                                                         |
| --------------------- | --------------------------------------------------------------- |
| **HTML5**             | Semantic page structure and content organization                |
| **CSS3**              | Layout, responsive design, animations and visual styling        |
| **JavaScript (ES6+)** | Dynamic content, interactions, navigation and application logic |
| **EmailJS**           | Contact form submission and email integration                   |

---

# Technical Architecture

The website follows a lightweight front-end architecture based on structured project data and reusable rendering logic.

```text
                    USER
                     │
                     ▼
            ┌─────────────────┐
            │   Web Interface │
            │   HTML5 / CSS3  │
            │   JavaScript    │
            └────────┬────────┘
                     │
          ┌──────────┼──────────┐
          ▼          ▼          ▼
      Homepage    Portfolio   Agency
                     │
                     ▼
              Project Selection
                     │
                     ▼
          Dynamic Project Rendering
                     │
                     ▼
             Interactive Gallery
                     │
                     ▼
                Contact Form
                     │
                     ▼
                  EmailJS
```

---

# Development Focus

This project demonstrates practical experience across several areas of modern front-end development:

* Front-end web development
* Responsive web design
* UI implementation
* JavaScript development
* Dynamic content rendering
* Structured data management
* Interactive gallery development
* Lightbox interfaces
* Form validation
* Mobile interaction design
* Third-party service integration
* Reusable interface components
* Visual storytelling for digital products

---

# Design Approach

The visual direction was developed specifically around the aesthetics of **architecture and interior design**.

The interface emphasizes:

* Large-scale architectural imagery
* Strong visual hierarchy
* Minimal interface elements
* Generous spacing
* Structured layouts
* Editorial-style presentation
* Clear navigation
* Consistent typography
* Responsive behavior
* Visual consistency

The design principle is simple:

> **Let the architecture remain the visual focus while the interface supports discovery and interaction.**

The website therefore avoids unnecessary interface elements and prioritizes content, imagery and spatial composition.

---

# User Experience Flow

The primary user journey follows a simple discovery-to-contact path:

```text
DISCOVER
   │
   ▼
EXPLORE SERVICES
   │
   ▼
BROWSE PROJECTS
   │
   ▼
SELECT PROJECT
   │
   ▼
EXPLORE PROJECT DETAILS
   │
   ▼
BROWSE IMAGE GALLERY
   │
   ▼
DISCOVER THE STUDIO
   │
   ▼
CONTACT
```

This flow is designed to progressively move visitors from **visual discovery** toward **project exploration and potential inquiry**.

---

# Implementation Highlights

## Dynamic Content Rendering

Project information is maintained in structured JavaScript data and dynamically rendered according to the selected project.

This makes it possible to maintain a reusable project-detail interface rather than creating an independent page for every project.

## Interactive Interfaces

JavaScript manages several interactive elements throughout the website, including:

* Navigation
* Project selection
* Image galleries
* Lightboxes
* Mobile interactions
* Dynamic project rendering

## Responsive Layout System

CSS responsive rules adapt the interface to different screen sizes while preserving the intended visual hierarchy.

## Client-Side Validation

The contact form validates required fields and email formatting before the submission workflow is triggered.

## Email Integration

**EmailJS** connects the contact form to the email submission workflow without requiring a dedicated backend email service.

---

# Project Structure

A simplified representation of the project architecture:

```text
architectural-studio-website/
│
├── index.html
├── projects.html
├── project.html
├── agency.html
├── contact.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── main.js
│   ├── projects.js
│   └── project-details.js
│
├── assets/
│   ├── images/
│   ├── projects/
│   └── icons/
│
└── README.md
```

*The exact structure may vary depending on the current implementation.*

---

# Project Contribution

The project involved the design and front-end implementation of the digital experience, including:

* Website structure
* Interface implementation
* Responsive layouts
* Visual project presentation
* Dynamic project rendering
* Project detail pages
* Interactive galleries
* Lightbox implementation
* Navigation interactions
* Mobile navigation
* Contact form interface
* Client-side validation
* EmailJS integration
* Responsive optimization

---

# Project Status

**Completed**

The website provides a complete responsive front-end experience for presenting the architecture and interior design studio, its services and its project portfolio.

The current implementation focuses on the **front-end experience, project presentation, responsive behavior and interactive interfaces**.

---

# What This Project Demonstrates

This project demonstrates the ability to translate a visually driven creative concept into a functional web experience.

It combines:

```text
Visual Design
     +
UX / Interaction
     +
Responsive Development
     +
JavaScript Logic
     +
Dynamic Content
     +
Third-Party Integration
```

The result is a portfolio-oriented web platform where **design and front-end engineering work together rather than being treated as separate layers**.

---

# Author

**Khaoula Belhaj**

Engineering Student — Communicating Systems & Computer Security

### Areas of Interest

* Software Development
* Web Development
* Cloud Computing
* Cybersecurity
* Computer Networks
* Telecommunications
* Digital Product Development
* UI/UX
* Full-Stack Development

---

# License & Content Ownership

This project is presented for **portfolio and professional demonstration purposes**.

The architectural images, branding elements, project information and studio content belong to their respective owners.

The repository should not be interpreted as granting ownership or redistribution rights over third-party/client assets.

---

# Technologies & Keywords

`HTML5` · `CSS3` · `JavaScript` · `ES6+` · `EmailJS` · `Responsive Design` · `Front-End Development` · `Web Development` · `UI/UX` · `Dynamic Content` · `Interactive Gallery` · `Lightbox` · `Architecture Portfolio` · `Architectural Website` · `Interior Design` · `Mobile Web Design`
