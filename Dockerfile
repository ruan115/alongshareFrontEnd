FROM nginx

MAINTAINER alongshare-frontend

#设置时区
ENV TIME_ZONE Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TIME_ZONE /etc/localtime

RUN rm /etc/nginx/conf.d/default.conf

ADD default.conf /etc/nginx/conf.d/

COPY www.alongshare.com.pem /etc/nginx/ssl/
COPY www.alongshare.com.key /etc/nginx/ssl/

COPY /dist/ /data/code/vue/alongshare-frontend/
