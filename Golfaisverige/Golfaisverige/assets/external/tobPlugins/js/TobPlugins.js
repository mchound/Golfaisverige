(function ($) {

    $.extend({
        tobRadioButtonJS: function (groupId) {
            if (groupId === undefined) {
                $('.tobRadioButton').each(function (index, group) {
                    var groupId = $(group).attr('id');
                    $('#' + groupId + ' button').click(function (eventObject) {
                        var isSelected = $(eventObject.target).hasClass('selected');
                        $('#' + groupId + ' button').removeClass('selected');

                        if (!isSelected) {
                            $(eventObject.target).addClass('selected');
                        }
                    });
                });
                return this;
            }
            else if (groupId == 'all groups') {
                var groupValues = [];
                var group;
                $.each($('.tobRadioButton'), function (index, divElement) {
                    group = new Object();
                    var identifier = $(divElement).attr('id').toString();
                    var value = $(divElement).children('.selected').attr('value');
                    group = { id: identifier, value: value };
                    groupValues.push(group);
                });
                return groupValues;
            }

            return $('#' + groupId + ' .selected').attr('value');
        }
    });

})(jQuery);


