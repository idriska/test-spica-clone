import simpleGit from "simple-git";
import * as child_process from "child_process"

export default async function (req, res) {
	const git = simpleGit({baseDir: process.cwd(), binary: "git", maxConcurrentProcesses: 6});
	git.init();
	await git.remote("rm","origin");
	await git.remote("add","origin","https://htuna07:<pat_here>/htuna07/congenial-garbanzo.git")
	await git.add(".");
	await git.commit("commit from master");
	await git.push(["origin","master"])
	return 
}