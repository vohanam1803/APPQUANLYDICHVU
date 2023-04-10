module.exports = function (io) {
	var cache = require('memory-cache');
	io.on('connect', (socket) => {
		socket.on('disconnect', () => {
			var temp = cache.get("userlist");
			if (temp != null) {
				var itemKey = "";
				for (const [key, value] of Object.entries(temp)) {
					if (socket.id == value) {
						itemKey = key;
						break;
					}
				}
				if (itemKey != "") {
					delete temp[itemKey];
				}
			}
		});

		socket.on('chat message', (data) => {
			var temp = cache.get("userlist");
			var socketIdList = Object.values(temp);//.slice(0, 2);
			io.to(socketIdList).emit('chat message', data);
		});

		socket.on('adduser', (data) => {
			var temp = cache.get("userlist");
			if (temp == null) {
				temp = new Map();
				cache.put("userlist", temp)
			}
			if (!temp.hasOwnProperty(data)) {
				temp[data] = socket.id;
			}
		});
	});
}
