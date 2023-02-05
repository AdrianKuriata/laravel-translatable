<?php

namespace Devsite\LaravelTranslatable\Contracts;

use Illuminate\Support\Collection;

interface ManagerContract
{
    public function scan(): void;

    public function generate(): void;

    public function getFiles(): Collection;

    public function getPhrases(Collection $files): array;

    public function getPattern(): string;
}
