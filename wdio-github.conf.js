const sharedConfig = require("./wdio-shared.conf");

exports.config = {
	...sharedConfig,
	...{
		capabilities: [
			{
				maxInstances: 3,
				browserName: 'MicrosoftEdge',
				'ms:edgeOptions': {
					args: ['--start-maximized']
				},
			}
		]
	}
}