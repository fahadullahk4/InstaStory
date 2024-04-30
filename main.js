var arr = [
	{
		dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		story:
			"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		dp: "https://images.unsplash.com/photo-1495846101638-bd8e9a23f8ee?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		story:
			"https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		story:
			"https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		dp: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		story:
			"https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		dp: "https://images.unsplash.com/photo-1494919138911-02d403edd88d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		story:
			"https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

var stories = document.querySelector(".stories");
var fullScreen = document.querySelector(".full-screen");
var bar = document.querySelector(".progress-bar");
var clutter = "";
let progressInterval;
arr.forEach((elem, idx) => {
	clutter += `<div class="story">
						<img id = "${idx}" src="${elem.dp}" alt="" />
					</div>`;
});
stories.innerHTML = clutter;

stories.addEventListener("click", (dets) => {
	fullScreen.style.display = "block";
	fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`;

	bar.style.width = "0%";
	startProgressBar();
	setTimeout(() => {
		fullScreen.style.display = "none";
	}, 2500);
});

function startProgressBar() {
	let width = 0;
	progressInterval = setInterval(() => {
		if (width >= 100) {
			clearInterval(progressInterval);
		} else {
			width++;
			bar.style.width = width + "%";
		}
	}, 22.5);
}
