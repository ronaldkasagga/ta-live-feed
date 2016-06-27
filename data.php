<?php
    $data = file_get_contents('http://212.88.98.116:4050/');
    header("Content-type: text/json");
    echo $data;
