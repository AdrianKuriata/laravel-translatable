<?php

namespace Devsite\LaravelTranslatable\Console\Commands;

use Devsite\LaravelTranslatable\Contracts\ManagerContract;
use Illuminate\Console\Command;

class GenerateLaravelTranslatableCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'devsite:laravel-translatable:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Pick all translations which was not deleted from the database and save them to generated language json files.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        app(ManagerContract::class)->generate();


        return Command::SUCCESS;
    }
}
