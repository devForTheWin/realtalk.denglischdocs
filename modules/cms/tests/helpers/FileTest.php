<?php

namespace Cms\Tests\Helpers;

use Cms\Helpers\File as FileHelper;
use System\Tests\Bootstrap\TestCase;

class FileTest extends TestCase
{
    public function testValidateName()
    {
        $this->assertFalse(FileHelper::validateName(''));
        $this->assertTrue(FileHelper::validateName('01test-testdat'));
        $this->assertTrue(FileHelper::validateName('test/testdat'));
        $this->assertFalse(FileHelper::validateName('test\testdat'));
        $this->assertTrue(FileHelper::validateName('01test-test.dat'));
        $this->assertFalse(FileHelper::validateName('test@test.dat'));
        $this->assertFalse(FileHelper::validateName('test::test'));
        $this->assertFalse(FileHelper::validateName('@test'));
    }
}
