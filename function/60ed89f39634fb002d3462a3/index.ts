import * as DB from "@spica-devkit/database";

export async function test(){
	await DB.database();
	return "ME";
}