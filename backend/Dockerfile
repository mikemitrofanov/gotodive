FROM php:8.0-alpine

RUN docker-php-ext-install pdo_mysql

RUN apk add --no-cache ${PHPIZE_DEPS} imagemagick imagemagick-dev libgomp

RUN pecl install -o -f imagick
RUN docker-php-ext-enable imagick

RUN apk del --no-cache ${PHPIZE_DEPS}

COPY . /app
COPY .env.example /app/.env
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

RUN composer install

RUN php artisan key:generate
RUN php artisan l5-swagger:generate

CMD php artisan serve --host 0.0.0.0

EXPOSE 8000

