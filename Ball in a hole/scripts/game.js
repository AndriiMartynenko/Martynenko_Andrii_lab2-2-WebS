class GameRules {
	constructor() {


	}

	ballInHole() {
		let hminx = hole.x - hole.radius * hole.difficulty;
		let hminy = hole.y - hole.radius * hole.difficulty;
		let hmaxx = hole.x + hole.radius * hole.difficulty;
		let hmaxy = hole.y + hole.radius * hole.difficulty;

		let bminx = ball.x - ball.radius;
		let bminy = ball.y - ball.radius;
		let bmaxx = ball.x + ball.radius;
		let bmaxy = ball.y + ball.radius;

		return bminx >= hminx && bminy >= hminy && bmaxx <= hmaxx && bmaxy <= hmaxy;
	}

	refreshTimer() {
		document.getElementById("timer").innerHTML = this.msToTime(game.timepassed);
	}

	msToTime(s) {
		var ms = s % 1000;
		s = (s - ms) / 1000;
		var secs = s % 60;
		s = (s - secs) / 60;
		var mins = s % 60;
		secs = secs < 10 ? "0" + secs : secs;
		mins = mins < 10 ? "0" + mins : mins;
		return mins + ":" + secs + ":" + ms;
	}

}