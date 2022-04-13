export default function ({ socket, pool }, message) {
	console.log("CON",message.name,socket.id); // name is the event name that has been triggered
}

export function message({ socket, pool }, message) {
	console.log("MESS",message.name,socket.id); // name is the event name that has been triggered
}