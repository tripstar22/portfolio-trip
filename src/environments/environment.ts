// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	firebase: {
		apiKey: 'AIzaSyC5pBmYKhO6tpVq7jJ7oHfkJTlsDCIiDLQ',
		authDomain: 'portfolio-ccfe7.firebaseapp.com',
		databaseURL: 'https://portfolio-ccfe7.firebaseio.com',
		projectId: 'portfolio-ccfe7',
		storageBucket: 'portfolio-ccfe7.appspot.com',
		messagingSenderId: '414511297502'
	}
};
