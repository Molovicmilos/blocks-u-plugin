<?php
function blocks_u_plugin_register_pattern_cat() {
    register_block_pattern_category( 'blocks-u', array(
        'label' => __('Blocks U', 'blocks-u')
    ));
}

add_action( 'init', 'blocks_u_plugin_register_pattern_cat' );

function blocks_u_plugin_register_pattern() {
    register_block_pattern( 'blocks-u/my-patterns', array(
        'title' => __('My Pattern', 'blocks-u'),
        'description' => __('Some description', 'blocks-u'),
        'categories' => array('blocks-u'),
        'keywords' => array('my pattern'),
        'content' => '<!-- wp:columns --><div class="wp-block-columns"><!-- wp:column {"width":"33.33%"} --><div class="wp-block-column" style="flex-basis:33.33%"><!-- wp:heading --><h2 id="our-team">Our Team</h2><!-- /wp:heading --><!-- wp:paragraph --><p>wrefregregreg</p><!-- /wp:paragraph --></div><!-- /wp:column --><!-- wp:column {"width":"66.66%"} --><div class="wp-block-column" style="flex-basis:66.66%"><!-- wp:blocks-u/team-members --><div class="wp-block-blocks-u-team-members has-2-columns"><!-- wp:blocks-u/team-member --><div class="wp-block-blocks-u-team-member"></div><!-- /wp:blocks-u/team-member --><!-- wp:blocks-u/team-member --><div class="wp-block-blocks-u-team-member"></div><!-- /wp:blocks-u/team-member --><!-- wp:blocks-u/team-member --><div class="wp-block-blocks-u-team-member"></div><!-- /wp:blocks-u/team-member --></div><!-- /wp:blocks-u/team-members --></div><!-- /wp:column --></div><!-- /wp:columns -->'
    ));
}
add_action( 'init', 'blocks_u_plugin_register_pattern' );