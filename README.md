# Next.js App Router Tutorial

## Introduction

This project aims to provide a tutorial on using the App Router in Next.js to optimize your application's architecture, with a particular focus on server-side rendering. This architecture demonstrates how to effectively structure our code and components to maximize server rendering, thus minimizing the JavaScript sent to the client.

## Project Structure

The project is organized into several key folders to facilitate development:

- **/components**: Contains all the components used in the application. The names of the components clearly indicate their role (server or client) for a better understanding of their operation and their interaction with the rest of the application.
- **/lib**: This folder groups all the requests that interact with data, talking about the data retrieval logic.
- **/posts**: Contains `.md` files for articles or content managed by the application.
- **/app**: The classic Next.js folder, where routes, pages, errors, loading, layouts, and templates are handled.

## Component Features

Each component in this project is equipped with a unique colored border, allowing for easy visualization of the type of rendering performed (server or client). This visual feature helps to understand the rendering architecture of the application.

## Focus of the First Version

The first version of this tutorial focuses exclusively on the component architecture. I have not yet covered server actions and data fetching and their caching mechanisms. I will add them in a future version.

## Prerequisites

To get the most out of this tutorial, you should have a basic understanding of Next.js and its ecosystem. Familiarity with React and TypeScript development.

### The Concept of Server Components and Client Components

For my example, I will discuss the blog page that contains 2 articles. Initially, the rendering of the complete page can be schematized in this way:
![image](https://github.com/Nico1500/NextAppTutorial/assets/63806892/e5e0d661-60ac-477e-8382-9d526349a626)
<img width="429" alt="image" src="https://github.com/Nico1500/NextAppTutorial/assets/63806892/e204a540-1c1e-4e7e-861a-df4c673ff515">

When we notice this scheme and this screenshot of the page, we can see that the Next.js server generates the components independently before rendering them on the final page. In this case, we can easily render the first 3 components by the server and then make the Card a client component to add interactivity to our page. If I had called the date component in the Card component, it would have been rendered by the Client. This is precisely what we should avoid because the date formatting libraries we use contain a lot of JavaScript, thereby overloading the client. In this example, the Card component accepts a child that we will place at the parent level to avoid turning the date into a client component.
