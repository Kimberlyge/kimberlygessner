export default function () {
	// Set velocity.js defaults
	this.setDefault({
		duration: 450,
		easing: [0.860, 0.000, 0.070, 1.000]
	});

	// to detail page
	this.transition(
		this.toRoute('detail'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	//between detail pages
	this.transition(
		this.fromRoute('detail/'),
		this.toRoute('detail/'),
		this.use('toUp'),
		this.reverse('toDown')
	);

	// to about page
	this.transition(
		this.toRoute('about'),
		this.use('toRight'),
		this.reverse('toLeft')
	);
}
