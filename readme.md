<p align="center">
  <img src="https://i.ibb.co/QQpbjsh/logo.png" alt="Sencrypt" /><br><br>
  <b>An open source password manager made in <a href="https://www.electronjs.org/">Electron</a>.</b><br><br>
  <img src="https://i.imgur.com/KD72zNX.png" alt="Sencrypt application screenshot" />
</p>

# Installation

<b> WARNING: This Application is currently in an alpha stage. Avoid using your real accounts.</b>
    
<p>
    Download the current <a href="https://github.com/Uncasted/sencrypt/releases">release</a> and follow the installation steps of your operating system.
</p>

# How can I build from source?
<b>You will need <a href="https://nodejs.org/en/download/">Node.js</a> to be able to build from source.</b>

<b>1. Open the source code directory in a terminal.</b>

It should look like this:

```
[user@host sencrypt]$
```

<b>2. run `npm install` to install all the packages for the electron app.</b>

```
 $ npm install
```

<b>3. change directory into "src/view/password-manager"</b>

```
$ cd src/view/password-manager/
```

4. <b> run `npm install` again to install all the packages for the view.</b>

```
$ npm install
```

<b>5. Also in the same directory, run `npm run build` to build the view.</b>

```
$ npm run build
```

<b>6. Change back to the sencrypt directory.</b>

```
[user@host sencrypt/src/view/password-manager]$ cd ..
[user@host sencrypt/src/view]$ cd ..
[user@host sencrypt/src/]$ cd ..
[user@host sencrypt]$
```

<b>7. Run `npm run dist` to build the application.</b>

```
$ npm run dist
```

<b>This will generate a dist folder that will contain the application for your operating system.</b>

# How can I contribute?

<b>The dev tools are enabled (for now) so you can open them to monitor the application.</b>

If you want to contribute, you can create a pull request with this <a href="https://pastebin.com/24A7VErV">template</a>.

If you find a bug, try to reproduce it and create an issue that outlines the steps necessary to reproduce the bug, along with a screenshot of the output of the developer console.
