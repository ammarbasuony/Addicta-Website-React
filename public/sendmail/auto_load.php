<?php

spl_autoload_register('engtechnoLoader');

function engtechnoLoader($className) {
    preg_match( '/([^\\\]+$)/', $className, $matches );
    $className = $matches[0];

    $path = "mailer/";
    $extention = ".php";
    $fullPath = $path . $className . $extention;

    if (!file_exists($fullPath)) {
        return false;
    } 

    include_once $fullPath;
}