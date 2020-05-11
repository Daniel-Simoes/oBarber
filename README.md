<h1 align="center">
    <img alt="oBarber Logo" src="https://github.com/Daniel-Simoes/oBarber/blob/master/logo.png" />
    <br>
</h1>

This project was a challenge in a Rocketseat BootCamp and it actually was my first steps with NodeJS, ReactJS and React Native. A system for a barber shop, Web and Mobile Application, where hairdressers will use the Web version and the customers the Mobile version. 

In the web version the customers can to do login using any email.


## 💻 Web Apresentation

<p align="center">
  <img alt="oBarber Desktop Gif" src="https://github.com/Daniel-Simoes/oBarber/blob/master/obarberDesktop.gif">
</p>

## :rocket:oBarber Web Installation

Clone the repository

```bash
git clone https://github.com/Daniel-Simoes/Obarber.git
```

## ⌨️ Set Backend

Open a terminal on the repository and look for backend's folder and install the dependencies:

```bash
yarn install
```

## 📌 Docker

Now you need to download the Docker Application in your computer. Choose your Operation System and follow the documentation's steps;

```bash
https://docs.docker.com/get-docker/
```

## 1️⃣ Database - PostGres


Create a imagen PostGres through Docker;

```bash
docker run --name obarber-postgres -e POSTGRES_PASSWORD=obarber -p 5432:5432 -d postgres

```

To maneger the PostGres Database you need to download the PostBird Application in your computer also. Choose your Operation Systen and follow the documentation's steps;

```bash
https://www.electronjs.org/apps/postbird
```

To create PostGres Database you need first fill on a form in Postgris Application;

```bash
 Host to: 192.168.99.100 (if you are using a Windows change)
 Usermane: postegres
 Password: obarber

```

To create PostGres Database;

```bash
Go to select database and press create a database 
Database: obarber  
```
## 2️⃣ Database - Redis

Create a imagen Redis through Docker;

```bash
docker run --name obarber-redis -p 6379:6379 -d -t redis:alpine

```

## 3️⃣ Database - MongoDB

Create MongoDB account;

```bash
https://www.mongodb.com/cloud/atlas
```

Create a free cluster;

```bash
https://www.mongodb.com/cloud/atlas
```
```bash
DATABASE ACCESS  > ADD NEW USER       > ADD NEW USER  > NETWORK ACCESS > ADD IP ADDRESS > ALLOW ACCESS FROM EVERYWHERE > CONFIRM
                   Usermane: obarber                      
                   Password: obarber
 
```

To run the Server use:

```bash
yarn dev
```

## 👨🏽‍💻 Are you here yet? Yes, backend finished!!

Open other window from you terminal and look for Web's folder and install the dependencies:

```bash
yarn install
```

To run the application use:

```bash
yarn start
```

The Mobile version is where you will can look for people who share the same technologies that you are working on.


## 📱 Mobile Apresentation
<p align="center">
  <img alt="oBarber Mobile Gif" src="https://github.com/Daniel-Simoes/oBarber/blob/master/obarberMobile.gif">
</p>

## :rocket:oBarber Mobile Installation

Clone the repository

```bash
git clone https://github.com/Daniel-Simoes/Obarber.git
```

Open a terminal on the repository and look for backend's folder and install the dependencies:

```bash
yarn install
```

To run the Server use:

```bash
yarn dev
```

Open other window from you terminal and look for Mobile's folder and install the dependencies:

```bash
yarn install
```

If you do not have the EXPO in your machine, run:

```bash
export PATH="$(yarn global bin):$PATH"
```

run the Expo:

```bash
yarn start
```

## :books: Technologies

This project was developed with the following technologies:
- [Node](https://nodejs.org/en/)
- [ReactJS](https://facebook.github.io/react/)
- [React Native](https://facebook.github.io/react-native/)
- [MongoDB](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_emea_ireland_search_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&gclid=Cj0KCQjw-r71BRDuARIsAB7i_QMdQuR_Zppfhv5WV95k-K3yOybr_muYHSZQni1ZCSLXmYCMoJ_3Pr0aAh8OEALw_wcB)
- [Axios](https://github.com/axios/axios)
- [EXPO](https://expo.io/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [React Navigation](https://reactnavigation.org/)
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html)
- [React Native Flash Message](https://www.npmjs.com/package/react-native-flash-message)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)
- [Prettier](https://prettier.io/)
- [VS Code](https://code.visualstudio.com/) with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/giovanniantonaccio/Rocketshoes/blob/master/LICENSE) for more information.


## 🤔 How to contribute

- Fork this repository;
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: My new feature'`;
- Push to your branch: `git push origin my-feature`.

After the merge of your pull request is done, you can delete your branch.


---

Made by Daniel Simões :wave: [Get in touch!](https://www.linkedin.com/in/dan-sim%C3%B5es/)

