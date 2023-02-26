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
        Schema::create(config('laravel-translatable.db.tables.phrases.table'), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->longText('phrase');
            $table->json('source');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create(config('laravel-translatable.db.tables.translations.table'), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger(config('laravel-translatable.db.tables.translations.foreign_key_to_phrases'));
            $table->string('locale', 2)->nullable();
            $table->longText('translation');
            $table->timestamps();
            $table->foreign(config('laravel-translatable.db.tables.translations.foreign_key_to_phrases'))
                ->references('id')
                ->on(config('laravel-translatable.db.tables.phrases.table'))
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
