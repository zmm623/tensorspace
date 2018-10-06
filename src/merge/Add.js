/**
 * @author syt123450 / https://github.com/syt123450
 */

import { MergedLayer3d } from "../layer/abstract/MergedLayer3d";

/**
 * Performs element-wise addition on layers.
 *
 * @param layerList, input a list of layers.
 * @param config, user's config for add function
 * @constructor
 */

function Add( layerList, config ) {

	let operatorType = "add";

	validate( layerList );

	return createMergedLayer( layerList, config );

	function validate( layerList ) {

		let depth;

		if ( layerList.length > 0 ) {

			depth = layerList[ 0 ].layerDimension;

		} else {

			console.error( "Merge Layer missing elements." );

		}

		for ( let i = 0; i < layerList.length; i ++ ) {

			if ( layerList[ i ].layerDimension !== depth ) {

				console.error( "Can not add layer with different depth." );

			}

		}

	}

	function createMergedLayer( layerList, userConfig ) {

		if ( layerList[ 0 ].layerDimension === 1 ) {

		} else if ( layerList[ 0 ].layerDimension === 2 ) {

		} else if ( layerList[ 0 ].layerDimension === 3 ) {

			return new MergedLayer3d( {

				operator: operatorType,
				mergedElements: layerList,
				userConfig: userConfig

			} );

		} else {

			console.error( "Do not support layer add operation more than 4 dimension." );

		}

	}

}

export { Add };