(function($) {

    // Function to update links based on screen size
    function updateResponsiveLinks() {
        var screenWidth = window.innerWidth;
        $('.responsive-link').each(function() {
            var $link = $(this);
            var originalHref = $link.data('original-href');
            
            if (!originalHref) {
                // Store the original href when first run
                originalHref = $link.attr('href');
                $link.data('original-href', originalHref);
            }

            if (screenWidth <= 600) {
                // Modify the href for smaller screens
                $link.attr('href', originalHref.replace('.jpg', '_mobile.jpg'));
            } else {
                // Revert to the original href for larger screens
                $link.attr('href', originalHref);
            }
        });
    }

    // Run the function on document ready and on window resize
    $(document).ready(updateResponsiveLinks);
    $(window).resize(updateResponsiveLinks);

})(jQuery);
