$(document).ready(function (e) {

    $(function () {
        var user = 1;
        var table = $('table');
        var messages = $('.messages');
        var spin = $('.spin');
        var check_winner = $('.check_winner');
        spin.html('User ' + user + ' round');
        // play game logic
        $(document).on("click", "td", function (e) {

            var td = $(this);
            var state = 0;
            var type = 'circle';

            // check if winner declared
            if (check_winner.html() == "1") {
                return false;
            }
            // change state of user
            if (td.hasClass('cross') || td.hasClass('circle')) {
                state = 1;
            }

            if (!state) {
                // define pattern for user
                if (user != 1) {
                    type = 'cross';
                }

                td.addClass(type);
                // check user result
                var check = checkResult(type);
                if (check) {
                    messages.html('User ' + user + ' is winner.');
                    check_winner.html("1");
                    spin.html('');
                    return false;
                } else {
                    if (user == 1) {
                        user = 2;
                    } else {
                        user = 1;
                    }

                    // tie logic
                    var block_length = $("table").find('td.circle, td.cross').length;
                    if (block_length == 9 && check_winner.html() == "") {
                        spin.html('Match is tied');
                    } else {
                        spin.html('User ' + user + ' round');
                    }
                }
                messages.html('');
            } else {
                messages.html('This block is already checked.');
            }
        });

        // restart the game
        $(document).on("click", ".restart", function (e) {
            user = 1;
            $(".check_winner").html('');
            $(".messages").html('');

            table.find('td').each(function () {
                $(this).removeClass('circle cross');
            });
            spin.html('User ' + user + ' round');
        });
    });

    // check result and return winner
    function checkResult(type) {
        var winner = 0;
        if ($("table").find('.block_1, .block_2, .block_3').not('.' + type).length == 0) {
            winner = 1;
        } else if ($("table").find('.block_1, .block_4, .block_7').not('.' + type).length == 0) {
            winner = 1;
        } else if ($("table").find('.block_1, .block_5, .block_9').not('.' + type).length == 0) {
            winner = 1;
        } else if ($("table").find('.block_4, .block_5, .block_6').not('.' + type).length == 0) {
            winner = 1;
        } else if ($("table").find('.block_7, .block_8, .block_9').not('.' + type).length == 0) {
            winner = 1;
        } else if ($("table").find('.block_2, .block_5, .block_8').not('.' + type).length == 0) {
            winner = 1;
        } else if ($("table").find('.block_3, .block_6, .block_9').not('.' + type).length == 0) {
            winner = 1;
        } else if ($("table").find('.block_3, .block_5, .block_7').not('.' + type).length == 0) {
            winner = 1;
        }
        return winner;
    }

});