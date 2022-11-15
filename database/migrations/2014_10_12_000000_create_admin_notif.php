<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

    public function up()
    {
        Schema::create('admin_notifs', function (Blueprint $table) {
            $table->id();
            $table->string('sender')->nullable();
            $table->string('type')->nullable();
            $table->string('message')->nullable();
            $table->string('status')->nullable();
            $table->string('sendto')->nullable();
            $table->string('time')->nullable();
            $table->string('date')->nullable();
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
        Schema::dropIfExists('users');
    }
};