<?php
// Remove all default WP template redirects/lookups
remove_action('template_redirect', 'redirect_canonical');

// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown
function remove_redirects() {
    add_rewrite_rule('^/(.+)/?', 'index.php', 'top');
}
add_action('init', 'remove_redirects');

// includes for the callbacks.
include_once( get_stylesheet_directory() . '/includes/enqueue-scripts.php' );
include_once( get_stylesheet_directory() . '/includes/extend-api.php' );

/* hooks and filters */

// enqueue-scripts.php.
add_action( 'wp_enqueue_scripts', 'vue_wordpress_enqueue_scripts' );

// extend-api.php.
add_action( 'rest_api_init', 'vue_wordpress_extend_api_response' );