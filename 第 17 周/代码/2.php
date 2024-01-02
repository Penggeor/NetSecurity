<?php
if (strpos($_SERVER['HTTP_USER_AGENT'], 'Firefox') == true) {
  echo "You are using Firefox.<br />";
} else {
  echo "You are not using Firefox.<br />";
}
