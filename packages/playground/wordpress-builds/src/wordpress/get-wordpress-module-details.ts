
// @ts-ignore
import url_nightly from './wp-nightly.zip?url';
// @ts-ignore
import url_beta from './wp-beta.zip?url';
// @ts-ignore
import url_6_6 from './wp-6.6.zip?url';
// @ts-ignore
import url_6_5 from './wp-6.5.zip?url';
// @ts-ignore
import url_6_4 from './wp-6.4.zip?url';
// @ts-ignore
import url_6_3 from './wp-6.3.zip?url';

/**
 * This file was auto generated by packages/playground/wordpress-builds/build/build.js
 * DO NOT CHANGE MANUALLY!
 * This file must statically exists in the project because of the way
 * vite resolves imports.
 */
export function getWordPressModuleDetails(wpVersion: string = "6.6"): { size: number, url: string } {
	switch (wpVersion) {
		
		case 'nightly':
			/** @ts-ignore */
			return {
				size: 18651516,
				url: url_nightly,
			};
			
		case 'beta':
			/** @ts-ignore */
			return {
				size: 18381300,
				url: url_beta,
			};
			
		case '6.6':
			/** @ts-ignore */
			return {
				size: 18382440,
				url: url_6_6,
			};
			
		case '6.5':
			/** @ts-ignore */
			return {
				size: 4887384,
				url: url_6_5,
			};
			
		case '6.4':
			/** @ts-ignore */
			return {
				size: 4774235,
				url: url_6_4,
			};
			
		case '6.3':
			/** @ts-ignore */
			return {
				size: 3595053,
				url: url_6_3,
			};
			

	}
	throw new Error('Unsupported WordPress module: ' + wpVersion);
}
