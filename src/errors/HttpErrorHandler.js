function HttpErrorHandler(error, req, res, next) {
	if (error.message === 'Unable to find a registered deal') {
		return res.status(200).json({ message: error.message });
	}

	if (error.message === 'Unable to find a registered order') {
		return res.status(200).json({ message: error.message });
	}

    return res.status(500).json({ message: 'Internal server error' });
}

module.exports = HttpErrorHandler;