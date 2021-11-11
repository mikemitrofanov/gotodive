FROM php:alpine

RUN docker-php-ext-install pdo_mysql

COPY . /app
COPY .env.example /app/.env
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

RUN composer install

RUN php artisan key:generate
RUN php artisan l5-swagger:generate

CMD php artisan serve --host 0.0.0.0

