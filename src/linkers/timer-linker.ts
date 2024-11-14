type QuickTimeButton = {
	msAdded: number;
	text: string;
};
const quickTimeButtons: QuickTimeButton[] = [
	{
		msAdded: 900,
		text: "15",
	},
	{
		msAdded: 1800,
		text: "30",
	},
	{
		msAdded: 3600,
		text: "1h",
	},
];

let quickTimerSelecContainer: HTMLElement | null = document.querySelector(
	"#quick-timers-select"
);
let timerToggle: HTMLButtonElement | null =
	document.querySelector("#timer-toggle");
let timerWindow: HTMLElement | null = document.querySelector("#timer-window");
let timerResetBtn: HTMLButtonElement | null =
	document.querySelector("#timer-reset");
let addMinuteBtn: HTMLButtonElement | null =
	document.querySelector("#add-minute-btn");
let subtractMinuteBtn: HTMLButtonElement | null = document.querySelector(
	"#subtract-minute-btn"
);

let currentSeconds: number = 300; // 5 minutes
let timerStarted: boolean = false;
let interval: number;

const handleQuickTimerClicked = (newMs: number) => {
	updateTimer(newMs);
	updateTimeDisplay();
};

const updateTimer = (newSeconds: number) => {
	stopTimer();
	currentSeconds = newSeconds;
};

const startTimer = () => {
	if (!timerStarted) {
		timerStarted = true;
		interval = setInterval(() => {
			if (currentSeconds > 0) {
				currentSeconds--;
				updateTimeDisplay();
			} else {
				stopTimer();
			}
		}, 1000);
	}
};

const stopTimer = () => {
	timerStarted = false;
	clearInterval(interval);
};

const toggleTimer = () => {
	if (timerStarted) {
		stopTimer();
	} else {
		startTimer();
	}
};

const addOneMinute = () => {
	if (currentSeconds == 3600) {
		return;
	}

	currentSeconds += 60;
	updateTimeDisplay();
};

const subtractOneMinute = () => {
	if (currentSeconds == 0) {
		return;
	}

	currentSeconds -= 60;
	updateTimeDisplay();
};

const resetTimer = () => {
	timerStarted = false;
	currentSeconds = 300;

	stopTimer();
	updateTimeDisplay();
};

const updateTimeDisplay = () => {
	const minutes: number = Math.floor(currentSeconds / 60);
	const seconds: number = currentSeconds % 60;
	const displayTime: string = `${minutes < 10 ? "0" + minutes : minutes}:${
		seconds < 10 ? "0" + seconds : seconds
	}`;

	if (timerWindow) timerWindow.innerText = displayTime;
};

const createButton = (button: QuickTimeButton) => {
	const quickTimerButton: HTMLButtonElement =
		document.createElement("button");
	quickTimerButton.classList.add(
		"rounded-md",
		"size-10",
		"text-center",
		"bg-primary"
	);
	quickTimerButton.textContent = button.text;
	quickTimerButton.addEventListener("click", () => {
		handleQuickTimerClicked(button.msAdded);
	});
	return quickTimerButton;
};

quickTimeButtons.forEach((button) => {
	const quickTimerButton = createButton(button);
	quickTimerSelecContainer?.appendChild(quickTimerButton);
});

timerToggle?.addEventListener("click", toggleTimer);
timerResetBtn?.addEventListener("click", resetTimer);
addMinuteBtn?.addEventListener("click", addOneMinute);
subtractMinuteBtn?.addEventListener("click", subtractOneMinute);
