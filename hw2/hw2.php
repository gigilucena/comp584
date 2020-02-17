<?php
    //FILE: js_php.php

    $json = $_POST["json"];

    $info = json_encode($json);

    echo $info;

    $filename = 'employees.json';
    $folderPath = 'temp';
    if (!file_exists($folderPath)) {
        mkdir($folderPath);
    }

    $file = @fopen($folderPath . DIRECTORY_SEPARATOR . $filename,"w");
    if ($file != false){
        fwrite($file,$info);
        echo " data successfully entered";
        fclose($file);
    }

    die()
?>
