<?php

namespace Devsite\LaravelTranslatable\Console\Commands;

use Illuminate\Console\Command;

class InstallLaravelTranslatableCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'devsite:laravel-translatable:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install every required elements for use Laravel Translatable';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // Run migrations
        $this->call('migrate');

        // Copy configuration file
        $this->call('vendor:publish', [
            '--tag' => 'config-laravel-translatable',
            '--force' => true
        ]);

        // Copy all assets to public folder
        $this->call('vendor:publish', [
            '--tag' => 'public-laravel-translatable',
            '--force' => true
        ]);

        return Command::SUCCESS;
    }
}
