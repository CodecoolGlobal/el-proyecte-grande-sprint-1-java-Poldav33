server {

listen 80;

server_name gitpushupgym.com; location / {

     return 301 https://$host$request_uri;
}
}server {

listen 443 ssl;

server_name gitpushupgym.com;

location / {

     proxy_pass http://gitpushupgym.com;

}

}