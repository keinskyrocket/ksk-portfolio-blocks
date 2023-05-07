<?php
/**
 * Plugin Name:       KSK Portfolio Blocks
 * Description:       This is a custom block plugin for KSK Portfolio website.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ksk-portfolio-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_ksk_portfolio_blocks_block_init() {
	register_block_type( __DIR__ . '/build/wrapper' );
	register_block_type( __DIR__ . '/build/cta' );
	register_block_type( __DIR__ . '/build/chart-bar' );
}
add_action( 'init', 'create_block_ksk_portfolio_blocks_block_init' );
