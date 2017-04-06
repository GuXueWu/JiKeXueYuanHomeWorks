<?php
/**
 * Created by PhpStorm.
 * User: ROG STRIX S5
 * Date: 2017/3/1
 * Time: 10:13
 */
header("Content-type:application/json;charset=utf-8");

require_once('db.php');

if ($link) {
    //插入
    $newstitle = $_POST['newstitle'];
    $newsimg = $_POST['newsimg'];
    $newstime = $_POST['newstime'];
    $newstype = $_POST['newstype'];
    $newssrc = $_POST['newssrc'];
    $newsid = $_POST['newsid'];

    $sql = "UPDATE `news` SET `newstype`='{$newstype}',`newstitle`='{$newstitle}',`newsimg`='{$newsimg}',`newstime`='{$newstime}',`newssrc`='{$newssrc}' WHERE `id`={$newsid}";
    mysqli_query($link, 'SET NAMES utf8');
    $result = mysqli_query($link, $sql);
    echo json_encode(array('success' => $result));

} else {
    echo json_encode(array('success' => 'none'));
}

mysqli_close($link);