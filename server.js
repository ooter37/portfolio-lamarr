const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '/index.html')))

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/index.html'))
})
app.listen(4005, () => console.log(`Running on port 4005`)) 

// sudo mkdir -p /var/www/portfolio-lamarr/html
// sudo mkdir -p /var/www/sleep-like-a-log/html

// sudo chown -R $USER:$USER /var/www/portfolio-lamarr/html
// sudo chown -R $USER:$USER /var/www/sleep-like-a-log/html

// nano /var/www/portfolio-lamarr/html/index.html

// <html>
//     <head>
//         <title>Welcome to portfolio lamarr!</title>
//     </head>
//     <body>
//         <h1>Success!  The example.com server block is working!</h1>
//     </body>
// </html>


// nano /var/www/sleep-like-a-log/html/index.html

// <html>
//     <head>
//         <title>Welcome to sleep-like-a-log</title>
//     </head>
//     <body>
//         <h1>Success!  The example.com server block is working!</h1>
//     </body>
// </html>


// sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/portfolio-lamarr

// sudo nano /etc/nginx/sites-available/portfolio-lamarr

// server {
//     listen 80;
//     listen [::]:80;

//     root /var/www/portfolio-lamarr/html;
//     index index.html index.htm index.nginx-debian.html;

//     server_name example.com www.example.com;

//     location / {
//             try_files $uri $uri/ =404;
//     }
// }

// sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/sleep-like-a-log

// sudo nano /etc/nginx/sites-available/sleep-like-a-log

// server {
//     listen 80;
//     listen [::]:80;

//     root /var/www/sleep-like-a-log/html;
//     index index.html index.htm index.nginx-debian.html;

//     server_name test.com www.test.com;

//     location / {
//             try_files $uri $uri/ =404;
//     }
// }

// sudo ln -s /etc/nginx/sites-available/portfolio-lamarr /etc/nginx/sites-enabled/
// sudo ln -s /etc/nginx/sites-available/sleep-like-a-log /etc/nginx/sites-enabled/



// sudo rm -rf /var/www/portfolio-lamarr
// sudo rm -rf /var/www/sleep-like-a-log