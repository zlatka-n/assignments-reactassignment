# Client app

The client app contains some basic setup and UI components you should need. 
Consider existing UI components as _pure components_ responsible only for visual representation. 
Components responsible for data fetching/manipulating as well as for keeping state needs to be implemented

## Storybook
The app comes with Storybook and stories for the UI component. To run Storybook execute `yarn storybook`.

## Node version 17+
When starting webpack, it crashes with error:03000086:digital envelope routines::initialization error.
This setting of env variable enables to start it without the error - `export NODE_OPTIONS=--openssl-legacy-provider`.

You should be fine using `node` version 16.
