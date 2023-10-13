<?php
/**
 * Plugin Name:       Block U Plugin
 * Description:       Plugin for the blocks course.
 * Requires PHP:      7.0
 * Author:            Molke
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blocks-u
 *
 */
include_once('php/metabox.php');
include_once('php/templates.php');
include_once('php/patterns.php');
include_once('php/filters.php');
function blocks_u_plugin_enqueue_assets() {

    $asset_file = include(plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_enqueue_script( 'blocks-u-plugin-script', plugins_url('build/index.js', __FILE__), $asset_file['dependencies'], $asset_file['version']);
    
    /* wp_enqueue_style( 'blocks-u-plugin-style', plugins_url('build/index.css', __FILE__) ); */
}

add_action( 'enqueue_block_editor_assets', 'blocks_u_plugin_enqueue_assets' );