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
    $newsid=$_GET['newsid'];
    $sql = "SELECT * FROM news WHERE `news`.`id` ={$newsid}";
    mysqli_query($link, 'SET NAMES utf8');
    $result = mysqli_query($link, $sql);
    $senddata = array();
    while ($row = mysqli_fetch_assoc($result)) {
        array_push($senddata, array(
            'id' => $row['id'],
            'newstype' => $row['newstype'],
            'newstitle' => $row['newstitle'],
            'newsimg' => $row['newsimg'],
            'newstime' => $row['newstime'],
            'newssrc' => $row['newssrc']
        ));
    }
    echo json_encode($senddata);

} else {
    echo json_encode(array('success' => 'none'));
}

mysqli_close($link);
