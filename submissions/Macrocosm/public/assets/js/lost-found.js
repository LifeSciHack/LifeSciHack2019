$(document).ready(function () {

    //Window Scroll
    window.smoothScroll = function (target) {
        var scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);
        var targetY = -115;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop - 18;
        } while (target = target.offsetParent);
        scroll = function (c, a, b, i) {
            i++;
            if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function () {
                scroll(c, a, b, i);
            }, 30);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
    };

    //Date Picker
    $(function () {
        var bindDatePicker = function() {
             $(".date").datetimepicker({
             format:'YYYY-MM-DD',
                 icons: {
                    time: "fas fa-clock-o",
                    date: "fas fa-calendar",
                    up: "fas fa-chevron-up",
                    down: "fas fa-chevron-down",
                    previous: 'fas fa-chevron-left',
                    next: 'fas fa-chevron-right',
                    today: 'fas fa-screenshot',
                    clear: 'fas fa-trash',
                    close: 'fas fa-remove'
                 }
             }).find('input:first').on("blur",function () {
                 // check if the date is correct. We can accept dd-mm-yyyy and yyyy-mm-dd.
                 // update the format if it's yyyy-mm-dd
                 var date = parseDate($(this).val());
     
                 if (! isValidDate(date)) {
                     //create date based on momentjs (we have that)
                     date = moment().format('YYYY-MM-DD');
                 }
     
                 $(this).val(date);
             });
         }
        
        var isValidDate = function(value, format) {
             format = format || false;
             // lets parse the date to the best of our knowledge
             if (format) {
                 value = parseDate(value);
             }
     
             var timestamp = Date.parse(value);
     
             return isNaN(timestamp) == false;
        }
        
        var parseDate = function(value) {
             var m = value.match(/^(\d{1,2})(\/|-)?(\d{1,2})(\/|-)?(\d{4})$/);
             if (m)
                 value = m[5] + '-' + ("00" + m[3]).slice(-2) + '-' + ("00" + m[1]).slice(-2);
     
             return value;
        }
        
        bindDatePicker();
    });
});