describe('FileReader', function() {
	var FileReader;

	beforeEach(function() {
		module('ngFileReader');

		inject(function(_FileReader_) {
			FileReader = _FileReader_;
		});
	});

	it('should return factory with functions', function() {
		expect(FileReader).toBeDefined();
	});
});