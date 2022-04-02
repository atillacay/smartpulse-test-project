# Uygulama akışı
### Verilmiş olan [url](`https://seffaflik.epias.com.tr/transparency/service/market/intra-day-trade-history?endDate=${date}&startDate=${date}`)'ye get request yapılarak gelen verilerin istenilen şekilde temizlenip, konsolide edilerek gösterilmesi
[url](`https://seffaflik.epias.com.tr/transparency/service/market/intra-day-trade-history?endDate=${date}&startDate=${date}`)'ye browserda request gönderildiğinde karşılaşılan CORS hatası nedeniyle bir node server üzerinden get request gönderildi ve front end bu node server'a call yaptı.

### Uygulama akışı;
- Uygulama front end'i ayağa kalktığında http://localhost:3030'a get request atacak ve backend'in [url](`https://seffaflik.epias.com.tr/transparency/service/market/intra-day-trade-history?endDate=${date}&startDate=${date}`)'ye get request atmasını tetikliyor,
- Server, verilen url'ye axios ile get request atıyor,
- Gelen verilerin içerisinden, istenmeyen kontrat kodları çıkarılıyor,
- Tekrar eden kontrat kodlarının gruplandırılması yapılıyor,
- Temizlenip, gruplandırılmış verilerde istenilen hesaplamalar yapılıyor,
- Yeni bir array object olarak düzenlenmiş sonuç verisi response olarak iletiliyor
- Frontend tarafından alınan veriler [React-Bootstrap-Table]()

 
 # To run and test the app...
## Front end
### `npm start`
Runs the front end in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
## Back end
### `nodemon index.js`
Rund the back end in development mode and listens on http://localhost:3030

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Available Scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### `npm start`
Runs the front end in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
### `npm test`
Launches the test runner in the interactive watch mode.\
Run this in src folder to run test suites for react app 
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

#### Node.js `in server  folder`
### `nodemon index.js`
Rund the back end in development mode and listens on http://localhost:3030

The page will reload when you make changes.\
You may also see any lint errors in the console.

