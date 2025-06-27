# Angular System - SSAPV


## Overview | Prerequisites

First of all, be sure that your dev machine has follows items installed in it.

### 1. Git (*bash*)

- Get and install de last version of **Git** on https://github.com/.

### 2. Node.js and Tools

- Get and install de last version of **Node.js** on https://nodejs.org/en/download.

## Installing the Application
Open the Git Bash terminal in the root directory of your project and run the following commands below:

- **Cloning** the application:
```shell
    git clone https://github.com/rafaelkellows/sys_saapv_angular.git
```

- Install the **@angular/cli**: 
```shell
    npm install -g @angular/cli
```

- Install the **project tool** dependencies: 
```shell
    npm install
```

- Install the **json-server**: 
```shell
    npm install -g json-server
```

Now we have our strucuture application defined and with your dependencies installed in it.


## Initializing Application
Let's start the json-server. In the root directory of your project run the following command:

```shell
    json-server --watch db.json
```

You'll must see some response like that:

```bash
    JSON Server started on PORT :3000
    Press CTRL-C to stop
    Watching db.json...

    (˶ᵔ ᵕ ᵔ˶)

    Index:
    http://localhost:3000/

    Static files:
    Serving ./public directory if it exists

    Endpoints:
    http://localhost:3000/locations
    http://localhost:3000/users
    http://localhost:3000/products
```

Open any Endpoints in the browser and be sure that JSON Server is running.

After this, we going to start the application running the following command:

```shell
    ng serve
```

You'll must see some response like that:

```bash
Watch mode enabled. Watching for file changes...
NOTE: Raw file sizes do not reflect development server per-request transformations.
  ➜  Local:   http://localhost:4200/
  ➜  press h + enter to show help
```

Finally, open http://localhost:4200/ in the browser and be sure that application is running.