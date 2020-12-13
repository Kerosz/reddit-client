<div align="center">

[![Reddit-Client](./public/images/media.png)](https://github.com/Kerosz/reddit-client)

### Modern, compact.

</div>

This is the main repo codebase of
[Reddit Client](https://github.com/Kerosz/reddit-client). Every single line of
code is in this repository.

## Table of contents

- [Table of contents](#table-of-contents)
- [Introduction](#introduction)
  - [Vision](#vision)
- [Codebase](#codebase)
  - [Technologies](#technologies)
  - [Folder structure](#folder-structure)
  - [Code Style](#code-style)
- [Setup Process](#setup-process)
- [Acknowledgments](#acknowledgments)

## Introduction

[![GitHub issues](https://img.shields.io/github/issues/Kerosz/reddit-client?style=flat-square)](https://github.com/Kerosz/reddit-client/issues)
[![GitHub license](https://img.shields.io/github/license/Kerosz/reddit-client?style=flat-square)](https://github.com/Kerosz/reddit-client)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)]()

### Vision

It is difficult to change and adapt to different trends and designs as a company
that impact millions of users. Users need modern changes that improves the
usability and experience of their favorite online applications.

**Reddit Client Redesign is the unofficial [Reddit](https://www.reddit.com/)
frontend app concept to tune the experience of the users and greater increase
the browsing experience.**

## Codebase

### Technologies

Almost the entire codebase consists in **Javascript**

Here is a list of all technologies used:

- **React**: Front-end library
- **Redux**: Global state management
- **Jest & Enzyme**: Testing suite

### Folder structure

```sh
reddit-client/
├── public     # Public files used on the frontend
└── src        # Frontend SPA

reddit-client/src
├── components     # Reusabble parts
├── pages          # Application views
├── store          # Redux store initialization
└── slices         # Redux reducers and actions declaration
```

### Code Style

We run Prettier on-commit, which means you can write code in whatever style you
want and it will be automatically formatted according to the common style when
you run `git commit`.

## Setup Process

- Clone or download the repo
- Open the folder and run `yarn` or `npm install`
- Run application using `yarn start` or `npm run start`

## Acknowledgments

The project is using
[Reddit JSON Api](https://github.com/reddit-archive/reddit/wiki/JSON)

The project was a task given by [Codecademy](https://www.codecademy.com) being a
part of their full-stack engineer course path. The goal of the project was to
showcase all previews skills and technologies learned until this point on the
path:

- HTML / CSS
- JavaScript
- React
- Redux
- Jest, Enzyme and Selenium
- Git and Github Projects
- Command line
- Wireframes
