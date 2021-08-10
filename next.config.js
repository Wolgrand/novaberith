const withPWA = require('next-pwa');

module.exports = withPWA({
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true
	},
	images: {
		domains: ['medium.com', 'cdn-images-1.medium.com', 'i.scdn.co'],
	}
});
