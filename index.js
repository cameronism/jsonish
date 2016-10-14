var beautify = require('js-beautify').js_beautify;

function double(s) {
	return s.replace(/['`\u2018\u2019\u201c\u201d]/g, '"');
}

function jsonish(s, verbose) {
	if (verbose) {
		try {
			JSON.parse(s);
		} catch (e) {
			console.warn(e);
		}
	}
	return beautify(JSON.stringify(eval('(' + double(s) + ')')));
}

module.exports = jsonish;

if (require.main === module) {
	var arg = (process.argv.length > 2 && process.argv[2]) || '';
	var quiet = /^(-q|--q)/.test(arg);
	require('get-stdin')().then(function(s) {
		console.log(jsonish(s, !quiet));
	});
}
