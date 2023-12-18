# Tag Studio Admin

## Deploy

```bash
yarn run build
rsync -r ./build/ root@158.247.212.186:/var/www/html/
```

## Setup

```bash
sudo apt update
sudo apt install nginx -y

ufw allow 'Nginx Full'

sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot --nginx
# sudo certbot renew --dry-run

sudo nano /etc/nginx/sites-enabled/default
# location / {
#     try_files $uri $uri/ /index.html;
# }
```
