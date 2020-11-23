# RedHerring Client
The client for RedHerring, run separately from the server   
[original repl](https://repl.it/@DashL/RedHerringClient)

## Running
**NOTE:** You probably don't actually just want to run the client, see the [RedHerring](https://www.github.com/dash-l/RedHerring) github repo for the full project
1. Install [yarn](https://classic.yarnpkg.com/en/docs/install/), if you would like, you can also use [npm](https://www.npmjs.com/get-npm)
2. Run `yarn` to install all dependencies. This only needs to be run once (right after you pull from this repository).

3. Create a .env file and add the line:
    ```
    REACT_APP_SERVER_URL=/*Your server*/
    ```
    Make sure to replace "Your server" with the url your [RedHerring-server](https://github.com/Dash-L/RedHerring/tree/main/RedHerringServer) is running on.
   
4. Run `yarn start` to start the app (in debug mode, recommended for local use). If you want a release build use `yarn build` (although you will need a little more setup to actually run it)