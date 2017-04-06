<?php
/**
 * Created by PhpStorm.
 * User: ROG STRIX S5
 * Date: 2017/2/28
 * Time: 16:22
 */
header("Content-type:application/json;charset=utf-8");

require_once('db.php');

if ($link) {
    $newsId = $_POST['newsid'];
    $sql = "DELETE FROM `news` WHERE `news`.`id` = {$newsId}";
    mysqli_query($link, 'SET NAMES utf8');
    $result = mysqli_query($link, $sql);
    echo json_encode(array('success' => $result));
} else {
    echo json_encode(array('success' => 'none'));
}

mysqli_close($link);
