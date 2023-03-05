<?php

namespace Devsite\LaravelTranslatable\Console\Commands;

use Devsite\LaravelTranslatable\Contracts\ManagerContract;
use Illuminate\Console\Command;

class ScanLaravelTranslatableCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'devsite:laravel-translatable:scan';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Run for scan translations and save them to the database.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        app(ManagerContract::class)->scan();


        return Command::SUCCESS;
    }
}
