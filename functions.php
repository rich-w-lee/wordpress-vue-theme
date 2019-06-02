<?php
// Remove all default WP template redirects/lookups
remove_action( 'template_redirect', 'redirect_canonical' );

// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown
function remove_redirects() {
	add_rewrite_rule( '^/(.+)/?', 'index.php', 'top' );
}

add_action( 'init', 'remove_redirects' );

// Load Vue scripts
function load_vue_scripts() {
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-js',
		get_stylesheet_directory_uri() . '/dist/scripts/index.min.bundle.js',
		array( 'jquery' ),
		filemtime( get_stylesheet_directory() . '/dist/scripts/index.min.bundle.js' ),
		true
	);

	wp_enqueue_style(
		'vuejs-wordpress-theme-starter-css',
		get_stylesheet_directory_uri() . '/dist/styles.css',
		null,
		filemtime( get_stylesheet_directory() . '/dist/styles.css' )
	);
}

add_action( 'wp_enqueue_scripts', 'load_vue_scripts', 100 );

// Misc Settings
add_filter( 'show_admin_bar', '__return_false' );
@ini_set( 'upload_max_size' , '64M' );
@ini_set( 'post_max_size', '64M');
@ini_set( 'max_execution_time', '300' );

// ACF Plugin
add_filter( 'acf/settings/path', 'my_acf_settings_path' );

function my_acf_settings_path( $path ) {
	$path = get_stylesheet_directory() . '/plugins/acf/';
	return $path;
}

add_filter( 'acf/settings/dir', 'my_acf_settings_dir' );
add_filter('acf/settings/show_admin', '__return_false');

function my_acf_settings_dir( $dir ) {
	$dir = get_stylesheet_directory_uri() . '/plugins/acf/';
	return $dir;
}

include_once( get_stylesheet_directory() . '/plugins/acf/acf.php' );

// Custom ACF fields used by theme
if( function_exists('acf_add_local_field_group') ):
	function get_local_file_contents( $file_path ) {
    ob_start();
    include $file_path;
    $contents = ob_get_clean();

    return $contents;
	}
	$fields_file = get_local_file_contents('acf_fields.json');
	$fields_json = json_decode($fields_file, true);

	foreach ($fields_json as $k => $v) {
		$acf_fields = array();
		$groupName = $v["groupName"];
		$groupKey = $v["groupKey"];			
		$fields = $v["fields"];
		
		foreach ($fields as $fieldK => $fieldV) {
			$fieldKey = $fieldV["fieldKey"];
			$fieldType = $fieldV["type"];
			$fieldLabel = $fieldV["fieldLabel"];
			array_push($acf_fields, array(
				'key' => $fieldKey,
				'label' => $fieldLabel,
				'name' => $fieldKey,
				'type' => $fieldType,
			));
		}

		acf_add_local_field_group(array(
			'key' => $groupKey,
			'title' => $groupName,
			'fields' => $acf_fields,
			'location' => array (
				array (
					array (
						'param' => 'post_type',
						'operator' => '==',
						'value' => 'post',
					),
				),
			),e
		));
	}

endif;

// ACF-To-REST-API Plugin
include_once( get_stylesheet_directory() . '/plugins/acf-to-rest-api/class-acf-to-rest-api.php' );
