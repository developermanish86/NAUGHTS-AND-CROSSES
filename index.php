<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Naughts and Crosses</title>
      <link rel="stylesheet" href="style.css"/>
   </head>
   <body>
      <h1>
         NAUGHTS AND CROSSES
      </h1>
      <table>
         <?php $count = 0; for ($i=1; $i<=3; $i++) { ?>
            <tr>
               <?php for ($j = (1+$count); $j <= (3+$count); $j++) { ?>
                  <td class="block_<?php echo $j; ?>"></td>
               <?php } ?>
            </tr>
         <?php $count = $count + 3; } ?>
      </table>
      <div class="messages"></div>
      <div class="spin"></div>
      <div class="check_winner"></div>
      <br/>
      <input class="restart" type="button" value="RESTART"/> 
   </body>
   <script src="jquery.min.js"></script>
   <script src="game.js"></script>
</html>