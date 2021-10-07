<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->integer('order')->nullable();
            $table->string('description');
            $table->string('duration');
            $table->integer('price');
            $table->string('short_description');
            $table->string('min_age');
            $table->string('required_experience')->nullable();
            $table->string('max_depth')->nullable();
            $table->string('course_certificate')->nullable();
            $table->boolean('is_popular')->default(false);
            $table->foreignId('service_category_id')->constrained('service_categories')->onDelete('cascade');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('services');
    }
}
