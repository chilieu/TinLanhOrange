<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
require 'Youtube.php';
use Madcoda\Youtube;

/*
$str = "https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCd8tHv1A1VsTL7WS9yQ3eGg&key=AIzaSyB1ZI0mT8h2DCpuno-WOHIPPbCFgokkQGI";
$content = file_get_contents($str);
echo $content;
*/

$youtube = new Youtube(array('key' => 'AIzaSyB1ZI0mT8h2DCpuno-WOHIPPbCFgokkQGI'));
$action = $_POST['action'];
switch ($action) {

	case 'videos':
		$channelId = $_POST['channelId'];
		$res = $youtube->getVideosByChannelId($channelId);
		break;

	case 'playlists':
		$channelId = $_POST['channelId'];
		$res = $youtube->getPlaylistsByChannelId($channelId, array('maxResults' => 50) );
		break;

	case 'playlistDetail':
		$channelPlaylistId = $_POST['channelPlaylistId'];
		$res = $youtube->getPlaylistById($channelPlaylistId);
		break;

	case 'playlistVideos':
		$channelPlaylistId = $_POST['channelPlaylistId'];
		$res = $youtube->getPlaylistItemsByPlaylistId($channelPlaylistId);
		break;

	case 'video':
		$videoId = $_POST['videoId'];
		$res = $youtube->getVideosInfo($videoId);
		break;

}

echo json_encode($res, JSON_PRETTY_PRINT);


?>