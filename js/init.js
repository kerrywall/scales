$('document').ready(function() {
	// hide the hidey things
	$('.chooseKey').hide();
	$('.result').hide();
	$('.reset').hide();
});

	$('.mode').on('click', function(e) {
		// determine which scale the user wants
		var chosenMode = e.target;
			mode = e.target.id,
			modeFull = $(e.target).attr('name');

		// assign it a class of "selected"

		$('.mode').removeClass('selected');
		$(chosenMode).addClass('selected');

		// prompt the user to choose a key for the scale

		$('.selectedScale').text(modeFull);
		$('.chooseKey').show();
		$('.chooseScale').hide();

			// determine which key the user wants

			$('.key').on('click', function(k) {

				var note = k.target.id;

				// assign IT a class of "selected"

				$('.key').removeClass('selected');
				$(k.target).addClass('selected');

				// generate the scale

				function makeScale(note, mode) {
					var generatedScale = teoria.note(note).scale(mode),
						generatedNotes = generatedScale.simple().join(' '),
						scaleRelationship = generatedScale.interval('P1')['scale'].join(' ');

						$('.chooseKey').hide();
						$('.result').show();

							$('.scaleName').text(note + ' ' + modeFull);
							$('.scaleNotes').text(generatedNotes);
							$('.scaleIntervals').text(scaleRelationship);

							$('.reset').show();

							$('.reset').on('click', function() {
								$('.chooseKey').hide();
								$('.result').hide();
								$('.reset').hide();
								$('.chooseScale').show();
							});

				}

				// show the scale

				makeScale(note, mode);

			});
	});