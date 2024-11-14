let attachTaskButton: HTMLButtonElement | null = null;
let searchTaskInput: HTMLInputElement | null = null;
let searchResultsModal: HTMLElement | null = null;
let closeSearchTasksResultsModalBtn: HTMLButtonElement | null = null;

window.addEventListener("DOMContentLoaded", () => {
	searchTaskInput = document.getElementById(
		"search-task-input"
	) as HTMLInputElement;

	attachTaskButton = document.getElementById(
		"attach-task"
	) as HTMLButtonElement;

	searchResultsModal = document.getElementById(
		"search-results-modal"
	) as HTMLElement;

	closeSearchTasksResultsModalBtn = document.getElementById(
		"close-search-results-modal-btn"
	) as HTMLButtonElement;

	// listen to the click on the search tasks button then focus on the such tasks input
	if (attachTaskButton) {
		attachTaskButton.addEventListener("click", () => {
			focusOnSearchTasksInput();
		});
	}

	// listen for when the search tasks input gains focus
	if (searchTaskInput) {
		searchTaskInput.addEventListener("focus", () => {
			openSearchTasksResultsModal();
		});
	}

	// listen for when a user wants to close the search results modal
	if (closeSearchTasksResultsModalBtn) {
		closeSearchTasksResultsModalBtn.addEventListener("click", () => {
			closeSearchTasksResultsModal();
		});
	}
});

window.addEventListener("keypress", (e: KeyboardEvent) => {
	if (e.ctrlKey && e.key === "k") {
		focusOnSearchTasksInput();
	}
});

// listen for when use presses the esc key and close any open modals
window.addEventListener("keydown", (e: KeyboardEvent) => {
	if (e.key === "Escape") {
		closeSearchTasksResultsModal();
	}
});

const focusOnSearchTasksInput = (): void => {
	if (searchTaskInput) {
		searchTaskInput?.focus();
	}
};

const looseFocusOnSearchTasksInput = (): void => {
	if (searchTaskInput) {
		searchTaskInput?.blur();
	}
};

const openSearchTasksResultsModal = (): void => {
	if (searchResultsModal) {
		searchResultsModal.classList.remove("invisible");
		searchResultsModal.classList.add("visible");
	}
};

const closeSearchTasksResultsModal = (): void => {
	if (searchResultsModal) {
		searchResultsModal.classList.add("invisible");
		searchResultsModal.classList.remove("visible");

		looseFocusOnSearchTasksInput();
	}
};
